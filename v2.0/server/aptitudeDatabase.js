import mongoose from "mongoose";
import crypto from "node:crypto";
import { UserDBHandler } from "./database.js";
import {
    QUANTITATIVE_TOPICS,
    LOGICAL_TOPICS,
    VERBAL_TOPICS,
    SPEED_TIME_DISTANCE_CHEATSHEET,
    generateQuestionsForSet
} from "./seedAptitude.js";

// ==========================================
// SCHEMAS
// ==========================================

const aptitudeTopicSchema = new mongoose.Schema({
    topicId: { type: String, unique: true, required: true },
    category: { type: String, enum: ['quantitative', 'logical', 'verbal'], required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, default: 0 },
    icon: { type: String, default: "📘" },
    totalPracticeSets: { type: Number, default: 4 },
    totalMockSets: { type: Number, default: 2 },
    questionsPerSet: { type: Number, default: 30 },
    cheatSheet: {
        title: String,
        content: String,
        formulas: [{ situation: String, formula: String, condition: String }],
        shortcuts: [String],
        faqs: [{ question: String, answer: String }]
    },
    createdAt: { type: Date, default: Date.now }
});

const aptitudeQuestionSchema = new mongoose.Schema({
    questionId: { type: String, unique: true, required: true },
    topicId: { type: String, required: true, index: true },
    category: { type: String, required: true },
    type: { type: String, enum: ['practice', 'mock'], required: true },
    setNumber: { type: Number, required: true },
    questionNumber: { type: Number, required: true },
    question: { type: String, required: true },
    options: [{
        id: { type: String, required: true },
        text: { type: String, required: true }
    }],
    correctOption: { type: String, required: true },
    explanation: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' }
});

aptitudeQuestionSchema.index({ topicId: 1, type: 1, setNumber: 1 });

const aptitudeUserProgressSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    topicId: { type: String, required: true },
    category: { type: String, required: true },
    completedSets: [{
        setNumber: { type: Number, required: true },
        type: { type: String, enum: ['practice', 'mock'], required: true },
        passed: { type: Boolean, default: false },
        score: { type: Number, default: 0 },
        percentage: { type: Number, default: 0 },
        completedAt: { type: Date, default: Date.now }
    }],
    unlockedPracticeSets: { type: [Number], default: [1] },
    unlockedMockSets: { type: [Number], default: [1, 2] },
    cheatSheetRead: { type: Boolean, default: false },
    lastAttemptAt: { type: Date, default: Date.now }
});

aptitudeUserProgressSchema.index({ userId: 1, topicId: 1 }, { unique: true });

const aptitudeSubmissionSchema = new mongoose.Schema({
    submissionId: { type: String, unique: true, required: true },
    userId: { type: String, required: true, index: true },
    username: { type: String, default: "Anonymous" },
    topicId: { type: String, required: true, index: true },
    category: { type: String, required: true },
    type: { type: String, enum: ['practice', 'mock'], required: true },
    setNumber: { type: Number, required: true },
    totalQuestions: { type: Number, default: 30 },
    answeredCount: { type: Number, default: 0 },
    correctCount: { type: Number, default: 0 },
    wrongCount: { type: Number, default: 0 },
    unansweredCount: { type: Number, default: 0 },
    negativePenalty: { type: Number, default: 0 },
    tabSwitchViolations: { type: Number, default: 0 },
    tabPenaltyPoints: { type: Number, default: 0 },
    rawScore: { type: Number, default: 0 },
    netScore: { type: Number, default: 0 },
    percentage: { type: Number, default: 0 },
    passed: { type: Boolean, default: false },
    timeTakenSeconds: { type: Number, default: 0 },
    answers: [{
        questionId: String,
        questionNumber: Number,
        selectedOption: String,
        correctOption: String,
        isCorrect: Boolean,
        explanation: String
    }],
    submittedAt: { type: Date, default: Date.now }
});

