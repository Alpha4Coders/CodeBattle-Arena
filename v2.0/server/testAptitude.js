import express from "express";
import { AptitudeDBHandler } from "./aptitudeDatabase.js";
import { generateQuestionsForSet, QUANTITATIVE_TOPICS } from "./seedAptitude.js";
import assert from "node:assert";

async function runTests() {
    console.log("=========================================");
    console.log("RUNNING APTITUDE ARENA LOCAL SDE TESTS");
    console.log("=========================================\n");

    const handler = new AptitudeDBHandler();

    // Helper to mock express req & res
    function mockReqRes(params = {}, body = {}, query = {}, headers = {}) {
        const req = {
            params,
            body,
            query,
            headers: { 'x-user-id': 'test_student_01', ...headers },
            auth: { userId: 'test_student_01' }
        };
        let statusCode = 200;
        let responseData = null;
        const res = {
            status: (code) => {
                statusCode = code;
                return res;
            },
            json: (data) => {
                responseData = data;
                return res;
            }
        };
        return { req, res, getResult: () => ({ statusCode, data: responseData }) };
    }

    // TEST 1: Categories endpoint
    console.log("Test 1: GET /api/aptitude/categories");
    {
        const { req, res, getResult } = mockReqRes();
        await handler.endpoint_getCategories(req, res);
        const { statusCode, data } = getResult();
        assert.strictEqual(statusCode, 200, "Status must be 200");
        assert.strictEqual(data.success, true);
        assert.strictEqual(data.categories.length, 3, "Must have 3 categories");
        assert.strictEqual(data.categories[0].id, "quantitative");
        assert.strictEqual(data.categories[0].totalTopics, 25);
        assert.strictEqual(data.categories[1].id, "logical");
        assert.strictEqual(data.categories[1].totalTopics, 14);
        assert.strictEqual(data.categories[2].id, "verbal");
        assert.strictEqual(data.categories[2].totalTopics, 8);
        console.log("✓ Categories endpoint passed: Quantitative (25), Logical (14), Verbal (8)\n");
    }

    // TEST 2: Topics by category (Quantitative, Logical, Verbal)
    console.log("Test 2: GET /api/aptitude/topics/:category");
    {
        const { req: qReq, res: qRes, getResult: qResult } = mockReqRes({ category: "quantitative" });
        await handler.endpoint_getTopics(qReq, qRes);
        const qData = qResult().data;
        assert.strictEqual(qData.topics.length, 25, "Quantitative must have 25 topics");
        assert(qData.topics.some(t => t.topicId === "speed-time-and-distance"), "Must include Speed, Time and Distance");

        const { req: lReq, res: lRes, getResult: lResult } = mockReqRes({ category: "logical" });
        await handler.endpoint_getTopics(lReq, lRes);
        const lData = lResult().data;
        assert.strictEqual(lData.topics.length, 14, "Logical must have 14 topics");

        const { req: vReq, res: vRes, getResult: vResult } = mockReqRes({ category: "verbal" });
        await handler.endpoint_getTopics(vReq, vRes);
        const vData = vResult().data;
        assert.strictEqual(vData.topics.length, 8, "Verbal must have 8 topics");
        console.log("✓ All 47 topics verified across all 3 categories\n");
    }

    // TEST 3: Topic Details & Cheat-sheet for Speed, Time and Distance
    console.log("Test 3: GET /api/aptitude/topic/speed-time-and-distance");
    {
        const { req, res, getResult } = mockReqRes({ topicId: "speed-time-and-distance" });
        await handler.endpoint_getTopicDetail(req, res);
        const { data } = getResult();
        assert.strictEqual(data.success, true);
        assert.strictEqual(data.topic.topicId, "speed-time-and-distance");
        assert(data.topic.cheatSheet.content.includes("Speed = Distance / Time"), "Must contain core formula");
        assert(data.topic.cheatSheet.content.includes("5 / 18"), "Must contain unit conversion factor");
        assert(data.topic.cheatSheet.content.includes("2uv / (u + v)"), "Must contain harmonic mean formula");
        assert.strictEqual(data.topic.practiceSets.length, 4, "Must have 4 practice sets");
        assert.strictEqual(data.topic.practiceSets[0].isUnlocked, true, "Set 1 must be unlocked by default");
        assert.strictEqual(data.topic.practiceSets[1].isUnlocked, false, "Set 2 must be locked initially");
        assert.strictEqual(data.topic.mockSets.length, 2, "Must have 2 mock sets");
        assert.strictEqual(data.topic.mockSets[0].safeExamMode, true, "Mock sets must have Safe Exam Mode active");
        console.log("✓ Topic detail, cheat-sheet, formulas and set lock statuses verified\n");
    }

    // TEST 4: Security Check - Questions endpoint must NOT leak correctOption or explanation!
    console.log("Test 4: GET /api/aptitude/exam/speed-time-and-distance/practice/1 (Answer Security)");
    let questionsForTest = [];
    {
        const { req, res, getResult } = mockReqRes({ topicId: "speed-time-and-distance", type: "practice", setNumber: "1" });
        await handler.endpoint_getQuestions(req, res);
        const { statusCode, data } = getResult();
        assert.strictEqual(statusCode, 200);
        assert.strictEqual(data.questions.length, 30, "Must have exactly 30 questions per set");
        questionsForTest = data.questions;

        // Verify zero leakage
        for (const q of data.questions) {
            assert.strictEqual(q.correctOption, undefined, "Security Alert: correctOption leaked to client!");
            assert.strictEqual(q.explanation, undefined, "Security Alert: explanation leaked to client!");
            assert.strictEqual(q.options.length, 4, "Must have 4 options");
        }
        console.log("✓ Zero-leakage security verified: 30 questions returned with options only (answers hidden)\n");
    }

    // TEST 5: Lock Enforcement - Set 2 must be forbidden (403) before Set 1 is passed
    console.log("Test 5: Lock Enforcement for Set 2");
    {
        const { req, res, getResult } = mockReqRes({ topicId: "speed-time-and-distance", type: "practice", setNumber: "2" });
        await handler.endpoint_getQuestions(req, res);
        const { statusCode, data } = getResult();
        assert.strictEqual(statusCode, 403, "Must return 403 Forbidden for locked set");
        assert.strictEqual(data.locked, true);
        console.log("✓ Lock enforcement verified: Set 2 cannot be accessed without passing Set 1 with >=80%\n");
    }

    // TEST 6: Submission with Failing Score (< 80%) -> Forces Re-learn
    console.log("Test 6: Submit with < 80% score (Failing -> Re-learning Required)");
    {
        // Answer only 10 questions correctly out of 30 (= 33.3%)
        const answers = {};
        // Retrieve internal answers from memory store to simulate answers
        const fullQs = generateQuestionsForSet(QUANTITATIVE_TOPICS[0], 'practice', 1);
        fullQs.slice(0, 10).forEach(q => { answers[q.questionId] = q.correctOption; });
        fullQs.slice(10, 15).forEach(q => { answers[q.questionId] = q.correctOption === 'A' ? 'B' : 'A'; }); // 5 wrong answers

        const { req, res, getResult } = mockReqRes({}, {
            topicId: "speed-time-and-distance",
            type: "practice",
            setNumber: 1,
            answers,
            timeTakenSeconds: 650
        });

        await handler.endpoint_submitExam(req, res);
        const { data } = getResult();
        assert.strictEqual(data.success, true);
        assert.strictEqual(data.results.correctCount, 10);
        assert.strictEqual(data.results.wrongCount, 5);
        assert.strictEqual(data.results.negativePenalty, 5 * 0.25, "5 wrong * 0.25 = 1.25 negative penalty");
        assert.strictEqual(data.results.netScore, 10 - 1.25);
        assert.strictEqual(data.results.passed, false, "Must not pass with <80%");
        assert.strictEqual(data.results.requiresReLearn, true, "Must require re-learning");
        assert.strictEqual(data.results.nextSetUnlocked, false, "Set 2 must NOT be unlocked");
        console.log(`✓ Failing score properly handled: ${data.results.percentage}% < 80% -> requiresReLearn: true\n`);
    }

    // TEST 7: Submission with Passing Score (>= 80%) -> Unlocks Next Set
    console.log("Test 7: Submit with >= 80% score (Passing -> Unlocks Set 2)");
    {
        const answers = {};
        const fullQs = generateQuestionsForSet(QUANTITATIVE_TOPICS[0], 'practice', 1);
        // 26 correct, 4 wrong (26 / 30 = 86.7%)
        fullQs.slice(0, 26).forEach(q => { answers[q.questionId] = q.correctOption; });
        fullQs.slice(26, 30).forEach(q => { answers[q.questionId] = q.correctOption === 'A' ? 'B' : 'A'; });

        const { req, res, getResult } = mockReqRes({}, {
            topicId: "speed-time-and-distance",
            type: "practice",
            setNumber: 1,
            answers,
            timeTakenSeconds: 840
        });

        await handler.endpoint_submitExam(req, res);
        const { data } = getResult();
        assert.strictEqual(data.success, true);
        assert.strictEqual(data.results.passed, true, "Must pass with 86.7% >= 80%");
        assert.strictEqual(data.results.nextSetUnlocked, true, "Set 2 MUST be unlocked!");
        assert.strictEqual(data.results.nextSetNumber, 2);
        console.log(`✓ Passing score verified: ${data.results.percentage}% >= 80% -> Set 2 unlocked!\n`);
    }

    // TEST 8: Set 2 Access after Unlocking
    console.log("Test 8: Verify Set 2 is now accessible");
    {
        const { req, res, getResult } = mockReqRes({ topicId: "speed-time-and-distance", type: "practice", setNumber: "2" });
        await handler.endpoint_getQuestions(req, res);
        const { statusCode, data } = getResult();
        assert.strictEqual(statusCode, 200, "Set 2 must now be 200 OK");
        assert.strictEqual(data.questions.length, 30);
        console.log("✓ Set 2 access verified after unlocking\n");
    }

    // TEST 9: Safe Exam Mode Tab Penalty in Mock Test
    console.log("Test 9: Mock Safe Exam Mode Tab Penalty (-0.5 pts per violation after 2 warnings)");
    {
        const answers = {};
        const fullQs = generateQuestionsForSet(QUANTITATIVE_TOPICS[0], 'mock', 1);
        fullQs.slice(0, 25).forEach(q => { answers[q.questionId] = q.correctOption; }); // 25 correct
        // Tab switch violations: 4 times -> 2 free warnings, 2 excess violations * 0.5 = 1.0 penalty

        const { req, res, getResult } = mockReqRes({}, {
            topicId: "speed-time-and-distance",
            type: "mock",
            setNumber: 1,
            answers,
            timeTakenSeconds: 1100,
            tabSwitchViolations: 4
        });

        await handler.endpoint_submitExam(req, res);
        const { data } = getResult();
        assert.strictEqual(data.success, true);
        assert.strictEqual(data.results.tabSwitchViolations, 4);
        assert.strictEqual(data.results.tabPenaltyPoints, 1.0, "2 excess violations * 0.5 = 1.0 pt penalty");
        assert.strictEqual(data.results.rawScore, 25.0);
        assert.strictEqual(data.results.netScore, 25.0 - 1.0, "Net score = 25 - 1.0 = 24.0");
        console.log(`✓ Safe Exam tab penalty verified: 4 violations -> -${data.results.tabPenaltyPoints} pts penalty\n`);
    }

    // TEST 10: Leaderboard Ranking
    console.log("Test 10: GET /api/aptitude/leaderboard");
    {
        const { req, res, getResult } = mockReqRes({}, {}, {
            topicId: "speed-time-and-distance",
            type: "practice",
            setNumber: 1
        });
        await handler.endpoint_getLeaderboard(req, res);
        const { data } = getResult();
        assert.strictEqual(data.success, true);
        assert(data.leaderboard.length >= 1, "Must contain leaderboard entries");
        assert.strictEqual(data.leaderboard[0].rank, 1);
        console.log(`✓ Leaderboard verified: Rank #${data.leaderboard[0].rank} Net Score: ${data.leaderboard[0].netScore} pts\n`);
    }

    console.log("=========================================");
    console.log("🎉 ALL 10 APTITUDE ARENA TESTS PASSED PERFECTLY!");
    console.log("=========================================");
}

runTests().catch(err => {
    console.error("❌ Test Failed:", err);
    process.exit(1);
});
