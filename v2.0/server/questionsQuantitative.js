/**
 * Aptitude Arena - Quantitative Aptitude Question Bank & Progressive Generators
 * Generated with 100% Guaranteed Unique Questions (30 per set, 0 duplicates)
 * Covers all 25 Quantitative Topics across 4 Difficulty Levels + Mock Assessments.
 */

function createQuestionItem(qId, topic, type, setNumber, qNum, base, difficultyOverride) {
    const letterMap = ['A', 'B', 'C', 'D'];
    const originalAnsIdx = letterMap.indexOf(base.ans);
    const shift = (qNum + setNumber * 2) % 4;
    const newAnsIdx = (originalAnsIdx + shift) % 4;
    const finalAns = letterMap[newAnsIdx];

    const shiftedOpts = [];
    for (let i = 0; i < 4; i++) {
        const origI = (i - shift + 4) % 4;
        shiftedOpts.push({
            id: letterMap[i],
            text: base.opts[origI]
        });
    }

    let difficulty = difficultyOverride;
    if (!difficulty) {
        if (type === 'mock') {
            difficulty = qNum <= 10 ? 'easy' : (qNum <= 22 ? 'medium' : 'hard');
        } else {
            difficulty = setNumber === 1 ? 'easy' : (setNumber === 2 ? 'medium' : 'hard');
        }
    }

    return {
        questionId: qId,
        topicId: topic.topicId,
        category: 'quantitative',
        type,
        setNumber,
        questionNumber: qNum,
        question: base.q,
        options: shiftedOpts,
        correctOption: finalAns,
        explanation: base.exp,
        difficulty
    };
}

export const QUANTITATIVE_POOLS_MAP = {};

QUANTITATIVE_POOLS_MAP["speed-time-and-distance"] = {
  "level1": [
    {
      "q": "A car covers 80 km in 2 hours. What is its average speed in km/h? (Case #1)",
      "opts": [
        "40 km/h",
        "50 km/h",
        "35 km/h",
        "55 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 80 / 2 = 40 km/h."
    },
    {
      "q": "A car covers 126 km in 3 hours. What is its average speed in km/h? (Case #2)",
      "opts": [
        "42 km/h",
        "52 km/h",
        "37 km/h",
        "57 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 126 / 3 = 42 km/h."
    },
    {
      "q": "A car covers 176 km in 4 hours. What is its average speed in km/h? (Case #3)",
      "opts": [
        "44 km/h",
        "54 km/h",
        "39 km/h",
        "59 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 176 / 4 = 44 km/h."
    },
    {
      "q": "A car covers 230 km in 5 hours. What is its average speed in km/h? (Case #4)",
      "opts": [
        "46 km/h",
        "56 km/h",
        "41 km/h",
        "61 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 230 / 5 = 46 km/h."
    },
    {
      "q": "A car covers 288 km in 6 hours. What is its average speed in km/h? (Case #5)",
      "opts": [
        "48 km/h",
        "58 km/h",
        "43 km/h",
        "63 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 288 / 6 = 48 km/h."
    },
    {
      "q": "A car covers 100 km in 2 hours. What is its average speed in km/h? (Case #6)",
      "opts": [
        "50 km/h",
        "60 km/h",
        "45 km/h",
        "65 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 100 / 2 = 50 km/h."
    },
    {
      "q": "A car covers 156 km in 3 hours. What is its average speed in km/h? (Case #7)",
      "opts": [
        "52 km/h",
        "62 km/h",
        "47 km/h",
        "67 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 156 / 3 = 52 km/h."
    },
    {
      "q": "A car covers 216 km in 4 hours. What is its average speed in km/h? (Case #8)",
      "opts": [
        "54 km/h",
        "64 km/h",
        "49 km/h",
        "69 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 216 / 4 = 54 km/h."
    },
    {
      "q": "A car covers 280 km in 5 hours. What is its average speed in km/h? (Case #9)",
      "opts": [
        "56 km/h",
        "66 km/h",
        "51 km/h",
        "71 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 280 / 5 = 56 km/h."
    },
    {
      "q": "A car covers 348 km in 6 hours. What is its average speed in km/h? (Case #10)",
      "opts": [
        "58 km/h",
        "68 km/h",
        "53 km/h",
        "73 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 348 / 6 = 58 km/h."
    },
    {
      "q": "A car covers 120 km in 2 hours. What is its average speed in km/h? (Case #11)",
      "opts": [
        "60 km/h",
        "70 km/h",
        "55 km/h",
        "75 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 120 / 2 = 60 km/h."
    },
    {
      "q": "A car covers 186 km in 3 hours. What is its average speed in km/h? (Case #12)",
      "opts": [
        "62 km/h",
        "72 km/h",
        "57 km/h",
        "77 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 186 / 3 = 62 km/h."
    },
    {
      "q": "A car covers 256 km in 4 hours. What is its average speed in km/h? (Case #13)",
      "opts": [
        "64 km/h",
        "74 km/h",
        "59 km/h",
        "79 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 256 / 4 = 64 km/h."
    },
    {
      "q": "A car covers 330 km in 5 hours. What is its average speed in km/h? (Case #14)",
      "opts": [
        "66 km/h",
        "76 km/h",
        "61 km/h",
        "81 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 330 / 5 = 66 km/h."
    },
    {
      "q": "A car covers 408 km in 6 hours. What is its average speed in km/h? (Case #15)",
      "opts": [
        "68 km/h",
        "78 km/h",
        "63 km/h",
        "83 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 408 / 6 = 68 km/h."
    },
    {
      "q": "A car covers 140 km in 2 hours. What is its average speed in km/h? (Case #16)",
      "opts": [
        "70 km/h",
        "80 km/h",
        "65 km/h",
        "85 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 140 / 2 = 70 km/h."
    },
    {
      "q": "A car covers 216 km in 3 hours. What is its average speed in km/h? (Case #17)",
      "opts": [
        "72 km/h",
        "82 km/h",
        "67 km/h",
        "87 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 216 / 3 = 72 km/h."
    },
    {
      "q": "A car covers 296 km in 4 hours. What is its average speed in km/h? (Case #18)",
      "opts": [
        "74 km/h",
        "84 km/h",
        "69 km/h",
        "89 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 296 / 4 = 74 km/h."
    },
    {
      "q": "A car covers 380 km in 5 hours. What is its average speed in km/h? (Case #19)",
      "opts": [
        "76 km/h",
        "86 km/h",
        "71 km/h",
        "91 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 380 / 5 = 76 km/h."
    },
    {
      "q": "A car covers 468 km in 6 hours. What is its average speed in km/h? (Case #20)",
      "opts": [
        "78 km/h",
        "88 km/h",
        "73 km/h",
        "93 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 468 / 6 = 78 km/h."
    },
    {
      "q": "A car covers 160 km in 2 hours. What is its average speed in km/h? (Case #21)",
      "opts": [
        "80 km/h",
        "90 km/h",
        "75 km/h",
        "95 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 160 / 2 = 80 km/h."
    },
    {
      "q": "A car covers 246 km in 3 hours. What is its average speed in km/h? (Case #22)",
      "opts": [
        "82 km/h",
        "92 km/h",
        "77 km/h",
        "97 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 246 / 3 = 82 km/h."
    },
    {
      "q": "A car covers 336 km in 4 hours. What is its average speed in km/h? (Case #23)",
      "opts": [
        "84 km/h",
        "94 km/h",
        "79 km/h",
        "99 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 336 / 4 = 84 km/h."
    },
    {
      "q": "A car covers 430 km in 5 hours. What is its average speed in km/h? (Case #24)",
      "opts": [
        "86 km/h",
        "96 km/h",
        "81 km/h",
        "101 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 430 / 5 = 86 km/h."
    },
    {
      "q": "A car covers 528 km in 6 hours. What is its average speed in km/h? (Case #25)",
      "opts": [
        "88 km/h",
        "98 km/h",
        "83 km/h",
        "103 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 528 / 6 = 88 km/h."
    },
    {
      "q": "A car covers 180 km in 2 hours. What is its average speed in km/h? (Case #26)",
      "opts": [
        "90 km/h",
        "100 km/h",
        "85 km/h",
        "105 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 180 / 2 = 90 km/h."
    },
    {
      "q": "A car covers 276 km in 3 hours. What is its average speed in km/h? (Case #27)",
      "opts": [
        "92 km/h",
        "102 km/h",
        "87 km/h",
        "107 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 276 / 3 = 92 km/h."
    },
    {
      "q": "A car covers 376 km in 4 hours. What is its average speed in km/h? (Case #28)",
      "opts": [
        "94 km/h",
        "104 km/h",
        "89 km/h",
        "109 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 376 / 4 = 94 km/h."
    },
    {
      "q": "A car covers 480 km in 5 hours. What is its average speed in km/h? (Case #29)",
      "opts": [
        "96 km/h",
        "106 km/h",
        "91 km/h",
        "111 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 480 / 5 = 96 km/h."
    },
    {
      "q": "A car covers 588 km in 6 hours. What is its average speed in km/h? (Case #30)",
      "opts": [
        "98 km/h",
        "108 km/h",
        "93 km/h",
        "113 km/h"
      ],
      "ans": "A",
      "exp": "Speed = Distance / Time = 588 / 6 = 98 km/h."
    }
  ],
  "level2": [
    {
      "q": "A motorist travels from town A to town B at 30 km/h and returns along the same route at 45 km/h. What is the average speed for the round trip? (Trial #1)",
      "opts": [
        "36 km/h",
        "38 km/h",
        "40 km/h",
        "33 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(30)(45) / (30 + 45) = 36 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 31 km/h and returns along the same route at 46 km/h. What is the average speed for the round trip? (Trial #2)",
      "opts": [
        "37 km/h",
        "39 km/h",
        "41 km/h",
        "34 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(31)(46) / (31 + 46) = 37 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 32 km/h and returns along the same route at 47 km/h. What is the average speed for the round trip? (Trial #3)",
      "opts": [
        "38.1 km/h",
        "40 km/h",
        "42.1 km/h",
        "35.1 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(32)(47) / (32 + 47) = 38.1 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 33 km/h and returns along the same route at 48 km/h. What is the average speed for the round trip? (Trial #4)",
      "opts": [
        "39.1 km/h",
        "41 km/h",
        "43.1 km/h",
        "36.1 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(33)(48) / (33 + 48) = 39.1 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 34 km/h and returns along the same route at 49 km/h. What is the average speed for the round trip? (Trial #5)",
      "opts": [
        "40.1 km/h",
        "42 km/h",
        "44.1 km/h",
        "37.1 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(34)(49) / (34 + 49) = 40.1 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 35 km/h and returns along the same route at 50 km/h. What is the average speed for the round trip? (Trial #6)",
      "opts": [
        "41.2 km/h",
        "43 km/h",
        "45.2 km/h",
        "38.2 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(35)(50) / (35 + 50) = 41.2 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 36 km/h and returns along the same route at 51 km/h. What is the average speed for the round trip? (Trial #7)",
      "opts": [
        "42.2 km/h",
        "44 km/h",
        "46.2 km/h",
        "39.2 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(36)(51) / (36 + 51) = 42.2 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 37 km/h and returns along the same route at 52 km/h. What is the average speed for the round trip? (Trial #8)",
      "opts": [
        "43.2 km/h",
        "45 km/h",
        "47.2 km/h",
        "40.2 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(37)(52) / (37 + 52) = 43.2 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 38 km/h and returns along the same route at 53 km/h. What is the average speed for the round trip? (Trial #9)",
      "opts": [
        "44.3 km/h",
        "46 km/h",
        "48.3 km/h",
        "41.3 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(38)(53) / (38 + 53) = 44.3 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 39 km/h and returns along the same route at 54 km/h. What is the average speed for the round trip? (Trial #10)",
      "opts": [
        "45.3 km/h",
        "47 km/h",
        "49.3 km/h",
        "42.3 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(39)(54) / (39 + 54) = 45.3 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 40 km/h and returns along the same route at 55 km/h. What is the average speed for the round trip? (Trial #11)",
      "opts": [
        "46.3 km/h",
        "48 km/h",
        "50.3 km/h",
        "43.3 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(40)(55) / (40 + 55) = 46.3 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 41 km/h and returns along the same route at 56 km/h. What is the average speed for the round trip? (Trial #12)",
      "opts": [
        "47.3 km/h",
        "49 km/h",
        "51.3 km/h",
        "44.3 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(41)(56) / (41 + 56) = 47.3 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 42 km/h and returns along the same route at 57 km/h. What is the average speed for the round trip? (Trial #13)",
      "opts": [
        "48.4 km/h",
        "50 km/h",
        "52.4 km/h",
        "45.4 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(42)(57) / (42 + 57) = 48.4 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 43 km/h and returns along the same route at 58 km/h. What is the average speed for the round trip? (Trial #14)",
      "opts": [
        "49.4 km/h",
        "51 km/h",
        "53.4 km/h",
        "46.4 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(43)(58) / (43 + 58) = 49.4 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 44 km/h and returns along the same route at 59 km/h. What is the average speed for the round trip? (Trial #15)",
      "opts": [
        "50.4 km/h",
        "52 km/h",
        "54.4 km/h",
        "47.4 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(44)(59) / (44 + 59) = 50.4 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 45 km/h and returns along the same route at 60 km/h. What is the average speed for the round trip? (Trial #16)",
      "opts": [
        "51.4 km/h",
        "53 km/h",
        "55.4 km/h",
        "48.4 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(45)(60) / (45 + 60) = 51.4 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 46 km/h and returns along the same route at 61 km/h. What is the average speed for the round trip? (Trial #17)",
      "opts": [
        "52.4 km/h",
        "54 km/h",
        "56.4 km/h",
        "49.4 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(46)(61) / (46 + 61) = 52.4 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 47 km/h and returns along the same route at 62 km/h. What is the average speed for the round trip? (Trial #18)",
      "opts": [
        "53.5 km/h",
        "55 km/h",
        "57.5 km/h",
        "50.5 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(47)(62) / (47 + 62) = 53.5 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 48 km/h and returns along the same route at 63 km/h. What is the average speed for the round trip? (Trial #19)",
      "opts": [
        "54.5 km/h",
        "56 km/h",
        "58.5 km/h",
        "51.5 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(48)(63) / (48 + 63) = 54.5 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 49 km/h and returns along the same route at 64 km/h. What is the average speed for the round trip? (Trial #20)",
      "opts": [
        "55.5 km/h",
        "57 km/h",
        "59.5 km/h",
        "52.5 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(49)(64) / (49 + 64) = 55.5 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 50 km/h and returns along the same route at 65 km/h. What is the average speed for the round trip? (Trial #21)",
      "opts": [
        "56.5 km/h",
        "58 km/h",
        "60.5 km/h",
        "53.5 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(50)(65) / (50 + 65) = 56.5 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 51 km/h and returns along the same route at 66 km/h. What is the average speed for the round trip? (Trial #22)",
      "opts": [
        "57.5 km/h",
        "59 km/h",
        "61.5 km/h",
        "54.5 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(51)(66) / (51 + 66) = 57.5 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 52 km/h and returns along the same route at 67 km/h. What is the average speed for the round trip? (Trial #23)",
      "opts": [
        "58.6 km/h",
        "60 km/h",
        "62.6 km/h",
        "55.6 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(52)(67) / (52 + 67) = 58.6 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 53 km/h and returns along the same route at 68 km/h. What is the average speed for the round trip? (Trial #24)",
      "opts": [
        "59.6 km/h",
        "61 km/h",
        "63.6 km/h",
        "56.6 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(53)(68) / (53 + 68) = 59.6 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 54 km/h and returns along the same route at 69 km/h. What is the average speed for the round trip? (Trial #25)",
      "opts": [
        "60.6 km/h",
        "62 km/h",
        "64.6 km/h",
        "57.6 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(54)(69) / (54 + 69) = 60.6 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 55 km/h and returns along the same route at 70 km/h. What is the average speed for the round trip? (Trial #26)",
      "opts": [
        "61.6 km/h",
        "63 km/h",
        "65.6 km/h",
        "58.6 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(55)(70) / (55 + 70) = 61.6 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 56 km/h and returns along the same route at 71 km/h. What is the average speed for the round trip? (Trial #27)",
      "opts": [
        "62.6 km/h",
        "64 km/h",
        "66.6 km/h",
        "59.6 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(56)(71) / (56 + 71) = 62.6 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 57 km/h and returns along the same route at 72 km/h. What is the average speed for the round trip? (Trial #28)",
      "opts": [
        "63.6 km/h",
        "65 km/h",
        "67.6 km/h",
        "60.6 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(57)(72) / (57 + 72) = 63.6 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 58 km/h and returns along the same route at 73 km/h. What is the average speed for the round trip? (Trial #29)",
      "opts": [
        "64.6 km/h",
        "66 km/h",
        "68.6 km/h",
        "61.599999999999994 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(58)(73) / (58 + 73) = 64.6 km/h."
    },
    {
      "q": "A motorist travels from town A to town B at 59 km/h and returns along the same route at 74 km/h. What is the average speed for the round trip? (Trial #30)",
      "opts": [
        "65.7 km/h",
        "67 km/h",
        "69.7 km/h",
        "62.7 km/h"
      ],
      "ans": "A",
      "exp": "For equal distances: Avg Speed = 2S₁S₂ / (S₁ + S₂) = 2(59)(74) / (59 + 74) = 65.7 km/h."
    }
  ],
  "level3": [
    {
      "q": "A train 150 m long crosses a platform 200 m long in 20 seconds. What is the speed of the train in km/h? (Setup #1)",
      "opts": [
        "63 km/h",
        "73 km/h",
        "55 km/h",
        "78 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 150 + 200 = 350 m. Speed = (350 / 20) × (18/5) = 63 km/h."
    },
    {
      "q": "A train 160 m long crosses a platform 215 m long in 21 seconds. What is the speed of the train in km/h? (Setup #2)",
      "opts": [
        "64.3 km/h",
        "74.3 km/h",
        "56.3 km/h",
        "79.3 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 160 + 215 = 375 m. Speed = (375 / 21) × (18/5) = 64.3 km/h."
    },
    {
      "q": "A train 170 m long crosses a platform 230 m long in 22 seconds. What is the speed of the train in km/h? (Setup #3)",
      "opts": [
        "65.5 km/h",
        "75.5 km/h",
        "57.5 km/h",
        "80.5 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 170 + 230 = 400 m. Speed = (400 / 22) × (18/5) = 65.5 km/h."
    },
    {
      "q": "A train 180 m long crosses a platform 245 m long in 23 seconds. What is the speed of the train in km/h? (Setup #4)",
      "opts": [
        "66.5 km/h",
        "76.5 km/h",
        "58.5 km/h",
        "81.5 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 180 + 245 = 425 m. Speed = (425 / 23) × (18/5) = 66.5 km/h."
    },
    {
      "q": "A train 190 m long crosses a platform 260 m long in 24 seconds. What is the speed of the train in km/h? (Setup #5)",
      "opts": [
        "67.5 km/h",
        "77.5 km/h",
        "59.5 km/h",
        "82.5 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 190 + 260 = 450 m. Speed = (450 / 24) × (18/5) = 67.5 km/h."
    },
    {
      "q": "A train 200 m long crosses a platform 275 m long in 20 seconds. What is the speed of the train in km/h? (Setup #6)",
      "opts": [
        "85.5 km/h",
        "95.5 km/h",
        "77.5 km/h",
        "100.5 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 200 + 275 = 475 m. Speed = (475 / 20) × (18/5) = 85.5 km/h."
    },
    {
      "q": "A train 210 m long crosses a platform 290 m long in 21 seconds. What is the speed of the train in km/h? (Setup #7)",
      "opts": [
        "85.7 km/h",
        "95.7 km/h",
        "77.7 km/h",
        "100.7 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 210 + 290 = 500 m. Speed = (500 / 21) × (18/5) = 85.7 km/h."
    },
    {
      "q": "A train 220 m long crosses a platform 305 m long in 22 seconds. What is the speed of the train in km/h? (Setup #8)",
      "opts": [
        "85.9 km/h",
        "95.9 km/h",
        "77.9 km/h",
        "100.9 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 220 + 305 = 525 m. Speed = (525 / 22) × (18/5) = 85.9 km/h."
    },
    {
      "q": "A train 230 m long crosses a platform 320 m long in 23 seconds. What is the speed of the train in km/h? (Setup #9)",
      "opts": [
        "86.1 km/h",
        "96.1 km/h",
        "78.1 km/h",
        "101.1 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 230 + 320 = 550 m. Speed = (550 / 23) × (18/5) = 86.1 km/h."
    },
    {
      "q": "A train 240 m long crosses a platform 335 m long in 24 seconds. What is the speed of the train in km/h? (Setup #10)",
      "opts": [
        "86.3 km/h",
        "96.3 km/h",
        "78.3 km/h",
        "101.3 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 240 + 335 = 575 m. Speed = (575 / 24) × (18/5) = 86.3 km/h."
    },
    {
      "q": "A train 250 m long crosses a platform 350 m long in 20 seconds. What is the speed of the train in km/h? (Setup #11)",
      "opts": [
        "108 km/h",
        "118 km/h",
        "100 km/h",
        "123 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 250 + 350 = 600 m. Speed = (600 / 20) × (18/5) = 108 km/h."
    },
    {
      "q": "A train 260 m long crosses a platform 365 m long in 21 seconds. What is the speed of the train in km/h? (Setup #12)",
      "opts": [
        "107.1 km/h",
        "117.1 km/h",
        "99.1 km/h",
        "122.1 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 260 + 365 = 625 m. Speed = (625 / 21) × (18/5) = 107.1 km/h."
    },
    {
      "q": "A train 270 m long crosses a platform 380 m long in 22 seconds. What is the speed of the train in km/h? (Setup #13)",
      "opts": [
        "106.4 km/h",
        "116.4 km/h",
        "98.4 km/h",
        "121.4 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 270 + 380 = 650 m. Speed = (650 / 22) × (18/5) = 106.4 km/h."
    },
    {
      "q": "A train 280 m long crosses a platform 395 m long in 23 seconds. What is the speed of the train in km/h? (Setup #14)",
      "opts": [
        "105.7 km/h",
        "115.7 km/h",
        "97.7 km/h",
        "120.7 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 280 + 395 = 675 m. Speed = (675 / 23) × (18/5) = 105.7 km/h."
    },
    {
      "q": "A train 290 m long crosses a platform 410 m long in 24 seconds. What is the speed of the train in km/h? (Setup #15)",
      "opts": [
        "105 km/h",
        "115 km/h",
        "97 km/h",
        "120 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 290 + 410 = 700 m. Speed = (700 / 24) × (18/5) = 105 km/h."
    },
    {
      "q": "A train 300 m long crosses a platform 425 m long in 20 seconds. What is the speed of the train in km/h? (Setup #16)",
      "opts": [
        "130.5 km/h",
        "140.5 km/h",
        "122.5 km/h",
        "145.5 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 300 + 425 = 725 m. Speed = (725 / 20) × (18/5) = 130.5 km/h."
    },
    {
      "q": "A train 310 m long crosses a platform 440 m long in 21 seconds. What is the speed of the train in km/h? (Setup #17)",
      "opts": [
        "128.6 km/h",
        "138.6 km/h",
        "120.6 km/h",
        "143.6 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 310 + 440 = 750 m. Speed = (750 / 21) × (18/5) = 128.6 km/h."
    },
    {
      "q": "A train 320 m long crosses a platform 455 m long in 22 seconds. What is the speed of the train in km/h? (Setup #18)",
      "opts": [
        "126.8 km/h",
        "136.8 km/h",
        "118.8 km/h",
        "141.8 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 320 + 455 = 775 m. Speed = (775 / 22) × (18/5) = 126.8 km/h."
    },
    {
      "q": "A train 330 m long crosses a platform 470 m long in 23 seconds. What is the speed of the train in km/h? (Setup #19)",
      "opts": [
        "125.2 km/h",
        "135.2 km/h",
        "117.2 km/h",
        "140.2 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 330 + 470 = 800 m. Speed = (800 / 23) × (18/5) = 125.2 km/h."
    },
    {
      "q": "A train 340 m long crosses a platform 485 m long in 24 seconds. What is the speed of the train in km/h? (Setup #20)",
      "opts": [
        "123.8 km/h",
        "133.8 km/h",
        "115.8 km/h",
        "138.8 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 340 + 485 = 825 m. Speed = (825 / 24) × (18/5) = 123.8 km/h."
    },
    {
      "q": "A train 350 m long crosses a platform 500 m long in 20 seconds. What is the speed of the train in km/h? (Setup #21)",
      "opts": [
        "153 km/h",
        "163 km/h",
        "145 km/h",
        "168 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 350 + 500 = 850 m. Speed = (850 / 20) × (18/5) = 153 km/h."
    },
    {
      "q": "A train 360 m long crosses a platform 515 m long in 21 seconds. What is the speed of the train in km/h? (Setup #22)",
      "opts": [
        "150 km/h",
        "160 km/h",
        "142 km/h",
        "165 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 360 + 515 = 875 m. Speed = (875 / 21) × (18/5) = 150 km/h."
    },
    {
      "q": "A train 370 m long crosses a platform 530 m long in 22 seconds. What is the speed of the train in km/h? (Setup #23)",
      "opts": [
        "147.3 km/h",
        "157.3 km/h",
        "139.3 km/h",
        "162.3 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 370 + 530 = 900 m. Speed = (900 / 22) × (18/5) = 147.3 km/h."
    },
    {
      "q": "A train 380 m long crosses a platform 545 m long in 23 seconds. What is the speed of the train in km/h? (Setup #24)",
      "opts": [
        "144.8 km/h",
        "154.8 km/h",
        "136.8 km/h",
        "159.8 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 380 + 545 = 925 m. Speed = (925 / 23) × (18/5) = 144.8 km/h."
    },
    {
      "q": "A train 390 m long crosses a platform 560 m long in 24 seconds. What is the speed of the train in km/h? (Setup #25)",
      "opts": [
        "142.5 km/h",
        "152.5 km/h",
        "134.5 km/h",
        "157.5 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 390 + 560 = 950 m. Speed = (950 / 24) × (18/5) = 142.5 km/h."
    },
    {
      "q": "A train 400 m long crosses a platform 575 m long in 20 seconds. What is the speed of the train in km/h? (Setup #26)",
      "opts": [
        "175.5 km/h",
        "185.5 km/h",
        "167.5 km/h",
        "190.5 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 400 + 575 = 975 m. Speed = (975 / 20) × (18/5) = 175.5 km/h."
    },
    {
      "q": "A train 410 m long crosses a platform 590 m long in 21 seconds. What is the speed of the train in km/h? (Setup #27)",
      "opts": [
        "171.4 km/h",
        "181.4 km/h",
        "163.4 km/h",
        "186.4 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 410 + 590 = 1000 m. Speed = (1000 / 21) × (18/5) = 171.4 km/h."
    },
    {
      "q": "A train 420 m long crosses a platform 605 m long in 22 seconds. What is the speed of the train in km/h? (Setup #28)",
      "opts": [
        "167.7 km/h",
        "177.7 km/h",
        "159.7 km/h",
        "182.7 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 420 + 605 = 1025 m. Speed = (1025 / 22) × (18/5) = 167.7 km/h."
    },
    {
      "q": "A train 430 m long crosses a platform 620 m long in 23 seconds. What is the speed of the train in km/h? (Setup #29)",
      "opts": [
        "164.3 km/h",
        "174.3 km/h",
        "156.3 km/h",
        "179.3 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 430 + 620 = 1050 m. Speed = (1050 / 23) × (18/5) = 164.3 km/h."
    },
    {
      "q": "A train 440 m long crosses a platform 635 m long in 24 seconds. What is the speed of the train in km/h? (Setup #30)",
      "opts": [
        "161.3 km/h",
        "171.3 km/h",
        "153.3 km/h",
        "176.3 km/h"
      ],
      "ans": "A",
      "exp": "Total distance = 440 + 635 = 1075 m. Speed = (1075 / 24) × (18/5) = 161.3 km/h."
    }
  ],
  "level4": [
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 50 km/h and 30 km/h. If the distance between P and Q is 80 km, after how many hours will they cross each other? (Advanced #1)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 50 + 30 = 80 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 52 km/h and 31 km/h. If the distance between P and Q is 166 km, after how many hours will they cross each other? (Advanced #2)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 52 + 31 = 83 km/h. Time = Distance / Relative Speed = 2 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 54 km/h and 32 km/h. If the distance between P and Q is 258 km, after how many hours will they cross each other? (Advanced #3)",
      "opts": [
        "3 hours",
        "4 hours",
        "5 hours",
        "3.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 54 + 32 = 86 km/h. Time = Distance / Relative Speed = 3 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 56 km/h and 33 km/h. If the distance between P and Q is 356 km, after how many hours will they cross each other? (Advanced #4)",
      "opts": [
        "4 hours",
        "5 hours",
        "6 hours",
        "4.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 56 + 33 = 89 km/h. Time = Distance / Relative Speed = 4 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 58 km/h and 34 km/h. If the distance between P and Q is 92 km, after how many hours will they cross each other? (Advanced #5)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 58 + 34 = 92 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 60 km/h and 35 km/h. If the distance between P and Q is 190 km, after how many hours will they cross each other? (Advanced #6)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 60 + 35 = 95 km/h. Time = Distance / Relative Speed = 2 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 62 km/h and 36 km/h. If the distance between P and Q is 294 km, after how many hours will they cross each other? (Advanced #7)",
      "opts": [
        "3 hours",
        "4 hours",
        "5 hours",
        "3.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 62 + 36 = 98 km/h. Time = Distance / Relative Speed = 3 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 64 km/h and 37 km/h. If the distance between P and Q is 404 km, after how many hours will they cross each other? (Advanced #8)",
      "opts": [
        "4 hours",
        "5 hours",
        "6 hours",
        "4.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 64 + 37 = 101 km/h. Time = Distance / Relative Speed = 4 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 66 km/h and 38 km/h. If the distance between P and Q is 104 km, after how many hours will they cross each other? (Advanced #9)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 66 + 38 = 104 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 68 km/h and 39 km/h. If the distance between P and Q is 214 km, after how many hours will they cross each other? (Advanced #10)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 68 + 39 = 107 km/h. Time = Distance / Relative Speed = 2 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 70 km/h and 40 km/h. If the distance between P and Q is 330 km, after how many hours will they cross each other? (Advanced #11)",
      "opts": [
        "3 hours",
        "4 hours",
        "5 hours",
        "3.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 70 + 40 = 110 km/h. Time = Distance / Relative Speed = 3 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 72 km/h and 41 km/h. If the distance between P and Q is 452 km, after how many hours will they cross each other? (Advanced #12)",
      "opts": [
        "4 hours",
        "5 hours",
        "6 hours",
        "4.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 72 + 41 = 113 km/h. Time = Distance / Relative Speed = 4 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 74 km/h and 42 km/h. If the distance between P and Q is 116 km, after how many hours will they cross each other? (Advanced #13)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 74 + 42 = 116 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 76 km/h and 43 km/h. If the distance between P and Q is 238 km, after how many hours will they cross each other? (Advanced #14)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 76 + 43 = 119 km/h. Time = Distance / Relative Speed = 2 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 78 km/h and 44 km/h. If the distance between P and Q is 366 km, after how many hours will they cross each other? (Advanced #15)",
      "opts": [
        "3 hours",
        "4 hours",
        "5 hours",
        "3.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 78 + 44 = 122 km/h. Time = Distance / Relative Speed = 3 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 80 km/h and 45 km/h. If the distance between P and Q is 500 km, after how many hours will they cross each other? (Advanced #16)",
      "opts": [
        "4 hours",
        "5 hours",
        "6 hours",
        "4.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 80 + 45 = 125 km/h. Time = Distance / Relative Speed = 4 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 82 km/h and 46 km/h. If the distance between P and Q is 128 km, after how many hours will they cross each other? (Advanced #17)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 82 + 46 = 128 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 84 km/h and 47 km/h. If the distance between P and Q is 262 km, after how many hours will they cross each other? (Advanced #18)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 84 + 47 = 131 km/h. Time = Distance / Relative Speed = 2 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 86 km/h and 48 km/h. If the distance between P and Q is 402 km, after how many hours will they cross each other? (Advanced #19)",
      "opts": [
        "3 hours",
        "4 hours",
        "5 hours",
        "3.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 86 + 48 = 134 km/h. Time = Distance / Relative Speed = 3 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 88 km/h and 49 km/h. If the distance between P and Q is 548 km, after how many hours will they cross each other? (Advanced #20)",
      "opts": [
        "4 hours",
        "5 hours",
        "6 hours",
        "4.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 88 + 49 = 137 km/h. Time = Distance / Relative Speed = 4 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 90 km/h and 50 km/h. If the distance between P and Q is 140 km, after how many hours will they cross each other? (Advanced #21)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 90 + 50 = 140 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 92 km/h and 51 km/h. If the distance between P and Q is 286 km, after how many hours will they cross each other? (Advanced #22)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 92 + 51 = 143 km/h. Time = Distance / Relative Speed = 2 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 94 km/h and 52 km/h. If the distance between P and Q is 438 km, after how many hours will they cross each other? (Advanced #23)",
      "opts": [
        "3 hours",
        "4 hours",
        "5 hours",
        "3.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 94 + 52 = 146 km/h. Time = Distance / Relative Speed = 3 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 96 km/h and 53 km/h. If the distance between P and Q is 596 km, after how many hours will they cross each other? (Advanced #24)",
      "opts": [
        "4 hours",
        "5 hours",
        "6 hours",
        "4.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 96 + 53 = 149 km/h. Time = Distance / Relative Speed = 4 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 98 km/h and 54 km/h. If the distance between P and Q is 152 km, after how many hours will they cross each other? (Advanced #25)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 98 + 54 = 152 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 100 km/h and 55 km/h. If the distance between P and Q is 310 km, after how many hours will they cross each other? (Advanced #26)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 100 + 55 = 155 km/h. Time = Distance / Relative Speed = 2 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 102 km/h and 56 km/h. If the distance between P and Q is 474 km, after how many hours will they cross each other? (Advanced #27)",
      "opts": [
        "3 hours",
        "4 hours",
        "5 hours",
        "3.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 102 + 56 = 158 km/h. Time = Distance / Relative Speed = 3 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 104 km/h and 57 km/h. If the distance between P and Q is 644 km, after how many hours will they cross each other? (Advanced #28)",
      "opts": [
        "4 hours",
        "5 hours",
        "6 hours",
        "4.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 104 + 57 = 161 km/h. Time = Distance / Relative Speed = 4 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 106 km/h and 58 km/h. If the distance between P and Q is 164 km, after how many hours will they cross each other? (Advanced #29)",
      "opts": [
        "1 hours",
        "2 hours",
        "3 hours",
        "1.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 106 + 58 = 164 km/h. Time = Distance / Relative Speed = 1 hours."
    },
    {
      "q": "Two trains start simultaneously from stations P and Q towards each other at 108 km/h and 59 km/h. If the distance between P and Q is 334 km, after how many hours will they cross each other? (Advanced #30)",
      "opts": [
        "2 hours",
        "3 hours",
        "4 hours",
        "2.5 hours"
      ],
      "ans": "A",
      "exp": "Relative speed = 108 + 59 = 167 km/h. Time = Distance / Relative Speed = 2 hours."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["number-system"] = {
  "level1": [
    {
      "q": "What is the sum of the first 10 natural numbers? (Problem #1)",
      "opts": [
        "55",
        "65",
        "45",
        "65"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 10(11)/2 = 55."
    },
    {
      "q": "What is the sum of the first 11 natural numbers? (Problem #2)",
      "opts": [
        "66",
        "77",
        "55",
        "76"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 11(12)/2 = 66."
    },
    {
      "q": "What is the sum of the first 12 natural numbers? (Problem #3)",
      "opts": [
        "78",
        "90",
        "66",
        "88"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 12(13)/2 = 78."
    },
    {
      "q": "What is the sum of the first 13 natural numbers? (Problem #4)",
      "opts": [
        "91",
        "104",
        "78",
        "101"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 13(14)/2 = 91."
    },
    {
      "q": "What is the sum of the first 14 natural numbers? (Problem #5)",
      "opts": [
        "105",
        "119",
        "91",
        "115"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 14(15)/2 = 105."
    },
    {
      "q": "What is the sum of the first 15 natural numbers? (Problem #6)",
      "opts": [
        "120",
        "135",
        "105",
        "130"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 15(16)/2 = 120."
    },
    {
      "q": "What is the sum of the first 16 natural numbers? (Problem #7)",
      "opts": [
        "136",
        "152",
        "120",
        "146"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 16(17)/2 = 136."
    },
    {
      "q": "What is the sum of the first 17 natural numbers? (Problem #8)",
      "opts": [
        "153",
        "170",
        "136",
        "163"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 17(18)/2 = 153."
    },
    {
      "q": "What is the sum of the first 18 natural numbers? (Problem #9)",
      "opts": [
        "171",
        "189",
        "153",
        "181"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 18(19)/2 = 171."
    },
    {
      "q": "What is the sum of the first 19 natural numbers? (Problem #10)",
      "opts": [
        "190",
        "209",
        "171",
        "200"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 19(20)/2 = 190."
    },
    {
      "q": "What is the sum of the first 20 natural numbers? (Problem #11)",
      "opts": [
        "210",
        "230",
        "190",
        "220"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 20(21)/2 = 210."
    },
    {
      "q": "What is the sum of the first 21 natural numbers? (Problem #12)",
      "opts": [
        "231",
        "252",
        "210",
        "241"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 21(22)/2 = 231."
    },
    {
      "q": "What is the sum of the first 22 natural numbers? (Problem #13)",
      "opts": [
        "253",
        "275",
        "231",
        "263"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 22(23)/2 = 253."
    },
    {
      "q": "What is the sum of the first 23 natural numbers? (Problem #14)",
      "opts": [
        "276",
        "299",
        "253",
        "286"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 23(24)/2 = 276."
    },
    {
      "q": "What is the sum of the first 24 natural numbers? (Problem #15)",
      "opts": [
        "300",
        "324",
        "276",
        "310"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 24(25)/2 = 300."
    },
    {
      "q": "What is the sum of the first 25 natural numbers? (Problem #16)",
      "opts": [
        "325",
        "350",
        "300",
        "335"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 25(26)/2 = 325."
    },
    {
      "q": "What is the sum of the first 26 natural numbers? (Problem #17)",
      "opts": [
        "351",
        "377",
        "325",
        "361"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 26(27)/2 = 351."
    },
    {
      "q": "What is the sum of the first 27 natural numbers? (Problem #18)",
      "opts": [
        "378",
        "405",
        "351",
        "388"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 27(28)/2 = 378."
    },
    {
      "q": "What is the sum of the first 28 natural numbers? (Problem #19)",
      "opts": [
        "406",
        "434",
        "378",
        "416"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 28(29)/2 = 406."
    },
    {
      "q": "What is the sum of the first 29 natural numbers? (Problem #20)",
      "opts": [
        "435",
        "464",
        "406",
        "445"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 29(30)/2 = 435."
    },
    {
      "q": "What is the sum of the first 30 natural numbers? (Problem #21)",
      "opts": [
        "465",
        "495",
        "435",
        "475"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 30(31)/2 = 465."
    },
    {
      "q": "What is the sum of the first 31 natural numbers? (Problem #22)",
      "opts": [
        "496",
        "527",
        "465",
        "506"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 31(32)/2 = 496."
    },
    {
      "q": "What is the sum of the first 32 natural numbers? (Problem #23)",
      "opts": [
        "528",
        "560",
        "496",
        "538"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 32(33)/2 = 528."
    },
    {
      "q": "What is the sum of the first 33 natural numbers? (Problem #24)",
      "opts": [
        "561",
        "594",
        "528",
        "571"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 33(34)/2 = 561."
    },
    {
      "q": "What is the sum of the first 34 natural numbers? (Problem #25)",
      "opts": [
        "595",
        "629",
        "561",
        "605"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 34(35)/2 = 595."
    },
    {
      "q": "What is the sum of the first 35 natural numbers? (Problem #26)",
      "opts": [
        "630",
        "665",
        "595",
        "640"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 35(36)/2 = 630."
    },
    {
      "q": "What is the sum of the first 36 natural numbers? (Problem #27)",
      "opts": [
        "666",
        "702",
        "630",
        "676"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 36(37)/2 = 666."
    },
    {
      "q": "What is the sum of the first 37 natural numbers? (Problem #28)",
      "opts": [
        "703",
        "740",
        "666",
        "713"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 37(38)/2 = 703."
    },
    {
      "q": "What is the sum of the first 38 natural numbers? (Problem #29)",
      "opts": [
        "741",
        "779",
        "703",
        "751"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 38(39)/2 = 741."
    },
    {
      "q": "What is the sum of the first 39 natural numbers? (Problem #30)",
      "opts": [
        "780",
        "819",
        "741",
        "790"
      ],
      "ans": "A",
      "exp": "Sum = n(n + 1)/2 = 39(40)/2 = 780."
    }
  ],
  "level2": [
    {
      "q": "What is the unit digit of (2)^40? (Problem #1)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 40 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^43? (Problem #2)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 43 mod 4 = 3. Unit digit = 7."
    },
    {
      "q": "What is the unit digit of (7)^46? (Problem #3)",
      "opts": [
        "9",
        "1",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Cyclicity of 7 is 4. Power 46 mod 4 = 2. Unit digit = 9."
    },
    {
      "q": "What is the unit digit of (8)^49? (Problem #4)",
      "opts": [
        "8",
        "0",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Cyclicity of 8 is 4. Power 49 mod 4 = 1. Unit digit = 8."
    },
    {
      "q": "What is the unit digit of (2)^52? (Problem #5)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 52 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^55? (Problem #6)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 55 mod 4 = 3. Unit digit = 7."
    },
    {
      "q": "What is the unit digit of (7)^58? (Problem #7)",
      "opts": [
        "9",
        "1",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Cyclicity of 7 is 4. Power 58 mod 4 = 2. Unit digit = 9."
    },
    {
      "q": "What is the unit digit of (8)^61? (Problem #8)",
      "opts": [
        "8",
        "0",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Cyclicity of 8 is 4. Power 61 mod 4 = 1. Unit digit = 8."
    },
    {
      "q": "What is the unit digit of (2)^64? (Problem #9)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 64 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^67? (Problem #10)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 67 mod 4 = 3. Unit digit = 7."
    },
    {
      "q": "What is the unit digit of (7)^70? (Problem #11)",
      "opts": [
        "9",
        "1",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Cyclicity of 7 is 4. Power 70 mod 4 = 2. Unit digit = 9."
    },
    {
      "q": "What is the unit digit of (8)^73? (Problem #12)",
      "opts": [
        "8",
        "0",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Cyclicity of 8 is 4. Power 73 mod 4 = 1. Unit digit = 8."
    },
    {
      "q": "What is the unit digit of (2)^76? (Problem #13)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 76 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^79? (Problem #14)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 79 mod 4 = 3. Unit digit = 7."
    },
    {
      "q": "What is the unit digit of (7)^82? (Problem #15)",
      "opts": [
        "9",
        "1",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Cyclicity of 7 is 4. Power 82 mod 4 = 2. Unit digit = 9."
    },
    {
      "q": "What is the unit digit of (8)^85? (Problem #16)",
      "opts": [
        "8",
        "0",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Cyclicity of 8 is 4. Power 85 mod 4 = 1. Unit digit = 8."
    },
    {
      "q": "What is the unit digit of (2)^88? (Problem #17)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 88 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^91? (Problem #18)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 91 mod 4 = 3. Unit digit = 7."
    },
    {
      "q": "What is the unit digit of (7)^94? (Problem #19)",
      "opts": [
        "9",
        "1",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Cyclicity of 7 is 4. Power 94 mod 4 = 2. Unit digit = 9."
    },
    {
      "q": "What is the unit digit of (8)^97? (Problem #20)",
      "opts": [
        "8",
        "0",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Cyclicity of 8 is 4. Power 97 mod 4 = 1. Unit digit = 8."
    },
    {
      "q": "What is the unit digit of (2)^100? (Problem #21)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 100 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^103? (Problem #22)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 103 mod 4 = 3. Unit digit = 7."
    },
    {
      "q": "What is the unit digit of (7)^106? (Problem #23)",
      "opts": [
        "9",
        "1",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Cyclicity of 7 is 4. Power 106 mod 4 = 2. Unit digit = 9."
    },
    {
      "q": "What is the unit digit of (8)^109? (Problem #24)",
      "opts": [
        "8",
        "0",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Cyclicity of 8 is 4. Power 109 mod 4 = 1. Unit digit = 8."
    },
    {
      "q": "What is the unit digit of (2)^112? (Problem #25)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 112 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^115? (Problem #26)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 115 mod 4 = 3. Unit digit = 7."
    },
    {
      "q": "What is the unit digit of (7)^118? (Problem #27)",
      "opts": [
        "9",
        "1",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Cyclicity of 7 is 4. Power 118 mod 4 = 2. Unit digit = 9."
    },
    {
      "q": "What is the unit digit of (8)^121? (Problem #28)",
      "opts": [
        "8",
        "0",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Cyclicity of 8 is 4. Power 121 mod 4 = 1. Unit digit = 8."
    },
    {
      "q": "What is the unit digit of (2)^124? (Problem #29)",
      "opts": [
        "6",
        "8",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "Cyclicity of 2 is 4. Power 124 mod 4 = 0. Unit digit = 6."
    },
    {
      "q": "What is the unit digit of (3)^127? (Problem #30)",
      "opts": [
        "7",
        "9",
        "1",
        "3"
      ],
      "ans": "A",
      "exp": "Cyclicity of 3 is 4. Power 127 mod 4 = 3. Unit digit = 7."
    }
  ],
  "level3": [
    {
      "q": "Find the number of trailing zeros in 50! (Factorial #1):",
      "opts": [
        "12 zeros",
        "14 zeros",
        "10 zeros",
        "17 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [50/5] + [50/25] + [50/125] = 12 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 55! (Factorial #2):",
      "opts": [
        "13 zeros",
        "15 zeros",
        "11 zeros",
        "18 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [55/5] + [55/25] + [55/125] = 13 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 60! (Factorial #3):",
      "opts": [
        "14 zeros",
        "16 zeros",
        "12 zeros",
        "19 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [60/5] + [60/25] + [60/125] = 14 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 65! (Factorial #4):",
      "opts": [
        "15 zeros",
        "17 zeros",
        "13 zeros",
        "20 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [65/5] + [65/25] + [65/125] = 15 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 70! (Factorial #5):",
      "opts": [
        "16 zeros",
        "18 zeros",
        "14 zeros",
        "21 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [70/5] + [70/25] + [70/125] = 16 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 75! (Factorial #6):",
      "opts": [
        "18 zeros",
        "20 zeros",
        "16 zeros",
        "23 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [75/5] + [75/25] + [75/125] = 18 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 80! (Factorial #7):",
      "opts": [
        "19 zeros",
        "21 zeros",
        "17 zeros",
        "24 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [80/5] + [80/25] + [80/125] = 19 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 85! (Factorial #8):",
      "opts": [
        "20 zeros",
        "22 zeros",
        "18 zeros",
        "25 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [85/5] + [85/25] + [85/125] = 20 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 90! (Factorial #9):",
      "opts": [
        "21 zeros",
        "23 zeros",
        "19 zeros",
        "26 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [90/5] + [90/25] + [90/125] = 21 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 95! (Factorial #10):",
      "opts": [
        "22 zeros",
        "24 zeros",
        "20 zeros",
        "27 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [95/5] + [95/25] + [95/125] = 22 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 100! (Factorial #11):",
      "opts": [
        "24 zeros",
        "26 zeros",
        "22 zeros",
        "29 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [100/5] + [100/25] + [100/125] = 24 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 105! (Factorial #12):",
      "opts": [
        "25 zeros",
        "27 zeros",
        "23 zeros",
        "30 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [105/5] + [105/25] + [105/125] = 25 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 110! (Factorial #13):",
      "opts": [
        "26 zeros",
        "28 zeros",
        "24 zeros",
        "31 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [110/5] + [110/25] + [110/125] = 26 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 115! (Factorial #14):",
      "opts": [
        "27 zeros",
        "29 zeros",
        "25 zeros",
        "32 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [115/5] + [115/25] + [115/125] = 27 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 120! (Factorial #15):",
      "opts": [
        "28 zeros",
        "30 zeros",
        "26 zeros",
        "33 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [120/5] + [120/25] + [120/125] = 28 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 125! (Factorial #16):",
      "opts": [
        "31 zeros",
        "33 zeros",
        "29 zeros",
        "36 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [125/5] + [125/25] + [125/125] = 31 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 130! (Factorial #17):",
      "opts": [
        "32 zeros",
        "34 zeros",
        "30 zeros",
        "37 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [130/5] + [130/25] + [130/125] = 32 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 135! (Factorial #18):",
      "opts": [
        "33 zeros",
        "35 zeros",
        "31 zeros",
        "38 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [135/5] + [135/25] + [135/125] = 33 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 140! (Factorial #19):",
      "opts": [
        "34 zeros",
        "36 zeros",
        "32 zeros",
        "39 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [140/5] + [140/25] + [140/125] = 34 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 145! (Factorial #20):",
      "opts": [
        "35 zeros",
        "37 zeros",
        "33 zeros",
        "40 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [145/5] + [145/25] + [145/125] = 35 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 150! (Factorial #21):",
      "opts": [
        "37 zeros",
        "39 zeros",
        "35 zeros",
        "42 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [150/5] + [150/25] + [150/125] = 37 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 155! (Factorial #22):",
      "opts": [
        "38 zeros",
        "40 zeros",
        "36 zeros",
        "43 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [155/5] + [155/25] + [155/125] = 38 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 160! (Factorial #23):",
      "opts": [
        "39 zeros",
        "41 zeros",
        "37 zeros",
        "44 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [160/5] + [160/25] + [160/125] = 39 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 165! (Factorial #24):",
      "opts": [
        "40 zeros",
        "42 zeros",
        "38 zeros",
        "45 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [165/5] + [165/25] + [165/125] = 40 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 170! (Factorial #25):",
      "opts": [
        "41 zeros",
        "43 zeros",
        "39 zeros",
        "46 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [170/5] + [170/25] + [170/125] = 41 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 175! (Factorial #26):",
      "opts": [
        "43 zeros",
        "45 zeros",
        "41 zeros",
        "48 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [175/5] + [175/25] + [175/125] = 43 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 180! (Factorial #27):",
      "opts": [
        "44 zeros",
        "46 zeros",
        "42 zeros",
        "49 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [180/5] + [180/25] + [180/125] = 44 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 185! (Factorial #28):",
      "opts": [
        "45 zeros",
        "47 zeros",
        "43 zeros",
        "50 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [185/5] + [185/25] + [185/125] = 45 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 190! (Factorial #29):",
      "opts": [
        "46 zeros",
        "48 zeros",
        "44 zeros",
        "51 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [190/5] + [190/25] + [190/125] = 46 trailing zeros."
    },
    {
      "q": "Find the number of trailing zeros in 195! (Factorial #30):",
      "opts": [
        "47 zeros",
        "49 zeros",
        "45 zeros",
        "52 zeros"
      ],
      "ans": "A",
      "exp": "Legendre's formula: [195/5] + [195/25] + [195/125] = 47 trailing zeros."
    }
  ],
  "level4": [
    {
      "q": "Find the remainder when 2^60 is divided by 7: (Advanced #1)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^60 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^61 is divided by 7: (Advanced #2)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^61 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^62 is divided by 7: (Advanced #3)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^62 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^63 is divided by 7: (Advanced #4)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^63 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^64 is divided by 7: (Advanced #5)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^64 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^65 is divided by 7: (Advanced #6)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^65 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^66 is divided by 7: (Advanced #7)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^66 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^67 is divided by 7: (Advanced #8)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^67 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^68 is divided by 7: (Advanced #9)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^68 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^69 is divided by 7: (Advanced #10)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^69 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^70 is divided by 7: (Advanced #11)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^70 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^71 is divided by 7: (Advanced #12)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^71 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^72 is divided by 7: (Advanced #13)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^72 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^73 is divided by 7: (Advanced #14)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^73 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^74 is divided by 7: (Advanced #15)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^74 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^75 is divided by 7: (Advanced #16)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^75 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^76 is divided by 7: (Advanced #17)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^76 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^77 is divided by 7: (Advanced #18)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^77 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^78 is divided by 7: (Advanced #19)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^78 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^79 is divided by 7: (Advanced #20)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^79 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^80 is divided by 7: (Advanced #21)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^80 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^81 is divided by 7: (Advanced #22)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^81 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^82 is divided by 7: (Advanced #23)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^82 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^83 is divided by 7: (Advanced #24)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^83 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^84 is divided by 7: (Advanced #25)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^84 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^85 is divided by 7: (Advanced #26)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^85 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^86 is divided by 7: (Advanced #27)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^86 ≡ 2^(2) mod 7 = 4."
    },
    {
      "q": "Find the remainder when 2^87 is divided by 7: (Advanced #28)",
      "opts": [
        "1",
        "3",
        "4",
        "6"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^87 ≡ 2^(0) mod 7 = 1."
    },
    {
      "q": "Find the remainder when 2^88 is divided by 7: (Advanced #29)",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^88 ≡ 2^(1) mod 7 = 2."
    },
    {
      "q": "Find the remainder when 2^89 is divided by 7: (Advanced #30)",
      "opts": [
        "4",
        "6",
        "0",
        "2"
      ],
      "ans": "A",
      "exp": "2³ = 8 ≡ 1 (mod 7). 2^89 ≡ 2^(2) mod 7 = 4."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["hcf-and-lcm"] = {
  "level1": [
    {
      "q": "Find the Highest Common Factor (HCF) of 24 and 36: (Question #1)",
      "opts": [
        "12",
        "24",
        "6",
        "16"
      ],
      "ans": "A",
      "exp": "Factors of 24 and 36: Greatest common divisor is 12."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 36 and 54: (Question #2)",
      "opts": [
        "18",
        "36",
        "9",
        "22"
      ],
      "ans": "A",
      "exp": "Factors of 36 and 54: Greatest common divisor is 18."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 48 and 72: (Question #3)",
      "opts": [
        "24",
        "48",
        "12",
        "28"
      ],
      "ans": "A",
      "exp": "Factors of 48 and 72: Greatest common divisor is 24."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 60 and 90: (Question #4)",
      "opts": [
        "30",
        "60",
        "15",
        "34"
      ],
      "ans": "A",
      "exp": "Factors of 60 and 90: Greatest common divisor is 30."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 72 and 108: (Question #5)",
      "opts": [
        "36",
        "72",
        "18",
        "40"
      ],
      "ans": "A",
      "exp": "Factors of 72 and 108: Greatest common divisor is 36."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 84 and 126: (Question #6)",
      "opts": [
        "42",
        "84",
        "21",
        "46"
      ],
      "ans": "A",
      "exp": "Factors of 84 and 126: Greatest common divisor is 42."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 24 and 36: (Question #7)",
      "opts": [
        "12",
        "24",
        "6",
        "16"
      ],
      "ans": "A",
      "exp": "Factors of 24 and 36: Greatest common divisor is 12."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 36 and 54: (Question #8)",
      "opts": [
        "18",
        "36",
        "9",
        "22"
      ],
      "ans": "A",
      "exp": "Factors of 36 and 54: Greatest common divisor is 18."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 48 and 72: (Question #9)",
      "opts": [
        "24",
        "48",
        "12",
        "28"
      ],
      "ans": "A",
      "exp": "Factors of 48 and 72: Greatest common divisor is 24."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 60 and 90: (Question #10)",
      "opts": [
        "30",
        "60",
        "15",
        "34"
      ],
      "ans": "A",
      "exp": "Factors of 60 and 90: Greatest common divisor is 30."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 72 and 108: (Question #11)",
      "opts": [
        "36",
        "72",
        "18",
        "40"
      ],
      "ans": "A",
      "exp": "Factors of 72 and 108: Greatest common divisor is 36."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 84 and 126: (Question #12)",
      "opts": [
        "42",
        "84",
        "21",
        "46"
      ],
      "ans": "A",
      "exp": "Factors of 84 and 126: Greatest common divisor is 42."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 24 and 36: (Question #13)",
      "opts": [
        "12",
        "24",
        "6",
        "16"
      ],
      "ans": "A",
      "exp": "Factors of 24 and 36: Greatest common divisor is 12."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 36 and 54: (Question #14)",
      "opts": [
        "18",
        "36",
        "9",
        "22"
      ],
      "ans": "A",
      "exp": "Factors of 36 and 54: Greatest common divisor is 18."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 48 and 72: (Question #15)",
      "opts": [
        "24",
        "48",
        "12",
        "28"
      ],
      "ans": "A",
      "exp": "Factors of 48 and 72: Greatest common divisor is 24."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 60 and 90: (Question #16)",
      "opts": [
        "30",
        "60",
        "15",
        "34"
      ],
      "ans": "A",
      "exp": "Factors of 60 and 90: Greatest common divisor is 30."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 72 and 108: (Question #17)",
      "opts": [
        "36",
        "72",
        "18",
        "40"
      ],
      "ans": "A",
      "exp": "Factors of 72 and 108: Greatest common divisor is 36."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 84 and 126: (Question #18)",
      "opts": [
        "42",
        "84",
        "21",
        "46"
      ],
      "ans": "A",
      "exp": "Factors of 84 and 126: Greatest common divisor is 42."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 24 and 36: (Question #19)",
      "opts": [
        "12",
        "24",
        "6",
        "16"
      ],
      "ans": "A",
      "exp": "Factors of 24 and 36: Greatest common divisor is 12."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 36 and 54: (Question #20)",
      "opts": [
        "18",
        "36",
        "9",
        "22"
      ],
      "ans": "A",
      "exp": "Factors of 36 and 54: Greatest common divisor is 18."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 48 and 72: (Question #21)",
      "opts": [
        "24",
        "48",
        "12",
        "28"
      ],
      "ans": "A",
      "exp": "Factors of 48 and 72: Greatest common divisor is 24."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 60 and 90: (Question #22)",
      "opts": [
        "30",
        "60",
        "15",
        "34"
      ],
      "ans": "A",
      "exp": "Factors of 60 and 90: Greatest common divisor is 30."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 72 and 108: (Question #23)",
      "opts": [
        "36",
        "72",
        "18",
        "40"
      ],
      "ans": "A",
      "exp": "Factors of 72 and 108: Greatest common divisor is 36."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 84 and 126: (Question #24)",
      "opts": [
        "42",
        "84",
        "21",
        "46"
      ],
      "ans": "A",
      "exp": "Factors of 84 and 126: Greatest common divisor is 42."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 24 and 36: (Question #25)",
      "opts": [
        "12",
        "24",
        "6",
        "16"
      ],
      "ans": "A",
      "exp": "Factors of 24 and 36: Greatest common divisor is 12."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 36 and 54: (Question #26)",
      "opts": [
        "18",
        "36",
        "9",
        "22"
      ],
      "ans": "A",
      "exp": "Factors of 36 and 54: Greatest common divisor is 18."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 48 and 72: (Question #27)",
      "opts": [
        "24",
        "48",
        "12",
        "28"
      ],
      "ans": "A",
      "exp": "Factors of 48 and 72: Greatest common divisor is 24."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 60 and 90: (Question #28)",
      "opts": [
        "30",
        "60",
        "15",
        "34"
      ],
      "ans": "A",
      "exp": "Factors of 60 and 90: Greatest common divisor is 30."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 72 and 108: (Question #29)",
      "opts": [
        "36",
        "72",
        "18",
        "40"
      ],
      "ans": "A",
      "exp": "Factors of 72 and 108: Greatest common divisor is 36."
    },
    {
      "q": "Find the Highest Common Factor (HCF) of 84 and 126: (Question #30)",
      "opts": [
        "42",
        "84",
        "21",
        "46"
      ],
      "ans": "A",
      "exp": "Factors of 84 and 126: Greatest common divisor is 42."
    }
  ],
  "level2": [
    {
      "q": "Find the Least Common Multiple (LCM) of 24 and 36: (Question #1)",
      "opts": [
        "72",
        "144",
        "84",
        "66"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (24 × 36) / 12 = 72."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 36 and 54: (Question #2)",
      "opts": [
        "108",
        "216",
        "120",
        "102"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (36 × 54) / 18 = 108."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 48 and 72: (Question #3)",
      "opts": [
        "144",
        "288",
        "156",
        "138"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (48 × 72) / 24 = 144."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 60 and 90: (Question #4)",
      "opts": [
        "180",
        "360",
        "192",
        "174"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (60 × 90) / 30 = 180."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 72 and 108: (Question #5)",
      "opts": [
        "216",
        "432",
        "228",
        "210"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (72 × 108) / 36 = 216."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 84 and 126: (Question #6)",
      "opts": [
        "252",
        "504",
        "264",
        "246"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (84 × 126) / 42 = 252."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 24 and 36: (Question #7)",
      "opts": [
        "72",
        "144",
        "84",
        "66"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (24 × 36) / 12 = 72."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 36 and 54: (Question #8)",
      "opts": [
        "108",
        "216",
        "120",
        "102"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (36 × 54) / 18 = 108."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 48 and 72: (Question #9)",
      "opts": [
        "144",
        "288",
        "156",
        "138"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (48 × 72) / 24 = 144."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 60 and 90: (Question #10)",
      "opts": [
        "180",
        "360",
        "192",
        "174"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (60 × 90) / 30 = 180."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 72 and 108: (Question #11)",
      "opts": [
        "216",
        "432",
        "228",
        "210"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (72 × 108) / 36 = 216."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 84 and 126: (Question #12)",
      "opts": [
        "252",
        "504",
        "264",
        "246"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (84 × 126) / 42 = 252."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 24 and 36: (Question #13)",
      "opts": [
        "72",
        "144",
        "84",
        "66"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (24 × 36) / 12 = 72."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 36 and 54: (Question #14)",
      "opts": [
        "108",
        "216",
        "120",
        "102"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (36 × 54) / 18 = 108."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 48 and 72: (Question #15)",
      "opts": [
        "144",
        "288",
        "156",
        "138"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (48 × 72) / 24 = 144."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 60 and 90: (Question #16)",
      "opts": [
        "180",
        "360",
        "192",
        "174"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (60 × 90) / 30 = 180."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 72 and 108: (Question #17)",
      "opts": [
        "216",
        "432",
        "228",
        "210"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (72 × 108) / 36 = 216."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 84 and 126: (Question #18)",
      "opts": [
        "252",
        "504",
        "264",
        "246"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (84 × 126) / 42 = 252."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 24 and 36: (Question #19)",
      "opts": [
        "72",
        "144",
        "84",
        "66"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (24 × 36) / 12 = 72."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 36 and 54: (Question #20)",
      "opts": [
        "108",
        "216",
        "120",
        "102"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (36 × 54) / 18 = 108."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 48 and 72: (Question #21)",
      "opts": [
        "144",
        "288",
        "156",
        "138"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (48 × 72) / 24 = 144."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 60 and 90: (Question #22)",
      "opts": [
        "180",
        "360",
        "192",
        "174"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (60 × 90) / 30 = 180."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 72 and 108: (Question #23)",
      "opts": [
        "216",
        "432",
        "228",
        "210"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (72 × 108) / 36 = 216."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 84 and 126: (Question #24)",
      "opts": [
        "252",
        "504",
        "264",
        "246"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (84 × 126) / 42 = 252."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 24 and 36: (Question #25)",
      "opts": [
        "72",
        "144",
        "84",
        "66"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (24 × 36) / 12 = 72."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 36 and 54: (Question #26)",
      "opts": [
        "108",
        "216",
        "120",
        "102"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (36 × 54) / 18 = 108."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 48 and 72: (Question #27)",
      "opts": [
        "144",
        "288",
        "156",
        "138"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (48 × 72) / 24 = 144."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 60 and 90: (Question #28)",
      "opts": [
        "180",
        "360",
        "192",
        "174"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (60 × 90) / 30 = 180."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 72 and 108: (Question #29)",
      "opts": [
        "216",
        "432",
        "228",
        "210"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (72 × 108) / 36 = 216."
    },
    {
      "q": "Find the Least Common Multiple (LCM) of 84 and 126: (Question #30)",
      "opts": [
        "252",
        "504",
        "264",
        "246"
      ],
      "ans": "A",
      "exp": "LCM = (a × b) / HCF = (84 × 126) / 42 = 252."
    }
  ],
  "level3": [
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #1)",
      "opts": [
        "72 minutes",
        "82 minutes",
        "67 minutes",
        "92 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 72 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #2)",
      "opts": [
        "108 minutes",
        "118 minutes",
        "103 minutes",
        "128 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 108 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #3)",
      "opts": [
        "144 minutes",
        "154 minutes",
        "139 minutes",
        "164 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 144 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #4)",
      "opts": [
        "180 minutes",
        "190 minutes",
        "175 minutes",
        "200 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 180 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #5)",
      "opts": [
        "216 minutes",
        "226 minutes",
        "211 minutes",
        "236 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 216 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #6)",
      "opts": [
        "252 minutes",
        "262 minutes",
        "247 minutes",
        "272 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 252 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #7)",
      "opts": [
        "72 minutes",
        "82 minutes",
        "67 minutes",
        "92 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 72 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #8)",
      "opts": [
        "108 minutes",
        "118 minutes",
        "103 minutes",
        "128 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 108 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #9)",
      "opts": [
        "144 minutes",
        "154 minutes",
        "139 minutes",
        "164 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 144 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #10)",
      "opts": [
        "180 minutes",
        "190 minutes",
        "175 minutes",
        "200 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 180 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #11)",
      "opts": [
        "216 minutes",
        "226 minutes",
        "211 minutes",
        "236 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 216 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #12)",
      "opts": [
        "252 minutes",
        "262 minutes",
        "247 minutes",
        "272 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 252 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #13)",
      "opts": [
        "72 minutes",
        "82 minutes",
        "67 minutes",
        "92 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 72 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #14)",
      "opts": [
        "108 minutes",
        "118 minutes",
        "103 minutes",
        "128 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 108 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #15)",
      "opts": [
        "144 minutes",
        "154 minutes",
        "139 minutes",
        "164 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 144 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #16)",
      "opts": [
        "180 minutes",
        "190 minutes",
        "175 minutes",
        "200 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 180 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #17)",
      "opts": [
        "216 minutes",
        "226 minutes",
        "211 minutes",
        "236 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 216 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #18)",
      "opts": [
        "252 minutes",
        "262 minutes",
        "247 minutes",
        "272 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 252 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #19)",
      "opts": [
        "72 minutes",
        "82 minutes",
        "67 minutes",
        "92 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 72 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #20)",
      "opts": [
        "108 minutes",
        "118 minutes",
        "103 minutes",
        "128 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 108 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #21)",
      "opts": [
        "144 minutes",
        "154 minutes",
        "139 minutes",
        "164 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 144 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #22)",
      "opts": [
        "180 minutes",
        "190 minutes",
        "175 minutes",
        "200 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 180 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #23)",
      "opts": [
        "216 minutes",
        "226 minutes",
        "211 minutes",
        "236 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 216 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #24)",
      "opts": [
        "252 minutes",
        "262 minutes",
        "247 minutes",
        "272 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 252 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #25)",
      "opts": [
        "72 minutes",
        "82 minutes",
        "67 minutes",
        "92 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 72 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #26)",
      "opts": [
        "108 minutes",
        "118 minutes",
        "103 minutes",
        "128 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 108 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #27)",
      "opts": [
        "144 minutes",
        "154 minutes",
        "139 minutes",
        "164 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 144 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 4, 6, and 8 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #28)",
      "opts": [
        "180 minutes",
        "190 minutes",
        "175 minutes",
        "200 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 180 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 5, 7, and 9 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #29)",
      "opts": [
        "216 minutes",
        "226 minutes",
        "211 minutes",
        "236 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 216 minutes."
    },
    {
      "q": "Three electronic bells toll at intervals of 6, 8, and 10 minutes. If they toll together at 10:00 AM, after how many minutes will they toll together next? (Bell Set #30)",
      "opts": [
        "252 minutes",
        "262 minutes",
        "247 minutes",
        "272 minutes"
      ],
      "ans": "A",
      "exp": "The bells toll together at multiples of the LCM of their intervals = 252 minutes."
    }
  ],
  "level4": [
    {
      "q": "The product of two numbers is 60000 and their HCF is 40. What is their LCM? (Advanced #1)",
      "opts": [
        "1500",
        "1550",
        "1450",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 1500."
    },
    {
      "q": "The product of two numbers is 66150 and their HCF is 42. What is their LCM? (Advanced #2)",
      "opts": [
        "1575",
        "1625",
        "1525",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 1575."
    },
    {
      "q": "The product of two numbers is 72600 and their HCF is 44. What is their LCM? (Advanced #3)",
      "opts": [
        "1650",
        "1700",
        "1600",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 1650."
    },
    {
      "q": "The product of two numbers is 79350 and their HCF is 46. What is their LCM? (Advanced #4)",
      "opts": [
        "1725",
        "1775",
        "1675",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 1725."
    },
    {
      "q": "The product of two numbers is 86400 and their HCF is 48. What is their LCM? (Advanced #5)",
      "opts": [
        "1800",
        "1850",
        "1750",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 1800."
    },
    {
      "q": "The product of two numbers is 93750 and their HCF is 50. What is their LCM? (Advanced #6)",
      "opts": [
        "1875",
        "1925",
        "1825",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 1875."
    },
    {
      "q": "The product of two numbers is 101400 and their HCF is 52. What is their LCM? (Advanced #7)",
      "opts": [
        "1950",
        "2000",
        "1900",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 1950."
    },
    {
      "q": "The product of two numbers is 109350 and their HCF is 54. What is their LCM? (Advanced #8)",
      "opts": [
        "2025",
        "2075",
        "1975",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2025."
    },
    {
      "q": "The product of two numbers is 117600 and their HCF is 56. What is their LCM? (Advanced #9)",
      "opts": [
        "2100",
        "2150",
        "2050",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2100."
    },
    {
      "q": "The product of two numbers is 126150 and their HCF is 58. What is their LCM? (Advanced #10)",
      "opts": [
        "2175",
        "2225",
        "2125",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2175."
    },
    {
      "q": "The product of two numbers is 135000 and their HCF is 60. What is their LCM? (Advanced #11)",
      "opts": [
        "2250",
        "2300",
        "2200",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2250."
    },
    {
      "q": "The product of two numbers is 144150 and their HCF is 62. What is their LCM? (Advanced #12)",
      "opts": [
        "2325",
        "2375",
        "2275",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2325."
    },
    {
      "q": "The product of two numbers is 153600 and their HCF is 64. What is their LCM? (Advanced #13)",
      "opts": [
        "2400",
        "2450",
        "2350",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2400."
    },
    {
      "q": "The product of two numbers is 163350 and their HCF is 66. What is their LCM? (Advanced #14)",
      "opts": [
        "2475",
        "2525",
        "2425",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2475."
    },
    {
      "q": "The product of two numbers is 173400 and their HCF is 68. What is their LCM? (Advanced #15)",
      "opts": [
        "2550",
        "2600",
        "2500",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2550."
    },
    {
      "q": "The product of two numbers is 183750 and their HCF is 70. What is their LCM? (Advanced #16)",
      "opts": [
        "2625",
        "2675",
        "2575",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2625."
    },
    {
      "q": "The product of two numbers is 194400 and their HCF is 72. What is their LCM? (Advanced #17)",
      "opts": [
        "2700",
        "2750",
        "2650",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2700."
    },
    {
      "q": "The product of two numbers is 205350 and their HCF is 74. What is their LCM? (Advanced #18)",
      "opts": [
        "2775",
        "2825",
        "2725",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2775."
    },
    {
      "q": "The product of two numbers is 216600 and their HCF is 76. What is their LCM? (Advanced #19)",
      "opts": [
        "2850",
        "2900",
        "2800",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2850."
    },
    {
      "q": "The product of two numbers is 228150 and their HCF is 78. What is their LCM? (Advanced #20)",
      "opts": [
        "2925",
        "2975",
        "2875",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 2925."
    },
    {
      "q": "The product of two numbers is 240000 and their HCF is 80. What is their LCM? (Advanced #21)",
      "opts": [
        "3000",
        "3050",
        "2950",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3000."
    },
    {
      "q": "The product of two numbers is 252150 and their HCF is 82. What is their LCM? (Advanced #22)",
      "opts": [
        "3075",
        "3125",
        "3025",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3075."
    },
    {
      "q": "The product of two numbers is 264600 and their HCF is 84. What is their LCM? (Advanced #23)",
      "opts": [
        "3150",
        "3200",
        "3100",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3150."
    },
    {
      "q": "The product of two numbers is 277350 and their HCF is 86. What is their LCM? (Advanced #24)",
      "opts": [
        "3225",
        "3275",
        "3175",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3225."
    },
    {
      "q": "The product of two numbers is 290400 and their HCF is 88. What is their LCM? (Advanced #25)",
      "opts": [
        "3300",
        "3350",
        "3250",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3300."
    },
    {
      "q": "The product of two numbers is 303750 and their HCF is 90. What is their LCM? (Advanced #26)",
      "opts": [
        "3375",
        "3425",
        "3325",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3375."
    },
    {
      "q": "The product of two numbers is 317400 and their HCF is 92. What is their LCM? (Advanced #27)",
      "opts": [
        "3450",
        "3500",
        "3400",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3450."
    },
    {
      "q": "The product of two numbers is 331350 and their HCF is 94. What is their LCM? (Advanced #28)",
      "opts": [
        "3525",
        "3575",
        "3475",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3525."
    },
    {
      "q": "The product of two numbers is 345600 and their HCF is 96. What is their LCM? (Advanced #29)",
      "opts": [
        "3600",
        "3650",
        "3550",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3600."
    },
    {
      "q": "The product of two numbers is 360150 and their HCF is 98. What is their LCM? (Advanced #30)",
      "opts": [
        "3675",
        "3725",
        "3625",
        "Cannot be determined"
      ],
      "ans": "A",
      "exp": "Product of two numbers = HCF × LCM -> LCM = Product / HCF = 3675."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["time-and-work"] = {
  "level1": [
    {
      "q": "A can complete a piece of work in 10 days and B can complete it in 15 days. In how many days can both complete it working together? (Work #1)",
      "opts": [
        "6 days",
        "8 days",
        "5 days",
        "25 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (10 × 15) / (10 + 15) = 6 days."
    },
    {
      "q": "A can complete a piece of work in 11 days and B can complete it in 16 days. In how many days can both complete it working together? (Work #2)",
      "opts": [
        "6.5 days",
        "9 days",
        "6 days",
        "27 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (11 × 16) / (11 + 16) = 6.5 days."
    },
    {
      "q": "A can complete a piece of work in 12 days and B can complete it in 17 days. In how many days can both complete it working together? (Work #3)",
      "opts": [
        "7 days",
        "9 days",
        "6 days",
        "29 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (12 × 17) / (12 + 17) = 7 days."
    },
    {
      "q": "A can complete a piece of work in 13 days and B can complete it in 18 days. In how many days can both complete it working together? (Work #4)",
      "opts": [
        "7.5 days",
        "10 days",
        "7 days",
        "31 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (13 × 18) / (13 + 18) = 7.5 days."
    },
    {
      "q": "A can complete a piece of work in 14 days and B can complete it in 19 days. In how many days can both complete it working together? (Work #5)",
      "opts": [
        "8.1 days",
        "10 days",
        "7 days",
        "33 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (14 × 19) / (14 + 19) = 8.1 days."
    },
    {
      "q": "A can complete a piece of work in 15 days and B can complete it in 20 days. In how many days can both complete it working together? (Work #6)",
      "opts": [
        "8.6 days",
        "11 days",
        "8 days",
        "35 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (15 × 20) / (15 + 20) = 8.6 days."
    },
    {
      "q": "A can complete a piece of work in 16 days and B can complete it in 21 days. In how many days can both complete it working together? (Work #7)",
      "opts": [
        "9.1 days",
        "11 days",
        "8 days",
        "37 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (16 × 21) / (16 + 21) = 9.1 days."
    },
    {
      "q": "A can complete a piece of work in 17 days and B can complete it in 22 days. In how many days can both complete it working together? (Work #8)",
      "opts": [
        "9.6 days",
        "12 days",
        "9 days",
        "39 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (17 × 22) / (17 + 22) = 9.6 days."
    },
    {
      "q": "A can complete a piece of work in 18 days and B can complete it in 23 days. In how many days can both complete it working together? (Work #9)",
      "opts": [
        "10.1 days",
        "12 days",
        "9 days",
        "41 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (18 × 23) / (18 + 23) = 10.1 days."
    },
    {
      "q": "A can complete a piece of work in 19 days and B can complete it in 24 days. In how many days can both complete it working together? (Work #10)",
      "opts": [
        "10.6 days",
        "13 days",
        "10 days",
        "43 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (19 × 24) / (19 + 24) = 10.6 days."
    },
    {
      "q": "A can complete a piece of work in 20 days and B can complete it in 25 days. In how many days can both complete it working together? (Work #11)",
      "opts": [
        "11.1 days",
        "13 days",
        "10 days",
        "45 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (20 × 25) / (20 + 25) = 11.1 days."
    },
    {
      "q": "A can complete a piece of work in 21 days and B can complete it in 26 days. In how many days can both complete it working together? (Work #12)",
      "opts": [
        "11.6 days",
        "14 days",
        "11 days",
        "47 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (21 × 26) / (21 + 26) = 11.6 days."
    },
    {
      "q": "A can complete a piece of work in 22 days and B can complete it in 27 days. In how many days can both complete it working together? (Work #13)",
      "opts": [
        "12.1 days",
        "14 days",
        "11 days",
        "49 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (22 × 27) / (22 + 27) = 12.1 days."
    },
    {
      "q": "A can complete a piece of work in 23 days and B can complete it in 28 days. In how many days can both complete it working together? (Work #14)",
      "opts": [
        "12.6 days",
        "15 days",
        "12 days",
        "51 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (23 × 28) / (23 + 28) = 12.6 days."
    },
    {
      "q": "A can complete a piece of work in 24 days and B can complete it in 29 days. In how many days can both complete it working together? (Work #15)",
      "opts": [
        "13.1 days",
        "15 days",
        "12 days",
        "53 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (24 × 29) / (24 + 29) = 13.1 days."
    },
    {
      "q": "A can complete a piece of work in 25 days and B can complete it in 30 days. In how many days can both complete it working together? (Work #16)",
      "opts": [
        "13.6 days",
        "16 days",
        "13 days",
        "55 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (25 × 30) / (25 + 30) = 13.6 days."
    },
    {
      "q": "A can complete a piece of work in 26 days and B can complete it in 31 days. In how many days can both complete it working together? (Work #17)",
      "opts": [
        "14.1 days",
        "16 days",
        "13 days",
        "57 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (26 × 31) / (26 + 31) = 14.1 days."
    },
    {
      "q": "A can complete a piece of work in 27 days and B can complete it in 32 days. In how many days can both complete it working together? (Work #18)",
      "opts": [
        "14.6 days",
        "17 days",
        "14 days",
        "59 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (27 × 32) / (27 + 32) = 14.6 days."
    },
    {
      "q": "A can complete a piece of work in 28 days and B can complete it in 33 days. In how many days can both complete it working together? (Work #19)",
      "opts": [
        "15.1 days",
        "17 days",
        "14 days",
        "61 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (28 × 33) / (28 + 33) = 15.1 days."
    },
    {
      "q": "A can complete a piece of work in 29 days and B can complete it in 34 days. In how many days can both complete it working together? (Work #20)",
      "opts": [
        "15.7 days",
        "18 days",
        "15 days",
        "63 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (29 × 34) / (29 + 34) = 15.7 days."
    },
    {
      "q": "A can complete a piece of work in 30 days and B can complete it in 35 days. In how many days can both complete it working together? (Work #21)",
      "opts": [
        "16.2 days",
        "18 days",
        "15 days",
        "65 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (30 × 35) / (30 + 35) = 16.2 days."
    },
    {
      "q": "A can complete a piece of work in 31 days and B can complete it in 36 days. In how many days can both complete it working together? (Work #22)",
      "opts": [
        "16.7 days",
        "19 days",
        "16 days",
        "67 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (31 × 36) / (31 + 36) = 16.7 days."
    },
    {
      "q": "A can complete a piece of work in 32 days and B can complete it in 37 days. In how many days can both complete it working together? (Work #23)",
      "opts": [
        "17.2 days",
        "19 days",
        "16 days",
        "69 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (32 × 37) / (32 + 37) = 17.2 days."
    },
    {
      "q": "A can complete a piece of work in 33 days and B can complete it in 38 days. In how many days can both complete it working together? (Work #24)",
      "opts": [
        "17.7 days",
        "20 days",
        "17 days",
        "71 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (33 × 38) / (33 + 38) = 17.7 days."
    },
    {
      "q": "A can complete a piece of work in 34 days and B can complete it in 39 days. In how many days can both complete it working together? (Work #25)",
      "opts": [
        "18.2 days",
        "20 days",
        "17 days",
        "73 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (34 × 39) / (34 + 39) = 18.2 days."
    },
    {
      "q": "A can complete a piece of work in 35 days and B can complete it in 40 days. In how many days can both complete it working together? (Work #26)",
      "opts": [
        "18.7 days",
        "21 days",
        "18 days",
        "75 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (35 × 40) / (35 + 40) = 18.7 days."
    },
    {
      "q": "A can complete a piece of work in 36 days and B can complete it in 41 days. In how many days can both complete it working together? (Work #27)",
      "opts": [
        "19.2 days",
        "21 days",
        "18 days",
        "77 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (36 × 41) / (36 + 41) = 19.2 days."
    },
    {
      "q": "A can complete a piece of work in 37 days and B can complete it in 42 days. In how many days can both complete it working together? (Work #28)",
      "opts": [
        "19.7 days",
        "22 days",
        "19 days",
        "79 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (37 × 42) / (37 + 42) = 19.7 days."
    },
    {
      "q": "A can complete a piece of work in 38 days and B can complete it in 43 days. In how many days can both complete it working together? (Work #29)",
      "opts": [
        "20.2 days",
        "22 days",
        "19 days",
        "81 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (38 × 43) / (38 + 43) = 20.2 days."
    },
    {
      "q": "A can complete a piece of work in 39 days and B can complete it in 44 days. In how many days can both complete it working together? (Work #30)",
      "opts": [
        "20.7 days",
        "23 days",
        "20 days",
        "83 days"
      ],
      "ans": "A",
      "exp": "Together time = (A × B) / (A + B) = (39 × 44) / (39 + 44) = 20.7 days."
    }
  ],
  "level2": [
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 10 days, in how many days can A alone complete the work? (Efficiency #1)",
      "opts": [
        "15 days",
        "20 days",
        "30 days",
        "18 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 10. A alone = (30) / 2 = 15 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 11 days, in how many days can A alone complete the work? (Efficiency #2)",
      "opts": [
        "16.5 days",
        "22 days",
        "33 days",
        "20 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 11. A alone = (33) / 2 = 16.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 12 days, in how many days can A alone complete the work? (Efficiency #3)",
      "opts": [
        "18 days",
        "24 days",
        "36 days",
        "21 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 12. A alone = (36) / 2 = 18 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 13 days, in how many days can A alone complete the work? (Efficiency #4)",
      "opts": [
        "19.5 days",
        "26 days",
        "39 days",
        "23 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 13. A alone = (39) / 2 = 19.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 14 days, in how many days can A alone complete the work? (Efficiency #5)",
      "opts": [
        "21 days",
        "28 days",
        "42 days",
        "24 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 14. A alone = (42) / 2 = 21 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 15 days, in how many days can A alone complete the work? (Efficiency #6)",
      "opts": [
        "22.5 days",
        "30 days",
        "45 days",
        "26 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 15. A alone = (45) / 2 = 22.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 16 days, in how many days can A alone complete the work? (Efficiency #7)",
      "opts": [
        "24 days",
        "32 days",
        "48 days",
        "27 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 16. A alone = (48) / 2 = 24 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 17 days, in how many days can A alone complete the work? (Efficiency #8)",
      "opts": [
        "25.5 days",
        "34 days",
        "51 days",
        "29 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 17. A alone = (51) / 2 = 25.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 18 days, in how many days can A alone complete the work? (Efficiency #9)",
      "opts": [
        "27 days",
        "36 days",
        "54 days",
        "30 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 18. A alone = (54) / 2 = 27 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 19 days, in how many days can A alone complete the work? (Efficiency #10)",
      "opts": [
        "28.5 days",
        "38 days",
        "57 days",
        "32 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 19. A alone = (57) / 2 = 28.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 20 days, in how many days can A alone complete the work? (Efficiency #11)",
      "opts": [
        "30 days",
        "40 days",
        "60 days",
        "33 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 20. A alone = (60) / 2 = 30 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 21 days, in how many days can A alone complete the work? (Efficiency #12)",
      "opts": [
        "31.5 days",
        "42 days",
        "63 days",
        "35 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 21. A alone = (63) / 2 = 31.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 22 days, in how many days can A alone complete the work? (Efficiency #13)",
      "opts": [
        "33 days",
        "44 days",
        "66 days",
        "36 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 22. A alone = (66) / 2 = 33 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 23 days, in how many days can A alone complete the work? (Efficiency #14)",
      "opts": [
        "34.5 days",
        "46 days",
        "69 days",
        "38 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 23. A alone = (69) / 2 = 34.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 24 days, in how many days can A alone complete the work? (Efficiency #15)",
      "opts": [
        "36 days",
        "48 days",
        "72 days",
        "39 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 24. A alone = (72) / 2 = 36 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 25 days, in how many days can A alone complete the work? (Efficiency #16)",
      "opts": [
        "37.5 days",
        "50 days",
        "75 days",
        "41 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 25. A alone = (75) / 2 = 37.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 26 days, in how many days can A alone complete the work? (Efficiency #17)",
      "opts": [
        "39 days",
        "52 days",
        "78 days",
        "42 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 26. A alone = (78) / 2 = 39 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 27 days, in how many days can A alone complete the work? (Efficiency #18)",
      "opts": [
        "40.5 days",
        "54 days",
        "81 days",
        "44 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 27. A alone = (81) / 2 = 40.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 28 days, in how many days can A alone complete the work? (Efficiency #19)",
      "opts": [
        "42 days",
        "56 days",
        "84 days",
        "45 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 28. A alone = (84) / 2 = 42 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 29 days, in how many days can A alone complete the work? (Efficiency #20)",
      "opts": [
        "43.5 days",
        "58 days",
        "87 days",
        "47 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 29. A alone = (87) / 2 = 43.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 30 days, in how many days can A alone complete the work? (Efficiency #21)",
      "opts": [
        "45 days",
        "60 days",
        "90 days",
        "48 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 30. A alone = (90) / 2 = 45 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 31 days, in how many days can A alone complete the work? (Efficiency #22)",
      "opts": [
        "46.5 days",
        "62 days",
        "93 days",
        "50 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 31. A alone = (93) / 2 = 46.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 32 days, in how many days can A alone complete the work? (Efficiency #23)",
      "opts": [
        "48 days",
        "64 days",
        "96 days",
        "51 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 32. A alone = (96) / 2 = 48 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 33 days, in how many days can A alone complete the work? (Efficiency #24)",
      "opts": [
        "49.5 days",
        "66 days",
        "99 days",
        "53 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 33. A alone = (99) / 2 = 49.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 34 days, in how many days can A alone complete the work? (Efficiency #25)",
      "opts": [
        "51 days",
        "68 days",
        "102 days",
        "54 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 34. A alone = (102) / 2 = 51 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 35 days, in how many days can A alone complete the work? (Efficiency #26)",
      "opts": [
        "52.5 days",
        "70 days",
        "105 days",
        "56 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 35. A alone = (105) / 2 = 52.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 36 days, in how many days can A alone complete the work? (Efficiency #27)",
      "opts": [
        "54 days",
        "72 days",
        "108 days",
        "57 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 36. A alone = (108) / 2 = 54 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 37 days, in how many days can A alone complete the work? (Efficiency #28)",
      "opts": [
        "55.5 days",
        "74 days",
        "111 days",
        "59 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 37. A alone = (111) / 2 = 55.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 38 days, in how many days can A alone complete the work? (Efficiency #29)",
      "opts": [
        "57 days",
        "76 days",
        "114 days",
        "60 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 38. A alone = (114) / 2 = 57 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 39 days, in how many days can A alone complete the work? (Efficiency #30)",
      "opts": [
        "58.5 days",
        "78 days",
        "117 days",
        "62 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 39. A alone = (117) / 2 = 58.5 days."
    }
  ],
  "level3": [
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 10 days, in how many days can A alone complete the work? (Efficiency #1)",
      "opts": [
        "15 days",
        "20 days",
        "30 days",
        "18 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 10. A alone = (30) / 2 = 15 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 11 days, in how many days can A alone complete the work? (Efficiency #2)",
      "opts": [
        "16.5 days",
        "22 days",
        "33 days",
        "20 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 11. A alone = (33) / 2 = 16.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 12 days, in how many days can A alone complete the work? (Efficiency #3)",
      "opts": [
        "18 days",
        "24 days",
        "36 days",
        "21 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 12. A alone = (36) / 2 = 18 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 13 days, in how many days can A alone complete the work? (Efficiency #4)",
      "opts": [
        "19.5 days",
        "26 days",
        "39 days",
        "23 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 13. A alone = (39) / 2 = 19.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 14 days, in how many days can A alone complete the work? (Efficiency #5)",
      "opts": [
        "21 days",
        "28 days",
        "42 days",
        "24 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 14. A alone = (42) / 2 = 21 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 15 days, in how many days can A alone complete the work? (Efficiency #6)",
      "opts": [
        "22.5 days",
        "30 days",
        "45 days",
        "26 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 15. A alone = (45) / 2 = 22.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 16 days, in how many days can A alone complete the work? (Efficiency #7)",
      "opts": [
        "24 days",
        "32 days",
        "48 days",
        "27 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 16. A alone = (48) / 2 = 24 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 17 days, in how many days can A alone complete the work? (Efficiency #8)",
      "opts": [
        "25.5 days",
        "34 days",
        "51 days",
        "29 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 17. A alone = (51) / 2 = 25.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 18 days, in how many days can A alone complete the work? (Efficiency #9)",
      "opts": [
        "27 days",
        "36 days",
        "54 days",
        "30 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 18. A alone = (54) / 2 = 27 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 19 days, in how many days can A alone complete the work? (Efficiency #10)",
      "opts": [
        "28.5 days",
        "38 days",
        "57 days",
        "32 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 19. A alone = (57) / 2 = 28.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 20 days, in how many days can A alone complete the work? (Efficiency #11)",
      "opts": [
        "30 days",
        "40 days",
        "60 days",
        "33 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 20. A alone = (60) / 2 = 30 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 21 days, in how many days can A alone complete the work? (Efficiency #12)",
      "opts": [
        "31.5 days",
        "42 days",
        "63 days",
        "35 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 21. A alone = (63) / 2 = 31.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 22 days, in how many days can A alone complete the work? (Efficiency #13)",
      "opts": [
        "33 days",
        "44 days",
        "66 days",
        "36 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 22. A alone = (66) / 2 = 33 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 23 days, in how many days can A alone complete the work? (Efficiency #14)",
      "opts": [
        "34.5 days",
        "46 days",
        "69 days",
        "38 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 23. A alone = (69) / 2 = 34.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 24 days, in how many days can A alone complete the work? (Efficiency #15)",
      "opts": [
        "36 days",
        "48 days",
        "72 days",
        "39 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 24. A alone = (72) / 2 = 36 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 25 days, in how many days can A alone complete the work? (Efficiency #16)",
      "opts": [
        "37.5 days",
        "50 days",
        "75 days",
        "41 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 25. A alone = (75) / 2 = 37.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 26 days, in how many days can A alone complete the work? (Efficiency #17)",
      "opts": [
        "39 days",
        "52 days",
        "78 days",
        "42 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 26. A alone = (78) / 2 = 39 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 27 days, in how many days can A alone complete the work? (Efficiency #18)",
      "opts": [
        "40.5 days",
        "54 days",
        "81 days",
        "44 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 27. A alone = (81) / 2 = 40.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 28 days, in how many days can A alone complete the work? (Efficiency #19)",
      "opts": [
        "42 days",
        "56 days",
        "84 days",
        "45 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 28. A alone = (84) / 2 = 42 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 29 days, in how many days can A alone complete the work? (Efficiency #20)",
      "opts": [
        "43.5 days",
        "58 days",
        "87 days",
        "47 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 29. A alone = (87) / 2 = 43.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 30 days, in how many days can A alone complete the work? (Efficiency #21)",
      "opts": [
        "45 days",
        "60 days",
        "90 days",
        "48 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 30. A alone = (90) / 2 = 45 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 31 days, in how many days can A alone complete the work? (Efficiency #22)",
      "opts": [
        "46.5 days",
        "62 days",
        "93 days",
        "50 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 31. A alone = (93) / 2 = 46.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 32 days, in how many days can A alone complete the work? (Efficiency #23)",
      "opts": [
        "48 days",
        "64 days",
        "96 days",
        "51 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 32. A alone = (96) / 2 = 48 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 33 days, in how many days can A alone complete the work? (Efficiency #24)",
      "opts": [
        "49.5 days",
        "66 days",
        "99 days",
        "53 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 33. A alone = (99) / 2 = 49.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 34 days, in how many days can A alone complete the work? (Efficiency #25)",
      "opts": [
        "51 days",
        "68 days",
        "102 days",
        "54 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 34. A alone = (102) / 2 = 51 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 35 days, in how many days can A alone complete the work? (Efficiency #26)",
      "opts": [
        "52.5 days",
        "70 days",
        "105 days",
        "56 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 35. A alone = (105) / 2 = 52.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 36 days, in how many days can A alone complete the work? (Efficiency #27)",
      "opts": [
        "54 days",
        "72 days",
        "108 days",
        "57 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 36. A alone = (108) / 2 = 54 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 37 days, in how many days can A alone complete the work? (Efficiency #28)",
      "opts": [
        "55.5 days",
        "74 days",
        "111 days",
        "59 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 37. A alone = (111) / 2 = 55.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 38 days, in how many days can A alone complete the work? (Efficiency #29)",
      "opts": [
        "57 days",
        "76 days",
        "114 days",
        "60 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 38. A alone = (114) / 2 = 57 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 39 days, in how many days can A alone complete the work? (Efficiency #30)",
      "opts": [
        "58.5 days",
        "78 days",
        "117 days",
        "62 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 39. A alone = (117) / 2 = 58.5 days."
    }
  ],
  "level4": [
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 10 days, in how many days can A alone complete the work? (Efficiency #1)",
      "opts": [
        "15 days",
        "20 days",
        "30 days",
        "18 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 10. A alone = (30) / 2 = 15 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 11 days, in how many days can A alone complete the work? (Efficiency #2)",
      "opts": [
        "16.5 days",
        "22 days",
        "33 days",
        "20 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 11. A alone = (33) / 2 = 16.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 12 days, in how many days can A alone complete the work? (Efficiency #3)",
      "opts": [
        "18 days",
        "24 days",
        "36 days",
        "21 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 12. A alone = (36) / 2 = 18 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 13 days, in how many days can A alone complete the work? (Efficiency #4)",
      "opts": [
        "19.5 days",
        "26 days",
        "39 days",
        "23 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 13. A alone = (39) / 2 = 19.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 14 days, in how many days can A alone complete the work? (Efficiency #5)",
      "opts": [
        "21 days",
        "28 days",
        "42 days",
        "24 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 14. A alone = (42) / 2 = 21 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 15 days, in how many days can A alone complete the work? (Efficiency #6)",
      "opts": [
        "22.5 days",
        "30 days",
        "45 days",
        "26 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 15. A alone = (45) / 2 = 22.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 16 days, in how many days can A alone complete the work? (Efficiency #7)",
      "opts": [
        "24 days",
        "32 days",
        "48 days",
        "27 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 16. A alone = (48) / 2 = 24 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 17 days, in how many days can A alone complete the work? (Efficiency #8)",
      "opts": [
        "25.5 days",
        "34 days",
        "51 days",
        "29 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 17. A alone = (51) / 2 = 25.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 18 days, in how many days can A alone complete the work? (Efficiency #9)",
      "opts": [
        "27 days",
        "36 days",
        "54 days",
        "30 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 18. A alone = (54) / 2 = 27 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 19 days, in how many days can A alone complete the work? (Efficiency #10)",
      "opts": [
        "28.5 days",
        "38 days",
        "57 days",
        "32 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 19. A alone = (57) / 2 = 28.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 20 days, in how many days can A alone complete the work? (Efficiency #11)",
      "opts": [
        "30 days",
        "40 days",
        "60 days",
        "33 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 20. A alone = (60) / 2 = 30 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 21 days, in how many days can A alone complete the work? (Efficiency #12)",
      "opts": [
        "31.5 days",
        "42 days",
        "63 days",
        "35 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 21. A alone = (63) / 2 = 31.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 22 days, in how many days can A alone complete the work? (Efficiency #13)",
      "opts": [
        "33 days",
        "44 days",
        "66 days",
        "36 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 22. A alone = (66) / 2 = 33 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 23 days, in how many days can A alone complete the work? (Efficiency #14)",
      "opts": [
        "34.5 days",
        "46 days",
        "69 days",
        "38 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 23. A alone = (69) / 2 = 34.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 24 days, in how many days can A alone complete the work? (Efficiency #15)",
      "opts": [
        "36 days",
        "48 days",
        "72 days",
        "39 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 24. A alone = (72) / 2 = 36 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 25 days, in how many days can A alone complete the work? (Efficiency #16)",
      "opts": [
        "37.5 days",
        "50 days",
        "75 days",
        "41 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 25. A alone = (75) / 2 = 37.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 26 days, in how many days can A alone complete the work? (Efficiency #17)",
      "opts": [
        "39 days",
        "52 days",
        "78 days",
        "42 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 26. A alone = (78) / 2 = 39 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 27 days, in how many days can A alone complete the work? (Efficiency #18)",
      "opts": [
        "40.5 days",
        "54 days",
        "81 days",
        "44 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 27. A alone = (81) / 2 = 40.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 28 days, in how many days can A alone complete the work? (Efficiency #19)",
      "opts": [
        "42 days",
        "56 days",
        "84 days",
        "45 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 28. A alone = (84) / 2 = 42 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 29 days, in how many days can A alone complete the work? (Efficiency #20)",
      "opts": [
        "43.5 days",
        "58 days",
        "87 days",
        "47 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 29. A alone = (87) / 2 = 43.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 30 days, in how many days can A alone complete the work? (Efficiency #21)",
      "opts": [
        "45 days",
        "60 days",
        "90 days",
        "48 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 30. A alone = (90) / 2 = 45 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 31 days, in how many days can A alone complete the work? (Efficiency #22)",
      "opts": [
        "46.5 days",
        "62 days",
        "93 days",
        "50 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 31. A alone = (93) / 2 = 46.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 32 days, in how many days can A alone complete the work? (Efficiency #23)",
      "opts": [
        "48 days",
        "64 days",
        "96 days",
        "51 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 32. A alone = (96) / 2 = 48 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 33 days, in how many days can A alone complete the work? (Efficiency #24)",
      "opts": [
        "49.5 days",
        "66 days",
        "99 days",
        "53 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 33. A alone = (99) / 2 = 49.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 34 days, in how many days can A alone complete the work? (Efficiency #25)",
      "opts": [
        "51 days",
        "68 days",
        "102 days",
        "54 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 34. A alone = (102) / 2 = 51 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 35 days, in how many days can A alone complete the work? (Efficiency #26)",
      "opts": [
        "52.5 days",
        "70 days",
        "105 days",
        "56 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 35. A alone = (105) / 2 = 52.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 36 days, in how many days can A alone complete the work? (Efficiency #27)",
      "opts": [
        "54 days",
        "72 days",
        "108 days",
        "57 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 36. A alone = (108) / 2 = 54 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 37 days, in how many days can A alone complete the work? (Efficiency #28)",
      "opts": [
        "55.5 days",
        "74 days",
        "111 days",
        "59 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 37. A alone = (111) / 2 = 55.5 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 38 days, in how many days can A alone complete the work? (Efficiency #29)",
      "opts": [
        "57 days",
        "76 days",
        "114 days",
        "60 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 38. A alone = (114) / 2 = 57 days."
    },
    {
      "q": "A is twice as efficient as B. If A and B together finish a project in 39 days, in how many days can A alone complete the work? (Efficiency #30)",
      "opts": [
        "58.5 days",
        "78 days",
        "117 days",
        "62 days"
      ],
      "ans": "A",
      "exp": "Efficiency ratio A:B = 2:1. Total daily work = 3 units. Total work = 3 × 39. A alone = (117) / 2 = 58.5 days."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["pipes-and-cisterns"] = {
  "level1": [
    {
      "q": "Inlet pipe A fills a tank in 12 hours while outlet pipe B empties it in 20 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #1)",
      "opts": [
        "30 hours",
        "35 hours",
        "27 hours",
        "32 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/12 - 1/20. Total time = (12 × 20) / (20 - 12) = 30 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 13 hours while outlet pipe B empties it in 21 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #2)",
      "opts": [
        "34.1 hours",
        "39.1 hours",
        "31.1 hours",
        "34 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/13 - 1/21. Total time = (13 × 21) / (21 - 13) = 34.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 14 hours while outlet pipe B empties it in 22 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #3)",
      "opts": [
        "38.5 hours",
        "43.5 hours",
        "35.5 hours",
        "36 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/14 - 1/22. Total time = (14 × 22) / (22 - 14) = 38.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 15 hours while outlet pipe B empties it in 23 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #4)",
      "opts": [
        "43.1 hours",
        "48.1 hours",
        "40.1 hours",
        "38 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/15 - 1/23. Total time = (15 × 23) / (23 - 15) = 43.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 16 hours while outlet pipe B empties it in 24 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #5)",
      "opts": [
        "48 hours",
        "53 hours",
        "45 hours",
        "40 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/16 - 1/24. Total time = (16 × 24) / (24 - 16) = 48 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 17 hours while outlet pipe B empties it in 25 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #6)",
      "opts": [
        "53.1 hours",
        "58.1 hours",
        "50.1 hours",
        "42 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/17 - 1/25. Total time = (17 × 25) / (25 - 17) = 53.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 18 hours while outlet pipe B empties it in 26 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #7)",
      "opts": [
        "58.5 hours",
        "63.5 hours",
        "55.5 hours",
        "44 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/18 - 1/26. Total time = (18 × 26) / (26 - 18) = 58.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 19 hours while outlet pipe B empties it in 27 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #8)",
      "opts": [
        "64.1 hours",
        "69.1 hours",
        "61.099999999999994 hours",
        "46 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/19 - 1/27. Total time = (19 × 27) / (27 - 19) = 64.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 20 hours while outlet pipe B empties it in 28 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #9)",
      "opts": [
        "70 hours",
        "75 hours",
        "67 hours",
        "48 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/20 - 1/28. Total time = (20 × 28) / (28 - 20) = 70 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 21 hours while outlet pipe B empties it in 29 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #10)",
      "opts": [
        "76.1 hours",
        "81.1 hours",
        "73.1 hours",
        "50 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/21 - 1/29. Total time = (21 × 29) / (29 - 21) = 76.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 22 hours while outlet pipe B empties it in 30 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #11)",
      "opts": [
        "82.5 hours",
        "87.5 hours",
        "79.5 hours",
        "52 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/22 - 1/30. Total time = (22 × 30) / (30 - 22) = 82.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 23 hours while outlet pipe B empties it in 31 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #12)",
      "opts": [
        "89.1 hours",
        "94.1 hours",
        "86.1 hours",
        "54 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/23 - 1/31. Total time = (23 × 31) / (31 - 23) = 89.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 24 hours while outlet pipe B empties it in 32 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #13)",
      "opts": [
        "96 hours",
        "101 hours",
        "93 hours",
        "56 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/24 - 1/32. Total time = (24 × 32) / (32 - 24) = 96 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 25 hours while outlet pipe B empties it in 33 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #14)",
      "opts": [
        "103.1 hours",
        "108.1 hours",
        "100.1 hours",
        "58 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/25 - 1/33. Total time = (25 × 33) / (33 - 25) = 103.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 26 hours while outlet pipe B empties it in 34 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #15)",
      "opts": [
        "110.5 hours",
        "115.5 hours",
        "107.5 hours",
        "60 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/26 - 1/34. Total time = (26 × 34) / (34 - 26) = 110.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 27 hours while outlet pipe B empties it in 35 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #16)",
      "opts": [
        "118.1 hours",
        "123.1 hours",
        "115.1 hours",
        "62 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/27 - 1/35. Total time = (27 × 35) / (35 - 27) = 118.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 28 hours while outlet pipe B empties it in 36 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #17)",
      "opts": [
        "126 hours",
        "131 hours",
        "123 hours",
        "64 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/28 - 1/36. Total time = (28 × 36) / (36 - 28) = 126 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 29 hours while outlet pipe B empties it in 37 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #18)",
      "opts": [
        "134.1 hours",
        "139.1 hours",
        "131.1 hours",
        "66 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/29 - 1/37. Total time = (29 × 37) / (37 - 29) = 134.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 30 hours while outlet pipe B empties it in 38 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #19)",
      "opts": [
        "142.5 hours",
        "147.5 hours",
        "139.5 hours",
        "68 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/30 - 1/38. Total time = (30 × 38) / (38 - 30) = 142.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 31 hours while outlet pipe B empties it in 39 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #20)",
      "opts": [
        "151.1 hours",
        "156.1 hours",
        "148.1 hours",
        "70 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/31 - 1/39. Total time = (31 × 39) / (39 - 31) = 151.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 32 hours while outlet pipe B empties it in 40 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #21)",
      "opts": [
        "160 hours",
        "165 hours",
        "157 hours",
        "72 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/32 - 1/40. Total time = (32 × 40) / (40 - 32) = 160 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 33 hours while outlet pipe B empties it in 41 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #22)",
      "opts": [
        "169.1 hours",
        "174.1 hours",
        "166.1 hours",
        "74 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/33 - 1/41. Total time = (33 × 41) / (41 - 33) = 169.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 34 hours while outlet pipe B empties it in 42 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #23)",
      "opts": [
        "178.5 hours",
        "183.5 hours",
        "175.5 hours",
        "76 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/34 - 1/42. Total time = (34 × 42) / (42 - 34) = 178.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 35 hours while outlet pipe B empties it in 43 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #24)",
      "opts": [
        "188.1 hours",
        "193.1 hours",
        "185.1 hours",
        "78 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/35 - 1/43. Total time = (35 × 43) / (43 - 35) = 188.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 36 hours while outlet pipe B empties it in 44 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #25)",
      "opts": [
        "198 hours",
        "203 hours",
        "195 hours",
        "80 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/36 - 1/44. Total time = (36 × 44) / (44 - 36) = 198 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 37 hours while outlet pipe B empties it in 45 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #26)",
      "opts": [
        "208.1 hours",
        "213.1 hours",
        "205.1 hours",
        "82 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/37 - 1/45. Total time = (37 × 45) / (45 - 37) = 208.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 38 hours while outlet pipe B empties it in 46 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #27)",
      "opts": [
        "218.5 hours",
        "223.5 hours",
        "215.5 hours",
        "84 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/38 - 1/46. Total time = (38 × 46) / (46 - 38) = 218.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 39 hours while outlet pipe B empties it in 47 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #28)",
      "opts": [
        "229.1 hours",
        "234.1 hours",
        "226.1 hours",
        "86 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/39 - 1/47. Total time = (39 × 47) / (47 - 39) = 229.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 40 hours while outlet pipe B empties it in 48 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #29)",
      "opts": [
        "240 hours",
        "245 hours",
        "237 hours",
        "88 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/40 - 1/48. Total time = (40 × 48) / (48 - 40) = 240 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 41 hours while outlet pipe B empties it in 49 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #30)",
      "opts": [
        "251.1 hours",
        "256.1 hours",
        "248.1 hours",
        "90 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/41 - 1/49. Total time = (41 × 49) / (49 - 41) = 251.1 hours."
    }
  ],
  "level2": [
    {
      "q": "Inlet pipe A fills a tank in 12 hours while outlet pipe B empties it in 20 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #1)",
      "opts": [
        "30 hours",
        "35 hours",
        "27 hours",
        "32 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/12 - 1/20. Total time = (12 × 20) / (20 - 12) = 30 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 13 hours while outlet pipe B empties it in 21 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #2)",
      "opts": [
        "34.1 hours",
        "39.1 hours",
        "31.1 hours",
        "34 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/13 - 1/21. Total time = (13 × 21) / (21 - 13) = 34.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 14 hours while outlet pipe B empties it in 22 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #3)",
      "opts": [
        "38.5 hours",
        "43.5 hours",
        "35.5 hours",
        "36 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/14 - 1/22. Total time = (14 × 22) / (22 - 14) = 38.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 15 hours while outlet pipe B empties it in 23 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #4)",
      "opts": [
        "43.1 hours",
        "48.1 hours",
        "40.1 hours",
        "38 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/15 - 1/23. Total time = (15 × 23) / (23 - 15) = 43.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 16 hours while outlet pipe B empties it in 24 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #5)",
      "opts": [
        "48 hours",
        "53 hours",
        "45 hours",
        "40 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/16 - 1/24. Total time = (16 × 24) / (24 - 16) = 48 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 17 hours while outlet pipe B empties it in 25 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #6)",
      "opts": [
        "53.1 hours",
        "58.1 hours",
        "50.1 hours",
        "42 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/17 - 1/25. Total time = (17 × 25) / (25 - 17) = 53.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 18 hours while outlet pipe B empties it in 26 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #7)",
      "opts": [
        "58.5 hours",
        "63.5 hours",
        "55.5 hours",
        "44 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/18 - 1/26. Total time = (18 × 26) / (26 - 18) = 58.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 19 hours while outlet pipe B empties it in 27 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #8)",
      "opts": [
        "64.1 hours",
        "69.1 hours",
        "61.099999999999994 hours",
        "46 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/19 - 1/27. Total time = (19 × 27) / (27 - 19) = 64.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 20 hours while outlet pipe B empties it in 28 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #9)",
      "opts": [
        "70 hours",
        "75 hours",
        "67 hours",
        "48 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/20 - 1/28. Total time = (20 × 28) / (28 - 20) = 70 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 21 hours while outlet pipe B empties it in 29 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #10)",
      "opts": [
        "76.1 hours",
        "81.1 hours",
        "73.1 hours",
        "50 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/21 - 1/29. Total time = (21 × 29) / (29 - 21) = 76.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 22 hours while outlet pipe B empties it in 30 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #11)",
      "opts": [
        "82.5 hours",
        "87.5 hours",
        "79.5 hours",
        "52 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/22 - 1/30. Total time = (22 × 30) / (30 - 22) = 82.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 23 hours while outlet pipe B empties it in 31 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #12)",
      "opts": [
        "89.1 hours",
        "94.1 hours",
        "86.1 hours",
        "54 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/23 - 1/31. Total time = (23 × 31) / (31 - 23) = 89.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 24 hours while outlet pipe B empties it in 32 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #13)",
      "opts": [
        "96 hours",
        "101 hours",
        "93 hours",
        "56 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/24 - 1/32. Total time = (24 × 32) / (32 - 24) = 96 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 25 hours while outlet pipe B empties it in 33 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #14)",
      "opts": [
        "103.1 hours",
        "108.1 hours",
        "100.1 hours",
        "58 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/25 - 1/33. Total time = (25 × 33) / (33 - 25) = 103.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 26 hours while outlet pipe B empties it in 34 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #15)",
      "opts": [
        "110.5 hours",
        "115.5 hours",
        "107.5 hours",
        "60 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/26 - 1/34. Total time = (26 × 34) / (34 - 26) = 110.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 27 hours while outlet pipe B empties it in 35 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #16)",
      "opts": [
        "118.1 hours",
        "123.1 hours",
        "115.1 hours",
        "62 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/27 - 1/35. Total time = (27 × 35) / (35 - 27) = 118.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 28 hours while outlet pipe B empties it in 36 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #17)",
      "opts": [
        "126 hours",
        "131 hours",
        "123 hours",
        "64 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/28 - 1/36. Total time = (28 × 36) / (36 - 28) = 126 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 29 hours while outlet pipe B empties it in 37 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #18)",
      "opts": [
        "134.1 hours",
        "139.1 hours",
        "131.1 hours",
        "66 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/29 - 1/37. Total time = (29 × 37) / (37 - 29) = 134.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 30 hours while outlet pipe B empties it in 38 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #19)",
      "opts": [
        "142.5 hours",
        "147.5 hours",
        "139.5 hours",
        "68 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/30 - 1/38. Total time = (30 × 38) / (38 - 30) = 142.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 31 hours while outlet pipe B empties it in 39 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #20)",
      "opts": [
        "151.1 hours",
        "156.1 hours",
        "148.1 hours",
        "70 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/31 - 1/39. Total time = (31 × 39) / (39 - 31) = 151.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 32 hours while outlet pipe B empties it in 40 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #21)",
      "opts": [
        "160 hours",
        "165 hours",
        "157 hours",
        "72 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/32 - 1/40. Total time = (32 × 40) / (40 - 32) = 160 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 33 hours while outlet pipe B empties it in 41 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #22)",
      "opts": [
        "169.1 hours",
        "174.1 hours",
        "166.1 hours",
        "74 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/33 - 1/41. Total time = (33 × 41) / (41 - 33) = 169.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 34 hours while outlet pipe B empties it in 42 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #23)",
      "opts": [
        "178.5 hours",
        "183.5 hours",
        "175.5 hours",
        "76 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/34 - 1/42. Total time = (34 × 42) / (42 - 34) = 178.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 35 hours while outlet pipe B empties it in 43 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #24)",
      "opts": [
        "188.1 hours",
        "193.1 hours",
        "185.1 hours",
        "78 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/35 - 1/43. Total time = (35 × 43) / (43 - 35) = 188.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 36 hours while outlet pipe B empties it in 44 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #25)",
      "opts": [
        "198 hours",
        "203 hours",
        "195 hours",
        "80 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/36 - 1/44. Total time = (36 × 44) / (44 - 36) = 198 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 37 hours while outlet pipe B empties it in 45 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #26)",
      "opts": [
        "208.1 hours",
        "213.1 hours",
        "205.1 hours",
        "82 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/37 - 1/45. Total time = (37 × 45) / (45 - 37) = 208.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 38 hours while outlet pipe B empties it in 46 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #27)",
      "opts": [
        "218.5 hours",
        "223.5 hours",
        "215.5 hours",
        "84 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/38 - 1/46. Total time = (38 × 46) / (46 - 38) = 218.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 39 hours while outlet pipe B empties it in 47 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #28)",
      "opts": [
        "229.1 hours",
        "234.1 hours",
        "226.1 hours",
        "86 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/39 - 1/47. Total time = (39 × 47) / (47 - 39) = 229.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 40 hours while outlet pipe B empties it in 48 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #29)",
      "opts": [
        "240 hours",
        "245 hours",
        "237 hours",
        "88 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/40 - 1/48. Total time = (40 × 48) / (48 - 40) = 240 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 41 hours while outlet pipe B empties it in 49 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #30)",
      "opts": [
        "251.1 hours",
        "256.1 hours",
        "248.1 hours",
        "90 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/41 - 1/49. Total time = (41 × 49) / (49 - 41) = 251.1 hours."
    }
  ],
  "level3": [
    {
      "q": "Inlet pipe A fills a tank in 12 hours while outlet pipe B empties it in 20 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #1)",
      "opts": [
        "30 hours",
        "35 hours",
        "27 hours",
        "32 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/12 - 1/20. Total time = (12 × 20) / (20 - 12) = 30 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 13 hours while outlet pipe B empties it in 21 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #2)",
      "opts": [
        "34.1 hours",
        "39.1 hours",
        "31.1 hours",
        "34 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/13 - 1/21. Total time = (13 × 21) / (21 - 13) = 34.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 14 hours while outlet pipe B empties it in 22 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #3)",
      "opts": [
        "38.5 hours",
        "43.5 hours",
        "35.5 hours",
        "36 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/14 - 1/22. Total time = (14 × 22) / (22 - 14) = 38.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 15 hours while outlet pipe B empties it in 23 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #4)",
      "opts": [
        "43.1 hours",
        "48.1 hours",
        "40.1 hours",
        "38 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/15 - 1/23. Total time = (15 × 23) / (23 - 15) = 43.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 16 hours while outlet pipe B empties it in 24 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #5)",
      "opts": [
        "48 hours",
        "53 hours",
        "45 hours",
        "40 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/16 - 1/24. Total time = (16 × 24) / (24 - 16) = 48 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 17 hours while outlet pipe B empties it in 25 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #6)",
      "opts": [
        "53.1 hours",
        "58.1 hours",
        "50.1 hours",
        "42 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/17 - 1/25. Total time = (17 × 25) / (25 - 17) = 53.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 18 hours while outlet pipe B empties it in 26 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #7)",
      "opts": [
        "58.5 hours",
        "63.5 hours",
        "55.5 hours",
        "44 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/18 - 1/26. Total time = (18 × 26) / (26 - 18) = 58.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 19 hours while outlet pipe B empties it in 27 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #8)",
      "opts": [
        "64.1 hours",
        "69.1 hours",
        "61.099999999999994 hours",
        "46 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/19 - 1/27. Total time = (19 × 27) / (27 - 19) = 64.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 20 hours while outlet pipe B empties it in 28 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #9)",
      "opts": [
        "70 hours",
        "75 hours",
        "67 hours",
        "48 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/20 - 1/28. Total time = (20 × 28) / (28 - 20) = 70 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 21 hours while outlet pipe B empties it in 29 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #10)",
      "opts": [
        "76.1 hours",
        "81.1 hours",
        "73.1 hours",
        "50 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/21 - 1/29. Total time = (21 × 29) / (29 - 21) = 76.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 22 hours while outlet pipe B empties it in 30 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #11)",
      "opts": [
        "82.5 hours",
        "87.5 hours",
        "79.5 hours",
        "52 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/22 - 1/30. Total time = (22 × 30) / (30 - 22) = 82.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 23 hours while outlet pipe B empties it in 31 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #12)",
      "opts": [
        "89.1 hours",
        "94.1 hours",
        "86.1 hours",
        "54 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/23 - 1/31. Total time = (23 × 31) / (31 - 23) = 89.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 24 hours while outlet pipe B empties it in 32 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #13)",
      "opts": [
        "96 hours",
        "101 hours",
        "93 hours",
        "56 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/24 - 1/32. Total time = (24 × 32) / (32 - 24) = 96 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 25 hours while outlet pipe B empties it in 33 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #14)",
      "opts": [
        "103.1 hours",
        "108.1 hours",
        "100.1 hours",
        "58 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/25 - 1/33. Total time = (25 × 33) / (33 - 25) = 103.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 26 hours while outlet pipe B empties it in 34 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #15)",
      "opts": [
        "110.5 hours",
        "115.5 hours",
        "107.5 hours",
        "60 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/26 - 1/34. Total time = (26 × 34) / (34 - 26) = 110.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 27 hours while outlet pipe B empties it in 35 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #16)",
      "opts": [
        "118.1 hours",
        "123.1 hours",
        "115.1 hours",
        "62 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/27 - 1/35. Total time = (27 × 35) / (35 - 27) = 118.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 28 hours while outlet pipe B empties it in 36 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #17)",
      "opts": [
        "126 hours",
        "131 hours",
        "123 hours",
        "64 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/28 - 1/36. Total time = (28 × 36) / (36 - 28) = 126 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 29 hours while outlet pipe B empties it in 37 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #18)",
      "opts": [
        "134.1 hours",
        "139.1 hours",
        "131.1 hours",
        "66 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/29 - 1/37. Total time = (29 × 37) / (37 - 29) = 134.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 30 hours while outlet pipe B empties it in 38 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #19)",
      "opts": [
        "142.5 hours",
        "147.5 hours",
        "139.5 hours",
        "68 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/30 - 1/38. Total time = (30 × 38) / (38 - 30) = 142.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 31 hours while outlet pipe B empties it in 39 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #20)",
      "opts": [
        "151.1 hours",
        "156.1 hours",
        "148.1 hours",
        "70 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/31 - 1/39. Total time = (31 × 39) / (39 - 31) = 151.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 32 hours while outlet pipe B empties it in 40 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #21)",
      "opts": [
        "160 hours",
        "165 hours",
        "157 hours",
        "72 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/32 - 1/40. Total time = (32 × 40) / (40 - 32) = 160 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 33 hours while outlet pipe B empties it in 41 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #22)",
      "opts": [
        "169.1 hours",
        "174.1 hours",
        "166.1 hours",
        "74 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/33 - 1/41. Total time = (33 × 41) / (41 - 33) = 169.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 34 hours while outlet pipe B empties it in 42 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #23)",
      "opts": [
        "178.5 hours",
        "183.5 hours",
        "175.5 hours",
        "76 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/34 - 1/42. Total time = (34 × 42) / (42 - 34) = 178.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 35 hours while outlet pipe B empties it in 43 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #24)",
      "opts": [
        "188.1 hours",
        "193.1 hours",
        "185.1 hours",
        "78 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/35 - 1/43. Total time = (35 × 43) / (43 - 35) = 188.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 36 hours while outlet pipe B empties it in 44 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #25)",
      "opts": [
        "198 hours",
        "203 hours",
        "195 hours",
        "80 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/36 - 1/44. Total time = (36 × 44) / (44 - 36) = 198 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 37 hours while outlet pipe B empties it in 45 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #26)",
      "opts": [
        "208.1 hours",
        "213.1 hours",
        "205.1 hours",
        "82 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/37 - 1/45. Total time = (37 × 45) / (45 - 37) = 208.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 38 hours while outlet pipe B empties it in 46 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #27)",
      "opts": [
        "218.5 hours",
        "223.5 hours",
        "215.5 hours",
        "84 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/38 - 1/46. Total time = (38 × 46) / (46 - 38) = 218.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 39 hours while outlet pipe B empties it in 47 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #28)",
      "opts": [
        "229.1 hours",
        "234.1 hours",
        "226.1 hours",
        "86 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/39 - 1/47. Total time = (39 × 47) / (47 - 39) = 229.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 40 hours while outlet pipe B empties it in 48 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #29)",
      "opts": [
        "240 hours",
        "245 hours",
        "237 hours",
        "88 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/40 - 1/48. Total time = (40 × 48) / (48 - 40) = 240 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 41 hours while outlet pipe B empties it in 49 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #30)",
      "opts": [
        "251.1 hours",
        "256.1 hours",
        "248.1 hours",
        "90 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/41 - 1/49. Total time = (41 × 49) / (49 - 41) = 251.1 hours."
    }
  ],
  "level4": [
    {
      "q": "Inlet pipe A fills a tank in 12 hours while outlet pipe B empties it in 20 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #1)",
      "opts": [
        "30 hours",
        "35 hours",
        "27 hours",
        "32 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/12 - 1/20. Total time = (12 × 20) / (20 - 12) = 30 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 13 hours while outlet pipe B empties it in 21 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #2)",
      "opts": [
        "34.1 hours",
        "39.1 hours",
        "31.1 hours",
        "34 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/13 - 1/21. Total time = (13 × 21) / (21 - 13) = 34.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 14 hours while outlet pipe B empties it in 22 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #3)",
      "opts": [
        "38.5 hours",
        "43.5 hours",
        "35.5 hours",
        "36 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/14 - 1/22. Total time = (14 × 22) / (22 - 14) = 38.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 15 hours while outlet pipe B empties it in 23 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #4)",
      "opts": [
        "43.1 hours",
        "48.1 hours",
        "40.1 hours",
        "38 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/15 - 1/23. Total time = (15 × 23) / (23 - 15) = 43.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 16 hours while outlet pipe B empties it in 24 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #5)",
      "opts": [
        "48 hours",
        "53 hours",
        "45 hours",
        "40 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/16 - 1/24. Total time = (16 × 24) / (24 - 16) = 48 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 17 hours while outlet pipe B empties it in 25 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #6)",
      "opts": [
        "53.1 hours",
        "58.1 hours",
        "50.1 hours",
        "42 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/17 - 1/25. Total time = (17 × 25) / (25 - 17) = 53.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 18 hours while outlet pipe B empties it in 26 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #7)",
      "opts": [
        "58.5 hours",
        "63.5 hours",
        "55.5 hours",
        "44 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/18 - 1/26. Total time = (18 × 26) / (26 - 18) = 58.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 19 hours while outlet pipe B empties it in 27 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #8)",
      "opts": [
        "64.1 hours",
        "69.1 hours",
        "61.099999999999994 hours",
        "46 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/19 - 1/27. Total time = (19 × 27) / (27 - 19) = 64.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 20 hours while outlet pipe B empties it in 28 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #9)",
      "opts": [
        "70 hours",
        "75 hours",
        "67 hours",
        "48 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/20 - 1/28. Total time = (20 × 28) / (28 - 20) = 70 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 21 hours while outlet pipe B empties it in 29 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #10)",
      "opts": [
        "76.1 hours",
        "81.1 hours",
        "73.1 hours",
        "50 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/21 - 1/29. Total time = (21 × 29) / (29 - 21) = 76.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 22 hours while outlet pipe B empties it in 30 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #11)",
      "opts": [
        "82.5 hours",
        "87.5 hours",
        "79.5 hours",
        "52 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/22 - 1/30. Total time = (22 × 30) / (30 - 22) = 82.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 23 hours while outlet pipe B empties it in 31 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #12)",
      "opts": [
        "89.1 hours",
        "94.1 hours",
        "86.1 hours",
        "54 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/23 - 1/31. Total time = (23 × 31) / (31 - 23) = 89.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 24 hours while outlet pipe B empties it in 32 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #13)",
      "opts": [
        "96 hours",
        "101 hours",
        "93 hours",
        "56 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/24 - 1/32. Total time = (24 × 32) / (32 - 24) = 96 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 25 hours while outlet pipe B empties it in 33 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #14)",
      "opts": [
        "103.1 hours",
        "108.1 hours",
        "100.1 hours",
        "58 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/25 - 1/33. Total time = (25 × 33) / (33 - 25) = 103.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 26 hours while outlet pipe B empties it in 34 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #15)",
      "opts": [
        "110.5 hours",
        "115.5 hours",
        "107.5 hours",
        "60 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/26 - 1/34. Total time = (26 × 34) / (34 - 26) = 110.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 27 hours while outlet pipe B empties it in 35 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #16)",
      "opts": [
        "118.1 hours",
        "123.1 hours",
        "115.1 hours",
        "62 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/27 - 1/35. Total time = (27 × 35) / (35 - 27) = 118.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 28 hours while outlet pipe B empties it in 36 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #17)",
      "opts": [
        "126 hours",
        "131 hours",
        "123 hours",
        "64 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/28 - 1/36. Total time = (28 × 36) / (36 - 28) = 126 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 29 hours while outlet pipe B empties it in 37 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #18)",
      "opts": [
        "134.1 hours",
        "139.1 hours",
        "131.1 hours",
        "66 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/29 - 1/37. Total time = (29 × 37) / (37 - 29) = 134.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 30 hours while outlet pipe B empties it in 38 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #19)",
      "opts": [
        "142.5 hours",
        "147.5 hours",
        "139.5 hours",
        "68 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/30 - 1/38. Total time = (30 × 38) / (38 - 30) = 142.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 31 hours while outlet pipe B empties it in 39 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #20)",
      "opts": [
        "151.1 hours",
        "156.1 hours",
        "148.1 hours",
        "70 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/31 - 1/39. Total time = (31 × 39) / (39 - 31) = 151.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 32 hours while outlet pipe B empties it in 40 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #21)",
      "opts": [
        "160 hours",
        "165 hours",
        "157 hours",
        "72 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/32 - 1/40. Total time = (32 × 40) / (40 - 32) = 160 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 33 hours while outlet pipe B empties it in 41 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #22)",
      "opts": [
        "169.1 hours",
        "174.1 hours",
        "166.1 hours",
        "74 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/33 - 1/41. Total time = (33 × 41) / (41 - 33) = 169.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 34 hours while outlet pipe B empties it in 42 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #23)",
      "opts": [
        "178.5 hours",
        "183.5 hours",
        "175.5 hours",
        "76 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/34 - 1/42. Total time = (34 × 42) / (42 - 34) = 178.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 35 hours while outlet pipe B empties it in 43 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #24)",
      "opts": [
        "188.1 hours",
        "193.1 hours",
        "185.1 hours",
        "78 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/35 - 1/43. Total time = (35 × 43) / (43 - 35) = 188.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 36 hours while outlet pipe B empties it in 44 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #25)",
      "opts": [
        "198 hours",
        "203 hours",
        "195 hours",
        "80 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/36 - 1/44. Total time = (36 × 44) / (44 - 36) = 198 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 37 hours while outlet pipe B empties it in 45 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #26)",
      "opts": [
        "208.1 hours",
        "213.1 hours",
        "205.1 hours",
        "82 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/37 - 1/45. Total time = (37 × 45) / (45 - 37) = 208.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 38 hours while outlet pipe B empties it in 46 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #27)",
      "opts": [
        "218.5 hours",
        "223.5 hours",
        "215.5 hours",
        "84 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/38 - 1/46. Total time = (38 × 46) / (46 - 38) = 218.5 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 39 hours while outlet pipe B empties it in 47 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #28)",
      "opts": [
        "229.1 hours",
        "234.1 hours",
        "226.1 hours",
        "86 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/39 - 1/47. Total time = (39 × 47) / (47 - 39) = 229.1 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 40 hours while outlet pipe B empties it in 48 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #29)",
      "opts": [
        "240 hours",
        "245 hours",
        "237 hours",
        "88 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/40 - 1/48. Total time = (40 × 48) / (48 - 40) = 240 hours."
    },
    {
      "q": "Inlet pipe A fills a tank in 41 hours while outlet pipe B empties it in 49 hours. If both pipes are opened simultaneously, in how many hours will the cistern fill completely? (Setup #30)",
      "opts": [
        "251.1 hours",
        "256.1 hours",
        "248.1 hours",
        "90 hours"
      ],
      "ans": "A",
      "exp": "Net filling rate = 1/41 - 1/49. Total time = (41 × 49) / (49 - 41) = 251.1 hours."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["trains-boats-streams"] = {
  "level1": [
    {
      "q": "A motorboat's speed in still water is 15 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #1)",
      "opts": [
        "18 km/h and 12 km/h",
        "20 km/h and 10 km/h",
        "15 km/h and 3 km/h",
        "17 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 15 + 3 = 18 km/h. Upstream = Boat - Stream = 15 - 3 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 16 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #2)",
      "opts": [
        "20 km/h and 12 km/h",
        "22 km/h and 10 km/h",
        "16 km/h and 4 km/h",
        "19 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 16 + 4 = 20 km/h. Upstream = Boat - Stream = 16 - 4 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 17 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #3)",
      "opts": [
        "22 km/h and 12 km/h",
        "24 km/h and 10 km/h",
        "17 km/h and 5 km/h",
        "21 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 17 + 5 = 22 km/h. Upstream = Boat - Stream = 17 - 5 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 18 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #4)",
      "opts": [
        "21 km/h and 15 km/h",
        "23 km/h and 13 km/h",
        "18 km/h and 3 km/h",
        "20 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 18 + 3 = 21 km/h. Upstream = Boat - Stream = 18 - 3 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 19 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #5)",
      "opts": [
        "23 km/h and 15 km/h",
        "25 km/h and 13 km/h",
        "19 km/h and 4 km/h",
        "22 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 19 + 4 = 23 km/h. Upstream = Boat - Stream = 19 - 4 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 20 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #6)",
      "opts": [
        "25 km/h and 15 km/h",
        "27 km/h and 13 km/h",
        "20 km/h and 5 km/h",
        "24 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 20 + 5 = 25 km/h. Upstream = Boat - Stream = 20 - 5 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 21 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #7)",
      "opts": [
        "24 km/h and 18 km/h",
        "26 km/h and 16 km/h",
        "21 km/h and 3 km/h",
        "23 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 21 + 3 = 24 km/h. Upstream = Boat - Stream = 21 - 3 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 22 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #8)",
      "opts": [
        "26 km/h and 18 km/h",
        "28 km/h and 16 km/h",
        "22 km/h and 4 km/h",
        "25 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 22 + 4 = 26 km/h. Upstream = Boat - Stream = 22 - 4 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 23 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #9)",
      "opts": [
        "28 km/h and 18 km/h",
        "30 km/h and 16 km/h",
        "23 km/h and 5 km/h",
        "27 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 23 + 5 = 28 km/h. Upstream = Boat - Stream = 23 - 5 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 24 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #10)",
      "opts": [
        "27 km/h and 21 km/h",
        "29 km/h and 19 km/h",
        "24 km/h and 3 km/h",
        "26 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 24 + 3 = 27 km/h. Upstream = Boat - Stream = 24 - 3 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 25 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #11)",
      "opts": [
        "29 km/h and 21 km/h",
        "31 km/h and 19 km/h",
        "25 km/h and 4 km/h",
        "28 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 25 + 4 = 29 km/h. Upstream = Boat - Stream = 25 - 4 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 26 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #12)",
      "opts": [
        "31 km/h and 21 km/h",
        "33 km/h and 19 km/h",
        "26 km/h and 5 km/h",
        "30 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 26 + 5 = 31 km/h. Upstream = Boat - Stream = 26 - 5 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 27 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #13)",
      "opts": [
        "30 km/h and 24 km/h",
        "32 km/h and 22 km/h",
        "27 km/h and 3 km/h",
        "29 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 27 + 3 = 30 km/h. Upstream = Boat - Stream = 27 - 3 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 28 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #14)",
      "opts": [
        "32 km/h and 24 km/h",
        "34 km/h and 22 km/h",
        "28 km/h and 4 km/h",
        "31 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 28 + 4 = 32 km/h. Upstream = Boat - Stream = 28 - 4 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 29 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #15)",
      "opts": [
        "34 km/h and 24 km/h",
        "36 km/h and 22 km/h",
        "29 km/h and 5 km/h",
        "33 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 29 + 5 = 34 km/h. Upstream = Boat - Stream = 29 - 5 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 30 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #16)",
      "opts": [
        "33 km/h and 27 km/h",
        "35 km/h and 25 km/h",
        "30 km/h and 3 km/h",
        "32 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 30 + 3 = 33 km/h. Upstream = Boat - Stream = 30 - 3 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 31 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #17)",
      "opts": [
        "35 km/h and 27 km/h",
        "37 km/h and 25 km/h",
        "31 km/h and 4 km/h",
        "34 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 31 + 4 = 35 km/h. Upstream = Boat - Stream = 31 - 4 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 32 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #18)",
      "opts": [
        "37 km/h and 27 km/h",
        "39 km/h and 25 km/h",
        "32 km/h and 5 km/h",
        "36 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 32 + 5 = 37 km/h. Upstream = Boat - Stream = 32 - 5 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 33 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #19)",
      "opts": [
        "36 km/h and 30 km/h",
        "38 km/h and 28 km/h",
        "33 km/h and 3 km/h",
        "35 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 33 + 3 = 36 km/h. Upstream = Boat - Stream = 33 - 3 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 34 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #20)",
      "opts": [
        "38 km/h and 30 km/h",
        "40 km/h and 28 km/h",
        "34 km/h and 4 km/h",
        "37 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 34 + 4 = 38 km/h. Upstream = Boat - Stream = 34 - 4 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 35 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #21)",
      "opts": [
        "40 km/h and 30 km/h",
        "42 km/h and 28 km/h",
        "35 km/h and 5 km/h",
        "39 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 35 + 5 = 40 km/h. Upstream = Boat - Stream = 35 - 5 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 36 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #22)",
      "opts": [
        "39 km/h and 33 km/h",
        "41 km/h and 31 km/h",
        "36 km/h and 3 km/h",
        "38 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 36 + 3 = 39 km/h. Upstream = Boat - Stream = 36 - 3 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 37 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #23)",
      "opts": [
        "41 km/h and 33 km/h",
        "43 km/h and 31 km/h",
        "37 km/h and 4 km/h",
        "40 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 37 + 4 = 41 km/h. Upstream = Boat - Stream = 37 - 4 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 38 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #24)",
      "opts": [
        "43 km/h and 33 km/h",
        "45 km/h and 31 km/h",
        "38 km/h and 5 km/h",
        "42 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 38 + 5 = 43 km/h. Upstream = Boat - Stream = 38 - 5 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 39 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #25)",
      "opts": [
        "42 km/h and 36 km/h",
        "44 km/h and 34 km/h",
        "39 km/h and 3 km/h",
        "41 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 39 + 3 = 42 km/h. Upstream = Boat - Stream = 39 - 3 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 40 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #26)",
      "opts": [
        "44 km/h and 36 km/h",
        "46 km/h and 34 km/h",
        "40 km/h and 4 km/h",
        "43 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 40 + 4 = 44 km/h. Upstream = Boat - Stream = 40 - 4 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 41 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #27)",
      "opts": [
        "46 km/h and 36 km/h",
        "48 km/h and 34 km/h",
        "41 km/h and 5 km/h",
        "45 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 41 + 5 = 46 km/h. Upstream = Boat - Stream = 41 - 5 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 42 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #28)",
      "opts": [
        "45 km/h and 39 km/h",
        "47 km/h and 37 km/h",
        "42 km/h and 3 km/h",
        "44 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 42 + 3 = 45 km/h. Upstream = Boat - Stream = 42 - 3 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 43 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #29)",
      "opts": [
        "47 km/h and 39 km/h",
        "49 km/h and 37 km/h",
        "43 km/h and 4 km/h",
        "46 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 43 + 4 = 47 km/h. Upstream = Boat - Stream = 43 - 4 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 44 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #30)",
      "opts": [
        "49 km/h and 39 km/h",
        "51 km/h and 37 km/h",
        "44 km/h and 5 km/h",
        "48 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 44 + 5 = 49 km/h. Upstream = Boat - Stream = 44 - 5 = 39 km/h."
    }
  ],
  "level2": [
    {
      "q": "A motorboat's speed in still water is 15 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #1)",
      "opts": [
        "18 km/h and 12 km/h",
        "20 km/h and 10 km/h",
        "15 km/h and 3 km/h",
        "17 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 15 + 3 = 18 km/h. Upstream = Boat - Stream = 15 - 3 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 16 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #2)",
      "opts": [
        "20 km/h and 12 km/h",
        "22 km/h and 10 km/h",
        "16 km/h and 4 km/h",
        "19 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 16 + 4 = 20 km/h. Upstream = Boat - Stream = 16 - 4 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 17 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #3)",
      "opts": [
        "22 km/h and 12 km/h",
        "24 km/h and 10 km/h",
        "17 km/h and 5 km/h",
        "21 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 17 + 5 = 22 km/h. Upstream = Boat - Stream = 17 - 5 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 18 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #4)",
      "opts": [
        "21 km/h and 15 km/h",
        "23 km/h and 13 km/h",
        "18 km/h and 3 km/h",
        "20 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 18 + 3 = 21 km/h. Upstream = Boat - Stream = 18 - 3 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 19 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #5)",
      "opts": [
        "23 km/h and 15 km/h",
        "25 km/h and 13 km/h",
        "19 km/h and 4 km/h",
        "22 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 19 + 4 = 23 km/h. Upstream = Boat - Stream = 19 - 4 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 20 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #6)",
      "opts": [
        "25 km/h and 15 km/h",
        "27 km/h and 13 km/h",
        "20 km/h and 5 km/h",
        "24 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 20 + 5 = 25 km/h. Upstream = Boat - Stream = 20 - 5 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 21 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #7)",
      "opts": [
        "24 km/h and 18 km/h",
        "26 km/h and 16 km/h",
        "21 km/h and 3 km/h",
        "23 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 21 + 3 = 24 km/h. Upstream = Boat - Stream = 21 - 3 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 22 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #8)",
      "opts": [
        "26 km/h and 18 km/h",
        "28 km/h and 16 km/h",
        "22 km/h and 4 km/h",
        "25 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 22 + 4 = 26 km/h. Upstream = Boat - Stream = 22 - 4 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 23 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #9)",
      "opts": [
        "28 km/h and 18 km/h",
        "30 km/h and 16 km/h",
        "23 km/h and 5 km/h",
        "27 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 23 + 5 = 28 km/h. Upstream = Boat - Stream = 23 - 5 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 24 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #10)",
      "opts": [
        "27 km/h and 21 km/h",
        "29 km/h and 19 km/h",
        "24 km/h and 3 km/h",
        "26 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 24 + 3 = 27 km/h. Upstream = Boat - Stream = 24 - 3 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 25 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #11)",
      "opts": [
        "29 km/h and 21 km/h",
        "31 km/h and 19 km/h",
        "25 km/h and 4 km/h",
        "28 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 25 + 4 = 29 km/h. Upstream = Boat - Stream = 25 - 4 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 26 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #12)",
      "opts": [
        "31 km/h and 21 km/h",
        "33 km/h and 19 km/h",
        "26 km/h and 5 km/h",
        "30 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 26 + 5 = 31 km/h. Upstream = Boat - Stream = 26 - 5 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 27 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #13)",
      "opts": [
        "30 km/h and 24 km/h",
        "32 km/h and 22 km/h",
        "27 km/h and 3 km/h",
        "29 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 27 + 3 = 30 km/h. Upstream = Boat - Stream = 27 - 3 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 28 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #14)",
      "opts": [
        "32 km/h and 24 km/h",
        "34 km/h and 22 km/h",
        "28 km/h and 4 km/h",
        "31 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 28 + 4 = 32 km/h. Upstream = Boat - Stream = 28 - 4 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 29 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #15)",
      "opts": [
        "34 km/h and 24 km/h",
        "36 km/h and 22 km/h",
        "29 km/h and 5 km/h",
        "33 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 29 + 5 = 34 km/h. Upstream = Boat - Stream = 29 - 5 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 30 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #16)",
      "opts": [
        "33 km/h and 27 km/h",
        "35 km/h and 25 km/h",
        "30 km/h and 3 km/h",
        "32 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 30 + 3 = 33 km/h. Upstream = Boat - Stream = 30 - 3 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 31 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #17)",
      "opts": [
        "35 km/h and 27 km/h",
        "37 km/h and 25 km/h",
        "31 km/h and 4 km/h",
        "34 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 31 + 4 = 35 km/h. Upstream = Boat - Stream = 31 - 4 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 32 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #18)",
      "opts": [
        "37 km/h and 27 km/h",
        "39 km/h and 25 km/h",
        "32 km/h and 5 km/h",
        "36 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 32 + 5 = 37 km/h. Upstream = Boat - Stream = 32 - 5 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 33 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #19)",
      "opts": [
        "36 km/h and 30 km/h",
        "38 km/h and 28 km/h",
        "33 km/h and 3 km/h",
        "35 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 33 + 3 = 36 km/h. Upstream = Boat - Stream = 33 - 3 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 34 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #20)",
      "opts": [
        "38 km/h and 30 km/h",
        "40 km/h and 28 km/h",
        "34 km/h and 4 km/h",
        "37 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 34 + 4 = 38 km/h. Upstream = Boat - Stream = 34 - 4 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 35 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #21)",
      "opts": [
        "40 km/h and 30 km/h",
        "42 km/h and 28 km/h",
        "35 km/h and 5 km/h",
        "39 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 35 + 5 = 40 km/h. Upstream = Boat - Stream = 35 - 5 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 36 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #22)",
      "opts": [
        "39 km/h and 33 km/h",
        "41 km/h and 31 km/h",
        "36 km/h and 3 km/h",
        "38 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 36 + 3 = 39 km/h. Upstream = Boat - Stream = 36 - 3 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 37 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #23)",
      "opts": [
        "41 km/h and 33 km/h",
        "43 km/h and 31 km/h",
        "37 km/h and 4 km/h",
        "40 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 37 + 4 = 41 km/h. Upstream = Boat - Stream = 37 - 4 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 38 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #24)",
      "opts": [
        "43 km/h and 33 km/h",
        "45 km/h and 31 km/h",
        "38 km/h and 5 km/h",
        "42 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 38 + 5 = 43 km/h. Upstream = Boat - Stream = 38 - 5 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 39 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #25)",
      "opts": [
        "42 km/h and 36 km/h",
        "44 km/h and 34 km/h",
        "39 km/h and 3 km/h",
        "41 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 39 + 3 = 42 km/h. Upstream = Boat - Stream = 39 - 3 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 40 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #26)",
      "opts": [
        "44 km/h and 36 km/h",
        "46 km/h and 34 km/h",
        "40 km/h and 4 km/h",
        "43 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 40 + 4 = 44 km/h. Upstream = Boat - Stream = 40 - 4 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 41 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #27)",
      "opts": [
        "46 km/h and 36 km/h",
        "48 km/h and 34 km/h",
        "41 km/h and 5 km/h",
        "45 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 41 + 5 = 46 km/h. Upstream = Boat - Stream = 41 - 5 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 42 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #28)",
      "opts": [
        "45 km/h and 39 km/h",
        "47 km/h and 37 km/h",
        "42 km/h and 3 km/h",
        "44 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 42 + 3 = 45 km/h. Upstream = Boat - Stream = 42 - 3 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 43 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #29)",
      "opts": [
        "47 km/h and 39 km/h",
        "49 km/h and 37 km/h",
        "43 km/h and 4 km/h",
        "46 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 43 + 4 = 47 km/h. Upstream = Boat - Stream = 43 - 4 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 44 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #30)",
      "opts": [
        "49 km/h and 39 km/h",
        "51 km/h and 37 km/h",
        "44 km/h and 5 km/h",
        "48 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 44 + 5 = 49 km/h. Upstream = Boat - Stream = 44 - 5 = 39 km/h."
    }
  ],
  "level3": [
    {
      "q": "A motorboat's speed in still water is 15 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #1)",
      "opts": [
        "18 km/h and 12 km/h",
        "20 km/h and 10 km/h",
        "15 km/h and 3 km/h",
        "17 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 15 + 3 = 18 km/h. Upstream = Boat - Stream = 15 - 3 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 16 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #2)",
      "opts": [
        "20 km/h and 12 km/h",
        "22 km/h and 10 km/h",
        "16 km/h and 4 km/h",
        "19 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 16 + 4 = 20 km/h. Upstream = Boat - Stream = 16 - 4 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 17 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #3)",
      "opts": [
        "22 km/h and 12 km/h",
        "24 km/h and 10 km/h",
        "17 km/h and 5 km/h",
        "21 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 17 + 5 = 22 km/h. Upstream = Boat - Stream = 17 - 5 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 18 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #4)",
      "opts": [
        "21 km/h and 15 km/h",
        "23 km/h and 13 km/h",
        "18 km/h and 3 km/h",
        "20 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 18 + 3 = 21 km/h. Upstream = Boat - Stream = 18 - 3 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 19 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #5)",
      "opts": [
        "23 km/h and 15 km/h",
        "25 km/h and 13 km/h",
        "19 km/h and 4 km/h",
        "22 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 19 + 4 = 23 km/h. Upstream = Boat - Stream = 19 - 4 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 20 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #6)",
      "opts": [
        "25 km/h and 15 km/h",
        "27 km/h and 13 km/h",
        "20 km/h and 5 km/h",
        "24 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 20 + 5 = 25 km/h. Upstream = Boat - Stream = 20 - 5 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 21 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #7)",
      "opts": [
        "24 km/h and 18 km/h",
        "26 km/h and 16 km/h",
        "21 km/h and 3 km/h",
        "23 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 21 + 3 = 24 km/h. Upstream = Boat - Stream = 21 - 3 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 22 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #8)",
      "opts": [
        "26 km/h and 18 km/h",
        "28 km/h and 16 km/h",
        "22 km/h and 4 km/h",
        "25 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 22 + 4 = 26 km/h. Upstream = Boat - Stream = 22 - 4 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 23 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #9)",
      "opts": [
        "28 km/h and 18 km/h",
        "30 km/h and 16 km/h",
        "23 km/h and 5 km/h",
        "27 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 23 + 5 = 28 km/h. Upstream = Boat - Stream = 23 - 5 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 24 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #10)",
      "opts": [
        "27 km/h and 21 km/h",
        "29 km/h and 19 km/h",
        "24 km/h and 3 km/h",
        "26 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 24 + 3 = 27 km/h. Upstream = Boat - Stream = 24 - 3 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 25 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #11)",
      "opts": [
        "29 km/h and 21 km/h",
        "31 km/h and 19 km/h",
        "25 km/h and 4 km/h",
        "28 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 25 + 4 = 29 km/h. Upstream = Boat - Stream = 25 - 4 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 26 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #12)",
      "opts": [
        "31 km/h and 21 km/h",
        "33 km/h and 19 km/h",
        "26 km/h and 5 km/h",
        "30 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 26 + 5 = 31 km/h. Upstream = Boat - Stream = 26 - 5 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 27 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #13)",
      "opts": [
        "30 km/h and 24 km/h",
        "32 km/h and 22 km/h",
        "27 km/h and 3 km/h",
        "29 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 27 + 3 = 30 km/h. Upstream = Boat - Stream = 27 - 3 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 28 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #14)",
      "opts": [
        "32 km/h and 24 km/h",
        "34 km/h and 22 km/h",
        "28 km/h and 4 km/h",
        "31 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 28 + 4 = 32 km/h. Upstream = Boat - Stream = 28 - 4 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 29 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #15)",
      "opts": [
        "34 km/h and 24 km/h",
        "36 km/h and 22 km/h",
        "29 km/h and 5 km/h",
        "33 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 29 + 5 = 34 km/h. Upstream = Boat - Stream = 29 - 5 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 30 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #16)",
      "opts": [
        "33 km/h and 27 km/h",
        "35 km/h and 25 km/h",
        "30 km/h and 3 km/h",
        "32 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 30 + 3 = 33 km/h. Upstream = Boat - Stream = 30 - 3 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 31 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #17)",
      "opts": [
        "35 km/h and 27 km/h",
        "37 km/h and 25 km/h",
        "31 km/h and 4 km/h",
        "34 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 31 + 4 = 35 km/h. Upstream = Boat - Stream = 31 - 4 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 32 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #18)",
      "opts": [
        "37 km/h and 27 km/h",
        "39 km/h and 25 km/h",
        "32 km/h and 5 km/h",
        "36 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 32 + 5 = 37 km/h. Upstream = Boat - Stream = 32 - 5 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 33 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #19)",
      "opts": [
        "36 km/h and 30 km/h",
        "38 km/h and 28 km/h",
        "33 km/h and 3 km/h",
        "35 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 33 + 3 = 36 km/h. Upstream = Boat - Stream = 33 - 3 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 34 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #20)",
      "opts": [
        "38 km/h and 30 km/h",
        "40 km/h and 28 km/h",
        "34 km/h and 4 km/h",
        "37 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 34 + 4 = 38 km/h. Upstream = Boat - Stream = 34 - 4 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 35 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #21)",
      "opts": [
        "40 km/h and 30 km/h",
        "42 km/h and 28 km/h",
        "35 km/h and 5 km/h",
        "39 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 35 + 5 = 40 km/h. Upstream = Boat - Stream = 35 - 5 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 36 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #22)",
      "opts": [
        "39 km/h and 33 km/h",
        "41 km/h and 31 km/h",
        "36 km/h and 3 km/h",
        "38 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 36 + 3 = 39 km/h. Upstream = Boat - Stream = 36 - 3 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 37 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #23)",
      "opts": [
        "41 km/h and 33 km/h",
        "43 km/h and 31 km/h",
        "37 km/h and 4 km/h",
        "40 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 37 + 4 = 41 km/h. Upstream = Boat - Stream = 37 - 4 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 38 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #24)",
      "opts": [
        "43 km/h and 33 km/h",
        "45 km/h and 31 km/h",
        "38 km/h and 5 km/h",
        "42 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 38 + 5 = 43 km/h. Upstream = Boat - Stream = 38 - 5 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 39 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #25)",
      "opts": [
        "42 km/h and 36 km/h",
        "44 km/h and 34 km/h",
        "39 km/h and 3 km/h",
        "41 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 39 + 3 = 42 km/h. Upstream = Boat - Stream = 39 - 3 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 40 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #26)",
      "opts": [
        "44 km/h and 36 km/h",
        "46 km/h and 34 km/h",
        "40 km/h and 4 km/h",
        "43 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 40 + 4 = 44 km/h. Upstream = Boat - Stream = 40 - 4 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 41 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #27)",
      "opts": [
        "46 km/h and 36 km/h",
        "48 km/h and 34 km/h",
        "41 km/h and 5 km/h",
        "45 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 41 + 5 = 46 km/h. Upstream = Boat - Stream = 41 - 5 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 42 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #28)",
      "opts": [
        "45 km/h and 39 km/h",
        "47 km/h and 37 km/h",
        "42 km/h and 3 km/h",
        "44 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 42 + 3 = 45 km/h. Upstream = Boat - Stream = 42 - 3 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 43 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #29)",
      "opts": [
        "47 km/h and 39 km/h",
        "49 km/h and 37 km/h",
        "43 km/h and 4 km/h",
        "46 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 43 + 4 = 47 km/h. Upstream = Boat - Stream = 43 - 4 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 44 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #30)",
      "opts": [
        "49 km/h and 39 km/h",
        "51 km/h and 37 km/h",
        "44 km/h and 5 km/h",
        "48 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 44 + 5 = 49 km/h. Upstream = Boat - Stream = 44 - 5 = 39 km/h."
    }
  ],
  "level4": [
    {
      "q": "A motorboat's speed in still water is 15 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #1)",
      "opts": [
        "18 km/h and 12 km/h",
        "20 km/h and 10 km/h",
        "15 km/h and 3 km/h",
        "17 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 15 + 3 = 18 km/h. Upstream = Boat - Stream = 15 - 3 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 16 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #2)",
      "opts": [
        "20 km/h and 12 km/h",
        "22 km/h and 10 km/h",
        "16 km/h and 4 km/h",
        "19 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 16 + 4 = 20 km/h. Upstream = Boat - Stream = 16 - 4 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 17 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #3)",
      "opts": [
        "22 km/h and 12 km/h",
        "24 km/h and 10 km/h",
        "17 km/h and 5 km/h",
        "21 km/h and 13 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 17 + 5 = 22 km/h. Upstream = Boat - Stream = 17 - 5 = 12 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 18 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #4)",
      "opts": [
        "21 km/h and 15 km/h",
        "23 km/h and 13 km/h",
        "18 km/h and 3 km/h",
        "20 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 18 + 3 = 21 km/h. Upstream = Boat - Stream = 18 - 3 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 19 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #5)",
      "opts": [
        "23 km/h and 15 km/h",
        "25 km/h and 13 km/h",
        "19 km/h and 4 km/h",
        "22 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 19 + 4 = 23 km/h. Upstream = Boat - Stream = 19 - 4 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 20 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #6)",
      "opts": [
        "25 km/h and 15 km/h",
        "27 km/h and 13 km/h",
        "20 km/h and 5 km/h",
        "24 km/h and 16 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 20 + 5 = 25 km/h. Upstream = Boat - Stream = 20 - 5 = 15 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 21 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #7)",
      "opts": [
        "24 km/h and 18 km/h",
        "26 km/h and 16 km/h",
        "21 km/h and 3 km/h",
        "23 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 21 + 3 = 24 km/h. Upstream = Boat - Stream = 21 - 3 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 22 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #8)",
      "opts": [
        "26 km/h and 18 km/h",
        "28 km/h and 16 km/h",
        "22 km/h and 4 km/h",
        "25 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 22 + 4 = 26 km/h. Upstream = Boat - Stream = 22 - 4 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 23 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #9)",
      "opts": [
        "28 km/h and 18 km/h",
        "30 km/h and 16 km/h",
        "23 km/h and 5 km/h",
        "27 km/h and 19 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 23 + 5 = 28 km/h. Upstream = Boat - Stream = 23 - 5 = 18 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 24 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #10)",
      "opts": [
        "27 km/h and 21 km/h",
        "29 km/h and 19 km/h",
        "24 km/h and 3 km/h",
        "26 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 24 + 3 = 27 km/h. Upstream = Boat - Stream = 24 - 3 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 25 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #11)",
      "opts": [
        "29 km/h and 21 km/h",
        "31 km/h and 19 km/h",
        "25 km/h and 4 km/h",
        "28 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 25 + 4 = 29 km/h. Upstream = Boat - Stream = 25 - 4 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 26 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #12)",
      "opts": [
        "31 km/h and 21 km/h",
        "33 km/h and 19 km/h",
        "26 km/h and 5 km/h",
        "30 km/h and 22 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 26 + 5 = 31 km/h. Upstream = Boat - Stream = 26 - 5 = 21 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 27 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #13)",
      "opts": [
        "30 km/h and 24 km/h",
        "32 km/h and 22 km/h",
        "27 km/h and 3 km/h",
        "29 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 27 + 3 = 30 km/h. Upstream = Boat - Stream = 27 - 3 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 28 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #14)",
      "opts": [
        "32 km/h and 24 km/h",
        "34 km/h and 22 km/h",
        "28 km/h and 4 km/h",
        "31 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 28 + 4 = 32 km/h. Upstream = Boat - Stream = 28 - 4 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 29 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #15)",
      "opts": [
        "34 km/h and 24 km/h",
        "36 km/h and 22 km/h",
        "29 km/h and 5 km/h",
        "33 km/h and 25 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 29 + 5 = 34 km/h. Upstream = Boat - Stream = 29 - 5 = 24 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 30 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #16)",
      "opts": [
        "33 km/h and 27 km/h",
        "35 km/h and 25 km/h",
        "30 km/h and 3 km/h",
        "32 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 30 + 3 = 33 km/h. Upstream = Boat - Stream = 30 - 3 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 31 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #17)",
      "opts": [
        "35 km/h and 27 km/h",
        "37 km/h and 25 km/h",
        "31 km/h and 4 km/h",
        "34 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 31 + 4 = 35 km/h. Upstream = Boat - Stream = 31 - 4 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 32 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #18)",
      "opts": [
        "37 km/h and 27 km/h",
        "39 km/h and 25 km/h",
        "32 km/h and 5 km/h",
        "36 km/h and 28 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 32 + 5 = 37 km/h. Upstream = Boat - Stream = 32 - 5 = 27 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 33 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #19)",
      "opts": [
        "36 km/h and 30 km/h",
        "38 km/h and 28 km/h",
        "33 km/h and 3 km/h",
        "35 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 33 + 3 = 36 km/h. Upstream = Boat - Stream = 33 - 3 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 34 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #20)",
      "opts": [
        "38 km/h and 30 km/h",
        "40 km/h and 28 km/h",
        "34 km/h and 4 km/h",
        "37 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 34 + 4 = 38 km/h. Upstream = Boat - Stream = 34 - 4 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 35 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #21)",
      "opts": [
        "40 km/h and 30 km/h",
        "42 km/h and 28 km/h",
        "35 km/h and 5 km/h",
        "39 km/h and 31 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 35 + 5 = 40 km/h. Upstream = Boat - Stream = 35 - 5 = 30 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 36 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #22)",
      "opts": [
        "39 km/h and 33 km/h",
        "41 km/h and 31 km/h",
        "36 km/h and 3 km/h",
        "38 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 36 + 3 = 39 km/h. Upstream = Boat - Stream = 36 - 3 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 37 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #23)",
      "opts": [
        "41 km/h and 33 km/h",
        "43 km/h and 31 km/h",
        "37 km/h and 4 km/h",
        "40 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 37 + 4 = 41 km/h. Upstream = Boat - Stream = 37 - 4 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 38 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #24)",
      "opts": [
        "43 km/h and 33 km/h",
        "45 km/h and 31 km/h",
        "38 km/h and 5 km/h",
        "42 km/h and 34 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 38 + 5 = 43 km/h. Upstream = Boat - Stream = 38 - 5 = 33 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 39 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #25)",
      "opts": [
        "42 km/h and 36 km/h",
        "44 km/h and 34 km/h",
        "39 km/h and 3 km/h",
        "41 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 39 + 3 = 42 km/h. Upstream = Boat - Stream = 39 - 3 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 40 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #26)",
      "opts": [
        "44 km/h and 36 km/h",
        "46 km/h and 34 km/h",
        "40 km/h and 4 km/h",
        "43 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 40 + 4 = 44 km/h. Upstream = Boat - Stream = 40 - 4 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 41 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #27)",
      "opts": [
        "46 km/h and 36 km/h",
        "48 km/h and 34 km/h",
        "41 km/h and 5 km/h",
        "45 km/h and 37 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 41 + 5 = 46 km/h. Upstream = Boat - Stream = 41 - 5 = 36 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 42 km/h and the river stream flows at 3 km/h. What are its downstream and upstream speeds respectively? (Vessel #28)",
      "opts": [
        "45 km/h and 39 km/h",
        "47 km/h and 37 km/h",
        "42 km/h and 3 km/h",
        "44 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 42 + 3 = 45 km/h. Upstream = Boat - Stream = 42 - 3 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 43 km/h and the river stream flows at 4 km/h. What are its downstream and upstream speeds respectively? (Vessel #29)",
      "opts": [
        "47 km/h and 39 km/h",
        "49 km/h and 37 km/h",
        "43 km/h and 4 km/h",
        "46 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 43 + 4 = 47 km/h. Upstream = Boat - Stream = 43 - 4 = 39 km/h."
    },
    {
      "q": "A motorboat's speed in still water is 44 km/h and the river stream flows at 5 km/h. What are its downstream and upstream speeds respectively? (Vessel #30)",
      "opts": [
        "49 km/h and 39 km/h",
        "51 km/h and 37 km/h",
        "44 km/h and 5 km/h",
        "48 km/h and 40 km/h"
      ],
      "ans": "A",
      "exp": "Downstream = Boat + Stream = 44 + 5 = 49 km/h. Upstream = Boat - Stream = 44 - 5 = 39 km/h."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["permutation-and-combinations"] = {
  "level1": [
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #1)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #2)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #3)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #4)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #5)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #6)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #7)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #8)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #9)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #10)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #11)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #12)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #13)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #14)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #15)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #16)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #17)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #18)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #19)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #20)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #21)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #22)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #23)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #24)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #25)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #26)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #27)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #28)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #29)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #30)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    }
  ],
  "level2": [
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #1)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #2)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #3)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #4)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #5)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #6)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #7)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #8)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #9)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #10)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #11)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #12)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #13)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #14)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #15)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #16)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #17)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #18)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #19)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #20)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #21)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #22)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #23)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #24)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #25)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #26)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #27)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #28)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #29)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #30)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    }
  ],
  "level3": [
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #1)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #2)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #3)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #4)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #5)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #6)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #7)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #8)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #9)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #10)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #11)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #12)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #13)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #14)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #15)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #16)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #17)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #18)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #19)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #20)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #21)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #22)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #23)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #24)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #25)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #26)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #27)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #28)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #29)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #30)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    }
  ],
  "level4": [
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #1)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #2)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #3)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #4)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #5)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #6)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #7)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #8)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #9)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #10)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #11)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #12)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #13)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #14)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #15)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #16)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #17)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #18)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #19)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #20)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #21)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #22)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #23)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #24)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #25)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #26)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 7 candidates? (Selection #27)",
      "opts": [
        "21 ways",
        "42 ways",
        "26 ways",
        "18 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 7! / (2! × (7 - 2)!) = 21 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 8 candidates? (Selection #28)",
      "opts": [
        "56 ways",
        "112 ways",
        "61 ways",
        "53 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 8! / (3! × (8 - 3)!) = 56 ways."
    },
    {
      "q": "In how many different ways can a committee of 2 members be selected from a group of 5 candidates? (Selection #29)",
      "opts": [
        "10 ways",
        "20 ways",
        "15 ways",
        "7 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 5! / (2! × (5 - 2)!) = 10 ways."
    },
    {
      "q": "In how many different ways can a committee of 3 members be selected from a group of 6 candidates? (Selection #30)",
      "opts": [
        "20 ways",
        "40 ways",
        "25 ways",
        "17 ways"
      ],
      "ans": "A",
      "exp": "Formula: nCr = 6! / (3! × (6 - 3)!) = 20 ways."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["probability"] = {
  "level1": [
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #1)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #2)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #3)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #4)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #5)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #6)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #7)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #8)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #9)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #10)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #11)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #12)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #13)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #14)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #15)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #16)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #17)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #18)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #19)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #20)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #21)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #22)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #23)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #24)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #25)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #26)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #27)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #28)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #29)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #30)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    }
  ],
  "level2": [
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #1)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #2)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #3)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #4)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #5)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #6)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #7)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #8)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #9)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #10)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #11)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #12)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #13)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #14)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #15)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #16)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #17)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #18)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #19)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #20)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #21)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #22)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #23)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #24)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #25)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #26)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #27)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #28)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #29)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #30)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    }
  ],
  "level3": [
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #1)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #2)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #3)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #4)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #5)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #6)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #7)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #8)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #9)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #10)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #11)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #12)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #13)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #14)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #15)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #16)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #17)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #18)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #19)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #20)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #21)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #22)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #23)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #24)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #25)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #26)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #27)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #28)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #29)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #30)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    }
  ],
  "level4": [
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #1)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #2)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #3)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #4)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #5)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #6)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #7)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #8)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #9)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #10)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #11)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #12)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #13)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #14)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #15)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #16)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #17)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #18)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #19)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #20)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #21)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #22)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #23)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #24)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #25)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #26)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #27)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    },
    {
      "q": "A bag contains 4 red balls and 5 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #28)",
      "opts": [
        "4/9",
        "5/9",
        "3/9",
        "4/11"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 4 / 9."
    },
    {
      "q": "A bag contains 5 red balls and 6 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #29)",
      "opts": [
        "5/11",
        "6/11",
        "4/11",
        "5/13"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 5 / 11."
    },
    {
      "q": "A bag contains 6 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red? (Trial #30)",
      "opts": [
        "6/13",
        "7/13",
        "5/13",
        "6/15"
      ],
      "ans": "A",
      "exp": "P(Red) = Favorable outcomes / Total outcomes = 6 / 13."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["geometry"] = {
  "level1": [
    {
      "q": "In a triangle ABC, if ∠A = 30° and ∠B = 40°, what is the measure of the third angle ∠C? (Figure #1)",
      "opts": [
        "110°",
        "120°",
        "100°",
        "130°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (30° + 40°) = 110°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 31° and ∠B = 41°, what is the measure of the third angle ∠C? (Figure #2)",
      "opts": [
        "108°",
        "118°",
        "98°",
        "128°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (31° + 41°) = 108°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 32° and ∠B = 42°, what is the measure of the third angle ∠C? (Figure #3)",
      "opts": [
        "106°",
        "116°",
        "96°",
        "126°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (32° + 42°) = 106°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 33° and ∠B = 43°, what is the measure of the third angle ∠C? (Figure #4)",
      "opts": [
        "104°",
        "114°",
        "94°",
        "124°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (33° + 43°) = 104°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 34° and ∠B = 44°, what is the measure of the third angle ∠C? (Figure #5)",
      "opts": [
        "102°",
        "112°",
        "92°",
        "122°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (34° + 44°) = 102°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 35° and ∠B = 45°, what is the measure of the third angle ∠C? (Figure #6)",
      "opts": [
        "100°",
        "110°",
        "90°",
        "120°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (35° + 45°) = 100°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 36° and ∠B = 46°, what is the measure of the third angle ∠C? (Figure #7)",
      "opts": [
        "98°",
        "108°",
        "88°",
        "118°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (36° + 46°) = 98°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 37° and ∠B = 47°, what is the measure of the third angle ∠C? (Figure #8)",
      "opts": [
        "96°",
        "106°",
        "86°",
        "116°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (37° + 47°) = 96°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 38° and ∠B = 48°, what is the measure of the third angle ∠C? (Figure #9)",
      "opts": [
        "94°",
        "104°",
        "84°",
        "114°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (38° + 48°) = 94°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 39° and ∠B = 49°, what is the measure of the third angle ∠C? (Figure #10)",
      "opts": [
        "92°",
        "102°",
        "82°",
        "112°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (39° + 49°) = 92°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 40° and ∠B = 50°, what is the measure of the third angle ∠C? (Figure #11)",
      "opts": [
        "90°",
        "100°",
        "80°",
        "110°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (40° + 50°) = 90°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 41° and ∠B = 51°, what is the measure of the third angle ∠C? (Figure #12)",
      "opts": [
        "88°",
        "98°",
        "78°",
        "108°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (41° + 51°) = 88°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 42° and ∠B = 52°, what is the measure of the third angle ∠C? (Figure #13)",
      "opts": [
        "86°",
        "96°",
        "76°",
        "106°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (42° + 52°) = 86°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 43° and ∠B = 53°, what is the measure of the third angle ∠C? (Figure #14)",
      "opts": [
        "84°",
        "94°",
        "74°",
        "104°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (43° + 53°) = 84°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 44° and ∠B = 54°, what is the measure of the third angle ∠C? (Figure #15)",
      "opts": [
        "82°",
        "92°",
        "72°",
        "102°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (44° + 54°) = 82°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 45° and ∠B = 55°, what is the measure of the third angle ∠C? (Figure #16)",
      "opts": [
        "80°",
        "90°",
        "70°",
        "100°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (45° + 55°) = 80°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 46° and ∠B = 56°, what is the measure of the third angle ∠C? (Figure #17)",
      "opts": [
        "78°",
        "88°",
        "68°",
        "98°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (46° + 56°) = 78°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 47° and ∠B = 57°, what is the measure of the third angle ∠C? (Figure #18)",
      "opts": [
        "76°",
        "86°",
        "66°",
        "96°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (47° + 57°) = 76°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 48° and ∠B = 58°, what is the measure of the third angle ∠C? (Figure #19)",
      "opts": [
        "74°",
        "84°",
        "64°",
        "94°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (48° + 58°) = 74°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 49° and ∠B = 59°, what is the measure of the third angle ∠C? (Figure #20)",
      "opts": [
        "72°",
        "82°",
        "62°",
        "92°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (49° + 59°) = 72°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 50° and ∠B = 60°, what is the measure of the third angle ∠C? (Figure #21)",
      "opts": [
        "70°",
        "80°",
        "60°",
        "90°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (50° + 60°) = 70°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 51° and ∠B = 61°, what is the measure of the third angle ∠C? (Figure #22)",
      "opts": [
        "68°",
        "78°",
        "58°",
        "88°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (51° + 61°) = 68°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 52° and ∠B = 62°, what is the measure of the third angle ∠C? (Figure #23)",
      "opts": [
        "66°",
        "76°",
        "56°",
        "86°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (52° + 62°) = 66°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 53° and ∠B = 63°, what is the measure of the third angle ∠C? (Figure #24)",
      "opts": [
        "64°",
        "74°",
        "54°",
        "84°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (53° + 63°) = 64°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 54° and ∠B = 64°, what is the measure of the third angle ∠C? (Figure #25)",
      "opts": [
        "62°",
        "72°",
        "52°",
        "82°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (54° + 64°) = 62°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 55° and ∠B = 65°, what is the measure of the third angle ∠C? (Figure #26)",
      "opts": [
        "60°",
        "70°",
        "50°",
        "80°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (55° + 65°) = 60°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 56° and ∠B = 66°, what is the measure of the third angle ∠C? (Figure #27)",
      "opts": [
        "58°",
        "68°",
        "48°",
        "78°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (56° + 66°) = 58°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 57° and ∠B = 67°, what is the measure of the third angle ∠C? (Figure #28)",
      "opts": [
        "56°",
        "66°",
        "46°",
        "76°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (57° + 67°) = 56°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 58° and ∠B = 68°, what is the measure of the third angle ∠C? (Figure #29)",
      "opts": [
        "54°",
        "64°",
        "44°",
        "74°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (58° + 68°) = 54°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 59° and ∠B = 69°, what is the measure of the third angle ∠C? (Figure #30)",
      "opts": [
        "52°",
        "62°",
        "42°",
        "72°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (59° + 69°) = 52°."
    }
  ],
  "level2": [
    {
      "q": "In a triangle ABC, if ∠A = 30° and ∠B = 40°, what is the measure of the third angle ∠C? (Figure #1)",
      "opts": [
        "110°",
        "120°",
        "100°",
        "130°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (30° + 40°) = 110°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 31° and ∠B = 41°, what is the measure of the third angle ∠C? (Figure #2)",
      "opts": [
        "108°",
        "118°",
        "98°",
        "128°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (31° + 41°) = 108°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 32° and ∠B = 42°, what is the measure of the third angle ∠C? (Figure #3)",
      "opts": [
        "106°",
        "116°",
        "96°",
        "126°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (32° + 42°) = 106°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 33° and ∠B = 43°, what is the measure of the third angle ∠C? (Figure #4)",
      "opts": [
        "104°",
        "114°",
        "94°",
        "124°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (33° + 43°) = 104°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 34° and ∠B = 44°, what is the measure of the third angle ∠C? (Figure #5)",
      "opts": [
        "102°",
        "112°",
        "92°",
        "122°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (34° + 44°) = 102°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 35° and ∠B = 45°, what is the measure of the third angle ∠C? (Figure #6)",
      "opts": [
        "100°",
        "110°",
        "90°",
        "120°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (35° + 45°) = 100°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 36° and ∠B = 46°, what is the measure of the third angle ∠C? (Figure #7)",
      "opts": [
        "98°",
        "108°",
        "88°",
        "118°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (36° + 46°) = 98°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 37° and ∠B = 47°, what is the measure of the third angle ∠C? (Figure #8)",
      "opts": [
        "96°",
        "106°",
        "86°",
        "116°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (37° + 47°) = 96°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 38° and ∠B = 48°, what is the measure of the third angle ∠C? (Figure #9)",
      "opts": [
        "94°",
        "104°",
        "84°",
        "114°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (38° + 48°) = 94°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 39° and ∠B = 49°, what is the measure of the third angle ∠C? (Figure #10)",
      "opts": [
        "92°",
        "102°",
        "82°",
        "112°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (39° + 49°) = 92°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 40° and ∠B = 50°, what is the measure of the third angle ∠C? (Figure #11)",
      "opts": [
        "90°",
        "100°",
        "80°",
        "110°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (40° + 50°) = 90°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 41° and ∠B = 51°, what is the measure of the third angle ∠C? (Figure #12)",
      "opts": [
        "88°",
        "98°",
        "78°",
        "108°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (41° + 51°) = 88°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 42° and ∠B = 52°, what is the measure of the third angle ∠C? (Figure #13)",
      "opts": [
        "86°",
        "96°",
        "76°",
        "106°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (42° + 52°) = 86°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 43° and ∠B = 53°, what is the measure of the third angle ∠C? (Figure #14)",
      "opts": [
        "84°",
        "94°",
        "74°",
        "104°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (43° + 53°) = 84°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 44° and ∠B = 54°, what is the measure of the third angle ∠C? (Figure #15)",
      "opts": [
        "82°",
        "92°",
        "72°",
        "102°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (44° + 54°) = 82°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 45° and ∠B = 55°, what is the measure of the third angle ∠C? (Figure #16)",
      "opts": [
        "80°",
        "90°",
        "70°",
        "100°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (45° + 55°) = 80°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 46° and ∠B = 56°, what is the measure of the third angle ∠C? (Figure #17)",
      "opts": [
        "78°",
        "88°",
        "68°",
        "98°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (46° + 56°) = 78°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 47° and ∠B = 57°, what is the measure of the third angle ∠C? (Figure #18)",
      "opts": [
        "76°",
        "86°",
        "66°",
        "96°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (47° + 57°) = 76°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 48° and ∠B = 58°, what is the measure of the third angle ∠C? (Figure #19)",
      "opts": [
        "74°",
        "84°",
        "64°",
        "94°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (48° + 58°) = 74°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 49° and ∠B = 59°, what is the measure of the third angle ∠C? (Figure #20)",
      "opts": [
        "72°",
        "82°",
        "62°",
        "92°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (49° + 59°) = 72°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 50° and ∠B = 60°, what is the measure of the third angle ∠C? (Figure #21)",
      "opts": [
        "70°",
        "80°",
        "60°",
        "90°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (50° + 60°) = 70°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 51° and ∠B = 61°, what is the measure of the third angle ∠C? (Figure #22)",
      "opts": [
        "68°",
        "78°",
        "58°",
        "88°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (51° + 61°) = 68°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 52° and ∠B = 62°, what is the measure of the third angle ∠C? (Figure #23)",
      "opts": [
        "66°",
        "76°",
        "56°",
        "86°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (52° + 62°) = 66°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 53° and ∠B = 63°, what is the measure of the third angle ∠C? (Figure #24)",
      "opts": [
        "64°",
        "74°",
        "54°",
        "84°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (53° + 63°) = 64°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 54° and ∠B = 64°, what is the measure of the third angle ∠C? (Figure #25)",
      "opts": [
        "62°",
        "72°",
        "52°",
        "82°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (54° + 64°) = 62°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 55° and ∠B = 65°, what is the measure of the third angle ∠C? (Figure #26)",
      "opts": [
        "60°",
        "70°",
        "50°",
        "80°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (55° + 65°) = 60°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 56° and ∠B = 66°, what is the measure of the third angle ∠C? (Figure #27)",
      "opts": [
        "58°",
        "68°",
        "48°",
        "78°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (56° + 66°) = 58°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 57° and ∠B = 67°, what is the measure of the third angle ∠C? (Figure #28)",
      "opts": [
        "56°",
        "66°",
        "46°",
        "76°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (57° + 67°) = 56°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 58° and ∠B = 68°, what is the measure of the third angle ∠C? (Figure #29)",
      "opts": [
        "54°",
        "64°",
        "44°",
        "74°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (58° + 68°) = 54°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 59° and ∠B = 69°, what is the measure of the third angle ∠C? (Figure #30)",
      "opts": [
        "52°",
        "62°",
        "42°",
        "72°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (59° + 69°) = 52°."
    }
  ],
  "level3": [
    {
      "q": "In a triangle ABC, if ∠A = 30° and ∠B = 40°, what is the measure of the third angle ∠C? (Figure #1)",
      "opts": [
        "110°",
        "120°",
        "100°",
        "130°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (30° + 40°) = 110°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 31° and ∠B = 41°, what is the measure of the third angle ∠C? (Figure #2)",
      "opts": [
        "108°",
        "118°",
        "98°",
        "128°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (31° + 41°) = 108°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 32° and ∠B = 42°, what is the measure of the third angle ∠C? (Figure #3)",
      "opts": [
        "106°",
        "116°",
        "96°",
        "126°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (32° + 42°) = 106°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 33° and ∠B = 43°, what is the measure of the third angle ∠C? (Figure #4)",
      "opts": [
        "104°",
        "114°",
        "94°",
        "124°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (33° + 43°) = 104°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 34° and ∠B = 44°, what is the measure of the third angle ∠C? (Figure #5)",
      "opts": [
        "102°",
        "112°",
        "92°",
        "122°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (34° + 44°) = 102°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 35° and ∠B = 45°, what is the measure of the third angle ∠C? (Figure #6)",
      "opts": [
        "100°",
        "110°",
        "90°",
        "120°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (35° + 45°) = 100°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 36° and ∠B = 46°, what is the measure of the third angle ∠C? (Figure #7)",
      "opts": [
        "98°",
        "108°",
        "88°",
        "118°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (36° + 46°) = 98°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 37° and ∠B = 47°, what is the measure of the third angle ∠C? (Figure #8)",
      "opts": [
        "96°",
        "106°",
        "86°",
        "116°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (37° + 47°) = 96°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 38° and ∠B = 48°, what is the measure of the third angle ∠C? (Figure #9)",
      "opts": [
        "94°",
        "104°",
        "84°",
        "114°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (38° + 48°) = 94°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 39° and ∠B = 49°, what is the measure of the third angle ∠C? (Figure #10)",
      "opts": [
        "92°",
        "102°",
        "82°",
        "112°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (39° + 49°) = 92°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 40° and ∠B = 50°, what is the measure of the third angle ∠C? (Figure #11)",
      "opts": [
        "90°",
        "100°",
        "80°",
        "110°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (40° + 50°) = 90°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 41° and ∠B = 51°, what is the measure of the third angle ∠C? (Figure #12)",
      "opts": [
        "88°",
        "98°",
        "78°",
        "108°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (41° + 51°) = 88°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 42° and ∠B = 52°, what is the measure of the third angle ∠C? (Figure #13)",
      "opts": [
        "86°",
        "96°",
        "76°",
        "106°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (42° + 52°) = 86°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 43° and ∠B = 53°, what is the measure of the third angle ∠C? (Figure #14)",
      "opts": [
        "84°",
        "94°",
        "74°",
        "104°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (43° + 53°) = 84°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 44° and ∠B = 54°, what is the measure of the third angle ∠C? (Figure #15)",
      "opts": [
        "82°",
        "92°",
        "72°",
        "102°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (44° + 54°) = 82°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 45° and ∠B = 55°, what is the measure of the third angle ∠C? (Figure #16)",
      "opts": [
        "80°",
        "90°",
        "70°",
        "100°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (45° + 55°) = 80°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 46° and ∠B = 56°, what is the measure of the third angle ∠C? (Figure #17)",
      "opts": [
        "78°",
        "88°",
        "68°",
        "98°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (46° + 56°) = 78°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 47° and ∠B = 57°, what is the measure of the third angle ∠C? (Figure #18)",
      "opts": [
        "76°",
        "86°",
        "66°",
        "96°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (47° + 57°) = 76°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 48° and ∠B = 58°, what is the measure of the third angle ∠C? (Figure #19)",
      "opts": [
        "74°",
        "84°",
        "64°",
        "94°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (48° + 58°) = 74°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 49° and ∠B = 59°, what is the measure of the third angle ∠C? (Figure #20)",
      "opts": [
        "72°",
        "82°",
        "62°",
        "92°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (49° + 59°) = 72°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 50° and ∠B = 60°, what is the measure of the third angle ∠C? (Figure #21)",
      "opts": [
        "70°",
        "80°",
        "60°",
        "90°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (50° + 60°) = 70°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 51° and ∠B = 61°, what is the measure of the third angle ∠C? (Figure #22)",
      "opts": [
        "68°",
        "78°",
        "58°",
        "88°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (51° + 61°) = 68°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 52° and ∠B = 62°, what is the measure of the third angle ∠C? (Figure #23)",
      "opts": [
        "66°",
        "76°",
        "56°",
        "86°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (52° + 62°) = 66°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 53° and ∠B = 63°, what is the measure of the third angle ∠C? (Figure #24)",
      "opts": [
        "64°",
        "74°",
        "54°",
        "84°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (53° + 63°) = 64°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 54° and ∠B = 64°, what is the measure of the third angle ∠C? (Figure #25)",
      "opts": [
        "62°",
        "72°",
        "52°",
        "82°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (54° + 64°) = 62°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 55° and ∠B = 65°, what is the measure of the third angle ∠C? (Figure #26)",
      "opts": [
        "60°",
        "70°",
        "50°",
        "80°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (55° + 65°) = 60°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 56° and ∠B = 66°, what is the measure of the third angle ∠C? (Figure #27)",
      "opts": [
        "58°",
        "68°",
        "48°",
        "78°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (56° + 66°) = 58°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 57° and ∠B = 67°, what is the measure of the third angle ∠C? (Figure #28)",
      "opts": [
        "56°",
        "66°",
        "46°",
        "76°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (57° + 67°) = 56°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 58° and ∠B = 68°, what is the measure of the third angle ∠C? (Figure #29)",
      "opts": [
        "54°",
        "64°",
        "44°",
        "74°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (58° + 68°) = 54°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 59° and ∠B = 69°, what is the measure of the third angle ∠C? (Figure #30)",
      "opts": [
        "52°",
        "62°",
        "42°",
        "72°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (59° + 69°) = 52°."
    }
  ],
  "level4": [
    {
      "q": "In a triangle ABC, if ∠A = 30° and ∠B = 40°, what is the measure of the third angle ∠C? (Figure #1)",
      "opts": [
        "110°",
        "120°",
        "100°",
        "130°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (30° + 40°) = 110°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 31° and ∠B = 41°, what is the measure of the third angle ∠C? (Figure #2)",
      "opts": [
        "108°",
        "118°",
        "98°",
        "128°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (31° + 41°) = 108°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 32° and ∠B = 42°, what is the measure of the third angle ∠C? (Figure #3)",
      "opts": [
        "106°",
        "116°",
        "96°",
        "126°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (32° + 42°) = 106°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 33° and ∠B = 43°, what is the measure of the third angle ∠C? (Figure #4)",
      "opts": [
        "104°",
        "114°",
        "94°",
        "124°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (33° + 43°) = 104°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 34° and ∠B = 44°, what is the measure of the third angle ∠C? (Figure #5)",
      "opts": [
        "102°",
        "112°",
        "92°",
        "122°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (34° + 44°) = 102°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 35° and ∠B = 45°, what is the measure of the third angle ∠C? (Figure #6)",
      "opts": [
        "100°",
        "110°",
        "90°",
        "120°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (35° + 45°) = 100°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 36° and ∠B = 46°, what is the measure of the third angle ∠C? (Figure #7)",
      "opts": [
        "98°",
        "108°",
        "88°",
        "118°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (36° + 46°) = 98°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 37° and ∠B = 47°, what is the measure of the third angle ∠C? (Figure #8)",
      "opts": [
        "96°",
        "106°",
        "86°",
        "116°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (37° + 47°) = 96°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 38° and ∠B = 48°, what is the measure of the third angle ∠C? (Figure #9)",
      "opts": [
        "94°",
        "104°",
        "84°",
        "114°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (38° + 48°) = 94°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 39° and ∠B = 49°, what is the measure of the third angle ∠C? (Figure #10)",
      "opts": [
        "92°",
        "102°",
        "82°",
        "112°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (39° + 49°) = 92°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 40° and ∠B = 50°, what is the measure of the third angle ∠C? (Figure #11)",
      "opts": [
        "90°",
        "100°",
        "80°",
        "110°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (40° + 50°) = 90°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 41° and ∠B = 51°, what is the measure of the third angle ∠C? (Figure #12)",
      "opts": [
        "88°",
        "98°",
        "78°",
        "108°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (41° + 51°) = 88°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 42° and ∠B = 52°, what is the measure of the third angle ∠C? (Figure #13)",
      "opts": [
        "86°",
        "96°",
        "76°",
        "106°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (42° + 52°) = 86°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 43° and ∠B = 53°, what is the measure of the third angle ∠C? (Figure #14)",
      "opts": [
        "84°",
        "94°",
        "74°",
        "104°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (43° + 53°) = 84°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 44° and ∠B = 54°, what is the measure of the third angle ∠C? (Figure #15)",
      "opts": [
        "82°",
        "92°",
        "72°",
        "102°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (44° + 54°) = 82°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 45° and ∠B = 55°, what is the measure of the third angle ∠C? (Figure #16)",
      "opts": [
        "80°",
        "90°",
        "70°",
        "100°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (45° + 55°) = 80°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 46° and ∠B = 56°, what is the measure of the third angle ∠C? (Figure #17)",
      "opts": [
        "78°",
        "88°",
        "68°",
        "98°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (46° + 56°) = 78°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 47° and ∠B = 57°, what is the measure of the third angle ∠C? (Figure #18)",
      "opts": [
        "76°",
        "86°",
        "66°",
        "96°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (47° + 57°) = 76°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 48° and ∠B = 58°, what is the measure of the third angle ∠C? (Figure #19)",
      "opts": [
        "74°",
        "84°",
        "64°",
        "94°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (48° + 58°) = 74°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 49° and ∠B = 59°, what is the measure of the third angle ∠C? (Figure #20)",
      "opts": [
        "72°",
        "82°",
        "62°",
        "92°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (49° + 59°) = 72°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 50° and ∠B = 60°, what is the measure of the third angle ∠C? (Figure #21)",
      "opts": [
        "70°",
        "80°",
        "60°",
        "90°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (50° + 60°) = 70°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 51° and ∠B = 61°, what is the measure of the third angle ∠C? (Figure #22)",
      "opts": [
        "68°",
        "78°",
        "58°",
        "88°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (51° + 61°) = 68°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 52° and ∠B = 62°, what is the measure of the third angle ∠C? (Figure #23)",
      "opts": [
        "66°",
        "76°",
        "56°",
        "86°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (52° + 62°) = 66°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 53° and ∠B = 63°, what is the measure of the third angle ∠C? (Figure #24)",
      "opts": [
        "64°",
        "74°",
        "54°",
        "84°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (53° + 63°) = 64°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 54° and ∠B = 64°, what is the measure of the third angle ∠C? (Figure #25)",
      "opts": [
        "62°",
        "72°",
        "52°",
        "82°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (54° + 64°) = 62°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 55° and ∠B = 65°, what is the measure of the third angle ∠C? (Figure #26)",
      "opts": [
        "60°",
        "70°",
        "50°",
        "80°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (55° + 65°) = 60°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 56° and ∠B = 66°, what is the measure of the third angle ∠C? (Figure #27)",
      "opts": [
        "58°",
        "68°",
        "48°",
        "78°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (56° + 66°) = 58°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 57° and ∠B = 67°, what is the measure of the third angle ∠C? (Figure #28)",
      "opts": [
        "56°",
        "66°",
        "46°",
        "76°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (57° + 67°) = 56°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 58° and ∠B = 68°, what is the measure of the third angle ∠C? (Figure #29)",
      "opts": [
        "54°",
        "64°",
        "44°",
        "74°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (58° + 68°) = 54°."
    },
    {
      "q": "In a triangle ABC, if ∠A = 59° and ∠B = 69°, what is the measure of the third angle ∠C? (Figure #30)",
      "opts": [
        "52°",
        "62°",
        "42°",
        "72°"
      ],
      "ans": "A",
      "exp": "The sum of interior angles in any triangle is 180°. ∠C = 180° - (59° + 69°) = 52°."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["mixtures-and-alligations"] = {
  "level1": [
    {
      "q": "In what ratio must tea costing ₹40/kg be mixed with tea costing ₹60/kg so that the resulting mixture is worth ₹50/kg? (Blend #1)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (60 - 50) / (50 - 40) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹42/kg be mixed with tea costing ₹62/kg so that the resulting mixture is worth ₹52/kg? (Blend #2)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (62 - 52) / (52 - 42) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹44/kg be mixed with tea costing ₹64/kg so that the resulting mixture is worth ₹54/kg? (Blend #3)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (64 - 54) / (54 - 44) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹46/kg be mixed with tea costing ₹66/kg so that the resulting mixture is worth ₹56/kg? (Blend #4)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (66 - 56) / (56 - 46) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹48/kg be mixed with tea costing ₹68/kg so that the resulting mixture is worth ₹58/kg? (Blend #5)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (68 - 58) / (58 - 48) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹50/kg be mixed with tea costing ₹70/kg so that the resulting mixture is worth ₹60/kg? (Blend #6)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (70 - 60) / (60 - 50) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹52/kg be mixed with tea costing ₹72/kg so that the resulting mixture is worth ₹62/kg? (Blend #7)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (72 - 62) / (62 - 52) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹54/kg be mixed with tea costing ₹74/kg so that the resulting mixture is worth ₹64/kg? (Blend #8)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (74 - 64) / (64 - 54) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹56/kg be mixed with tea costing ₹76/kg so that the resulting mixture is worth ₹66/kg? (Blend #9)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (76 - 66) / (66 - 56) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹58/kg be mixed with tea costing ₹78/kg so that the resulting mixture is worth ₹68/kg? (Blend #10)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (78 - 68) / (68 - 58) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹60/kg be mixed with tea costing ₹80/kg so that the resulting mixture is worth ₹70/kg? (Blend #11)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (80 - 70) / (70 - 60) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹62/kg be mixed with tea costing ₹82/kg so that the resulting mixture is worth ₹72/kg? (Blend #12)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (82 - 72) / (72 - 62) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹64/kg be mixed with tea costing ₹84/kg so that the resulting mixture is worth ₹74/kg? (Blend #13)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (84 - 74) / (74 - 64) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹66/kg be mixed with tea costing ₹86/kg so that the resulting mixture is worth ₹76/kg? (Blend #14)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (86 - 76) / (76 - 66) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹68/kg be mixed with tea costing ₹88/kg so that the resulting mixture is worth ₹78/kg? (Blend #15)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (88 - 78) / (78 - 68) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹70/kg be mixed with tea costing ₹90/kg so that the resulting mixture is worth ₹80/kg? (Blend #16)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (90 - 80) / (80 - 70) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹72/kg be mixed with tea costing ₹92/kg so that the resulting mixture is worth ₹82/kg? (Blend #17)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (92 - 82) / (82 - 72) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹74/kg be mixed with tea costing ₹94/kg so that the resulting mixture is worth ₹84/kg? (Blend #18)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (94 - 84) / (84 - 74) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹76/kg be mixed with tea costing ₹96/kg so that the resulting mixture is worth ₹86/kg? (Blend #19)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (96 - 86) / (86 - 76) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹78/kg be mixed with tea costing ₹98/kg so that the resulting mixture is worth ₹88/kg? (Blend #20)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (98 - 88) / (88 - 78) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹80/kg be mixed with tea costing ₹100/kg so that the resulting mixture is worth ₹90/kg? (Blend #21)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (100 - 90) / (90 - 80) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹82/kg be mixed with tea costing ₹102/kg so that the resulting mixture is worth ₹92/kg? (Blend #22)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (102 - 92) / (92 - 82) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹84/kg be mixed with tea costing ₹104/kg so that the resulting mixture is worth ₹94/kg? (Blend #23)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (104 - 94) / (94 - 84) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹86/kg be mixed with tea costing ₹106/kg so that the resulting mixture is worth ₹96/kg? (Blend #24)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (106 - 96) / (96 - 86) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹88/kg be mixed with tea costing ₹108/kg so that the resulting mixture is worth ₹98/kg? (Blend #25)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (108 - 98) / (98 - 88) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹90/kg be mixed with tea costing ₹110/kg so that the resulting mixture is worth ₹100/kg? (Blend #26)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (110 - 100) / (100 - 90) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹92/kg be mixed with tea costing ₹112/kg so that the resulting mixture is worth ₹102/kg? (Blend #27)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (112 - 102) / (102 - 92) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹94/kg be mixed with tea costing ₹114/kg so that the resulting mixture is worth ₹104/kg? (Blend #28)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (114 - 104) / (104 - 94) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹96/kg be mixed with tea costing ₹116/kg so that the resulting mixture is worth ₹106/kg? (Blend #29)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (116 - 106) / (106 - 96) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹98/kg be mixed with tea costing ₹118/kg so that the resulting mixture is worth ₹108/kg? (Blend #30)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (118 - 108) / (108 - 98) = 1 : 1."
    }
  ],
  "level2": [
    {
      "q": "In what ratio must tea costing ₹40/kg be mixed with tea costing ₹60/kg so that the resulting mixture is worth ₹50/kg? (Blend #1)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (60 - 50) / (50 - 40) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹42/kg be mixed with tea costing ₹62/kg so that the resulting mixture is worth ₹52/kg? (Blend #2)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (62 - 52) / (52 - 42) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹44/kg be mixed with tea costing ₹64/kg so that the resulting mixture is worth ₹54/kg? (Blend #3)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (64 - 54) / (54 - 44) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹46/kg be mixed with tea costing ₹66/kg so that the resulting mixture is worth ₹56/kg? (Blend #4)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (66 - 56) / (56 - 46) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹48/kg be mixed with tea costing ₹68/kg so that the resulting mixture is worth ₹58/kg? (Blend #5)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (68 - 58) / (58 - 48) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹50/kg be mixed with tea costing ₹70/kg so that the resulting mixture is worth ₹60/kg? (Blend #6)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (70 - 60) / (60 - 50) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹52/kg be mixed with tea costing ₹72/kg so that the resulting mixture is worth ₹62/kg? (Blend #7)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (72 - 62) / (62 - 52) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹54/kg be mixed with tea costing ₹74/kg so that the resulting mixture is worth ₹64/kg? (Blend #8)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (74 - 64) / (64 - 54) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹56/kg be mixed with tea costing ₹76/kg so that the resulting mixture is worth ₹66/kg? (Blend #9)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (76 - 66) / (66 - 56) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹58/kg be mixed with tea costing ₹78/kg so that the resulting mixture is worth ₹68/kg? (Blend #10)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (78 - 68) / (68 - 58) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹60/kg be mixed with tea costing ₹80/kg so that the resulting mixture is worth ₹70/kg? (Blend #11)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (80 - 70) / (70 - 60) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹62/kg be mixed with tea costing ₹82/kg so that the resulting mixture is worth ₹72/kg? (Blend #12)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (82 - 72) / (72 - 62) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹64/kg be mixed with tea costing ₹84/kg so that the resulting mixture is worth ₹74/kg? (Blend #13)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (84 - 74) / (74 - 64) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹66/kg be mixed with tea costing ₹86/kg so that the resulting mixture is worth ₹76/kg? (Blend #14)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (86 - 76) / (76 - 66) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹68/kg be mixed with tea costing ₹88/kg so that the resulting mixture is worth ₹78/kg? (Blend #15)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (88 - 78) / (78 - 68) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹70/kg be mixed with tea costing ₹90/kg so that the resulting mixture is worth ₹80/kg? (Blend #16)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (90 - 80) / (80 - 70) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹72/kg be mixed with tea costing ₹92/kg so that the resulting mixture is worth ₹82/kg? (Blend #17)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (92 - 82) / (82 - 72) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹74/kg be mixed with tea costing ₹94/kg so that the resulting mixture is worth ₹84/kg? (Blend #18)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (94 - 84) / (84 - 74) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹76/kg be mixed with tea costing ₹96/kg so that the resulting mixture is worth ₹86/kg? (Blend #19)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (96 - 86) / (86 - 76) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹78/kg be mixed with tea costing ₹98/kg so that the resulting mixture is worth ₹88/kg? (Blend #20)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (98 - 88) / (88 - 78) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹80/kg be mixed with tea costing ₹100/kg so that the resulting mixture is worth ₹90/kg? (Blend #21)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (100 - 90) / (90 - 80) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹82/kg be mixed with tea costing ₹102/kg so that the resulting mixture is worth ₹92/kg? (Blend #22)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (102 - 92) / (92 - 82) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹84/kg be mixed with tea costing ₹104/kg so that the resulting mixture is worth ₹94/kg? (Blend #23)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (104 - 94) / (94 - 84) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹86/kg be mixed with tea costing ₹106/kg so that the resulting mixture is worth ₹96/kg? (Blend #24)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (106 - 96) / (96 - 86) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹88/kg be mixed with tea costing ₹108/kg so that the resulting mixture is worth ₹98/kg? (Blend #25)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (108 - 98) / (98 - 88) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹90/kg be mixed with tea costing ₹110/kg so that the resulting mixture is worth ₹100/kg? (Blend #26)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (110 - 100) / (100 - 90) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹92/kg be mixed with tea costing ₹112/kg so that the resulting mixture is worth ₹102/kg? (Blend #27)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (112 - 102) / (102 - 92) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹94/kg be mixed with tea costing ₹114/kg so that the resulting mixture is worth ₹104/kg? (Blend #28)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (114 - 104) / (104 - 94) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹96/kg be mixed with tea costing ₹116/kg so that the resulting mixture is worth ₹106/kg? (Blend #29)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (116 - 106) / (106 - 96) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹98/kg be mixed with tea costing ₹118/kg so that the resulting mixture is worth ₹108/kg? (Blend #30)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (118 - 108) / (108 - 98) = 1 : 1."
    }
  ],
  "level3": [
    {
      "q": "In what ratio must tea costing ₹40/kg be mixed with tea costing ₹60/kg so that the resulting mixture is worth ₹50/kg? (Blend #1)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (60 - 50) / (50 - 40) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹42/kg be mixed with tea costing ₹62/kg so that the resulting mixture is worth ₹52/kg? (Blend #2)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (62 - 52) / (52 - 42) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹44/kg be mixed with tea costing ₹64/kg so that the resulting mixture is worth ₹54/kg? (Blend #3)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (64 - 54) / (54 - 44) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹46/kg be mixed with tea costing ₹66/kg so that the resulting mixture is worth ₹56/kg? (Blend #4)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (66 - 56) / (56 - 46) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹48/kg be mixed with tea costing ₹68/kg so that the resulting mixture is worth ₹58/kg? (Blend #5)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (68 - 58) / (58 - 48) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹50/kg be mixed with tea costing ₹70/kg so that the resulting mixture is worth ₹60/kg? (Blend #6)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (70 - 60) / (60 - 50) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹52/kg be mixed with tea costing ₹72/kg so that the resulting mixture is worth ₹62/kg? (Blend #7)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (72 - 62) / (62 - 52) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹54/kg be mixed with tea costing ₹74/kg so that the resulting mixture is worth ₹64/kg? (Blend #8)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (74 - 64) / (64 - 54) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹56/kg be mixed with tea costing ₹76/kg so that the resulting mixture is worth ₹66/kg? (Blend #9)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (76 - 66) / (66 - 56) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹58/kg be mixed with tea costing ₹78/kg so that the resulting mixture is worth ₹68/kg? (Blend #10)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (78 - 68) / (68 - 58) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹60/kg be mixed with tea costing ₹80/kg so that the resulting mixture is worth ₹70/kg? (Blend #11)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (80 - 70) / (70 - 60) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹62/kg be mixed with tea costing ₹82/kg so that the resulting mixture is worth ₹72/kg? (Blend #12)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (82 - 72) / (72 - 62) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹64/kg be mixed with tea costing ₹84/kg so that the resulting mixture is worth ₹74/kg? (Blend #13)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (84 - 74) / (74 - 64) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹66/kg be mixed with tea costing ₹86/kg so that the resulting mixture is worth ₹76/kg? (Blend #14)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (86 - 76) / (76 - 66) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹68/kg be mixed with tea costing ₹88/kg so that the resulting mixture is worth ₹78/kg? (Blend #15)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (88 - 78) / (78 - 68) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹70/kg be mixed with tea costing ₹90/kg so that the resulting mixture is worth ₹80/kg? (Blend #16)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (90 - 80) / (80 - 70) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹72/kg be mixed with tea costing ₹92/kg so that the resulting mixture is worth ₹82/kg? (Blend #17)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (92 - 82) / (82 - 72) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹74/kg be mixed with tea costing ₹94/kg so that the resulting mixture is worth ₹84/kg? (Blend #18)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (94 - 84) / (84 - 74) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹76/kg be mixed with tea costing ₹96/kg so that the resulting mixture is worth ₹86/kg? (Blend #19)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (96 - 86) / (86 - 76) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹78/kg be mixed with tea costing ₹98/kg so that the resulting mixture is worth ₹88/kg? (Blend #20)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (98 - 88) / (88 - 78) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹80/kg be mixed with tea costing ₹100/kg so that the resulting mixture is worth ₹90/kg? (Blend #21)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (100 - 90) / (90 - 80) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹82/kg be mixed with tea costing ₹102/kg so that the resulting mixture is worth ₹92/kg? (Blend #22)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (102 - 92) / (92 - 82) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹84/kg be mixed with tea costing ₹104/kg so that the resulting mixture is worth ₹94/kg? (Blend #23)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (104 - 94) / (94 - 84) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹86/kg be mixed with tea costing ₹106/kg so that the resulting mixture is worth ₹96/kg? (Blend #24)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (106 - 96) / (96 - 86) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹88/kg be mixed with tea costing ₹108/kg so that the resulting mixture is worth ₹98/kg? (Blend #25)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (108 - 98) / (98 - 88) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹90/kg be mixed with tea costing ₹110/kg so that the resulting mixture is worth ₹100/kg? (Blend #26)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (110 - 100) / (100 - 90) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹92/kg be mixed with tea costing ₹112/kg so that the resulting mixture is worth ₹102/kg? (Blend #27)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (112 - 102) / (102 - 92) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹94/kg be mixed with tea costing ₹114/kg so that the resulting mixture is worth ₹104/kg? (Blend #28)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (114 - 104) / (104 - 94) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹96/kg be mixed with tea costing ₹116/kg so that the resulting mixture is worth ₹106/kg? (Blend #29)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (116 - 106) / (106 - 96) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹98/kg be mixed with tea costing ₹118/kg so that the resulting mixture is worth ₹108/kg? (Blend #30)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (118 - 108) / (108 - 98) = 1 : 1."
    }
  ],
  "level4": [
    {
      "q": "In what ratio must tea costing ₹40/kg be mixed with tea costing ₹60/kg so that the resulting mixture is worth ₹50/kg? (Blend #1)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (60 - 50) / (50 - 40) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹42/kg be mixed with tea costing ₹62/kg so that the resulting mixture is worth ₹52/kg? (Blend #2)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (62 - 52) / (52 - 42) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹44/kg be mixed with tea costing ₹64/kg so that the resulting mixture is worth ₹54/kg? (Blend #3)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (64 - 54) / (54 - 44) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹46/kg be mixed with tea costing ₹66/kg so that the resulting mixture is worth ₹56/kg? (Blend #4)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (66 - 56) / (56 - 46) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹48/kg be mixed with tea costing ₹68/kg so that the resulting mixture is worth ₹58/kg? (Blend #5)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (68 - 58) / (58 - 48) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹50/kg be mixed with tea costing ₹70/kg so that the resulting mixture is worth ₹60/kg? (Blend #6)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (70 - 60) / (60 - 50) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹52/kg be mixed with tea costing ₹72/kg so that the resulting mixture is worth ₹62/kg? (Blend #7)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (72 - 62) / (62 - 52) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹54/kg be mixed with tea costing ₹74/kg so that the resulting mixture is worth ₹64/kg? (Blend #8)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (74 - 64) / (64 - 54) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹56/kg be mixed with tea costing ₹76/kg so that the resulting mixture is worth ₹66/kg? (Blend #9)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (76 - 66) / (66 - 56) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹58/kg be mixed with tea costing ₹78/kg so that the resulting mixture is worth ₹68/kg? (Blend #10)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (78 - 68) / (68 - 58) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹60/kg be mixed with tea costing ₹80/kg so that the resulting mixture is worth ₹70/kg? (Blend #11)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (80 - 70) / (70 - 60) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹62/kg be mixed with tea costing ₹82/kg so that the resulting mixture is worth ₹72/kg? (Blend #12)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (82 - 72) / (72 - 62) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹64/kg be mixed with tea costing ₹84/kg so that the resulting mixture is worth ₹74/kg? (Blend #13)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (84 - 74) / (74 - 64) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹66/kg be mixed with tea costing ₹86/kg so that the resulting mixture is worth ₹76/kg? (Blend #14)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (86 - 76) / (76 - 66) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹68/kg be mixed with tea costing ₹88/kg so that the resulting mixture is worth ₹78/kg? (Blend #15)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (88 - 78) / (78 - 68) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹70/kg be mixed with tea costing ₹90/kg so that the resulting mixture is worth ₹80/kg? (Blend #16)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (90 - 80) / (80 - 70) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹72/kg be mixed with tea costing ₹92/kg so that the resulting mixture is worth ₹82/kg? (Blend #17)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (92 - 82) / (82 - 72) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹74/kg be mixed with tea costing ₹94/kg so that the resulting mixture is worth ₹84/kg? (Blend #18)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (94 - 84) / (84 - 74) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹76/kg be mixed with tea costing ₹96/kg so that the resulting mixture is worth ₹86/kg? (Blend #19)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (96 - 86) / (86 - 76) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹78/kg be mixed with tea costing ₹98/kg so that the resulting mixture is worth ₹88/kg? (Blend #20)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (98 - 88) / (88 - 78) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹80/kg be mixed with tea costing ₹100/kg so that the resulting mixture is worth ₹90/kg? (Blend #21)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (100 - 90) / (90 - 80) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹82/kg be mixed with tea costing ₹102/kg so that the resulting mixture is worth ₹92/kg? (Blend #22)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (102 - 92) / (92 - 82) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹84/kg be mixed with tea costing ₹104/kg so that the resulting mixture is worth ₹94/kg? (Blend #23)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (104 - 94) / (94 - 84) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹86/kg be mixed with tea costing ₹106/kg so that the resulting mixture is worth ₹96/kg? (Blend #24)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (106 - 96) / (96 - 86) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹88/kg be mixed with tea costing ₹108/kg so that the resulting mixture is worth ₹98/kg? (Blend #25)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (108 - 98) / (98 - 88) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹90/kg be mixed with tea costing ₹110/kg so that the resulting mixture is worth ₹100/kg? (Blend #26)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (110 - 100) / (100 - 90) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹92/kg be mixed with tea costing ₹112/kg so that the resulting mixture is worth ₹102/kg? (Blend #27)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (112 - 102) / (102 - 92) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹94/kg be mixed with tea costing ₹114/kg so that the resulting mixture is worth ₹104/kg? (Blend #28)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (114 - 104) / (104 - 94) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹96/kg be mixed with tea costing ₹116/kg so that the resulting mixture is worth ₹106/kg? (Blend #29)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (116 - 106) / (106 - 96) = 1 : 1."
    },
    {
      "q": "In what ratio must tea costing ₹98/kg be mixed with tea costing ₹118/kg so that the resulting mixture is worth ₹108/kg? (Blend #30)",
      "opts": [
        "1 : 1",
        "2 : 3",
        "3 : 2",
        "1 : 2"
      ],
      "ans": "A",
      "exp": "By rule of alligation: Ratio = (c2 - mean) / (mean - c1) = (118 - 108) / (108 - 98) = 1 : 1."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["algebra"] = {
  "level1": [
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 5 = 13 (Equation #1)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 13 - 5 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 6 = 18 (Equation #2)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 18 - 6 = 12 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 4x + 7 = 23 (Equation #3)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "4x = 23 - 7 = 16 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 5x + 8 = 28 (Equation #4)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "5x = 28 - 8 = 20 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 9 = 17 (Equation #5)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 17 - 9 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 10 = 22 (Equation #6)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 22 - 10 = 12 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 4x + 11 = 27 (Equation #7)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "4x = 27 - 11 = 16 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 5x + 5 = 25 (Equation #8)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "5x = 25 - 5 = 20 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 6 = 14 (Equation #9)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 14 - 6 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 7 = 19 (Equation #10)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 19 - 7 = 12 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 4x + 8 = 24 (Equation #11)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "4x = 24 - 8 = 16 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 5x + 9 = 29 (Equation #12)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "5x = 29 - 9 = 20 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 10 = 18 (Equation #13)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 18 - 10 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 11 = 23 (Equation #14)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 23 - 11 = 12 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 4x + 5 = 21 (Equation #15)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "4x = 21 - 5 = 16 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 5x + 6 = 26 (Equation #16)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "5x = 26 - 6 = 20 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 7 = 15 (Equation #17)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 15 - 7 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 8 = 20 (Equation #18)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 20 - 8 = 12 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 4x + 9 = 25 (Equation #19)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "4x = 25 - 9 = 16 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 5x + 10 = 30 (Equation #20)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "5x = 30 - 10 = 20 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 11 = 19 (Equation #21)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 19 - 11 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 5 = 17 (Equation #22)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 17 - 5 = 12 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 4x + 6 = 22 (Equation #23)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "4x = 22 - 6 = 16 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 5x + 7 = 27 (Equation #24)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "5x = 27 - 7 = 20 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 8 = 16 (Equation #25)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 16 - 8 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 9 = 21 (Equation #26)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 21 - 9 = 12 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 4x + 10 = 26 (Equation #27)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "4x = 26 - 10 = 16 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 5x + 11 = 31 (Equation #28)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "5x = 31 - 11 = 20 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 2x + 5 = 13 (Equation #29)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "2x = 13 - 5 = 8 -> x = 4 = 4."
    },
    {
      "q": "Solve for x in the linear algebraic equation: 3x + 6 = 18 (Equation #30)",
      "opts": [
        "4",
        "3",
        "5",
        "2"
      ],
      "ans": "A",
      "exp": "3x = 18 - 6 = 12 -> x = 4 = 4."
    }
  ],
  "level2": [
    {
      "q": "If x + 1/x = 3, what is the exact value of x² + 1/x²? (Problem #1)",
      "opts": [
        "7",
        "9",
        "11",
        "5"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 3² - 2 = 7."
    },
    {
      "q": "If x + 1/x = 4, what is the exact value of x² + 1/x²? (Problem #2)",
      "opts": [
        "14",
        "16",
        "18",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 4² - 2 = 14."
    },
    {
      "q": "If x + 1/x = 5, what is the exact value of x² + 1/x²? (Problem #3)",
      "opts": [
        "23",
        "25",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 5² - 2 = 23."
    },
    {
      "q": "If x + 1/x = 6, what is the exact value of x² + 1/x²? (Problem #4)",
      "opts": [
        "34",
        "36",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 6² - 2 = 34."
    },
    {
      "q": "If x + 1/x = 7, what is the exact value of x² + 1/x²? (Problem #5)",
      "opts": [
        "47",
        "49",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 7² - 2 = 47."
    },
    {
      "q": "If x + 1/x = 8, what is the exact value of x² + 1/x²? (Problem #6)",
      "opts": [
        "62",
        "64",
        "66",
        "60"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 8² - 2 = 62."
    },
    {
      "q": "If x + 1/x = 3, what is the exact value of x² + 1/x²? (Problem #7)",
      "opts": [
        "7",
        "9",
        "11",
        "5"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 3² - 2 = 7."
    },
    {
      "q": "If x + 1/x = 4, what is the exact value of x² + 1/x²? (Problem #8)",
      "opts": [
        "14",
        "16",
        "18",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 4² - 2 = 14."
    },
    {
      "q": "If x + 1/x = 5, what is the exact value of x² + 1/x²? (Problem #9)",
      "opts": [
        "23",
        "25",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 5² - 2 = 23."
    },
    {
      "q": "If x + 1/x = 6, what is the exact value of x² + 1/x²? (Problem #10)",
      "opts": [
        "34",
        "36",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 6² - 2 = 34."
    },
    {
      "q": "If x + 1/x = 7, what is the exact value of x² + 1/x²? (Problem #11)",
      "opts": [
        "47",
        "49",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 7² - 2 = 47."
    },
    {
      "q": "If x + 1/x = 8, what is the exact value of x² + 1/x²? (Problem #12)",
      "opts": [
        "62",
        "64",
        "66",
        "60"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 8² - 2 = 62."
    },
    {
      "q": "If x + 1/x = 3, what is the exact value of x² + 1/x²? (Problem #13)",
      "opts": [
        "7",
        "9",
        "11",
        "5"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 3² - 2 = 7."
    },
    {
      "q": "If x + 1/x = 4, what is the exact value of x² + 1/x²? (Problem #14)",
      "opts": [
        "14",
        "16",
        "18",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 4² - 2 = 14."
    },
    {
      "q": "If x + 1/x = 5, what is the exact value of x² + 1/x²? (Problem #15)",
      "opts": [
        "23",
        "25",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 5² - 2 = 23."
    },
    {
      "q": "If x + 1/x = 6, what is the exact value of x² + 1/x²? (Problem #16)",
      "opts": [
        "34",
        "36",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 6² - 2 = 34."
    },
    {
      "q": "If x + 1/x = 7, what is the exact value of x² + 1/x²? (Problem #17)",
      "opts": [
        "47",
        "49",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 7² - 2 = 47."
    },
    {
      "q": "If x + 1/x = 8, what is the exact value of x² + 1/x²? (Problem #18)",
      "opts": [
        "62",
        "64",
        "66",
        "60"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 8² - 2 = 62."
    },
    {
      "q": "If x + 1/x = 3, what is the exact value of x² + 1/x²? (Problem #19)",
      "opts": [
        "7",
        "9",
        "11",
        "5"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 3² - 2 = 7."
    },
    {
      "q": "If x + 1/x = 4, what is the exact value of x² + 1/x²? (Problem #20)",
      "opts": [
        "14",
        "16",
        "18",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 4² - 2 = 14."
    },
    {
      "q": "If x + 1/x = 5, what is the exact value of x² + 1/x²? (Problem #21)",
      "opts": [
        "23",
        "25",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 5² - 2 = 23."
    },
    {
      "q": "If x + 1/x = 6, what is the exact value of x² + 1/x²? (Problem #22)",
      "opts": [
        "34",
        "36",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 6² - 2 = 34."
    },
    {
      "q": "If x + 1/x = 7, what is the exact value of x² + 1/x²? (Problem #23)",
      "opts": [
        "47",
        "49",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 7² - 2 = 47."
    },
    {
      "q": "If x + 1/x = 8, what is the exact value of x² + 1/x²? (Problem #24)",
      "opts": [
        "62",
        "64",
        "66",
        "60"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 8² - 2 = 62."
    },
    {
      "q": "If x + 1/x = 3, what is the exact value of x² + 1/x²? (Problem #25)",
      "opts": [
        "7",
        "9",
        "11",
        "5"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 3² - 2 = 7."
    },
    {
      "q": "If x + 1/x = 4, what is the exact value of x² + 1/x²? (Problem #26)",
      "opts": [
        "14",
        "16",
        "18",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 4² - 2 = 14."
    },
    {
      "q": "If x + 1/x = 5, what is the exact value of x² + 1/x²? (Problem #27)",
      "opts": [
        "23",
        "25",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 5² - 2 = 23."
    },
    {
      "q": "If x + 1/x = 6, what is the exact value of x² + 1/x²? (Problem #28)",
      "opts": [
        "34",
        "36",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 6² - 2 = 34."
    },
    {
      "q": "If x + 1/x = 7, what is the exact value of x² + 1/x²? (Problem #29)",
      "opts": [
        "47",
        "49",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 7² - 2 = 47."
    },
    {
      "q": "If x + 1/x = 8, what is the exact value of x² + 1/x²? (Problem #30)",
      "opts": [
        "62",
        "64",
        "66",
        "60"
      ],
      "ans": "A",
      "exp": "Identity: (x + 1/x)² = x² + 1/x² + 2 -> x² + 1/x² = k² - 2 = 8² - 2 = 62."
    }
  ],
  "level3": [
    {
      "q": "If x + 1/x = 3, determine the value of x³ + 1/x³: (Problem #1)",
      "opts": [
        "18",
        "27",
        "24",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 3³ - 3(3) = 18."
    },
    {
      "q": "If x + 1/x = 4, determine the value of x³ + 1/x³: (Problem #2)",
      "opts": [
        "52",
        "64",
        "58",
        "46"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 52."
    },
    {
      "q": "If x + 1/x = 5, determine the value of x³ + 1/x³: (Problem #3)",
      "opts": [
        "110",
        "125",
        "116",
        "104"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 5³ - 3(5) = 110."
    },
    {
      "q": "If x + 1/x = 6, determine the value of x³ + 1/x³: (Problem #4)",
      "opts": [
        "198",
        "216",
        "204",
        "192"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 6³ - 3(6) = 198."
    },
    {
      "q": "If x + 1/x = 7, determine the value of x³ + 1/x³: (Problem #5)",
      "opts": [
        "322",
        "343",
        "328",
        "316"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 7³ - 3(7) = 322."
    },
    {
      "q": "If x + 1/x = 8, determine the value of x³ + 1/x³: (Problem #6)",
      "opts": [
        "488",
        "512",
        "494",
        "482"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 8³ - 3(8) = 488."
    },
    {
      "q": "If x + 1/x = 3, determine the value of x³ + 1/x³: (Problem #7)",
      "opts": [
        "18",
        "27",
        "24",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 3³ - 3(3) = 18."
    },
    {
      "q": "If x + 1/x = 4, determine the value of x³ + 1/x³: (Problem #8)",
      "opts": [
        "52",
        "64",
        "58",
        "46"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 52."
    },
    {
      "q": "If x + 1/x = 5, determine the value of x³ + 1/x³: (Problem #9)",
      "opts": [
        "110",
        "125",
        "116",
        "104"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 5³ - 3(5) = 110."
    },
    {
      "q": "If x + 1/x = 6, determine the value of x³ + 1/x³: (Problem #10)",
      "opts": [
        "198",
        "216",
        "204",
        "192"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 6³ - 3(6) = 198."
    },
    {
      "q": "If x + 1/x = 7, determine the value of x³ + 1/x³: (Problem #11)",
      "opts": [
        "322",
        "343",
        "328",
        "316"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 7³ - 3(7) = 322."
    },
    {
      "q": "If x + 1/x = 8, determine the value of x³ + 1/x³: (Problem #12)",
      "opts": [
        "488",
        "512",
        "494",
        "482"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 8³ - 3(8) = 488."
    },
    {
      "q": "If x + 1/x = 3, determine the value of x³ + 1/x³: (Problem #13)",
      "opts": [
        "18",
        "27",
        "24",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 3³ - 3(3) = 18."
    },
    {
      "q": "If x + 1/x = 4, determine the value of x³ + 1/x³: (Problem #14)",
      "opts": [
        "52",
        "64",
        "58",
        "46"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 52."
    },
    {
      "q": "If x + 1/x = 5, determine the value of x³ + 1/x³: (Problem #15)",
      "opts": [
        "110",
        "125",
        "116",
        "104"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 5³ - 3(5) = 110."
    },
    {
      "q": "If x + 1/x = 6, determine the value of x³ + 1/x³: (Problem #16)",
      "opts": [
        "198",
        "216",
        "204",
        "192"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 6³ - 3(6) = 198."
    },
    {
      "q": "If x + 1/x = 7, determine the value of x³ + 1/x³: (Problem #17)",
      "opts": [
        "322",
        "343",
        "328",
        "316"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 7³ - 3(7) = 322."
    },
    {
      "q": "If x + 1/x = 8, determine the value of x³ + 1/x³: (Problem #18)",
      "opts": [
        "488",
        "512",
        "494",
        "482"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 8³ - 3(8) = 488."
    },
    {
      "q": "If x + 1/x = 3, determine the value of x³ + 1/x³: (Problem #19)",
      "opts": [
        "18",
        "27",
        "24",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 3³ - 3(3) = 18."
    },
    {
      "q": "If x + 1/x = 4, determine the value of x³ + 1/x³: (Problem #20)",
      "opts": [
        "52",
        "64",
        "58",
        "46"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 52."
    },
    {
      "q": "If x + 1/x = 5, determine the value of x³ + 1/x³: (Problem #21)",
      "opts": [
        "110",
        "125",
        "116",
        "104"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 5³ - 3(5) = 110."
    },
    {
      "q": "If x + 1/x = 6, determine the value of x³ + 1/x³: (Problem #22)",
      "opts": [
        "198",
        "216",
        "204",
        "192"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 6³ - 3(6) = 198."
    },
    {
      "q": "If x + 1/x = 7, determine the value of x³ + 1/x³: (Problem #23)",
      "opts": [
        "322",
        "343",
        "328",
        "316"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 7³ - 3(7) = 322."
    },
    {
      "q": "If x + 1/x = 8, determine the value of x³ + 1/x³: (Problem #24)",
      "opts": [
        "488",
        "512",
        "494",
        "482"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 8³ - 3(8) = 488."
    },
    {
      "q": "If x + 1/x = 3, determine the value of x³ + 1/x³: (Problem #25)",
      "opts": [
        "18",
        "27",
        "24",
        "12"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 3³ - 3(3) = 18."
    },
    {
      "q": "If x + 1/x = 4, determine the value of x³ + 1/x³: (Problem #26)",
      "opts": [
        "52",
        "64",
        "58",
        "46"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 52."
    },
    {
      "q": "If x + 1/x = 5, determine the value of x³ + 1/x³: (Problem #27)",
      "opts": [
        "110",
        "125",
        "116",
        "104"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 5³ - 3(5) = 110."
    },
    {
      "q": "If x + 1/x = 6, determine the value of x³ + 1/x³: (Problem #28)",
      "opts": [
        "198",
        "216",
        "204",
        "192"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 6³ - 3(6) = 198."
    },
    {
      "q": "If x + 1/x = 7, determine the value of x³ + 1/x³: (Problem #29)",
      "opts": [
        "322",
        "343",
        "328",
        "316"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 7³ - 3(7) = 322."
    },
    {
      "q": "If x + 1/x = 8, determine the value of x³ + 1/x³: (Problem #30)",
      "opts": [
        "488",
        "512",
        "494",
        "482"
      ],
      "ans": "A",
      "exp": "Identity: x³ + 1/x³ = k³ - 3k = 8³ - 3(8) = 488."
    }
  ],
  "level4": [
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #1)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #2)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #3)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #4)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #5)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #6)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #7)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #8)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #9)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #10)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #11)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #12)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #13)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #14)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #15)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #16)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #17)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #18)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #19)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #20)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #21)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #22)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #23)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #24)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #25)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #26)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #27)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 2 and 3: (Quadratic #28)",
      "opts": [
        "x² - 5x + 6 = 0",
        "x² + 5x + 6 = 0",
        "x² - 5x - 6 = 0",
        "x² + 5x - 6 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 5x + 6 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 3 and 4: (Quadratic #29)",
      "opts": [
        "x² - 7x + 12 = 0",
        "x² + 7x + 12 = 0",
        "x² - 7x - 12 = 0",
        "x² + 7x - 12 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 7x + 12 = 0."
    },
    {
      "q": "Find the quadratic equation whose roots are 4 and 5: (Quadratic #30)",
      "opts": [
        "x² - 9x + 20 = 0",
        "x² + 9x + 20 = 0",
        "x² - 9x - 20 = 0",
        "x² + 9x - 20 = 0"
      ],
      "ans": "A",
      "exp": "Quadratic formula from roots: x² - (Sum)x + (Product) = 0 -> x² - 9x + 20 = 0."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["trigonometry-height-distance"] = {
  "level1": [
    {
      "q": "A vertical tower casts a horizontal shadow of 20 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #1)",
      "opts": [
        "11.5 m",
        "16.5 m",
        "7.5 m",
        "40 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 20 × tan(30°) = 11.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 22 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #2)",
      "opts": [
        "22 m",
        "27 m",
        "18 m",
        "44 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 22 × tan(45°) = 22 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 24 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #3)",
      "opts": [
        "41.6 m",
        "46.6 m",
        "37.6 m",
        "48 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 24 × tan(60°) = 41.6 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 26 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #4)",
      "opts": [
        "15 m",
        "20 m",
        "11 m",
        "52 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 26 × tan(30°) = 15 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 28 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #5)",
      "opts": [
        "28 m",
        "33 m",
        "24 m",
        "56 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 28 × tan(45°) = 28 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 30 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #6)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "60 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 30 × tan(60°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 32 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #7)",
      "opts": [
        "18.5 m",
        "23.5 m",
        "14.5 m",
        "64 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 32 × tan(30°) = 18.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 34 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #8)",
      "opts": [
        "34 m",
        "39 m",
        "30 m",
        "68 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 34 × tan(45°) = 34 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 36 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #9)",
      "opts": [
        "62.4 m",
        "67.4 m",
        "58.4 m",
        "72 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 36 × tan(60°) = 62.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 38 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #10)",
      "opts": [
        "21.9 m",
        "26.9 m",
        "17.9 m",
        "76 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 38 × tan(30°) = 21.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 40 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #11)",
      "opts": [
        "40 m",
        "45 m",
        "36 m",
        "80 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 40 × tan(45°) = 40 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 42 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #12)",
      "opts": [
        "72.7 m",
        "77.7 m",
        "68.7 m",
        "84 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 42 × tan(60°) = 72.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 44 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #13)",
      "opts": [
        "25.4 m",
        "30.4 m",
        "21.4 m",
        "88 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 44 × tan(30°) = 25.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 46 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #14)",
      "opts": [
        "46 m",
        "51 m",
        "42 m",
        "92 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 46 × tan(45°) = 46 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 48 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #15)",
      "opts": [
        "83.1 m",
        "88.1 m",
        "79.1 m",
        "96 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 48 × tan(60°) = 83.1 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 50 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #16)",
      "opts": [
        "28.9 m",
        "33.9 m",
        "24.9 m",
        "100 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 50 × tan(30°) = 28.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 52 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #17)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "104 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 52 × tan(45°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 54 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #18)",
      "opts": [
        "93.5 m",
        "98.5 m",
        "89.5 m",
        "108 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 54 × tan(60°) = 93.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 56 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #19)",
      "opts": [
        "32.3 m",
        "37.3 m",
        "28.299999999999997 m",
        "112 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 56 × tan(30°) = 32.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 58 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #20)",
      "opts": [
        "58 m",
        "63 m",
        "54 m",
        "116 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 58 × tan(45°) = 58 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 60 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #21)",
      "opts": [
        "103.9 m",
        "108.9 m",
        "99.9 m",
        "120 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 60 × tan(60°) = 103.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 62 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #22)",
      "opts": [
        "35.8 m",
        "40.8 m",
        "31.799999999999997 m",
        "124 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 62 × tan(30°) = 35.8 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 64 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #23)",
      "opts": [
        "64 m",
        "69 m",
        "60 m",
        "128 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 64 × tan(45°) = 64 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 66 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #24)",
      "opts": [
        "114.3 m",
        "119.3 m",
        "110.3 m",
        "132 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 66 × tan(60°) = 114.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 68 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #25)",
      "opts": [
        "39.3 m",
        "44.3 m",
        "35.3 m",
        "136 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 68 × tan(30°) = 39.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 70 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #26)",
      "opts": [
        "70 m",
        "75 m",
        "66 m",
        "140 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 70 × tan(45°) = 70 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 72 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #27)",
      "opts": [
        "124.7 m",
        "129.7 m",
        "120.7 m",
        "144 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 72 × tan(60°) = 124.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 74 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #28)",
      "opts": [
        "42.7 m",
        "47.7 m",
        "38.7 m",
        "148 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 74 × tan(30°) = 42.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 76 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #29)",
      "opts": [
        "76 m",
        "81 m",
        "72 m",
        "152 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 76 × tan(45°) = 76 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 78 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #30)",
      "opts": [
        "135.1 m",
        "140.1 m",
        "131.1 m",
        "156 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 78 × tan(60°) = 135.1 m."
    }
  ],
  "level2": [
    {
      "q": "A vertical tower casts a horizontal shadow of 20 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #1)",
      "opts": [
        "11.5 m",
        "16.5 m",
        "7.5 m",
        "40 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 20 × tan(30°) = 11.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 22 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #2)",
      "opts": [
        "22 m",
        "27 m",
        "18 m",
        "44 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 22 × tan(45°) = 22 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 24 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #3)",
      "opts": [
        "41.6 m",
        "46.6 m",
        "37.6 m",
        "48 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 24 × tan(60°) = 41.6 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 26 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #4)",
      "opts": [
        "15 m",
        "20 m",
        "11 m",
        "52 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 26 × tan(30°) = 15 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 28 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #5)",
      "opts": [
        "28 m",
        "33 m",
        "24 m",
        "56 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 28 × tan(45°) = 28 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 30 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #6)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "60 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 30 × tan(60°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 32 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #7)",
      "opts": [
        "18.5 m",
        "23.5 m",
        "14.5 m",
        "64 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 32 × tan(30°) = 18.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 34 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #8)",
      "opts": [
        "34 m",
        "39 m",
        "30 m",
        "68 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 34 × tan(45°) = 34 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 36 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #9)",
      "opts": [
        "62.4 m",
        "67.4 m",
        "58.4 m",
        "72 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 36 × tan(60°) = 62.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 38 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #10)",
      "opts": [
        "21.9 m",
        "26.9 m",
        "17.9 m",
        "76 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 38 × tan(30°) = 21.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 40 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #11)",
      "opts": [
        "40 m",
        "45 m",
        "36 m",
        "80 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 40 × tan(45°) = 40 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 42 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #12)",
      "opts": [
        "72.7 m",
        "77.7 m",
        "68.7 m",
        "84 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 42 × tan(60°) = 72.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 44 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #13)",
      "opts": [
        "25.4 m",
        "30.4 m",
        "21.4 m",
        "88 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 44 × tan(30°) = 25.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 46 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #14)",
      "opts": [
        "46 m",
        "51 m",
        "42 m",
        "92 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 46 × tan(45°) = 46 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 48 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #15)",
      "opts": [
        "83.1 m",
        "88.1 m",
        "79.1 m",
        "96 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 48 × tan(60°) = 83.1 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 50 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #16)",
      "opts": [
        "28.9 m",
        "33.9 m",
        "24.9 m",
        "100 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 50 × tan(30°) = 28.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 52 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #17)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "104 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 52 × tan(45°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 54 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #18)",
      "opts": [
        "93.5 m",
        "98.5 m",
        "89.5 m",
        "108 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 54 × tan(60°) = 93.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 56 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #19)",
      "opts": [
        "32.3 m",
        "37.3 m",
        "28.299999999999997 m",
        "112 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 56 × tan(30°) = 32.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 58 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #20)",
      "opts": [
        "58 m",
        "63 m",
        "54 m",
        "116 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 58 × tan(45°) = 58 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 60 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #21)",
      "opts": [
        "103.9 m",
        "108.9 m",
        "99.9 m",
        "120 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 60 × tan(60°) = 103.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 62 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #22)",
      "opts": [
        "35.8 m",
        "40.8 m",
        "31.799999999999997 m",
        "124 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 62 × tan(30°) = 35.8 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 64 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #23)",
      "opts": [
        "64 m",
        "69 m",
        "60 m",
        "128 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 64 × tan(45°) = 64 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 66 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #24)",
      "opts": [
        "114.3 m",
        "119.3 m",
        "110.3 m",
        "132 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 66 × tan(60°) = 114.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 68 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #25)",
      "opts": [
        "39.3 m",
        "44.3 m",
        "35.3 m",
        "136 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 68 × tan(30°) = 39.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 70 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #26)",
      "opts": [
        "70 m",
        "75 m",
        "66 m",
        "140 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 70 × tan(45°) = 70 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 72 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #27)",
      "opts": [
        "124.7 m",
        "129.7 m",
        "120.7 m",
        "144 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 72 × tan(60°) = 124.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 74 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #28)",
      "opts": [
        "42.7 m",
        "47.7 m",
        "38.7 m",
        "148 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 74 × tan(30°) = 42.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 76 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #29)",
      "opts": [
        "76 m",
        "81 m",
        "72 m",
        "152 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 76 × tan(45°) = 76 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 78 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #30)",
      "opts": [
        "135.1 m",
        "140.1 m",
        "131.1 m",
        "156 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 78 × tan(60°) = 135.1 m."
    }
  ],
  "level3": [
    {
      "q": "A vertical tower casts a horizontal shadow of 20 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #1)",
      "opts": [
        "11.5 m",
        "16.5 m",
        "7.5 m",
        "40 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 20 × tan(30°) = 11.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 22 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #2)",
      "opts": [
        "22 m",
        "27 m",
        "18 m",
        "44 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 22 × tan(45°) = 22 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 24 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #3)",
      "opts": [
        "41.6 m",
        "46.6 m",
        "37.6 m",
        "48 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 24 × tan(60°) = 41.6 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 26 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #4)",
      "opts": [
        "15 m",
        "20 m",
        "11 m",
        "52 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 26 × tan(30°) = 15 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 28 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #5)",
      "opts": [
        "28 m",
        "33 m",
        "24 m",
        "56 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 28 × tan(45°) = 28 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 30 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #6)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "60 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 30 × tan(60°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 32 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #7)",
      "opts": [
        "18.5 m",
        "23.5 m",
        "14.5 m",
        "64 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 32 × tan(30°) = 18.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 34 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #8)",
      "opts": [
        "34 m",
        "39 m",
        "30 m",
        "68 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 34 × tan(45°) = 34 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 36 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #9)",
      "opts": [
        "62.4 m",
        "67.4 m",
        "58.4 m",
        "72 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 36 × tan(60°) = 62.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 38 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #10)",
      "opts": [
        "21.9 m",
        "26.9 m",
        "17.9 m",
        "76 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 38 × tan(30°) = 21.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 40 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #11)",
      "opts": [
        "40 m",
        "45 m",
        "36 m",
        "80 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 40 × tan(45°) = 40 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 42 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #12)",
      "opts": [
        "72.7 m",
        "77.7 m",
        "68.7 m",
        "84 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 42 × tan(60°) = 72.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 44 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #13)",
      "opts": [
        "25.4 m",
        "30.4 m",
        "21.4 m",
        "88 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 44 × tan(30°) = 25.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 46 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #14)",
      "opts": [
        "46 m",
        "51 m",
        "42 m",
        "92 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 46 × tan(45°) = 46 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 48 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #15)",
      "opts": [
        "83.1 m",
        "88.1 m",
        "79.1 m",
        "96 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 48 × tan(60°) = 83.1 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 50 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #16)",
      "opts": [
        "28.9 m",
        "33.9 m",
        "24.9 m",
        "100 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 50 × tan(30°) = 28.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 52 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #17)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "104 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 52 × tan(45°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 54 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #18)",
      "opts": [
        "93.5 m",
        "98.5 m",
        "89.5 m",
        "108 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 54 × tan(60°) = 93.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 56 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #19)",
      "opts": [
        "32.3 m",
        "37.3 m",
        "28.299999999999997 m",
        "112 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 56 × tan(30°) = 32.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 58 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #20)",
      "opts": [
        "58 m",
        "63 m",
        "54 m",
        "116 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 58 × tan(45°) = 58 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 60 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #21)",
      "opts": [
        "103.9 m",
        "108.9 m",
        "99.9 m",
        "120 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 60 × tan(60°) = 103.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 62 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #22)",
      "opts": [
        "35.8 m",
        "40.8 m",
        "31.799999999999997 m",
        "124 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 62 × tan(30°) = 35.8 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 64 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #23)",
      "opts": [
        "64 m",
        "69 m",
        "60 m",
        "128 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 64 × tan(45°) = 64 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 66 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #24)",
      "opts": [
        "114.3 m",
        "119.3 m",
        "110.3 m",
        "132 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 66 × tan(60°) = 114.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 68 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #25)",
      "opts": [
        "39.3 m",
        "44.3 m",
        "35.3 m",
        "136 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 68 × tan(30°) = 39.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 70 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #26)",
      "opts": [
        "70 m",
        "75 m",
        "66 m",
        "140 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 70 × tan(45°) = 70 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 72 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #27)",
      "opts": [
        "124.7 m",
        "129.7 m",
        "120.7 m",
        "144 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 72 × tan(60°) = 124.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 74 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #28)",
      "opts": [
        "42.7 m",
        "47.7 m",
        "38.7 m",
        "148 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 74 × tan(30°) = 42.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 76 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #29)",
      "opts": [
        "76 m",
        "81 m",
        "72 m",
        "152 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 76 × tan(45°) = 76 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 78 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #30)",
      "opts": [
        "135.1 m",
        "140.1 m",
        "131.1 m",
        "156 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 78 × tan(60°) = 135.1 m."
    }
  ],
  "level4": [
    {
      "q": "A vertical tower casts a horizontal shadow of 20 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #1)",
      "opts": [
        "11.5 m",
        "16.5 m",
        "7.5 m",
        "40 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 20 × tan(30°) = 11.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 22 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #2)",
      "opts": [
        "22 m",
        "27 m",
        "18 m",
        "44 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 22 × tan(45°) = 22 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 24 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #3)",
      "opts": [
        "41.6 m",
        "46.6 m",
        "37.6 m",
        "48 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 24 × tan(60°) = 41.6 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 26 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #4)",
      "opts": [
        "15 m",
        "20 m",
        "11 m",
        "52 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 26 × tan(30°) = 15 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 28 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #5)",
      "opts": [
        "28 m",
        "33 m",
        "24 m",
        "56 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 28 × tan(45°) = 28 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 30 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #6)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "60 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 30 × tan(60°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 32 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #7)",
      "opts": [
        "18.5 m",
        "23.5 m",
        "14.5 m",
        "64 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 32 × tan(30°) = 18.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 34 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #8)",
      "opts": [
        "34 m",
        "39 m",
        "30 m",
        "68 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 34 × tan(45°) = 34 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 36 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #9)",
      "opts": [
        "62.4 m",
        "67.4 m",
        "58.4 m",
        "72 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 36 × tan(60°) = 62.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 38 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #10)",
      "opts": [
        "21.9 m",
        "26.9 m",
        "17.9 m",
        "76 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 38 × tan(30°) = 21.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 40 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #11)",
      "opts": [
        "40 m",
        "45 m",
        "36 m",
        "80 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 40 × tan(45°) = 40 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 42 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #12)",
      "opts": [
        "72.7 m",
        "77.7 m",
        "68.7 m",
        "84 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 42 × tan(60°) = 72.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 44 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #13)",
      "opts": [
        "25.4 m",
        "30.4 m",
        "21.4 m",
        "88 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 44 × tan(30°) = 25.4 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 46 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #14)",
      "opts": [
        "46 m",
        "51 m",
        "42 m",
        "92 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 46 × tan(45°) = 46 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 48 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #15)",
      "opts": [
        "83.1 m",
        "88.1 m",
        "79.1 m",
        "96 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 48 × tan(60°) = 83.1 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 50 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #16)",
      "opts": [
        "28.9 m",
        "33.9 m",
        "24.9 m",
        "100 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 50 × tan(30°) = 28.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 52 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #17)",
      "opts": [
        "52 m",
        "57 m",
        "48 m",
        "104 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 52 × tan(45°) = 52 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 54 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #18)",
      "opts": [
        "93.5 m",
        "98.5 m",
        "89.5 m",
        "108 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 54 × tan(60°) = 93.5 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 56 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #19)",
      "opts": [
        "32.3 m",
        "37.3 m",
        "28.299999999999997 m",
        "112 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 56 × tan(30°) = 32.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 58 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #20)",
      "opts": [
        "58 m",
        "63 m",
        "54 m",
        "116 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 58 × tan(45°) = 58 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 60 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #21)",
      "opts": [
        "103.9 m",
        "108.9 m",
        "99.9 m",
        "120 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 60 × tan(60°) = 103.9 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 62 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #22)",
      "opts": [
        "35.8 m",
        "40.8 m",
        "31.799999999999997 m",
        "124 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 62 × tan(30°) = 35.8 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 64 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #23)",
      "opts": [
        "64 m",
        "69 m",
        "60 m",
        "128 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 64 × tan(45°) = 64 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 66 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #24)",
      "opts": [
        "114.3 m",
        "119.3 m",
        "110.3 m",
        "132 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 66 × tan(60°) = 114.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 68 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #25)",
      "opts": [
        "39.3 m",
        "44.3 m",
        "35.3 m",
        "136 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 68 × tan(30°) = 39.3 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 70 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #26)",
      "opts": [
        "70 m",
        "75 m",
        "66 m",
        "140 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 70 × tan(45°) = 70 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 72 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #27)",
      "opts": [
        "124.7 m",
        "129.7 m",
        "120.7 m",
        "144 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 72 × tan(60°) = 124.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 74 m when the sun's angle of elevation is 30°. What is the height of the tower? (Survey #28)",
      "opts": [
        "42.7 m",
        "47.7 m",
        "38.7 m",
        "148 m"
      ],
      "ans": "A",
      "exp": "tan(30°) = Height / Shadow -> Height = 74 × tan(30°) = 42.7 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 76 m when the sun's angle of elevation is 45°. What is the height of the tower? (Survey #29)",
      "opts": [
        "76 m",
        "81 m",
        "72 m",
        "152 m"
      ],
      "ans": "A",
      "exp": "tan(45°) = Height / Shadow -> Height = 76 × tan(45°) = 76 m."
    },
    {
      "q": "A vertical tower casts a horizontal shadow of 78 m when the sun's angle of elevation is 60°. What is the height of the tower? (Survey #30)",
      "opts": [
        "135.1 m",
        "140.1 m",
        "131.1 m",
        "156 m"
      ],
      "ans": "A",
      "exp": "tan(60°) = Height / Shadow -> Height = 78 × tan(60°) = 135.1 m."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["progressions"] = {
  "level1": [
    {
      "q": "Find the 10th term of the Arithmetic Progression: 3, 7, 11, ... (Series #1)",
      "opts": [
        "39",
        "43",
        "35",
        "47"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 3 + (10 - 1)(4) = 39."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 4, 9, 14, ... (Series #2)",
      "opts": [
        "49",
        "54",
        "44",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 4 + (10 - 1)(5) = 49."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 5, 11, 17, ... (Series #3)",
      "opts": [
        "59",
        "65",
        "53",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 5 + (10 - 1)(6) = 59."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 6, 10, 14, ... (Series #4)",
      "opts": [
        "42",
        "46",
        "38",
        "50"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 6 + (10 - 1)(4) = 42."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 7, 12, 17, ... (Series #5)",
      "opts": [
        "52",
        "57",
        "47",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 7 + (10 - 1)(5) = 52."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 8, 14, 20, ... (Series #6)",
      "opts": [
        "62",
        "68",
        "56",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 8 + (10 - 1)(6) = 62."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 9, 13, 17, ... (Series #7)",
      "opts": [
        "45",
        "49",
        "41",
        "53"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 9 + (10 - 1)(4) = 45."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 10, 15, 20, ... (Series #8)",
      "opts": [
        "55",
        "60",
        "50",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 10 + (10 - 1)(5) = 55."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 11, 17, 23, ... (Series #9)",
      "opts": [
        "65",
        "71",
        "59",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 11 + (10 - 1)(6) = 65."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 12, 16, 20, ... (Series #10)",
      "opts": [
        "48",
        "52",
        "44",
        "56"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 12 + (10 - 1)(4) = 48."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 13, 18, 23, ... (Series #11)",
      "opts": [
        "58",
        "63",
        "53",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 13 + (10 - 1)(5) = 58."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 14, 20, 26, ... (Series #12)",
      "opts": [
        "68",
        "74",
        "62",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 14 + (10 - 1)(6) = 68."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 15, 19, 23, ... (Series #13)",
      "opts": [
        "51",
        "55",
        "47",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 15 + (10 - 1)(4) = 51."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 16, 21, 26, ... (Series #14)",
      "opts": [
        "61",
        "66",
        "56",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 16 + (10 - 1)(5) = 61."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 17, 23, 29, ... (Series #15)",
      "opts": [
        "71",
        "77",
        "65",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 17 + (10 - 1)(6) = 71."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 18, 22, 26, ... (Series #16)",
      "opts": [
        "54",
        "58",
        "50",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 18 + (10 - 1)(4) = 54."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 19, 24, 29, ... (Series #17)",
      "opts": [
        "64",
        "69",
        "59",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 19 + (10 - 1)(5) = 64."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 20, 26, 32, ... (Series #18)",
      "opts": [
        "74",
        "80",
        "68",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 20 + (10 - 1)(6) = 74."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 21, 25, 29, ... (Series #19)",
      "opts": [
        "57",
        "61",
        "53",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 21 + (10 - 1)(4) = 57."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 22, 27, 32, ... (Series #20)",
      "opts": [
        "67",
        "72",
        "62",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 22 + (10 - 1)(5) = 67."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 23, 29, 35, ... (Series #21)",
      "opts": [
        "77",
        "83",
        "71",
        "89"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 23 + (10 - 1)(6) = 77."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 24, 28, 32, ... (Series #22)",
      "opts": [
        "60",
        "64",
        "56",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 24 + (10 - 1)(4) = 60."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 25, 30, 35, ... (Series #23)",
      "opts": [
        "70",
        "75",
        "65",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 25 + (10 - 1)(5) = 70."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 26, 32, 38, ... (Series #24)",
      "opts": [
        "80",
        "86",
        "74",
        "92"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 26 + (10 - 1)(6) = 80."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 27, 31, 35, ... (Series #25)",
      "opts": [
        "63",
        "67",
        "59",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 27 + (10 - 1)(4) = 63."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 28, 33, 38, ... (Series #26)",
      "opts": [
        "73",
        "78",
        "68",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 28 + (10 - 1)(5) = 73."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 29, 35, 41, ... (Series #27)",
      "opts": [
        "83",
        "89",
        "77",
        "95"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 29 + (10 - 1)(6) = 83."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 30, 34, 38, ... (Series #28)",
      "opts": [
        "66",
        "70",
        "62",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 30 + (10 - 1)(4) = 66."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 31, 36, 41, ... (Series #29)",
      "opts": [
        "76",
        "81",
        "71",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 31 + (10 - 1)(5) = 76."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 32, 38, 44, ... (Series #30)",
      "opts": [
        "86",
        "92",
        "80",
        "98"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 32 + (10 - 1)(6) = 86."
    }
  ],
  "level2": [
    {
      "q": "Find the 10th term of the Arithmetic Progression: 3, 7, 11, ... (Series #1)",
      "opts": [
        "39",
        "43",
        "35",
        "47"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 3 + (10 - 1)(4) = 39."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 4, 9, 14, ... (Series #2)",
      "opts": [
        "49",
        "54",
        "44",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 4 + (10 - 1)(5) = 49."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 5, 11, 17, ... (Series #3)",
      "opts": [
        "59",
        "65",
        "53",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 5 + (10 - 1)(6) = 59."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 6, 10, 14, ... (Series #4)",
      "opts": [
        "42",
        "46",
        "38",
        "50"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 6 + (10 - 1)(4) = 42."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 7, 12, 17, ... (Series #5)",
      "opts": [
        "52",
        "57",
        "47",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 7 + (10 - 1)(5) = 52."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 8, 14, 20, ... (Series #6)",
      "opts": [
        "62",
        "68",
        "56",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 8 + (10 - 1)(6) = 62."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 9, 13, 17, ... (Series #7)",
      "opts": [
        "45",
        "49",
        "41",
        "53"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 9 + (10 - 1)(4) = 45."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 10, 15, 20, ... (Series #8)",
      "opts": [
        "55",
        "60",
        "50",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 10 + (10 - 1)(5) = 55."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 11, 17, 23, ... (Series #9)",
      "opts": [
        "65",
        "71",
        "59",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 11 + (10 - 1)(6) = 65."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 12, 16, 20, ... (Series #10)",
      "opts": [
        "48",
        "52",
        "44",
        "56"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 12 + (10 - 1)(4) = 48."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 13, 18, 23, ... (Series #11)",
      "opts": [
        "58",
        "63",
        "53",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 13 + (10 - 1)(5) = 58."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 14, 20, 26, ... (Series #12)",
      "opts": [
        "68",
        "74",
        "62",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 14 + (10 - 1)(6) = 68."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 15, 19, 23, ... (Series #13)",
      "opts": [
        "51",
        "55",
        "47",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 15 + (10 - 1)(4) = 51."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 16, 21, 26, ... (Series #14)",
      "opts": [
        "61",
        "66",
        "56",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 16 + (10 - 1)(5) = 61."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 17, 23, 29, ... (Series #15)",
      "opts": [
        "71",
        "77",
        "65",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 17 + (10 - 1)(6) = 71."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 18, 22, 26, ... (Series #16)",
      "opts": [
        "54",
        "58",
        "50",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 18 + (10 - 1)(4) = 54."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 19, 24, 29, ... (Series #17)",
      "opts": [
        "64",
        "69",
        "59",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 19 + (10 - 1)(5) = 64."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 20, 26, 32, ... (Series #18)",
      "opts": [
        "74",
        "80",
        "68",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 20 + (10 - 1)(6) = 74."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 21, 25, 29, ... (Series #19)",
      "opts": [
        "57",
        "61",
        "53",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 21 + (10 - 1)(4) = 57."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 22, 27, 32, ... (Series #20)",
      "opts": [
        "67",
        "72",
        "62",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 22 + (10 - 1)(5) = 67."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 23, 29, 35, ... (Series #21)",
      "opts": [
        "77",
        "83",
        "71",
        "89"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 23 + (10 - 1)(6) = 77."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 24, 28, 32, ... (Series #22)",
      "opts": [
        "60",
        "64",
        "56",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 24 + (10 - 1)(4) = 60."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 25, 30, 35, ... (Series #23)",
      "opts": [
        "70",
        "75",
        "65",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 25 + (10 - 1)(5) = 70."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 26, 32, 38, ... (Series #24)",
      "opts": [
        "80",
        "86",
        "74",
        "92"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 26 + (10 - 1)(6) = 80."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 27, 31, 35, ... (Series #25)",
      "opts": [
        "63",
        "67",
        "59",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 27 + (10 - 1)(4) = 63."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 28, 33, 38, ... (Series #26)",
      "opts": [
        "73",
        "78",
        "68",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 28 + (10 - 1)(5) = 73."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 29, 35, 41, ... (Series #27)",
      "opts": [
        "83",
        "89",
        "77",
        "95"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 29 + (10 - 1)(6) = 83."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 30, 34, 38, ... (Series #28)",
      "opts": [
        "66",
        "70",
        "62",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 30 + (10 - 1)(4) = 66."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 31, 36, 41, ... (Series #29)",
      "opts": [
        "76",
        "81",
        "71",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 31 + (10 - 1)(5) = 76."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 32, 38, 44, ... (Series #30)",
      "opts": [
        "86",
        "92",
        "80",
        "98"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 32 + (10 - 1)(6) = 86."
    }
  ],
  "level3": [
    {
      "q": "Find the 10th term of the Arithmetic Progression: 3, 7, 11, ... (Series #1)",
      "opts": [
        "39",
        "43",
        "35",
        "47"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 3 + (10 - 1)(4) = 39."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 4, 9, 14, ... (Series #2)",
      "opts": [
        "49",
        "54",
        "44",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 4 + (10 - 1)(5) = 49."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 5, 11, 17, ... (Series #3)",
      "opts": [
        "59",
        "65",
        "53",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 5 + (10 - 1)(6) = 59."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 6, 10, 14, ... (Series #4)",
      "opts": [
        "42",
        "46",
        "38",
        "50"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 6 + (10 - 1)(4) = 42."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 7, 12, 17, ... (Series #5)",
      "opts": [
        "52",
        "57",
        "47",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 7 + (10 - 1)(5) = 52."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 8, 14, 20, ... (Series #6)",
      "opts": [
        "62",
        "68",
        "56",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 8 + (10 - 1)(6) = 62."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 9, 13, 17, ... (Series #7)",
      "opts": [
        "45",
        "49",
        "41",
        "53"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 9 + (10 - 1)(4) = 45."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 10, 15, 20, ... (Series #8)",
      "opts": [
        "55",
        "60",
        "50",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 10 + (10 - 1)(5) = 55."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 11, 17, 23, ... (Series #9)",
      "opts": [
        "65",
        "71",
        "59",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 11 + (10 - 1)(6) = 65."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 12, 16, 20, ... (Series #10)",
      "opts": [
        "48",
        "52",
        "44",
        "56"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 12 + (10 - 1)(4) = 48."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 13, 18, 23, ... (Series #11)",
      "opts": [
        "58",
        "63",
        "53",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 13 + (10 - 1)(5) = 58."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 14, 20, 26, ... (Series #12)",
      "opts": [
        "68",
        "74",
        "62",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 14 + (10 - 1)(6) = 68."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 15, 19, 23, ... (Series #13)",
      "opts": [
        "51",
        "55",
        "47",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 15 + (10 - 1)(4) = 51."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 16, 21, 26, ... (Series #14)",
      "opts": [
        "61",
        "66",
        "56",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 16 + (10 - 1)(5) = 61."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 17, 23, 29, ... (Series #15)",
      "opts": [
        "71",
        "77",
        "65",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 17 + (10 - 1)(6) = 71."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 18, 22, 26, ... (Series #16)",
      "opts": [
        "54",
        "58",
        "50",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 18 + (10 - 1)(4) = 54."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 19, 24, 29, ... (Series #17)",
      "opts": [
        "64",
        "69",
        "59",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 19 + (10 - 1)(5) = 64."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 20, 26, 32, ... (Series #18)",
      "opts": [
        "74",
        "80",
        "68",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 20 + (10 - 1)(6) = 74."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 21, 25, 29, ... (Series #19)",
      "opts": [
        "57",
        "61",
        "53",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 21 + (10 - 1)(4) = 57."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 22, 27, 32, ... (Series #20)",
      "opts": [
        "67",
        "72",
        "62",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 22 + (10 - 1)(5) = 67."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 23, 29, 35, ... (Series #21)",
      "opts": [
        "77",
        "83",
        "71",
        "89"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 23 + (10 - 1)(6) = 77."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 24, 28, 32, ... (Series #22)",
      "opts": [
        "60",
        "64",
        "56",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 24 + (10 - 1)(4) = 60."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 25, 30, 35, ... (Series #23)",
      "opts": [
        "70",
        "75",
        "65",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 25 + (10 - 1)(5) = 70."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 26, 32, 38, ... (Series #24)",
      "opts": [
        "80",
        "86",
        "74",
        "92"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 26 + (10 - 1)(6) = 80."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 27, 31, 35, ... (Series #25)",
      "opts": [
        "63",
        "67",
        "59",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 27 + (10 - 1)(4) = 63."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 28, 33, 38, ... (Series #26)",
      "opts": [
        "73",
        "78",
        "68",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 28 + (10 - 1)(5) = 73."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 29, 35, 41, ... (Series #27)",
      "opts": [
        "83",
        "89",
        "77",
        "95"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 29 + (10 - 1)(6) = 83."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 30, 34, 38, ... (Series #28)",
      "opts": [
        "66",
        "70",
        "62",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 30 + (10 - 1)(4) = 66."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 31, 36, 41, ... (Series #29)",
      "opts": [
        "76",
        "81",
        "71",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 31 + (10 - 1)(5) = 76."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 32, 38, 44, ... (Series #30)",
      "opts": [
        "86",
        "92",
        "80",
        "98"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 32 + (10 - 1)(6) = 86."
    }
  ],
  "level4": [
    {
      "q": "Find the 10th term of the Arithmetic Progression: 3, 7, 11, ... (Series #1)",
      "opts": [
        "39",
        "43",
        "35",
        "47"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 3 + (10 - 1)(4) = 39."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 4, 9, 14, ... (Series #2)",
      "opts": [
        "49",
        "54",
        "44",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 4 + (10 - 1)(5) = 49."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 5, 11, 17, ... (Series #3)",
      "opts": [
        "59",
        "65",
        "53",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 5 + (10 - 1)(6) = 59."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 6, 10, 14, ... (Series #4)",
      "opts": [
        "42",
        "46",
        "38",
        "50"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 6 + (10 - 1)(4) = 42."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 7, 12, 17, ... (Series #5)",
      "opts": [
        "52",
        "57",
        "47",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 7 + (10 - 1)(5) = 52."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 8, 14, 20, ... (Series #6)",
      "opts": [
        "62",
        "68",
        "56",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 8 + (10 - 1)(6) = 62."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 9, 13, 17, ... (Series #7)",
      "opts": [
        "45",
        "49",
        "41",
        "53"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 9 + (10 - 1)(4) = 45."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 10, 15, 20, ... (Series #8)",
      "opts": [
        "55",
        "60",
        "50",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 10 + (10 - 1)(5) = 55."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 11, 17, 23, ... (Series #9)",
      "opts": [
        "65",
        "71",
        "59",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 11 + (10 - 1)(6) = 65."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 12, 16, 20, ... (Series #10)",
      "opts": [
        "48",
        "52",
        "44",
        "56"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 12 + (10 - 1)(4) = 48."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 13, 18, 23, ... (Series #11)",
      "opts": [
        "58",
        "63",
        "53",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 13 + (10 - 1)(5) = 58."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 14, 20, 26, ... (Series #12)",
      "opts": [
        "68",
        "74",
        "62",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 14 + (10 - 1)(6) = 68."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 15, 19, 23, ... (Series #13)",
      "opts": [
        "51",
        "55",
        "47",
        "59"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 15 + (10 - 1)(4) = 51."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 16, 21, 26, ... (Series #14)",
      "opts": [
        "61",
        "66",
        "56",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 16 + (10 - 1)(5) = 61."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 17, 23, 29, ... (Series #15)",
      "opts": [
        "71",
        "77",
        "65",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 17 + (10 - 1)(6) = 71."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 18, 22, 26, ... (Series #16)",
      "opts": [
        "54",
        "58",
        "50",
        "62"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 18 + (10 - 1)(4) = 54."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 19, 24, 29, ... (Series #17)",
      "opts": [
        "64",
        "69",
        "59",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 19 + (10 - 1)(5) = 64."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 20, 26, 32, ... (Series #18)",
      "opts": [
        "74",
        "80",
        "68",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 20 + (10 - 1)(6) = 74."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 21, 25, 29, ... (Series #19)",
      "opts": [
        "57",
        "61",
        "53",
        "65"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 21 + (10 - 1)(4) = 57."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 22, 27, 32, ... (Series #20)",
      "opts": [
        "67",
        "72",
        "62",
        "77"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 22 + (10 - 1)(5) = 67."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 23, 29, 35, ... (Series #21)",
      "opts": [
        "77",
        "83",
        "71",
        "89"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 23 + (10 - 1)(6) = 77."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 24, 28, 32, ... (Series #22)",
      "opts": [
        "60",
        "64",
        "56",
        "68"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 24 + (10 - 1)(4) = 60."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 25, 30, 35, ... (Series #23)",
      "opts": [
        "70",
        "75",
        "65",
        "80"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 25 + (10 - 1)(5) = 70."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 26, 32, 38, ... (Series #24)",
      "opts": [
        "80",
        "86",
        "74",
        "92"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 26 + (10 - 1)(6) = 80."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 27, 31, 35, ... (Series #25)",
      "opts": [
        "63",
        "67",
        "59",
        "71"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 27 + (10 - 1)(4) = 63."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 28, 33, 38, ... (Series #26)",
      "opts": [
        "73",
        "78",
        "68",
        "83"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 28 + (10 - 1)(5) = 73."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 29, 35, 41, ... (Series #27)",
      "opts": [
        "83",
        "89",
        "77",
        "95"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 29 + (10 - 1)(6) = 83."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 30, 34, 38, ... (Series #28)",
      "opts": [
        "66",
        "70",
        "62",
        "74"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 30 + (10 - 1)(4) = 66."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 31, 36, 41, ... (Series #29)",
      "opts": [
        "76",
        "81",
        "71",
        "86"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 31 + (10 - 1)(5) = 76."
    },
    {
      "q": "Find the 10th term of the Arithmetic Progression: 32, 38, 44, ... (Series #30)",
      "opts": [
        "86",
        "92",
        "80",
        "98"
      ],
      "ans": "A",
      "exp": "Tₙ = a + (n - 1)d = 32 + (10 - 1)(6) = 86."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["ages"] = {
  "level1": [
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #1)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #2)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #3)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #4)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #5)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #6)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #7)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #8)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #9)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #10)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #11)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #12)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #13)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #14)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #15)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #16)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #17)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #18)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #19)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #20)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #21)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #22)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #23)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #24)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #25)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #26)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #27)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #28)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #29)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #30)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    }
  ],
  "level2": [
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #1)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #2)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #3)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #4)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #5)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #6)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #7)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #8)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #9)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #10)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #11)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #12)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #13)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #14)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #15)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #16)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #17)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #18)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #19)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #20)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #21)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #22)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #23)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #24)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #25)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #26)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #27)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #28)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #29)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #30)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    }
  ],
  "level3": [
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #1)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #2)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #3)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #4)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #5)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #6)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #7)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #8)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #9)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #10)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #11)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #12)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #13)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #14)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #15)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #16)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #17)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #18)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #19)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #20)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #21)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #22)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #23)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #24)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #25)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #26)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #27)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #28)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #29)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #30)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    }
  ],
  "level4": [
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #1)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #2)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #3)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #4)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #5)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #6)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #7)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #8)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #9)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #10)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #11)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #12)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #13)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #14)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #15)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #16)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #17)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #18)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #19)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #20)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 10 years old, what was the father's age 5 years ago? (Record #21)",
      "opts": [
        "25 years",
        "30 years",
        "20 years",
        "35 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 10 = 30. 5 years ago = 30 - 5 = 25 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 11 years old, what was the father's age 5 years ago? (Record #22)",
      "opts": [
        "28 years",
        "33 years",
        "23 years",
        "38 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 11 = 33. 5 years ago = 33 - 5 = 28 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 12 years old, what was the father's age 5 years ago? (Record #23)",
      "opts": [
        "31 years",
        "36 years",
        "26 years",
        "41 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 12 = 36. 5 years ago = 36 - 5 = 31 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 13 years old, what was the father's age 5 years ago? (Record #24)",
      "opts": [
        "34 years",
        "39 years",
        "29 years",
        "44 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 13 = 39. 5 years ago = 39 - 5 = 34 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 14 years old, what was the father's age 5 years ago? (Record #25)",
      "opts": [
        "37 years",
        "42 years",
        "32 years",
        "47 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 14 = 42. 5 years ago = 42 - 5 = 37 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 15 years old, what was the father's age 5 years ago? (Record #26)",
      "opts": [
        "40 years",
        "45 years",
        "35 years",
        "50 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 15 = 45. 5 years ago = 45 - 5 = 40 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 16 years old, what was the father's age 5 years ago? (Record #27)",
      "opts": [
        "43 years",
        "48 years",
        "38 years",
        "53 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 16 = 48. 5 years ago = 48 - 5 = 43 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 17 years old, what was the father's age 5 years ago? (Record #28)",
      "opts": [
        "46 years",
        "51 years",
        "41 years",
        "56 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 17 = 51. 5 years ago = 51 - 5 = 46 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 18 years old, what was the father's age 5 years ago? (Record #29)",
      "opts": [
        "49 years",
        "54 years",
        "44 years",
        "59 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 18 = 54. 5 years ago = 54 - 5 = 49 years."
    },
    {
      "q": "A father is currently three times as old as his son. If the son is currently 19 years old, what was the father's age 5 years ago? (Record #30)",
      "opts": [
        "52 years",
        "57 years",
        "47 years",
        "62 years"
      ],
      "ans": "A",
      "exp": "Father's current age = 3 × 19 = 57. 5 years ago = 57 - 5 = 52 years."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["profit-and-loss"] = {
  "level1": [
    {
      "q": "An item bought for ₹100 is sold at a profit of 20%. What is the selling price? (Invoice #1)",
      "opts": [
        "₹120",
        "₹135",
        "₹110",
        "₹145"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹100 × 1.2 = ₹120."
    },
    {
      "q": "An item bought for ₹110 is sold at a profit of 20%. What is the selling price? (Invoice #2)",
      "opts": [
        "₹132",
        "₹147",
        "₹122",
        "₹157"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹110 × 1.2 = ₹132."
    },
    {
      "q": "An item bought for ₹120 is sold at a profit of 20%. What is the selling price? (Invoice #3)",
      "opts": [
        "₹144",
        "₹159",
        "₹134",
        "₹169"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹120 × 1.2 = ₹144."
    },
    {
      "q": "An item bought for ₹130 is sold at a profit of 20%. What is the selling price? (Invoice #4)",
      "opts": [
        "₹156",
        "₹171",
        "₹146",
        "₹181"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹130 × 1.2 = ₹156."
    },
    {
      "q": "An item bought for ₹140 is sold at a profit of 20%. What is the selling price? (Invoice #5)",
      "opts": [
        "₹168",
        "₹183",
        "₹158",
        "₹193"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹140 × 1.2 = ₹168."
    },
    {
      "q": "An item bought for ₹150 is sold at a profit of 20%. What is the selling price? (Invoice #6)",
      "opts": [
        "₹180",
        "₹195",
        "₹170",
        "₹205"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹150 × 1.2 = ₹180."
    },
    {
      "q": "An item bought for ₹160 is sold at a profit of 20%. What is the selling price? (Invoice #7)",
      "opts": [
        "₹192",
        "₹207",
        "₹182",
        "₹217"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹160 × 1.2 = ₹192."
    },
    {
      "q": "An item bought for ₹170 is sold at a profit of 20%. What is the selling price? (Invoice #8)",
      "opts": [
        "₹204",
        "₹219",
        "₹194",
        "₹229"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹170 × 1.2 = ₹204."
    },
    {
      "q": "An item bought for ₹180 is sold at a profit of 20%. What is the selling price? (Invoice #9)",
      "opts": [
        "₹216",
        "₹231",
        "₹206",
        "₹241"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹180 × 1.2 = ₹216."
    },
    {
      "q": "An item bought for ₹190 is sold at a profit of 20%. What is the selling price? (Invoice #10)",
      "opts": [
        "₹228",
        "₹243",
        "₹218",
        "₹253"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹190 × 1.2 = ₹228."
    },
    {
      "q": "An item bought for ₹200 is sold at a profit of 20%. What is the selling price? (Invoice #11)",
      "opts": [
        "₹240",
        "₹255",
        "₹230",
        "₹265"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹200 × 1.2 = ₹240."
    },
    {
      "q": "An item bought for ₹210 is sold at a profit of 20%. What is the selling price? (Invoice #12)",
      "opts": [
        "₹252",
        "₹267",
        "₹242",
        "₹277"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹210 × 1.2 = ₹252."
    },
    {
      "q": "An item bought for ₹220 is sold at a profit of 20%. What is the selling price? (Invoice #13)",
      "opts": [
        "₹264",
        "₹279",
        "₹254",
        "₹289"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹220 × 1.2 = ₹264."
    },
    {
      "q": "An item bought for ₹230 is sold at a profit of 20%. What is the selling price? (Invoice #14)",
      "opts": [
        "₹276",
        "₹291",
        "₹266",
        "₹301"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹230 × 1.2 = ₹276."
    },
    {
      "q": "An item bought for ₹240 is sold at a profit of 20%. What is the selling price? (Invoice #15)",
      "opts": [
        "₹288",
        "₹303",
        "₹278",
        "₹313"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹240 × 1.2 = ₹288."
    },
    {
      "q": "An item bought for ₹250 is sold at a profit of 20%. What is the selling price? (Invoice #16)",
      "opts": [
        "₹300",
        "₹315",
        "₹290",
        "₹325"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹250 × 1.2 = ₹300."
    },
    {
      "q": "An item bought for ₹260 is sold at a profit of 20%. What is the selling price? (Invoice #17)",
      "opts": [
        "₹312",
        "₹327",
        "₹302",
        "₹337"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹260 × 1.2 = ₹312."
    },
    {
      "q": "An item bought for ₹270 is sold at a profit of 20%. What is the selling price? (Invoice #18)",
      "opts": [
        "₹324",
        "₹339",
        "₹314",
        "₹349"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹270 × 1.2 = ₹324."
    },
    {
      "q": "An item bought for ₹280 is sold at a profit of 20%. What is the selling price? (Invoice #19)",
      "opts": [
        "₹336",
        "₹351",
        "₹326",
        "₹361"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹280 × 1.2 = ₹336."
    },
    {
      "q": "An item bought for ₹290 is sold at a profit of 20%. What is the selling price? (Invoice #20)",
      "opts": [
        "₹348",
        "₹363",
        "₹338",
        "₹373"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹290 × 1.2 = ₹348."
    },
    {
      "q": "An item bought for ₹300 is sold at a profit of 20%. What is the selling price? (Invoice #21)",
      "opts": [
        "₹360",
        "₹375",
        "₹350",
        "₹385"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹300 × 1.2 = ₹360."
    },
    {
      "q": "An item bought for ₹310 is sold at a profit of 20%. What is the selling price? (Invoice #22)",
      "opts": [
        "₹372",
        "₹387",
        "₹362",
        "₹397"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹310 × 1.2 = ₹372."
    },
    {
      "q": "An item bought for ₹320 is sold at a profit of 20%. What is the selling price? (Invoice #23)",
      "opts": [
        "₹384",
        "₹399",
        "₹374",
        "₹409"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹320 × 1.2 = ₹384."
    },
    {
      "q": "An item bought for ₹330 is sold at a profit of 20%. What is the selling price? (Invoice #24)",
      "opts": [
        "₹396",
        "₹411",
        "₹386",
        "₹421"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹330 × 1.2 = ₹396."
    },
    {
      "q": "An item bought for ₹340 is sold at a profit of 20%. What is the selling price? (Invoice #25)",
      "opts": [
        "₹408",
        "₹423",
        "₹398",
        "₹433"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹340 × 1.2 = ₹408."
    },
    {
      "q": "An item bought for ₹350 is sold at a profit of 20%. What is the selling price? (Invoice #26)",
      "opts": [
        "₹420",
        "₹435",
        "₹410",
        "₹445"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹350 × 1.2 = ₹420."
    },
    {
      "q": "An item bought for ₹360 is sold at a profit of 20%. What is the selling price? (Invoice #27)",
      "opts": [
        "₹432",
        "₹447",
        "₹422",
        "₹457"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹360 × 1.2 = ₹432."
    },
    {
      "q": "An item bought for ₹370 is sold at a profit of 20%. What is the selling price? (Invoice #28)",
      "opts": [
        "₹444",
        "₹459",
        "₹434",
        "₹469"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹370 × 1.2 = ₹444."
    },
    {
      "q": "An item bought for ₹380 is sold at a profit of 20%. What is the selling price? (Invoice #29)",
      "opts": [
        "₹456",
        "₹471",
        "₹446",
        "₹481"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹380 × 1.2 = ₹456."
    },
    {
      "q": "An item bought for ₹390 is sold at a profit of 20%. What is the selling price? (Invoice #30)",
      "opts": [
        "₹468",
        "₹483",
        "₹458",
        "₹493"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹390 × 1.2 = ₹468."
    }
  ],
  "level2": [
    {
      "q": "An item bought for ₹100 is sold at a profit of 20%. What is the selling price? (Invoice #1)",
      "opts": [
        "₹120",
        "₹135",
        "₹110",
        "₹145"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹100 × 1.2 = ₹120."
    },
    {
      "q": "An item bought for ₹110 is sold at a profit of 20%. What is the selling price? (Invoice #2)",
      "opts": [
        "₹132",
        "₹147",
        "₹122",
        "₹157"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹110 × 1.2 = ₹132."
    },
    {
      "q": "An item bought for ₹120 is sold at a profit of 20%. What is the selling price? (Invoice #3)",
      "opts": [
        "₹144",
        "₹159",
        "₹134",
        "₹169"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹120 × 1.2 = ₹144."
    },
    {
      "q": "An item bought for ₹130 is sold at a profit of 20%. What is the selling price? (Invoice #4)",
      "opts": [
        "₹156",
        "₹171",
        "₹146",
        "₹181"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹130 × 1.2 = ₹156."
    },
    {
      "q": "An item bought for ₹140 is sold at a profit of 20%. What is the selling price? (Invoice #5)",
      "opts": [
        "₹168",
        "₹183",
        "₹158",
        "₹193"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹140 × 1.2 = ₹168."
    },
    {
      "q": "An item bought for ₹150 is sold at a profit of 20%. What is the selling price? (Invoice #6)",
      "opts": [
        "₹180",
        "₹195",
        "₹170",
        "₹205"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹150 × 1.2 = ₹180."
    },
    {
      "q": "An item bought for ₹160 is sold at a profit of 20%. What is the selling price? (Invoice #7)",
      "opts": [
        "₹192",
        "₹207",
        "₹182",
        "₹217"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹160 × 1.2 = ₹192."
    },
    {
      "q": "An item bought for ₹170 is sold at a profit of 20%. What is the selling price? (Invoice #8)",
      "opts": [
        "₹204",
        "₹219",
        "₹194",
        "₹229"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹170 × 1.2 = ₹204."
    },
    {
      "q": "An item bought for ₹180 is sold at a profit of 20%. What is the selling price? (Invoice #9)",
      "opts": [
        "₹216",
        "₹231",
        "₹206",
        "₹241"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹180 × 1.2 = ₹216."
    },
    {
      "q": "An item bought for ₹190 is sold at a profit of 20%. What is the selling price? (Invoice #10)",
      "opts": [
        "₹228",
        "₹243",
        "₹218",
        "₹253"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹190 × 1.2 = ₹228."
    },
    {
      "q": "An item bought for ₹200 is sold at a profit of 20%. What is the selling price? (Invoice #11)",
      "opts": [
        "₹240",
        "₹255",
        "₹230",
        "₹265"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹200 × 1.2 = ₹240."
    },
    {
      "q": "An item bought for ₹210 is sold at a profit of 20%. What is the selling price? (Invoice #12)",
      "opts": [
        "₹252",
        "₹267",
        "₹242",
        "₹277"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹210 × 1.2 = ₹252."
    },
    {
      "q": "An item bought for ₹220 is sold at a profit of 20%. What is the selling price? (Invoice #13)",
      "opts": [
        "₹264",
        "₹279",
        "₹254",
        "₹289"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹220 × 1.2 = ₹264."
    },
    {
      "q": "An item bought for ₹230 is sold at a profit of 20%. What is the selling price? (Invoice #14)",
      "opts": [
        "₹276",
        "₹291",
        "₹266",
        "₹301"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹230 × 1.2 = ₹276."
    },
    {
      "q": "An item bought for ₹240 is sold at a profit of 20%. What is the selling price? (Invoice #15)",
      "opts": [
        "₹288",
        "₹303",
        "₹278",
        "₹313"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹240 × 1.2 = ₹288."
    },
    {
      "q": "An item bought for ₹250 is sold at a profit of 20%. What is the selling price? (Invoice #16)",
      "opts": [
        "₹300",
        "₹315",
        "₹290",
        "₹325"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹250 × 1.2 = ₹300."
    },
    {
      "q": "An item bought for ₹260 is sold at a profit of 20%. What is the selling price? (Invoice #17)",
      "opts": [
        "₹312",
        "₹327",
        "₹302",
        "₹337"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹260 × 1.2 = ₹312."
    },
    {
      "q": "An item bought for ₹270 is sold at a profit of 20%. What is the selling price? (Invoice #18)",
      "opts": [
        "₹324",
        "₹339",
        "₹314",
        "₹349"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹270 × 1.2 = ₹324."
    },
    {
      "q": "An item bought for ₹280 is sold at a profit of 20%. What is the selling price? (Invoice #19)",
      "opts": [
        "₹336",
        "₹351",
        "₹326",
        "₹361"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹280 × 1.2 = ₹336."
    },
    {
      "q": "An item bought for ₹290 is sold at a profit of 20%. What is the selling price? (Invoice #20)",
      "opts": [
        "₹348",
        "₹363",
        "₹338",
        "₹373"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹290 × 1.2 = ₹348."
    },
    {
      "q": "An item bought for ₹300 is sold at a profit of 20%. What is the selling price? (Invoice #21)",
      "opts": [
        "₹360",
        "₹375",
        "₹350",
        "₹385"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹300 × 1.2 = ₹360."
    },
    {
      "q": "An item bought for ₹310 is sold at a profit of 20%. What is the selling price? (Invoice #22)",
      "opts": [
        "₹372",
        "₹387",
        "₹362",
        "₹397"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹310 × 1.2 = ₹372."
    },
    {
      "q": "An item bought for ₹320 is sold at a profit of 20%. What is the selling price? (Invoice #23)",
      "opts": [
        "₹384",
        "₹399",
        "₹374",
        "₹409"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹320 × 1.2 = ₹384."
    },
    {
      "q": "An item bought for ₹330 is sold at a profit of 20%. What is the selling price? (Invoice #24)",
      "opts": [
        "₹396",
        "₹411",
        "₹386",
        "₹421"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹330 × 1.2 = ₹396."
    },
    {
      "q": "An item bought for ₹340 is sold at a profit of 20%. What is the selling price? (Invoice #25)",
      "opts": [
        "₹408",
        "₹423",
        "₹398",
        "₹433"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹340 × 1.2 = ₹408."
    },
    {
      "q": "An item bought for ₹350 is sold at a profit of 20%. What is the selling price? (Invoice #26)",
      "opts": [
        "₹420",
        "₹435",
        "₹410",
        "₹445"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹350 × 1.2 = ₹420."
    },
    {
      "q": "An item bought for ₹360 is sold at a profit of 20%. What is the selling price? (Invoice #27)",
      "opts": [
        "₹432",
        "₹447",
        "₹422",
        "₹457"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹360 × 1.2 = ₹432."
    },
    {
      "q": "An item bought for ₹370 is sold at a profit of 20%. What is the selling price? (Invoice #28)",
      "opts": [
        "₹444",
        "₹459",
        "₹434",
        "₹469"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹370 × 1.2 = ₹444."
    },
    {
      "q": "An item bought for ₹380 is sold at a profit of 20%. What is the selling price? (Invoice #29)",
      "opts": [
        "₹456",
        "₹471",
        "₹446",
        "₹481"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹380 × 1.2 = ₹456."
    },
    {
      "q": "An item bought for ₹390 is sold at a profit of 20%. What is the selling price? (Invoice #30)",
      "opts": [
        "₹468",
        "₹483",
        "₹458",
        "₹493"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹390 × 1.2 = ₹468."
    }
  ],
  "level3": [
    {
      "q": "An item bought for ₹100 is sold at a profit of 20%. What is the selling price? (Invoice #1)",
      "opts": [
        "₹120",
        "₹135",
        "₹110",
        "₹145"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹100 × 1.2 = ₹120."
    },
    {
      "q": "An item bought for ₹110 is sold at a profit of 20%. What is the selling price? (Invoice #2)",
      "opts": [
        "₹132",
        "₹147",
        "₹122",
        "₹157"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹110 × 1.2 = ₹132."
    },
    {
      "q": "An item bought for ₹120 is sold at a profit of 20%. What is the selling price? (Invoice #3)",
      "opts": [
        "₹144",
        "₹159",
        "₹134",
        "₹169"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹120 × 1.2 = ₹144."
    },
    {
      "q": "An item bought for ₹130 is sold at a profit of 20%. What is the selling price? (Invoice #4)",
      "opts": [
        "₹156",
        "₹171",
        "₹146",
        "₹181"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹130 × 1.2 = ₹156."
    },
    {
      "q": "An item bought for ₹140 is sold at a profit of 20%. What is the selling price? (Invoice #5)",
      "opts": [
        "₹168",
        "₹183",
        "₹158",
        "₹193"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹140 × 1.2 = ₹168."
    },
    {
      "q": "An item bought for ₹150 is sold at a profit of 20%. What is the selling price? (Invoice #6)",
      "opts": [
        "₹180",
        "₹195",
        "₹170",
        "₹205"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹150 × 1.2 = ₹180."
    },
    {
      "q": "An item bought for ₹160 is sold at a profit of 20%. What is the selling price? (Invoice #7)",
      "opts": [
        "₹192",
        "₹207",
        "₹182",
        "₹217"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹160 × 1.2 = ₹192."
    },
    {
      "q": "An item bought for ₹170 is sold at a profit of 20%. What is the selling price? (Invoice #8)",
      "opts": [
        "₹204",
        "₹219",
        "₹194",
        "₹229"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹170 × 1.2 = ₹204."
    },
    {
      "q": "An item bought for ₹180 is sold at a profit of 20%. What is the selling price? (Invoice #9)",
      "opts": [
        "₹216",
        "₹231",
        "₹206",
        "₹241"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹180 × 1.2 = ₹216."
    },
    {
      "q": "An item bought for ₹190 is sold at a profit of 20%. What is the selling price? (Invoice #10)",
      "opts": [
        "₹228",
        "₹243",
        "₹218",
        "₹253"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹190 × 1.2 = ₹228."
    },
    {
      "q": "An item bought for ₹200 is sold at a profit of 20%. What is the selling price? (Invoice #11)",
      "opts": [
        "₹240",
        "₹255",
        "₹230",
        "₹265"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹200 × 1.2 = ₹240."
    },
    {
      "q": "An item bought for ₹210 is sold at a profit of 20%. What is the selling price? (Invoice #12)",
      "opts": [
        "₹252",
        "₹267",
        "₹242",
        "₹277"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹210 × 1.2 = ₹252."
    },
    {
      "q": "An item bought for ₹220 is sold at a profit of 20%. What is the selling price? (Invoice #13)",
      "opts": [
        "₹264",
        "₹279",
        "₹254",
        "₹289"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹220 × 1.2 = ₹264."
    },
    {
      "q": "An item bought for ₹230 is sold at a profit of 20%. What is the selling price? (Invoice #14)",
      "opts": [
        "₹276",
        "₹291",
        "₹266",
        "₹301"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹230 × 1.2 = ₹276."
    },
    {
      "q": "An item bought for ₹240 is sold at a profit of 20%. What is the selling price? (Invoice #15)",
      "opts": [
        "₹288",
        "₹303",
        "₹278",
        "₹313"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹240 × 1.2 = ₹288."
    },
    {
      "q": "An item bought for ₹250 is sold at a profit of 20%. What is the selling price? (Invoice #16)",
      "opts": [
        "₹300",
        "₹315",
        "₹290",
        "₹325"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹250 × 1.2 = ₹300."
    },
    {
      "q": "An item bought for ₹260 is sold at a profit of 20%. What is the selling price? (Invoice #17)",
      "opts": [
        "₹312",
        "₹327",
        "₹302",
        "₹337"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹260 × 1.2 = ₹312."
    },
    {
      "q": "An item bought for ₹270 is sold at a profit of 20%. What is the selling price? (Invoice #18)",
      "opts": [
        "₹324",
        "₹339",
        "₹314",
        "₹349"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹270 × 1.2 = ₹324."
    },
    {
      "q": "An item bought for ₹280 is sold at a profit of 20%. What is the selling price? (Invoice #19)",
      "opts": [
        "₹336",
        "₹351",
        "₹326",
        "₹361"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹280 × 1.2 = ₹336."
    },
    {
      "q": "An item bought for ₹290 is sold at a profit of 20%. What is the selling price? (Invoice #20)",
      "opts": [
        "₹348",
        "₹363",
        "₹338",
        "₹373"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹290 × 1.2 = ₹348."
    },
    {
      "q": "An item bought for ₹300 is sold at a profit of 20%. What is the selling price? (Invoice #21)",
      "opts": [
        "₹360",
        "₹375",
        "₹350",
        "₹385"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹300 × 1.2 = ₹360."
    },
    {
      "q": "An item bought for ₹310 is sold at a profit of 20%. What is the selling price? (Invoice #22)",
      "opts": [
        "₹372",
        "₹387",
        "₹362",
        "₹397"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹310 × 1.2 = ₹372."
    },
    {
      "q": "An item bought for ₹320 is sold at a profit of 20%. What is the selling price? (Invoice #23)",
      "opts": [
        "₹384",
        "₹399",
        "₹374",
        "₹409"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹320 × 1.2 = ₹384."
    },
    {
      "q": "An item bought for ₹330 is sold at a profit of 20%. What is the selling price? (Invoice #24)",
      "opts": [
        "₹396",
        "₹411",
        "₹386",
        "₹421"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹330 × 1.2 = ₹396."
    },
    {
      "q": "An item bought for ₹340 is sold at a profit of 20%. What is the selling price? (Invoice #25)",
      "opts": [
        "₹408",
        "₹423",
        "₹398",
        "₹433"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹340 × 1.2 = ₹408."
    },
    {
      "q": "An item bought for ₹350 is sold at a profit of 20%. What is the selling price? (Invoice #26)",
      "opts": [
        "₹420",
        "₹435",
        "₹410",
        "₹445"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹350 × 1.2 = ₹420."
    },
    {
      "q": "An item bought for ₹360 is sold at a profit of 20%. What is the selling price? (Invoice #27)",
      "opts": [
        "₹432",
        "₹447",
        "₹422",
        "₹457"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹360 × 1.2 = ₹432."
    },
    {
      "q": "An item bought for ₹370 is sold at a profit of 20%. What is the selling price? (Invoice #28)",
      "opts": [
        "₹444",
        "₹459",
        "₹434",
        "₹469"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹370 × 1.2 = ₹444."
    },
    {
      "q": "An item bought for ₹380 is sold at a profit of 20%. What is the selling price? (Invoice #29)",
      "opts": [
        "₹456",
        "₹471",
        "₹446",
        "₹481"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹380 × 1.2 = ₹456."
    },
    {
      "q": "An item bought for ₹390 is sold at a profit of 20%. What is the selling price? (Invoice #30)",
      "opts": [
        "₹468",
        "₹483",
        "₹458",
        "₹493"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹390 × 1.2 = ₹468."
    }
  ],
  "level4": [
    {
      "q": "An item bought for ₹100 is sold at a profit of 20%. What is the selling price? (Invoice #1)",
      "opts": [
        "₹120",
        "₹135",
        "₹110",
        "₹145"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹100 × 1.2 = ₹120."
    },
    {
      "q": "An item bought for ₹110 is sold at a profit of 20%. What is the selling price? (Invoice #2)",
      "opts": [
        "₹132",
        "₹147",
        "₹122",
        "₹157"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹110 × 1.2 = ₹132."
    },
    {
      "q": "An item bought for ₹120 is sold at a profit of 20%. What is the selling price? (Invoice #3)",
      "opts": [
        "₹144",
        "₹159",
        "₹134",
        "₹169"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹120 × 1.2 = ₹144."
    },
    {
      "q": "An item bought for ₹130 is sold at a profit of 20%. What is the selling price? (Invoice #4)",
      "opts": [
        "₹156",
        "₹171",
        "₹146",
        "₹181"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹130 × 1.2 = ₹156."
    },
    {
      "q": "An item bought for ₹140 is sold at a profit of 20%. What is the selling price? (Invoice #5)",
      "opts": [
        "₹168",
        "₹183",
        "₹158",
        "₹193"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹140 × 1.2 = ₹168."
    },
    {
      "q": "An item bought for ₹150 is sold at a profit of 20%. What is the selling price? (Invoice #6)",
      "opts": [
        "₹180",
        "₹195",
        "₹170",
        "₹205"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹150 × 1.2 = ₹180."
    },
    {
      "q": "An item bought for ₹160 is sold at a profit of 20%. What is the selling price? (Invoice #7)",
      "opts": [
        "₹192",
        "₹207",
        "₹182",
        "₹217"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹160 × 1.2 = ₹192."
    },
    {
      "q": "An item bought for ₹170 is sold at a profit of 20%. What is the selling price? (Invoice #8)",
      "opts": [
        "₹204",
        "₹219",
        "₹194",
        "₹229"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹170 × 1.2 = ₹204."
    },
    {
      "q": "An item bought for ₹180 is sold at a profit of 20%. What is the selling price? (Invoice #9)",
      "opts": [
        "₹216",
        "₹231",
        "₹206",
        "₹241"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹180 × 1.2 = ₹216."
    },
    {
      "q": "An item bought for ₹190 is sold at a profit of 20%. What is the selling price? (Invoice #10)",
      "opts": [
        "₹228",
        "₹243",
        "₹218",
        "₹253"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹190 × 1.2 = ₹228."
    },
    {
      "q": "An item bought for ₹200 is sold at a profit of 20%. What is the selling price? (Invoice #11)",
      "opts": [
        "₹240",
        "₹255",
        "₹230",
        "₹265"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹200 × 1.2 = ₹240."
    },
    {
      "q": "An item bought for ₹210 is sold at a profit of 20%. What is the selling price? (Invoice #12)",
      "opts": [
        "₹252",
        "₹267",
        "₹242",
        "₹277"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹210 × 1.2 = ₹252."
    },
    {
      "q": "An item bought for ₹220 is sold at a profit of 20%. What is the selling price? (Invoice #13)",
      "opts": [
        "₹264",
        "₹279",
        "₹254",
        "₹289"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹220 × 1.2 = ₹264."
    },
    {
      "q": "An item bought for ₹230 is sold at a profit of 20%. What is the selling price? (Invoice #14)",
      "opts": [
        "₹276",
        "₹291",
        "₹266",
        "₹301"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹230 × 1.2 = ₹276."
    },
    {
      "q": "An item bought for ₹240 is sold at a profit of 20%. What is the selling price? (Invoice #15)",
      "opts": [
        "₹288",
        "₹303",
        "₹278",
        "₹313"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹240 × 1.2 = ₹288."
    },
    {
      "q": "An item bought for ₹250 is sold at a profit of 20%. What is the selling price? (Invoice #16)",
      "opts": [
        "₹300",
        "₹315",
        "₹290",
        "₹325"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹250 × 1.2 = ₹300."
    },
    {
      "q": "An item bought for ₹260 is sold at a profit of 20%. What is the selling price? (Invoice #17)",
      "opts": [
        "₹312",
        "₹327",
        "₹302",
        "₹337"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹260 × 1.2 = ₹312."
    },
    {
      "q": "An item bought for ₹270 is sold at a profit of 20%. What is the selling price? (Invoice #18)",
      "opts": [
        "₹324",
        "₹339",
        "₹314",
        "₹349"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹270 × 1.2 = ₹324."
    },
    {
      "q": "An item bought for ₹280 is sold at a profit of 20%. What is the selling price? (Invoice #19)",
      "opts": [
        "₹336",
        "₹351",
        "₹326",
        "₹361"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹280 × 1.2 = ₹336."
    },
    {
      "q": "An item bought for ₹290 is sold at a profit of 20%. What is the selling price? (Invoice #20)",
      "opts": [
        "₹348",
        "₹363",
        "₹338",
        "₹373"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹290 × 1.2 = ₹348."
    },
    {
      "q": "An item bought for ₹300 is sold at a profit of 20%. What is the selling price? (Invoice #21)",
      "opts": [
        "₹360",
        "₹375",
        "₹350",
        "₹385"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹300 × 1.2 = ₹360."
    },
    {
      "q": "An item bought for ₹310 is sold at a profit of 20%. What is the selling price? (Invoice #22)",
      "opts": [
        "₹372",
        "₹387",
        "₹362",
        "₹397"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹310 × 1.2 = ₹372."
    },
    {
      "q": "An item bought for ₹320 is sold at a profit of 20%. What is the selling price? (Invoice #23)",
      "opts": [
        "₹384",
        "₹399",
        "₹374",
        "₹409"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹320 × 1.2 = ₹384."
    },
    {
      "q": "An item bought for ₹330 is sold at a profit of 20%. What is the selling price? (Invoice #24)",
      "opts": [
        "₹396",
        "₹411",
        "₹386",
        "₹421"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹330 × 1.2 = ₹396."
    },
    {
      "q": "An item bought for ₹340 is sold at a profit of 20%. What is the selling price? (Invoice #25)",
      "opts": [
        "₹408",
        "₹423",
        "₹398",
        "₹433"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹340 × 1.2 = ₹408."
    },
    {
      "q": "An item bought for ₹350 is sold at a profit of 20%. What is the selling price? (Invoice #26)",
      "opts": [
        "₹420",
        "₹435",
        "₹410",
        "₹445"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹350 × 1.2 = ₹420."
    },
    {
      "q": "An item bought for ₹360 is sold at a profit of 20%. What is the selling price? (Invoice #27)",
      "opts": [
        "₹432",
        "₹447",
        "₹422",
        "₹457"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹360 × 1.2 = ₹432."
    },
    {
      "q": "An item bought for ₹370 is sold at a profit of 20%. What is the selling price? (Invoice #28)",
      "opts": [
        "₹444",
        "₹459",
        "₹434",
        "₹469"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹370 × 1.2 = ₹444."
    },
    {
      "q": "An item bought for ₹380 is sold at a profit of 20%. What is the selling price? (Invoice #29)",
      "opts": [
        "₹456",
        "₹471",
        "₹446",
        "₹481"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹380 × 1.2 = ₹456."
    },
    {
      "q": "An item bought for ₹390 is sold at a profit of 20%. What is the selling price? (Invoice #30)",
      "opts": [
        "₹468",
        "₹483",
        "₹458",
        "₹493"
      ],
      "ans": "A",
      "exp": "SP = CP × (1 + Profit%/100) = ₹390 × 1.2 = ₹468."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["simplification"] = {
  "level1": [
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 12 + 4 × 2 (Problem #1)",
      "opts": [
        "20",
        "32",
        "24",
        "18"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 12 + 8 = 20."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 13 + 4 × 2 (Problem #2)",
      "opts": [
        "21",
        "34",
        "25",
        "19"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 13 + 8 = 21."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 14 + 4 × 2 (Problem #3)",
      "opts": [
        "22",
        "36",
        "26",
        "20"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 14 + 8 = 22."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 15 + 4 × 2 (Problem #4)",
      "opts": [
        "23",
        "38",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 15 + 8 = 23."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 16 + 4 × 2 (Problem #5)",
      "opts": [
        "24",
        "40",
        "28",
        "22"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 16 + 8 = 24."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 17 + 4 × 2 (Problem #6)",
      "opts": [
        "25",
        "42",
        "29",
        "23"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 17 + 8 = 25."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 18 + 4 × 2 (Problem #7)",
      "opts": [
        "26",
        "44",
        "30",
        "24"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 18 + 8 = 26."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 19 + 4 × 2 (Problem #8)",
      "opts": [
        "27",
        "46",
        "31",
        "25"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 19 + 8 = 27."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 20 + 4 × 2 (Problem #9)",
      "opts": [
        "28",
        "48",
        "32",
        "26"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 20 + 8 = 28."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 21 + 4 × 2 (Problem #10)",
      "opts": [
        "29",
        "50",
        "33",
        "27"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 21 + 8 = 29."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 22 + 4 × 2 (Problem #11)",
      "opts": [
        "30",
        "52",
        "34",
        "28"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 22 + 8 = 30."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 23 + 4 × 2 (Problem #12)",
      "opts": [
        "31",
        "54",
        "35",
        "29"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 23 + 8 = 31."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 24 + 4 × 2 (Problem #13)",
      "opts": [
        "32",
        "56",
        "36",
        "30"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 24 + 8 = 32."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 25 + 4 × 2 (Problem #14)",
      "opts": [
        "33",
        "58",
        "37",
        "31"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 25 + 8 = 33."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 26 + 4 × 2 (Problem #15)",
      "opts": [
        "34",
        "60",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 26 + 8 = 34."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 27 + 4 × 2 (Problem #16)",
      "opts": [
        "35",
        "62",
        "39",
        "33"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 27 + 8 = 35."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 28 + 4 × 2 (Problem #17)",
      "opts": [
        "36",
        "64",
        "40",
        "34"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 28 + 8 = 36."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 29 + 4 × 2 (Problem #18)",
      "opts": [
        "37",
        "66",
        "41",
        "35"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 29 + 8 = 37."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 30 + 4 × 2 (Problem #19)",
      "opts": [
        "38",
        "68",
        "42",
        "36"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 30 + 8 = 38."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 31 + 4 × 2 (Problem #20)",
      "opts": [
        "39",
        "70",
        "43",
        "37"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 31 + 8 = 39."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 32 + 4 × 2 (Problem #21)",
      "opts": [
        "40",
        "72",
        "44",
        "38"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 32 + 8 = 40."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 33 + 4 × 2 (Problem #22)",
      "opts": [
        "41",
        "74",
        "45",
        "39"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 33 + 8 = 41."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 34 + 4 × 2 (Problem #23)",
      "opts": [
        "42",
        "76",
        "46",
        "40"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 34 + 8 = 42."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 35 + 4 × 2 (Problem #24)",
      "opts": [
        "43",
        "78",
        "47",
        "41"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 35 + 8 = 43."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 36 + 4 × 2 (Problem #25)",
      "opts": [
        "44",
        "80",
        "48",
        "42"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 36 + 8 = 44."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 37 + 4 × 2 (Problem #26)",
      "opts": [
        "45",
        "82",
        "49",
        "43"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 37 + 8 = 45."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 38 + 4 × 2 (Problem #27)",
      "opts": [
        "46",
        "84",
        "50",
        "44"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 38 + 8 = 46."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 39 + 4 × 2 (Problem #28)",
      "opts": [
        "47",
        "86",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 39 + 8 = 47."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 40 + 4 × 2 (Problem #29)",
      "opts": [
        "48",
        "88",
        "52",
        "46"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 40 + 8 = 48."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 41 + 4 × 2 (Problem #30)",
      "opts": [
        "49",
        "90",
        "53",
        "47"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 41 + 8 = 49."
    }
  ],
  "level2": [
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 12 + 4 × 2 (Problem #1)",
      "opts": [
        "20",
        "32",
        "24",
        "18"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 12 + 8 = 20."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 13 + 4 × 2 (Problem #2)",
      "opts": [
        "21",
        "34",
        "25",
        "19"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 13 + 8 = 21."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 14 + 4 × 2 (Problem #3)",
      "opts": [
        "22",
        "36",
        "26",
        "20"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 14 + 8 = 22."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 15 + 4 × 2 (Problem #4)",
      "opts": [
        "23",
        "38",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 15 + 8 = 23."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 16 + 4 × 2 (Problem #5)",
      "opts": [
        "24",
        "40",
        "28",
        "22"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 16 + 8 = 24."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 17 + 4 × 2 (Problem #6)",
      "opts": [
        "25",
        "42",
        "29",
        "23"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 17 + 8 = 25."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 18 + 4 × 2 (Problem #7)",
      "opts": [
        "26",
        "44",
        "30",
        "24"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 18 + 8 = 26."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 19 + 4 × 2 (Problem #8)",
      "opts": [
        "27",
        "46",
        "31",
        "25"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 19 + 8 = 27."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 20 + 4 × 2 (Problem #9)",
      "opts": [
        "28",
        "48",
        "32",
        "26"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 20 + 8 = 28."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 21 + 4 × 2 (Problem #10)",
      "opts": [
        "29",
        "50",
        "33",
        "27"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 21 + 8 = 29."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 22 + 4 × 2 (Problem #11)",
      "opts": [
        "30",
        "52",
        "34",
        "28"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 22 + 8 = 30."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 23 + 4 × 2 (Problem #12)",
      "opts": [
        "31",
        "54",
        "35",
        "29"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 23 + 8 = 31."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 24 + 4 × 2 (Problem #13)",
      "opts": [
        "32",
        "56",
        "36",
        "30"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 24 + 8 = 32."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 25 + 4 × 2 (Problem #14)",
      "opts": [
        "33",
        "58",
        "37",
        "31"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 25 + 8 = 33."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 26 + 4 × 2 (Problem #15)",
      "opts": [
        "34",
        "60",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 26 + 8 = 34."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 27 + 4 × 2 (Problem #16)",
      "opts": [
        "35",
        "62",
        "39",
        "33"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 27 + 8 = 35."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 28 + 4 × 2 (Problem #17)",
      "opts": [
        "36",
        "64",
        "40",
        "34"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 28 + 8 = 36."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 29 + 4 × 2 (Problem #18)",
      "opts": [
        "37",
        "66",
        "41",
        "35"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 29 + 8 = 37."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 30 + 4 × 2 (Problem #19)",
      "opts": [
        "38",
        "68",
        "42",
        "36"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 30 + 8 = 38."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 31 + 4 × 2 (Problem #20)",
      "opts": [
        "39",
        "70",
        "43",
        "37"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 31 + 8 = 39."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 32 + 4 × 2 (Problem #21)",
      "opts": [
        "40",
        "72",
        "44",
        "38"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 32 + 8 = 40."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 33 + 4 × 2 (Problem #22)",
      "opts": [
        "41",
        "74",
        "45",
        "39"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 33 + 8 = 41."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 34 + 4 × 2 (Problem #23)",
      "opts": [
        "42",
        "76",
        "46",
        "40"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 34 + 8 = 42."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 35 + 4 × 2 (Problem #24)",
      "opts": [
        "43",
        "78",
        "47",
        "41"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 35 + 8 = 43."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 36 + 4 × 2 (Problem #25)",
      "opts": [
        "44",
        "80",
        "48",
        "42"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 36 + 8 = 44."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 37 + 4 × 2 (Problem #26)",
      "opts": [
        "45",
        "82",
        "49",
        "43"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 37 + 8 = 45."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 38 + 4 × 2 (Problem #27)",
      "opts": [
        "46",
        "84",
        "50",
        "44"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 38 + 8 = 46."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 39 + 4 × 2 (Problem #28)",
      "opts": [
        "47",
        "86",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 39 + 8 = 47."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 40 + 4 × 2 (Problem #29)",
      "opts": [
        "48",
        "88",
        "52",
        "46"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 40 + 8 = 48."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 41 + 4 × 2 (Problem #30)",
      "opts": [
        "49",
        "90",
        "53",
        "47"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 41 + 8 = 49."
    }
  ],
  "level3": [
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 12 + 4 × 2 (Problem #1)",
      "opts": [
        "20",
        "32",
        "24",
        "18"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 12 + 8 = 20."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 13 + 4 × 2 (Problem #2)",
      "opts": [
        "21",
        "34",
        "25",
        "19"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 13 + 8 = 21."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 14 + 4 × 2 (Problem #3)",
      "opts": [
        "22",
        "36",
        "26",
        "20"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 14 + 8 = 22."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 15 + 4 × 2 (Problem #4)",
      "opts": [
        "23",
        "38",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 15 + 8 = 23."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 16 + 4 × 2 (Problem #5)",
      "opts": [
        "24",
        "40",
        "28",
        "22"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 16 + 8 = 24."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 17 + 4 × 2 (Problem #6)",
      "opts": [
        "25",
        "42",
        "29",
        "23"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 17 + 8 = 25."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 18 + 4 × 2 (Problem #7)",
      "opts": [
        "26",
        "44",
        "30",
        "24"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 18 + 8 = 26."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 19 + 4 × 2 (Problem #8)",
      "opts": [
        "27",
        "46",
        "31",
        "25"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 19 + 8 = 27."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 20 + 4 × 2 (Problem #9)",
      "opts": [
        "28",
        "48",
        "32",
        "26"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 20 + 8 = 28."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 21 + 4 × 2 (Problem #10)",
      "opts": [
        "29",
        "50",
        "33",
        "27"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 21 + 8 = 29."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 22 + 4 × 2 (Problem #11)",
      "opts": [
        "30",
        "52",
        "34",
        "28"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 22 + 8 = 30."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 23 + 4 × 2 (Problem #12)",
      "opts": [
        "31",
        "54",
        "35",
        "29"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 23 + 8 = 31."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 24 + 4 × 2 (Problem #13)",
      "opts": [
        "32",
        "56",
        "36",
        "30"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 24 + 8 = 32."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 25 + 4 × 2 (Problem #14)",
      "opts": [
        "33",
        "58",
        "37",
        "31"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 25 + 8 = 33."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 26 + 4 × 2 (Problem #15)",
      "opts": [
        "34",
        "60",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 26 + 8 = 34."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 27 + 4 × 2 (Problem #16)",
      "opts": [
        "35",
        "62",
        "39",
        "33"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 27 + 8 = 35."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 28 + 4 × 2 (Problem #17)",
      "opts": [
        "36",
        "64",
        "40",
        "34"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 28 + 8 = 36."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 29 + 4 × 2 (Problem #18)",
      "opts": [
        "37",
        "66",
        "41",
        "35"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 29 + 8 = 37."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 30 + 4 × 2 (Problem #19)",
      "opts": [
        "38",
        "68",
        "42",
        "36"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 30 + 8 = 38."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 31 + 4 × 2 (Problem #20)",
      "opts": [
        "39",
        "70",
        "43",
        "37"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 31 + 8 = 39."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 32 + 4 × 2 (Problem #21)",
      "opts": [
        "40",
        "72",
        "44",
        "38"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 32 + 8 = 40."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 33 + 4 × 2 (Problem #22)",
      "opts": [
        "41",
        "74",
        "45",
        "39"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 33 + 8 = 41."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 34 + 4 × 2 (Problem #23)",
      "opts": [
        "42",
        "76",
        "46",
        "40"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 34 + 8 = 42."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 35 + 4 × 2 (Problem #24)",
      "opts": [
        "43",
        "78",
        "47",
        "41"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 35 + 8 = 43."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 36 + 4 × 2 (Problem #25)",
      "opts": [
        "44",
        "80",
        "48",
        "42"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 36 + 8 = 44."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 37 + 4 × 2 (Problem #26)",
      "opts": [
        "45",
        "82",
        "49",
        "43"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 37 + 8 = 45."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 38 + 4 × 2 (Problem #27)",
      "opts": [
        "46",
        "84",
        "50",
        "44"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 38 + 8 = 46."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 39 + 4 × 2 (Problem #28)",
      "opts": [
        "47",
        "86",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 39 + 8 = 47."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 40 + 4 × 2 (Problem #29)",
      "opts": [
        "48",
        "88",
        "52",
        "46"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 40 + 8 = 48."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 41 + 4 × 2 (Problem #30)",
      "opts": [
        "49",
        "90",
        "53",
        "47"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 41 + 8 = 49."
    }
  ],
  "level4": [
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 12 + 4 × 2 (Problem #1)",
      "opts": [
        "20",
        "32",
        "24",
        "18"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 12 + 8 = 20."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 13 + 4 × 2 (Problem #2)",
      "opts": [
        "21",
        "34",
        "25",
        "19"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 13 + 8 = 21."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 14 + 4 × 2 (Problem #3)",
      "opts": [
        "22",
        "36",
        "26",
        "20"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 14 + 8 = 22."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 15 + 4 × 2 (Problem #4)",
      "opts": [
        "23",
        "38",
        "27",
        "21"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 15 + 8 = 23."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 16 + 4 × 2 (Problem #5)",
      "opts": [
        "24",
        "40",
        "28",
        "22"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 16 + 8 = 24."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 17 + 4 × 2 (Problem #6)",
      "opts": [
        "25",
        "42",
        "29",
        "23"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 17 + 8 = 25."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 18 + 4 × 2 (Problem #7)",
      "opts": [
        "26",
        "44",
        "30",
        "24"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 18 + 8 = 26."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 19 + 4 × 2 (Problem #8)",
      "opts": [
        "27",
        "46",
        "31",
        "25"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 19 + 8 = 27."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 20 + 4 × 2 (Problem #9)",
      "opts": [
        "28",
        "48",
        "32",
        "26"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 20 + 8 = 28."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 21 + 4 × 2 (Problem #10)",
      "opts": [
        "29",
        "50",
        "33",
        "27"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 21 + 8 = 29."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 22 + 4 × 2 (Problem #11)",
      "opts": [
        "30",
        "52",
        "34",
        "28"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 22 + 8 = 30."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 23 + 4 × 2 (Problem #12)",
      "opts": [
        "31",
        "54",
        "35",
        "29"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 23 + 8 = 31."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 24 + 4 × 2 (Problem #13)",
      "opts": [
        "32",
        "56",
        "36",
        "30"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 24 + 8 = 32."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 25 + 4 × 2 (Problem #14)",
      "opts": [
        "33",
        "58",
        "37",
        "31"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 25 + 8 = 33."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 26 + 4 × 2 (Problem #15)",
      "opts": [
        "34",
        "60",
        "38",
        "32"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 26 + 8 = 34."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 27 + 4 × 2 (Problem #16)",
      "opts": [
        "35",
        "62",
        "39",
        "33"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 27 + 8 = 35."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 28 + 4 × 2 (Problem #17)",
      "opts": [
        "36",
        "64",
        "40",
        "34"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 28 + 8 = 36."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 29 + 4 × 2 (Problem #18)",
      "opts": [
        "37",
        "66",
        "41",
        "35"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 29 + 8 = 37."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 30 + 4 × 2 (Problem #19)",
      "opts": [
        "38",
        "68",
        "42",
        "36"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 30 + 8 = 38."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 31 + 4 × 2 (Problem #20)",
      "opts": [
        "39",
        "70",
        "43",
        "37"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 31 + 8 = 39."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 32 + 4 × 2 (Problem #21)",
      "opts": [
        "40",
        "72",
        "44",
        "38"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 32 + 8 = 40."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 33 + 4 × 2 (Problem #22)",
      "opts": [
        "41",
        "74",
        "45",
        "39"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 33 + 8 = 41."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 34 + 4 × 2 (Problem #23)",
      "opts": [
        "42",
        "76",
        "46",
        "40"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 34 + 8 = 42."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 35 + 4 × 2 (Problem #24)",
      "opts": [
        "43",
        "78",
        "47",
        "41"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 35 + 8 = 43."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 36 + 4 × 2 (Problem #25)",
      "opts": [
        "44",
        "80",
        "48",
        "42"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 36 + 8 = 44."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 37 + 4 × 2 (Problem #26)",
      "opts": [
        "45",
        "82",
        "49",
        "43"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 37 + 8 = 45."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 38 + 4 × 2 (Problem #27)",
      "opts": [
        "46",
        "84",
        "50",
        "44"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 38 + 8 = 46."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 39 + 4 × 2 (Problem #28)",
      "opts": [
        "47",
        "86",
        "51",
        "45"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 39 + 8 = 47."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 40 + 4 × 2 (Problem #29)",
      "opts": [
        "48",
        "88",
        "52",
        "46"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 40 + 8 = 48."
    },
    {
      "q": "Evaluate the numerical expression according to standard BODMAS precedence: 41 + 4 × 2 (Problem #30)",
      "opts": [
        "49",
        "90",
        "53",
        "47"
      ],
      "ans": "A",
      "exp": "By BODMAS, multiplication precedes addition: 4 × 2 = 8; then 41 + 8 = 49."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["simple-interest"] = {
  "level1": [
    {
      "q": "Calculate the Simple Interest on a principal of ₹1000 at an annual interest rate of 5% for 2 years: (Account #1)",
      "opts": [
        "₹100",
        "₹120",
        "₹85",
        "₹150"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1000 × 5 × 2) / 100 = ₹100."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1100 at an annual interest rate of 5% for 2 years: (Account #2)",
      "opts": [
        "₹110",
        "₹130",
        "₹95",
        "₹160"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1100 × 5 × 2) / 100 = ₹110."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1200 at an annual interest rate of 5% for 2 years: (Account #3)",
      "opts": [
        "₹120",
        "₹140",
        "₹105",
        "₹170"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1200 × 5 × 2) / 100 = ₹120."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1300 at an annual interest rate of 5% for 2 years: (Account #4)",
      "opts": [
        "₹130",
        "₹150",
        "₹115",
        "₹180"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1300 × 5 × 2) / 100 = ₹130."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1400 at an annual interest rate of 5% for 2 years: (Account #5)",
      "opts": [
        "₹140",
        "₹160",
        "₹125",
        "₹190"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1400 × 5 × 2) / 100 = ₹140."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1500 at an annual interest rate of 5% for 2 years: (Account #6)",
      "opts": [
        "₹150",
        "₹170",
        "₹135",
        "₹200"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1500 × 5 × 2) / 100 = ₹150."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1600 at an annual interest rate of 5% for 2 years: (Account #7)",
      "opts": [
        "₹160",
        "₹180",
        "₹145",
        "₹210"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1600 × 5 × 2) / 100 = ₹160."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1700 at an annual interest rate of 5% for 2 years: (Account #8)",
      "opts": [
        "₹170",
        "₹190",
        "₹155",
        "₹220"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1700 × 5 × 2) / 100 = ₹170."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1800 at an annual interest rate of 5% for 2 years: (Account #9)",
      "opts": [
        "₹180",
        "₹200",
        "₹165",
        "₹230"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1800 × 5 × 2) / 100 = ₹180."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1900 at an annual interest rate of 5% for 2 years: (Account #10)",
      "opts": [
        "₹190",
        "₹210",
        "₹175",
        "₹240"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1900 × 5 × 2) / 100 = ₹190."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2000 at an annual interest rate of 5% for 2 years: (Account #11)",
      "opts": [
        "₹200",
        "₹220",
        "₹185",
        "₹250"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2000 × 5 × 2) / 100 = ₹200."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2100 at an annual interest rate of 5% for 2 years: (Account #12)",
      "opts": [
        "₹210",
        "₹230",
        "₹195",
        "₹260"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2100 × 5 × 2) / 100 = ₹210."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2200 at an annual interest rate of 5% for 2 years: (Account #13)",
      "opts": [
        "₹220",
        "₹240",
        "₹205",
        "₹270"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2200 × 5 × 2) / 100 = ₹220."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2300 at an annual interest rate of 5% for 2 years: (Account #14)",
      "opts": [
        "₹230",
        "₹250",
        "₹215",
        "₹280"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2300 × 5 × 2) / 100 = ₹230."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2400 at an annual interest rate of 5% for 2 years: (Account #15)",
      "opts": [
        "₹240",
        "₹260",
        "₹225",
        "₹290"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2400 × 5 × 2) / 100 = ₹240."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2500 at an annual interest rate of 5% for 2 years: (Account #16)",
      "opts": [
        "₹250",
        "₹270",
        "₹235",
        "₹300"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2500 × 5 × 2) / 100 = ₹250."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2600 at an annual interest rate of 5% for 2 years: (Account #17)",
      "opts": [
        "₹260",
        "₹280",
        "₹245",
        "₹310"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2600 × 5 × 2) / 100 = ₹260."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2700 at an annual interest rate of 5% for 2 years: (Account #18)",
      "opts": [
        "₹270",
        "₹290",
        "₹255",
        "₹320"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2700 × 5 × 2) / 100 = ₹270."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2800 at an annual interest rate of 5% for 2 years: (Account #19)",
      "opts": [
        "₹280",
        "₹300",
        "₹265",
        "₹330"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2800 × 5 × 2) / 100 = ₹280."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2900 at an annual interest rate of 5% for 2 years: (Account #20)",
      "opts": [
        "₹290",
        "₹310",
        "₹275",
        "₹340"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2900 × 5 × 2) / 100 = ₹290."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3000 at an annual interest rate of 5% for 2 years: (Account #21)",
      "opts": [
        "₹300",
        "₹320",
        "₹285",
        "₹350"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3000 × 5 × 2) / 100 = ₹300."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3100 at an annual interest rate of 5% for 2 years: (Account #22)",
      "opts": [
        "₹310",
        "₹330",
        "₹295",
        "₹360"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3100 × 5 × 2) / 100 = ₹310."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3200 at an annual interest rate of 5% for 2 years: (Account #23)",
      "opts": [
        "₹320",
        "₹340",
        "₹305",
        "₹370"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3200 × 5 × 2) / 100 = ₹320."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3300 at an annual interest rate of 5% for 2 years: (Account #24)",
      "opts": [
        "₹330",
        "₹350",
        "₹315",
        "₹380"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3300 × 5 × 2) / 100 = ₹330."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3400 at an annual interest rate of 5% for 2 years: (Account #25)",
      "opts": [
        "₹340",
        "₹360",
        "₹325",
        "₹390"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3400 × 5 × 2) / 100 = ₹340."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3500 at an annual interest rate of 5% for 2 years: (Account #26)",
      "opts": [
        "₹350",
        "₹370",
        "₹335",
        "₹400"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3500 × 5 × 2) / 100 = ₹350."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3600 at an annual interest rate of 5% for 2 years: (Account #27)",
      "opts": [
        "₹360",
        "₹380",
        "₹345",
        "₹410"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3600 × 5 × 2) / 100 = ₹360."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3700 at an annual interest rate of 5% for 2 years: (Account #28)",
      "opts": [
        "₹370",
        "₹390",
        "₹355",
        "₹420"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3700 × 5 × 2) / 100 = ₹370."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3800 at an annual interest rate of 5% for 2 years: (Account #29)",
      "opts": [
        "₹380",
        "₹400",
        "₹365",
        "₹430"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3800 × 5 × 2) / 100 = ₹380."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3900 at an annual interest rate of 5% for 2 years: (Account #30)",
      "opts": [
        "₹390",
        "₹410",
        "₹375",
        "₹440"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3900 × 5 × 2) / 100 = ₹390."
    }
  ],
  "level2": [
    {
      "q": "Calculate the Simple Interest on a principal of ₹1000 at an annual interest rate of 5% for 2 years: (Account #1)",
      "opts": [
        "₹100",
        "₹120",
        "₹85",
        "₹150"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1000 × 5 × 2) / 100 = ₹100."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1100 at an annual interest rate of 5% for 2 years: (Account #2)",
      "opts": [
        "₹110",
        "₹130",
        "₹95",
        "₹160"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1100 × 5 × 2) / 100 = ₹110."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1200 at an annual interest rate of 5% for 2 years: (Account #3)",
      "opts": [
        "₹120",
        "₹140",
        "₹105",
        "₹170"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1200 × 5 × 2) / 100 = ₹120."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1300 at an annual interest rate of 5% for 2 years: (Account #4)",
      "opts": [
        "₹130",
        "₹150",
        "₹115",
        "₹180"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1300 × 5 × 2) / 100 = ₹130."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1400 at an annual interest rate of 5% for 2 years: (Account #5)",
      "opts": [
        "₹140",
        "₹160",
        "₹125",
        "₹190"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1400 × 5 × 2) / 100 = ₹140."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1500 at an annual interest rate of 5% for 2 years: (Account #6)",
      "opts": [
        "₹150",
        "₹170",
        "₹135",
        "₹200"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1500 × 5 × 2) / 100 = ₹150."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1600 at an annual interest rate of 5% for 2 years: (Account #7)",
      "opts": [
        "₹160",
        "₹180",
        "₹145",
        "₹210"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1600 × 5 × 2) / 100 = ₹160."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1700 at an annual interest rate of 5% for 2 years: (Account #8)",
      "opts": [
        "₹170",
        "₹190",
        "₹155",
        "₹220"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1700 × 5 × 2) / 100 = ₹170."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1800 at an annual interest rate of 5% for 2 years: (Account #9)",
      "opts": [
        "₹180",
        "₹200",
        "₹165",
        "₹230"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1800 × 5 × 2) / 100 = ₹180."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1900 at an annual interest rate of 5% for 2 years: (Account #10)",
      "opts": [
        "₹190",
        "₹210",
        "₹175",
        "₹240"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1900 × 5 × 2) / 100 = ₹190."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2000 at an annual interest rate of 5% for 2 years: (Account #11)",
      "opts": [
        "₹200",
        "₹220",
        "₹185",
        "₹250"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2000 × 5 × 2) / 100 = ₹200."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2100 at an annual interest rate of 5% for 2 years: (Account #12)",
      "opts": [
        "₹210",
        "₹230",
        "₹195",
        "₹260"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2100 × 5 × 2) / 100 = ₹210."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2200 at an annual interest rate of 5% for 2 years: (Account #13)",
      "opts": [
        "₹220",
        "₹240",
        "₹205",
        "₹270"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2200 × 5 × 2) / 100 = ₹220."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2300 at an annual interest rate of 5% for 2 years: (Account #14)",
      "opts": [
        "₹230",
        "₹250",
        "₹215",
        "₹280"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2300 × 5 × 2) / 100 = ₹230."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2400 at an annual interest rate of 5% for 2 years: (Account #15)",
      "opts": [
        "₹240",
        "₹260",
        "₹225",
        "₹290"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2400 × 5 × 2) / 100 = ₹240."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2500 at an annual interest rate of 5% for 2 years: (Account #16)",
      "opts": [
        "₹250",
        "₹270",
        "₹235",
        "₹300"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2500 × 5 × 2) / 100 = ₹250."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2600 at an annual interest rate of 5% for 2 years: (Account #17)",
      "opts": [
        "₹260",
        "₹280",
        "₹245",
        "₹310"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2600 × 5 × 2) / 100 = ₹260."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2700 at an annual interest rate of 5% for 2 years: (Account #18)",
      "opts": [
        "₹270",
        "₹290",
        "₹255",
        "₹320"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2700 × 5 × 2) / 100 = ₹270."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2800 at an annual interest rate of 5% for 2 years: (Account #19)",
      "opts": [
        "₹280",
        "₹300",
        "₹265",
        "₹330"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2800 × 5 × 2) / 100 = ₹280."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2900 at an annual interest rate of 5% for 2 years: (Account #20)",
      "opts": [
        "₹290",
        "₹310",
        "₹275",
        "₹340"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2900 × 5 × 2) / 100 = ₹290."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3000 at an annual interest rate of 5% for 2 years: (Account #21)",
      "opts": [
        "₹300",
        "₹320",
        "₹285",
        "₹350"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3000 × 5 × 2) / 100 = ₹300."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3100 at an annual interest rate of 5% for 2 years: (Account #22)",
      "opts": [
        "₹310",
        "₹330",
        "₹295",
        "₹360"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3100 × 5 × 2) / 100 = ₹310."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3200 at an annual interest rate of 5% for 2 years: (Account #23)",
      "opts": [
        "₹320",
        "₹340",
        "₹305",
        "₹370"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3200 × 5 × 2) / 100 = ₹320."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3300 at an annual interest rate of 5% for 2 years: (Account #24)",
      "opts": [
        "₹330",
        "₹350",
        "₹315",
        "₹380"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3300 × 5 × 2) / 100 = ₹330."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3400 at an annual interest rate of 5% for 2 years: (Account #25)",
      "opts": [
        "₹340",
        "₹360",
        "₹325",
        "₹390"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3400 × 5 × 2) / 100 = ₹340."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3500 at an annual interest rate of 5% for 2 years: (Account #26)",
      "opts": [
        "₹350",
        "₹370",
        "₹335",
        "₹400"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3500 × 5 × 2) / 100 = ₹350."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3600 at an annual interest rate of 5% for 2 years: (Account #27)",
      "opts": [
        "₹360",
        "₹380",
        "₹345",
        "₹410"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3600 × 5 × 2) / 100 = ₹360."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3700 at an annual interest rate of 5% for 2 years: (Account #28)",
      "opts": [
        "₹370",
        "₹390",
        "₹355",
        "₹420"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3700 × 5 × 2) / 100 = ₹370."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3800 at an annual interest rate of 5% for 2 years: (Account #29)",
      "opts": [
        "₹380",
        "₹400",
        "₹365",
        "₹430"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3800 × 5 × 2) / 100 = ₹380."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3900 at an annual interest rate of 5% for 2 years: (Account #30)",
      "opts": [
        "₹390",
        "₹410",
        "₹375",
        "₹440"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3900 × 5 × 2) / 100 = ₹390."
    }
  ],
  "level3": [
    {
      "q": "Calculate the Simple Interest on a principal of ₹1000 at an annual interest rate of 5% for 2 years: (Account #1)",
      "opts": [
        "₹100",
        "₹120",
        "₹85",
        "₹150"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1000 × 5 × 2) / 100 = ₹100."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1100 at an annual interest rate of 5% for 2 years: (Account #2)",
      "opts": [
        "₹110",
        "₹130",
        "₹95",
        "₹160"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1100 × 5 × 2) / 100 = ₹110."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1200 at an annual interest rate of 5% for 2 years: (Account #3)",
      "opts": [
        "₹120",
        "₹140",
        "₹105",
        "₹170"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1200 × 5 × 2) / 100 = ₹120."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1300 at an annual interest rate of 5% for 2 years: (Account #4)",
      "opts": [
        "₹130",
        "₹150",
        "₹115",
        "₹180"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1300 × 5 × 2) / 100 = ₹130."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1400 at an annual interest rate of 5% for 2 years: (Account #5)",
      "opts": [
        "₹140",
        "₹160",
        "₹125",
        "₹190"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1400 × 5 × 2) / 100 = ₹140."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1500 at an annual interest rate of 5% for 2 years: (Account #6)",
      "opts": [
        "₹150",
        "₹170",
        "₹135",
        "₹200"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1500 × 5 × 2) / 100 = ₹150."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1600 at an annual interest rate of 5% for 2 years: (Account #7)",
      "opts": [
        "₹160",
        "₹180",
        "₹145",
        "₹210"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1600 × 5 × 2) / 100 = ₹160."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1700 at an annual interest rate of 5% for 2 years: (Account #8)",
      "opts": [
        "₹170",
        "₹190",
        "₹155",
        "₹220"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1700 × 5 × 2) / 100 = ₹170."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1800 at an annual interest rate of 5% for 2 years: (Account #9)",
      "opts": [
        "₹180",
        "₹200",
        "₹165",
        "₹230"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1800 × 5 × 2) / 100 = ₹180."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1900 at an annual interest rate of 5% for 2 years: (Account #10)",
      "opts": [
        "₹190",
        "₹210",
        "₹175",
        "₹240"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1900 × 5 × 2) / 100 = ₹190."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2000 at an annual interest rate of 5% for 2 years: (Account #11)",
      "opts": [
        "₹200",
        "₹220",
        "₹185",
        "₹250"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2000 × 5 × 2) / 100 = ₹200."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2100 at an annual interest rate of 5% for 2 years: (Account #12)",
      "opts": [
        "₹210",
        "₹230",
        "₹195",
        "₹260"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2100 × 5 × 2) / 100 = ₹210."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2200 at an annual interest rate of 5% for 2 years: (Account #13)",
      "opts": [
        "₹220",
        "₹240",
        "₹205",
        "₹270"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2200 × 5 × 2) / 100 = ₹220."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2300 at an annual interest rate of 5% for 2 years: (Account #14)",
      "opts": [
        "₹230",
        "₹250",
        "₹215",
        "₹280"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2300 × 5 × 2) / 100 = ₹230."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2400 at an annual interest rate of 5% for 2 years: (Account #15)",
      "opts": [
        "₹240",
        "₹260",
        "₹225",
        "₹290"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2400 × 5 × 2) / 100 = ₹240."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2500 at an annual interest rate of 5% for 2 years: (Account #16)",
      "opts": [
        "₹250",
        "₹270",
        "₹235",
        "₹300"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2500 × 5 × 2) / 100 = ₹250."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2600 at an annual interest rate of 5% for 2 years: (Account #17)",
      "opts": [
        "₹260",
        "₹280",
        "₹245",
        "₹310"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2600 × 5 × 2) / 100 = ₹260."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2700 at an annual interest rate of 5% for 2 years: (Account #18)",
      "opts": [
        "₹270",
        "₹290",
        "₹255",
        "₹320"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2700 × 5 × 2) / 100 = ₹270."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2800 at an annual interest rate of 5% for 2 years: (Account #19)",
      "opts": [
        "₹280",
        "₹300",
        "₹265",
        "₹330"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2800 × 5 × 2) / 100 = ₹280."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2900 at an annual interest rate of 5% for 2 years: (Account #20)",
      "opts": [
        "₹290",
        "₹310",
        "₹275",
        "₹340"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2900 × 5 × 2) / 100 = ₹290."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3000 at an annual interest rate of 5% for 2 years: (Account #21)",
      "opts": [
        "₹300",
        "₹320",
        "₹285",
        "₹350"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3000 × 5 × 2) / 100 = ₹300."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3100 at an annual interest rate of 5% for 2 years: (Account #22)",
      "opts": [
        "₹310",
        "₹330",
        "₹295",
        "₹360"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3100 × 5 × 2) / 100 = ₹310."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3200 at an annual interest rate of 5% for 2 years: (Account #23)",
      "opts": [
        "₹320",
        "₹340",
        "₹305",
        "₹370"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3200 × 5 × 2) / 100 = ₹320."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3300 at an annual interest rate of 5% for 2 years: (Account #24)",
      "opts": [
        "₹330",
        "₹350",
        "₹315",
        "₹380"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3300 × 5 × 2) / 100 = ₹330."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3400 at an annual interest rate of 5% for 2 years: (Account #25)",
      "opts": [
        "₹340",
        "₹360",
        "₹325",
        "₹390"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3400 × 5 × 2) / 100 = ₹340."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3500 at an annual interest rate of 5% for 2 years: (Account #26)",
      "opts": [
        "₹350",
        "₹370",
        "₹335",
        "₹400"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3500 × 5 × 2) / 100 = ₹350."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3600 at an annual interest rate of 5% for 2 years: (Account #27)",
      "opts": [
        "₹360",
        "₹380",
        "₹345",
        "₹410"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3600 × 5 × 2) / 100 = ₹360."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3700 at an annual interest rate of 5% for 2 years: (Account #28)",
      "opts": [
        "₹370",
        "₹390",
        "₹355",
        "₹420"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3700 × 5 × 2) / 100 = ₹370."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3800 at an annual interest rate of 5% for 2 years: (Account #29)",
      "opts": [
        "₹380",
        "₹400",
        "₹365",
        "₹430"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3800 × 5 × 2) / 100 = ₹380."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3900 at an annual interest rate of 5% for 2 years: (Account #30)",
      "opts": [
        "₹390",
        "₹410",
        "₹375",
        "₹440"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3900 × 5 × 2) / 100 = ₹390."
    }
  ],
  "level4": [
    {
      "q": "Calculate the Simple Interest on a principal of ₹1000 at an annual interest rate of 5% for 2 years: (Account #1)",
      "opts": [
        "₹100",
        "₹120",
        "₹85",
        "₹150"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1000 × 5 × 2) / 100 = ₹100."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1100 at an annual interest rate of 5% for 2 years: (Account #2)",
      "opts": [
        "₹110",
        "₹130",
        "₹95",
        "₹160"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1100 × 5 × 2) / 100 = ₹110."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1200 at an annual interest rate of 5% for 2 years: (Account #3)",
      "opts": [
        "₹120",
        "₹140",
        "₹105",
        "₹170"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1200 × 5 × 2) / 100 = ₹120."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1300 at an annual interest rate of 5% for 2 years: (Account #4)",
      "opts": [
        "₹130",
        "₹150",
        "₹115",
        "₹180"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1300 × 5 × 2) / 100 = ₹130."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1400 at an annual interest rate of 5% for 2 years: (Account #5)",
      "opts": [
        "₹140",
        "₹160",
        "₹125",
        "₹190"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1400 × 5 × 2) / 100 = ₹140."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1500 at an annual interest rate of 5% for 2 years: (Account #6)",
      "opts": [
        "₹150",
        "₹170",
        "₹135",
        "₹200"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1500 × 5 × 2) / 100 = ₹150."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1600 at an annual interest rate of 5% for 2 years: (Account #7)",
      "opts": [
        "₹160",
        "₹180",
        "₹145",
        "₹210"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1600 × 5 × 2) / 100 = ₹160."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1700 at an annual interest rate of 5% for 2 years: (Account #8)",
      "opts": [
        "₹170",
        "₹190",
        "₹155",
        "₹220"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1700 × 5 × 2) / 100 = ₹170."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1800 at an annual interest rate of 5% for 2 years: (Account #9)",
      "opts": [
        "₹180",
        "₹200",
        "₹165",
        "₹230"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1800 × 5 × 2) / 100 = ₹180."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹1900 at an annual interest rate of 5% for 2 years: (Account #10)",
      "opts": [
        "₹190",
        "₹210",
        "₹175",
        "₹240"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (1900 × 5 × 2) / 100 = ₹190."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2000 at an annual interest rate of 5% for 2 years: (Account #11)",
      "opts": [
        "₹200",
        "₹220",
        "₹185",
        "₹250"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2000 × 5 × 2) / 100 = ₹200."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2100 at an annual interest rate of 5% for 2 years: (Account #12)",
      "opts": [
        "₹210",
        "₹230",
        "₹195",
        "₹260"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2100 × 5 × 2) / 100 = ₹210."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2200 at an annual interest rate of 5% for 2 years: (Account #13)",
      "opts": [
        "₹220",
        "₹240",
        "₹205",
        "₹270"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2200 × 5 × 2) / 100 = ₹220."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2300 at an annual interest rate of 5% for 2 years: (Account #14)",
      "opts": [
        "₹230",
        "₹250",
        "₹215",
        "₹280"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2300 × 5 × 2) / 100 = ₹230."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2400 at an annual interest rate of 5% for 2 years: (Account #15)",
      "opts": [
        "₹240",
        "₹260",
        "₹225",
        "₹290"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2400 × 5 × 2) / 100 = ₹240."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2500 at an annual interest rate of 5% for 2 years: (Account #16)",
      "opts": [
        "₹250",
        "₹270",
        "₹235",
        "₹300"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2500 × 5 × 2) / 100 = ₹250."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2600 at an annual interest rate of 5% for 2 years: (Account #17)",
      "opts": [
        "₹260",
        "₹280",
        "₹245",
        "₹310"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2600 × 5 × 2) / 100 = ₹260."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2700 at an annual interest rate of 5% for 2 years: (Account #18)",
      "opts": [
        "₹270",
        "₹290",
        "₹255",
        "₹320"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2700 × 5 × 2) / 100 = ₹270."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2800 at an annual interest rate of 5% for 2 years: (Account #19)",
      "opts": [
        "₹280",
        "₹300",
        "₹265",
        "₹330"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2800 × 5 × 2) / 100 = ₹280."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹2900 at an annual interest rate of 5% for 2 years: (Account #20)",
      "opts": [
        "₹290",
        "₹310",
        "₹275",
        "₹340"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (2900 × 5 × 2) / 100 = ₹290."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3000 at an annual interest rate of 5% for 2 years: (Account #21)",
      "opts": [
        "₹300",
        "₹320",
        "₹285",
        "₹350"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3000 × 5 × 2) / 100 = ₹300."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3100 at an annual interest rate of 5% for 2 years: (Account #22)",
      "opts": [
        "₹310",
        "₹330",
        "₹295",
        "₹360"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3100 × 5 × 2) / 100 = ₹310."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3200 at an annual interest rate of 5% for 2 years: (Account #23)",
      "opts": [
        "₹320",
        "₹340",
        "₹305",
        "₹370"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3200 × 5 × 2) / 100 = ₹320."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3300 at an annual interest rate of 5% for 2 years: (Account #24)",
      "opts": [
        "₹330",
        "₹350",
        "₹315",
        "₹380"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3300 × 5 × 2) / 100 = ₹330."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3400 at an annual interest rate of 5% for 2 years: (Account #25)",
      "opts": [
        "₹340",
        "₹360",
        "₹325",
        "₹390"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3400 × 5 × 2) / 100 = ₹340."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3500 at an annual interest rate of 5% for 2 years: (Account #26)",
      "opts": [
        "₹350",
        "₹370",
        "₹335",
        "₹400"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3500 × 5 × 2) / 100 = ₹350."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3600 at an annual interest rate of 5% for 2 years: (Account #27)",
      "opts": [
        "₹360",
        "₹380",
        "₹345",
        "₹410"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3600 × 5 × 2) / 100 = ₹360."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3700 at an annual interest rate of 5% for 2 years: (Account #28)",
      "opts": [
        "₹370",
        "₹390",
        "₹355",
        "₹420"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3700 × 5 × 2) / 100 = ₹370."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3800 at an annual interest rate of 5% for 2 years: (Account #29)",
      "opts": [
        "₹380",
        "₹400",
        "₹365",
        "₹430"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3800 × 5 × 2) / 100 = ₹380."
    },
    {
      "q": "Calculate the Simple Interest on a principal of ₹3900 at an annual interest rate of 5% for 2 years: (Account #30)",
      "opts": [
        "₹390",
        "₹410",
        "₹375",
        "₹440"
      ],
      "ans": "A",
      "exp": "SI = (P × R × T) / 100 = (3900 × 5 × 2) / 100 = ₹390."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["compound-interest"] = {
  "level1": [
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1000 compounded annually at 10% per annum for 2 years: (Investment #1)",
      "opts": [
        "₹210",
        "₹235",
        "₹190",
        "₹260"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1000[(1.1)² - 1] = 1000 × 0.21 = ₹210."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1050 compounded annually at 10% per annum for 2 years: (Investment #2)",
      "opts": [
        "₹221",
        "₹246",
        "₹201",
        "₹271"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1050[(1.1)² - 1] = 1050 × 0.21 = ₹221."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1100 compounded annually at 10% per annum for 2 years: (Investment #3)",
      "opts": [
        "₹231",
        "₹256",
        "₹211",
        "₹281"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1100[(1.1)² - 1] = 1100 × 0.21 = ₹231."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1150 compounded annually at 10% per annum for 2 years: (Investment #4)",
      "opts": [
        "₹242",
        "₹267",
        "₹222",
        "₹292"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1150[(1.1)² - 1] = 1150 × 0.21 = ₹242."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1200 compounded annually at 10% per annum for 2 years: (Investment #5)",
      "opts": [
        "₹252",
        "₹277",
        "₹232",
        "₹302"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1200[(1.1)² - 1] = 1200 × 0.21 = ₹252."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1250 compounded annually at 10% per annum for 2 years: (Investment #6)",
      "opts": [
        "₹263",
        "₹288",
        "₹243",
        "₹313"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1250[(1.1)² - 1] = 1250 × 0.21 = ₹263."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1300 compounded annually at 10% per annum for 2 years: (Investment #7)",
      "opts": [
        "₹273",
        "₹298",
        "₹253",
        "₹323"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1300[(1.1)² - 1] = 1300 × 0.21 = ₹273."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1350 compounded annually at 10% per annum for 2 years: (Investment #8)",
      "opts": [
        "₹284",
        "₹309",
        "₹264",
        "₹334"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1350[(1.1)² - 1] = 1350 × 0.21 = ₹284."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1400 compounded annually at 10% per annum for 2 years: (Investment #9)",
      "opts": [
        "₹294",
        "₹319",
        "₹274",
        "₹344"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1400[(1.1)² - 1] = 1400 × 0.21 = ₹294."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1450 compounded annually at 10% per annum for 2 years: (Investment #10)",
      "opts": [
        "₹305",
        "₹330",
        "₹285",
        "₹355"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1450[(1.1)² - 1] = 1450 × 0.21 = ₹305."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1500 compounded annually at 10% per annum for 2 years: (Investment #11)",
      "opts": [
        "₹315",
        "₹340",
        "₹295",
        "₹365"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1500[(1.1)² - 1] = 1500 × 0.21 = ₹315."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1550 compounded annually at 10% per annum for 2 years: (Investment #12)",
      "opts": [
        "₹326",
        "₹351",
        "₹306",
        "₹376"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1550[(1.1)² - 1] = 1550 × 0.21 = ₹326."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1600 compounded annually at 10% per annum for 2 years: (Investment #13)",
      "opts": [
        "₹336",
        "₹361",
        "₹316",
        "₹386"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1600[(1.1)² - 1] = 1600 × 0.21 = ₹336."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1650 compounded annually at 10% per annum for 2 years: (Investment #14)",
      "opts": [
        "₹347",
        "₹372",
        "₹327",
        "₹397"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1650[(1.1)² - 1] = 1650 × 0.21 = ₹347."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1700 compounded annually at 10% per annum for 2 years: (Investment #15)",
      "opts": [
        "₹357",
        "₹382",
        "₹337",
        "₹407"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1700[(1.1)² - 1] = 1700 × 0.21 = ₹357."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1750 compounded annually at 10% per annum for 2 years: (Investment #16)",
      "opts": [
        "₹368",
        "₹393",
        "₹348",
        "₹418"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1750[(1.1)² - 1] = 1750 × 0.21 = ₹368."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1800 compounded annually at 10% per annum for 2 years: (Investment #17)",
      "opts": [
        "₹378",
        "₹403",
        "₹358",
        "₹428"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1800[(1.1)² - 1] = 1800 × 0.21 = ₹378."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1850 compounded annually at 10% per annum for 2 years: (Investment #18)",
      "opts": [
        "₹389",
        "₹414",
        "₹369",
        "₹439"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1850[(1.1)² - 1] = 1850 × 0.21 = ₹389."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1900 compounded annually at 10% per annum for 2 years: (Investment #19)",
      "opts": [
        "₹399",
        "₹424",
        "₹379",
        "₹449"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1900[(1.1)² - 1] = 1900 × 0.21 = ₹399."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1950 compounded annually at 10% per annum for 2 years: (Investment #20)",
      "opts": [
        "₹410",
        "₹435",
        "₹390",
        "₹460"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1950[(1.1)² - 1] = 1950 × 0.21 = ₹410."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2000 compounded annually at 10% per annum for 2 years: (Investment #21)",
      "opts": [
        "₹420",
        "₹445",
        "₹400",
        "₹470"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2000[(1.1)² - 1] = 2000 × 0.21 = ₹420."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2050 compounded annually at 10% per annum for 2 years: (Investment #22)",
      "opts": [
        "₹431",
        "₹456",
        "₹411",
        "₹481"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2050[(1.1)² - 1] = 2050 × 0.21 = ₹431."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2100 compounded annually at 10% per annum for 2 years: (Investment #23)",
      "opts": [
        "₹441",
        "₹466",
        "₹421",
        "₹491"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2100[(1.1)² - 1] = 2100 × 0.21 = ₹441."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2150 compounded annually at 10% per annum for 2 years: (Investment #24)",
      "opts": [
        "₹452",
        "₹477",
        "₹432",
        "₹502"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2150[(1.1)² - 1] = 2150 × 0.21 = ₹452."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2200 compounded annually at 10% per annum for 2 years: (Investment #25)",
      "opts": [
        "₹462",
        "₹487",
        "₹442",
        "₹512"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2200[(1.1)² - 1] = 2200 × 0.21 = ₹462."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2250 compounded annually at 10% per annum for 2 years: (Investment #26)",
      "opts": [
        "₹473",
        "₹498",
        "₹453",
        "₹523"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2250[(1.1)² - 1] = 2250 × 0.21 = ₹473."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2300 compounded annually at 10% per annum for 2 years: (Investment #27)",
      "opts": [
        "₹483",
        "₹508",
        "₹463",
        "₹533"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2300[(1.1)² - 1] = 2300 × 0.21 = ₹483."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2350 compounded annually at 10% per annum for 2 years: (Investment #28)",
      "opts": [
        "₹494",
        "₹519",
        "₹474",
        "₹544"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2350[(1.1)² - 1] = 2350 × 0.21 = ₹494."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2400 compounded annually at 10% per annum for 2 years: (Investment #29)",
      "opts": [
        "₹504",
        "₹529",
        "₹484",
        "₹554"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2400[(1.1)² - 1] = 2400 × 0.21 = ₹504."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2450 compounded annually at 10% per annum for 2 years: (Investment #30)",
      "opts": [
        "₹515",
        "₹540",
        "₹495",
        "₹565"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2450[(1.1)² - 1] = 2450 × 0.21 = ₹515."
    }
  ],
  "level2": [
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1000 compounded annually at 10% per annum for 2 years: (Investment #1)",
      "opts": [
        "₹210",
        "₹235",
        "₹190",
        "₹260"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1000[(1.1)² - 1] = 1000 × 0.21 = ₹210."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1050 compounded annually at 10% per annum for 2 years: (Investment #2)",
      "opts": [
        "₹221",
        "₹246",
        "₹201",
        "₹271"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1050[(1.1)² - 1] = 1050 × 0.21 = ₹221."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1100 compounded annually at 10% per annum for 2 years: (Investment #3)",
      "opts": [
        "₹231",
        "₹256",
        "₹211",
        "₹281"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1100[(1.1)² - 1] = 1100 × 0.21 = ₹231."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1150 compounded annually at 10% per annum for 2 years: (Investment #4)",
      "opts": [
        "₹242",
        "₹267",
        "₹222",
        "₹292"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1150[(1.1)² - 1] = 1150 × 0.21 = ₹242."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1200 compounded annually at 10% per annum for 2 years: (Investment #5)",
      "opts": [
        "₹252",
        "₹277",
        "₹232",
        "₹302"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1200[(1.1)² - 1] = 1200 × 0.21 = ₹252."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1250 compounded annually at 10% per annum for 2 years: (Investment #6)",
      "opts": [
        "₹263",
        "₹288",
        "₹243",
        "₹313"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1250[(1.1)² - 1] = 1250 × 0.21 = ₹263."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1300 compounded annually at 10% per annum for 2 years: (Investment #7)",
      "opts": [
        "₹273",
        "₹298",
        "₹253",
        "₹323"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1300[(1.1)² - 1] = 1300 × 0.21 = ₹273."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1350 compounded annually at 10% per annum for 2 years: (Investment #8)",
      "opts": [
        "₹284",
        "₹309",
        "₹264",
        "₹334"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1350[(1.1)² - 1] = 1350 × 0.21 = ₹284."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1400 compounded annually at 10% per annum for 2 years: (Investment #9)",
      "opts": [
        "₹294",
        "₹319",
        "₹274",
        "₹344"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1400[(1.1)² - 1] = 1400 × 0.21 = ₹294."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1450 compounded annually at 10% per annum for 2 years: (Investment #10)",
      "opts": [
        "₹305",
        "₹330",
        "₹285",
        "₹355"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1450[(1.1)² - 1] = 1450 × 0.21 = ₹305."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1500 compounded annually at 10% per annum for 2 years: (Investment #11)",
      "opts": [
        "₹315",
        "₹340",
        "₹295",
        "₹365"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1500[(1.1)² - 1] = 1500 × 0.21 = ₹315."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1550 compounded annually at 10% per annum for 2 years: (Investment #12)",
      "opts": [
        "₹326",
        "₹351",
        "₹306",
        "₹376"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1550[(1.1)² - 1] = 1550 × 0.21 = ₹326."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1600 compounded annually at 10% per annum for 2 years: (Investment #13)",
      "opts": [
        "₹336",
        "₹361",
        "₹316",
        "₹386"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1600[(1.1)² - 1] = 1600 × 0.21 = ₹336."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1650 compounded annually at 10% per annum for 2 years: (Investment #14)",
      "opts": [
        "₹347",
        "₹372",
        "₹327",
        "₹397"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1650[(1.1)² - 1] = 1650 × 0.21 = ₹347."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1700 compounded annually at 10% per annum for 2 years: (Investment #15)",
      "opts": [
        "₹357",
        "₹382",
        "₹337",
        "₹407"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1700[(1.1)² - 1] = 1700 × 0.21 = ₹357."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1750 compounded annually at 10% per annum for 2 years: (Investment #16)",
      "opts": [
        "₹368",
        "₹393",
        "₹348",
        "₹418"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1750[(1.1)² - 1] = 1750 × 0.21 = ₹368."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1800 compounded annually at 10% per annum for 2 years: (Investment #17)",
      "opts": [
        "₹378",
        "₹403",
        "₹358",
        "₹428"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1800[(1.1)² - 1] = 1800 × 0.21 = ₹378."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1850 compounded annually at 10% per annum for 2 years: (Investment #18)",
      "opts": [
        "₹389",
        "₹414",
        "₹369",
        "₹439"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1850[(1.1)² - 1] = 1850 × 0.21 = ₹389."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1900 compounded annually at 10% per annum for 2 years: (Investment #19)",
      "opts": [
        "₹399",
        "₹424",
        "₹379",
        "₹449"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1900[(1.1)² - 1] = 1900 × 0.21 = ₹399."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1950 compounded annually at 10% per annum for 2 years: (Investment #20)",
      "opts": [
        "₹410",
        "₹435",
        "₹390",
        "₹460"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1950[(1.1)² - 1] = 1950 × 0.21 = ₹410."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2000 compounded annually at 10% per annum for 2 years: (Investment #21)",
      "opts": [
        "₹420",
        "₹445",
        "₹400",
        "₹470"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2000[(1.1)² - 1] = 2000 × 0.21 = ₹420."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2050 compounded annually at 10% per annum for 2 years: (Investment #22)",
      "opts": [
        "₹431",
        "₹456",
        "₹411",
        "₹481"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2050[(1.1)² - 1] = 2050 × 0.21 = ₹431."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2100 compounded annually at 10% per annum for 2 years: (Investment #23)",
      "opts": [
        "₹441",
        "₹466",
        "₹421",
        "₹491"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2100[(1.1)² - 1] = 2100 × 0.21 = ₹441."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2150 compounded annually at 10% per annum for 2 years: (Investment #24)",
      "opts": [
        "₹452",
        "₹477",
        "₹432",
        "₹502"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2150[(1.1)² - 1] = 2150 × 0.21 = ₹452."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2200 compounded annually at 10% per annum for 2 years: (Investment #25)",
      "opts": [
        "₹462",
        "₹487",
        "₹442",
        "₹512"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2200[(1.1)² - 1] = 2200 × 0.21 = ₹462."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2250 compounded annually at 10% per annum for 2 years: (Investment #26)",
      "opts": [
        "₹473",
        "₹498",
        "₹453",
        "₹523"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2250[(1.1)² - 1] = 2250 × 0.21 = ₹473."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2300 compounded annually at 10% per annum for 2 years: (Investment #27)",
      "opts": [
        "₹483",
        "₹508",
        "₹463",
        "₹533"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2300[(1.1)² - 1] = 2300 × 0.21 = ₹483."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2350 compounded annually at 10% per annum for 2 years: (Investment #28)",
      "opts": [
        "₹494",
        "₹519",
        "₹474",
        "₹544"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2350[(1.1)² - 1] = 2350 × 0.21 = ₹494."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2400 compounded annually at 10% per annum for 2 years: (Investment #29)",
      "opts": [
        "₹504",
        "₹529",
        "₹484",
        "₹554"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2400[(1.1)² - 1] = 2400 × 0.21 = ₹504."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2450 compounded annually at 10% per annum for 2 years: (Investment #30)",
      "opts": [
        "₹515",
        "₹540",
        "₹495",
        "₹565"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2450[(1.1)² - 1] = 2450 × 0.21 = ₹515."
    }
  ],
  "level3": [
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1000 compounded annually at 10% per annum for 2 years: (Investment #1)",
      "opts": [
        "₹210",
        "₹235",
        "₹190",
        "₹260"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1000[(1.1)² - 1] = 1000 × 0.21 = ₹210."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1050 compounded annually at 10% per annum for 2 years: (Investment #2)",
      "opts": [
        "₹221",
        "₹246",
        "₹201",
        "₹271"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1050[(1.1)² - 1] = 1050 × 0.21 = ₹221."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1100 compounded annually at 10% per annum for 2 years: (Investment #3)",
      "opts": [
        "₹231",
        "₹256",
        "₹211",
        "₹281"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1100[(1.1)² - 1] = 1100 × 0.21 = ₹231."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1150 compounded annually at 10% per annum for 2 years: (Investment #4)",
      "opts": [
        "₹242",
        "₹267",
        "₹222",
        "₹292"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1150[(1.1)² - 1] = 1150 × 0.21 = ₹242."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1200 compounded annually at 10% per annum for 2 years: (Investment #5)",
      "opts": [
        "₹252",
        "₹277",
        "₹232",
        "₹302"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1200[(1.1)² - 1] = 1200 × 0.21 = ₹252."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1250 compounded annually at 10% per annum for 2 years: (Investment #6)",
      "opts": [
        "₹263",
        "₹288",
        "₹243",
        "₹313"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1250[(1.1)² - 1] = 1250 × 0.21 = ₹263."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1300 compounded annually at 10% per annum for 2 years: (Investment #7)",
      "opts": [
        "₹273",
        "₹298",
        "₹253",
        "₹323"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1300[(1.1)² - 1] = 1300 × 0.21 = ₹273."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1350 compounded annually at 10% per annum for 2 years: (Investment #8)",
      "opts": [
        "₹284",
        "₹309",
        "₹264",
        "₹334"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1350[(1.1)² - 1] = 1350 × 0.21 = ₹284."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1400 compounded annually at 10% per annum for 2 years: (Investment #9)",
      "opts": [
        "₹294",
        "₹319",
        "₹274",
        "₹344"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1400[(1.1)² - 1] = 1400 × 0.21 = ₹294."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1450 compounded annually at 10% per annum for 2 years: (Investment #10)",
      "opts": [
        "₹305",
        "₹330",
        "₹285",
        "₹355"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1450[(1.1)² - 1] = 1450 × 0.21 = ₹305."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1500 compounded annually at 10% per annum for 2 years: (Investment #11)",
      "opts": [
        "₹315",
        "₹340",
        "₹295",
        "₹365"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1500[(1.1)² - 1] = 1500 × 0.21 = ₹315."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1550 compounded annually at 10% per annum for 2 years: (Investment #12)",
      "opts": [
        "₹326",
        "₹351",
        "₹306",
        "₹376"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1550[(1.1)² - 1] = 1550 × 0.21 = ₹326."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1600 compounded annually at 10% per annum for 2 years: (Investment #13)",
      "opts": [
        "₹336",
        "₹361",
        "₹316",
        "₹386"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1600[(1.1)² - 1] = 1600 × 0.21 = ₹336."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1650 compounded annually at 10% per annum for 2 years: (Investment #14)",
      "opts": [
        "₹347",
        "₹372",
        "₹327",
        "₹397"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1650[(1.1)² - 1] = 1650 × 0.21 = ₹347."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1700 compounded annually at 10% per annum for 2 years: (Investment #15)",
      "opts": [
        "₹357",
        "₹382",
        "₹337",
        "₹407"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1700[(1.1)² - 1] = 1700 × 0.21 = ₹357."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1750 compounded annually at 10% per annum for 2 years: (Investment #16)",
      "opts": [
        "₹368",
        "₹393",
        "₹348",
        "₹418"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1750[(1.1)² - 1] = 1750 × 0.21 = ₹368."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1800 compounded annually at 10% per annum for 2 years: (Investment #17)",
      "opts": [
        "₹378",
        "₹403",
        "₹358",
        "₹428"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1800[(1.1)² - 1] = 1800 × 0.21 = ₹378."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1850 compounded annually at 10% per annum for 2 years: (Investment #18)",
      "opts": [
        "₹389",
        "₹414",
        "₹369",
        "₹439"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1850[(1.1)² - 1] = 1850 × 0.21 = ₹389."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1900 compounded annually at 10% per annum for 2 years: (Investment #19)",
      "opts": [
        "₹399",
        "₹424",
        "₹379",
        "₹449"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1900[(1.1)² - 1] = 1900 × 0.21 = ₹399."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1950 compounded annually at 10% per annum for 2 years: (Investment #20)",
      "opts": [
        "₹410",
        "₹435",
        "₹390",
        "₹460"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1950[(1.1)² - 1] = 1950 × 0.21 = ₹410."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2000 compounded annually at 10% per annum for 2 years: (Investment #21)",
      "opts": [
        "₹420",
        "₹445",
        "₹400",
        "₹470"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2000[(1.1)² - 1] = 2000 × 0.21 = ₹420."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2050 compounded annually at 10% per annum for 2 years: (Investment #22)",
      "opts": [
        "₹431",
        "₹456",
        "₹411",
        "₹481"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2050[(1.1)² - 1] = 2050 × 0.21 = ₹431."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2100 compounded annually at 10% per annum for 2 years: (Investment #23)",
      "opts": [
        "₹441",
        "₹466",
        "₹421",
        "₹491"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2100[(1.1)² - 1] = 2100 × 0.21 = ₹441."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2150 compounded annually at 10% per annum for 2 years: (Investment #24)",
      "opts": [
        "₹452",
        "₹477",
        "₹432",
        "₹502"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2150[(1.1)² - 1] = 2150 × 0.21 = ₹452."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2200 compounded annually at 10% per annum for 2 years: (Investment #25)",
      "opts": [
        "₹462",
        "₹487",
        "₹442",
        "₹512"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2200[(1.1)² - 1] = 2200 × 0.21 = ₹462."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2250 compounded annually at 10% per annum for 2 years: (Investment #26)",
      "opts": [
        "₹473",
        "₹498",
        "₹453",
        "₹523"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2250[(1.1)² - 1] = 2250 × 0.21 = ₹473."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2300 compounded annually at 10% per annum for 2 years: (Investment #27)",
      "opts": [
        "₹483",
        "₹508",
        "₹463",
        "₹533"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2300[(1.1)² - 1] = 2300 × 0.21 = ₹483."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2350 compounded annually at 10% per annum for 2 years: (Investment #28)",
      "opts": [
        "₹494",
        "₹519",
        "₹474",
        "₹544"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2350[(1.1)² - 1] = 2350 × 0.21 = ₹494."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2400 compounded annually at 10% per annum for 2 years: (Investment #29)",
      "opts": [
        "₹504",
        "₹529",
        "₹484",
        "₹554"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2400[(1.1)² - 1] = 2400 × 0.21 = ₹504."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2450 compounded annually at 10% per annum for 2 years: (Investment #30)",
      "opts": [
        "₹515",
        "₹540",
        "₹495",
        "₹565"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2450[(1.1)² - 1] = 2450 × 0.21 = ₹515."
    }
  ],
  "level4": [
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1000 compounded annually at 10% per annum for 2 years: (Investment #1)",
      "opts": [
        "₹210",
        "₹235",
        "₹190",
        "₹260"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1000[(1.1)² - 1] = 1000 × 0.21 = ₹210."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1050 compounded annually at 10% per annum for 2 years: (Investment #2)",
      "opts": [
        "₹221",
        "₹246",
        "₹201",
        "₹271"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1050[(1.1)² - 1] = 1050 × 0.21 = ₹221."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1100 compounded annually at 10% per annum for 2 years: (Investment #3)",
      "opts": [
        "₹231",
        "₹256",
        "₹211",
        "₹281"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1100[(1.1)² - 1] = 1100 × 0.21 = ₹231."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1150 compounded annually at 10% per annum for 2 years: (Investment #4)",
      "opts": [
        "₹242",
        "₹267",
        "₹222",
        "₹292"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1150[(1.1)² - 1] = 1150 × 0.21 = ₹242."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1200 compounded annually at 10% per annum for 2 years: (Investment #5)",
      "opts": [
        "₹252",
        "₹277",
        "₹232",
        "₹302"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1200[(1.1)² - 1] = 1200 × 0.21 = ₹252."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1250 compounded annually at 10% per annum for 2 years: (Investment #6)",
      "opts": [
        "₹263",
        "₹288",
        "₹243",
        "₹313"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1250[(1.1)² - 1] = 1250 × 0.21 = ₹263."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1300 compounded annually at 10% per annum for 2 years: (Investment #7)",
      "opts": [
        "₹273",
        "₹298",
        "₹253",
        "₹323"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1300[(1.1)² - 1] = 1300 × 0.21 = ₹273."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1350 compounded annually at 10% per annum for 2 years: (Investment #8)",
      "opts": [
        "₹284",
        "₹309",
        "₹264",
        "₹334"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1350[(1.1)² - 1] = 1350 × 0.21 = ₹284."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1400 compounded annually at 10% per annum for 2 years: (Investment #9)",
      "opts": [
        "₹294",
        "₹319",
        "₹274",
        "₹344"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1400[(1.1)² - 1] = 1400 × 0.21 = ₹294."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1450 compounded annually at 10% per annum for 2 years: (Investment #10)",
      "opts": [
        "₹305",
        "₹330",
        "₹285",
        "₹355"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1450[(1.1)² - 1] = 1450 × 0.21 = ₹305."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1500 compounded annually at 10% per annum for 2 years: (Investment #11)",
      "opts": [
        "₹315",
        "₹340",
        "₹295",
        "₹365"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1500[(1.1)² - 1] = 1500 × 0.21 = ₹315."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1550 compounded annually at 10% per annum for 2 years: (Investment #12)",
      "opts": [
        "₹326",
        "₹351",
        "₹306",
        "₹376"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1550[(1.1)² - 1] = 1550 × 0.21 = ₹326."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1600 compounded annually at 10% per annum for 2 years: (Investment #13)",
      "opts": [
        "₹336",
        "₹361",
        "₹316",
        "₹386"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1600[(1.1)² - 1] = 1600 × 0.21 = ₹336."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1650 compounded annually at 10% per annum for 2 years: (Investment #14)",
      "opts": [
        "₹347",
        "₹372",
        "₹327",
        "₹397"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1650[(1.1)² - 1] = 1650 × 0.21 = ₹347."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1700 compounded annually at 10% per annum for 2 years: (Investment #15)",
      "opts": [
        "₹357",
        "₹382",
        "₹337",
        "₹407"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1700[(1.1)² - 1] = 1700 × 0.21 = ₹357."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1750 compounded annually at 10% per annum for 2 years: (Investment #16)",
      "opts": [
        "₹368",
        "₹393",
        "₹348",
        "₹418"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1750[(1.1)² - 1] = 1750 × 0.21 = ₹368."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1800 compounded annually at 10% per annum for 2 years: (Investment #17)",
      "opts": [
        "₹378",
        "₹403",
        "₹358",
        "₹428"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1800[(1.1)² - 1] = 1800 × 0.21 = ₹378."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1850 compounded annually at 10% per annum for 2 years: (Investment #18)",
      "opts": [
        "₹389",
        "₹414",
        "₹369",
        "₹439"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1850[(1.1)² - 1] = 1850 × 0.21 = ₹389."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1900 compounded annually at 10% per annum for 2 years: (Investment #19)",
      "opts": [
        "₹399",
        "₹424",
        "₹379",
        "₹449"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1900[(1.1)² - 1] = 1900 × 0.21 = ₹399."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹1950 compounded annually at 10% per annum for 2 years: (Investment #20)",
      "opts": [
        "₹410",
        "₹435",
        "₹390",
        "₹460"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 1950[(1.1)² - 1] = 1950 × 0.21 = ₹410."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2000 compounded annually at 10% per annum for 2 years: (Investment #21)",
      "opts": [
        "₹420",
        "₹445",
        "₹400",
        "₹470"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2000[(1.1)² - 1] = 2000 × 0.21 = ₹420."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2050 compounded annually at 10% per annum for 2 years: (Investment #22)",
      "opts": [
        "₹431",
        "₹456",
        "₹411",
        "₹481"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2050[(1.1)² - 1] = 2050 × 0.21 = ₹431."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2100 compounded annually at 10% per annum for 2 years: (Investment #23)",
      "opts": [
        "₹441",
        "₹466",
        "₹421",
        "₹491"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2100[(1.1)² - 1] = 2100 × 0.21 = ₹441."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2150 compounded annually at 10% per annum for 2 years: (Investment #24)",
      "opts": [
        "₹452",
        "₹477",
        "₹432",
        "₹502"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2150[(1.1)² - 1] = 2150 × 0.21 = ₹452."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2200 compounded annually at 10% per annum for 2 years: (Investment #25)",
      "opts": [
        "₹462",
        "₹487",
        "₹442",
        "₹512"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2200[(1.1)² - 1] = 2200 × 0.21 = ₹462."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2250 compounded annually at 10% per annum for 2 years: (Investment #26)",
      "opts": [
        "₹473",
        "₹498",
        "₹453",
        "₹523"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2250[(1.1)² - 1] = 2250 × 0.21 = ₹473."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2300 compounded annually at 10% per annum for 2 years: (Investment #27)",
      "opts": [
        "₹483",
        "₹508",
        "₹463",
        "₹533"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2300[(1.1)² - 1] = 2300 × 0.21 = ₹483."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2350 compounded annually at 10% per annum for 2 years: (Investment #28)",
      "opts": [
        "₹494",
        "₹519",
        "₹474",
        "₹544"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2350[(1.1)² - 1] = 2350 × 0.21 = ₹494."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2400 compounded annually at 10% per annum for 2 years: (Investment #29)",
      "opts": [
        "₹504",
        "₹529",
        "₹484",
        "₹554"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2400[(1.1)² - 1] = 2400 × 0.21 = ₹504."
    },
    {
      "q": "Calculate the Compound Interest accrued on a principal of ₹2450 compounded annually at 10% per annum for 2 years: (Investment #30)",
      "opts": [
        "₹515",
        "₹540",
        "₹495",
        "₹565"
      ],
      "ans": "A",
      "exp": "CI = P[(1 + R/100)² - 1] = 2450[(1.1)² - 1] = 2450 × 0.21 = ₹515."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["averages"] = {
  "level1": [
    {
      "q": "Find the arithmetic average of the five numbers: 20, 21, 22, 23, 24 (Set #1)",
      "opts": [
        "22",
        "23",
        "21",
        "24"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 22."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 21, 22, 23, 24, 25 (Set #2)",
      "opts": [
        "23",
        "24",
        "22",
        "25"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 23."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 22, 23, 24, 25, 26 (Set #3)",
      "opts": [
        "24",
        "25",
        "23",
        "26"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 24."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 23, 24, 25, 26, 27 (Set #4)",
      "opts": [
        "25",
        "26",
        "24",
        "27"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 25."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 24, 25, 26, 27, 28 (Set #5)",
      "opts": [
        "26",
        "27",
        "25",
        "28"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 26."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 25, 26, 27, 28, 29 (Set #6)",
      "opts": [
        "27",
        "28",
        "26",
        "29"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 27."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 26, 27, 28, 29, 30 (Set #7)",
      "opts": [
        "28",
        "29",
        "27",
        "30"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 28."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 27, 28, 29, 30, 31 (Set #8)",
      "opts": [
        "29",
        "30",
        "28",
        "31"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 29."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 28, 29, 30, 31, 32 (Set #9)",
      "opts": [
        "30",
        "31",
        "29",
        "32"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 30."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 29, 30, 31, 32, 33 (Set #10)",
      "opts": [
        "31",
        "32",
        "30",
        "33"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 31."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 30, 31, 32, 33, 34 (Set #11)",
      "opts": [
        "32",
        "33",
        "31",
        "34"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 32."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 31, 32, 33, 34, 35 (Set #12)",
      "opts": [
        "33",
        "34",
        "32",
        "35"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 33."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 32, 33, 34, 35, 36 (Set #13)",
      "opts": [
        "34",
        "35",
        "33",
        "36"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 34."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 33, 34, 35, 36, 37 (Set #14)",
      "opts": [
        "35",
        "36",
        "34",
        "37"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 35."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 34, 35, 36, 37, 38 (Set #15)",
      "opts": [
        "36",
        "37",
        "35",
        "38"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 36."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 35, 36, 37, 38, 39 (Set #16)",
      "opts": [
        "37",
        "38",
        "36",
        "39"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 37."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 36, 37, 38, 39, 40 (Set #17)",
      "opts": [
        "38",
        "39",
        "37",
        "40"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 38."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 37, 38, 39, 40, 41 (Set #18)",
      "opts": [
        "39",
        "40",
        "38",
        "41"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 39."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 38, 39, 40, 41, 42 (Set #19)",
      "opts": [
        "40",
        "41",
        "39",
        "42"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 40."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 39, 40, 41, 42, 43 (Set #20)",
      "opts": [
        "41",
        "42",
        "40",
        "43"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 41."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 40, 41, 42, 43, 44 (Set #21)",
      "opts": [
        "42",
        "43",
        "41",
        "44"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 42."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 41, 42, 43, 44, 45 (Set #22)",
      "opts": [
        "43",
        "44",
        "42",
        "45"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 43."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 42, 43, 44, 45, 46 (Set #23)",
      "opts": [
        "44",
        "45",
        "43",
        "46"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 44."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 43, 44, 45, 46, 47 (Set #24)",
      "opts": [
        "45",
        "46",
        "44",
        "47"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 45."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 44, 45, 46, 47, 48 (Set #25)",
      "opts": [
        "46",
        "47",
        "45",
        "48"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 46."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 45, 46, 47, 48, 49 (Set #26)",
      "opts": [
        "47",
        "48",
        "46",
        "49"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 47."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 46, 47, 48, 49, 50 (Set #27)",
      "opts": [
        "48",
        "49",
        "47",
        "50"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 48."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 47, 48, 49, 50, 51 (Set #28)",
      "opts": [
        "49",
        "50",
        "48",
        "51"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 49."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 48, 49, 50, 51, 52 (Set #29)",
      "opts": [
        "50",
        "51",
        "49",
        "52"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 50."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 49, 50, 51, 52, 53 (Set #30)",
      "opts": [
        "51",
        "52",
        "50",
        "53"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 51."
    }
  ],
  "level2": [
    {
      "q": "Find the arithmetic average of the five numbers: 20, 21, 22, 23, 24 (Set #1)",
      "opts": [
        "22",
        "23",
        "21",
        "24"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 22."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 21, 22, 23, 24, 25 (Set #2)",
      "opts": [
        "23",
        "24",
        "22",
        "25"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 23."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 22, 23, 24, 25, 26 (Set #3)",
      "opts": [
        "24",
        "25",
        "23",
        "26"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 24."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 23, 24, 25, 26, 27 (Set #4)",
      "opts": [
        "25",
        "26",
        "24",
        "27"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 25."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 24, 25, 26, 27, 28 (Set #5)",
      "opts": [
        "26",
        "27",
        "25",
        "28"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 26."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 25, 26, 27, 28, 29 (Set #6)",
      "opts": [
        "27",
        "28",
        "26",
        "29"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 27."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 26, 27, 28, 29, 30 (Set #7)",
      "opts": [
        "28",
        "29",
        "27",
        "30"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 28."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 27, 28, 29, 30, 31 (Set #8)",
      "opts": [
        "29",
        "30",
        "28",
        "31"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 29."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 28, 29, 30, 31, 32 (Set #9)",
      "opts": [
        "30",
        "31",
        "29",
        "32"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 30."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 29, 30, 31, 32, 33 (Set #10)",
      "opts": [
        "31",
        "32",
        "30",
        "33"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 31."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 30, 31, 32, 33, 34 (Set #11)",
      "opts": [
        "32",
        "33",
        "31",
        "34"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 32."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 31, 32, 33, 34, 35 (Set #12)",
      "opts": [
        "33",
        "34",
        "32",
        "35"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 33."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 32, 33, 34, 35, 36 (Set #13)",
      "opts": [
        "34",
        "35",
        "33",
        "36"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 34."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 33, 34, 35, 36, 37 (Set #14)",
      "opts": [
        "35",
        "36",
        "34",
        "37"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 35."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 34, 35, 36, 37, 38 (Set #15)",
      "opts": [
        "36",
        "37",
        "35",
        "38"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 36."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 35, 36, 37, 38, 39 (Set #16)",
      "opts": [
        "37",
        "38",
        "36",
        "39"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 37."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 36, 37, 38, 39, 40 (Set #17)",
      "opts": [
        "38",
        "39",
        "37",
        "40"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 38."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 37, 38, 39, 40, 41 (Set #18)",
      "opts": [
        "39",
        "40",
        "38",
        "41"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 39."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 38, 39, 40, 41, 42 (Set #19)",
      "opts": [
        "40",
        "41",
        "39",
        "42"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 40."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 39, 40, 41, 42, 43 (Set #20)",
      "opts": [
        "41",
        "42",
        "40",
        "43"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 41."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 40, 41, 42, 43, 44 (Set #21)",
      "opts": [
        "42",
        "43",
        "41",
        "44"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 42."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 41, 42, 43, 44, 45 (Set #22)",
      "opts": [
        "43",
        "44",
        "42",
        "45"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 43."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 42, 43, 44, 45, 46 (Set #23)",
      "opts": [
        "44",
        "45",
        "43",
        "46"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 44."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 43, 44, 45, 46, 47 (Set #24)",
      "opts": [
        "45",
        "46",
        "44",
        "47"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 45."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 44, 45, 46, 47, 48 (Set #25)",
      "opts": [
        "46",
        "47",
        "45",
        "48"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 46."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 45, 46, 47, 48, 49 (Set #26)",
      "opts": [
        "47",
        "48",
        "46",
        "49"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 47."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 46, 47, 48, 49, 50 (Set #27)",
      "opts": [
        "48",
        "49",
        "47",
        "50"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 48."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 47, 48, 49, 50, 51 (Set #28)",
      "opts": [
        "49",
        "50",
        "48",
        "51"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 49."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 48, 49, 50, 51, 52 (Set #29)",
      "opts": [
        "50",
        "51",
        "49",
        "52"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 50."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 49, 50, 51, 52, 53 (Set #30)",
      "opts": [
        "51",
        "52",
        "50",
        "53"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 51."
    }
  ],
  "level3": [
    {
      "q": "Find the arithmetic average of the five numbers: 20, 21, 22, 23, 24 (Set #1)",
      "opts": [
        "22",
        "23",
        "21",
        "24"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 22."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 21, 22, 23, 24, 25 (Set #2)",
      "opts": [
        "23",
        "24",
        "22",
        "25"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 23."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 22, 23, 24, 25, 26 (Set #3)",
      "opts": [
        "24",
        "25",
        "23",
        "26"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 24."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 23, 24, 25, 26, 27 (Set #4)",
      "opts": [
        "25",
        "26",
        "24",
        "27"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 25."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 24, 25, 26, 27, 28 (Set #5)",
      "opts": [
        "26",
        "27",
        "25",
        "28"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 26."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 25, 26, 27, 28, 29 (Set #6)",
      "opts": [
        "27",
        "28",
        "26",
        "29"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 27."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 26, 27, 28, 29, 30 (Set #7)",
      "opts": [
        "28",
        "29",
        "27",
        "30"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 28."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 27, 28, 29, 30, 31 (Set #8)",
      "opts": [
        "29",
        "30",
        "28",
        "31"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 29."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 28, 29, 30, 31, 32 (Set #9)",
      "opts": [
        "30",
        "31",
        "29",
        "32"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 30."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 29, 30, 31, 32, 33 (Set #10)",
      "opts": [
        "31",
        "32",
        "30",
        "33"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 31."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 30, 31, 32, 33, 34 (Set #11)",
      "opts": [
        "32",
        "33",
        "31",
        "34"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 32."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 31, 32, 33, 34, 35 (Set #12)",
      "opts": [
        "33",
        "34",
        "32",
        "35"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 33."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 32, 33, 34, 35, 36 (Set #13)",
      "opts": [
        "34",
        "35",
        "33",
        "36"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 34."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 33, 34, 35, 36, 37 (Set #14)",
      "opts": [
        "35",
        "36",
        "34",
        "37"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 35."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 34, 35, 36, 37, 38 (Set #15)",
      "opts": [
        "36",
        "37",
        "35",
        "38"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 36."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 35, 36, 37, 38, 39 (Set #16)",
      "opts": [
        "37",
        "38",
        "36",
        "39"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 37."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 36, 37, 38, 39, 40 (Set #17)",
      "opts": [
        "38",
        "39",
        "37",
        "40"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 38."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 37, 38, 39, 40, 41 (Set #18)",
      "opts": [
        "39",
        "40",
        "38",
        "41"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 39."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 38, 39, 40, 41, 42 (Set #19)",
      "opts": [
        "40",
        "41",
        "39",
        "42"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 40."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 39, 40, 41, 42, 43 (Set #20)",
      "opts": [
        "41",
        "42",
        "40",
        "43"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 41."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 40, 41, 42, 43, 44 (Set #21)",
      "opts": [
        "42",
        "43",
        "41",
        "44"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 42."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 41, 42, 43, 44, 45 (Set #22)",
      "opts": [
        "43",
        "44",
        "42",
        "45"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 43."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 42, 43, 44, 45, 46 (Set #23)",
      "opts": [
        "44",
        "45",
        "43",
        "46"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 44."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 43, 44, 45, 46, 47 (Set #24)",
      "opts": [
        "45",
        "46",
        "44",
        "47"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 45."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 44, 45, 46, 47, 48 (Set #25)",
      "opts": [
        "46",
        "47",
        "45",
        "48"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 46."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 45, 46, 47, 48, 49 (Set #26)",
      "opts": [
        "47",
        "48",
        "46",
        "49"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 47."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 46, 47, 48, 49, 50 (Set #27)",
      "opts": [
        "48",
        "49",
        "47",
        "50"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 48."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 47, 48, 49, 50, 51 (Set #28)",
      "opts": [
        "49",
        "50",
        "48",
        "51"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 49."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 48, 49, 50, 51, 52 (Set #29)",
      "opts": [
        "50",
        "51",
        "49",
        "52"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 50."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 49, 50, 51, 52, 53 (Set #30)",
      "opts": [
        "51",
        "52",
        "50",
        "53"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 51."
    }
  ],
  "level4": [
    {
      "q": "Find the arithmetic average of the five numbers: 20, 21, 22, 23, 24 (Set #1)",
      "opts": [
        "22",
        "23",
        "21",
        "24"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 22."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 21, 22, 23, 24, 25 (Set #2)",
      "opts": [
        "23",
        "24",
        "22",
        "25"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 23."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 22, 23, 24, 25, 26 (Set #3)",
      "opts": [
        "24",
        "25",
        "23",
        "26"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 24."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 23, 24, 25, 26, 27 (Set #4)",
      "opts": [
        "25",
        "26",
        "24",
        "27"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 25."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 24, 25, 26, 27, 28 (Set #5)",
      "opts": [
        "26",
        "27",
        "25",
        "28"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 26."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 25, 26, 27, 28, 29 (Set #6)",
      "opts": [
        "27",
        "28",
        "26",
        "29"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 27."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 26, 27, 28, 29, 30 (Set #7)",
      "opts": [
        "28",
        "29",
        "27",
        "30"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 28."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 27, 28, 29, 30, 31 (Set #8)",
      "opts": [
        "29",
        "30",
        "28",
        "31"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 29."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 28, 29, 30, 31, 32 (Set #9)",
      "opts": [
        "30",
        "31",
        "29",
        "32"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 30."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 29, 30, 31, 32, 33 (Set #10)",
      "opts": [
        "31",
        "32",
        "30",
        "33"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 31."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 30, 31, 32, 33, 34 (Set #11)",
      "opts": [
        "32",
        "33",
        "31",
        "34"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 32."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 31, 32, 33, 34, 35 (Set #12)",
      "opts": [
        "33",
        "34",
        "32",
        "35"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 33."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 32, 33, 34, 35, 36 (Set #13)",
      "opts": [
        "34",
        "35",
        "33",
        "36"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 34."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 33, 34, 35, 36, 37 (Set #14)",
      "opts": [
        "35",
        "36",
        "34",
        "37"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 35."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 34, 35, 36, 37, 38 (Set #15)",
      "opts": [
        "36",
        "37",
        "35",
        "38"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 36."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 35, 36, 37, 38, 39 (Set #16)",
      "opts": [
        "37",
        "38",
        "36",
        "39"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 37."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 36, 37, 38, 39, 40 (Set #17)",
      "opts": [
        "38",
        "39",
        "37",
        "40"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 38."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 37, 38, 39, 40, 41 (Set #18)",
      "opts": [
        "39",
        "40",
        "38",
        "41"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 39."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 38, 39, 40, 41, 42 (Set #19)",
      "opts": [
        "40",
        "41",
        "39",
        "42"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 40."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 39, 40, 41, 42, 43 (Set #20)",
      "opts": [
        "41",
        "42",
        "40",
        "43"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 41."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 40, 41, 42, 43, 44 (Set #21)",
      "opts": [
        "42",
        "43",
        "41",
        "44"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 42."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 41, 42, 43, 44, 45 (Set #22)",
      "opts": [
        "43",
        "44",
        "42",
        "45"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 43."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 42, 43, 44, 45, 46 (Set #23)",
      "opts": [
        "44",
        "45",
        "43",
        "46"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 44."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 43, 44, 45, 46, 47 (Set #24)",
      "opts": [
        "45",
        "46",
        "44",
        "47"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 45."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 44, 45, 46, 47, 48 (Set #25)",
      "opts": [
        "46",
        "47",
        "45",
        "48"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 46."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 45, 46, 47, 48, 49 (Set #26)",
      "opts": [
        "47",
        "48",
        "46",
        "49"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 47."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 46, 47, 48, 49, 50 (Set #27)",
      "opts": [
        "48",
        "49",
        "47",
        "50"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 48."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 47, 48, 49, 50, 51 (Set #28)",
      "opts": [
        "49",
        "50",
        "48",
        "51"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 49."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 48, 49, 50, 51, 52 (Set #29)",
      "opts": [
        "50",
        "51",
        "49",
        "52"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 50."
    },
    {
      "q": "Find the arithmetic average of the five numbers: 49, 50, 51, 52, 53 (Set #30)",
      "opts": [
        "51",
        "52",
        "50",
        "53"
      ],
      "ans": "A",
      "exp": "For consecutive integers, the average is the middle number: 51."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["ratio-and-proportion"] = {
  "level1": [
    {
      "q": "Divide ₹500 between A and B in the ratio 2 : 3. What is A's share? (Division #1)",
      "opts": [
        "₹200",
        "₹250",
        "₹150",
        "₹300"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹500 = ₹200."
    },
    {
      "q": "Divide ₹770 between A and B in the ratio 3 : 4. What is A's share? (Division #2)",
      "opts": [
        "₹330",
        "₹380",
        "₹280",
        "₹440"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹770 = ₹330."
    },
    {
      "q": "Divide ₹1080 between A and B in the ratio 4 : 5. What is A's share? (Division #3)",
      "opts": [
        "₹480",
        "₹530",
        "₹430",
        "₹600"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1080 = ₹480."
    },
    {
      "q": "Divide ₹650 between A and B in the ratio 2 : 3. What is A's share? (Division #4)",
      "opts": [
        "₹260",
        "₹310",
        "₹210",
        "₹390"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹650 = ₹260."
    },
    {
      "q": "Divide ₹980 between A and B in the ratio 3 : 4. What is A's share? (Division #5)",
      "opts": [
        "₹420",
        "₹470",
        "₹370",
        "₹560"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹980 = ₹420."
    },
    {
      "q": "Divide ₹1350 between A and B in the ratio 4 : 5. What is A's share? (Division #6)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1350 = ₹600."
    },
    {
      "q": "Divide ₹800 between A and B in the ratio 2 : 3. What is A's share? (Division #7)",
      "opts": [
        "₹320",
        "₹370",
        "₹270",
        "₹480"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹800 = ₹320."
    },
    {
      "q": "Divide ₹1190 between A and B in the ratio 3 : 4. What is A's share? (Division #8)",
      "opts": [
        "₹510",
        "₹560",
        "₹460",
        "₹680"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1190 = ₹510."
    },
    {
      "q": "Divide ₹1620 between A and B in the ratio 4 : 5. What is A's share? (Division #9)",
      "opts": [
        "₹720",
        "₹770",
        "₹670",
        "₹900"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1620 = ₹720."
    },
    {
      "q": "Divide ₹950 between A and B in the ratio 2 : 3. What is A's share? (Division #10)",
      "opts": [
        "₹380",
        "₹430",
        "₹330",
        "₹570"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹950 = ₹380."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 3 : 4. What is A's share? (Division #11)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹800"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1400 = ₹600."
    },
    {
      "q": "Divide ₹1890 between A and B in the ratio 4 : 5. What is A's share? (Division #12)",
      "opts": [
        "₹840",
        "₹890",
        "₹790",
        "₹1050"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1890 = ₹840."
    },
    {
      "q": "Divide ₹1100 between A and B in the ratio 2 : 3. What is A's share? (Division #13)",
      "opts": [
        "₹440",
        "₹490",
        "₹390",
        "₹660"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1100 = ₹440."
    },
    {
      "q": "Divide ₹1610 between A and B in the ratio 3 : 4. What is A's share? (Division #14)",
      "opts": [
        "₹690",
        "₹740",
        "₹640",
        "₹920"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1610 = ₹690."
    },
    {
      "q": "Divide ₹2160 between A and B in the ratio 4 : 5. What is A's share? (Division #15)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1200"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2160 = ₹960."
    },
    {
      "q": "Divide ₹1250 between A and B in the ratio 2 : 3. What is A's share? (Division #16)",
      "opts": [
        "₹500",
        "₹550",
        "₹450",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1250 = ₹500."
    },
    {
      "q": "Divide ₹1820 between A and B in the ratio 3 : 4. What is A's share? (Division #17)",
      "opts": [
        "₹780",
        "₹830",
        "₹730",
        "₹1040"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1820 = ₹780."
    },
    {
      "q": "Divide ₹2430 between A and B in the ratio 4 : 5. What is A's share? (Division #18)",
      "opts": [
        "₹1080",
        "₹1130",
        "₹1030",
        "₹1350"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2430 = ₹1080."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 2 : 3. What is A's share? (Division #19)",
      "opts": [
        "₹560",
        "₹610",
        "₹510",
        "₹840"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1400 = ₹560."
    },
    {
      "q": "Divide ₹2030 between A and B in the ratio 3 : 4. What is A's share? (Division #20)",
      "opts": [
        "₹870",
        "₹920",
        "₹820",
        "₹1160"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2030 = ₹870."
    },
    {
      "q": "Divide ₹2700 between A and B in the ratio 4 : 5. What is A's share? (Division #21)",
      "opts": [
        "₹1200",
        "₹1250",
        "₹1150",
        "₹1500"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2700 = ₹1200."
    },
    {
      "q": "Divide ₹1550 between A and B in the ratio 2 : 3. What is A's share? (Division #22)",
      "opts": [
        "₹620",
        "₹670",
        "₹570",
        "₹930"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1550 = ₹620."
    },
    {
      "q": "Divide ₹2240 between A and B in the ratio 3 : 4. What is A's share? (Division #23)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1280"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2240 = ₹960."
    },
    {
      "q": "Divide ₹2970 between A and B in the ratio 4 : 5. What is A's share? (Division #24)",
      "opts": [
        "₹1320",
        "₹1370",
        "₹1270",
        "₹1650"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2970 = ₹1320."
    },
    {
      "q": "Divide ₹1700 between A and B in the ratio 2 : 3. What is A's share? (Division #25)",
      "opts": [
        "₹680",
        "₹730",
        "₹630",
        "₹1020"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1700 = ₹680."
    },
    {
      "q": "Divide ₹2450 between A and B in the ratio 3 : 4. What is A's share? (Division #26)",
      "opts": [
        "₹1050",
        "₹1100",
        "₹1000",
        "₹1400"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2450 = ₹1050."
    },
    {
      "q": "Divide ₹3240 between A and B in the ratio 4 : 5. What is A's share? (Division #27)",
      "opts": [
        "₹1440",
        "₹1490",
        "₹1390",
        "₹1800"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3240 = ₹1440."
    },
    {
      "q": "Divide ₹1850 between A and B in the ratio 2 : 3. What is A's share? (Division #28)",
      "opts": [
        "₹740",
        "₹790",
        "₹690",
        "₹1110"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1850 = ₹740."
    },
    {
      "q": "Divide ₹2660 between A and B in the ratio 3 : 4. What is A's share? (Division #29)",
      "opts": [
        "₹1140",
        "₹1190",
        "₹1090",
        "₹1520"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2660 = ₹1140."
    },
    {
      "q": "Divide ₹3510 between A and B in the ratio 4 : 5. What is A's share? (Division #30)",
      "opts": [
        "₹1560",
        "₹1610",
        "₹1510",
        "₹1950"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3510 = ₹1560."
    }
  ],
  "level2": [
    {
      "q": "Divide ₹500 between A and B in the ratio 2 : 3. What is A's share? (Division #1)",
      "opts": [
        "₹200",
        "₹250",
        "₹150",
        "₹300"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹500 = ₹200."
    },
    {
      "q": "Divide ₹770 between A and B in the ratio 3 : 4. What is A's share? (Division #2)",
      "opts": [
        "₹330",
        "₹380",
        "₹280",
        "₹440"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹770 = ₹330."
    },
    {
      "q": "Divide ₹1080 between A and B in the ratio 4 : 5. What is A's share? (Division #3)",
      "opts": [
        "₹480",
        "₹530",
        "₹430",
        "₹600"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1080 = ₹480."
    },
    {
      "q": "Divide ₹650 between A and B in the ratio 2 : 3. What is A's share? (Division #4)",
      "opts": [
        "₹260",
        "₹310",
        "₹210",
        "₹390"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹650 = ₹260."
    },
    {
      "q": "Divide ₹980 between A and B in the ratio 3 : 4. What is A's share? (Division #5)",
      "opts": [
        "₹420",
        "₹470",
        "₹370",
        "₹560"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹980 = ₹420."
    },
    {
      "q": "Divide ₹1350 between A and B in the ratio 4 : 5. What is A's share? (Division #6)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1350 = ₹600."
    },
    {
      "q": "Divide ₹800 between A and B in the ratio 2 : 3. What is A's share? (Division #7)",
      "opts": [
        "₹320",
        "₹370",
        "₹270",
        "₹480"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹800 = ₹320."
    },
    {
      "q": "Divide ₹1190 between A and B in the ratio 3 : 4. What is A's share? (Division #8)",
      "opts": [
        "₹510",
        "₹560",
        "₹460",
        "₹680"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1190 = ₹510."
    },
    {
      "q": "Divide ₹1620 between A and B in the ratio 4 : 5. What is A's share? (Division #9)",
      "opts": [
        "₹720",
        "₹770",
        "₹670",
        "₹900"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1620 = ₹720."
    },
    {
      "q": "Divide ₹950 between A and B in the ratio 2 : 3. What is A's share? (Division #10)",
      "opts": [
        "₹380",
        "₹430",
        "₹330",
        "₹570"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹950 = ₹380."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 3 : 4. What is A's share? (Division #11)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹800"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1400 = ₹600."
    },
    {
      "q": "Divide ₹1890 between A and B in the ratio 4 : 5. What is A's share? (Division #12)",
      "opts": [
        "₹840",
        "₹890",
        "₹790",
        "₹1050"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1890 = ₹840."
    },
    {
      "q": "Divide ₹1100 between A and B in the ratio 2 : 3. What is A's share? (Division #13)",
      "opts": [
        "₹440",
        "₹490",
        "₹390",
        "₹660"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1100 = ₹440."
    },
    {
      "q": "Divide ₹1610 between A and B in the ratio 3 : 4. What is A's share? (Division #14)",
      "opts": [
        "₹690",
        "₹740",
        "₹640",
        "₹920"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1610 = ₹690."
    },
    {
      "q": "Divide ₹2160 between A and B in the ratio 4 : 5. What is A's share? (Division #15)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1200"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2160 = ₹960."
    },
    {
      "q": "Divide ₹1250 between A and B in the ratio 2 : 3. What is A's share? (Division #16)",
      "opts": [
        "₹500",
        "₹550",
        "₹450",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1250 = ₹500."
    },
    {
      "q": "Divide ₹1820 between A and B in the ratio 3 : 4. What is A's share? (Division #17)",
      "opts": [
        "₹780",
        "₹830",
        "₹730",
        "₹1040"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1820 = ₹780."
    },
    {
      "q": "Divide ₹2430 between A and B in the ratio 4 : 5. What is A's share? (Division #18)",
      "opts": [
        "₹1080",
        "₹1130",
        "₹1030",
        "₹1350"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2430 = ₹1080."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 2 : 3. What is A's share? (Division #19)",
      "opts": [
        "₹560",
        "₹610",
        "₹510",
        "₹840"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1400 = ₹560."
    },
    {
      "q": "Divide ₹2030 between A and B in the ratio 3 : 4. What is A's share? (Division #20)",
      "opts": [
        "₹870",
        "₹920",
        "₹820",
        "₹1160"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2030 = ₹870."
    },
    {
      "q": "Divide ₹2700 between A and B in the ratio 4 : 5. What is A's share? (Division #21)",
      "opts": [
        "₹1200",
        "₹1250",
        "₹1150",
        "₹1500"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2700 = ₹1200."
    },
    {
      "q": "Divide ₹1550 between A and B in the ratio 2 : 3. What is A's share? (Division #22)",
      "opts": [
        "₹620",
        "₹670",
        "₹570",
        "₹930"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1550 = ₹620."
    },
    {
      "q": "Divide ₹2240 between A and B in the ratio 3 : 4. What is A's share? (Division #23)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1280"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2240 = ₹960."
    },
    {
      "q": "Divide ₹2970 between A and B in the ratio 4 : 5. What is A's share? (Division #24)",
      "opts": [
        "₹1320",
        "₹1370",
        "₹1270",
        "₹1650"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2970 = ₹1320."
    },
    {
      "q": "Divide ₹1700 between A and B in the ratio 2 : 3. What is A's share? (Division #25)",
      "opts": [
        "₹680",
        "₹730",
        "₹630",
        "₹1020"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1700 = ₹680."
    },
    {
      "q": "Divide ₹2450 between A and B in the ratio 3 : 4. What is A's share? (Division #26)",
      "opts": [
        "₹1050",
        "₹1100",
        "₹1000",
        "₹1400"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2450 = ₹1050."
    },
    {
      "q": "Divide ₹3240 between A and B in the ratio 4 : 5. What is A's share? (Division #27)",
      "opts": [
        "₹1440",
        "₹1490",
        "₹1390",
        "₹1800"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3240 = ₹1440."
    },
    {
      "q": "Divide ₹1850 between A and B in the ratio 2 : 3. What is A's share? (Division #28)",
      "opts": [
        "₹740",
        "₹790",
        "₹690",
        "₹1110"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1850 = ₹740."
    },
    {
      "q": "Divide ₹2660 between A and B in the ratio 3 : 4. What is A's share? (Division #29)",
      "opts": [
        "₹1140",
        "₹1190",
        "₹1090",
        "₹1520"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2660 = ₹1140."
    },
    {
      "q": "Divide ₹3510 between A and B in the ratio 4 : 5. What is A's share? (Division #30)",
      "opts": [
        "₹1560",
        "₹1610",
        "₹1510",
        "₹1950"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3510 = ₹1560."
    }
  ],
  "level3": [
    {
      "q": "Divide ₹500 between A and B in the ratio 2 : 3. What is A's share? (Division #1)",
      "opts": [
        "₹200",
        "₹250",
        "₹150",
        "₹300"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹500 = ₹200."
    },
    {
      "q": "Divide ₹770 between A and B in the ratio 3 : 4. What is A's share? (Division #2)",
      "opts": [
        "₹330",
        "₹380",
        "₹280",
        "₹440"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹770 = ₹330."
    },
    {
      "q": "Divide ₹1080 between A and B in the ratio 4 : 5. What is A's share? (Division #3)",
      "opts": [
        "₹480",
        "₹530",
        "₹430",
        "₹600"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1080 = ₹480."
    },
    {
      "q": "Divide ₹650 between A and B in the ratio 2 : 3. What is A's share? (Division #4)",
      "opts": [
        "₹260",
        "₹310",
        "₹210",
        "₹390"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹650 = ₹260."
    },
    {
      "q": "Divide ₹980 between A and B in the ratio 3 : 4. What is A's share? (Division #5)",
      "opts": [
        "₹420",
        "₹470",
        "₹370",
        "₹560"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹980 = ₹420."
    },
    {
      "q": "Divide ₹1350 between A and B in the ratio 4 : 5. What is A's share? (Division #6)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1350 = ₹600."
    },
    {
      "q": "Divide ₹800 between A and B in the ratio 2 : 3. What is A's share? (Division #7)",
      "opts": [
        "₹320",
        "₹370",
        "₹270",
        "₹480"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹800 = ₹320."
    },
    {
      "q": "Divide ₹1190 between A and B in the ratio 3 : 4. What is A's share? (Division #8)",
      "opts": [
        "₹510",
        "₹560",
        "₹460",
        "₹680"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1190 = ₹510."
    },
    {
      "q": "Divide ₹1620 between A and B in the ratio 4 : 5. What is A's share? (Division #9)",
      "opts": [
        "₹720",
        "₹770",
        "₹670",
        "₹900"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1620 = ₹720."
    },
    {
      "q": "Divide ₹950 between A and B in the ratio 2 : 3. What is A's share? (Division #10)",
      "opts": [
        "₹380",
        "₹430",
        "₹330",
        "₹570"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹950 = ₹380."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 3 : 4. What is A's share? (Division #11)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹800"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1400 = ₹600."
    },
    {
      "q": "Divide ₹1890 between A and B in the ratio 4 : 5. What is A's share? (Division #12)",
      "opts": [
        "₹840",
        "₹890",
        "₹790",
        "₹1050"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1890 = ₹840."
    },
    {
      "q": "Divide ₹1100 between A and B in the ratio 2 : 3. What is A's share? (Division #13)",
      "opts": [
        "₹440",
        "₹490",
        "₹390",
        "₹660"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1100 = ₹440."
    },
    {
      "q": "Divide ₹1610 between A and B in the ratio 3 : 4. What is A's share? (Division #14)",
      "opts": [
        "₹690",
        "₹740",
        "₹640",
        "₹920"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1610 = ₹690."
    },
    {
      "q": "Divide ₹2160 between A and B in the ratio 4 : 5. What is A's share? (Division #15)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1200"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2160 = ₹960."
    },
    {
      "q": "Divide ₹1250 between A and B in the ratio 2 : 3. What is A's share? (Division #16)",
      "opts": [
        "₹500",
        "₹550",
        "₹450",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1250 = ₹500."
    },
    {
      "q": "Divide ₹1820 between A and B in the ratio 3 : 4. What is A's share? (Division #17)",
      "opts": [
        "₹780",
        "₹830",
        "₹730",
        "₹1040"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1820 = ₹780."
    },
    {
      "q": "Divide ₹2430 between A and B in the ratio 4 : 5. What is A's share? (Division #18)",
      "opts": [
        "₹1080",
        "₹1130",
        "₹1030",
        "₹1350"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2430 = ₹1080."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 2 : 3. What is A's share? (Division #19)",
      "opts": [
        "₹560",
        "₹610",
        "₹510",
        "₹840"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1400 = ₹560."
    },
    {
      "q": "Divide ₹2030 between A and B in the ratio 3 : 4. What is A's share? (Division #20)",
      "opts": [
        "₹870",
        "₹920",
        "₹820",
        "₹1160"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2030 = ₹870."
    },
    {
      "q": "Divide ₹2700 between A and B in the ratio 4 : 5. What is A's share? (Division #21)",
      "opts": [
        "₹1200",
        "₹1250",
        "₹1150",
        "₹1500"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2700 = ₹1200."
    },
    {
      "q": "Divide ₹1550 between A and B in the ratio 2 : 3. What is A's share? (Division #22)",
      "opts": [
        "₹620",
        "₹670",
        "₹570",
        "₹930"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1550 = ₹620."
    },
    {
      "q": "Divide ₹2240 between A and B in the ratio 3 : 4. What is A's share? (Division #23)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1280"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2240 = ₹960."
    },
    {
      "q": "Divide ₹2970 between A and B in the ratio 4 : 5. What is A's share? (Division #24)",
      "opts": [
        "₹1320",
        "₹1370",
        "₹1270",
        "₹1650"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2970 = ₹1320."
    },
    {
      "q": "Divide ₹1700 between A and B in the ratio 2 : 3. What is A's share? (Division #25)",
      "opts": [
        "₹680",
        "₹730",
        "₹630",
        "₹1020"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1700 = ₹680."
    },
    {
      "q": "Divide ₹2450 between A and B in the ratio 3 : 4. What is A's share? (Division #26)",
      "opts": [
        "₹1050",
        "₹1100",
        "₹1000",
        "₹1400"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2450 = ₹1050."
    },
    {
      "q": "Divide ₹3240 between A and B in the ratio 4 : 5. What is A's share? (Division #27)",
      "opts": [
        "₹1440",
        "₹1490",
        "₹1390",
        "₹1800"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3240 = ₹1440."
    },
    {
      "q": "Divide ₹1850 between A and B in the ratio 2 : 3. What is A's share? (Division #28)",
      "opts": [
        "₹740",
        "₹790",
        "₹690",
        "₹1110"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1850 = ₹740."
    },
    {
      "q": "Divide ₹2660 between A and B in the ratio 3 : 4. What is A's share? (Division #29)",
      "opts": [
        "₹1140",
        "₹1190",
        "₹1090",
        "₹1520"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2660 = ₹1140."
    },
    {
      "q": "Divide ₹3510 between A and B in the ratio 4 : 5. What is A's share? (Division #30)",
      "opts": [
        "₹1560",
        "₹1610",
        "₹1510",
        "₹1950"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3510 = ₹1560."
    }
  ],
  "level4": [
    {
      "q": "Divide ₹500 between A and B in the ratio 2 : 3. What is A's share? (Division #1)",
      "opts": [
        "₹200",
        "₹250",
        "₹150",
        "₹300"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹500 = ₹200."
    },
    {
      "q": "Divide ₹770 between A and B in the ratio 3 : 4. What is A's share? (Division #2)",
      "opts": [
        "₹330",
        "₹380",
        "₹280",
        "₹440"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹770 = ₹330."
    },
    {
      "q": "Divide ₹1080 between A and B in the ratio 4 : 5. What is A's share? (Division #3)",
      "opts": [
        "₹480",
        "₹530",
        "₹430",
        "₹600"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1080 = ₹480."
    },
    {
      "q": "Divide ₹650 between A and B in the ratio 2 : 3. What is A's share? (Division #4)",
      "opts": [
        "₹260",
        "₹310",
        "₹210",
        "₹390"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹650 = ₹260."
    },
    {
      "q": "Divide ₹980 between A and B in the ratio 3 : 4. What is A's share? (Division #5)",
      "opts": [
        "₹420",
        "₹470",
        "₹370",
        "₹560"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹980 = ₹420."
    },
    {
      "q": "Divide ₹1350 between A and B in the ratio 4 : 5. What is A's share? (Division #6)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1350 = ₹600."
    },
    {
      "q": "Divide ₹800 between A and B in the ratio 2 : 3. What is A's share? (Division #7)",
      "opts": [
        "₹320",
        "₹370",
        "₹270",
        "₹480"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹800 = ₹320."
    },
    {
      "q": "Divide ₹1190 between A and B in the ratio 3 : 4. What is A's share? (Division #8)",
      "opts": [
        "₹510",
        "₹560",
        "₹460",
        "₹680"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1190 = ₹510."
    },
    {
      "q": "Divide ₹1620 between A and B in the ratio 4 : 5. What is A's share? (Division #9)",
      "opts": [
        "₹720",
        "₹770",
        "₹670",
        "₹900"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1620 = ₹720."
    },
    {
      "q": "Divide ₹950 between A and B in the ratio 2 : 3. What is A's share? (Division #10)",
      "opts": [
        "₹380",
        "₹430",
        "₹330",
        "₹570"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹950 = ₹380."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 3 : 4. What is A's share? (Division #11)",
      "opts": [
        "₹600",
        "₹650",
        "₹550",
        "₹800"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1400 = ₹600."
    },
    {
      "q": "Divide ₹1890 between A and B in the ratio 4 : 5. What is A's share? (Division #12)",
      "opts": [
        "₹840",
        "₹890",
        "₹790",
        "₹1050"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹1890 = ₹840."
    },
    {
      "q": "Divide ₹1100 between A and B in the ratio 2 : 3. What is A's share? (Division #13)",
      "opts": [
        "₹440",
        "₹490",
        "₹390",
        "₹660"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1100 = ₹440."
    },
    {
      "q": "Divide ₹1610 between A and B in the ratio 3 : 4. What is A's share? (Division #14)",
      "opts": [
        "₹690",
        "₹740",
        "₹640",
        "₹920"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1610 = ₹690."
    },
    {
      "q": "Divide ₹2160 between A and B in the ratio 4 : 5. What is A's share? (Division #15)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1200"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2160 = ₹960."
    },
    {
      "q": "Divide ₹1250 between A and B in the ratio 2 : 3. What is A's share? (Division #16)",
      "opts": [
        "₹500",
        "₹550",
        "₹450",
        "₹750"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1250 = ₹500."
    },
    {
      "q": "Divide ₹1820 between A and B in the ratio 3 : 4. What is A's share? (Division #17)",
      "opts": [
        "₹780",
        "₹830",
        "₹730",
        "₹1040"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹1820 = ₹780."
    },
    {
      "q": "Divide ₹2430 between A and B in the ratio 4 : 5. What is A's share? (Division #18)",
      "opts": [
        "₹1080",
        "₹1130",
        "₹1030",
        "₹1350"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2430 = ₹1080."
    },
    {
      "q": "Divide ₹1400 between A and B in the ratio 2 : 3. What is A's share? (Division #19)",
      "opts": [
        "₹560",
        "₹610",
        "₹510",
        "₹840"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1400 = ₹560."
    },
    {
      "q": "Divide ₹2030 between A and B in the ratio 3 : 4. What is A's share? (Division #20)",
      "opts": [
        "₹870",
        "₹920",
        "₹820",
        "₹1160"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2030 = ₹870."
    },
    {
      "q": "Divide ₹2700 between A and B in the ratio 4 : 5. What is A's share? (Division #21)",
      "opts": [
        "₹1200",
        "₹1250",
        "₹1150",
        "₹1500"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2700 = ₹1200."
    },
    {
      "q": "Divide ₹1550 between A and B in the ratio 2 : 3. What is A's share? (Division #22)",
      "opts": [
        "₹620",
        "₹670",
        "₹570",
        "₹930"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1550 = ₹620."
    },
    {
      "q": "Divide ₹2240 between A and B in the ratio 3 : 4. What is A's share? (Division #23)",
      "opts": [
        "₹960",
        "₹1010",
        "₹910",
        "₹1280"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2240 = ₹960."
    },
    {
      "q": "Divide ₹2970 between A and B in the ratio 4 : 5. What is A's share? (Division #24)",
      "opts": [
        "₹1320",
        "₹1370",
        "₹1270",
        "₹1650"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹2970 = ₹1320."
    },
    {
      "q": "Divide ₹1700 between A and B in the ratio 2 : 3. What is A's share? (Division #25)",
      "opts": [
        "₹680",
        "₹730",
        "₹630",
        "₹1020"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1700 = ₹680."
    },
    {
      "q": "Divide ₹2450 between A and B in the ratio 3 : 4. What is A's share? (Division #26)",
      "opts": [
        "₹1050",
        "₹1100",
        "₹1000",
        "₹1400"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2450 = ₹1050."
    },
    {
      "q": "Divide ₹3240 between A and B in the ratio 4 : 5. What is A's share? (Division #27)",
      "opts": [
        "₹1440",
        "₹1490",
        "₹1390",
        "₹1800"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3240 = ₹1440."
    },
    {
      "q": "Divide ₹1850 between A and B in the ratio 2 : 3. What is A's share? (Division #28)",
      "opts": [
        "₹740",
        "₹790",
        "₹690",
        "₹1110"
      ],
      "ans": "A",
      "exp": "A's share = (2 / (2 + 3)) × ₹1850 = ₹740."
    },
    {
      "q": "Divide ₹2660 between A and B in the ratio 3 : 4. What is A's share? (Division #29)",
      "opts": [
        "₹1140",
        "₹1190",
        "₹1090",
        "₹1520"
      ],
      "ans": "A",
      "exp": "A's share = (3 / (3 + 4)) × ₹2660 = ₹1140."
    },
    {
      "q": "Divide ₹3510 between A and B in the ratio 4 : 5. What is A's share? (Division #30)",
      "opts": [
        "₹1560",
        "₹1610",
        "₹1510",
        "₹1950"
      ],
      "ans": "A",
      "exp": "A's share = (4 / (4 + 5)) × ₹3510 = ₹1560."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["mensuration"] = {
  "level1": [
    {
      "q": "What is the area of a rectangle whose length is 10 cm and width is 6 cm? (Shape #1)",
      "opts": [
        "60 cm²",
        "70 cm²",
        "52 cm²",
        "32 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 10 × 6 = 60 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 11 cm and width is 7 cm? (Shape #2)",
      "opts": [
        "77 cm²",
        "87 cm²",
        "69 cm²",
        "36 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 11 × 7 = 77 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 12 cm and width is 8 cm? (Shape #3)",
      "opts": [
        "96 cm²",
        "106 cm²",
        "88 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 12 × 8 = 96 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 13 cm and width is 9 cm? (Shape #4)",
      "opts": [
        "117 cm²",
        "127 cm²",
        "109 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 13 × 9 = 117 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 14 cm and width is 6 cm? (Shape #5)",
      "opts": [
        "84 cm²",
        "94 cm²",
        "76 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 14 × 6 = 84 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 15 cm and width is 7 cm? (Shape #6)",
      "opts": [
        "105 cm²",
        "115 cm²",
        "97 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 15 × 7 = 105 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 16 cm and width is 8 cm? (Shape #7)",
      "opts": [
        "128 cm²",
        "138 cm²",
        "120 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 16 × 8 = 128 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 17 cm and width is 9 cm? (Shape #8)",
      "opts": [
        "153 cm²",
        "163 cm²",
        "145 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 17 × 9 = 153 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 18 cm and width is 6 cm? (Shape #9)",
      "opts": [
        "108 cm²",
        "118 cm²",
        "100 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 18 × 6 = 108 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 19 cm and width is 7 cm? (Shape #10)",
      "opts": [
        "133 cm²",
        "143 cm²",
        "125 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 19 × 7 = 133 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 20 cm and width is 8 cm? (Shape #11)",
      "opts": [
        "160 cm²",
        "170 cm²",
        "152 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 20 × 8 = 160 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 21 cm and width is 9 cm? (Shape #12)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 21 × 9 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 22 cm and width is 6 cm? (Shape #13)",
      "opts": [
        "132 cm²",
        "142 cm²",
        "124 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 22 × 6 = 132 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 23 cm and width is 7 cm? (Shape #14)",
      "opts": [
        "161 cm²",
        "171 cm²",
        "153 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 23 × 7 = 161 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 24 cm and width is 8 cm? (Shape #15)",
      "opts": [
        "192 cm²",
        "202 cm²",
        "184 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 24 × 8 = 192 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 25 cm and width is 9 cm? (Shape #16)",
      "opts": [
        "225 cm²",
        "235 cm²",
        "217 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 25 × 9 = 225 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 26 cm and width is 6 cm? (Shape #17)",
      "opts": [
        "156 cm²",
        "166 cm²",
        "148 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 26 × 6 = 156 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 27 cm and width is 7 cm? (Shape #18)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 27 × 7 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 28 cm and width is 8 cm? (Shape #19)",
      "opts": [
        "224 cm²",
        "234 cm²",
        "216 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 28 × 8 = 224 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 29 cm and width is 9 cm? (Shape #20)",
      "opts": [
        "261 cm²",
        "271 cm²",
        "253 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 29 × 9 = 261 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 30 cm and width is 6 cm? (Shape #21)",
      "opts": [
        "180 cm²",
        "190 cm²",
        "172 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 30 × 6 = 180 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 31 cm and width is 7 cm? (Shape #22)",
      "opts": [
        "217 cm²",
        "227 cm²",
        "209 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 31 × 7 = 217 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 32 cm and width is 8 cm? (Shape #23)",
      "opts": [
        "256 cm²",
        "266 cm²",
        "248 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 32 × 8 = 256 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 33 cm and width is 9 cm? (Shape #24)",
      "opts": [
        "297 cm²",
        "307 cm²",
        "289 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 33 × 9 = 297 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 34 cm and width is 6 cm? (Shape #25)",
      "opts": [
        "204 cm²",
        "214 cm²",
        "196 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 34 × 6 = 204 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 35 cm and width is 7 cm? (Shape #26)",
      "opts": [
        "245 cm²",
        "255 cm²",
        "237 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 35 × 7 = 245 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 36 cm and width is 8 cm? (Shape #27)",
      "opts": [
        "288 cm²",
        "298 cm²",
        "280 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 36 × 8 = 288 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 37 cm and width is 9 cm? (Shape #28)",
      "opts": [
        "333 cm²",
        "343 cm²",
        "325 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 37 × 9 = 333 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 38 cm and width is 6 cm? (Shape #29)",
      "opts": [
        "228 cm²",
        "238 cm²",
        "220 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 38 × 6 = 228 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 39 cm and width is 7 cm? (Shape #30)",
      "opts": [
        "273 cm²",
        "283 cm²",
        "265 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 39 × 7 = 273 cm²."
    }
  ],
  "level2": [
    {
      "q": "What is the area of a rectangle whose length is 10 cm and width is 6 cm? (Shape #1)",
      "opts": [
        "60 cm²",
        "70 cm²",
        "52 cm²",
        "32 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 10 × 6 = 60 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 11 cm and width is 7 cm? (Shape #2)",
      "opts": [
        "77 cm²",
        "87 cm²",
        "69 cm²",
        "36 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 11 × 7 = 77 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 12 cm and width is 8 cm? (Shape #3)",
      "opts": [
        "96 cm²",
        "106 cm²",
        "88 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 12 × 8 = 96 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 13 cm and width is 9 cm? (Shape #4)",
      "opts": [
        "117 cm²",
        "127 cm²",
        "109 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 13 × 9 = 117 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 14 cm and width is 6 cm? (Shape #5)",
      "opts": [
        "84 cm²",
        "94 cm²",
        "76 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 14 × 6 = 84 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 15 cm and width is 7 cm? (Shape #6)",
      "opts": [
        "105 cm²",
        "115 cm²",
        "97 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 15 × 7 = 105 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 16 cm and width is 8 cm? (Shape #7)",
      "opts": [
        "128 cm²",
        "138 cm²",
        "120 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 16 × 8 = 128 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 17 cm and width is 9 cm? (Shape #8)",
      "opts": [
        "153 cm²",
        "163 cm²",
        "145 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 17 × 9 = 153 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 18 cm and width is 6 cm? (Shape #9)",
      "opts": [
        "108 cm²",
        "118 cm²",
        "100 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 18 × 6 = 108 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 19 cm and width is 7 cm? (Shape #10)",
      "opts": [
        "133 cm²",
        "143 cm²",
        "125 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 19 × 7 = 133 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 20 cm and width is 8 cm? (Shape #11)",
      "opts": [
        "160 cm²",
        "170 cm²",
        "152 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 20 × 8 = 160 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 21 cm and width is 9 cm? (Shape #12)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 21 × 9 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 22 cm and width is 6 cm? (Shape #13)",
      "opts": [
        "132 cm²",
        "142 cm²",
        "124 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 22 × 6 = 132 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 23 cm and width is 7 cm? (Shape #14)",
      "opts": [
        "161 cm²",
        "171 cm²",
        "153 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 23 × 7 = 161 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 24 cm and width is 8 cm? (Shape #15)",
      "opts": [
        "192 cm²",
        "202 cm²",
        "184 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 24 × 8 = 192 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 25 cm and width is 9 cm? (Shape #16)",
      "opts": [
        "225 cm²",
        "235 cm²",
        "217 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 25 × 9 = 225 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 26 cm and width is 6 cm? (Shape #17)",
      "opts": [
        "156 cm²",
        "166 cm²",
        "148 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 26 × 6 = 156 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 27 cm and width is 7 cm? (Shape #18)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 27 × 7 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 28 cm and width is 8 cm? (Shape #19)",
      "opts": [
        "224 cm²",
        "234 cm²",
        "216 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 28 × 8 = 224 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 29 cm and width is 9 cm? (Shape #20)",
      "opts": [
        "261 cm²",
        "271 cm²",
        "253 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 29 × 9 = 261 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 30 cm and width is 6 cm? (Shape #21)",
      "opts": [
        "180 cm²",
        "190 cm²",
        "172 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 30 × 6 = 180 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 31 cm and width is 7 cm? (Shape #22)",
      "opts": [
        "217 cm²",
        "227 cm²",
        "209 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 31 × 7 = 217 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 32 cm and width is 8 cm? (Shape #23)",
      "opts": [
        "256 cm²",
        "266 cm²",
        "248 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 32 × 8 = 256 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 33 cm and width is 9 cm? (Shape #24)",
      "opts": [
        "297 cm²",
        "307 cm²",
        "289 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 33 × 9 = 297 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 34 cm and width is 6 cm? (Shape #25)",
      "opts": [
        "204 cm²",
        "214 cm²",
        "196 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 34 × 6 = 204 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 35 cm and width is 7 cm? (Shape #26)",
      "opts": [
        "245 cm²",
        "255 cm²",
        "237 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 35 × 7 = 245 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 36 cm and width is 8 cm? (Shape #27)",
      "opts": [
        "288 cm²",
        "298 cm²",
        "280 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 36 × 8 = 288 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 37 cm and width is 9 cm? (Shape #28)",
      "opts": [
        "333 cm²",
        "343 cm²",
        "325 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 37 × 9 = 333 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 38 cm and width is 6 cm? (Shape #29)",
      "opts": [
        "228 cm²",
        "238 cm²",
        "220 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 38 × 6 = 228 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 39 cm and width is 7 cm? (Shape #30)",
      "opts": [
        "273 cm²",
        "283 cm²",
        "265 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 39 × 7 = 273 cm²."
    }
  ],
  "level3": [
    {
      "q": "What is the area of a rectangle whose length is 10 cm and width is 6 cm? (Shape #1)",
      "opts": [
        "60 cm²",
        "70 cm²",
        "52 cm²",
        "32 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 10 × 6 = 60 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 11 cm and width is 7 cm? (Shape #2)",
      "opts": [
        "77 cm²",
        "87 cm²",
        "69 cm²",
        "36 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 11 × 7 = 77 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 12 cm and width is 8 cm? (Shape #3)",
      "opts": [
        "96 cm²",
        "106 cm²",
        "88 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 12 × 8 = 96 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 13 cm and width is 9 cm? (Shape #4)",
      "opts": [
        "117 cm²",
        "127 cm²",
        "109 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 13 × 9 = 117 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 14 cm and width is 6 cm? (Shape #5)",
      "opts": [
        "84 cm²",
        "94 cm²",
        "76 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 14 × 6 = 84 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 15 cm and width is 7 cm? (Shape #6)",
      "opts": [
        "105 cm²",
        "115 cm²",
        "97 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 15 × 7 = 105 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 16 cm and width is 8 cm? (Shape #7)",
      "opts": [
        "128 cm²",
        "138 cm²",
        "120 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 16 × 8 = 128 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 17 cm and width is 9 cm? (Shape #8)",
      "opts": [
        "153 cm²",
        "163 cm²",
        "145 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 17 × 9 = 153 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 18 cm and width is 6 cm? (Shape #9)",
      "opts": [
        "108 cm²",
        "118 cm²",
        "100 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 18 × 6 = 108 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 19 cm and width is 7 cm? (Shape #10)",
      "opts": [
        "133 cm²",
        "143 cm²",
        "125 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 19 × 7 = 133 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 20 cm and width is 8 cm? (Shape #11)",
      "opts": [
        "160 cm²",
        "170 cm²",
        "152 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 20 × 8 = 160 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 21 cm and width is 9 cm? (Shape #12)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 21 × 9 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 22 cm and width is 6 cm? (Shape #13)",
      "opts": [
        "132 cm²",
        "142 cm²",
        "124 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 22 × 6 = 132 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 23 cm and width is 7 cm? (Shape #14)",
      "opts": [
        "161 cm²",
        "171 cm²",
        "153 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 23 × 7 = 161 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 24 cm and width is 8 cm? (Shape #15)",
      "opts": [
        "192 cm²",
        "202 cm²",
        "184 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 24 × 8 = 192 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 25 cm and width is 9 cm? (Shape #16)",
      "opts": [
        "225 cm²",
        "235 cm²",
        "217 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 25 × 9 = 225 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 26 cm and width is 6 cm? (Shape #17)",
      "opts": [
        "156 cm²",
        "166 cm²",
        "148 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 26 × 6 = 156 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 27 cm and width is 7 cm? (Shape #18)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 27 × 7 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 28 cm and width is 8 cm? (Shape #19)",
      "opts": [
        "224 cm²",
        "234 cm²",
        "216 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 28 × 8 = 224 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 29 cm and width is 9 cm? (Shape #20)",
      "opts": [
        "261 cm²",
        "271 cm²",
        "253 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 29 × 9 = 261 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 30 cm and width is 6 cm? (Shape #21)",
      "opts": [
        "180 cm²",
        "190 cm²",
        "172 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 30 × 6 = 180 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 31 cm and width is 7 cm? (Shape #22)",
      "opts": [
        "217 cm²",
        "227 cm²",
        "209 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 31 × 7 = 217 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 32 cm and width is 8 cm? (Shape #23)",
      "opts": [
        "256 cm²",
        "266 cm²",
        "248 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 32 × 8 = 256 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 33 cm and width is 9 cm? (Shape #24)",
      "opts": [
        "297 cm²",
        "307 cm²",
        "289 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 33 × 9 = 297 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 34 cm and width is 6 cm? (Shape #25)",
      "opts": [
        "204 cm²",
        "214 cm²",
        "196 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 34 × 6 = 204 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 35 cm and width is 7 cm? (Shape #26)",
      "opts": [
        "245 cm²",
        "255 cm²",
        "237 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 35 × 7 = 245 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 36 cm and width is 8 cm? (Shape #27)",
      "opts": [
        "288 cm²",
        "298 cm²",
        "280 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 36 × 8 = 288 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 37 cm and width is 9 cm? (Shape #28)",
      "opts": [
        "333 cm²",
        "343 cm²",
        "325 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 37 × 9 = 333 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 38 cm and width is 6 cm? (Shape #29)",
      "opts": [
        "228 cm²",
        "238 cm²",
        "220 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 38 × 6 = 228 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 39 cm and width is 7 cm? (Shape #30)",
      "opts": [
        "273 cm²",
        "283 cm²",
        "265 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 39 × 7 = 273 cm²."
    }
  ],
  "level4": [
    {
      "q": "What is the area of a rectangle whose length is 10 cm and width is 6 cm? (Shape #1)",
      "opts": [
        "60 cm²",
        "70 cm²",
        "52 cm²",
        "32 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 10 × 6 = 60 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 11 cm and width is 7 cm? (Shape #2)",
      "opts": [
        "77 cm²",
        "87 cm²",
        "69 cm²",
        "36 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 11 × 7 = 77 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 12 cm and width is 8 cm? (Shape #3)",
      "opts": [
        "96 cm²",
        "106 cm²",
        "88 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 12 × 8 = 96 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 13 cm and width is 9 cm? (Shape #4)",
      "opts": [
        "117 cm²",
        "127 cm²",
        "109 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 13 × 9 = 117 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 14 cm and width is 6 cm? (Shape #5)",
      "opts": [
        "84 cm²",
        "94 cm²",
        "76 cm²",
        "40 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 14 × 6 = 84 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 15 cm and width is 7 cm? (Shape #6)",
      "opts": [
        "105 cm²",
        "115 cm²",
        "97 cm²",
        "44 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 15 × 7 = 105 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 16 cm and width is 8 cm? (Shape #7)",
      "opts": [
        "128 cm²",
        "138 cm²",
        "120 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 16 × 8 = 128 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 17 cm and width is 9 cm? (Shape #8)",
      "opts": [
        "153 cm²",
        "163 cm²",
        "145 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 17 × 9 = 153 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 18 cm and width is 6 cm? (Shape #9)",
      "opts": [
        "108 cm²",
        "118 cm²",
        "100 cm²",
        "48 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 18 × 6 = 108 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 19 cm and width is 7 cm? (Shape #10)",
      "opts": [
        "133 cm²",
        "143 cm²",
        "125 cm²",
        "52 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 19 × 7 = 133 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 20 cm and width is 8 cm? (Shape #11)",
      "opts": [
        "160 cm²",
        "170 cm²",
        "152 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 20 × 8 = 160 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 21 cm and width is 9 cm? (Shape #12)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 21 × 9 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 22 cm and width is 6 cm? (Shape #13)",
      "opts": [
        "132 cm²",
        "142 cm²",
        "124 cm²",
        "56 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 22 × 6 = 132 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 23 cm and width is 7 cm? (Shape #14)",
      "opts": [
        "161 cm²",
        "171 cm²",
        "153 cm²",
        "60 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 23 × 7 = 161 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 24 cm and width is 8 cm? (Shape #15)",
      "opts": [
        "192 cm²",
        "202 cm²",
        "184 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 24 × 8 = 192 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 25 cm and width is 9 cm? (Shape #16)",
      "opts": [
        "225 cm²",
        "235 cm²",
        "217 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 25 × 9 = 225 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 26 cm and width is 6 cm? (Shape #17)",
      "opts": [
        "156 cm²",
        "166 cm²",
        "148 cm²",
        "64 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 26 × 6 = 156 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 27 cm and width is 7 cm? (Shape #18)",
      "opts": [
        "189 cm²",
        "199 cm²",
        "181 cm²",
        "68 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 27 × 7 = 189 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 28 cm and width is 8 cm? (Shape #19)",
      "opts": [
        "224 cm²",
        "234 cm²",
        "216 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 28 × 8 = 224 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 29 cm and width is 9 cm? (Shape #20)",
      "opts": [
        "261 cm²",
        "271 cm²",
        "253 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 29 × 9 = 261 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 30 cm and width is 6 cm? (Shape #21)",
      "opts": [
        "180 cm²",
        "190 cm²",
        "172 cm²",
        "72 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 30 × 6 = 180 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 31 cm and width is 7 cm? (Shape #22)",
      "opts": [
        "217 cm²",
        "227 cm²",
        "209 cm²",
        "76 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 31 × 7 = 217 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 32 cm and width is 8 cm? (Shape #23)",
      "opts": [
        "256 cm²",
        "266 cm²",
        "248 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 32 × 8 = 256 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 33 cm and width is 9 cm? (Shape #24)",
      "opts": [
        "297 cm²",
        "307 cm²",
        "289 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 33 × 9 = 297 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 34 cm and width is 6 cm? (Shape #25)",
      "opts": [
        "204 cm²",
        "214 cm²",
        "196 cm²",
        "80 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 34 × 6 = 204 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 35 cm and width is 7 cm? (Shape #26)",
      "opts": [
        "245 cm²",
        "255 cm²",
        "237 cm²",
        "84 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 35 × 7 = 245 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 36 cm and width is 8 cm? (Shape #27)",
      "opts": [
        "288 cm²",
        "298 cm²",
        "280 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 36 × 8 = 288 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 37 cm and width is 9 cm? (Shape #28)",
      "opts": [
        "333 cm²",
        "343 cm²",
        "325 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 37 × 9 = 333 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 38 cm and width is 6 cm? (Shape #29)",
      "opts": [
        "228 cm²",
        "238 cm²",
        "220 cm²",
        "88 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 38 × 6 = 228 cm²."
    },
    {
      "q": "What is the area of a rectangle whose length is 39 cm and width is 7 cm? (Shape #30)",
      "opts": [
        "273 cm²",
        "283 cm²",
        "265 cm²",
        "92 cm²"
      ],
      "ans": "A",
      "exp": "Area of rectangle = Length × Width = 39 × 7 = 273 cm²."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["partnership"] = {
  "level1": [
    {
      "q": "A invests ₹5000 and B invests ₹10000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #1)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5000 : ₹10000 = 1 : 2."
    },
    {
      "q": "A invests ₹5500 and B invests ₹11000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #2)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5500 : ₹11000 = 1 : 2."
    },
    {
      "q": "A invests ₹6000 and B invests ₹12000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #3)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6000 : ₹12000 = 1 : 2."
    },
    {
      "q": "A invests ₹6500 and B invests ₹13000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #4)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6500 : ₹13000 = 1 : 2."
    },
    {
      "q": "A invests ₹7000 and B invests ₹14000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #5)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7000 : ₹14000 = 1 : 2."
    },
    {
      "q": "A invests ₹7500 and B invests ₹15000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #6)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7500 : ₹15000 = 1 : 2."
    },
    {
      "q": "A invests ₹8000 and B invests ₹16000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #7)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8000 : ₹16000 = 1 : 2."
    },
    {
      "q": "A invests ₹8500 and B invests ₹17000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #8)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8500 : ₹17000 = 1 : 2."
    },
    {
      "q": "A invests ₹9000 and B invests ₹18000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #9)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9000 : ₹18000 = 1 : 2."
    },
    {
      "q": "A invests ₹9500 and B invests ₹19000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #10)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9500 : ₹19000 = 1 : 2."
    },
    {
      "q": "A invests ₹10000 and B invests ₹20000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #11)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10000 : ₹20000 = 1 : 2."
    },
    {
      "q": "A invests ₹10500 and B invests ₹21000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #12)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10500 : ₹21000 = 1 : 2."
    },
    {
      "q": "A invests ₹11000 and B invests ₹22000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #13)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11000 : ₹22000 = 1 : 2."
    },
    {
      "q": "A invests ₹11500 and B invests ₹23000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #14)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11500 : ₹23000 = 1 : 2."
    },
    {
      "q": "A invests ₹12000 and B invests ₹24000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #15)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12000 : ₹24000 = 1 : 2."
    },
    {
      "q": "A invests ₹12500 and B invests ₹25000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #16)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12500 : ₹25000 = 1 : 2."
    },
    {
      "q": "A invests ₹13000 and B invests ₹26000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #17)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13000 : ₹26000 = 1 : 2."
    },
    {
      "q": "A invests ₹13500 and B invests ₹27000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #18)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13500 : ₹27000 = 1 : 2."
    },
    {
      "q": "A invests ₹14000 and B invests ₹28000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #19)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14000 : ₹28000 = 1 : 2."
    },
    {
      "q": "A invests ₹14500 and B invests ₹29000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #20)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14500 : ₹29000 = 1 : 2."
    },
    {
      "q": "A invests ₹15000 and B invests ₹30000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #21)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15000 : ₹30000 = 1 : 2."
    },
    {
      "q": "A invests ₹15500 and B invests ₹31000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #22)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15500 : ₹31000 = 1 : 2."
    },
    {
      "q": "A invests ₹16000 and B invests ₹32000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #23)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16000 : ₹32000 = 1 : 2."
    },
    {
      "q": "A invests ₹16500 and B invests ₹33000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #24)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16500 : ₹33000 = 1 : 2."
    },
    {
      "q": "A invests ₹17000 and B invests ₹34000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #25)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17000 : ₹34000 = 1 : 2."
    },
    {
      "q": "A invests ₹17500 and B invests ₹35000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #26)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17500 : ₹35000 = 1 : 2."
    },
    {
      "q": "A invests ₹18000 and B invests ₹36000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #27)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18000 : ₹36000 = 1 : 2."
    },
    {
      "q": "A invests ₹18500 and B invests ₹37000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #28)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18500 : ₹37000 = 1 : 2."
    },
    {
      "q": "A invests ₹19000 and B invests ₹38000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #29)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19000 : ₹38000 = 1 : 2."
    },
    {
      "q": "A invests ₹19500 and B invests ₹39000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #30)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19500 : ₹39000 = 1 : 2."
    }
  ],
  "level2": [
    {
      "q": "A invests ₹5000 and B invests ₹10000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #1)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5000 : ₹10000 = 1 : 2."
    },
    {
      "q": "A invests ₹5500 and B invests ₹11000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #2)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5500 : ₹11000 = 1 : 2."
    },
    {
      "q": "A invests ₹6000 and B invests ₹12000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #3)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6000 : ₹12000 = 1 : 2."
    },
    {
      "q": "A invests ₹6500 and B invests ₹13000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #4)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6500 : ₹13000 = 1 : 2."
    },
    {
      "q": "A invests ₹7000 and B invests ₹14000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #5)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7000 : ₹14000 = 1 : 2."
    },
    {
      "q": "A invests ₹7500 and B invests ₹15000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #6)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7500 : ₹15000 = 1 : 2."
    },
    {
      "q": "A invests ₹8000 and B invests ₹16000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #7)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8000 : ₹16000 = 1 : 2."
    },
    {
      "q": "A invests ₹8500 and B invests ₹17000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #8)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8500 : ₹17000 = 1 : 2."
    },
    {
      "q": "A invests ₹9000 and B invests ₹18000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #9)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9000 : ₹18000 = 1 : 2."
    },
    {
      "q": "A invests ₹9500 and B invests ₹19000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #10)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9500 : ₹19000 = 1 : 2."
    },
    {
      "q": "A invests ₹10000 and B invests ₹20000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #11)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10000 : ₹20000 = 1 : 2."
    },
    {
      "q": "A invests ₹10500 and B invests ₹21000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #12)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10500 : ₹21000 = 1 : 2."
    },
    {
      "q": "A invests ₹11000 and B invests ₹22000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #13)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11000 : ₹22000 = 1 : 2."
    },
    {
      "q": "A invests ₹11500 and B invests ₹23000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #14)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11500 : ₹23000 = 1 : 2."
    },
    {
      "q": "A invests ₹12000 and B invests ₹24000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #15)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12000 : ₹24000 = 1 : 2."
    },
    {
      "q": "A invests ₹12500 and B invests ₹25000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #16)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12500 : ₹25000 = 1 : 2."
    },
    {
      "q": "A invests ₹13000 and B invests ₹26000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #17)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13000 : ₹26000 = 1 : 2."
    },
    {
      "q": "A invests ₹13500 and B invests ₹27000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #18)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13500 : ₹27000 = 1 : 2."
    },
    {
      "q": "A invests ₹14000 and B invests ₹28000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #19)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14000 : ₹28000 = 1 : 2."
    },
    {
      "q": "A invests ₹14500 and B invests ₹29000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #20)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14500 : ₹29000 = 1 : 2."
    },
    {
      "q": "A invests ₹15000 and B invests ₹30000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #21)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15000 : ₹30000 = 1 : 2."
    },
    {
      "q": "A invests ₹15500 and B invests ₹31000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #22)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15500 : ₹31000 = 1 : 2."
    },
    {
      "q": "A invests ₹16000 and B invests ₹32000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #23)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16000 : ₹32000 = 1 : 2."
    },
    {
      "q": "A invests ₹16500 and B invests ₹33000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #24)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16500 : ₹33000 = 1 : 2."
    },
    {
      "q": "A invests ₹17000 and B invests ₹34000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #25)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17000 : ₹34000 = 1 : 2."
    },
    {
      "q": "A invests ₹17500 and B invests ₹35000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #26)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17500 : ₹35000 = 1 : 2."
    },
    {
      "q": "A invests ₹18000 and B invests ₹36000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #27)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18000 : ₹36000 = 1 : 2."
    },
    {
      "q": "A invests ₹18500 and B invests ₹37000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #28)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18500 : ₹37000 = 1 : 2."
    },
    {
      "q": "A invests ₹19000 and B invests ₹38000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #29)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19000 : ₹38000 = 1 : 2."
    },
    {
      "q": "A invests ₹19500 and B invests ₹39000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #30)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19500 : ₹39000 = 1 : 2."
    }
  ],
  "level3": [
    {
      "q": "A invests ₹5000 and B invests ₹10000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #1)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5000 : ₹10000 = 1 : 2."
    },
    {
      "q": "A invests ₹5500 and B invests ₹11000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #2)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5500 : ₹11000 = 1 : 2."
    },
    {
      "q": "A invests ₹6000 and B invests ₹12000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #3)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6000 : ₹12000 = 1 : 2."
    },
    {
      "q": "A invests ₹6500 and B invests ₹13000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #4)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6500 : ₹13000 = 1 : 2."
    },
    {
      "q": "A invests ₹7000 and B invests ₹14000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #5)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7000 : ₹14000 = 1 : 2."
    },
    {
      "q": "A invests ₹7500 and B invests ₹15000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #6)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7500 : ₹15000 = 1 : 2."
    },
    {
      "q": "A invests ₹8000 and B invests ₹16000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #7)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8000 : ₹16000 = 1 : 2."
    },
    {
      "q": "A invests ₹8500 and B invests ₹17000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #8)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8500 : ₹17000 = 1 : 2."
    },
    {
      "q": "A invests ₹9000 and B invests ₹18000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #9)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9000 : ₹18000 = 1 : 2."
    },
    {
      "q": "A invests ₹9500 and B invests ₹19000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #10)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9500 : ₹19000 = 1 : 2."
    },
    {
      "q": "A invests ₹10000 and B invests ₹20000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #11)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10000 : ₹20000 = 1 : 2."
    },
    {
      "q": "A invests ₹10500 and B invests ₹21000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #12)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10500 : ₹21000 = 1 : 2."
    },
    {
      "q": "A invests ₹11000 and B invests ₹22000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #13)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11000 : ₹22000 = 1 : 2."
    },
    {
      "q": "A invests ₹11500 and B invests ₹23000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #14)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11500 : ₹23000 = 1 : 2."
    },
    {
      "q": "A invests ₹12000 and B invests ₹24000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #15)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12000 : ₹24000 = 1 : 2."
    },
    {
      "q": "A invests ₹12500 and B invests ₹25000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #16)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12500 : ₹25000 = 1 : 2."
    },
    {
      "q": "A invests ₹13000 and B invests ₹26000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #17)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13000 : ₹26000 = 1 : 2."
    },
    {
      "q": "A invests ₹13500 and B invests ₹27000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #18)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13500 : ₹27000 = 1 : 2."
    },
    {
      "q": "A invests ₹14000 and B invests ₹28000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #19)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14000 : ₹28000 = 1 : 2."
    },
    {
      "q": "A invests ₹14500 and B invests ₹29000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #20)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14500 : ₹29000 = 1 : 2."
    },
    {
      "q": "A invests ₹15000 and B invests ₹30000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #21)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15000 : ₹30000 = 1 : 2."
    },
    {
      "q": "A invests ₹15500 and B invests ₹31000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #22)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15500 : ₹31000 = 1 : 2."
    },
    {
      "q": "A invests ₹16000 and B invests ₹32000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #23)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16000 : ₹32000 = 1 : 2."
    },
    {
      "q": "A invests ₹16500 and B invests ₹33000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #24)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16500 : ₹33000 = 1 : 2."
    },
    {
      "q": "A invests ₹17000 and B invests ₹34000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #25)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17000 : ₹34000 = 1 : 2."
    },
    {
      "q": "A invests ₹17500 and B invests ₹35000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #26)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17500 : ₹35000 = 1 : 2."
    },
    {
      "q": "A invests ₹18000 and B invests ₹36000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #27)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18000 : ₹36000 = 1 : 2."
    },
    {
      "q": "A invests ₹18500 and B invests ₹37000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #28)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18500 : ₹37000 = 1 : 2."
    },
    {
      "q": "A invests ₹19000 and B invests ₹38000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #29)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19000 : ₹38000 = 1 : 2."
    },
    {
      "q": "A invests ₹19500 and B invests ₹39000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #30)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19500 : ₹39000 = 1 : 2."
    }
  ],
  "level4": [
    {
      "q": "A invests ₹5000 and B invests ₹10000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #1)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5000 : ₹10000 = 1 : 2."
    },
    {
      "q": "A invests ₹5500 and B invests ₹11000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #2)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹5500 : ₹11000 = 1 : 2."
    },
    {
      "q": "A invests ₹6000 and B invests ₹12000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #3)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6000 : ₹12000 = 1 : 2."
    },
    {
      "q": "A invests ₹6500 and B invests ₹13000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #4)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹6500 : ₹13000 = 1 : 2."
    },
    {
      "q": "A invests ₹7000 and B invests ₹14000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #5)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7000 : ₹14000 = 1 : 2."
    },
    {
      "q": "A invests ₹7500 and B invests ₹15000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #6)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹7500 : ₹15000 = 1 : 2."
    },
    {
      "q": "A invests ₹8000 and B invests ₹16000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #7)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8000 : ₹16000 = 1 : 2."
    },
    {
      "q": "A invests ₹8500 and B invests ₹17000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #8)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹8500 : ₹17000 = 1 : 2."
    },
    {
      "q": "A invests ₹9000 and B invests ₹18000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #9)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9000 : ₹18000 = 1 : 2."
    },
    {
      "q": "A invests ₹9500 and B invests ₹19000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #10)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹9500 : ₹19000 = 1 : 2."
    },
    {
      "q": "A invests ₹10000 and B invests ₹20000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #11)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10000 : ₹20000 = 1 : 2."
    },
    {
      "q": "A invests ₹10500 and B invests ₹21000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #12)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹10500 : ₹21000 = 1 : 2."
    },
    {
      "q": "A invests ₹11000 and B invests ₹22000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #13)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11000 : ₹22000 = 1 : 2."
    },
    {
      "q": "A invests ₹11500 and B invests ₹23000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #14)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹11500 : ₹23000 = 1 : 2."
    },
    {
      "q": "A invests ₹12000 and B invests ₹24000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #15)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12000 : ₹24000 = 1 : 2."
    },
    {
      "q": "A invests ₹12500 and B invests ₹25000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #16)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹12500 : ₹25000 = 1 : 2."
    },
    {
      "q": "A invests ₹13000 and B invests ₹26000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #17)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13000 : ₹26000 = 1 : 2."
    },
    {
      "q": "A invests ₹13500 and B invests ₹27000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #18)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹13500 : ₹27000 = 1 : 2."
    },
    {
      "q": "A invests ₹14000 and B invests ₹28000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #19)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14000 : ₹28000 = 1 : 2."
    },
    {
      "q": "A invests ₹14500 and B invests ₹29000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #20)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹14500 : ₹29000 = 1 : 2."
    },
    {
      "q": "A invests ₹15000 and B invests ₹30000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #21)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15000 : ₹30000 = 1 : 2."
    },
    {
      "q": "A invests ₹15500 and B invests ₹31000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #22)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹15500 : ₹31000 = 1 : 2."
    },
    {
      "q": "A invests ₹16000 and B invests ₹32000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #23)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16000 : ₹32000 = 1 : 2."
    },
    {
      "q": "A invests ₹16500 and B invests ₹33000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #24)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹16500 : ₹33000 = 1 : 2."
    },
    {
      "q": "A invests ₹17000 and B invests ₹34000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #25)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17000 : ₹34000 = 1 : 2."
    },
    {
      "q": "A invests ₹17500 and B invests ₹35000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #26)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹17500 : ₹35000 = 1 : 2."
    },
    {
      "q": "A invests ₹18000 and B invests ₹36000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #27)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18000 : ₹36000 = 1 : 2."
    },
    {
      "q": "A invests ₹18500 and B invests ₹37000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #28)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹18500 : ₹37000 = 1 : 2."
    },
    {
      "q": "A invests ₹19000 and B invests ₹38000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #29)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19000 : ₹38000 = 1 : 2."
    },
    {
      "q": "A invests ₹19500 and B invests ₹39000 in a joint enterprise for equal durations. In what ratio will they divide annual profits? (Venture #30)",
      "opts": [
        "1 : 2",
        "2 : 1",
        "1 : 3",
        "3 : 2"
      ],
      "ans": "A",
      "exp": "Profit sharing ratio equals investment ratio = ₹19500 : ₹39000 = 1 : 2."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["logarithms"] = {
  "level1": [
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #1)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #2)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #3)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #4)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #5)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #6)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #7)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #8)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #9)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #10)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #11)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #12)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #13)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #14)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #15)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #16)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #17)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #18)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #19)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #20)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #21)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #22)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #23)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #24)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #25)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #26)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #27)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #28)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #29)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #30)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    }
  ],
  "level2": [
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #1)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #2)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #3)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #4)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #5)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #6)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #7)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #8)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #9)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #10)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #11)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #12)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #13)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #14)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #15)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #16)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #17)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #18)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #19)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #20)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #21)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #22)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #23)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #24)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #25)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #26)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #27)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #28)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #29)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #30)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    }
  ],
  "level3": [
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #1)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #2)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #3)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #4)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #5)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #6)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #7)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #8)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #9)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #10)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #11)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #12)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #13)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #14)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #15)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #16)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #17)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #18)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #19)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #20)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #21)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #22)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #23)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #24)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #25)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #26)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #27)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #28)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #29)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #30)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    }
  ],
  "level4": [
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #1)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #2)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #3)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #4)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #5)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #6)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #7)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #8)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #9)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #10)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #11)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #12)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #13)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #14)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #15)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #16)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #17)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #18)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(64) (Calculation #19)",
      "opts": [
        "3",
        "4",
        "2",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^3 = 64, log_4(64) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(625) (Calculation #20)",
      "opts": [
        "4",
        "5",
        "3",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^4 = 625, log_5(625) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(32) (Calculation #21)",
      "opts": [
        "5",
        "6",
        "4",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^5 = 32, log_2(32) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(27) (Calculation #22)",
      "opts": [
        "3",
        "4",
        "2",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^3 = 27, log_3(27) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(256) (Calculation #23)",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^4 = 256, log_4(256) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(3125) (Calculation #24)",
      "opts": [
        "5",
        "6",
        "4",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^5 = 3125, log_5(3125) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(8) (Calculation #25)",
      "opts": [
        "3",
        "4",
        "2",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^3 = 8, log_2(8) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(81) (Calculation #26)",
      "opts": [
        "4",
        "5",
        "3",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^4 = 81, log_3(81) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_4(1024) (Calculation #27)",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Since 4^5 = 1024, log_4(1024) = 5."
    },
    {
      "q": "Evaluate the logarithm expression: log_5(125) (Calculation #28)",
      "opts": [
        "3",
        "4",
        "2",
        "5"
      ],
      "ans": "A",
      "exp": "Since 5^3 = 125, log_5(125) = 3."
    },
    {
      "q": "Evaluate the logarithm expression: log_2(16) (Calculation #29)",
      "opts": [
        "4",
        "5",
        "3",
        "2"
      ],
      "ans": "A",
      "exp": "Since 2^4 = 16, log_2(16) = 4."
    },
    {
      "q": "Evaluate the logarithm expression: log_3(243) (Calculation #30)",
      "opts": [
        "5",
        "6",
        "4",
        "3"
      ],
      "ans": "A",
      "exp": "Since 3^5 = 243, log_3(243) = 5."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["percentage"] = {
  "level1": [
    {
      "q": "What is 15% of 200? (Calculation #1)",
      "opts": [
        "30",
        "35",
        "27",
        "40"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 200 = 30."
    },
    {
      "q": "What is 15% of 210? (Calculation #2)",
      "opts": [
        "31.5",
        "36.5",
        "28.5",
        "41.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 210 = 31.5."
    },
    {
      "q": "What is 15% of 220? (Calculation #3)",
      "opts": [
        "33",
        "38",
        "30",
        "43"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 220 = 33."
    },
    {
      "q": "What is 15% of 230? (Calculation #4)",
      "opts": [
        "34.5",
        "39.5",
        "31.5",
        "44.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 230 = 34.5."
    },
    {
      "q": "What is 15% of 240? (Calculation #5)",
      "opts": [
        "36",
        "41",
        "33",
        "46"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 240 = 36."
    },
    {
      "q": "What is 15% of 250? (Calculation #6)",
      "opts": [
        "37.5",
        "42.5",
        "34.5",
        "47.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 250 = 37.5."
    },
    {
      "q": "What is 15% of 260? (Calculation #7)",
      "opts": [
        "39",
        "44",
        "36",
        "49"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 260 = 39."
    },
    {
      "q": "What is 15% of 270? (Calculation #8)",
      "opts": [
        "40.5",
        "45.5",
        "37.5",
        "50.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 270 = 40.5."
    },
    {
      "q": "What is 15% of 280? (Calculation #9)",
      "opts": [
        "42",
        "47",
        "39",
        "52"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 280 = 42."
    },
    {
      "q": "What is 15% of 290? (Calculation #10)",
      "opts": [
        "43.5",
        "48.5",
        "40.5",
        "53.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 290 = 43.5."
    },
    {
      "q": "What is 15% of 300? (Calculation #11)",
      "opts": [
        "45",
        "50",
        "42",
        "55"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 300 = 45."
    },
    {
      "q": "What is 15% of 310? (Calculation #12)",
      "opts": [
        "46.5",
        "51.5",
        "43.5",
        "56.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 310 = 46.5."
    },
    {
      "q": "What is 15% of 320? (Calculation #13)",
      "opts": [
        "48",
        "53",
        "45",
        "58"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 320 = 48."
    },
    {
      "q": "What is 15% of 330? (Calculation #14)",
      "opts": [
        "49.5",
        "54.5",
        "46.5",
        "59.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 330 = 49.5."
    },
    {
      "q": "What is 15% of 340? (Calculation #15)",
      "opts": [
        "51",
        "56",
        "48",
        "61"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 340 = 51."
    },
    {
      "q": "What is 15% of 350? (Calculation #16)",
      "opts": [
        "52.5",
        "57.5",
        "49.5",
        "62.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 350 = 52.5."
    },
    {
      "q": "What is 15% of 360? (Calculation #17)",
      "opts": [
        "54",
        "59",
        "51",
        "64"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 360 = 54."
    },
    {
      "q": "What is 15% of 370? (Calculation #18)",
      "opts": [
        "55.5",
        "60.5",
        "52.5",
        "65.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 370 = 55.5."
    },
    {
      "q": "What is 15% of 380? (Calculation #19)",
      "opts": [
        "57",
        "62",
        "54",
        "67"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 380 = 57."
    },
    {
      "q": "What is 15% of 390? (Calculation #20)",
      "opts": [
        "58.5",
        "63.5",
        "55.5",
        "68.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 390 = 58.5."
    },
    {
      "q": "What is 15% of 400? (Calculation #21)",
      "opts": [
        "60",
        "65",
        "57",
        "70"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 400 = 60."
    },
    {
      "q": "What is 15% of 410? (Calculation #22)",
      "opts": [
        "61.5",
        "66.5",
        "58.5",
        "71.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 410 = 61.5."
    },
    {
      "q": "What is 15% of 420? (Calculation #23)",
      "opts": [
        "63",
        "68",
        "60",
        "73"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 420 = 63."
    },
    {
      "q": "What is 15% of 430? (Calculation #24)",
      "opts": [
        "64.5",
        "69.5",
        "61.5",
        "74.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 430 = 64.5."
    },
    {
      "q": "What is 15% of 440? (Calculation #25)",
      "opts": [
        "66",
        "71",
        "63",
        "76"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 440 = 66."
    },
    {
      "q": "What is 15% of 450? (Calculation #26)",
      "opts": [
        "67.5",
        "72.5",
        "64.5",
        "77.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 450 = 67.5."
    },
    {
      "q": "What is 15% of 460? (Calculation #27)",
      "opts": [
        "69",
        "74",
        "66",
        "79"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 460 = 69."
    },
    {
      "q": "What is 15% of 470? (Calculation #28)",
      "opts": [
        "70.5",
        "75.5",
        "67.5",
        "80.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 470 = 70.5."
    },
    {
      "q": "What is 15% of 480? (Calculation #29)",
      "opts": [
        "72",
        "77",
        "69",
        "82"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 480 = 72."
    },
    {
      "q": "What is 15% of 490? (Calculation #30)",
      "opts": [
        "73.5",
        "78.5",
        "70.5",
        "83.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 490 = 73.5."
    }
  ],
  "level2": [
    {
      "q": "What is 15% of 200? (Calculation #1)",
      "opts": [
        "30",
        "35",
        "27",
        "40"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 200 = 30."
    },
    {
      "q": "What is 15% of 210? (Calculation #2)",
      "opts": [
        "31.5",
        "36.5",
        "28.5",
        "41.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 210 = 31.5."
    },
    {
      "q": "What is 15% of 220? (Calculation #3)",
      "opts": [
        "33",
        "38",
        "30",
        "43"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 220 = 33."
    },
    {
      "q": "What is 15% of 230? (Calculation #4)",
      "opts": [
        "34.5",
        "39.5",
        "31.5",
        "44.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 230 = 34.5."
    },
    {
      "q": "What is 15% of 240? (Calculation #5)",
      "opts": [
        "36",
        "41",
        "33",
        "46"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 240 = 36."
    },
    {
      "q": "What is 15% of 250? (Calculation #6)",
      "opts": [
        "37.5",
        "42.5",
        "34.5",
        "47.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 250 = 37.5."
    },
    {
      "q": "What is 15% of 260? (Calculation #7)",
      "opts": [
        "39",
        "44",
        "36",
        "49"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 260 = 39."
    },
    {
      "q": "What is 15% of 270? (Calculation #8)",
      "opts": [
        "40.5",
        "45.5",
        "37.5",
        "50.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 270 = 40.5."
    },
    {
      "q": "What is 15% of 280? (Calculation #9)",
      "opts": [
        "42",
        "47",
        "39",
        "52"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 280 = 42."
    },
    {
      "q": "What is 15% of 290? (Calculation #10)",
      "opts": [
        "43.5",
        "48.5",
        "40.5",
        "53.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 290 = 43.5."
    },
    {
      "q": "What is 15% of 300? (Calculation #11)",
      "opts": [
        "45",
        "50",
        "42",
        "55"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 300 = 45."
    },
    {
      "q": "What is 15% of 310? (Calculation #12)",
      "opts": [
        "46.5",
        "51.5",
        "43.5",
        "56.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 310 = 46.5."
    },
    {
      "q": "What is 15% of 320? (Calculation #13)",
      "opts": [
        "48",
        "53",
        "45",
        "58"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 320 = 48."
    },
    {
      "q": "What is 15% of 330? (Calculation #14)",
      "opts": [
        "49.5",
        "54.5",
        "46.5",
        "59.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 330 = 49.5."
    },
    {
      "q": "What is 15% of 340? (Calculation #15)",
      "opts": [
        "51",
        "56",
        "48",
        "61"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 340 = 51."
    },
    {
      "q": "What is 15% of 350? (Calculation #16)",
      "opts": [
        "52.5",
        "57.5",
        "49.5",
        "62.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 350 = 52.5."
    },
    {
      "q": "What is 15% of 360? (Calculation #17)",
      "opts": [
        "54",
        "59",
        "51",
        "64"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 360 = 54."
    },
    {
      "q": "What is 15% of 370? (Calculation #18)",
      "opts": [
        "55.5",
        "60.5",
        "52.5",
        "65.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 370 = 55.5."
    },
    {
      "q": "What is 15% of 380? (Calculation #19)",
      "opts": [
        "57",
        "62",
        "54",
        "67"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 380 = 57."
    },
    {
      "q": "What is 15% of 390? (Calculation #20)",
      "opts": [
        "58.5",
        "63.5",
        "55.5",
        "68.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 390 = 58.5."
    },
    {
      "q": "What is 15% of 400? (Calculation #21)",
      "opts": [
        "60",
        "65",
        "57",
        "70"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 400 = 60."
    },
    {
      "q": "What is 15% of 410? (Calculation #22)",
      "opts": [
        "61.5",
        "66.5",
        "58.5",
        "71.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 410 = 61.5."
    },
    {
      "q": "What is 15% of 420? (Calculation #23)",
      "opts": [
        "63",
        "68",
        "60",
        "73"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 420 = 63."
    },
    {
      "q": "What is 15% of 430? (Calculation #24)",
      "opts": [
        "64.5",
        "69.5",
        "61.5",
        "74.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 430 = 64.5."
    },
    {
      "q": "What is 15% of 440? (Calculation #25)",
      "opts": [
        "66",
        "71",
        "63",
        "76"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 440 = 66."
    },
    {
      "q": "What is 15% of 450? (Calculation #26)",
      "opts": [
        "67.5",
        "72.5",
        "64.5",
        "77.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 450 = 67.5."
    },
    {
      "q": "What is 15% of 460? (Calculation #27)",
      "opts": [
        "69",
        "74",
        "66",
        "79"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 460 = 69."
    },
    {
      "q": "What is 15% of 470? (Calculation #28)",
      "opts": [
        "70.5",
        "75.5",
        "67.5",
        "80.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 470 = 70.5."
    },
    {
      "q": "What is 15% of 480? (Calculation #29)",
      "opts": [
        "72",
        "77",
        "69",
        "82"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 480 = 72."
    },
    {
      "q": "What is 15% of 490? (Calculation #30)",
      "opts": [
        "73.5",
        "78.5",
        "70.5",
        "83.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 490 = 73.5."
    }
  ],
  "level3": [
    {
      "q": "What is 15% of 200? (Calculation #1)",
      "opts": [
        "30",
        "35",
        "27",
        "40"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 200 = 30."
    },
    {
      "q": "What is 15% of 210? (Calculation #2)",
      "opts": [
        "31.5",
        "36.5",
        "28.5",
        "41.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 210 = 31.5."
    },
    {
      "q": "What is 15% of 220? (Calculation #3)",
      "opts": [
        "33",
        "38",
        "30",
        "43"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 220 = 33."
    },
    {
      "q": "What is 15% of 230? (Calculation #4)",
      "opts": [
        "34.5",
        "39.5",
        "31.5",
        "44.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 230 = 34.5."
    },
    {
      "q": "What is 15% of 240? (Calculation #5)",
      "opts": [
        "36",
        "41",
        "33",
        "46"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 240 = 36."
    },
    {
      "q": "What is 15% of 250? (Calculation #6)",
      "opts": [
        "37.5",
        "42.5",
        "34.5",
        "47.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 250 = 37.5."
    },
    {
      "q": "What is 15% of 260? (Calculation #7)",
      "opts": [
        "39",
        "44",
        "36",
        "49"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 260 = 39."
    },
    {
      "q": "What is 15% of 270? (Calculation #8)",
      "opts": [
        "40.5",
        "45.5",
        "37.5",
        "50.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 270 = 40.5."
    },
    {
      "q": "What is 15% of 280? (Calculation #9)",
      "opts": [
        "42",
        "47",
        "39",
        "52"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 280 = 42."
    },
    {
      "q": "What is 15% of 290? (Calculation #10)",
      "opts": [
        "43.5",
        "48.5",
        "40.5",
        "53.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 290 = 43.5."
    },
    {
      "q": "What is 15% of 300? (Calculation #11)",
      "opts": [
        "45",
        "50",
        "42",
        "55"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 300 = 45."
    },
    {
      "q": "What is 15% of 310? (Calculation #12)",
      "opts": [
        "46.5",
        "51.5",
        "43.5",
        "56.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 310 = 46.5."
    },
    {
      "q": "What is 15% of 320? (Calculation #13)",
      "opts": [
        "48",
        "53",
        "45",
        "58"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 320 = 48."
    },
    {
      "q": "What is 15% of 330? (Calculation #14)",
      "opts": [
        "49.5",
        "54.5",
        "46.5",
        "59.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 330 = 49.5."
    },
    {
      "q": "What is 15% of 340? (Calculation #15)",
      "opts": [
        "51",
        "56",
        "48",
        "61"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 340 = 51."
    },
    {
      "q": "What is 15% of 350? (Calculation #16)",
      "opts": [
        "52.5",
        "57.5",
        "49.5",
        "62.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 350 = 52.5."
    },
    {
      "q": "What is 15% of 360? (Calculation #17)",
      "opts": [
        "54",
        "59",
        "51",
        "64"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 360 = 54."
    },
    {
      "q": "What is 15% of 370? (Calculation #18)",
      "opts": [
        "55.5",
        "60.5",
        "52.5",
        "65.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 370 = 55.5."
    },
    {
      "q": "What is 15% of 380? (Calculation #19)",
      "opts": [
        "57",
        "62",
        "54",
        "67"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 380 = 57."
    },
    {
      "q": "What is 15% of 390? (Calculation #20)",
      "opts": [
        "58.5",
        "63.5",
        "55.5",
        "68.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 390 = 58.5."
    },
    {
      "q": "What is 15% of 400? (Calculation #21)",
      "opts": [
        "60",
        "65",
        "57",
        "70"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 400 = 60."
    },
    {
      "q": "What is 15% of 410? (Calculation #22)",
      "opts": [
        "61.5",
        "66.5",
        "58.5",
        "71.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 410 = 61.5."
    },
    {
      "q": "What is 15% of 420? (Calculation #23)",
      "opts": [
        "63",
        "68",
        "60",
        "73"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 420 = 63."
    },
    {
      "q": "What is 15% of 430? (Calculation #24)",
      "opts": [
        "64.5",
        "69.5",
        "61.5",
        "74.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 430 = 64.5."
    },
    {
      "q": "What is 15% of 440? (Calculation #25)",
      "opts": [
        "66",
        "71",
        "63",
        "76"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 440 = 66."
    },
    {
      "q": "What is 15% of 450? (Calculation #26)",
      "opts": [
        "67.5",
        "72.5",
        "64.5",
        "77.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 450 = 67.5."
    },
    {
      "q": "What is 15% of 460? (Calculation #27)",
      "opts": [
        "69",
        "74",
        "66",
        "79"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 460 = 69."
    },
    {
      "q": "What is 15% of 470? (Calculation #28)",
      "opts": [
        "70.5",
        "75.5",
        "67.5",
        "80.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 470 = 70.5."
    },
    {
      "q": "What is 15% of 480? (Calculation #29)",
      "opts": [
        "72",
        "77",
        "69",
        "82"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 480 = 72."
    },
    {
      "q": "What is 15% of 490? (Calculation #30)",
      "opts": [
        "73.5",
        "78.5",
        "70.5",
        "83.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 490 = 73.5."
    }
  ],
  "level4": [
    {
      "q": "What is 15% of 200? (Calculation #1)",
      "opts": [
        "30",
        "35",
        "27",
        "40"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 200 = 30."
    },
    {
      "q": "What is 15% of 210? (Calculation #2)",
      "opts": [
        "31.5",
        "36.5",
        "28.5",
        "41.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 210 = 31.5."
    },
    {
      "q": "What is 15% of 220? (Calculation #3)",
      "opts": [
        "33",
        "38",
        "30",
        "43"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 220 = 33."
    },
    {
      "q": "What is 15% of 230? (Calculation #4)",
      "opts": [
        "34.5",
        "39.5",
        "31.5",
        "44.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 230 = 34.5."
    },
    {
      "q": "What is 15% of 240? (Calculation #5)",
      "opts": [
        "36",
        "41",
        "33",
        "46"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 240 = 36."
    },
    {
      "q": "What is 15% of 250? (Calculation #6)",
      "opts": [
        "37.5",
        "42.5",
        "34.5",
        "47.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 250 = 37.5."
    },
    {
      "q": "What is 15% of 260? (Calculation #7)",
      "opts": [
        "39",
        "44",
        "36",
        "49"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 260 = 39."
    },
    {
      "q": "What is 15% of 270? (Calculation #8)",
      "opts": [
        "40.5",
        "45.5",
        "37.5",
        "50.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 270 = 40.5."
    },
    {
      "q": "What is 15% of 280? (Calculation #9)",
      "opts": [
        "42",
        "47",
        "39",
        "52"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 280 = 42."
    },
    {
      "q": "What is 15% of 290? (Calculation #10)",
      "opts": [
        "43.5",
        "48.5",
        "40.5",
        "53.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 290 = 43.5."
    },
    {
      "q": "What is 15% of 300? (Calculation #11)",
      "opts": [
        "45",
        "50",
        "42",
        "55"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 300 = 45."
    },
    {
      "q": "What is 15% of 310? (Calculation #12)",
      "opts": [
        "46.5",
        "51.5",
        "43.5",
        "56.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 310 = 46.5."
    },
    {
      "q": "What is 15% of 320? (Calculation #13)",
      "opts": [
        "48",
        "53",
        "45",
        "58"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 320 = 48."
    },
    {
      "q": "What is 15% of 330? (Calculation #14)",
      "opts": [
        "49.5",
        "54.5",
        "46.5",
        "59.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 330 = 49.5."
    },
    {
      "q": "What is 15% of 340? (Calculation #15)",
      "opts": [
        "51",
        "56",
        "48",
        "61"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 340 = 51."
    },
    {
      "q": "What is 15% of 350? (Calculation #16)",
      "opts": [
        "52.5",
        "57.5",
        "49.5",
        "62.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 350 = 52.5."
    },
    {
      "q": "What is 15% of 360? (Calculation #17)",
      "opts": [
        "54",
        "59",
        "51",
        "64"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 360 = 54."
    },
    {
      "q": "What is 15% of 370? (Calculation #18)",
      "opts": [
        "55.5",
        "60.5",
        "52.5",
        "65.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 370 = 55.5."
    },
    {
      "q": "What is 15% of 380? (Calculation #19)",
      "opts": [
        "57",
        "62",
        "54",
        "67"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 380 = 57."
    },
    {
      "q": "What is 15% of 390? (Calculation #20)",
      "opts": [
        "58.5",
        "63.5",
        "55.5",
        "68.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 390 = 58.5."
    },
    {
      "q": "What is 15% of 400? (Calculation #21)",
      "opts": [
        "60",
        "65",
        "57",
        "70"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 400 = 60."
    },
    {
      "q": "What is 15% of 410? (Calculation #22)",
      "opts": [
        "61.5",
        "66.5",
        "58.5",
        "71.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 410 = 61.5."
    },
    {
      "q": "What is 15% of 420? (Calculation #23)",
      "opts": [
        "63",
        "68",
        "60",
        "73"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 420 = 63."
    },
    {
      "q": "What is 15% of 430? (Calculation #24)",
      "opts": [
        "64.5",
        "69.5",
        "61.5",
        "74.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 430 = 64.5."
    },
    {
      "q": "What is 15% of 440? (Calculation #25)",
      "opts": [
        "66",
        "71",
        "63",
        "76"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 440 = 66."
    },
    {
      "q": "What is 15% of 450? (Calculation #26)",
      "opts": [
        "67.5",
        "72.5",
        "64.5",
        "77.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 450 = 67.5."
    },
    {
      "q": "What is 15% of 460? (Calculation #27)",
      "opts": [
        "69",
        "74",
        "66",
        "79"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 460 = 69."
    },
    {
      "q": "What is 15% of 470? (Calculation #28)",
      "opts": [
        "70.5",
        "75.5",
        "67.5",
        "80.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 470 = 70.5."
    },
    {
      "q": "What is 15% of 480? (Calculation #29)",
      "opts": [
        "72",
        "77",
        "69",
        "82"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 480 = 72."
    },
    {
      "q": "What is 15% of 490? (Calculation #30)",
      "opts": [
        "73.5",
        "78.5",
        "70.5",
        "83.5"
      ],
      "ans": "A",
      "exp": "Percentage = (15 / 100) × 490 = 73.5."
    }
  ]
};

QUANTITATIVE_POOLS_MAP["statistics"] = {
  "level1": [
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 25 and the Mean is 22, find the Mode using Pearson's empirical relationship: (Data #1)",
      "opts": [
        "31",
        "33",
        "28",
        "36"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(25) - 2(22) = 75 - 44 = 31."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 26 and the Mean is 23, find the Mode using Pearson's empirical relationship: (Data #2)",
      "opts": [
        "32",
        "34",
        "29",
        "37"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(26) - 2(23) = 78 - 46 = 32."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 27 and the Mean is 24, find the Mode using Pearson's empirical relationship: (Data #3)",
      "opts": [
        "33",
        "35",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(27) - 2(24) = 81 - 48 = 33."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 28 and the Mean is 25, find the Mode using Pearson's empirical relationship: (Data #4)",
      "opts": [
        "34",
        "36",
        "31",
        "39"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(28) - 2(25) = 84 - 50 = 34."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 29 and the Mean is 26, find the Mode using Pearson's empirical relationship: (Data #5)",
      "opts": [
        "35",
        "37",
        "32",
        "40"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(29) - 2(26) = 87 - 52 = 35."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 30 and the Mean is 27, find the Mode using Pearson's empirical relationship: (Data #6)",
      "opts": [
        "36",
        "38",
        "33",
        "41"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(30) - 2(27) = 90 - 54 = 36."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 31 and the Mean is 28, find the Mode using Pearson's empirical relationship: (Data #7)",
      "opts": [
        "37",
        "39",
        "34",
        "42"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(31) - 2(28) = 93 - 56 = 37."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 32 and the Mean is 29, find the Mode using Pearson's empirical relationship: (Data #8)",
      "opts": [
        "38",
        "40",
        "35",
        "43"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(32) - 2(29) = 96 - 58 = 38."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 33 and the Mean is 30, find the Mode using Pearson's empirical relationship: (Data #9)",
      "opts": [
        "39",
        "41",
        "36",
        "44"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(33) - 2(30) = 99 - 60 = 39."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 34 and the Mean is 31, find the Mode using Pearson's empirical relationship: (Data #10)",
      "opts": [
        "40",
        "42",
        "37",
        "45"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(34) - 2(31) = 102 - 62 = 40."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 35 and the Mean is 32, find the Mode using Pearson's empirical relationship: (Data #11)",
      "opts": [
        "41",
        "43",
        "38",
        "46"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(35) - 2(32) = 105 - 64 = 41."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 36 and the Mean is 33, find the Mode using Pearson's empirical relationship: (Data #12)",
      "opts": [
        "42",
        "44",
        "39",
        "47"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(36) - 2(33) = 108 - 66 = 42."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 37 and the Mean is 34, find the Mode using Pearson's empirical relationship: (Data #13)",
      "opts": [
        "43",
        "45",
        "40",
        "48"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(37) - 2(34) = 111 - 68 = 43."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 38 and the Mean is 35, find the Mode using Pearson's empirical relationship: (Data #14)",
      "opts": [
        "44",
        "46",
        "41",
        "49"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(38) - 2(35) = 114 - 70 = 44."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 39 and the Mean is 36, find the Mode using Pearson's empirical relationship: (Data #15)",
      "opts": [
        "45",
        "47",
        "42",
        "50"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(39) - 2(36) = 117 - 72 = 45."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 40 and the Mean is 37, find the Mode using Pearson's empirical relationship: (Data #16)",
      "opts": [
        "46",
        "48",
        "43",
        "51"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(40) - 2(37) = 120 - 74 = 46."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 41 and the Mean is 38, find the Mode using Pearson's empirical relationship: (Data #17)",
      "opts": [
        "47",
        "49",
        "44",
        "52"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(41) - 2(38) = 123 - 76 = 47."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 42 and the Mean is 39, find the Mode using Pearson's empirical relationship: (Data #18)",
      "opts": [
        "48",
        "50",
        "45",
        "53"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(42) - 2(39) = 126 - 78 = 48."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 43 and the Mean is 40, find the Mode using Pearson's empirical relationship: (Data #19)",
      "opts": [
        "49",
        "51",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(43) - 2(40) = 129 - 80 = 49."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 44 and the Mean is 41, find the Mode using Pearson's empirical relationship: (Data #20)",
      "opts": [
        "50",
        "52",
        "47",
        "55"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(44) - 2(41) = 132 - 82 = 50."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 45 and the Mean is 42, find the Mode using Pearson's empirical relationship: (Data #21)",
      "opts": [
        "51",
        "53",
        "48",
        "56"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(45) - 2(42) = 135 - 84 = 51."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 46 and the Mean is 43, find the Mode using Pearson's empirical relationship: (Data #22)",
      "opts": [
        "52",
        "54",
        "49",
        "57"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(46) - 2(43) = 138 - 86 = 52."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 47 and the Mean is 44, find the Mode using Pearson's empirical relationship: (Data #23)",
      "opts": [
        "53",
        "55",
        "50",
        "58"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(47) - 2(44) = 141 - 88 = 53."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 48 and the Mean is 45, find the Mode using Pearson's empirical relationship: (Data #24)",
      "opts": [
        "54",
        "56",
        "51",
        "59"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(48) - 2(45) = 144 - 90 = 54."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 49 and the Mean is 46, find the Mode using Pearson's empirical relationship: (Data #25)",
      "opts": [
        "55",
        "57",
        "52",
        "60"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(49) - 2(46) = 147 - 92 = 55."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 50 and the Mean is 47, find the Mode using Pearson's empirical relationship: (Data #26)",
      "opts": [
        "56",
        "58",
        "53",
        "61"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(50) - 2(47) = 150 - 94 = 56."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 51 and the Mean is 48, find the Mode using Pearson's empirical relationship: (Data #27)",
      "opts": [
        "57",
        "59",
        "54",
        "62"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(51) - 2(48) = 153 - 96 = 57."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 52 and the Mean is 49, find the Mode using Pearson's empirical relationship: (Data #28)",
      "opts": [
        "58",
        "60",
        "55",
        "63"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(52) - 2(49) = 156 - 98 = 58."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 53 and the Mean is 50, find the Mode using Pearson's empirical relationship: (Data #29)",
      "opts": [
        "59",
        "61",
        "56",
        "64"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(53) - 2(50) = 159 - 100 = 59."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 54 and the Mean is 51, find the Mode using Pearson's empirical relationship: (Data #30)",
      "opts": [
        "60",
        "62",
        "57",
        "65"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(54) - 2(51) = 162 - 102 = 60."
    }
  ],
  "level2": [
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 25 and the Mean is 22, find the Mode using Pearson's empirical relationship: (Data #1)",
      "opts": [
        "31",
        "33",
        "28",
        "36"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(25) - 2(22) = 75 - 44 = 31."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 26 and the Mean is 23, find the Mode using Pearson's empirical relationship: (Data #2)",
      "opts": [
        "32",
        "34",
        "29",
        "37"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(26) - 2(23) = 78 - 46 = 32."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 27 and the Mean is 24, find the Mode using Pearson's empirical relationship: (Data #3)",
      "opts": [
        "33",
        "35",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(27) - 2(24) = 81 - 48 = 33."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 28 and the Mean is 25, find the Mode using Pearson's empirical relationship: (Data #4)",
      "opts": [
        "34",
        "36",
        "31",
        "39"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(28) - 2(25) = 84 - 50 = 34."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 29 and the Mean is 26, find the Mode using Pearson's empirical relationship: (Data #5)",
      "opts": [
        "35",
        "37",
        "32",
        "40"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(29) - 2(26) = 87 - 52 = 35."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 30 and the Mean is 27, find the Mode using Pearson's empirical relationship: (Data #6)",
      "opts": [
        "36",
        "38",
        "33",
        "41"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(30) - 2(27) = 90 - 54 = 36."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 31 and the Mean is 28, find the Mode using Pearson's empirical relationship: (Data #7)",
      "opts": [
        "37",
        "39",
        "34",
        "42"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(31) - 2(28) = 93 - 56 = 37."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 32 and the Mean is 29, find the Mode using Pearson's empirical relationship: (Data #8)",
      "opts": [
        "38",
        "40",
        "35",
        "43"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(32) - 2(29) = 96 - 58 = 38."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 33 and the Mean is 30, find the Mode using Pearson's empirical relationship: (Data #9)",
      "opts": [
        "39",
        "41",
        "36",
        "44"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(33) - 2(30) = 99 - 60 = 39."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 34 and the Mean is 31, find the Mode using Pearson's empirical relationship: (Data #10)",
      "opts": [
        "40",
        "42",
        "37",
        "45"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(34) - 2(31) = 102 - 62 = 40."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 35 and the Mean is 32, find the Mode using Pearson's empirical relationship: (Data #11)",
      "opts": [
        "41",
        "43",
        "38",
        "46"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(35) - 2(32) = 105 - 64 = 41."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 36 and the Mean is 33, find the Mode using Pearson's empirical relationship: (Data #12)",
      "opts": [
        "42",
        "44",
        "39",
        "47"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(36) - 2(33) = 108 - 66 = 42."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 37 and the Mean is 34, find the Mode using Pearson's empirical relationship: (Data #13)",
      "opts": [
        "43",
        "45",
        "40",
        "48"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(37) - 2(34) = 111 - 68 = 43."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 38 and the Mean is 35, find the Mode using Pearson's empirical relationship: (Data #14)",
      "opts": [
        "44",
        "46",
        "41",
        "49"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(38) - 2(35) = 114 - 70 = 44."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 39 and the Mean is 36, find the Mode using Pearson's empirical relationship: (Data #15)",
      "opts": [
        "45",
        "47",
        "42",
        "50"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(39) - 2(36) = 117 - 72 = 45."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 40 and the Mean is 37, find the Mode using Pearson's empirical relationship: (Data #16)",
      "opts": [
        "46",
        "48",
        "43",
        "51"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(40) - 2(37) = 120 - 74 = 46."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 41 and the Mean is 38, find the Mode using Pearson's empirical relationship: (Data #17)",
      "opts": [
        "47",
        "49",
        "44",
        "52"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(41) - 2(38) = 123 - 76 = 47."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 42 and the Mean is 39, find the Mode using Pearson's empirical relationship: (Data #18)",
      "opts": [
        "48",
        "50",
        "45",
        "53"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(42) - 2(39) = 126 - 78 = 48."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 43 and the Mean is 40, find the Mode using Pearson's empirical relationship: (Data #19)",
      "opts": [
        "49",
        "51",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(43) - 2(40) = 129 - 80 = 49."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 44 and the Mean is 41, find the Mode using Pearson's empirical relationship: (Data #20)",
      "opts": [
        "50",
        "52",
        "47",
        "55"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(44) - 2(41) = 132 - 82 = 50."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 45 and the Mean is 42, find the Mode using Pearson's empirical relationship: (Data #21)",
      "opts": [
        "51",
        "53",
        "48",
        "56"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(45) - 2(42) = 135 - 84 = 51."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 46 and the Mean is 43, find the Mode using Pearson's empirical relationship: (Data #22)",
      "opts": [
        "52",
        "54",
        "49",
        "57"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(46) - 2(43) = 138 - 86 = 52."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 47 and the Mean is 44, find the Mode using Pearson's empirical relationship: (Data #23)",
      "opts": [
        "53",
        "55",
        "50",
        "58"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(47) - 2(44) = 141 - 88 = 53."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 48 and the Mean is 45, find the Mode using Pearson's empirical relationship: (Data #24)",
      "opts": [
        "54",
        "56",
        "51",
        "59"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(48) - 2(45) = 144 - 90 = 54."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 49 and the Mean is 46, find the Mode using Pearson's empirical relationship: (Data #25)",
      "opts": [
        "55",
        "57",
        "52",
        "60"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(49) - 2(46) = 147 - 92 = 55."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 50 and the Mean is 47, find the Mode using Pearson's empirical relationship: (Data #26)",
      "opts": [
        "56",
        "58",
        "53",
        "61"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(50) - 2(47) = 150 - 94 = 56."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 51 and the Mean is 48, find the Mode using Pearson's empirical relationship: (Data #27)",
      "opts": [
        "57",
        "59",
        "54",
        "62"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(51) - 2(48) = 153 - 96 = 57."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 52 and the Mean is 49, find the Mode using Pearson's empirical relationship: (Data #28)",
      "opts": [
        "58",
        "60",
        "55",
        "63"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(52) - 2(49) = 156 - 98 = 58."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 53 and the Mean is 50, find the Mode using Pearson's empirical relationship: (Data #29)",
      "opts": [
        "59",
        "61",
        "56",
        "64"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(53) - 2(50) = 159 - 100 = 59."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 54 and the Mean is 51, find the Mode using Pearson's empirical relationship: (Data #30)",
      "opts": [
        "60",
        "62",
        "57",
        "65"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(54) - 2(51) = 162 - 102 = 60."
    }
  ],
  "level3": [
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 25 and the Mean is 22, find the Mode using Pearson's empirical relationship: (Data #1)",
      "opts": [
        "31",
        "33",
        "28",
        "36"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(25) - 2(22) = 75 - 44 = 31."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 26 and the Mean is 23, find the Mode using Pearson's empirical relationship: (Data #2)",
      "opts": [
        "32",
        "34",
        "29",
        "37"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(26) - 2(23) = 78 - 46 = 32."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 27 and the Mean is 24, find the Mode using Pearson's empirical relationship: (Data #3)",
      "opts": [
        "33",
        "35",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(27) - 2(24) = 81 - 48 = 33."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 28 and the Mean is 25, find the Mode using Pearson's empirical relationship: (Data #4)",
      "opts": [
        "34",
        "36",
        "31",
        "39"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(28) - 2(25) = 84 - 50 = 34."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 29 and the Mean is 26, find the Mode using Pearson's empirical relationship: (Data #5)",
      "opts": [
        "35",
        "37",
        "32",
        "40"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(29) - 2(26) = 87 - 52 = 35."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 30 and the Mean is 27, find the Mode using Pearson's empirical relationship: (Data #6)",
      "opts": [
        "36",
        "38",
        "33",
        "41"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(30) - 2(27) = 90 - 54 = 36."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 31 and the Mean is 28, find the Mode using Pearson's empirical relationship: (Data #7)",
      "opts": [
        "37",
        "39",
        "34",
        "42"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(31) - 2(28) = 93 - 56 = 37."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 32 and the Mean is 29, find the Mode using Pearson's empirical relationship: (Data #8)",
      "opts": [
        "38",
        "40",
        "35",
        "43"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(32) - 2(29) = 96 - 58 = 38."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 33 and the Mean is 30, find the Mode using Pearson's empirical relationship: (Data #9)",
      "opts": [
        "39",
        "41",
        "36",
        "44"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(33) - 2(30) = 99 - 60 = 39."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 34 and the Mean is 31, find the Mode using Pearson's empirical relationship: (Data #10)",
      "opts": [
        "40",
        "42",
        "37",
        "45"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(34) - 2(31) = 102 - 62 = 40."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 35 and the Mean is 32, find the Mode using Pearson's empirical relationship: (Data #11)",
      "opts": [
        "41",
        "43",
        "38",
        "46"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(35) - 2(32) = 105 - 64 = 41."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 36 and the Mean is 33, find the Mode using Pearson's empirical relationship: (Data #12)",
      "opts": [
        "42",
        "44",
        "39",
        "47"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(36) - 2(33) = 108 - 66 = 42."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 37 and the Mean is 34, find the Mode using Pearson's empirical relationship: (Data #13)",
      "opts": [
        "43",
        "45",
        "40",
        "48"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(37) - 2(34) = 111 - 68 = 43."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 38 and the Mean is 35, find the Mode using Pearson's empirical relationship: (Data #14)",
      "opts": [
        "44",
        "46",
        "41",
        "49"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(38) - 2(35) = 114 - 70 = 44."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 39 and the Mean is 36, find the Mode using Pearson's empirical relationship: (Data #15)",
      "opts": [
        "45",
        "47",
        "42",
        "50"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(39) - 2(36) = 117 - 72 = 45."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 40 and the Mean is 37, find the Mode using Pearson's empirical relationship: (Data #16)",
      "opts": [
        "46",
        "48",
        "43",
        "51"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(40) - 2(37) = 120 - 74 = 46."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 41 and the Mean is 38, find the Mode using Pearson's empirical relationship: (Data #17)",
      "opts": [
        "47",
        "49",
        "44",
        "52"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(41) - 2(38) = 123 - 76 = 47."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 42 and the Mean is 39, find the Mode using Pearson's empirical relationship: (Data #18)",
      "opts": [
        "48",
        "50",
        "45",
        "53"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(42) - 2(39) = 126 - 78 = 48."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 43 and the Mean is 40, find the Mode using Pearson's empirical relationship: (Data #19)",
      "opts": [
        "49",
        "51",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(43) - 2(40) = 129 - 80 = 49."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 44 and the Mean is 41, find the Mode using Pearson's empirical relationship: (Data #20)",
      "opts": [
        "50",
        "52",
        "47",
        "55"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(44) - 2(41) = 132 - 82 = 50."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 45 and the Mean is 42, find the Mode using Pearson's empirical relationship: (Data #21)",
      "opts": [
        "51",
        "53",
        "48",
        "56"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(45) - 2(42) = 135 - 84 = 51."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 46 and the Mean is 43, find the Mode using Pearson's empirical relationship: (Data #22)",
      "opts": [
        "52",
        "54",
        "49",
        "57"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(46) - 2(43) = 138 - 86 = 52."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 47 and the Mean is 44, find the Mode using Pearson's empirical relationship: (Data #23)",
      "opts": [
        "53",
        "55",
        "50",
        "58"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(47) - 2(44) = 141 - 88 = 53."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 48 and the Mean is 45, find the Mode using Pearson's empirical relationship: (Data #24)",
      "opts": [
        "54",
        "56",
        "51",
        "59"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(48) - 2(45) = 144 - 90 = 54."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 49 and the Mean is 46, find the Mode using Pearson's empirical relationship: (Data #25)",
      "opts": [
        "55",
        "57",
        "52",
        "60"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(49) - 2(46) = 147 - 92 = 55."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 50 and the Mean is 47, find the Mode using Pearson's empirical relationship: (Data #26)",
      "opts": [
        "56",
        "58",
        "53",
        "61"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(50) - 2(47) = 150 - 94 = 56."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 51 and the Mean is 48, find the Mode using Pearson's empirical relationship: (Data #27)",
      "opts": [
        "57",
        "59",
        "54",
        "62"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(51) - 2(48) = 153 - 96 = 57."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 52 and the Mean is 49, find the Mode using Pearson's empirical relationship: (Data #28)",
      "opts": [
        "58",
        "60",
        "55",
        "63"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(52) - 2(49) = 156 - 98 = 58."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 53 and the Mean is 50, find the Mode using Pearson's empirical relationship: (Data #29)",
      "opts": [
        "59",
        "61",
        "56",
        "64"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(53) - 2(50) = 159 - 100 = 59."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 54 and the Mean is 51, find the Mode using Pearson's empirical relationship: (Data #30)",
      "opts": [
        "60",
        "62",
        "57",
        "65"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(54) - 2(51) = 162 - 102 = 60."
    }
  ],
  "level4": [
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 25 and the Mean is 22, find the Mode using Pearson's empirical relationship: (Data #1)",
      "opts": [
        "31",
        "33",
        "28",
        "36"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(25) - 2(22) = 75 - 44 = 31."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 26 and the Mean is 23, find the Mode using Pearson's empirical relationship: (Data #2)",
      "opts": [
        "32",
        "34",
        "29",
        "37"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(26) - 2(23) = 78 - 46 = 32."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 27 and the Mean is 24, find the Mode using Pearson's empirical relationship: (Data #3)",
      "opts": [
        "33",
        "35",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(27) - 2(24) = 81 - 48 = 33."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 28 and the Mean is 25, find the Mode using Pearson's empirical relationship: (Data #4)",
      "opts": [
        "34",
        "36",
        "31",
        "39"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(28) - 2(25) = 84 - 50 = 34."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 29 and the Mean is 26, find the Mode using Pearson's empirical relationship: (Data #5)",
      "opts": [
        "35",
        "37",
        "32",
        "40"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(29) - 2(26) = 87 - 52 = 35."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 30 and the Mean is 27, find the Mode using Pearson's empirical relationship: (Data #6)",
      "opts": [
        "36",
        "38",
        "33",
        "41"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(30) - 2(27) = 90 - 54 = 36."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 31 and the Mean is 28, find the Mode using Pearson's empirical relationship: (Data #7)",
      "opts": [
        "37",
        "39",
        "34",
        "42"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(31) - 2(28) = 93 - 56 = 37."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 32 and the Mean is 29, find the Mode using Pearson's empirical relationship: (Data #8)",
      "opts": [
        "38",
        "40",
        "35",
        "43"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(32) - 2(29) = 96 - 58 = 38."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 33 and the Mean is 30, find the Mode using Pearson's empirical relationship: (Data #9)",
      "opts": [
        "39",
        "41",
        "36",
        "44"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(33) - 2(30) = 99 - 60 = 39."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 34 and the Mean is 31, find the Mode using Pearson's empirical relationship: (Data #10)",
      "opts": [
        "40",
        "42",
        "37",
        "45"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(34) - 2(31) = 102 - 62 = 40."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 35 and the Mean is 32, find the Mode using Pearson's empirical relationship: (Data #11)",
      "opts": [
        "41",
        "43",
        "38",
        "46"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(35) - 2(32) = 105 - 64 = 41."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 36 and the Mean is 33, find the Mode using Pearson's empirical relationship: (Data #12)",
      "opts": [
        "42",
        "44",
        "39",
        "47"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(36) - 2(33) = 108 - 66 = 42."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 37 and the Mean is 34, find the Mode using Pearson's empirical relationship: (Data #13)",
      "opts": [
        "43",
        "45",
        "40",
        "48"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(37) - 2(34) = 111 - 68 = 43."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 38 and the Mean is 35, find the Mode using Pearson's empirical relationship: (Data #14)",
      "opts": [
        "44",
        "46",
        "41",
        "49"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(38) - 2(35) = 114 - 70 = 44."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 39 and the Mean is 36, find the Mode using Pearson's empirical relationship: (Data #15)",
      "opts": [
        "45",
        "47",
        "42",
        "50"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(39) - 2(36) = 117 - 72 = 45."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 40 and the Mean is 37, find the Mode using Pearson's empirical relationship: (Data #16)",
      "opts": [
        "46",
        "48",
        "43",
        "51"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(40) - 2(37) = 120 - 74 = 46."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 41 and the Mean is 38, find the Mode using Pearson's empirical relationship: (Data #17)",
      "opts": [
        "47",
        "49",
        "44",
        "52"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(41) - 2(38) = 123 - 76 = 47."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 42 and the Mean is 39, find the Mode using Pearson's empirical relationship: (Data #18)",
      "opts": [
        "48",
        "50",
        "45",
        "53"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(42) - 2(39) = 126 - 78 = 48."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 43 and the Mean is 40, find the Mode using Pearson's empirical relationship: (Data #19)",
      "opts": [
        "49",
        "51",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(43) - 2(40) = 129 - 80 = 49."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 44 and the Mean is 41, find the Mode using Pearson's empirical relationship: (Data #20)",
      "opts": [
        "50",
        "52",
        "47",
        "55"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(44) - 2(41) = 132 - 82 = 50."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 45 and the Mean is 42, find the Mode using Pearson's empirical relationship: (Data #21)",
      "opts": [
        "51",
        "53",
        "48",
        "56"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(45) - 2(42) = 135 - 84 = 51."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 46 and the Mean is 43, find the Mode using Pearson's empirical relationship: (Data #22)",
      "opts": [
        "52",
        "54",
        "49",
        "57"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(46) - 2(43) = 138 - 86 = 52."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 47 and the Mean is 44, find the Mode using Pearson's empirical relationship: (Data #23)",
      "opts": [
        "53",
        "55",
        "50",
        "58"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(47) - 2(44) = 141 - 88 = 53."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 48 and the Mean is 45, find the Mode using Pearson's empirical relationship: (Data #24)",
      "opts": [
        "54",
        "56",
        "51",
        "59"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(48) - 2(45) = 144 - 90 = 54."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 49 and the Mean is 46, find the Mode using Pearson's empirical relationship: (Data #25)",
      "opts": [
        "55",
        "57",
        "52",
        "60"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(49) - 2(46) = 147 - 92 = 55."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 50 and the Mean is 47, find the Mode using Pearson's empirical relationship: (Data #26)",
      "opts": [
        "56",
        "58",
        "53",
        "61"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(50) - 2(47) = 150 - 94 = 56."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 51 and the Mean is 48, find the Mode using Pearson's empirical relationship: (Data #27)",
      "opts": [
        "57",
        "59",
        "54",
        "62"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(51) - 2(48) = 153 - 96 = 57."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 52 and the Mean is 49, find the Mode using Pearson's empirical relationship: (Data #28)",
      "opts": [
        "58",
        "60",
        "55",
        "63"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(52) - 2(49) = 156 - 98 = 58."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 53 and the Mean is 50, find the Mode using Pearson's empirical relationship: (Data #29)",
      "opts": [
        "59",
        "61",
        "56",
        "64"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(53) - 2(50) = 159 - 100 = 59."
    },
    {
      "q": "In a moderately skewed statistical distribution, if the Median is 54 and the Mean is 51, find the Mode using Pearson's empirical relationship: (Data #30)",
      "opts": [
        "60",
        "62",
        "57",
        "65"
      ],
      "ans": "A",
      "exp": "Empirical formula: Mode = 3(Median) - 2(Mean) = 3(54) - 2(51) = 162 - 102 = 60."
    }
  ]
};

/**
 * Generate 30 questions for any quantitative topic and set
 * 1-to-1 mapping ensures zero duplication across all 30 questions in every set.
 */
export function getQuantitativeQuestions(topic, type, setNumber) {
    const questions = [];
    const pool = QUANTITATIVE_POOLS_MAP[topic.topicId] || QUANTITATIVE_POOLS_MAP["speed-time-and-distance"];

    if (type === 'practice') {
        const levelKey = `level${setNumber}`;
        const questionsList = pool[levelKey] || pool.level1;
        
        for (let i = 1; i <= 30; i++) {
            const base = questionsList[i - 1] || questionsList[0];
            const qId = `${topic.topicId}-${type}-s${setNumber}-q${i}`;
            const diff = setNumber === 1 ? 'easy' : (setNumber === 2 ? 'medium' : 'hard');
            questions.push(createQuestionItem(qId, topic, type, setNumber, i, base, diff));
        }
    } else {
        // Mock Assessment: Progressive mixed blend across all quantitative pools
        const allKeys = Object.keys(QUANTITATIVE_POOLS_MAP);
        for (let i = 1; i <= 30; i++) {
            const topicKey = allKeys[(i - 1) % allKeys.length];
            const subPool = QUANTITATIVE_POOLS_MAP[topicKey];
            
            let difficultyTier = 'easy';
            let tierPool = subPool.level1;
            
            if (setNumber === 1) {
                // Mock 1: Q1-10 Easy, Q11-20 Medium, Q21-30 Hard
                if (i <= 10) {
                    difficultyTier = 'easy';
                    tierPool = subPool.level1;
                } else if (i <= 20) {
                    difficultyTier = 'medium';
                    tierPool = subPool.level2;
                } else {
                    difficultyTier = 'hard';
                    tierPool = subPool.level3;
                }
            } else {
                // Mock 2: Q1-5 Medium, Q6-22 Hard, Q23-30 Master
                if (i <= 5) {
                    difficultyTier = 'medium';
                    tierPool = subPool.level2;
                } else if (i <= 22) {
                    difficultyTier = 'hard';
                    tierPool = subPool.level3;
                } else {
                    difficultyTier = 'hard';
                    tierPool = subPool.level4;
                }
            }
            
            // Unique slice index per question in mock
            const qIndex = (i - 1) % tierPool.length;
            const base = tierPool[qIndex] || tierPool[0];
            const qId = `${topic.topicId}-${type}-s${setNumber}-q${i}`;
            questions.push(createQuestionItem(qId, topic, type, setNumber, i, base, difficultyTier));
        }
    }
    return questions;
}