const aptitudeLeaderboardSchema = new mongoose.Schema({
    submissionId: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, default: "User" },
    topicId: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    type: { type: String, enum: ['practice', 'mock'], required: true },
    setNumber: { type: Number, required: true },
    correctCount: { type: Number, default: 0 },
    wrongCount: { type: Number, default: 0 },
    netScore: { type: Number, required: true },
    percentage: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 },
    timeTakenSeconds: { type: Number, required: true },
    submittedAt: { type: Date, default: Date.now }
});

aptitudeLeaderboardSchema.index({ topicId: 1, type: 1, setNumber: 1, netScore: -1, timeTakenSeconds: 1 });
aptitudeLeaderboardSchema.index({ category: 1, netScore: -1, timeTakenSeconds: 1 });

// ==========================================
// IN-MEMORY FALLBACK REPOSITORY (Senior LLD)
// Guarantees zero downtime in dev or when MongoDB is initializing
// ==========================================
const inMemory = {
    topics: [],
    questionsMap: new Map(), // key: `${topicId}:${type}:${setNumber}`
    progressMap: new Map(),  // key: `${userId}:${topicId}`
    submissions: [],
    leaderboard: []
};

function initInMemoryStore() {
    const allTopics = [
        ...QUANTITATIVE_TOPICS.map(t => ({ ...t, category: 'quantitative' })),
        ...LOGICAL_TOPICS.map(t => ({ ...t, category: 'logical' })),
        ...VERBAL_TOPICS.map(t => ({ ...t, category: 'verbal' }))
    ];

    inMemory.topics = allTopics.map(t => {
        const cheatSheet = t.topicId === "speed-time-and-distance"
            ? SPEED_TIME_DISTANCE_CHEATSHEET
            : {
                title: `${t.title}: Key Concepts, Formulas, and Guidelines`,
                content: `<div class="cheat-section"><h3>Core Concepts: ${t.title}</h3><p>${t.description}</p></div>`,
                formulas: [{ situation: `Fundamental ${t.title} Theorem`, formula: "Core Analytical Principle", condition: "Standard assessment conditions" }],
                shortcuts: ["Read prompt carefully before attempting calculations.", "Eliminate outlier options."],
                faqs: [{ question: `What is the significance of ${t.title}?`, answer: `Standard problem-solving topic in recruitment assessments.` }]
            };

        return {
            ...t,
            totalPracticeSets: 4,
            totalMockSets: 2,
            questionsPerSet: 30,
            cheatSheet
        };
    });

    for (const t of inMemory.topics) {
        for (let s = 1; s <= 4; s++) {
            const key = `${t.topicId}:practice:${s}`;
            inMemory.questionsMap.set(key, generateQuestionsForSet(t, 'practice', s));
        }
        for (let s = 1; s <= 2; s++) {
            const key = `${t.topicId}:mock:${s}`;
            inMemory.questionsMap.set(key, generateQuestionsForSet(t, 'mock', s));
        }
    }
}

initInMemoryStore();

// ==========================================
// CLASS HANDLER
// ==========================================
export class AptitudeDBHandler {
    static Topics = mongoose.model("AptitudeTopic", aptitudeTopicSchema);
    static Questions = mongoose.model("AptitudeQuestion", aptitudeQuestionSchema);
    static Progress = mongoose.model("AptitudeUserProgress", aptitudeUserProgressSchema);
    static Submissions = mongoose.model("AptitudeSubmission", aptitudeSubmissionSchema);
    static Leaderboard = mongoose.model("AptitudeLeaderboard", aptitudeLeaderboardSchema);

    constructor() {
        this.PASSING_PERCENTAGE = 80.0;
        this.NEGATIVE_MARK_PER_QUESTION = 0.25;
        this.TAB_SWITCH_FREE_WARNINGS = 2;
        this.TAB_SWITCH_PENALTY_PER_EXCESS = 0.5;
    }

    isMongoActive() {
        return mongoose.connection && mongoose.connection.readyState === 1;
    }

