import express from "express";
import dotenv from "dotenv";
import * as clerk from "@clerk/express";
import session from "cookie-session";
import crypto from "node:crypto";
import cors from "cors";
import path from "path";
import dns from "node:dns";
import { createServer } from "http";

// Prioritize IPv4 DNS lookups to fix querySrv ECONNREFUSED on Windows for MongoDB Atlas
dns.setDefaultResultOrder("ipv4first");

import { MongooseConnect, UserDBHandler } from "./database.js";
import { UserStatsService } from "./userStatsService.js";
import { CodeRunner } from "./codeRun.js";
import { ProblemDBHandler } from "./problemDatabase.js";
import { ArenaDBHandler } from "./arenaDatabase.js";
import { ArenaSocketHandler } from "./arenaSocket.js";
import { AIAssistanceService } from "./aiAssistance.js";
import { AptitudeDBHandler } from "./aptitudeDatabase.js";
import { seedAptitudeDatabase } from "./seedAptitude.js";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config({ path: path.join(__dirname, '../../.env') });
process.env.PORT = process.env.PORT || '8080';

const app = express();
const server = createServer(app);

const arenaSocketHandler = new ArenaSocketHandler(server);

const userStatsService = new UserStatsService(arenaSocketHandler);

const aiAssistanceService = new AIAssistanceService();

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));

app.use(session({
    secret: crypto.randomBytes(32),
    maxAge: 24 * 60 * 60 * 1000
}));

const codeRunnerHandler = new CodeRunner();

const problemDBHandler = new ProblemDBHandler(userStatsService);

const arenaDBHandler = new ArenaDBHandler(userStatsService);

const aptitudeDBHandler = new AptitudeDBHandler();

MongooseConnect.connect(process.env.MONGO_DB_URL);
const uDBHandler = new UserDBHandler();

// Run migrations and seeder only after MongoDB connection is established
mongoose.connection.once('open', async () => {
    console.log("[Server] MongoDB connected successfully. Running background tasks...");
    await uDBHandler.migrateUsersStats().catch(console.error);
    await userStatsService.migrateUsersForRealWorld().catch(console.error);
    try {
        const count = await AptitudeDBHandler.Topics.countDocuments();
        if (count === 0) {
            console.log("[Server] Seeding Aptitude topics and question sets...");
            await seedAptitudeDatabase().catch(console.error);
        }
    } catch (err) {
        console.warn("[Aptitude] Count check deferred:", err.message);
    }
});

// Start periodic 30-minute match timeout enforcement (every 5 minutes)
setInterval(async () => {
    try {
        const cleanedCount = await userStatsService.cleanupStaleMatches();
        if (cleanedCount > 0) {
            console.log(`🔧 [Server] Periodic cleanup: ended ${cleanedCount} matches that exceeded 30-minute limit`);
        }
    } catch (error) {
        console.error('❌ [Server] Periodic match cleanup error:', error);
    }
}, 5 * 60 * 1000); // Every 5 minutes

// authentication -----------------
const hasClerkKeys = Boolean(process.env.CLERK_SECRET_KEY && process.env.CLERK_PUBLISHABLE_KEY);

const requireAuth = (options = {}) => {
    if (hasClerkKeys) {
        return clerk.requireAuth(options);
    }
    return (req, res, next) => {
        if (!req.auth) req.auth = { userId: req.headers['x-user-id'] || 'dev_user' };
        next();
    };
};

if (hasClerkKeys) {
    app.use(clerk.clerkMiddleware());
} else {
    app.use((req, res, next) => {
        if (!req.auth) req.auth = { userId: req.headers['x-user-id'] || 'dev_user' };
        next();
    });
}

// Health check endpoint (always public and verified first)
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// base entry point of server
app.use('/public', express.static(path.join(__dirname, '../client/public')));

app.use('/private', requireAuth({ signInUrl: process.env.CLERK_SIGN_IN_URL, signUpUrl: process.env.CLERK_SIGN_UP_URL }),
                    uDBHandler.middleware_userAuth.bind(uDBHandler),
                    express.static(path.join(__dirname, '../client/private')));

app.use('/api', express.json());

app.get('/api/incrank/:value/:set', requireAuth(), uDBHandler.endpoint_incrementUserRank.bind(uDBHandler));
app.get('/api/incstreak/:value/:set', requireAuth(), userStatsService.endpoint_incrementStreakCount.bind(userStatsService));
app.get('/api/inccontest/:value/:set', requireAuth(), uDBHandler.endpoint_incrementContestsCount.bind(uDBHandler));

app.get('/api/problems', problemDBHandler.endpoint_getProblems.bind(problemDBHandler));
app.get('/api/problems/:problemId', problemDBHandler.endpoint_getProblem.bind(problemDBHandler));
app.post('/api/problems/:problemId/submit', 
    express.json({ limit: '10mb' }), 
    requireAuth(), 
    problemDBHandler.endpoint_submitSolution.bind(problemDBHandler)
);

// User solved problems endpoint
app.get('/api/user/solved-problems', 
    requireAuth(), 
    problemDBHandler.endpoint_getUserSolvedProblems.bind(problemDBHandler)
);

// User stats endpoints
app.get('/api/userdata', requireAuth(), uDBHandler.endpoint_userData.bind(uDBHandler));