    async getAuthUser(req) {
        const userId = req.auth?.userId || req.headers['x-user-id'] || req.session?.userId || "user_student";
        let username = "Student";
        if (this.isMongoActive()) {
            try {
                const user = await UserDBHandler.Users.findOne({ userID: userId });
                if (user?.name) username = user.name;
            } catch (e) { }
        }
        return { userId, username };
    }

    async endpoint_getCategories(req, res) {
        try {
            const { userId } = await this.getAuthUser(req);
            const categories = [
                {
                    id: "quantitative",
                    name: "Quantitative Aptitude",
                    shortDesc: "Arithmetic, algebra, geometry, speed, distance, probability and data.",
                    icon: "📐",
                    totalTopics: 25
                },
                {
                    id: "logical",
                    name: "Logical Reasoning",
                    shortDesc: "Pattern recognition, clocks, calendar, blood relations and syllogisms.",
                    icon: "🧩",
                    totalTopics: 14
                },
                {
                    id: "verbal",
                    name: "Verbal Ability",
                    shortDesc: "Grammar, vocabulary, sentence correction, spotting errors and idioms.",
                    icon: "📖",
                    totalTopics: 8
                }
            ];

            let progressList = [];
            if (this.isMongoActive()) {
                progressList = await AptitudeDBHandler.Progress.find({ userId });
            } else {
                for (const [key, prog] of inMemory.progressMap.entries()) {
                    if (key.startsWith(`${userId}:`)) progressList.push(prog);
                }
            }

            const progressMap = {};
            for (const p of progressList) {
                if (!progressMap[p.category]) progressMap[p.category] = { completedSets: 0, topicsTouched: 0 };
                progressMap[p.category].topicsTouched++;
                progressMap[p.category].completedSets += (p.completedSets || []).filter(s => s.passed).length;
            }

            const enriched = categories.map(cat => ({
                ...cat,
                completedSets: progressMap[cat.id]?.completedSets || 0,
                topicsPracticed: progressMap[cat.id]?.topicsTouched || 0
            }));

            res.json({ success: true, categories: enriched });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_getCategories error:", error);
            res.status(500).json({ success: false, error: "Failed to fetch categories" });
        }
    }

    async endpoint_getTopics(req, res) {
        try {
            const { category } = req.params;
            const { userId } = await this.getAuthUser(req);

            let topics = [];
            let userProgress = [];

            if (this.isMongoActive()) {
                topics = await AptitudeDBHandler.Topics.find({ category }).sort({ order: 1 });
                if (topics.length === 0) {
                    topics = inMemory.topics.filter(t => t.category === category);
                }
                userProgress = await AptitudeDBHandler.Progress.find({ userId, category });
            } else {
                topics = inMemory.topics.filter(t => t.category === category);
                for (const [key, prog] of inMemory.progressMap.entries()) {
                    if (key.startsWith(`${userId}:`) && prog.category === category) {
                        userProgress.push(prog);
                    }
                }
            }

            const progressByTopic = {};
            for (const p of userProgress) {
                progressByTopic[p.topicId] = p;
            }

            const result = topics.map(topic => {
                const prog = progressByTopic[topic.topicId];
                const unlockedSets = prog?.unlockedPracticeSets || [1];
                const passedSets = (prog?.completedSets || []).filter(s => s.passed).map(s => s.setNumber) || [];
                return {
                    topicId: topic.topicId,
                    title: topic.title,
                    description: topic.description,
                    category: topic.category,
                    icon: topic.icon,
                    order: topic.order,
                    totalPracticeSets: topic.totalPracticeSets || 4,
                    totalMockSets: topic.totalMockSets || 2,
                    unlockedPracticeSets: unlockedSets,
                    passedPracticeSets: passedSets,
                    progressPercentage: Math.round((passedSets.length / (topic.totalPracticeSets || 4)) * 100)
                };
            });

            res.json({ success: true, category, topics: result });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_getTopics error:", error);
            res.status(500).json({ success: false, error: "Failed to fetch topics" });
        }
    }

    async endpoint_getTopicDetail(req, res) {
        try {
            const { topicId } = req.params;
            const { userId } = await this.getAuthUser(req);

            let topic = null;
            let progress = null;

            if (this.isMongoActive()) {
                topic = await AptitudeDBHandler.Topics.findOne({ topicId });
                if (!topic) topic = inMemory.topics.find(t => t.topicId === topicId);
                progress = await AptitudeDBHandler.Progress.findOne({ userId, topicId });
            } else {
                topic = inMemory.topics.find(t => t.topicId === topicId);
                progress = inMemory.progressMap.get(`${userId}:${topicId}`);
            }

            if (!topic) {
                return res.status(404).json({ success: false, error: "Topic not found" });
            }

            if (!progress) {
                progress = {
                    unlockedPracticeSets: [1],
                    unlockedMockSets: [1, 2],
                    completedSets: [],
                    cheatSheetRead: false
                };
            }

            const totalPractice = topic.totalPracticeSets || 4;
            const practiceSets = [];
            for (let i = 1; i <= totalPractice; i++) {
                const isUnlocked = progress.unlockedPracticeSets.includes(i);
                const completion = (progress.completedSets || []).find(s => s.type === 'practice' && s.setNumber === i);
                practiceSets.push({
                    setNumber: i,
                    isUnlocked,
                    isPassed: completion ? completion.passed : false,
                    lastScore: completion ? completion.score : null,
                    lastPercentage: completion ? completion.percentage : null,
                    questionsCount: topic.questionsPerSet || 30
                });
            }

            const totalMocks = topic.totalMockSets || 2;
            const mockSets = [];
            for (let i = 1; i <= totalMocks; i++) {
                const isUnlocked = progress.unlockedMockSets.includes(i);
                const completion = (progress.completedSets || []).find(s => s.type === 'mock' && s.setNumber === i);
                mockSets.push({
                    setNumber: i,
                    isUnlocked,
                    isPassed: completion ? completion.passed : false,
                    lastScore: completion ? completion.score : null,
                    lastPercentage: completion ? completion.percentage : null,
                    questionsCount: topic.questionsPerSet || 30,
                    safeExamMode: true,
                    negativeMarking: this.NEGATIVE_MARK_PER_QUESTION
                });
            }

            res.json({
                success: true,
                topic: {
                    topicId: topic.topicId,
                    title: topic.title,
                    description: topic.description,
                    category: topic.category,
                    order: topic.order,
                    cheatSheet: topic.cheatSheet,
                    practiceSets,
                    mockSets,
                    passingCriteriaPercentage: this.PASSING_PERCENTAGE
                }
            });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_getTopicDetail error:", error);
            res.status(500).json({ success: false, error: "Failed to fetch topic details" });
        }
    }

    async endpoint_markCheatSheetRead(req, res) {
        try {
            const { topicId } = req.body;
            const { userId } = await this.getAuthUser(req);

            if (this.isMongoActive()) {
                await AptitudeDBHandler.Progress.findOneAndUpdate(
                    { userId, topicId },
                    { $set: { cheatSheetRead: true, lastAttemptAt: new Date() } },
                    { upsert: true }
                );
            } else {
                const key = `${userId}:${topicId}`;
                const prog = inMemory.progressMap.get(key) || {
                    userId, topicId, unlockedPracticeSets: [1], unlockedMockSets: [1, 2], completedSets: []
                };
                prog.cheatSheetRead = true;
                inMemory.progressMap.set(key, prog);
            }

            res.json({ success: true, message: "Cheat-sheet marked as read" });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_markCheatSheetRead error:", error);
            res.status(500).json({ success: false, error: "Failed to update cheat-sheet status" });
        }
    }