// New unified stats and leaderboard endpoints
app.get('/api/user/stats', requireAuth(), userStatsService.endpoint_getUserStats.bind(userStatsService));
app.get('/api/user/rank-position', requireAuth(), userStatsService.endpoint_getUserRankPosition.bind(userStatsService));
app.get('/api/leaderboard', userStatsService.endpoint_getLeaderboard.bind(userStatsService));
app.post('/api/user/problem-solved', 
    express.json(), 
    requireAuth(), 
    userStatsService.endpoint_updateOnProblemSolved.bind(userStatsService)
);

// Arena endpoints - now unified through UserStatsService
app.get('/api/arena/stats', requireAuth(), userStatsService.endpoint_getArenaStats.bind(userStatsService));
app.get('/api/arena/leaderboard', userStatsService.endpoint_getArenaLeaderboard.bind(userStatsService));
app.get('/api/arena/system-stats', userStatsService.endpoint_getArenaSystemStats.bind(userStatsService));

app.get('/api/arena/player-stats/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const stats = await arenaDBHandler.getPlayerStats(userId);
        res.json({ success: true, stats });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to get player stats' });
    }
});

// Aptitude Arena endpoints
app.get('/api/aptitude/categories', aptitudeDBHandler.endpoint_getCategories.bind(aptitudeDBHandler));
app.get('/api/aptitude/topics/:category', aptitudeDBHandler.endpoint_getTopics.bind(aptitudeDBHandler));
app.get('/api/aptitude/topic/:topicId', aptitudeDBHandler.endpoint_getTopicDetail.bind(aptitudeDBHandler));
app.post('/api/aptitude/topic/mark-read', aptitudeDBHandler.endpoint_markCheatSheetRead.bind(aptitudeDBHandler));
app.get('/api/aptitude/exam/:topicId/:type/:setNumber', aptitudeDBHandler.endpoint_getQuestions.bind(aptitudeDBHandler));
app.post('/api/aptitude/submit', aptitudeDBHandler.endpoint_submitExam.bind(aptitudeDBHandler));
app.get('/api/aptitude/leaderboard', aptitudeDBHandler.endpoint_getLeaderboard.bind(aptitudeDBHandler));
app.get('/api/aptitude/user-progress', aptitudeDBHandler.endpoint_getUserProgress.bind(aptitudeDBHandler));

// AI Assistance endpoints
app.post('/api/ai/analyze-code', express.json(), async (req, res) => {
    try {
        const { code, language, problem, currentLine } = req.body;
        const analysis = await aiAssistanceService.analyzeCodeLine(code, language, problem, currentLine);
        res.json({ success: true, analysis });
    } catch (error) {
        console.error('AI analyze-code error:', error);
        res.status(500).json({ success: false, error: 'AI analysis failed' });
    }
});

app.get('/api/ai/language-tips/:language', async (req, res) => {
    try {
        const { language } = req.params;
        const tips = aiAssistanceService.getLanguageTips(language);
        res.json({ success: true, tips });
    } catch (error) {
        console.error('AI language-tips error:', error);
        res.status(500).json({ success: false, error: 'Failed to get language tips' });
    }
});

app.post('/api/ai/real-time-analysis', express.json(), async (req, res) => {
    try {
        const { code, currentLine, currentLineText, language, problem } = req.body;
        const analysis = await aiAssistanceService.performRealTimeAnalysis(code, currentLine, currentLineText, language, problem);
        res.json(analysis);
    } catch (error) {
        console.error('AI real-time-analysis error:', error);
        res.status(500).json({ success: false, error: 'Real-time analysis failed' });
    }
});

app.post('/api/ai/analyze-test-failure', express.json(), async (req, res) => {
    try {
        const { code, language, problem, testResults } = req.body;
        const analysis = await aiAssistanceService.analyzeTestCaseFailure(code, language, problem, testResults);
        res.json(analysis);
    } catch (error) {
        console.error('AI analyze-test-failure error:', error);
        res.status(500).json({ success: false, error: 'Test failure analysis failed' });
    }
});

app.post('/api/ai/suggest-fix', express.json(), async (req, res) => {
    try {
        const { code, language, errorMessage } = req.body;
        const suggestion = await aiAssistanceService.suggestFix(code, language, errorMessage);
        res.json({ success: true, suggestion });
    } catch (error) {
        console.error('AI suggest-fix error:', error);
        res.status(500).json({ success: false, error: 'Fix suggestion failed' });
    }
});

app.post('/api/ai/contextual-help', express.json(), async (req, res) => {
    try {
        const { line, token, cursor, language, problem } = req.body;
        const help = await aiAssistanceService.getContextualHelp(line, token, cursor, language, problem);
        res.json(help);
    } catch (error) {
        console.error('AI contextual-help error:', error);
        res.status(500).json({ success: false, error: 'Contextual help failed' });
    }
});

app.post('/api/ai/code-completion', express.json(), async (req, res) => {
    try {
        const { code, language, cursorLine, cursorColumn } = req.body;
        const completions = await aiAssistanceService.getCodeCompletion(code, language, cursorLine, cursorColumn);
        res.json({ success: true, completions });
    } catch (error) {
        console.error('AI code-completion error:', error);
        res.status(500).json({ success: false, error: 'Code completion failed' });
    }
});

app.post('/api/run/:lang', express.json(), codeRunnerHandler.endpoint.bind(codeRunnerHandler));

// main redirect
app.get('/', (req, res) => {
    res.redirect('/public/LandingPage/');
});

// Landing page direct access
app.get('/LandingPage', (req, res) => {
    res.redirect('/public/LandingPage/');
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error('[Server Error]:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
});

// http listen on PORT
server.listen(+process.env.PORT, () => {
    console.log(`Server live at http://localhost:${process.env.PORT}`);
});