    async endpoint_getQuestions(req, res) {
        try {
            const { topicId, type, setNumber } = req.params;
            const setNum = parseInt(setNumber, 10);
            const { userId } = await this.getAuthUser(req);

            // Progression Lock Enforcement
            if (type === 'practice' && setNum > 1) {
                let progress = null;
                if (this.isMongoActive()) {
                    progress = await AptitudeDBHandler.Progress.findOne({ userId, topicId });
                } else {
                    progress = inMemory.progressMap.get(`${userId}:${topicId}`);
                }

                if (!progress || !progress.unlockedPracticeSets.includes(setNum)) {
                    return res.status(403).json({
                        success: false,
                        error: `Set ${setNum} is locked. You must score at least ${this.PASSING_PERCENTAGE}% on Set ${setNum - 1} to unlock it.`,
                        locked: true
                    });
                }
            }

            let questions = [];
            if (this.isMongoActive()) {
                questions = await AptitudeDBHandler.Questions.find({ topicId, type, setNumber: setNum }).sort({ questionNumber: 1 });
            }

            if (!questions || questions.length === 0) {
                const key = `${topicId}:${type}:${setNum}`;
                questions = inMemory.questionsMap.get(key) || [];
            }

            if (!questions || questions.length === 0) {
                return res.status(404).json({ success: false, error: "Questions not found for this set" });
            }

            // SECURE: Strip correctOption and explanation to prevent inspect cheating
            const sanitizedQuestions = questions.map(q => ({
                questionId: q.questionId,
                questionNumber: q.questionNumber,
                question: q.question,
                options: q.options,
                difficulty: q.difficulty
            }));

            res.json({
                success: true,
                topicId,
                type,
                setNumber: setNum,
                totalQuestions: sanitizedQuestions.length,
                negativeMarking: this.NEGATIVE_MARK_PER_QUESTION,
                passingPercentage: this.PASSING_PERCENTAGE,
                safeExamMode: type === 'mock',
                questions: sanitizedQuestions
            });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_getQuestions error:", error);
            res.status(500).json({ success: false, error: "Failed to fetch questions" });
        }
    }

    async endpoint_submitExam(req, res) {
        try {
            const {
                topicId,
                type,
                setNumber,
                answers = {},
                timeTakenSeconds = 0,
                tabSwitchViolations = 0
            } = req.body;

            const setNum = parseInt(setNumber, 10);
            const { userId, username } = await this.getAuthUser(req);

            let questions = [];
            if (this.isMongoActive()) {
                questions = await AptitudeDBHandler.Questions.find({ topicId, type, setNumber: setNum }).sort({ questionNumber: 1 });
            }

            if (!questions || questions.length === 0) {
                const key = `${topicId}:${type}:${setNum}`;
                questions = inMemory.questionsMap.get(key) || [];
            }

            if (!questions || questions.length === 0) {
                return res.status(404).json({ success: false, error: "Set questions not found" });
            }

            let correctCount = 0;
            let wrongCount = 0;
            let unansweredCount = 0;
            const detailedAnswers = [];

            for (const q of questions) {
                const userChoice = answers[q.questionId];
                const isAnswered = Boolean(userChoice);
                const isCorrect = isAnswered && userChoice === q.correctOption;

                if (!isAnswered) unansweredCount++;
                else if (isCorrect) correctCount++;
                else wrongCount++;

                detailedAnswers.push({
                    questionId: q.questionId,
                    questionNumber: q.questionNumber,
                    question: q.question,
                    options: q.options,
                    selectedOption: userChoice || null,
                    correctOption: q.correctOption,
                    isCorrect,
                    explanation: q.explanation
                });
            }

            const rawScore = correctCount * 1.0;
            const negativePenalty = wrongCount * this.NEGATIVE_MARK_PER_QUESTION;

            // Safe Exam Mode Tab Penalty (for Mock tests)
            let tabPenaltyPoints = 0;
            if (type === 'mock' && tabSwitchViolations > this.TAB_SWITCH_FREE_WARNINGS) {
                const excess = tabSwitchViolations - this.TAB_SWITCH_FREE_WARNINGS;
                tabPenaltyPoints = excess * this.TAB_SWITCH_PENALTY_PER_EXCESS;
            }

            const netScore = Math.max(0, parseFloat((rawScore - negativePenalty - tabPenaltyPoints).toFixed(2)));
            const percentage = parseFloat(((correctCount / questions.length) * 100).toFixed(1));
            const passed = percentage >= this.PASSING_PERCENTAGE;
            const submissionId = "sub_" + crypto.randomBytes(8).toString("hex");

            const accuracy = (correctCount + wrongCount) > 0 
                ? parseFloat(((correctCount / (correctCount + wrongCount)) * 100).toFixed(1)) 
                : 0;

            const leaderboardEntry = {
                submissionId,
                userId,
                username,
                topicId,
                type,
                setNumber: setNum,
                correctCount,
                wrongCount,
                netScore,
                percentage,
                accuracy,
                timeTakenSeconds,
                submittedAt: new Date()
            };

            // Progress Update & Next Set Unlocking Logic
            let nextSetUnlocked = false;
            let nextSetNumber = null;

            if (this.isMongoActive()) {
                const submission = new AptitudeDBHandler.Submissions({
                    ...leaderboardEntry,
                    totalQuestions: questions.length,
                    answeredCount: correctCount + wrongCount,
                    unansweredCount,
                    negativePenalty,
                    tabSwitchViolations,
                    tabPenaltyPoints,
                    rawScore,
                    passed,
                    answers: detailedAnswers
                });
                await submission.save();

                const lb = new AptitudeDBHandler.Leaderboard(leaderboardEntry);
                await lb.save();

                let progress = await AptitudeDBHandler.Progress.findOne({ userId, topicId });
                if (!progress) {
                    progress = new AptitudeDBHandler.Progress({
                        userId, topicId, completedSets: [], unlockedPracticeSets: [1], unlockedMockSets: [1, 2]
                    });
                }

                const existingIdx = progress.completedSets.findIndex(s => s.type === type && s.setNumber === setNum);
                const setResult = { setNumber: setNum, type, passed, score: netScore, percentage, completedAt: new Date() };

                if (existingIdx >= 0) {
                    if (passed || netScore > progress.completedSets[existingIdx].score) {
                        progress.completedSets[existingIdx] = setResult;
                    }
                } else {
                    progress.completedSets.push(setResult);
                }

                if (type === 'practice' && passed && setNum < 4) {
                    const next = setNum + 1;
                    if (!progress.unlockedPracticeSets.includes(next)) {
                        progress.unlockedPracticeSets.push(next);
                        nextSetUnlocked = true;
                        nextSetNumber = next;
                    }
                }
                progress.lastAttemptAt = new Date();
                await progress.save();
            } else {
                inMemory.submissions.push({ ...leaderboardEntry, answers: detailedAnswers, passed });
                inMemory.leaderboard.push(leaderboardEntry);

                const key = `${userId}:${topicId}`;
                let progress = inMemory.progressMap.get(key) || {
                    userId, topicId, completedSets: [], unlockedPracticeSets: [1], unlockedMockSets: [1, 2]
                };

                const existingIdx = progress.completedSets.findIndex(s => s.type === type && s.setNumber === setNum);
                const setResult = { setNumber: setNum, type, passed, score: netScore, percentage, completedAt: new Date() };

                if (existingIdx >= 0) {
                    if (passed || netScore > progress.completedSets[existingIdx].score) {
                        progress.completedSets[existingIdx] = setResult;
                    }
                } else {
                    progress.completedSets.push(setResult);
                }

                if (type === 'practice' && passed && setNum < 4) {
                    const next = setNum + 1;
                    if (!progress.unlockedPracticeSets.includes(next)) {
                        progress.unlockedPracticeSets.push(next);
                        nextSetUnlocked = true;
                        nextSetNumber = next;
                    }
                }
                inMemory.progressMap.set(key, progress);
            }

            res.json({
                success: true,
                submissionId,
                results: {
                    totalQuestions: questions.length,
                    correctCount,
                    wrongCount,
                    unansweredCount,
                    negativePenalty,
                    tabSwitchViolations,
                    tabPenaltyPoints,
                    rawScore,
                    netScore,
                    percentage,
                    passingPercentage: this.PASSING_PERCENTAGE,
                    passed,
                    timeTakenSeconds,
                    accuracy,
                    nextSetUnlocked,
                    nextSetNumber,
                    requiresReLearn: !passed,
                    reLearnMessage: !passed 
                        ? `You scored ${percentage}%, which is below the required ${this.PASSING_PERCENTAGE}% passing mark. Please review the complete concepts and formulas on the pre-learning page before re-attempting.`
                        : `Congratulations! You scored ${percentage}% (Passing mark: ${this.PASSING_PERCENTAGE}%). Set ${setNum + 1} is now unlocked!`,
                    detailedAnswers
                }
            });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_submitExam error:", error);
            res.status(500).json({ success: false, error: "Failed to submit exam" });
        }
    }

    async endpoint_getLeaderboard(req, res) {
        try {
            const { topicId, type = 'practice', setNumber = 1, limit = 50 } = req.query;
            const setNum = parseInt(setNumber, 10);
            let entries = [];

            if (this.isMongoActive()) {
                const query = {};
                if (topicId) query.topicId = topicId;
                if (type) query.type = type;
                if (setNumber) query.setNumber = setNum;

                entries = await AptitudeDBHandler.Leaderboard.find(query)
                    .sort({ netScore: -1, timeTakenSeconds: 1, submittedAt: 1 })
                    .limit(parseInt(limit, 10));
            } else {
                entries = inMemory.leaderboard.filter(e => 
                    (!topicId || e.topicId === topicId) &&
                    (!type || e.type === type) &&
                    (isNaN(setNum) || e.setNumber === setNum)
                ).sort((a, b) => b.netScore - a.netScore || a.timeTakenSeconds - b.timeTakenSeconds)
                .slice(0, parseInt(limit, 10));
            }

            const ranked = entries.map((entry, index) => ({
                rank: index + 1,
                submissionId: entry.submissionId,
                userId: entry.userId,
                username: entry.username,
                topicId: entry.topicId,
                type: entry.type,
                setNumber: entry.setNumber,
                correctCount: entry.correctCount,
                wrongCount: entry.wrongCount,
                netScore: entry.netScore,
                percentage: entry.percentage,
                accuracy: entry.accuracy,
                timeTakenSeconds: entry.timeTakenSeconds,
                submittedAt: entry.submittedAt
            }));

            res.json({ success: true, leaderboard: ranked });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_getLeaderboard error:", error);
            res.status(500).json({ success: false, error: "Failed to fetch leaderboard" });
        }
    }

    async endpoint_getUserProgress(req, res) {
        try {
            const { userId } = await this.getAuthUser(req);
            let progress = [];
            let submissions = [];

            if (this.isMongoActive()) {
                progress = await AptitudeDBHandler.Progress.find({ userId });
                submissions = await AptitudeDBHandler.Submissions.find({ userId })
                    .sort({ submittedAt: -1 })
                    .limit(20);
            } else {
                for (const [key, prog] of inMemory.progressMap.entries()) {
                    if (key.startsWith(`${userId}:`)) progress.push(prog);
                }
                submissions = inMemory.submissions.filter(s => s.userId === userId).slice(-20);
            }

            res.json({ success: true, progress, recentSubmissions: submissions });
        } catch (error) {
            console.error("[AptitudeDBHandler] endpoint_getUserProgress error:", error);
            res.status(500).json({ success: false, error: "Failed to fetch user progress" });
        }
    }
}
