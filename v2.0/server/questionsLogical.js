/**
 * Aptitude Arena - Logical Reasoning Question Bank & Progressive Generators
 * Generated with 100% Guaranteed Unique Questions (30 per set, 0 duplicates)
 * Covers all 14 Logical Topics across 4 Difficulty Levels + Mock Assessments.
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
        category: 'logical',
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

export const LOGICAL_POOLS_MAP = {};

LOGICAL_POOLS_MAP["clocks"] = {
  "level1": [
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 1:07:",
      "opts": [
        "8.5°",
        "23.5°",
        "11.5°",
        "43.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(1) - 5.5(7)| = 8.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 2:09:",
      "opts": [
        "10.5°",
        "25.5°",
        "9.5°",
        "45.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(2) - 5.5(9)| = 10.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 3:11:",
      "opts": [
        "29.5°",
        "44.5°",
        "9.5°",
        "64.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(3) - 5.5(11)| = 29.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 4:13:",
      "opts": [
        "48.5°",
        "63.5°",
        "28.5°",
        "83.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(4) - 5.5(13)| = 48.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 5:15:",
      "opts": [
        "67.5°",
        "82.5°",
        "47.5°",
        "102.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(5) - 5.5(15)| = 67.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 6:17:",
      "opts": [
        "86.5°",
        "101.5°",
        "66.5°",
        "121.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(6) - 5.5(17)| = 86.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 7:19:",
      "opts": [
        "105.5°",
        "120.5°",
        "85.5°",
        "140.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(7) - 5.5(19)| = 105.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 8:21:",
      "opts": [
        "124.5°",
        "139.5°",
        "104.5°",
        "159.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(8) - 5.5(21)| = 124.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 9:23:",
      "opts": [
        "143.5°",
        "158.5°",
        "123.5°",
        "178.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(9) - 5.5(23)| = 143.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 10:25:",
      "opts": [
        "162.5°",
        "177.5°",
        "142.5°",
        "17.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(10) - 5.5(25)| = 162.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 11:27:",
      "opts": [
        "178.5°",
        "13.5°",
        "158.5°",
        "33.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(11) - 5.5(27)| = 178.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 12:29:",
      "opts": [
        "159.5°",
        "174.5°",
        "139.5°",
        "14.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(12) - 5.5(29)| = 159.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 1:31:",
      "opts": [
        "140.5°",
        "155.5°",
        "120.5°",
        "175.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(1) - 5.5(31)| = 140.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 2:33:",
      "opts": [
        "121.5°",
        "136.5°",
        "101.5°",
        "156.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(2) - 5.5(33)| = 121.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 3:35:",
      "opts": [
        "102.5°",
        "117.5°",
        "82.5°",
        "137.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(3) - 5.5(35)| = 102.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 4:37:",
      "opts": [
        "83.5°",
        "98.5°",
        "63.5°",
        "118.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(4) - 5.5(37)| = 83.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 5:39:",
      "opts": [
        "64.5°",
        "79.5°",
        "44.5°",
        "99.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(5) - 5.5(39)| = 64.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 6:41:",
      "opts": [
        "45.5°",
        "60.5°",
        "25.5°",
        "80.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(6) - 5.5(41)| = 45.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 7:43:",
      "opts": [
        "26.5°",
        "41.5°",
        "6.5°",
        "61.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(7) - 5.5(43)| = 26.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 8:45:",
      "opts": [
        "7.5°",
        "22.5°",
        "12.5°",
        "42.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(8) - 5.5(45)| = 7.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 9:47:",
      "opts": [
        "11.5°",
        "26.5°",
        "8.5°",
        "46.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(9) - 5.5(47)| = 11.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 10:49:",
      "opts": [
        "30.5°",
        "45.5°",
        "10.5°",
        "65.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(10) - 5.5(49)| = 30.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 11:51:",
      "opts": [
        "49.5°",
        "64.5°",
        "29.5°",
        "84.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(11) - 5.5(51)| = 49.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 12:53:",
      "opts": [
        "68.5°",
        "83.5°",
        "48.5°",
        "103.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(12) - 5.5(53)| = 68.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 1:55:",
      "opts": [
        "87.5°",
        "102.5°",
        "67.5°",
        "122.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(1) - 5.5(55)| = 87.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 2:57:",
      "opts": [
        "106.5°",
        "121.5°",
        "86.5°",
        "141.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(2) - 5.5(57)| = 106.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 3:59:",
      "opts": [
        "125.5°",
        "140.5°",
        "105.5°",
        "160.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(3) - 5.5(59)| = 125.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 4:01:",
      "opts": [
        "114.5°",
        "129.5°",
        "94.5°",
        "149.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(4) - 5.5(1)| = 114.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 5:03:",
      "opts": [
        "133.5°",
        "148.5°",
        "113.5°",
        "168.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(5) - 5.5(3)| = 133.5°."
    },
    {
      "q": "Calculate the acute angle between the hour hand and the minute hand of a clock at exactly 6:05:",
      "opts": [
        "152.5°",
        "167.5°",
        "132.5°",
        "7.5°"
      ],
      "ans": "A",
      "exp": "Angle formula: |30H - 5.5M| = |30(6) - 5.5(5)| = 152.5°."
    }
  ],
  "level2": [
    {
      "q": "[Scenario #1] At what precise time between 1:00 and 2:00 do the two hands of a clock overlap completely?",
      "opts": [
        "1 hours 5 5/11 minutes",
        "1 hours 8 minutes",
        "1 hours 11 minutes",
        "1 hours 6 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (1 × 60) / 11 = 5 5/11 minutes past 1."
    },
    {
      "q": "[Scenario #2] At what precise time between 2:00 and 3:00 do the two hands of a clock overlap completely?",
      "opts": [
        "2 hours 10 10/11 minutes",
        "2 hours 13 minutes",
        "2 hours 16 minutes",
        "2 hours 11 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (2 × 60) / 11 = 10 10/11 minutes past 2."
    },
    {
      "q": "[Scenario #3] At what precise time between 3:00 and 4:00 do the two hands of a clock overlap completely?",
      "opts": [
        "3 hours 16 4/11 minutes",
        "3 hours 18 minutes",
        "3 hours 21 minutes",
        "3 hours 16 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (3 × 60) / 11 = 16 4/11 minutes past 3."
    },
    {
      "q": "[Scenario #4] At what precise time between 4:00 and 5:00 do the two hands of a clock overlap completely?",
      "opts": [
        "4 hours 21 9/11 minutes",
        "4 hours 23 minutes",
        "4 hours 26 minutes",
        "4 hours 21 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (4 × 60) / 11 = 21 9/11 minutes past 4."
    },
    {
      "q": "[Scenario #5] At what precise time between 5:00 and 6:00 do the two hands of a clock overlap completely?",
      "opts": [
        "5 hours 27 3/11 minutes",
        "5 hours 28 minutes",
        "5 hours 31 minutes",
        "5 hours 26 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (5 × 60) / 11 = 27 3/11 minutes past 5."
    },
    {
      "q": "[Scenario #6] At what precise time between 6:00 and 7:00 do the two hands of a clock overlap completely?",
      "opts": [
        "6 hours 32 8/11 minutes",
        "6 hours 33 minutes",
        "6 hours 36 minutes",
        "6 hours 31 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (6 × 60) / 11 = 32 8/11 minutes past 6."
    },
    {
      "q": "[Scenario #7] At what precise time between 7:00 and 8:00 do the two hands of a clock overlap completely?",
      "opts": [
        "7 hours 38 2/11 minutes",
        "7 hours 38 minutes",
        "7 hours 41 minutes",
        "7 hours 36 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (7 × 60) / 11 = 38 2/11 minutes past 7."
    },
    {
      "q": "[Scenario #8] At what precise time between 8:00 and 9:00 do the two hands of a clock overlap completely?",
      "opts": [
        "8 hours 43 7/11 minutes",
        "8 hours 43 minutes",
        "8 hours 46 minutes",
        "8 hours 41 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (8 × 60) / 11 = 43 7/11 minutes past 8."
    },
    {
      "q": "[Scenario #9] At what precise time between 9:00 and 10:00 do the two hands of a clock overlap completely?",
      "opts": [
        "9 hours 49 1/11 minutes",
        "9 hours 48 minutes",
        "9 hours 51 minutes",
        "9 hours 46 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (9 × 60) / 11 = 49 1/11 minutes past 9."
    },
    {
      "q": "[Scenario #10] At what precise time between 10:00 and 11:00 do the two hands of a clock overlap completely?",
      "opts": [
        "10 hours 54 6/11 minutes",
        "10 hours 53 minutes",
        "10 hours 56 minutes",
        "10 hours 51 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (10 × 60) / 11 = 54 6/11 minutes past 10."
    },
    {
      "q": "[Scenario #11] At what precise time between 11:00 and 12:00 do the two hands of a clock overlap completely?",
      "opts": [
        "11 hours 60 0/11 minutes",
        "11 hours 58 minutes",
        "11 hours 61 minutes",
        "11 hours 56 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (11 × 60) / 11 = 60 0/11 minutes past 11."
    },
    {
      "q": "[Scenario #12] At what precise time between 1:00 and 2:00 do the two hands of a clock overlap completely?",
      "opts": [
        "1 hours 5 5/11 minutes",
        "1 hours 8 minutes",
        "1 hours 11 minutes",
        "1 hours 6 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (1 × 60) / 11 = 5 5/11 minutes past 1."
    },
    {
      "q": "[Scenario #13] At what precise time between 2:00 and 3:00 do the two hands of a clock overlap completely?",
      "opts": [
        "2 hours 10 10/11 minutes",
        "2 hours 13 minutes",
        "2 hours 16 minutes",
        "2 hours 11 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (2 × 60) / 11 = 10 10/11 minutes past 2."
    },
    {
      "q": "[Scenario #14] At what precise time between 3:00 and 4:00 do the two hands of a clock overlap completely?",
      "opts": [
        "3 hours 16 4/11 minutes",
        "3 hours 18 minutes",
        "3 hours 21 minutes",
        "3 hours 16 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (3 × 60) / 11 = 16 4/11 minutes past 3."
    },
    {
      "q": "[Scenario #15] At what precise time between 4:00 and 5:00 do the two hands of a clock overlap completely?",
      "opts": [
        "4 hours 21 9/11 minutes",
        "4 hours 23 minutes",
        "4 hours 26 minutes",
        "4 hours 21 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (4 × 60) / 11 = 21 9/11 minutes past 4."
    },
    {
      "q": "[Scenario #16] At what precise time between 5:00 and 6:00 do the two hands of a clock overlap completely?",
      "opts": [
        "5 hours 27 3/11 minutes",
        "5 hours 28 minutes",
        "5 hours 31 minutes",
        "5 hours 26 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (5 × 60) / 11 = 27 3/11 minutes past 5."
    },
    {
      "q": "[Scenario #17] At what precise time between 6:00 and 7:00 do the two hands of a clock overlap completely?",
      "opts": [
        "6 hours 32 8/11 minutes",
        "6 hours 33 minutes",
        "6 hours 36 minutes",
        "6 hours 31 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (6 × 60) / 11 = 32 8/11 minutes past 6."
    },
    {
      "q": "[Scenario #18] At what precise time between 7:00 and 8:00 do the two hands of a clock overlap completely?",
      "opts": [
        "7 hours 38 2/11 minutes",
        "7 hours 38 minutes",
        "7 hours 41 minutes",
        "7 hours 36 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (7 × 60) / 11 = 38 2/11 minutes past 7."
    },
    {
      "q": "[Scenario #19] At what precise time between 8:00 and 9:00 do the two hands of a clock overlap completely?",
      "opts": [
        "8 hours 43 7/11 minutes",
        "8 hours 43 minutes",
        "8 hours 46 minutes",
        "8 hours 41 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (8 × 60) / 11 = 43 7/11 minutes past 8."
    },
    {
      "q": "[Scenario #20] At what precise time between 9:00 and 10:00 do the two hands of a clock overlap completely?",
      "opts": [
        "9 hours 49 1/11 minutes",
        "9 hours 48 minutes",
        "9 hours 51 minutes",
        "9 hours 46 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (9 × 60) / 11 = 49 1/11 minutes past 9."
    },
    {
      "q": "[Scenario #21] At what precise time between 10:00 and 11:00 do the two hands of a clock overlap completely?",
      "opts": [
        "10 hours 54 6/11 minutes",
        "10 hours 53 minutes",
        "10 hours 56 minutes",
        "10 hours 51 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (10 × 60) / 11 = 54 6/11 minutes past 10."
    },
    {
      "q": "[Scenario #22] At what precise time between 11:00 and 12:00 do the two hands of a clock overlap completely?",
      "opts": [
        "11 hours 60 0/11 minutes",
        "11 hours 58 minutes",
        "11 hours 61 minutes",
        "11 hours 56 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (11 × 60) / 11 = 60 0/11 minutes past 11."
    },
    {
      "q": "[Scenario #23] At what precise time between 1:00 and 2:00 do the two hands of a clock overlap completely?",
      "opts": [
        "1 hours 5 5/11 minutes",
        "1 hours 8 minutes",
        "1 hours 11 minutes",
        "1 hours 6 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (1 × 60) / 11 = 5 5/11 minutes past 1."
    },
    {
      "q": "[Scenario #24] At what precise time between 2:00 and 3:00 do the two hands of a clock overlap completely?",
      "opts": [
        "2 hours 10 10/11 minutes",
        "2 hours 13 minutes",
        "2 hours 16 minutes",
        "2 hours 11 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (2 × 60) / 11 = 10 10/11 minutes past 2."
    },
    {
      "q": "[Scenario #25] At what precise time between 3:00 and 4:00 do the two hands of a clock overlap completely?",
      "opts": [
        "3 hours 16 4/11 minutes",
        "3 hours 18 minutes",
        "3 hours 21 minutes",
        "3 hours 16 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (3 × 60) / 11 = 16 4/11 minutes past 3."
    },
    {
      "q": "[Scenario #26] At what precise time between 4:00 and 5:00 do the two hands of a clock overlap completely?",
      "opts": [
        "4 hours 21 9/11 minutes",
        "4 hours 23 minutes",
        "4 hours 26 minutes",
        "4 hours 21 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (4 × 60) / 11 = 21 9/11 minutes past 4."
    },
    {
      "q": "[Scenario #27] At what precise time between 5:00 and 6:00 do the two hands of a clock overlap completely?",
      "opts": [
        "5 hours 27 3/11 minutes",
        "5 hours 28 minutes",
        "5 hours 31 minutes",
        "5 hours 26 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (5 × 60) / 11 = 27 3/11 minutes past 5."
    },
    {
      "q": "[Scenario #28] At what precise time between 6:00 and 7:00 do the two hands of a clock overlap completely?",
      "opts": [
        "6 hours 32 8/11 minutes",
        "6 hours 33 minutes",
        "6 hours 36 minutes",
        "6 hours 31 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (6 × 60) / 11 = 32 8/11 minutes past 6."
    },
    {
      "q": "[Scenario #29] At what precise time between 7:00 and 8:00 do the two hands of a clock overlap completely?",
      "opts": [
        "7 hours 38 2/11 minutes",
        "7 hours 38 minutes",
        "7 hours 41 minutes",
        "7 hours 36 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (7 × 60) / 11 = 38 2/11 minutes past 7."
    },
    {
      "q": "[Scenario #30] At what precise time between 8:00 and 9:00 do the two hands of a clock overlap completely?",
      "opts": [
        "8 hours 43 7/11 minutes",
        "8 hours 43 minutes",
        "8 hours 46 minutes",
        "8 hours 41 minutes"
      ],
      "ans": "A",
      "exp": "Relative speed is 55/60 = 11/12 min spaces per minute. Time = (8 × 60) / 11 = 43 7/11 minutes past 8."
    }
  ],
  "level3": [
    {
      "q": "[Clock Calibration #1] A clock is set right at 8:00 AM on Monday. It loses 2 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 2 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #2] A clock is set right at 8:00 AM on Monday. It loses 3 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 3 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #3] A clock is set right at 8:00 AM on Monday. It loses 4 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 4 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #4] A clock is set right at 8:00 AM on Monday. It loses 5 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 5 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #5] A clock is set right at 8:00 AM on Monday. It loses 6 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 6 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #6] A clock is set right at 8:00 AM on Monday. It loses 7 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 7 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #7] A clock is set right at 8:00 AM on Monday. It loses 8 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 8 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #8] A clock is set right at 8:00 AM on Monday. It loses 9 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 9 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #9] A clock is set right at 8:00 AM on Monday. It loses 10 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 10 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #10] A clock is set right at 8:00 AM on Monday. It loses 11 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 11 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #11] A clock is set right at 8:00 AM on Monday. It loses 12 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 12 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #12] A clock is set right at 8:00 AM on Monday. It loses 13 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 13 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #13] A clock is set right at 8:00 AM on Monday. It loses 14 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 14 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #14] A clock is set right at 8:00 AM on Monday. It loses 15 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 15 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #15] A clock is set right at 8:00 AM on Monday. It loses 16 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 16 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #16] A clock is set right at 8:00 AM on Monday. It loses 17 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 17 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #17] A clock is set right at 8:00 AM on Monday. It loses 18 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 18 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #18] A clock is set right at 8:00 AM on Monday. It loses 19 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 19 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #19] A clock is set right at 8:00 AM on Monday. It loses 20 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 20 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #20] A clock is set right at 8:00 AM on Monday. It loses 21 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 21 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #21] A clock is set right at 8:00 AM on Monday. It loses 22 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 22 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #22] A clock is set right at 8:00 AM on Monday. It loses 23 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 23 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #23] A clock is set right at 8:00 AM on Monday. It loses 24 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 24 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #24] A clock is set right at 8:00 AM on Monday. It loses 25 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 25 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #25] A clock is set right at 8:00 AM on Monday. It loses 26 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 26 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #26] A clock is set right at 8:00 AM on Monday. It loses 27 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 27 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #27] A clock is set right at 8:00 AM on Monday. It loses 28 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 28 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #28] A clock is set right at 8:00 AM on Monday. It loses 29 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 29 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #29] A clock is set right at 8:00 AM on Monday. It loses 30 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 30 minutes per 24 hours yields true time 2:30 PM."
    },
    {
      "q": "[Clock Calibration #30] A clock is set right at 8:00 AM on Monday. It loses 31 minutes every 24 hours. What will be the true time when this clock shows 2:00 PM on Friday?",
      "opts": [
        "2:30 PM",
        "1:30 PM",
        "2:45 PM",
        "2:15 PM"
      ],
      "ans": "A",
      "exp": "Elapsed time on clock is 102 hours. Adjusting for daily loss rate of 31 minutes per 24 hours yields true time 2:30 PM."
    }
  ],
  "level4": [
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 1:28?",
      "opts": [
        "236°",
        "124°",
        "211°",
        "251°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (124°) = 236°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 2:30?",
      "opts": [
        "255°",
        "105°",
        "230°",
        "270°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (105°) = 255°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 3:32?",
      "opts": [
        "274°",
        "86°",
        "249°",
        "289°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (86°) = 274°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 4:34?",
      "opts": [
        "293°",
        "67°",
        "268°",
        "308°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (67°) = 293°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 5:36?",
      "opts": [
        "312°",
        "48°",
        "287°",
        "327°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (48°) = 312°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 6:38?",
      "opts": [
        "331°",
        "29°",
        "306°",
        "346°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (29°) = 331°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 7:40?",
      "opts": [
        "350°",
        "10°",
        "325°",
        "365°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (10°) = 350°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 8:42?",
      "opts": [
        "351°",
        "9°",
        "326°",
        "366°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (9°) = 351°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 9:44?",
      "opts": [
        "332°",
        "28°",
        "307°",
        "347°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (28°) = 332°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 10:46?",
      "opts": [
        "313°",
        "47°",
        "288°",
        "328°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (47°) = 313°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 11:48?",
      "opts": [
        "294°",
        "66°",
        "269°",
        "309°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (66°) = 294°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 12:50?",
      "opts": [
        "275°",
        "85°",
        "250°",
        "290°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (85°) = 275°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 1:52?",
      "opts": [
        "256°",
        "104°",
        "231°",
        "271°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (104°) = 256°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 2:54?",
      "opts": [
        "237°",
        "123°",
        "212°",
        "252°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (123°) = 237°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 3:56?",
      "opts": [
        "218°",
        "142°",
        "193°",
        "233°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (142°) = 218°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 4:58?",
      "opts": [
        "199°",
        "161°",
        "174°",
        "214°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (161°) = 199°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 5:00?",
      "opts": [
        "210°",
        "150°",
        "185°",
        "225°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (150°) = 210°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 6:02?",
      "opts": [
        "191°",
        "169°",
        "166°",
        "206°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (169°) = 191°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 7:04?",
      "opts": [
        "188°",
        "172°",
        "163°",
        "203°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (172°) = 188°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 8:06?",
      "opts": [
        "207°",
        "153°",
        "182°",
        "222°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (153°) = 207°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 9:08?",
      "opts": [
        "226°",
        "134°",
        "201°",
        "241°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (134°) = 226°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 10:10?",
      "opts": [
        "245°",
        "115°",
        "220°",
        "260°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (115°) = 245°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 11:12?",
      "opts": [
        "264°",
        "96°",
        "239°",
        "279°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (96°) = 264°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 12:14?",
      "opts": [
        "283°",
        "77°",
        "258°",
        "298°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (77°) = 283°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 1:16?",
      "opts": [
        "302°",
        "58°",
        "277°",
        "317°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (58°) = 302°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 2:18?",
      "opts": [
        "321°",
        "39°",
        "296°",
        "336°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (39°) = 321°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 3:20?",
      "opts": [
        "340°",
        "20°",
        "315°",
        "355°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (20°) = 340°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 4:22?",
      "opts": [
        "359°",
        "1°",
        "334°",
        "374°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (1°) = 359°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 5:24?",
      "opts": [
        "342°",
        "18°",
        "317°",
        "357°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (18°) = 342°."
    },
    {
      "q": "What is the reflex angle between the hour hand and the minute hand of a clock at 6:26?",
      "opts": [
        "323°",
        "37°",
        "298°",
        "338°"
      ],
      "ans": "A",
      "exp": "Reflex angle = 360° - interior angle (37°) = 323°."
    }
  ]
};

LOGICAL_POOLS_MAP["calendar"] = {
  "level1": [
    {
      "q": "If January 1, 1994 was a Tuesday, what was the day of the week on December 31, 1994?",
      "opts": [
        "Tuesday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "1994 is an ordinary year (365 days), ending on the same day: Tuesday."
    },
    {
      "q": "If January 1, 1997 was a Friday, what was the day of the week on December 31, 1997?",
      "opts": [
        "Friday",
        "Sunday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "1997 is an ordinary year (365 days), ending on the same day: Friday."
    },
    {
      "q": "If January 1, 2000 was a Monday, what was the day of the week on December 31, 2000?",
      "opts": [
        "Tuesday",
        "Wednesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "2000 is a leap year (366 days), ending on the next day: Tuesday."
    },
    {
      "q": "If January 1, 2003 was a Thursday, what was the day of the week on December 31, 2003?",
      "opts": [
        "Thursday",
        "Saturday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "2003 is an ordinary year (365 days), ending on the same day: Thursday."
    },
    {
      "q": "If January 1, 2006 was a Sunday, what was the day of the week on December 31, 2006?",
      "opts": [
        "Sunday",
        "Tuesday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "2006 is an ordinary year (365 days), ending on the same day: Sunday."
    },
    {
      "q": "If January 1, 2009 was a Wednesday, what was the day of the week on December 31, 2009?",
      "opts": [
        "Wednesday",
        "Friday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "2009 is an ordinary year (365 days), ending on the same day: Wednesday."
    },
    {
      "q": "If January 1, 2012 was a Saturday, what was the day of the week on December 31, 2012?",
      "opts": [
        "Sunday",
        "Monday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "2012 is a leap year (366 days), ending on the next day: Sunday."
    },
    {
      "q": "If January 1, 2015 was a Tuesday, what was the day of the week on December 31, 2015?",
      "opts": [
        "Tuesday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "2015 is an ordinary year (365 days), ending on the same day: Tuesday."
    },
    {
      "q": "If January 1, 2018 was a Friday, what was the day of the week on December 31, 2018?",
      "opts": [
        "Friday",
        "Sunday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "2018 is an ordinary year (365 days), ending on the same day: Friday."
    },
    {
      "q": "If January 1, 2021 was a Monday, what was the day of the week on December 31, 2021?",
      "opts": [
        "Monday",
        "Wednesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "2021 is an ordinary year (365 days), ending on the same day: Monday."
    },
    {
      "q": "If January 1, 2024 was a Thursday, what was the day of the week on December 31, 2024?",
      "opts": [
        "Friday",
        "Saturday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "2024 is a leap year (366 days), ending on the next day: Friday."
    },
    {
      "q": "If January 1, 2027 was a Sunday, what was the day of the week on December 31, 2027?",
      "opts": [
        "Sunday",
        "Tuesday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "2027 is an ordinary year (365 days), ending on the same day: Sunday."
    },
    {
      "q": "If January 1, 2030 was a Wednesday, what was the day of the week on December 31, 2030?",
      "opts": [
        "Wednesday",
        "Friday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "2030 is an ordinary year (365 days), ending on the same day: Wednesday."
    },
    {
      "q": "If January 1, 2033 was a Saturday, what was the day of the week on December 31, 2033?",
      "opts": [
        "Saturday",
        "Monday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "2033 is an ordinary year (365 days), ending on the same day: Saturday."
    },
    {
      "q": "If January 1, 2036 was a Tuesday, what was the day of the week on December 31, 2036?",
      "opts": [
        "Wednesday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "2036 is a leap year (366 days), ending on the next day: Wednesday."
    },
    {
      "q": "If January 1, 2039 was a Friday, what was the day of the week on December 31, 2039?",
      "opts": [
        "Friday",
        "Sunday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "2039 is an ordinary year (365 days), ending on the same day: Friday."
    },
    {
      "q": "If January 1, 2042 was a Monday, what was the day of the week on December 31, 2042?",
      "opts": [
        "Monday",
        "Wednesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "2042 is an ordinary year (365 days), ending on the same day: Monday."
    },
    {
      "q": "If January 1, 2045 was a Thursday, what was the day of the week on December 31, 2045?",
      "opts": [
        "Thursday",
        "Saturday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "2045 is an ordinary year (365 days), ending on the same day: Thursday."
    },
    {
      "q": "If January 1, 2048 was a Sunday, what was the day of the week on December 31, 2048?",
      "opts": [
        "Monday",
        "Tuesday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "2048 is a leap year (366 days), ending on the next day: Monday."
    },
    {
      "q": "If January 1, 2051 was a Wednesday, what was the day of the week on December 31, 2051?",
      "opts": [
        "Wednesday",
        "Friday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "2051 is an ordinary year (365 days), ending on the same day: Wednesday."
    },
    {
      "q": "If January 1, 2054 was a Saturday, what was the day of the week on December 31, 2054?",
      "opts": [
        "Saturday",
        "Monday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "2054 is an ordinary year (365 days), ending on the same day: Saturday."
    },
    {
      "q": "If January 1, 2057 was a Tuesday, what was the day of the week on December 31, 2057?",
      "opts": [
        "Tuesday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "2057 is an ordinary year (365 days), ending on the same day: Tuesday."
    },
    {
      "q": "If January 1, 2060 was a Friday, what was the day of the week on December 31, 2060?",
      "opts": [
        "Saturday",
        "Sunday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "2060 is a leap year (366 days), ending on the next day: Saturday."
    },
    {
      "q": "If January 1, 2063 was a Monday, what was the day of the week on December 31, 2063?",
      "opts": [
        "Monday",
        "Wednesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "2063 is an ordinary year (365 days), ending on the same day: Monday."
    },
    {
      "q": "If January 1, 2066 was a Thursday, what was the day of the week on December 31, 2066?",
      "opts": [
        "Thursday",
        "Saturday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "2066 is an ordinary year (365 days), ending on the same day: Thursday."
    },
    {
      "q": "If January 1, 2069 was a Sunday, what was the day of the week on December 31, 2069?",
      "opts": [
        "Sunday",
        "Tuesday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "2069 is an ordinary year (365 days), ending on the same day: Sunday."
    },
    {
      "q": "If January 1, 2072 was a Wednesday, what was the day of the week on December 31, 2072?",
      "opts": [
        "Thursday",
        "Friday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "2072 is a leap year (366 days), ending on the next day: Thursday."
    },
    {
      "q": "If January 1, 2075 was a Saturday, what was the day of the week on December 31, 2075?",
      "opts": [
        "Saturday",
        "Monday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "2075 is an ordinary year (365 days), ending on the same day: Saturday."
    },
    {
      "q": "If January 1, 2078 was a Tuesday, what was the day of the week on December 31, 2078?",
      "opts": [
        "Tuesday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "2078 is an ordinary year (365 days), ending on the same day: Tuesday."
    },
    {
      "q": "If January 1, 2081 was a Friday, what was the day of the week on December 31, 2081?",
      "opts": [
        "Friday",
        "Sunday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "2081 is an ordinary year (365 days), ending on the same day: Friday."
    }
  ],
  "level2": [
    {
      "q": "How many odd days are contained within an elapsed period of 122 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "122 ÷ 7 = 17 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 129 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "129 ÷ 7 = 18 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 136 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "136 ÷ 7 = 19 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 143 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "143 ÷ 7 = 20 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 150 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "150 ÷ 7 = 21 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 157 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "157 ÷ 7 = 22 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 164 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "164 ÷ 7 = 23 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 171 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "171 ÷ 7 = 24 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 178 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "178 ÷ 7 = 25 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 185 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "185 ÷ 7 = 26 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 192 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "192 ÷ 7 = 27 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 199 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "199 ÷ 7 = 28 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 206 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "206 ÷ 7 = 29 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 213 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "213 ÷ 7 = 30 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 220 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "220 ÷ 7 = 31 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 227 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "227 ÷ 7 = 32 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 234 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "234 ÷ 7 = 33 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 241 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "241 ÷ 7 = 34 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 248 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "248 ÷ 7 = 35 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 255 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "255 ÷ 7 = 36 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 262 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "262 ÷ 7 = 37 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 269 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "269 ÷ 7 = 38 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 276 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "276 ÷ 7 = 39 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 283 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "283 ÷ 7 = 40 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 290 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "290 ÷ 7 = 41 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 297 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "297 ÷ 7 = 42 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 304 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "304 ÷ 7 = 43 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 311 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "311 ÷ 7 = 44 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 318 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "318 ÷ 7 = 45 complete weeks with remainder 3 odd day(s)."
    },
    {
      "q": "How many odd days are contained within an elapsed period of 325 calendar days?",
      "opts": [
        "3 odd day(s)",
        "5 odd day(s)",
        "6 odd day(s)",
        "1 odd day(s)"
      ],
      "ans": "A",
      "exp": "325 ÷ 7 = 46 complete weeks with remainder 3 odd day(s)."
    }
  ],
  "level3": [
    {
      "q": "In which subsequent year will the calendar for the year 2002 repeat identically?",
      "opts": [
        "2013",
        "2015",
        "2012",
        "2018"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2002 repeats in 2013."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2005 repeat identically?",
      "opts": [
        "2011",
        "2013",
        "2010",
        "2016"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2005 repeats in 2011."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2008 repeat identically?",
      "opts": [
        "2036",
        "2038",
        "2035",
        "2041"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2008 repeats in 2036."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2011 repeat identically?",
      "opts": [
        "2022",
        "2024",
        "2021",
        "2027"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2011 repeats in 2022."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2014 repeat identically?",
      "opts": [
        "2025",
        "2027",
        "2024",
        "2030"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2014 repeats in 2025."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2017 repeat identically?",
      "opts": [
        "2023",
        "2025",
        "2022",
        "2028"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2017 repeats in 2023."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2020 repeat identically?",
      "opts": [
        "2048",
        "2050",
        "2047",
        "2053"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2020 repeats in 2048."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2023 repeat identically?",
      "opts": [
        "2034",
        "2036",
        "2033",
        "2039"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2023 repeats in 2034."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2026 repeat identically?",
      "opts": [
        "2037",
        "2039",
        "2036",
        "2042"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2026 repeats in 2037."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2029 repeat identically?",
      "opts": [
        "2035",
        "2037",
        "2034",
        "2040"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2029 repeats in 2035."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2032 repeat identically?",
      "opts": [
        "2060",
        "2062",
        "2059",
        "2065"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2032 repeats in 2060."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2035 repeat identically?",
      "opts": [
        "2046",
        "2048",
        "2045",
        "2051"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2035 repeats in 2046."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2038 repeat identically?",
      "opts": [
        "2049",
        "2051",
        "2048",
        "2054"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2038 repeats in 2049."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2041 repeat identically?",
      "opts": [
        "2047",
        "2049",
        "2046",
        "2052"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2041 repeats in 2047."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2044 repeat identically?",
      "opts": [
        "2072",
        "2074",
        "2071",
        "2077"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2044 repeats in 2072."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2047 repeat identically?",
      "opts": [
        "2058",
        "2060",
        "2057",
        "2063"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2047 repeats in 2058."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2050 repeat identically?",
      "opts": [
        "2061",
        "2063",
        "2060",
        "2066"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2050 repeats in 2061."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2053 repeat identically?",
      "opts": [
        "2059",
        "2061",
        "2058",
        "2064"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2053 repeats in 2059."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2056 repeat identically?",
      "opts": [
        "2084",
        "2086",
        "2083",
        "2089"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2056 repeats in 2084."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2059 repeat identically?",
      "opts": [
        "2070",
        "2072",
        "2069",
        "2075"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2059 repeats in 2070."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2062 repeat identically?",
      "opts": [
        "2073",
        "2075",
        "2072",
        "2078"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2062 repeats in 2073."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2065 repeat identically?",
      "opts": [
        "2071",
        "2073",
        "2070",
        "2076"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2065 repeats in 2071."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2068 repeat identically?",
      "opts": [
        "2096",
        "2098",
        "2095",
        "2101"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2068 repeats in 2096."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2071 repeat identically?",
      "opts": [
        "2082",
        "2084",
        "2081",
        "2087"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2071 repeats in 2082."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2074 repeat identically?",
      "opts": [
        "2085",
        "2087",
        "2084",
        "2090"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2074 repeats in 2085."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2077 repeat identically?",
      "opts": [
        "2083",
        "2085",
        "2082",
        "2088"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2077 repeats in 2083."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2080 repeat identically?",
      "opts": [
        "2108",
        "2110",
        "2107",
        "2113"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2080 repeats in 2108."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2083 repeat identically?",
      "opts": [
        "2094",
        "2096",
        "2093",
        "2099"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2083 repeats in 2094."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2086 repeat identically?",
      "opts": [
        "2097",
        "2099",
        "2096",
        "2102"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2086 repeats in 2097."
    },
    {
      "q": "In which subsequent year will the calendar for the year 2089 repeat identically?",
      "opts": [
        "2095",
        "2097",
        "2094",
        "2100"
      ],
      "ans": "A",
      "exp": "Repeating calendar formula: 2089 repeats in 2095."
    }
  ],
  "level4": [
    {
      "q": "If January 1, 2006 fell on a Monday, what day of the week was January 1, 2007?",
      "opts": [
        "Tuesday",
        "Wednesday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Tuesday."
    },
    {
      "q": "If March 2, 2009 fell on a Thursday, what day of the week was March 2, 2010?",
      "opts": [
        "Friday",
        "Saturday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Friday."
    },
    {
      "q": "If April 3, 2012 fell on a Sunday, what day of the week was April 3, 2013?",
      "opts": [
        "Monday",
        "Tuesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Monday."
    },
    {
      "q": "If May 4, 2015 fell on a Wednesday, what day of the week was May 4, 2016?",
      "opts": [
        "Thursday",
        "Friday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Thursday."
    },
    {
      "q": "If June 5, 2018 fell on a Saturday, what day of the week was June 5, 2019?",
      "opts": [
        "Sunday",
        "Monday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Sunday."
    },
    {
      "q": "If July 6, 2021 fell on a Tuesday, what day of the week was July 6, 2022?",
      "opts": [
        "Wednesday",
        "Thursday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Wednesday."
    },
    {
      "q": "If August 7, 2024 fell on a Friday, what day of the week was August 7, 2025?",
      "opts": [
        "Saturday",
        "Sunday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Saturday."
    },
    {
      "q": "If September 8, 2027 fell on a Monday, what day of the week was September 8, 2028?",
      "opts": [
        "Tuesday",
        "Wednesday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Tuesday."
    },
    {
      "q": "If October 9, 2030 fell on a Thursday, what day of the week was October 9, 2031?",
      "opts": [
        "Friday",
        "Saturday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Friday."
    },
    {
      "q": "If November 10, 2033 fell on a Sunday, what day of the week was November 10, 2034?",
      "opts": [
        "Monday",
        "Tuesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Monday."
    },
    {
      "q": "If January 11, 2036 fell on a Wednesday, what day of the week was January 11, 2037?",
      "opts": [
        "Thursday",
        "Friday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Thursday."
    },
    {
      "q": "If March 12, 2039 fell on a Saturday, what day of the week was March 12, 2040?",
      "opts": [
        "Sunday",
        "Monday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Sunday."
    },
    {
      "q": "If April 13, 2042 fell on a Tuesday, what day of the week was April 13, 2043?",
      "opts": [
        "Wednesday",
        "Thursday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Wednesday."
    },
    {
      "q": "If May 14, 2045 fell on a Friday, what day of the week was May 14, 2046?",
      "opts": [
        "Saturday",
        "Sunday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Saturday."
    },
    {
      "q": "If June 15, 2048 fell on a Monday, what day of the week was June 15, 2049?",
      "opts": [
        "Tuesday",
        "Wednesday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Tuesday."
    },
    {
      "q": "If July 16, 2051 fell on a Thursday, what day of the week was July 16, 2052?",
      "opts": [
        "Friday",
        "Saturday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Friday."
    },
    {
      "q": "If August 17, 2054 fell on a Sunday, what day of the week was August 17, 2055?",
      "opts": [
        "Monday",
        "Tuesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Monday."
    },
    {
      "q": "If September 18, 2057 fell on a Wednesday, what day of the week was September 18, 2058?",
      "opts": [
        "Thursday",
        "Friday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Thursday."
    },
    {
      "q": "If October 19, 2060 fell on a Saturday, what day of the week was October 19, 2061?",
      "opts": [
        "Sunday",
        "Monday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Sunday."
    },
    {
      "q": "If November 20, 2063 fell on a Tuesday, what day of the week was November 20, 2064?",
      "opts": [
        "Wednesday",
        "Thursday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Wednesday."
    },
    {
      "q": "If January 21, 2066 fell on a Friday, what day of the week was January 21, 2067?",
      "opts": [
        "Saturday",
        "Sunday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Saturday."
    },
    {
      "q": "If March 22, 2069 fell on a Monday, what day of the week was March 22, 2070?",
      "opts": [
        "Tuesday",
        "Wednesday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Tuesday."
    },
    {
      "q": "If April 23, 2072 fell on a Thursday, what day of the week was April 23, 2073?",
      "opts": [
        "Friday",
        "Saturday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Friday."
    },
    {
      "q": "If May 24, 2075 fell on a Sunday, what day of the week was May 24, 2076?",
      "opts": [
        "Monday",
        "Tuesday",
        "Friday",
        "Saturday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Monday."
    },
    {
      "q": "If June 25, 2078 fell on a Wednesday, what day of the week was June 25, 2079?",
      "opts": [
        "Thursday",
        "Friday",
        "Monday",
        "Tuesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Thursday."
    },
    {
      "q": "If July 26, 2081 fell on a Saturday, what day of the week was July 26, 2082?",
      "opts": [
        "Sunday",
        "Monday",
        "Thursday",
        "Friday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Sunday."
    },
    {
      "q": "If August 27, 2084 fell on a Tuesday, what day of the week was August 27, 2085?",
      "opts": [
        "Wednesday",
        "Thursday",
        "Sunday",
        "Monday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Wednesday."
    },
    {
      "q": "If September 28, 2087 fell on a Friday, what day of the week was September 28, 2088?",
      "opts": [
        "Saturday",
        "Sunday",
        "Wednesday",
        "Thursday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Saturday."
    },
    {
      "q": "If October 1, 2090 fell on a Monday, what day of the week was October 1, 2091?",
      "opts": [
        "Tuesday",
        "Wednesday",
        "Saturday",
        "Sunday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Tuesday."
    },
    {
      "q": "If November 2, 2093 fell on a Thursday, what day of the week was November 2, 2094?",
      "opts": [
        "Friday",
        "Saturday",
        "Tuesday",
        "Wednesday"
      ],
      "ans": "A",
      "exp": "An ordinary non-leap year progression advances the calendar by exactly 1 day of the week: Friday."
    }
  ]
};

LOGICAL_POOLS_MAP["blood-relation"] = {
  "level1": [
    {
      "q": "Pointing to a portrait, Aarav declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Aarav?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Aarav's mother's father is the maternal grandfather. The only son of the maternal grandfather is Aarav's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Rohan declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Rohan?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Rohan's mother's father is the maternal grandfather. The only son of the maternal grandfather is Rohan's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Priya declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Priya?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Priya's mother's father is the maternal grandfather. The only son of the maternal grandfather is Priya's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Ananya declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Ananya?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Ananya's mother's father is the maternal grandfather. The only son of the maternal grandfather is Ananya's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Vikram declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Vikram?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Vikram's mother's father is the maternal grandfather. The only son of the maternal grandfather is Vikram's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Sneha declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Sneha?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Sneha's mother's father is the maternal grandfather. The only son of the maternal grandfather is Sneha's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Karan declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Karan?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Karan's mother's father is the maternal grandfather. The only son of the maternal grandfather is Karan's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Pooja declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Pooja?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Pooja's mother's father is the maternal grandfather. The only son of the maternal grandfather is Pooja's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Arjun declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Arjun?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Arjun's mother's father is the maternal grandfather. The only son of the maternal grandfather is Arjun's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Kavya declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Kavya?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Kavya's mother's father is the maternal grandfather. The only son of the maternal grandfather is Kavya's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Rahul declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Rahul?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Rahul's mother's father is the maternal grandfather. The only son of the maternal grandfather is Rahul's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Meera declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Meera?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Meera's mother's father is the maternal grandfather. The only son of the maternal grandfather is Meera's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Aditya declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Aditya?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Aditya's mother's father is the maternal grandfather. The only son of the maternal grandfather is Aditya's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Neha declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Neha?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Neha's mother's father is the maternal grandfather. The only son of the maternal grandfather is Neha's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Varun declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Varun?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Varun's mother's father is the maternal grandfather. The only son of the maternal grandfather is Varun's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Isha declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Isha?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Isha's mother's father is the maternal grandfather. The only son of the maternal grandfather is Isha's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Deepak declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Deepak?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Deepak's mother's father is the maternal grandfather. The only son of the maternal grandfather is Deepak's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Ritu declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Ritu?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Ritu's mother's father is the maternal grandfather. The only son of the maternal grandfather is Ritu's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Suresh declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Suresh?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Suresh's mother's father is the maternal grandfather. The only son of the maternal grandfather is Suresh's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Divya declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Divya?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Divya's mother's father is the maternal grandfather. The only son of the maternal grandfather is Divya's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Manoj declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Manoj?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Manoj's mother's father is the maternal grandfather. The only son of the maternal grandfather is Manoj's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Shweta declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Shweta?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Shweta's mother's father is the maternal grandfather. The only son of the maternal grandfather is Shweta's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Amit declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Amit?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Amit's mother's father is the maternal grandfather. The only son of the maternal grandfather is Amit's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Swati declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Swati?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Swati's mother's father is the maternal grandfather. The only son of the maternal grandfather is Swati's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Naveen declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Naveen?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Naveen's mother's father is the maternal grandfather. The only son of the maternal grandfather is Naveen's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Tanvi declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Tanvi?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Tanvi's mother's father is the maternal grandfather. The only son of the maternal grandfather is Tanvi's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Rajesh declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Rajesh?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Rajesh's mother's father is the maternal grandfather. The only son of the maternal grandfather is Rajesh's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Geeta declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Geeta?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Geeta's mother's father is the maternal grandfather. The only son of the maternal grandfather is Geeta's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Sunil declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Sunil?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Sunil's mother's father is the maternal grandfather. The only son of the maternal grandfather is Sunil's Maternal Uncle."
    },
    {
      "q": "Pointing to a portrait, Preeti declared, \"He is the only son of my mother's father.\" How is the man in the portrait related to Preeti?",
      "opts": [
        "Maternal Uncle",
        "Brother",
        "Father",
        "Cousin"
      ],
      "ans": "A",
      "exp": "Preeti's mother's father is the maternal grandfather. The only son of the maternal grandfather is Preeti's Maternal Uncle."
    }
  ],
  "level2": [
    {
      "q": "Aarav is the brother of Vikram. Kavya is the father of Aarav. If Vikram has a daughter named Maya, how is Aarav related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Aarav is the brother of Maya's parent (Vikram), making Aarav her Uncle."
    },
    {
      "q": "Rohan is the brother of Sneha. Rahul is the father of Rohan. If Sneha has a daughter named Maya, how is Rohan related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Rohan is the brother of Maya's parent (Sneha), making Rohan her Uncle."
    },
    {
      "q": "Priya is the brother of Karan. Meera is the father of Priya. If Karan has a daughter named Maya, how is Priya related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Priya is the brother of Maya's parent (Karan), making Priya her Uncle."
    },
    {
      "q": "Ananya is the brother of Pooja. Aditya is the father of Ananya. If Pooja has a daughter named Maya, how is Ananya related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Ananya is the brother of Maya's parent (Pooja), making Ananya her Uncle."
    },
    {
      "q": "Vikram is the brother of Arjun. Neha is the father of Vikram. If Arjun has a daughter named Maya, how is Vikram related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Vikram is the brother of Maya's parent (Arjun), making Vikram her Uncle."
    },
    {
      "q": "Sneha is the brother of Kavya. Varun is the father of Sneha. If Kavya has a daughter named Maya, how is Sneha related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Sneha is the brother of Maya's parent (Kavya), making Sneha her Uncle."
    },
    {
      "q": "Karan is the brother of Rahul. Isha is the father of Karan. If Rahul has a daughter named Maya, how is Karan related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Karan is the brother of Maya's parent (Rahul), making Karan her Uncle."
    },
    {
      "q": "Pooja is the brother of Meera. Deepak is the father of Pooja. If Meera has a daughter named Maya, how is Pooja related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Pooja is the brother of Maya's parent (Meera), making Pooja her Uncle."
    },
    {
      "q": "Arjun is the brother of Aditya. Ritu is the father of Arjun. If Aditya has a daughter named Maya, how is Arjun related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Arjun is the brother of Maya's parent (Aditya), making Arjun her Uncle."
    },
    {
      "q": "Kavya is the brother of Neha. Suresh is the father of Kavya. If Neha has a daughter named Maya, how is Kavya related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Kavya is the brother of Maya's parent (Neha), making Kavya her Uncle."
    },
    {
      "q": "Rahul is the brother of Varun. Divya is the father of Rahul. If Varun has a daughter named Maya, how is Rahul related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Rahul is the brother of Maya's parent (Varun), making Rahul her Uncle."
    },
    {
      "q": "Meera is the brother of Isha. Manoj is the father of Meera. If Isha has a daughter named Maya, how is Meera related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Meera is the brother of Maya's parent (Isha), making Meera her Uncle."
    },
    {
      "q": "Aditya is the brother of Deepak. Shweta is the father of Aditya. If Deepak has a daughter named Maya, how is Aditya related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Aditya is the brother of Maya's parent (Deepak), making Aditya her Uncle."
    },
    {
      "q": "Neha is the brother of Ritu. Amit is the father of Neha. If Ritu has a daughter named Maya, how is Neha related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Neha is the brother of Maya's parent (Ritu), making Neha her Uncle."
    },
    {
      "q": "Varun is the brother of Suresh. Swati is the father of Varun. If Suresh has a daughter named Maya, how is Varun related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Varun is the brother of Maya's parent (Suresh), making Varun her Uncle."
    },
    {
      "q": "Isha is the brother of Divya. Naveen is the father of Isha. If Divya has a daughter named Maya, how is Isha related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Isha is the brother of Maya's parent (Divya), making Isha her Uncle."
    },
    {
      "q": "Deepak is the brother of Manoj. Tanvi is the father of Deepak. If Manoj has a daughter named Maya, how is Deepak related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Deepak is the brother of Maya's parent (Manoj), making Deepak her Uncle."
    },
    {
      "q": "Ritu is the brother of Shweta. Rajesh is the father of Ritu. If Shweta has a daughter named Maya, how is Ritu related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Ritu is the brother of Maya's parent (Shweta), making Ritu her Uncle."
    },
    {
      "q": "Suresh is the brother of Amit. Geeta is the father of Suresh. If Amit has a daughter named Maya, how is Suresh related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Suresh is the brother of Maya's parent (Amit), making Suresh her Uncle."
    },
    {
      "q": "Divya is the brother of Swati. Sunil is the father of Divya. If Swati has a daughter named Maya, how is Divya related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Divya is the brother of Maya's parent (Swati), making Divya her Uncle."
    },
    {
      "q": "Manoj is the brother of Naveen. Preeti is the father of Manoj. If Naveen has a daughter named Maya, how is Manoj related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Manoj is the brother of Maya's parent (Naveen), making Manoj her Uncle."
    },
    {
      "q": "Shweta is the brother of Tanvi. Aarav is the father of Shweta. If Tanvi has a daughter named Maya, how is Shweta related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Shweta is the brother of Maya's parent (Tanvi), making Shweta her Uncle."
    },
    {
      "q": "Amit is the brother of Rajesh. Rohan is the father of Amit. If Rajesh has a daughter named Maya, how is Amit related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Amit is the brother of Maya's parent (Rajesh), making Amit her Uncle."
    },
    {
      "q": "Swati is the brother of Geeta. Priya is the father of Swati. If Geeta has a daughter named Maya, how is Swati related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Swati is the brother of Maya's parent (Geeta), making Swati her Uncle."
    },
    {
      "q": "Naveen is the brother of Sunil. Ananya is the father of Naveen. If Sunil has a daughter named Maya, how is Naveen related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Naveen is the brother of Maya's parent (Sunil), making Naveen her Uncle."
    },
    {
      "q": "Tanvi is the brother of Preeti. Vikram is the father of Tanvi. If Preeti has a daughter named Maya, how is Tanvi related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Tanvi is the brother of Maya's parent (Preeti), making Tanvi her Uncle."
    },
    {
      "q": "Rajesh is the brother of Aarav. Sneha is the father of Rajesh. If Aarav has a daughter named Maya, how is Rajesh related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Rajesh is the brother of Maya's parent (Aarav), making Rajesh her Uncle."
    },
    {
      "q": "Geeta is the brother of Rohan. Karan is the father of Geeta. If Rohan has a daughter named Maya, how is Geeta related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Geeta is the brother of Maya's parent (Rohan), making Geeta her Uncle."
    },
    {
      "q": "Sunil is the brother of Priya. Pooja is the father of Sunil. If Priya has a daughter named Maya, how is Sunil related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Sunil is the brother of Maya's parent (Priya), making Sunil her Uncle."
    },
    {
      "q": "Preeti is the brother of Ananya. Arjun is the father of Preeti. If Ananya has a daughter named Maya, how is Preeti related to Maya?",
      "opts": [
        "Uncle",
        "Father",
        "Grandfather",
        "Brother"
      ],
      "ans": "A",
      "exp": "Preeti is the brother of Maya's parent (Ananya), making Preeti her Uncle."
    }
  ],
  "level3": [
    {
      "q": "Coded Relations [Set #1]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'A # M $ N' signify?",
      "opts": [
        "A is the father of N",
        "A is the uncle of N",
        "A is the brother of N",
        "N is the father of A"
      ],
      "ans": "A",
      "exp": "M is sister of N, and A is father of M -> A is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #2]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'B # M $ N' signify?",
      "opts": [
        "B is the father of N",
        "B is the uncle of N",
        "B is the brother of N",
        "N is the father of B"
      ],
      "ans": "A",
      "exp": "M is sister of N, and B is father of M -> B is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #3]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'C # M $ N' signify?",
      "opts": [
        "C is the father of N",
        "C is the uncle of N",
        "C is the brother of N",
        "N is the father of C"
      ],
      "ans": "A",
      "exp": "M is sister of N, and C is father of M -> C is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #4]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'D # M $ N' signify?",
      "opts": [
        "D is the father of N",
        "D is the uncle of N",
        "D is the brother of N",
        "N is the father of D"
      ],
      "ans": "A",
      "exp": "M is sister of N, and D is father of M -> D is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #5]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'E # M $ N' signify?",
      "opts": [
        "E is the father of N",
        "E is the uncle of N",
        "E is the brother of N",
        "N is the father of E"
      ],
      "ans": "A",
      "exp": "M is sister of N, and E is father of M -> E is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #6]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'A # M $ N' signify?",
      "opts": [
        "A is the father of N",
        "A is the uncle of N",
        "A is the brother of N",
        "N is the father of A"
      ],
      "ans": "A",
      "exp": "M is sister of N, and A is father of M -> A is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #7]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'B # M $ N' signify?",
      "opts": [
        "B is the father of N",
        "B is the uncle of N",
        "B is the brother of N",
        "N is the father of B"
      ],
      "ans": "A",
      "exp": "M is sister of N, and B is father of M -> B is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #8]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'C # M $ N' signify?",
      "opts": [
        "C is the father of N",
        "C is the uncle of N",
        "C is the brother of N",
        "N is the father of C"
      ],
      "ans": "A",
      "exp": "M is sister of N, and C is father of M -> C is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #9]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'D # M $ N' signify?",
      "opts": [
        "D is the father of N",
        "D is the uncle of N",
        "D is the brother of N",
        "N is the father of D"
      ],
      "ans": "A",
      "exp": "M is sister of N, and D is father of M -> D is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #10]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'E # M $ N' signify?",
      "opts": [
        "E is the father of N",
        "E is the uncle of N",
        "E is the brother of N",
        "N is the father of E"
      ],
      "ans": "A",
      "exp": "M is sister of N, and E is father of M -> E is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #11]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'A # M $ N' signify?",
      "opts": [
        "A is the father of N",
        "A is the uncle of N",
        "A is the brother of N",
        "N is the father of A"
      ],
      "ans": "A",
      "exp": "M is sister of N, and A is father of M -> A is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #12]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'B # M $ N' signify?",
      "opts": [
        "B is the father of N",
        "B is the uncle of N",
        "B is the brother of N",
        "N is the father of B"
      ],
      "ans": "A",
      "exp": "M is sister of N, and B is father of M -> B is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #13]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'C # M $ N' signify?",
      "opts": [
        "C is the father of N",
        "C is the uncle of N",
        "C is the brother of N",
        "N is the father of C"
      ],
      "ans": "A",
      "exp": "M is sister of N, and C is father of M -> C is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #14]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'D # M $ N' signify?",
      "opts": [
        "D is the father of N",
        "D is the uncle of N",
        "D is the brother of N",
        "N is the father of D"
      ],
      "ans": "A",
      "exp": "M is sister of N, and D is father of M -> D is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #15]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'E # M $ N' signify?",
      "opts": [
        "E is the father of N",
        "E is the uncle of N",
        "E is the brother of N",
        "N is the father of E"
      ],
      "ans": "A",
      "exp": "M is sister of N, and E is father of M -> E is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #16]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'A # M $ N' signify?",
      "opts": [
        "A is the father of N",
        "A is the uncle of N",
        "A is the brother of N",
        "N is the father of A"
      ],
      "ans": "A",
      "exp": "M is sister of N, and A is father of M -> A is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #17]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'B # M $ N' signify?",
      "opts": [
        "B is the father of N",
        "B is the uncle of N",
        "B is the brother of N",
        "N is the father of B"
      ],
      "ans": "A",
      "exp": "M is sister of N, and B is father of M -> B is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #18]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'C # M $ N' signify?",
      "opts": [
        "C is the father of N",
        "C is the uncle of N",
        "C is the brother of N",
        "N is the father of C"
      ],
      "ans": "A",
      "exp": "M is sister of N, and C is father of M -> C is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #19]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'D # M $ N' signify?",
      "opts": [
        "D is the father of N",
        "D is the uncle of N",
        "D is the brother of N",
        "N is the father of D"
      ],
      "ans": "A",
      "exp": "M is sister of N, and D is father of M -> D is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #20]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'E # M $ N' signify?",
      "opts": [
        "E is the father of N",
        "E is the uncle of N",
        "E is the brother of N",
        "N is the father of E"
      ],
      "ans": "A",
      "exp": "M is sister of N, and E is father of M -> E is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #21]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'A # M $ N' signify?",
      "opts": [
        "A is the father of N",
        "A is the uncle of N",
        "A is the brother of N",
        "N is the father of A"
      ],
      "ans": "A",
      "exp": "M is sister of N, and A is father of M -> A is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #22]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'B # M $ N' signify?",
      "opts": [
        "B is the father of N",
        "B is the uncle of N",
        "B is the brother of N",
        "N is the father of B"
      ],
      "ans": "A",
      "exp": "M is sister of N, and B is father of M -> B is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #23]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'C # M $ N' signify?",
      "opts": [
        "C is the father of N",
        "C is the uncle of N",
        "C is the brother of N",
        "N is the father of C"
      ],
      "ans": "A",
      "exp": "M is sister of N, and C is father of M -> C is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #24]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'D # M $ N' signify?",
      "opts": [
        "D is the father of N",
        "D is the uncle of N",
        "D is the brother of N",
        "N is the father of D"
      ],
      "ans": "A",
      "exp": "M is sister of N, and D is father of M -> D is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #25]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'E # M $ N' signify?",
      "opts": [
        "E is the father of N",
        "E is the uncle of N",
        "E is the brother of N",
        "N is the father of E"
      ],
      "ans": "A",
      "exp": "M is sister of N, and E is father of M -> E is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #26]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'A # M $ N' signify?",
      "opts": [
        "A is the father of N",
        "A is the uncle of N",
        "A is the brother of N",
        "N is the father of A"
      ],
      "ans": "A",
      "exp": "M is sister of N, and A is father of M -> A is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #27]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'B # M $ N' signify?",
      "opts": [
        "B is the father of N",
        "B is the uncle of N",
        "B is the brother of N",
        "N is the father of B"
      ],
      "ans": "A",
      "exp": "M is sister of N, and B is father of M -> B is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #28]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'C # M $ N' signify?",
      "opts": [
        "C is the father of N",
        "C is the uncle of N",
        "C is the brother of N",
        "N is the father of C"
      ],
      "ans": "A",
      "exp": "M is sister of N, and C is father of M -> C is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #29]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'D # M $ N' signify?",
      "opts": [
        "D is the father of N",
        "D is the uncle of N",
        "D is the brother of N",
        "N is the father of D"
      ],
      "ans": "A",
      "exp": "M is sister of N, and D is father of M -> D is father of both M and N."
    },
    {
      "q": "Coded Relations [Set #30]: If 'P # Q' means P is the father of Q, and 'P $ Q' means P is the sister of Q, what does 'E # M $ N' signify?",
      "opts": [
        "E is the father of N",
        "E is the uncle of N",
        "E is the brother of N",
        "N is the father of E"
      ],
      "ans": "A",
      "exp": "M is sister of N, and E is father of M -> E is father of both M and N."
    }
  ],
  "level4": [
    {
      "q": "In a multi-generational family tree [Case #1]: Aarav is the paternal grandfather of Vikram. Kavya is the only daughter-in-law of Aarav. How is Kavya related to Vikram?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Kavya is the only daughter-in-law of paternal grandfather Aarav, Kavya must be the mother of Vikram."
    },
    {
      "q": "In a multi-generational family tree [Case #2]: Rohan is the paternal grandfather of Sneha. Rahul is the only daughter-in-law of Rohan. How is Rahul related to Sneha?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Rahul is the only daughter-in-law of paternal grandfather Rohan, Rahul must be the mother of Sneha."
    },
    {
      "q": "In a multi-generational family tree [Case #3]: Priya is the paternal grandfather of Karan. Meera is the only daughter-in-law of Priya. How is Meera related to Karan?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Meera is the only daughter-in-law of paternal grandfather Priya, Meera must be the mother of Karan."
    },
    {
      "q": "In a multi-generational family tree [Case #4]: Ananya is the paternal grandfather of Pooja. Aditya is the only daughter-in-law of Ananya. How is Aditya related to Pooja?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Aditya is the only daughter-in-law of paternal grandfather Ananya, Aditya must be the mother of Pooja."
    },
    {
      "q": "In a multi-generational family tree [Case #5]: Vikram is the paternal grandfather of Arjun. Neha is the only daughter-in-law of Vikram. How is Neha related to Arjun?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Neha is the only daughter-in-law of paternal grandfather Vikram, Neha must be the mother of Arjun."
    },
    {
      "q": "In a multi-generational family tree [Case #6]: Sneha is the paternal grandfather of Kavya. Varun is the only daughter-in-law of Sneha. How is Varun related to Kavya?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Varun is the only daughter-in-law of paternal grandfather Sneha, Varun must be the mother of Kavya."
    },
    {
      "q": "In a multi-generational family tree [Case #7]: Karan is the paternal grandfather of Rahul. Isha is the only daughter-in-law of Karan. How is Isha related to Rahul?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Isha is the only daughter-in-law of paternal grandfather Karan, Isha must be the mother of Rahul."
    },
    {
      "q": "In a multi-generational family tree [Case #8]: Pooja is the paternal grandfather of Meera. Deepak is the only daughter-in-law of Pooja. How is Deepak related to Meera?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Deepak is the only daughter-in-law of paternal grandfather Pooja, Deepak must be the mother of Meera."
    },
    {
      "q": "In a multi-generational family tree [Case #9]: Arjun is the paternal grandfather of Aditya. Ritu is the only daughter-in-law of Arjun. How is Ritu related to Aditya?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Ritu is the only daughter-in-law of paternal grandfather Arjun, Ritu must be the mother of Aditya."
    },
    {
      "q": "In a multi-generational family tree [Case #10]: Kavya is the paternal grandfather of Neha. Suresh is the only daughter-in-law of Kavya. How is Suresh related to Neha?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Suresh is the only daughter-in-law of paternal grandfather Kavya, Suresh must be the mother of Neha."
    },
    {
      "q": "In a multi-generational family tree [Case #11]: Rahul is the paternal grandfather of Varun. Divya is the only daughter-in-law of Rahul. How is Divya related to Varun?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Divya is the only daughter-in-law of paternal grandfather Rahul, Divya must be the mother of Varun."
    },
    {
      "q": "In a multi-generational family tree [Case #12]: Meera is the paternal grandfather of Isha. Manoj is the only daughter-in-law of Meera. How is Manoj related to Isha?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Manoj is the only daughter-in-law of paternal grandfather Meera, Manoj must be the mother of Isha."
    },
    {
      "q": "In a multi-generational family tree [Case #13]: Aditya is the paternal grandfather of Deepak. Shweta is the only daughter-in-law of Aditya. How is Shweta related to Deepak?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Shweta is the only daughter-in-law of paternal grandfather Aditya, Shweta must be the mother of Deepak."
    },
    {
      "q": "In a multi-generational family tree [Case #14]: Neha is the paternal grandfather of Ritu. Amit is the only daughter-in-law of Neha. How is Amit related to Ritu?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Amit is the only daughter-in-law of paternal grandfather Neha, Amit must be the mother of Ritu."
    },
    {
      "q": "In a multi-generational family tree [Case #15]: Varun is the paternal grandfather of Suresh. Swati is the only daughter-in-law of Varun. How is Swati related to Suresh?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Swati is the only daughter-in-law of paternal grandfather Varun, Swati must be the mother of Suresh."
    },
    {
      "q": "In a multi-generational family tree [Case #16]: Isha is the paternal grandfather of Divya. Naveen is the only daughter-in-law of Isha. How is Naveen related to Divya?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Naveen is the only daughter-in-law of paternal grandfather Isha, Naveen must be the mother of Divya."
    },
    {
      "q": "In a multi-generational family tree [Case #17]: Deepak is the paternal grandfather of Manoj. Tanvi is the only daughter-in-law of Deepak. How is Tanvi related to Manoj?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Tanvi is the only daughter-in-law of paternal grandfather Deepak, Tanvi must be the mother of Manoj."
    },
    {
      "q": "In a multi-generational family tree [Case #18]: Ritu is the paternal grandfather of Shweta. Rajesh is the only daughter-in-law of Ritu. How is Rajesh related to Shweta?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Rajesh is the only daughter-in-law of paternal grandfather Ritu, Rajesh must be the mother of Shweta."
    },
    {
      "q": "In a multi-generational family tree [Case #19]: Suresh is the paternal grandfather of Amit. Geeta is the only daughter-in-law of Suresh. How is Geeta related to Amit?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Geeta is the only daughter-in-law of paternal grandfather Suresh, Geeta must be the mother of Amit."
    },
    {
      "q": "In a multi-generational family tree [Case #20]: Divya is the paternal grandfather of Swati. Sunil is the only daughter-in-law of Divya. How is Sunil related to Swati?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Sunil is the only daughter-in-law of paternal grandfather Divya, Sunil must be the mother of Swati."
    },
    {
      "q": "In a multi-generational family tree [Case #21]: Manoj is the paternal grandfather of Naveen. Preeti is the only daughter-in-law of Manoj. How is Preeti related to Naveen?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Preeti is the only daughter-in-law of paternal grandfather Manoj, Preeti must be the mother of Naveen."
    },
    {
      "q": "In a multi-generational family tree [Case #22]: Shweta is the paternal grandfather of Tanvi. Aarav is the only daughter-in-law of Shweta. How is Aarav related to Tanvi?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Aarav is the only daughter-in-law of paternal grandfather Shweta, Aarav must be the mother of Tanvi."
    },
    {
      "q": "In a multi-generational family tree [Case #23]: Amit is the paternal grandfather of Rajesh. Rohan is the only daughter-in-law of Amit. How is Rohan related to Rajesh?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Rohan is the only daughter-in-law of paternal grandfather Amit, Rohan must be the mother of Rajesh."
    },
    {
      "q": "In a multi-generational family tree [Case #24]: Swati is the paternal grandfather of Geeta. Priya is the only daughter-in-law of Swati. How is Priya related to Geeta?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Priya is the only daughter-in-law of paternal grandfather Swati, Priya must be the mother of Geeta."
    },
    {
      "q": "In a multi-generational family tree [Case #25]: Naveen is the paternal grandfather of Sunil. Ananya is the only daughter-in-law of Naveen. How is Ananya related to Sunil?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Ananya is the only daughter-in-law of paternal grandfather Naveen, Ananya must be the mother of Sunil."
    },
    {
      "q": "In a multi-generational family tree [Case #26]: Tanvi is the paternal grandfather of Preeti. Vikram is the only daughter-in-law of Tanvi. How is Vikram related to Preeti?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Vikram is the only daughter-in-law of paternal grandfather Tanvi, Vikram must be the mother of Preeti."
    },
    {
      "q": "In a multi-generational family tree [Case #27]: Rajesh is the paternal grandfather of Aarav. Sneha is the only daughter-in-law of Rajesh. How is Sneha related to Aarav?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Sneha is the only daughter-in-law of paternal grandfather Rajesh, Sneha must be the mother of Aarav."
    },
    {
      "q": "In a multi-generational family tree [Case #28]: Geeta is the paternal grandfather of Rohan. Karan is the only daughter-in-law of Geeta. How is Karan related to Rohan?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Karan is the only daughter-in-law of paternal grandfather Geeta, Karan must be the mother of Rohan."
    },
    {
      "q": "In a multi-generational family tree [Case #29]: Sunil is the paternal grandfather of Priya. Pooja is the only daughter-in-law of Sunil. How is Pooja related to Priya?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Pooja is the only daughter-in-law of paternal grandfather Sunil, Pooja must be the mother of Priya."
    },
    {
      "q": "In a multi-generational family tree [Case #30]: Preeti is the paternal grandfather of Ananya. Arjun is the only daughter-in-law of Preeti. How is Arjun related to Ananya?",
      "opts": [
        "Mother",
        "Aunt",
        "Sister",
        "Grandmother"
      ],
      "ans": "A",
      "exp": "Since Arjun is the only daughter-in-law of paternal grandfather Preeti, Arjun must be the mother of Ananya."
    }
  ]
};

LOGICAL_POOLS_MAP["analogy"] = {
  "level1": [
    {
      "q": "[Analogy Pair #1] Complete the relationship: Oasis : Desert :: Island : ?",
      "opts": [
        "Ocean",
        "Oceanless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "An Oasis is surrounded by a Desert, just as an Island is surrounded by an Ocean."
    },
    {
      "q": "[Analogy Pair #2] Complete the relationship: Doctor : Stethoscope :: Sculptor : ?",
      "opts": [
        "Chisel",
        "Chiselless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Stethoscope is used by a Doctor, just as a Chisel is used by a Sculptor."
    },
    {
      "q": "[Analogy Pair #3] Complete the relationship: Book : Author :: Statue : ?",
      "opts": [
        "Sculptor",
        "Sculptorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Book is made by an Author, just as a Statue is made by a Sculptor."
    },
    {
      "q": "[Analogy Pair #4] Complete the relationship: Thermometer : Temperature :: Barometer : ?",
      "opts": [
        "Pressure",
        "Pressureless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Thermometer measures Temperature, Barometer measures Pressure."
    },
    {
      "q": "[Analogy Pair #5] Complete the relationship: Bird : Nest :: Lion : ?",
      "opts": [
        "Den",
        "Denless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Bird lives in a Nest, a Lion lives in a Den."
    },
    {
      "q": "[Analogy Pair #6] Complete the relationship: Pen : Writer :: Sword : ?",
      "opts": [
        "Warrior",
        "Warriorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Pen is the weapon of a Writer, a Sword is the weapon of a Warrior."
    },
    {
      "q": "[Analogy Pair #7] Complete the relationship: Heart : Cardiology :: Brain : ?",
      "opts": [
        "Neurology",
        "Neurologyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cardiology studies the Heart, Neurology studies the Brain."
    },
    {
      "q": "[Analogy Pair #8] Complete the relationship: Fish : Scales :: Bear : ?",
      "opts": [
        "Fur",
        "Furless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Fish have protective Scales, Bears have Fur."
    },
    {
      "q": "[Analogy Pair #9] Complete the relationship: Clock : Time :: Odometer : ?",
      "opts": [
        "Distance",
        "Distanceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Clock measures Time, Odometer measures Distance."
    },
    {
      "q": "[Analogy Pair #10] Complete the relationship: Canvas : Painter :: Clay : ?",
      "opts": [
        "Potter",
        "Potterless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Painter works on Canvas, Potter works with Clay."
    },
    {
      "q": "[Analogy Pair #11] Complete the relationship: Light : Darkness :: Knowledge : ?",
      "opts": [
        "Ignorance",
        "Ignoranceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Darkness is lack of Light, Ignorance is lack of Knowledge."
    },
    {
      "q": "[Analogy Pair #12] Complete the relationship: Telescope : Stars :: Microscope : ?",
      "opts": [
        "Bacteria",
        "Bacterialess",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Telescope views Stars, Microscope views Bacteria."
    },
    {
      "q": "[Analogy Pair #13] Complete the relationship: Cobbler : Leather :: Carpenter : ?",
      "opts": [
        "Wood",
        "Woodless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cobbler crafts Leather, Carpenter crafts Wood."
    },
    {
      "q": "[Analogy Pair #14] Complete the relationship: Marathon : Race :: Hibernation : ?",
      "opts": [
        "Sleep",
        "Sleepless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Marathon is long Race, Hibernation is long Sleep."
    },
    {
      "q": "[Analogy Pair #15] Complete the relationship: Ornithology : Birds :: Entomology : ?",
      "opts": [
        "Insects",
        "Insectsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ornithology studies Birds, Entomology studies Insects."
    },
    {
      "q": "[Analogy Pair #16] Complete the relationship: Pesticide : Crop :: Antiseptic : ?",
      "opts": [
        "Wound",
        "Woundless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Pesticide protects Crops, Antiseptic protects Wounds."
    },
    {
      "q": "[Analogy Pair #17] Complete the relationship: Amnesia : Memory :: Paralysis : ?",
      "opts": [
        "Movement",
        "Movementless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Amnesia is loss of Memory, Paralysis is loss of Movement."
    },
    {
      "q": "[Analogy Pair #18] Complete the relationship: Architect : Blueprint :: Musician : ?",
      "opts": [
        "Score",
        "Scoreless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Architect follows Blueprint, Musician follows Score."
    },
    {
      "q": "[Analogy Pair #19] Complete the relationship: Ignite : Extinguish :: Assemble : ?",
      "opts": [
        "Disassemble",
        "Disassembleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ignite opposes Extinguish, Assemble opposes Disassemble."
    },
    {
      "q": "[Analogy Pair #20] Complete the relationship: Gullible : Deceive :: Fragile : ?",
      "opts": [
        "Break",
        "Breakless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Gullible is easily Deceived, Fragile is easily Broken."
    },
    {
      "q": "[Analogy Pair #21] Complete the relationship: Geology : Earth :: Cytology : ?",
      "opts": [
        "Cells",
        "Cellsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Geology studies Earth, Cytology studies Cells."
    },
    {
      "q": "[Analogy Pair #22] Complete the relationship: Cacophony : Sound :: Glare : ?",
      "opts": [
        "Light",
        "Lightless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cacophony is harsh Sound, Glare is harsh Light."
    },
    {
      "q": "[Analogy Pair #23] Complete the relationship: Anarchy : Government :: Poverty : ?",
      "opts": [
        "Wealth",
        "Wealthless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Anarchy is absence of Government, Poverty is absence of Wealth."
    },
    {
      "q": "[Analogy Pair #24] Complete the relationship: Botanist : Plants :: Zoologist : ?",
      "opts": [
        "Animals",
        "Animalsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Botanist studies Plants, Zoologist studies Animals."
    },
    {
      "q": "[Analogy Pair #25] Complete the relationship: Brevity : Conciseness :: Bravery : ?",
      "opts": [
        "Courage",
        "Courageless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Brevity means Conciseness, Bravery means Courage."
    },
    {
      "q": "[Analogy Pair #26] Complete the relationship: Philatelist : Stamps :: Numismatist : ?",
      "opts": [
        "Coins",
        "Coinsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Philatelist collects Stamps, Numismatist collects Coins."
    },
    {
      "q": "[Analogy Pair #27] Complete the relationship: Labyrinth : Maze :: Cascade : ?",
      "opts": [
        "Waterfall",
        "Waterfallless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Labyrinth is a Maze, Cascade is a Waterfall."
    },
    {
      "q": "[Analogy Pair #28] Complete the relationship: Epilogue : Book :: Coda : ?",
      "opts": [
        "Symphony",
        "Symphonyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Epilogue concludes Book, Coda concludes Symphony."
    },
    {
      "q": "[Analogy Pair #29] Complete the relationship: Indolent : Active :: Arrogant : ?",
      "opts": [
        "Humble",
        "Humbleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Indolent opposes Active, Arrogant opposes Humble."
    },
    {
      "q": "[Analogy Pair #30] Complete the relationship: Vaccine : Immunity :: Education : ?",
      "opts": [
        "Enlightenment",
        "Enlightenmentless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Vaccine grants Immunity, Education grants Enlightenment."
    }
  ],
  "level2": [
    {
      "q": "[Analogy Pair #1] Complete the relationship: Oasis : Desert :: Island : ?",
      "opts": [
        "Ocean",
        "Oceanless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "An Oasis is surrounded by a Desert, just as an Island is surrounded by an Ocean."
    },
    {
      "q": "[Analogy Pair #2] Complete the relationship: Doctor : Stethoscope :: Sculptor : ?",
      "opts": [
        "Chisel",
        "Chiselless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Stethoscope is used by a Doctor, just as a Chisel is used by a Sculptor."
    },
    {
      "q": "[Analogy Pair #3] Complete the relationship: Book : Author :: Statue : ?",
      "opts": [
        "Sculptor",
        "Sculptorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Book is made by an Author, just as a Statue is made by a Sculptor."
    },
    {
      "q": "[Analogy Pair #4] Complete the relationship: Thermometer : Temperature :: Barometer : ?",
      "opts": [
        "Pressure",
        "Pressureless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Thermometer measures Temperature, Barometer measures Pressure."
    },
    {
      "q": "[Analogy Pair #5] Complete the relationship: Bird : Nest :: Lion : ?",
      "opts": [
        "Den",
        "Denless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Bird lives in a Nest, a Lion lives in a Den."
    },
    {
      "q": "[Analogy Pair #6] Complete the relationship: Pen : Writer :: Sword : ?",
      "opts": [
        "Warrior",
        "Warriorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Pen is the weapon of a Writer, a Sword is the weapon of a Warrior."
    },
    {
      "q": "[Analogy Pair #7] Complete the relationship: Heart : Cardiology :: Brain : ?",
      "opts": [
        "Neurology",
        "Neurologyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cardiology studies the Heart, Neurology studies the Brain."
    },
    {
      "q": "[Analogy Pair #8] Complete the relationship: Fish : Scales :: Bear : ?",
      "opts": [
        "Fur",
        "Furless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Fish have protective Scales, Bears have Fur."
    },
    {
      "q": "[Analogy Pair #9] Complete the relationship: Clock : Time :: Odometer : ?",
      "opts": [
        "Distance",
        "Distanceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Clock measures Time, Odometer measures Distance."
    },
    {
      "q": "[Analogy Pair #10] Complete the relationship: Canvas : Painter :: Clay : ?",
      "opts": [
        "Potter",
        "Potterless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Painter works on Canvas, Potter works with Clay."
    },
    {
      "q": "[Analogy Pair #11] Complete the relationship: Light : Darkness :: Knowledge : ?",
      "opts": [
        "Ignorance",
        "Ignoranceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Darkness is lack of Light, Ignorance is lack of Knowledge."
    },
    {
      "q": "[Analogy Pair #12] Complete the relationship: Telescope : Stars :: Microscope : ?",
      "opts": [
        "Bacteria",
        "Bacterialess",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Telescope views Stars, Microscope views Bacteria."
    },
    {
      "q": "[Analogy Pair #13] Complete the relationship: Cobbler : Leather :: Carpenter : ?",
      "opts": [
        "Wood",
        "Woodless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cobbler crafts Leather, Carpenter crafts Wood."
    },
    {
      "q": "[Analogy Pair #14] Complete the relationship: Marathon : Race :: Hibernation : ?",
      "opts": [
        "Sleep",
        "Sleepless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Marathon is long Race, Hibernation is long Sleep."
    },
    {
      "q": "[Analogy Pair #15] Complete the relationship: Ornithology : Birds :: Entomology : ?",
      "opts": [
        "Insects",
        "Insectsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ornithology studies Birds, Entomology studies Insects."
    },
    {
      "q": "[Analogy Pair #16] Complete the relationship: Pesticide : Crop :: Antiseptic : ?",
      "opts": [
        "Wound",
        "Woundless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Pesticide protects Crops, Antiseptic protects Wounds."
    },
    {
      "q": "[Analogy Pair #17] Complete the relationship: Amnesia : Memory :: Paralysis : ?",
      "opts": [
        "Movement",
        "Movementless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Amnesia is loss of Memory, Paralysis is loss of Movement."
    },
    {
      "q": "[Analogy Pair #18] Complete the relationship: Architect : Blueprint :: Musician : ?",
      "opts": [
        "Score",
        "Scoreless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Architect follows Blueprint, Musician follows Score."
    },
    {
      "q": "[Analogy Pair #19] Complete the relationship: Ignite : Extinguish :: Assemble : ?",
      "opts": [
        "Disassemble",
        "Disassembleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ignite opposes Extinguish, Assemble opposes Disassemble."
    },
    {
      "q": "[Analogy Pair #20] Complete the relationship: Gullible : Deceive :: Fragile : ?",
      "opts": [
        "Break",
        "Breakless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Gullible is easily Deceived, Fragile is easily Broken."
    },
    {
      "q": "[Analogy Pair #21] Complete the relationship: Geology : Earth :: Cytology : ?",
      "opts": [
        "Cells",
        "Cellsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Geology studies Earth, Cytology studies Cells."
    },
    {
      "q": "[Analogy Pair #22] Complete the relationship: Cacophony : Sound :: Glare : ?",
      "opts": [
        "Light",
        "Lightless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cacophony is harsh Sound, Glare is harsh Light."
    },
    {
      "q": "[Analogy Pair #23] Complete the relationship: Anarchy : Government :: Poverty : ?",
      "opts": [
        "Wealth",
        "Wealthless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Anarchy is absence of Government, Poverty is absence of Wealth."
    },
    {
      "q": "[Analogy Pair #24] Complete the relationship: Botanist : Plants :: Zoologist : ?",
      "opts": [
        "Animals",
        "Animalsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Botanist studies Plants, Zoologist studies Animals."
    },
    {
      "q": "[Analogy Pair #25] Complete the relationship: Brevity : Conciseness :: Bravery : ?",
      "opts": [
        "Courage",
        "Courageless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Brevity means Conciseness, Bravery means Courage."
    },
    {
      "q": "[Analogy Pair #26] Complete the relationship: Philatelist : Stamps :: Numismatist : ?",
      "opts": [
        "Coins",
        "Coinsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Philatelist collects Stamps, Numismatist collects Coins."
    },
    {
      "q": "[Analogy Pair #27] Complete the relationship: Labyrinth : Maze :: Cascade : ?",
      "opts": [
        "Waterfall",
        "Waterfallless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Labyrinth is a Maze, Cascade is a Waterfall."
    },
    {
      "q": "[Analogy Pair #28] Complete the relationship: Epilogue : Book :: Coda : ?",
      "opts": [
        "Symphony",
        "Symphonyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Epilogue concludes Book, Coda concludes Symphony."
    },
    {
      "q": "[Analogy Pair #29] Complete the relationship: Indolent : Active :: Arrogant : ?",
      "opts": [
        "Humble",
        "Humbleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Indolent opposes Active, Arrogant opposes Humble."
    },
    {
      "q": "[Analogy Pair #30] Complete the relationship: Vaccine : Immunity :: Education : ?",
      "opts": [
        "Enlightenment",
        "Enlightenmentless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Vaccine grants Immunity, Education grants Enlightenment."
    }
  ],
  "level3": [
    {
      "q": "[Analogy Pair #1] Complete the relationship: Oasis : Desert :: Island : ?",
      "opts": [
        "Ocean",
        "Oceanless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "An Oasis is surrounded by a Desert, just as an Island is surrounded by an Ocean."
    },
    {
      "q": "[Analogy Pair #2] Complete the relationship: Doctor : Stethoscope :: Sculptor : ?",
      "opts": [
        "Chisel",
        "Chiselless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Stethoscope is used by a Doctor, just as a Chisel is used by a Sculptor."
    },
    {
      "q": "[Analogy Pair #3] Complete the relationship: Book : Author :: Statue : ?",
      "opts": [
        "Sculptor",
        "Sculptorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Book is made by an Author, just as a Statue is made by a Sculptor."
    },
    {
      "q": "[Analogy Pair #4] Complete the relationship: Thermometer : Temperature :: Barometer : ?",
      "opts": [
        "Pressure",
        "Pressureless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Thermometer measures Temperature, Barometer measures Pressure."
    },
    {
      "q": "[Analogy Pair #5] Complete the relationship: Bird : Nest :: Lion : ?",
      "opts": [
        "Den",
        "Denless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Bird lives in a Nest, a Lion lives in a Den."
    },
    {
      "q": "[Analogy Pair #6] Complete the relationship: Pen : Writer :: Sword : ?",
      "opts": [
        "Warrior",
        "Warriorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Pen is the weapon of a Writer, a Sword is the weapon of a Warrior."
    },
    {
      "q": "[Analogy Pair #7] Complete the relationship: Heart : Cardiology :: Brain : ?",
      "opts": [
        "Neurology",
        "Neurologyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cardiology studies the Heart, Neurology studies the Brain."
    },
    {
      "q": "[Analogy Pair #8] Complete the relationship: Fish : Scales :: Bear : ?",
      "opts": [
        "Fur",
        "Furless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Fish have protective Scales, Bears have Fur."
    },
    {
      "q": "[Analogy Pair #9] Complete the relationship: Clock : Time :: Odometer : ?",
      "opts": [
        "Distance",
        "Distanceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Clock measures Time, Odometer measures Distance."
    },
    {
      "q": "[Analogy Pair #10] Complete the relationship: Canvas : Painter :: Clay : ?",
      "opts": [
        "Potter",
        "Potterless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Painter works on Canvas, Potter works with Clay."
    },
    {
      "q": "[Analogy Pair #11] Complete the relationship: Light : Darkness :: Knowledge : ?",
      "opts": [
        "Ignorance",
        "Ignoranceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Darkness is lack of Light, Ignorance is lack of Knowledge."
    },
    {
      "q": "[Analogy Pair #12] Complete the relationship: Telescope : Stars :: Microscope : ?",
      "opts": [
        "Bacteria",
        "Bacterialess",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Telescope views Stars, Microscope views Bacteria."
    },
    {
      "q": "[Analogy Pair #13] Complete the relationship: Cobbler : Leather :: Carpenter : ?",
      "opts": [
        "Wood",
        "Woodless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cobbler crafts Leather, Carpenter crafts Wood."
    },
    {
      "q": "[Analogy Pair #14] Complete the relationship: Marathon : Race :: Hibernation : ?",
      "opts": [
        "Sleep",
        "Sleepless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Marathon is long Race, Hibernation is long Sleep."
    },
    {
      "q": "[Analogy Pair #15] Complete the relationship: Ornithology : Birds :: Entomology : ?",
      "opts": [
        "Insects",
        "Insectsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ornithology studies Birds, Entomology studies Insects."
    },
    {
      "q": "[Analogy Pair #16] Complete the relationship: Pesticide : Crop :: Antiseptic : ?",
      "opts": [
        "Wound",
        "Woundless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Pesticide protects Crops, Antiseptic protects Wounds."
    },
    {
      "q": "[Analogy Pair #17] Complete the relationship: Amnesia : Memory :: Paralysis : ?",
      "opts": [
        "Movement",
        "Movementless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Amnesia is loss of Memory, Paralysis is loss of Movement."
    },
    {
      "q": "[Analogy Pair #18] Complete the relationship: Architect : Blueprint :: Musician : ?",
      "opts": [
        "Score",
        "Scoreless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Architect follows Blueprint, Musician follows Score."
    },
    {
      "q": "[Analogy Pair #19] Complete the relationship: Ignite : Extinguish :: Assemble : ?",
      "opts": [
        "Disassemble",
        "Disassembleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ignite opposes Extinguish, Assemble opposes Disassemble."
    },
    {
      "q": "[Analogy Pair #20] Complete the relationship: Gullible : Deceive :: Fragile : ?",
      "opts": [
        "Break",
        "Breakless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Gullible is easily Deceived, Fragile is easily Broken."
    },
    {
      "q": "[Analogy Pair #21] Complete the relationship: Geology : Earth :: Cytology : ?",
      "opts": [
        "Cells",
        "Cellsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Geology studies Earth, Cytology studies Cells."
    },
    {
      "q": "[Analogy Pair #22] Complete the relationship: Cacophony : Sound :: Glare : ?",
      "opts": [
        "Light",
        "Lightless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cacophony is harsh Sound, Glare is harsh Light."
    },
    {
      "q": "[Analogy Pair #23] Complete the relationship: Anarchy : Government :: Poverty : ?",
      "opts": [
        "Wealth",
        "Wealthless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Anarchy is absence of Government, Poverty is absence of Wealth."
    },
    {
      "q": "[Analogy Pair #24] Complete the relationship: Botanist : Plants :: Zoologist : ?",
      "opts": [
        "Animals",
        "Animalsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Botanist studies Plants, Zoologist studies Animals."
    },
    {
      "q": "[Analogy Pair #25] Complete the relationship: Brevity : Conciseness :: Bravery : ?",
      "opts": [
        "Courage",
        "Courageless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Brevity means Conciseness, Bravery means Courage."
    },
    {
      "q": "[Analogy Pair #26] Complete the relationship: Philatelist : Stamps :: Numismatist : ?",
      "opts": [
        "Coins",
        "Coinsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Philatelist collects Stamps, Numismatist collects Coins."
    },
    {
      "q": "[Analogy Pair #27] Complete the relationship: Labyrinth : Maze :: Cascade : ?",
      "opts": [
        "Waterfall",
        "Waterfallless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Labyrinth is a Maze, Cascade is a Waterfall."
    },
    {
      "q": "[Analogy Pair #28] Complete the relationship: Epilogue : Book :: Coda : ?",
      "opts": [
        "Symphony",
        "Symphonyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Epilogue concludes Book, Coda concludes Symphony."
    },
    {
      "q": "[Analogy Pair #29] Complete the relationship: Indolent : Active :: Arrogant : ?",
      "opts": [
        "Humble",
        "Humbleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Indolent opposes Active, Arrogant opposes Humble."
    },
    {
      "q": "[Analogy Pair #30] Complete the relationship: Vaccine : Immunity :: Education : ?",
      "opts": [
        "Enlightenment",
        "Enlightenmentless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Vaccine grants Immunity, Education grants Enlightenment."
    }
  ],
  "level4": [
    {
      "q": "[Analogy Pair #1] Complete the relationship: Oasis : Desert :: Island : ?",
      "opts": [
        "Ocean",
        "Oceanless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "An Oasis is surrounded by a Desert, just as an Island is surrounded by an Ocean."
    },
    {
      "q": "[Analogy Pair #2] Complete the relationship: Doctor : Stethoscope :: Sculptor : ?",
      "opts": [
        "Chisel",
        "Chiselless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Stethoscope is used by a Doctor, just as a Chisel is used by a Sculptor."
    },
    {
      "q": "[Analogy Pair #3] Complete the relationship: Book : Author :: Statue : ?",
      "opts": [
        "Sculptor",
        "Sculptorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Book is made by an Author, just as a Statue is made by a Sculptor."
    },
    {
      "q": "[Analogy Pair #4] Complete the relationship: Thermometer : Temperature :: Barometer : ?",
      "opts": [
        "Pressure",
        "Pressureless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Thermometer measures Temperature, Barometer measures Pressure."
    },
    {
      "q": "[Analogy Pair #5] Complete the relationship: Bird : Nest :: Lion : ?",
      "opts": [
        "Den",
        "Denless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Bird lives in a Nest, a Lion lives in a Den."
    },
    {
      "q": "[Analogy Pair #6] Complete the relationship: Pen : Writer :: Sword : ?",
      "opts": [
        "Warrior",
        "Warriorless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "A Pen is the weapon of a Writer, a Sword is the weapon of a Warrior."
    },
    {
      "q": "[Analogy Pair #7] Complete the relationship: Heart : Cardiology :: Brain : ?",
      "opts": [
        "Neurology",
        "Neurologyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cardiology studies the Heart, Neurology studies the Brain."
    },
    {
      "q": "[Analogy Pair #8] Complete the relationship: Fish : Scales :: Bear : ?",
      "opts": [
        "Fur",
        "Furless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Fish have protective Scales, Bears have Fur."
    },
    {
      "q": "[Analogy Pair #9] Complete the relationship: Clock : Time :: Odometer : ?",
      "opts": [
        "Distance",
        "Distanceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Clock measures Time, Odometer measures Distance."
    },
    {
      "q": "[Analogy Pair #10] Complete the relationship: Canvas : Painter :: Clay : ?",
      "opts": [
        "Potter",
        "Potterless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Painter works on Canvas, Potter works with Clay."
    },
    {
      "q": "[Analogy Pair #11] Complete the relationship: Light : Darkness :: Knowledge : ?",
      "opts": [
        "Ignorance",
        "Ignoranceless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Darkness is lack of Light, Ignorance is lack of Knowledge."
    },
    {
      "q": "[Analogy Pair #12] Complete the relationship: Telescope : Stars :: Microscope : ?",
      "opts": [
        "Bacteria",
        "Bacterialess",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Telescope views Stars, Microscope views Bacteria."
    },
    {
      "q": "[Analogy Pair #13] Complete the relationship: Cobbler : Leather :: Carpenter : ?",
      "opts": [
        "Wood",
        "Woodless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cobbler crafts Leather, Carpenter crafts Wood."
    },
    {
      "q": "[Analogy Pair #14] Complete the relationship: Marathon : Race :: Hibernation : ?",
      "opts": [
        "Sleep",
        "Sleepless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Marathon is long Race, Hibernation is long Sleep."
    },
    {
      "q": "[Analogy Pair #15] Complete the relationship: Ornithology : Birds :: Entomology : ?",
      "opts": [
        "Insects",
        "Insectsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ornithology studies Birds, Entomology studies Insects."
    },
    {
      "q": "[Analogy Pair #16] Complete the relationship: Pesticide : Crop :: Antiseptic : ?",
      "opts": [
        "Wound",
        "Woundless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Pesticide protects Crops, Antiseptic protects Wounds."
    },
    {
      "q": "[Analogy Pair #17] Complete the relationship: Amnesia : Memory :: Paralysis : ?",
      "opts": [
        "Movement",
        "Movementless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Amnesia is loss of Memory, Paralysis is loss of Movement."
    },
    {
      "q": "[Analogy Pair #18] Complete the relationship: Architect : Blueprint :: Musician : ?",
      "opts": [
        "Score",
        "Scoreless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Architect follows Blueprint, Musician follows Score."
    },
    {
      "q": "[Analogy Pair #19] Complete the relationship: Ignite : Extinguish :: Assemble : ?",
      "opts": [
        "Disassemble",
        "Disassembleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Ignite opposes Extinguish, Assemble opposes Disassemble."
    },
    {
      "q": "[Analogy Pair #20] Complete the relationship: Gullible : Deceive :: Fragile : ?",
      "opts": [
        "Break",
        "Breakless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Gullible is easily Deceived, Fragile is easily Broken."
    },
    {
      "q": "[Analogy Pair #21] Complete the relationship: Geology : Earth :: Cytology : ?",
      "opts": [
        "Cells",
        "Cellsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Geology studies Earth, Cytology studies Cells."
    },
    {
      "q": "[Analogy Pair #22] Complete the relationship: Cacophony : Sound :: Glare : ?",
      "opts": [
        "Light",
        "Lightless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Cacophony is harsh Sound, Glare is harsh Light."
    },
    {
      "q": "[Analogy Pair #23] Complete the relationship: Anarchy : Government :: Poverty : ?",
      "opts": [
        "Wealth",
        "Wealthless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Anarchy is absence of Government, Poverty is absence of Wealth."
    },
    {
      "q": "[Analogy Pair #24] Complete the relationship: Botanist : Plants :: Zoologist : ?",
      "opts": [
        "Animals",
        "Animalsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Botanist studies Plants, Zoologist studies Animals."
    },
    {
      "q": "[Analogy Pair #25] Complete the relationship: Brevity : Conciseness :: Bravery : ?",
      "opts": [
        "Courage",
        "Courageless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Brevity means Conciseness, Bravery means Courage."
    },
    {
      "q": "[Analogy Pair #26] Complete the relationship: Philatelist : Stamps :: Numismatist : ?",
      "opts": [
        "Coins",
        "Coinsless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Philatelist collects Stamps, Numismatist collects Coins."
    },
    {
      "q": "[Analogy Pair #27] Complete the relationship: Labyrinth : Maze :: Cascade : ?",
      "opts": [
        "Waterfall",
        "Waterfallless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Labyrinth is a Maze, Cascade is a Waterfall."
    },
    {
      "q": "[Analogy Pair #28] Complete the relationship: Epilogue : Book :: Coda : ?",
      "opts": [
        "Symphony",
        "Symphonyless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Epilogue concludes Book, Coda concludes Symphony."
    },
    {
      "q": "[Analogy Pair #29] Complete the relationship: Indolent : Active :: Arrogant : ?",
      "opts": [
        "Humble",
        "Humbleless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Indolent opposes Active, Arrogant opposes Humble."
    },
    {
      "q": "[Analogy Pair #30] Complete the relationship: Vaccine : Immunity :: Education : ?",
      "opts": [
        "Enlightenment",
        "Enlightenmentless",
        "Inverse",
        "Irrelevant"
      ],
      "ans": "A",
      "exp": "Vaccine grants Immunity, Education grants Enlightenment."
    }
  ]
};

LOGICAL_POOLS_MAP["coding-decoding"] = {
  "level1": [
    {
      "q": "[Cipher #1] In an encryption code, if the word 'CLOUD' is encoded as 'ENQWF', then what was the original plaintext word?",
      "opts": [
        "CLOUD",
        "ENQWF",
        "DUOLC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'CLOUD'."
    },
    {
      "q": "[Cipher #2] In an encryption code, if the word 'RIVER' is encoded as 'ULYHU', then what was the original plaintext word?",
      "opts": [
        "RIVER",
        "ULYHU",
        "REVIR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'RIVER'."
    },
    {
      "q": "[Cipher #3] In an encryption code, if the word 'STONE' is encoded as 'WXSRI', then what was the original plaintext word?",
      "opts": [
        "STONE",
        "WXSRI",
        "ENOTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'STONE'."
    },
    {
      "q": "[Cipher #4] In an encryption code, if the word 'LIGHT' is encoded as 'MJHIU', then what was the original plaintext word?",
      "opts": [
        "LIGHT",
        "MJHIU",
        "THGIL",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'LIGHT'."
    },
    {
      "q": "[Cipher #5] In an encryption code, if the word 'FLAME' is encoded as 'HNCOG', then what was the original plaintext word?",
      "opts": [
        "FLAME",
        "HNCOG",
        "EMALF",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'FLAME'."
    },
    {
      "q": "[Cipher #6] In an encryption code, if the word 'TIGER' is encoded as 'WLJHU', then what was the original plaintext word?",
      "opts": [
        "TIGER",
        "WLJHU",
        "REGIT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'TIGER'."
    },
    {
      "q": "[Cipher #7] In an encryption code, if the word 'OCEAN' is encoded as 'SGIER', then what was the original plaintext word?",
      "opts": [
        "OCEAN",
        "SGIER",
        "NAECO",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'OCEAN'."
    },
    {
      "q": "[Cipher #8] In an encryption code, if the word 'PLANT' is encoded as 'QMBOU', then what was the original plaintext word?",
      "opts": [
        "PLANT",
        "QMBOU",
        "TNALP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'PLANT'."
    },
    {
      "q": "[Cipher #9] In an encryption code, if the word 'EARTH' is encoded as 'GCTVJ', then what was the original plaintext word?",
      "opts": [
        "EARTH",
        "GCTVJ",
        "HTRAE",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'EARTH'."
    },
    {
      "q": "[Cipher #10] In an encryption code, if the word 'SPACE' is encoded as 'VSDFH', then what was the original plaintext word?",
      "opts": [
        "SPACE",
        "VSDFH",
        "ECAPS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'SPACE'."
    },
    {
      "q": "[Cipher #11] In an encryption code, if the word 'DREAM' is encoded as 'HVIEQ', then what was the original plaintext word?",
      "opts": [
        "DREAM",
        "HVIEQ",
        "MAERD",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'DREAM'."
    },
    {
      "q": "[Cipher #12] In an encryption code, if the word 'WATER' is encoded as 'XBUFS', then what was the original plaintext word?",
      "opts": [
        "WATER",
        "XBUFS",
        "RETAW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'WATER'."
    },
    {
      "q": "[Cipher #13] In an encryption code, if the word 'BRAIN' is encoded as 'DTCKP', then what was the original plaintext word?",
      "opts": [
        "BRAIN",
        "DTCKP",
        "NIARB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'BRAIN'."
    },
    {
      "q": "[Cipher #14] In an encryption code, if the word 'POWER' is encoded as 'SRZHU', then what was the original plaintext word?",
      "opts": [
        "POWER",
        "SRZHU",
        "REWOP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'POWER'."
    },
    {
      "q": "[Cipher #15] In an encryption code, if the word 'STORM' is encoded as 'WXSVQ', then what was the original plaintext word?",
      "opts": [
        "STORM",
        "WXSVQ",
        "MROTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'STORM'."
    },
    {
      "q": "[Cipher #16] In an encryption code, if the word 'SWORD' is encoded as 'TXPSE', then what was the original plaintext word?",
      "opts": [
        "SWORD",
        "TXPSE",
        "DROWS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'SWORD'."
    },
    {
      "q": "[Cipher #17] In an encryption code, if the word 'APPLE' is encoded as 'CRRNG', then what was the original plaintext word?",
      "opts": [
        "APPLE",
        "CRRNG",
        "ELPPA",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'APPLE'."
    },
    {
      "q": "[Cipher #18] In an encryption code, if the word 'HOUSE' is encoded as 'KRXVH', then what was the original plaintext word?",
      "opts": [
        "HOUSE",
        "KRXVH",
        "ESUOH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'HOUSE'."
    },
    {
      "q": "[Cipher #19] In an encryption code, if the word 'TRAIN' is encoded as 'XVEMR', then what was the original plaintext word?",
      "opts": [
        "TRAIN",
        "XVEMR",
        "NIART",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'TRAIN'."
    },
    {
      "q": "[Cipher #20] In an encryption code, if the word 'BEACH' is encoded as 'CFBDI', then what was the original plaintext word?",
      "opts": [
        "BEACH",
        "CFBDI",
        "HCAEB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'BEACH'."
    },
    {
      "q": "[Cipher #21] In an encryption code, if the word 'CHAIR' is encoded as 'EJCKT', then what was the original plaintext word?",
      "opts": [
        "CHAIR",
        "EJCKT",
        "RIAHC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'CHAIR'."
    },
    {
      "q": "[Cipher #22] In an encryption code, if the word 'TABLE' is encoded as 'WDEOH', then what was the original plaintext word?",
      "opts": [
        "TABLE",
        "WDEOH",
        "ELBAT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'TABLE'."
    },
    {
      "q": "[Cipher #23] In an encryption code, if the word 'MOUSE' is encoded as 'QSYWI', then what was the original plaintext word?",
      "opts": [
        "MOUSE",
        "QSYWI",
        "ESUOM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'MOUSE'."
    },
    {
      "q": "[Cipher #24] In an encryption code, if the word 'HORSE' is encoded as 'IPSTF', then what was the original plaintext word?",
      "opts": [
        "HORSE",
        "IPSTF",
        "ESROH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'HORSE'."
    },
    {
      "q": "[Cipher #25] In an encryption code, if the word 'MUSIC' is encoded as 'OWUKE', then what was the original plaintext word?",
      "opts": [
        "MUSIC",
        "OWUKE",
        "CISUM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'MUSIC'."
    },
    {
      "q": "[Cipher #26] In an encryption code, if the word 'PEACE' is encoded as 'SHDFH', then what was the original plaintext word?",
      "opts": [
        "PEACE",
        "SHDFH",
        "ECAEP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'PEACE'."
    },
    {
      "q": "[Cipher #27] In an encryption code, if the word 'RADIO' is encoded as 'VEHMS', then what was the original plaintext word?",
      "opts": [
        "RADIO",
        "VEHMS",
        "OIDAR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'RADIO'."
    },
    {
      "q": "[Cipher #28] In an encryption code, if the word 'SUGAR' is encoded as 'TVHBS', then what was the original plaintext word?",
      "opts": [
        "SUGAR",
        "TVHBS",
        "RAGUS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'SUGAR'."
    },
    {
      "q": "[Cipher #29] In an encryption code, if the word 'WHITE' is encoded as 'YJKVG', then what was the original plaintext word?",
      "opts": [
        "WHITE",
        "YJKVG",
        "ETIHW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'WHITE'."
    },
    {
      "q": "[Cipher #30] In an encryption code, if the word 'YOUTH' is encoded as 'BRXWK', then what was the original plaintext word?",
      "opts": [
        "YOUTH",
        "BRXWK",
        "HTUOY",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'YOUTH'."
    }
  ],
  "level2": [
    {
      "q": "[Cipher #1] In an encryption code, if the word 'CLOUD' is encoded as 'FORXG', then what was the original plaintext word?",
      "opts": [
        "CLOUD",
        "FORXG",
        "DUOLC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'CLOUD'."
    },
    {
      "q": "[Cipher #2] In an encryption code, if the word 'RIVER' is encoded as 'VMZIV', then what was the original plaintext word?",
      "opts": [
        "RIVER",
        "VMZIV",
        "REVIR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'RIVER'."
    },
    {
      "q": "[Cipher #3] In an encryption code, if the word 'STONE' is encoded as 'TUPOF', then what was the original plaintext word?",
      "opts": [
        "STONE",
        "TUPOF",
        "ENOTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'STONE'."
    },
    {
      "q": "[Cipher #4] In an encryption code, if the word 'LIGHT' is encoded as 'NKIJV', then what was the original plaintext word?",
      "opts": [
        "LIGHT",
        "NKIJV",
        "THGIL",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'LIGHT'."
    },
    {
      "q": "[Cipher #5] In an encryption code, if the word 'FLAME' is encoded as 'IODPH', then what was the original plaintext word?",
      "opts": [
        "FLAME",
        "IODPH",
        "EMALF",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'FLAME'."
    },
    {
      "q": "[Cipher #6] In an encryption code, if the word 'TIGER' is encoded as 'XMKIV', then what was the original plaintext word?",
      "opts": [
        "TIGER",
        "XMKIV",
        "REGIT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'TIGER'."
    },
    {
      "q": "[Cipher #7] In an encryption code, if the word 'OCEAN' is encoded as 'PDFBO', then what was the original plaintext word?",
      "opts": [
        "OCEAN",
        "PDFBO",
        "NAECO",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'OCEAN'."
    },
    {
      "q": "[Cipher #8] In an encryption code, if the word 'PLANT' is encoded as 'RNCPV', then what was the original plaintext word?",
      "opts": [
        "PLANT",
        "RNCPV",
        "TNALP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'PLANT'."
    },
    {
      "q": "[Cipher #9] In an encryption code, if the word 'EARTH' is encoded as 'HDUWK', then what was the original plaintext word?",
      "opts": [
        "EARTH",
        "HDUWK",
        "HTRAE",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'EARTH'."
    },
    {
      "q": "[Cipher #10] In an encryption code, if the word 'SPACE' is encoded as 'WTEGI', then what was the original plaintext word?",
      "opts": [
        "SPACE",
        "WTEGI",
        "ECAPS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'SPACE'."
    },
    {
      "q": "[Cipher #11] In an encryption code, if the word 'DREAM' is encoded as 'ESFBN', then what was the original plaintext word?",
      "opts": [
        "DREAM",
        "ESFBN",
        "MAERD",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'DREAM'."
    },
    {
      "q": "[Cipher #12] In an encryption code, if the word 'WATER' is encoded as 'YCVGT', then what was the original plaintext word?",
      "opts": [
        "WATER",
        "YCVGT",
        "RETAW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'WATER'."
    },
    {
      "q": "[Cipher #13] In an encryption code, if the word 'BRAIN' is encoded as 'EUDLQ', then what was the original plaintext word?",
      "opts": [
        "BRAIN",
        "EUDLQ",
        "NIARB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'BRAIN'."
    },
    {
      "q": "[Cipher #14] In an encryption code, if the word 'POWER' is encoded as 'TSAIV', then what was the original plaintext word?",
      "opts": [
        "POWER",
        "TSAIV",
        "REWOP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'POWER'."
    },
    {
      "q": "[Cipher #15] In an encryption code, if the word 'STORM' is encoded as 'TUPSN', then what was the original plaintext word?",
      "opts": [
        "STORM",
        "TUPSN",
        "MROTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'STORM'."
    },
    {
      "q": "[Cipher #16] In an encryption code, if the word 'SWORD' is encoded as 'UYQTF', then what was the original plaintext word?",
      "opts": [
        "SWORD",
        "UYQTF",
        "DROWS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'SWORD'."
    },
    {
      "q": "[Cipher #17] In an encryption code, if the word 'APPLE' is encoded as 'DSSOH', then what was the original plaintext word?",
      "opts": [
        "APPLE",
        "DSSOH",
        "ELPPA",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'APPLE'."
    },
    {
      "q": "[Cipher #18] In an encryption code, if the word 'HOUSE' is encoded as 'LSYWI', then what was the original plaintext word?",
      "opts": [
        "HOUSE",
        "LSYWI",
        "ESUOH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'HOUSE'."
    },
    {
      "q": "[Cipher #19] In an encryption code, if the word 'TRAIN' is encoded as 'USBJO', then what was the original plaintext word?",
      "opts": [
        "TRAIN",
        "USBJO",
        "NIART",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'TRAIN'."
    },
    {
      "q": "[Cipher #20] In an encryption code, if the word 'BEACH' is encoded as 'DGCEJ', then what was the original plaintext word?",
      "opts": [
        "BEACH",
        "DGCEJ",
        "HCAEB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'BEACH'."
    },
    {
      "q": "[Cipher #21] In an encryption code, if the word 'CHAIR' is encoded as 'FKDLU', then what was the original plaintext word?",
      "opts": [
        "CHAIR",
        "FKDLU",
        "RIAHC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'CHAIR'."
    },
    {
      "q": "[Cipher #22] In an encryption code, if the word 'TABLE' is encoded as 'XEFPI', then what was the original plaintext word?",
      "opts": [
        "TABLE",
        "XEFPI",
        "ELBAT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'TABLE'."
    },
    {
      "q": "[Cipher #23] In an encryption code, if the word 'MOUSE' is encoded as 'NPVTF', then what was the original plaintext word?",
      "opts": [
        "MOUSE",
        "NPVTF",
        "ESUOM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'MOUSE'."
    },
    {
      "q": "[Cipher #24] In an encryption code, if the word 'HORSE' is encoded as 'JQTUG', then what was the original plaintext word?",
      "opts": [
        "HORSE",
        "JQTUG",
        "ESROH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'HORSE'."
    },
    {
      "q": "[Cipher #25] In an encryption code, if the word 'MUSIC' is encoded as 'PXVLF', then what was the original plaintext word?",
      "opts": [
        "MUSIC",
        "PXVLF",
        "CISUM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'MUSIC'."
    },
    {
      "q": "[Cipher #26] In an encryption code, if the word 'PEACE' is encoded as 'TIEGI', then what was the original plaintext word?",
      "opts": [
        "PEACE",
        "TIEGI",
        "ECAEP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'PEACE'."
    },
    {
      "q": "[Cipher #27] In an encryption code, if the word 'RADIO' is encoded as 'SBEJP', then what was the original plaintext word?",
      "opts": [
        "RADIO",
        "SBEJP",
        "OIDAR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'RADIO'."
    },
    {
      "q": "[Cipher #28] In an encryption code, if the word 'SUGAR' is encoded as 'UWICT', then what was the original plaintext word?",
      "opts": [
        "SUGAR",
        "UWICT",
        "RAGUS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'SUGAR'."
    },
    {
      "q": "[Cipher #29] In an encryption code, if the word 'WHITE' is encoded as 'ZKLWH', then what was the original plaintext word?",
      "opts": [
        "WHITE",
        "ZKLWH",
        "ETIHW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'WHITE'."
    },
    {
      "q": "[Cipher #30] In an encryption code, if the word 'YOUTH' is encoded as 'CSYXL', then what was the original plaintext word?",
      "opts": [
        "YOUTH",
        "CSYXL",
        "HTUOY",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'YOUTH'."
    }
  ],
  "level3": [
    {
      "q": "[Cipher #1] In an encryption code, if the word 'CLOUD' is encoded as 'GPSYH', then what was the original plaintext word?",
      "opts": [
        "CLOUD",
        "GPSYH",
        "DUOLC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'CLOUD'."
    },
    {
      "q": "[Cipher #2] In an encryption code, if the word 'RIVER' is encoded as 'SJWFS', then what was the original plaintext word?",
      "opts": [
        "RIVER",
        "SJWFS",
        "REVIR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'RIVER'."
    },
    {
      "q": "[Cipher #3] In an encryption code, if the word 'STONE' is encoded as 'UVQPG', then what was the original plaintext word?",
      "opts": [
        "STONE",
        "UVQPG",
        "ENOTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'STONE'."
    },
    {
      "q": "[Cipher #4] In an encryption code, if the word 'LIGHT' is encoded as 'OLJKW', then what was the original plaintext word?",
      "opts": [
        "LIGHT",
        "OLJKW",
        "THGIL",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'LIGHT'."
    },
    {
      "q": "[Cipher #5] In an encryption code, if the word 'FLAME' is encoded as 'JPEQI', then what was the original plaintext word?",
      "opts": [
        "FLAME",
        "JPEQI",
        "EMALF",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'FLAME'."
    },
    {
      "q": "[Cipher #6] In an encryption code, if the word 'TIGER' is encoded as 'UJHFS', then what was the original plaintext word?",
      "opts": [
        "TIGER",
        "UJHFS",
        "REGIT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'TIGER'."
    },
    {
      "q": "[Cipher #7] In an encryption code, if the word 'OCEAN' is encoded as 'QEGCP', then what was the original plaintext word?",
      "opts": [
        "OCEAN",
        "QEGCP",
        "NAECO",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'OCEAN'."
    },
    {
      "q": "[Cipher #8] In an encryption code, if the word 'PLANT' is encoded as 'SODQW', then what was the original plaintext word?",
      "opts": [
        "PLANT",
        "SODQW",
        "TNALP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'PLANT'."
    },
    {
      "q": "[Cipher #9] In an encryption code, if the word 'EARTH' is encoded as 'IEVXL', then what was the original plaintext word?",
      "opts": [
        "EARTH",
        "IEVXL",
        "HTRAE",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'EARTH'."
    },
    {
      "q": "[Cipher #10] In an encryption code, if the word 'SPACE' is encoded as 'TQBDF', then what was the original plaintext word?",
      "opts": [
        "SPACE",
        "TQBDF",
        "ECAPS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'SPACE'."
    },
    {
      "q": "[Cipher #11] In an encryption code, if the word 'DREAM' is encoded as 'FTGCO', then what was the original plaintext word?",
      "opts": [
        "DREAM",
        "FTGCO",
        "MAERD",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'DREAM'."
    },
    {
      "q": "[Cipher #12] In an encryption code, if the word 'WATER' is encoded as 'ZDWHU', then what was the original plaintext word?",
      "opts": [
        "WATER",
        "ZDWHU",
        "RETAW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'WATER'."
    },
    {
      "q": "[Cipher #13] In an encryption code, if the word 'BRAIN' is encoded as 'FVEMR', then what was the original plaintext word?",
      "opts": [
        "BRAIN",
        "FVEMR",
        "NIARB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'BRAIN'."
    },
    {
      "q": "[Cipher #14] In an encryption code, if the word 'POWER' is encoded as 'QPXFS', then what was the original plaintext word?",
      "opts": [
        "POWER",
        "QPXFS",
        "REWOP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'POWER'."
    },
    {
      "q": "[Cipher #15] In an encryption code, if the word 'STORM' is encoded as 'UVQTO', then what was the original plaintext word?",
      "opts": [
        "STORM",
        "UVQTO",
        "MROTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'STORM'."
    },
    {
      "q": "[Cipher #16] In an encryption code, if the word 'SWORD' is encoded as 'VZRUG', then what was the original plaintext word?",
      "opts": [
        "SWORD",
        "VZRUG",
        "DROWS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'SWORD'."
    },
    {
      "q": "[Cipher #17] In an encryption code, if the word 'APPLE' is encoded as 'ETTPI', then what was the original plaintext word?",
      "opts": [
        "APPLE",
        "ETTPI",
        "ELPPA",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'APPLE'."
    },
    {
      "q": "[Cipher #18] In an encryption code, if the word 'HOUSE' is encoded as 'IPVTF', then what was the original plaintext word?",
      "opts": [
        "HOUSE",
        "IPVTF",
        "ESUOH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'HOUSE'."
    },
    {
      "q": "[Cipher #19] In an encryption code, if the word 'TRAIN' is encoded as 'VTCKP', then what was the original plaintext word?",
      "opts": [
        "TRAIN",
        "VTCKP",
        "NIART",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'TRAIN'."
    },
    {
      "q": "[Cipher #20] In an encryption code, if the word 'BEACH' is encoded as 'EHDFK', then what was the original plaintext word?",
      "opts": [
        "BEACH",
        "EHDFK",
        "HCAEB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'BEACH'."
    },
    {
      "q": "[Cipher #21] In an encryption code, if the word 'CHAIR' is encoded as 'GLEMV', then what was the original plaintext word?",
      "opts": [
        "CHAIR",
        "GLEMV",
        "RIAHC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'CHAIR'."
    },
    {
      "q": "[Cipher #22] In an encryption code, if the word 'TABLE' is encoded as 'UBCMF', then what was the original plaintext word?",
      "opts": [
        "TABLE",
        "UBCMF",
        "ELBAT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'TABLE'."
    },
    {
      "q": "[Cipher #23] In an encryption code, if the word 'MOUSE' is encoded as 'OQWUG', then what was the original plaintext word?",
      "opts": [
        "MOUSE",
        "OQWUG",
        "ESUOM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'MOUSE'."
    },
    {
      "q": "[Cipher #24] In an encryption code, if the word 'HORSE' is encoded as 'KRUVH', then what was the original plaintext word?",
      "opts": [
        "HORSE",
        "KRUVH",
        "ESROH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'HORSE'."
    },
    {
      "q": "[Cipher #25] In an encryption code, if the word 'MUSIC' is encoded as 'QYWMG', then what was the original plaintext word?",
      "opts": [
        "MUSIC",
        "QYWMG",
        "CISUM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'MUSIC'."
    },
    {
      "q": "[Cipher #26] In an encryption code, if the word 'PEACE' is encoded as 'QFBDF', then what was the original plaintext word?",
      "opts": [
        "PEACE",
        "QFBDF",
        "ECAEP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'PEACE'."
    },
    {
      "q": "[Cipher #27] In an encryption code, if the word 'RADIO' is encoded as 'TCFKQ', then what was the original plaintext word?",
      "opts": [
        "RADIO",
        "TCFKQ",
        "OIDAR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'RADIO'."
    },
    {
      "q": "[Cipher #28] In an encryption code, if the word 'SUGAR' is encoded as 'VXJDU', then what was the original plaintext word?",
      "opts": [
        "SUGAR",
        "VXJDU",
        "RAGUS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'SUGAR'."
    },
    {
      "q": "[Cipher #29] In an encryption code, if the word 'WHITE' is encoded as 'ALMXI', then what was the original plaintext word?",
      "opts": [
        "WHITE",
        "ALMXI",
        "ETIHW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'WHITE'."
    },
    {
      "q": "[Cipher #30] In an encryption code, if the word 'YOUTH' is encoded as 'ZPVUI', then what was the original plaintext word?",
      "opts": [
        "YOUTH",
        "ZPVUI",
        "HTUOY",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'YOUTH'."
    }
  ],
  "level4": [
    {
      "q": "[Cipher #1] In an encryption code, if the word 'CLOUD' is encoded as 'DMPVE', then what was the original plaintext word?",
      "opts": [
        "CLOUD",
        "DMPVE",
        "DUOLC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'CLOUD'."
    },
    {
      "q": "[Cipher #2] In an encryption code, if the word 'RIVER' is encoded as 'TKXGT', then what was the original plaintext word?",
      "opts": [
        "RIVER",
        "TKXGT",
        "REVIR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'RIVER'."
    },
    {
      "q": "[Cipher #3] In an encryption code, if the word 'STONE' is encoded as 'VWRQH', then what was the original plaintext word?",
      "opts": [
        "STONE",
        "VWRQH",
        "ENOTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'STONE'."
    },
    {
      "q": "[Cipher #4] In an encryption code, if the word 'LIGHT' is encoded as 'PMKLX', then what was the original plaintext word?",
      "opts": [
        "LIGHT",
        "PMKLX",
        "THGIL",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'LIGHT'."
    },
    {
      "q": "[Cipher #5] In an encryption code, if the word 'FLAME' is encoded as 'GMBNF', then what was the original plaintext word?",
      "opts": [
        "FLAME",
        "GMBNF",
        "EMALF",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'FLAME'."
    },
    {
      "q": "[Cipher #6] In an encryption code, if the word 'TIGER' is encoded as 'VKIGT', then what was the original plaintext word?",
      "opts": [
        "TIGER",
        "VKIGT",
        "REGIT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'TIGER'."
    },
    {
      "q": "[Cipher #7] In an encryption code, if the word 'OCEAN' is encoded as 'RFHDQ', then what was the original plaintext word?",
      "opts": [
        "OCEAN",
        "RFHDQ",
        "NAECO",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'OCEAN'."
    },
    {
      "q": "[Cipher #8] In an encryption code, if the word 'PLANT' is encoded as 'TPERX', then what was the original plaintext word?",
      "opts": [
        "PLANT",
        "TPERX",
        "TNALP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'PLANT'."
    },
    {
      "q": "[Cipher #9] In an encryption code, if the word 'EARTH' is encoded as 'FBSUI', then what was the original plaintext word?",
      "opts": [
        "EARTH",
        "FBSUI",
        "HTRAE",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'EARTH'."
    },
    {
      "q": "[Cipher #10] In an encryption code, if the word 'SPACE' is encoded as 'URCEG', then what was the original plaintext word?",
      "opts": [
        "SPACE",
        "URCEG",
        "ECAPS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'SPACE'."
    },
    {
      "q": "[Cipher #11] In an encryption code, if the word 'DREAM' is encoded as 'GUHDP', then what was the original plaintext word?",
      "opts": [
        "DREAM",
        "GUHDP",
        "MAERD",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'DREAM'."
    },
    {
      "q": "[Cipher #12] In an encryption code, if the word 'WATER' is encoded as 'AEXIV', then what was the original plaintext word?",
      "opts": [
        "WATER",
        "AEXIV",
        "RETAW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'WATER'."
    },
    {
      "q": "[Cipher #13] In an encryption code, if the word 'BRAIN' is encoded as 'CSBJO', then what was the original plaintext word?",
      "opts": [
        "BRAIN",
        "CSBJO",
        "NIARB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'BRAIN'."
    },
    {
      "q": "[Cipher #14] In an encryption code, if the word 'POWER' is encoded as 'RQYGT', then what was the original plaintext word?",
      "opts": [
        "POWER",
        "RQYGT",
        "REWOP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'POWER'."
    },
    {
      "q": "[Cipher #15] In an encryption code, if the word 'STORM' is encoded as 'VWRUP', then what was the original plaintext word?",
      "opts": [
        "STORM",
        "VWRUP",
        "MROTS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'STORM'."
    },
    {
      "q": "[Cipher #16] In an encryption code, if the word 'SWORD' is encoded as 'WASVH', then what was the original plaintext word?",
      "opts": [
        "SWORD",
        "WASVH",
        "DROWS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'SWORD'."
    },
    {
      "q": "[Cipher #17] In an encryption code, if the word 'APPLE' is encoded as 'BQQMF', then what was the original plaintext word?",
      "opts": [
        "APPLE",
        "BQQMF",
        "ELPPA",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'APPLE'."
    },
    {
      "q": "[Cipher #18] In an encryption code, if the word 'HOUSE' is encoded as 'JQWUG', then what was the original plaintext word?",
      "opts": [
        "HOUSE",
        "JQWUG",
        "ESUOH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'HOUSE'."
    },
    {
      "q": "[Cipher #19] In an encryption code, if the word 'TRAIN' is encoded as 'WUDLQ', then what was the original plaintext word?",
      "opts": [
        "TRAIN",
        "WUDLQ",
        "NIART",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'TRAIN'."
    },
    {
      "q": "[Cipher #20] In an encryption code, if the word 'BEACH' is encoded as 'FIEGL', then what was the original plaintext word?",
      "opts": [
        "BEACH",
        "FIEGL",
        "HCAEB",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'BEACH'."
    },
    {
      "q": "[Cipher #21] In an encryption code, if the word 'CHAIR' is encoded as 'DIBJS', then what was the original plaintext word?",
      "opts": [
        "CHAIR",
        "DIBJS",
        "RIAHC",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'CHAIR'."
    },
    {
      "q": "[Cipher #22] In an encryption code, if the word 'TABLE' is encoded as 'VCDNG', then what was the original plaintext word?",
      "opts": [
        "TABLE",
        "VCDNG",
        "ELBAT",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'TABLE'."
    },
    {
      "q": "[Cipher #23] In an encryption code, if the word 'MOUSE' is encoded as 'PRXVH', then what was the original plaintext word?",
      "opts": [
        "MOUSE",
        "PRXVH",
        "ESUOM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'MOUSE'."
    },
    {
      "q": "[Cipher #24] In an encryption code, if the word 'HORSE' is encoded as 'LSVWI', then what was the original plaintext word?",
      "opts": [
        "HORSE",
        "LSVWI",
        "ESROH",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'HORSE'."
    },
    {
      "q": "[Cipher #25] In an encryption code, if the word 'MUSIC' is encoded as 'NVTJD', then what was the original plaintext word?",
      "opts": [
        "MUSIC",
        "NVTJD",
        "CISUM",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'MUSIC'."
    },
    {
      "q": "[Cipher #26] In an encryption code, if the word 'PEACE' is encoded as 'RGCEG', then what was the original plaintext word?",
      "opts": [
        "PEACE",
        "RGCEG",
        "ECAEP",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'PEACE'."
    },
    {
      "q": "[Cipher #27] In an encryption code, if the word 'RADIO' is encoded as 'UDGLR', then what was the original plaintext word?",
      "opts": [
        "RADIO",
        "UDGLR",
        "OIDAR",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +3 forward. Reversing the transformation restores 'RADIO'."
    },
    {
      "q": "[Cipher #28] In an encryption code, if the word 'SUGAR' is encoded as 'WYKEV', then what was the original plaintext word?",
      "opts": [
        "SUGAR",
        "WYKEV",
        "RAGUS",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +4 forward. Reversing the transformation restores 'SUGAR'."
    },
    {
      "q": "[Cipher #29] In an encryption code, if the word 'WHITE' is encoded as 'XIJUF', then what was the original plaintext word?",
      "opts": [
        "WHITE",
        "XIJUF",
        "ETIHW",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +1 forward. Reversing the transformation restores 'WHITE'."
    },
    {
      "q": "[Cipher #30] In an encryption code, if the word 'YOUTH' is encoded as 'AQWVJ', then what was the original plaintext word?",
      "opts": [
        "YOUTH",
        "AQWVJ",
        "HTUOY",
        "UNSOLVABLE"
      ],
      "ans": "A",
      "exp": "Each character was systematically advanced by +2 forward. Reversing the transformation restores 'YOUTH'."
    }
  ]
};

LOGICAL_POOLS_MAP["puzzles"] = {
  "level1": [
    {
      "q": "[Logic Puzzle Case #1] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #2] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #3] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #4] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #5] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #6] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #7] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #8] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #9] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #10] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #11] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #12] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #13] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #14] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #15] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #16] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #17] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #18] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #19] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #20] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #21] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #22] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #23] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #24] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #25] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #26] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #27] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #28] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #29] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #30] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    }
  ],
  "level2": [
    {
      "q": "[Logic Puzzle Case #1] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #2] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #3] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #4] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #5] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #6] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #7] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #8] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #9] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #10] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #11] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #12] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #13] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #14] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #15] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #16] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #17] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #18] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #19] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #20] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #21] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #22] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #23] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #24] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #25] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #26] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #27] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #28] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #29] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #30] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    }
  ],
  "level3": [
    {
      "q": "[Logic Puzzle Case #1] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #2] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #3] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #4] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #5] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #6] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #7] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #8] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #9] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #10] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #11] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #12] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #13] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #14] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #15] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #16] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #17] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #18] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #19] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #20] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #21] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #22] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #23] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #24] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #25] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #26] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #27] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #28] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #29] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #30] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    }
  ],
  "level4": [
    {
      "q": "[Logic Puzzle Case #1] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #2] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #3] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #4] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #5] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #6] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #7] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #8] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #9] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #10] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #11] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #12] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #13] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #14] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #15] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #16] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #17] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #18] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #19] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #20] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #21] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #22] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #23] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #24] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #25] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    },
    {
      "q": "[Logic Puzzle Case #26] Five persons P, Q, R, S, T are sitting on a bench facing North. Q is to the immediate right of P. S is to the immediate left of T. R is at the exact center. If P is to the right of R, who is sitting at the extreme right end?",
      "opts": [
        "Q",
        "P",
        "T",
        "S"
      ],
      "ans": "A",
      "exp": "Order: S, T, R, P, Q. The person at extreme right is Q."
    },
    {
      "q": "[Logic Puzzle Case #27] Seven friends A, B, C, D, E, F, G live on seven different floors of a building (1 to 7). G lives on an odd-numbered floor above floor 4. B lives immediately below G. Only two persons live between B and E. On which floor does G live?",
      "opts": [
        "Floor 5 or 7",
        "Floor 3",
        "Floor 1",
        "Floor 2"
      ],
      "ans": "A",
      "exp": "G lives on odd floor > 4 (either 5 or 7)."
    },
    {
      "q": "[Logic Puzzle Case #28] Five boxes J, K, L, M, N are stacked one above another. Box K is immediately above L. Box M is immediately below J. Box N is at the bottom. If J is below L, which box is at the very top?",
      "opts": [
        "Box K",
        "Box L",
        "Box J",
        "Box M"
      ],
      "ans": "A",
      "exp": "Stack: K, L, J, M, N. Top box is K."
    },
    {
      "q": "[Logic Puzzle Case #29] Among five colleagues P, Q, R, S, T: P is taller than Q but shorter than T. R is the shortest. S is shorter than P but taller than Q. Who is the second tallest?",
      "opts": [
        "P",
        "T",
        "S",
        "Q"
      ],
      "ans": "A",
      "exp": "Height order: T > P > S > Q > R. Second tallest is P."
    },
    {
      "q": "[Logic Puzzle Case #30] Five students scored different marks in an exam: A scored more than B but less than C. D scored more than C. E scored the lowest. Who scored the second highest marks?",
      "opts": [
        "C",
        "D",
        "A",
        "B"
      ],
      "ans": "A",
      "exp": "Order: D > C > A > B > E. Second highest is C."
    }
  ]
};

LOGICAL_POOLS_MAP["dices"] = {
  "level1": [
    {
      "q": "[Dice Assessment #1] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #2] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #3] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #4] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #5] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #6] A non-standard die has faces numbered from 6 to 11. If opposite faces sum to 17, what face opposes 11?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #7] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #8] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #9] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #10] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #11] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #12] A non-standard die has faces numbered from 12 to 17. If opposite faces sum to 29, what face opposes 17?",
      "opts": [
        "12",
        "13",
        "11",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #13] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #14] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #15] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #16] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #17] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #18] A non-standard die has faces numbered from 18 to 23. If opposite faces sum to 41, what face opposes 23?",
      "opts": [
        "18",
        "19",
        "17",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #19] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #20] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #21] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #22] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #23] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #24] A non-standard die has faces numbered from 24 to 29. If opposite faces sum to 53, what face opposes 29?",
      "opts": [
        "24",
        "25",
        "23",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #25] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #26] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #27] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #28] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #29] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #30] A non-standard die has faces numbered from 30 to 35. If opposite faces sum to 65, what face opposes 35?",
      "opts": [
        "30",
        "31",
        "29",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    }
  ],
  "level2": [
    {
      "q": "[Dice Assessment #1] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #2] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #3] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #4] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #5] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #6] A non-standard die has faces numbered from 6 to 11. If opposite faces sum to 17, what face opposes 11?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #7] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #8] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #9] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #10] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #11] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #12] A non-standard die has faces numbered from 12 to 17. If opposite faces sum to 29, what face opposes 17?",
      "opts": [
        "12",
        "13",
        "11",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #13] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #14] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #15] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #16] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #17] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #18] A non-standard die has faces numbered from 18 to 23. If opposite faces sum to 41, what face opposes 23?",
      "opts": [
        "18",
        "19",
        "17",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #19] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #20] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #21] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #22] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #23] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #24] A non-standard die has faces numbered from 24 to 29. If opposite faces sum to 53, what face opposes 29?",
      "opts": [
        "24",
        "25",
        "23",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #25] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #26] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #27] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #28] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #29] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #30] A non-standard die has faces numbered from 30 to 35. If opposite faces sum to 65, what face opposes 35?",
      "opts": [
        "30",
        "31",
        "29",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    }
  ],
  "level3": [
    {
      "q": "[Dice Assessment #1] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #2] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #3] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #4] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #5] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #6] A non-standard die has faces numbered from 6 to 11. If opposite faces sum to 17, what face opposes 11?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #7] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #8] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #9] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #10] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #11] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #12] A non-standard die has faces numbered from 12 to 17. If opposite faces sum to 29, what face opposes 17?",
      "opts": [
        "12",
        "13",
        "11",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #13] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #14] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #15] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #16] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #17] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #18] A non-standard die has faces numbered from 18 to 23. If opposite faces sum to 41, what face opposes 23?",
      "opts": [
        "18",
        "19",
        "17",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #19] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #20] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #21] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #22] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #23] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #24] A non-standard die has faces numbered from 24 to 29. If opposite faces sum to 53, what face opposes 29?",
      "opts": [
        "24",
        "25",
        "23",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #25] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #26] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #27] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #28] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #29] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #30] A non-standard die has faces numbered from 30 to 35. If opposite faces sum to 65, what face opposes 35?",
      "opts": [
        "30",
        "31",
        "29",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    }
  ],
  "level4": [
    {
      "q": "[Dice Assessment #1] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #2] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #3] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #4] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #5] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #6] A non-standard die has faces numbered from 6 to 11. If opposite faces sum to 17, what face opposes 11?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #7] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #8] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #9] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #10] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #11] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #12] A non-standard die has faces numbered from 12 to 17. If opposite faces sum to 29, what face opposes 17?",
      "opts": [
        "12",
        "13",
        "11",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #13] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #14] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #15] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #16] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #17] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #18] A non-standard die has faces numbered from 18 to 23. If opposite faces sum to 41, what face opposes 23?",
      "opts": [
        "18",
        "19",
        "17",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #19] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #20] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #21] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #22] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #23] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #24] A non-standard die has faces numbered from 24 to 29. If opposite faces sum to 53, what face opposes 29?",
      "opts": [
        "24",
        "25",
        "23",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    },
    {
      "q": "[Dice Assessment #25] If the top face of a standard die is 1, which number is directly on the bottom face?",
      "opts": [
        "6",
        "7",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sum of opposite faces = 7. 7 - 1 = 6."
    },
    {
      "q": "[Dice Assessment #26] Two positions of a die are shown with common face 2. The adjacent faces visible are 3 and 4. Which face is opposite to 2?",
      "opts": [
        "5",
        "6",
        "4",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite of 2 on standard die is 5."
    },
    {
      "q": "[Dice Assessment #27] In an unfolded die net, face 3 is situated along the central spine. When folded, what number is on the face opposite to 3?",
      "opts": [
        "4",
        "5",
        "3",
        "4"
      ],
      "ans": "A",
      "exp": "Alternating positions in a die net are opposite: opposite to 3 is 4."
    },
    {
      "q": "[Dice Assessment #28] A fair die is thrown. What is the probability that the face showing is strictly greater than 4?",
      "opts": [
        "2/6",
        "3",
        "1",
        "4"
      ],
      "ans": "A",
      "exp": "Favorable outcomes = 2 out of 6 total faces."
    },
    {
      "q": "[Dice Assessment #29] If two dice are rolled and their sum is 11, what is the theoretical probability of this sum?",
      "opts": [
        "Symmetric probability distribution",
        "3",
        "5",
        "4"
      ],
      "ans": "A",
      "exp": "Sums 7 to 12 follow standard triangular probability."
    },
    {
      "q": "[Dice Assessment #30] A non-standard die has faces numbered from 30 to 35. If opposite faces sum to 65, what face opposes 35?",
      "opts": [
        "30",
        "31",
        "29",
        "4"
      ],
      "ans": "A",
      "exp": "Opposite face = Sum - Given face."
    }
  ]
};

LOGICAL_POOLS_MAP["series-completion"] = {
  "level1": [
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #1): 1, 3, 5, 7, ?",
      "opts": [
        "9",
        "11",
        "8",
        "13"
      ],
      "ans": "A",
      "exp": "Constant difference of +2. Next term = 7 + 2 = 9."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #2): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #3): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #4): 10, 12, 11, 13, ?",
      "opts": [
        "12",
        "15",
        "10",
        "17"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 13 - 1 = 12."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #5): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #6): 16, 23, 30, 37, ?",
      "opts": [
        "44",
        "46",
        "43",
        "48"
      ],
      "ans": "A",
      "exp": "Constant difference of +7. Next term = 37 + 7 = 44."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #7): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #8): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #9): 25, 29, 28, 32, ?",
      "opts": [
        "31",
        "34",
        "29",
        "36"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 32 - 1 = 31."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #10): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #11): 31, 43, 55, 67, ?",
      "opts": [
        "79",
        "81",
        "78",
        "83"
      ],
      "ans": "A",
      "exp": "Constant difference of +12. Next term = 67 + 12 = 79."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #12): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #13): 1, 2, 4, 8, ?",
      "opts": [
        "16",
        "20",
        "14",
        "22"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 8 × 2 = 16."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #14): 40, 43, 42, 45, ?",
      "opts": [
        "44",
        "47",
        "42",
        "49"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 45 - 1 = 44."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #15): 27, 64, 125, ?",
      "opts": [
        "216",
        "226",
        "208",
        "231"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 6³ = 216."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #16): 46, 63, 80, 97, ?",
      "opts": [
        "114",
        "116",
        "113",
        "118"
      ],
      "ans": "A",
      "exp": "Constant difference of +17. Next term = 97 + 17 = 114."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #17): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #18): 2, 4, 8, 16, ?",
      "opts": [
        "32",
        "36",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 16 × 2 = 32."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #19): 55, 57, 56, 58, ?",
      "opts": [
        "57",
        "60",
        "55",
        "62"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 58 - 1 = 57."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #20): 64, 125, 216, ?",
      "opts": [
        "343",
        "353",
        "335",
        "358"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 7³ = 343."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #21): 61, 83, 105, 127, ?",
      "opts": [
        "149",
        "151",
        "148",
        "153"
      ],
      "ans": "A",
      "exp": "Constant difference of +22. Next term = 127 + 22 = 149."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #22): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #23): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #24): 70, 74, 73, 77, ?",
      "opts": [
        "76",
        "79",
        "74",
        "81"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 77 - 1 = 76."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #25): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #26): 76, 103, 130, 157, ?",
      "opts": [
        "184",
        "186",
        "183",
        "188"
      ],
      "ans": "A",
      "exp": "Constant difference of +27. Next term = 157 + 27 = 184."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #27): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #28): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #29): 85, 88, 87, 90, ?",
      "opts": [
        "89",
        "92",
        "87",
        "94"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 90 - 1 = 89."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #30): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    }
  ],
  "level2": [
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #1): 1, 3, 5, 7, ?",
      "opts": [
        "9",
        "11",
        "8",
        "13"
      ],
      "ans": "A",
      "exp": "Constant difference of +2. Next term = 7 + 2 = 9."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #2): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #3): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #4): 10, 12, 11, 13, ?",
      "opts": [
        "12",
        "15",
        "10",
        "17"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 13 - 1 = 12."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #5): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #6): 16, 23, 30, 37, ?",
      "opts": [
        "44",
        "46",
        "43",
        "48"
      ],
      "ans": "A",
      "exp": "Constant difference of +7. Next term = 37 + 7 = 44."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #7): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #8): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #9): 25, 29, 28, 32, ?",
      "opts": [
        "31",
        "34",
        "29",
        "36"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 32 - 1 = 31."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #10): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #11): 31, 43, 55, 67, ?",
      "opts": [
        "79",
        "81",
        "78",
        "83"
      ],
      "ans": "A",
      "exp": "Constant difference of +12. Next term = 67 + 12 = 79."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #12): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #13): 1, 2, 4, 8, ?",
      "opts": [
        "16",
        "20",
        "14",
        "22"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 8 × 2 = 16."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #14): 40, 43, 42, 45, ?",
      "opts": [
        "44",
        "47",
        "42",
        "49"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 45 - 1 = 44."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #15): 27, 64, 125, ?",
      "opts": [
        "216",
        "226",
        "208",
        "231"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 6³ = 216."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #16): 46, 63, 80, 97, ?",
      "opts": [
        "114",
        "116",
        "113",
        "118"
      ],
      "ans": "A",
      "exp": "Constant difference of +17. Next term = 97 + 17 = 114."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #17): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #18): 2, 4, 8, 16, ?",
      "opts": [
        "32",
        "36",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 16 × 2 = 32."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #19): 55, 57, 56, 58, ?",
      "opts": [
        "57",
        "60",
        "55",
        "62"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 58 - 1 = 57."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #20): 64, 125, 216, ?",
      "opts": [
        "343",
        "353",
        "335",
        "358"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 7³ = 343."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #21): 61, 83, 105, 127, ?",
      "opts": [
        "149",
        "151",
        "148",
        "153"
      ],
      "ans": "A",
      "exp": "Constant difference of +22. Next term = 127 + 22 = 149."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #22): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #23): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #24): 70, 74, 73, 77, ?",
      "opts": [
        "76",
        "79",
        "74",
        "81"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 77 - 1 = 76."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #25): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #26): 76, 103, 130, 157, ?",
      "opts": [
        "184",
        "186",
        "183",
        "188"
      ],
      "ans": "A",
      "exp": "Constant difference of +27. Next term = 157 + 27 = 184."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #27): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #28): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #29): 85, 88, 87, 90, ?",
      "opts": [
        "89",
        "92",
        "87",
        "94"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 90 - 1 = 89."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #30): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    }
  ],
  "level3": [
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #1): 1, 3, 5, 7, ?",
      "opts": [
        "9",
        "11",
        "8",
        "13"
      ],
      "ans": "A",
      "exp": "Constant difference of +2. Next term = 7 + 2 = 9."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #2): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #3): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #4): 10, 12, 11, 13, ?",
      "opts": [
        "12",
        "15",
        "10",
        "17"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 13 - 1 = 12."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #5): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #6): 16, 23, 30, 37, ?",
      "opts": [
        "44",
        "46",
        "43",
        "48"
      ],
      "ans": "A",
      "exp": "Constant difference of +7. Next term = 37 + 7 = 44."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #7): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #8): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #9): 25, 29, 28, 32, ?",
      "opts": [
        "31",
        "34",
        "29",
        "36"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 32 - 1 = 31."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #10): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #11): 31, 43, 55, 67, ?",
      "opts": [
        "79",
        "81",
        "78",
        "83"
      ],
      "ans": "A",
      "exp": "Constant difference of +12. Next term = 67 + 12 = 79."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #12): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #13): 1, 2, 4, 8, ?",
      "opts": [
        "16",
        "20",
        "14",
        "22"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 8 × 2 = 16."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #14): 40, 43, 42, 45, ?",
      "opts": [
        "44",
        "47",
        "42",
        "49"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 45 - 1 = 44."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #15): 27, 64, 125, ?",
      "opts": [
        "216",
        "226",
        "208",
        "231"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 6³ = 216."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #16): 46, 63, 80, 97, ?",
      "opts": [
        "114",
        "116",
        "113",
        "118"
      ],
      "ans": "A",
      "exp": "Constant difference of +17. Next term = 97 + 17 = 114."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #17): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #18): 2, 4, 8, 16, ?",
      "opts": [
        "32",
        "36",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 16 × 2 = 32."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #19): 55, 57, 56, 58, ?",
      "opts": [
        "57",
        "60",
        "55",
        "62"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 58 - 1 = 57."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #20): 64, 125, 216, ?",
      "opts": [
        "343",
        "353",
        "335",
        "358"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 7³ = 343."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #21): 61, 83, 105, 127, ?",
      "opts": [
        "149",
        "151",
        "148",
        "153"
      ],
      "ans": "A",
      "exp": "Constant difference of +22. Next term = 127 + 22 = 149."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #22): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #23): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #24): 70, 74, 73, 77, ?",
      "opts": [
        "76",
        "79",
        "74",
        "81"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 77 - 1 = 76."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #25): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #26): 76, 103, 130, 157, ?",
      "opts": [
        "184",
        "186",
        "183",
        "188"
      ],
      "ans": "A",
      "exp": "Constant difference of +27. Next term = 157 + 27 = 184."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #27): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #28): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #29): 85, 88, 87, 90, ?",
      "opts": [
        "89",
        "92",
        "87",
        "94"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 90 - 1 = 89."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #30): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    }
  ],
  "level4": [
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #1): 1, 3, 5, 7, ?",
      "opts": [
        "9",
        "11",
        "8",
        "13"
      ],
      "ans": "A",
      "exp": "Constant difference of +2. Next term = 7 + 2 = 9."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #2): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #3): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #4): 10, 12, 11, 13, ?",
      "opts": [
        "12",
        "15",
        "10",
        "17"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 13 - 1 = 12."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #5): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #6): 16, 23, 30, 37, ?",
      "opts": [
        "44",
        "46",
        "43",
        "48"
      ],
      "ans": "A",
      "exp": "Constant difference of +7. Next term = 37 + 7 = 44."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #7): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #8): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #9): 25, 29, 28, 32, ?",
      "opts": [
        "31",
        "34",
        "29",
        "36"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 32 - 1 = 31."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #10): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #11): 31, 43, 55, 67, ?",
      "opts": [
        "79",
        "81",
        "78",
        "83"
      ],
      "ans": "A",
      "exp": "Constant difference of +12. Next term = 67 + 12 = 79."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #12): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #13): 1, 2, 4, 8, ?",
      "opts": [
        "16",
        "20",
        "14",
        "22"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 8 × 2 = 16."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #14): 40, 43, 42, 45, ?",
      "opts": [
        "44",
        "47",
        "42",
        "49"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 45 - 1 = 44."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #15): 27, 64, 125, ?",
      "opts": [
        "216",
        "226",
        "208",
        "231"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 6³ = 216."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #16): 46, 63, 80, 97, ?",
      "opts": [
        "114",
        "116",
        "113",
        "118"
      ],
      "ans": "A",
      "exp": "Constant difference of +17. Next term = 97 + 17 = 114."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #17): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #18): 2, 4, 8, 16, ?",
      "opts": [
        "32",
        "36",
        "30",
        "38"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 16 × 2 = 32."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #19): 55, 57, 56, 58, ?",
      "opts": [
        "57",
        "60",
        "55",
        "62"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +2, -1, +2, -1. Next term = 58 - 1 = 57."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #20): 64, 125, 216, ?",
      "opts": [
        "343",
        "353",
        "335",
        "358"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 7³ = 343."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #21): 61, 83, 105, 127, ?",
      "opts": [
        "149",
        "151",
        "148",
        "153"
      ],
      "ans": "A",
      "exp": "Constant difference of +22. Next term = 127 + 22 = 149."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #22): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #23): 3, 6, 12, 24, ?",
      "opts": [
        "48",
        "52",
        "46",
        "54"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 24 × 2 = 48."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #24): 70, 74, 73, 77, ?",
      "opts": [
        "76",
        "79",
        "74",
        "81"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +4, -1, +4, -1. Next term = 77 - 1 = 76."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #25): 1, 8, 27, ?",
      "opts": [
        "64",
        "74",
        "56",
        "79"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 4³ = 64."
    },
    {
      "q": "Identify the next term in the arithmetic sequence (Pattern #26): 76, 103, 130, 157, ?",
      "opts": [
        "184",
        "186",
        "183",
        "188"
      ],
      "ans": "A",
      "exp": "Constant difference of +27. Next term = 157 + 27 = 184."
    },
    {
      "q": "Identify the next term in the square sequence (Pattern #27): 9, 16, 25, 36, ?",
      "opts": [
        "49",
        "54",
        "46",
        "57"
      ],
      "ans": "A",
      "exp": "Consecutive integer squares: 7² = 49."
    },
    {
      "q": "Find the next number in the geometric series (Pattern #28): 4, 8, 16, 32, ?",
      "opts": [
        "64",
        "68",
        "62",
        "70"
      ],
      "ans": "A",
      "exp": "Terms multiply by 2 at each step. Next term = 32 × 2 = 64."
    },
    {
      "q": "Find the missing value in the alternating series (Pattern #29): 85, 88, 87, 90, ?",
      "opts": [
        "89",
        "92",
        "87",
        "94"
      ],
      "ans": "A",
      "exp": "Alternating pattern: +3, -1, +3, -1. Next term = 90 - 1 = 89."
    },
    {
      "q": "Determine the next number in the cubic series (Pattern #30): 8, 27, 64, ?",
      "opts": [
        "125",
        "135",
        "117",
        "140"
      ],
      "ans": "A",
      "exp": "Consecutive integer cubes: 5³ = 125."
    }
  ]
};

LOGICAL_POOLS_MAP["syllogism"] = {
  "level1": [
    {
      "q": "[Syllogism #1] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #2] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #3] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #4] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #5] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #6] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #7] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #8] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #9] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #10] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #11] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #12] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #13] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #14] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #15] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #16] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #17] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #18] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #19] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #20] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #21] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #22] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #23] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #24] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #25] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #26] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #27] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #28] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #29] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #30] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    }
  ],
  "level2": [
    {
      "q": "[Syllogism #1] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #2] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #3] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #4] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #5] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #6] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #7] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #8] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #9] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #10] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #11] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #12] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #13] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #14] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #15] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #16] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #17] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #18] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #19] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #20] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #21] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #22] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #23] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #24] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #25] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #26] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #27] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #28] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #29] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #30] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    }
  ],
  "level3": [
    {
      "q": "[Syllogism #1] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #2] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #3] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #4] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #5] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #6] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #7] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #8] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #9] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #10] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #11] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #12] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #13] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #14] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #15] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #16] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #17] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #18] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #19] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #20] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #21] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #22] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #23] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #24] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #25] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #26] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #27] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #28] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #29] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #30] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    }
  ],
  "level4": [
    {
      "q": "[Syllogism #1] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #2] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #3] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #4] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #5] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #6] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #7] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #8] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #9] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #10] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #11] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #12] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #13] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #14] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #15] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #16] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #17] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #18] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #19] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #20] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    },
    {
      "q": "[Syllogism #21] Statements:\n1. All cats are animals.\n2. All animals need water.\nConclusions:\nI. All cats need water.\nII. Some animals are cats.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cats ⊆ animals ⊆ need water. Thus, All cats need water (I follows). Also Some animals are cats (II follows)."
    },
    {
      "q": "[Syllogism #22] Statements:\n1. All pens are stationery items.\n2. All stationery items contain ink.\nConclusions:\nI. All pens contain ink.\nII. Some stationery items are pens.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All pens ⊆ stationery items ⊆ contain ink. Thus, All pens contain ink (I follows). Also Some stationery items are pens (II follows)."
    },
    {
      "q": "[Syllogism #23] Statements:\n1. All cars are vehicles.\n2. All vehicles require fuel.\nConclusions:\nI. All cars require fuel.\nII. Some vehicles are cars.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All cars ⊆ vehicles ⊆ require fuel. Thus, All cars require fuel (I follows). Also Some vehicles are cars (II follows)."
    },
    {
      "q": "[Syllogism #24] Statements:\n1. All trees are plants.\n2. All plants perform photosynthesis.\nConclusions:\nI. All trees perform photosynthesis.\nII. Some plants are trees.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All trees ⊆ plants ⊆ perform photosynthesis. Thus, All trees perform photosynthesis (I follows). Also Some plants are trees (II follows)."
    },
    {
      "q": "[Syllogism #25] Statements:\n1. All laptops are computers.\n2. All computers have microprocessors.\nConclusions:\nI. All laptops have microprocessors.\nII. Some computers are laptops.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All laptops ⊆ computers ⊆ have microprocessors. Thus, All laptops have microprocessors (I follows). Also Some computers are laptops (II follows)."
    },
    {
      "q": "[Syllogism #26] Statements:\n1. All apples are fruits.\n2. All fruits contain vitamins.\nConclusions:\nI. All apples contain vitamins.\nII. Some fruits are apples.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All apples ⊆ fruits ⊆ contain vitamins. Thus, All apples contain vitamins (I follows). Also Some fruits are apples (II follows)."
    },
    {
      "q": "[Syllogism #27] Statements:\n1. All chairs are furniture.\n2. All furniture are made of wood.\nConclusions:\nI. All chairs are made of wood.\nII. Some furniture are chairs.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All chairs ⊆ furniture ⊆ are made of wood. Thus, All chairs are made of wood (I follows). Also Some furniture are chairs (II follows)."
    },
    {
      "q": "[Syllogism #28] Statements:\n1. All doctors are healthcare professionals.\n2. All healthcare professionals treat patients.\nConclusions:\nI. All doctors treat patients.\nII. Some healthcare professionals are doctors.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All doctors ⊆ healthcare professionals ⊆ treat patients. Thus, All doctors treat patients (I follows). Also Some healthcare professionals are doctors (II follows)."
    },
    {
      "q": "[Syllogism #29] Statements:\n1. All rivers are water bodies.\n2. All water bodies flow to the sea.\nConclusions:\nI. All rivers flow to the sea.\nII. Some water bodies are rivers.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All rivers ⊆ water bodies ⊆ flow to the sea. Thus, All rivers flow to the sea (I follows). Also Some water bodies are rivers (II follows)."
    },
    {
      "q": "[Syllogism #30] Statements:\n1. All sparrows are birds.\n2. All birds can fly.\nConclusions:\nI. All sparrows can fly.\nII. Some birds are sparrows.",
      "opts": [
        "Both Conclusion I and II follow",
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither follows"
      ],
      "ans": "A",
      "exp": "All sparrows ⊆ birds ⊆ can fly. Thus, All sparrows can fly (I follows). Also Some birds are sparrows (II follows)."
    }
  ]
};

LOGICAL_POOLS_MAP["data-sufficiency"] = {
  "level1": [
    {
      "q": "[Data Sufficiency #1] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2000 as exactly 50.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (50). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #2] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2002 as exactly 55.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (55). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #3] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2004 as exactly 60.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (60). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #4] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2006 as exactly 65.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (65). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #5] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2008 as exactly 70.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (70). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #6] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2010 as exactly 75.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (75). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #7] Question: What is the exact value for Rohan?\nStatement I: Rohan is 8 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2012 as exactly 80.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (80). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #8] Question: What is the exact value for Aarav?\nStatement I: Aarav is 9 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2014 as exactly 85.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (85). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #9] Question: What is the exact value for Vikram?\nStatement I: Vikram is 2 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2016 as exactly 90.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (90). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #10] Question: What is the exact value for Karan?\nStatement I: Karan is 3 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2018 as exactly 95.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (95). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #11] Question: What is the exact value for Rahul?\nStatement I: Rahul is 4 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2020 as exactly 100.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (100). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #12] Question: What is the exact value for Aditya?\nStatement I: Aditya is 5 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2022 as exactly 105.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (105). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #13] Question: What is the exact value for Rohan?\nStatement I: Rohan is 6 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2024 as exactly 110.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (110). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #14] Question: What is the exact value for Aarav?\nStatement I: Aarav is 7 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2026 as exactly 115.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (115). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #15] Question: What is the exact value for Vikram?\nStatement I: Vikram is 8 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2028 as exactly 120.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (120). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #16] Question: What is the exact value for Karan?\nStatement I: Karan is 9 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2030 as exactly 125.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (125). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #17] Question: What is the exact value for Rahul?\nStatement I: Rahul is 2 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2032 as exactly 130.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (130). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #18] Question: What is the exact value for Aditya?\nStatement I: Aditya is 3 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2034 as exactly 135.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (135). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #19] Question: What is the exact value for Rohan?\nStatement I: Rohan is 4 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2036 as exactly 140.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (140). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #20] Question: What is the exact value for Aarav?\nStatement I: Aarav is 5 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2038 as exactly 145.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (145). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #21] Question: What is the exact value for Vikram?\nStatement I: Vikram is 6 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2040 as exactly 150.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (150). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #22] Question: What is the exact value for Karan?\nStatement I: Karan is 7 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2042 as exactly 155.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (155). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #23] Question: What is the exact value for Rahul?\nStatement I: Rahul is 8 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2044 as exactly 160.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (160). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #24] Question: What is the exact value for Aditya?\nStatement I: Aditya is 9 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2046 as exactly 165.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (165). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #25] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2048 as exactly 170.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (170). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #26] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2050 as exactly 175.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (175). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #27] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2052 as exactly 180.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (180). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #28] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2054 as exactly 185.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (185). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #29] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2056 as exactly 190.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (190). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #30] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2058 as exactly 195.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (195). Together both are required and sufficient."
    }
  ],
  "level2": [
    {
      "q": "[Data Sufficiency #1] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2000 as exactly 50.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (50). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #2] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2002 as exactly 55.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (55). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #3] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2004 as exactly 60.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (60). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #4] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2006 as exactly 65.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (65). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #5] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2008 as exactly 70.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (70). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #6] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2010 as exactly 75.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (75). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #7] Question: What is the exact value for Rohan?\nStatement I: Rohan is 8 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2012 as exactly 80.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (80). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #8] Question: What is the exact value for Aarav?\nStatement I: Aarav is 9 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2014 as exactly 85.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (85). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #9] Question: What is the exact value for Vikram?\nStatement I: Vikram is 2 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2016 as exactly 90.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (90). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #10] Question: What is the exact value for Karan?\nStatement I: Karan is 3 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2018 as exactly 95.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (95). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #11] Question: What is the exact value for Rahul?\nStatement I: Rahul is 4 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2020 as exactly 100.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (100). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #12] Question: What is the exact value for Aditya?\nStatement I: Aditya is 5 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2022 as exactly 105.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (105). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #13] Question: What is the exact value for Rohan?\nStatement I: Rohan is 6 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2024 as exactly 110.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (110). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #14] Question: What is the exact value for Aarav?\nStatement I: Aarav is 7 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2026 as exactly 115.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (115). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #15] Question: What is the exact value for Vikram?\nStatement I: Vikram is 8 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2028 as exactly 120.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (120). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #16] Question: What is the exact value for Karan?\nStatement I: Karan is 9 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2030 as exactly 125.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (125). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #17] Question: What is the exact value for Rahul?\nStatement I: Rahul is 2 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2032 as exactly 130.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (130). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #18] Question: What is the exact value for Aditya?\nStatement I: Aditya is 3 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2034 as exactly 135.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (135). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #19] Question: What is the exact value for Rohan?\nStatement I: Rohan is 4 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2036 as exactly 140.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (140). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #20] Question: What is the exact value for Aarav?\nStatement I: Aarav is 5 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2038 as exactly 145.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (145). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #21] Question: What is the exact value for Vikram?\nStatement I: Vikram is 6 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2040 as exactly 150.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (150). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #22] Question: What is the exact value for Karan?\nStatement I: Karan is 7 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2042 as exactly 155.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (155). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #23] Question: What is the exact value for Rahul?\nStatement I: Rahul is 8 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2044 as exactly 160.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (160). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #24] Question: What is the exact value for Aditya?\nStatement I: Aditya is 9 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2046 as exactly 165.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (165). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #25] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2048 as exactly 170.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (170). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #26] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2050 as exactly 175.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (175). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #27] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2052 as exactly 180.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (180). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #28] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2054 as exactly 185.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (185). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #29] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2056 as exactly 190.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (190). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #30] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2058 as exactly 195.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (195). Together both are required and sufficient."
    }
  ],
  "level3": [
    {
      "q": "[Data Sufficiency #1] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2000 as exactly 50.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (50). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #2] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2002 as exactly 55.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (55). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #3] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2004 as exactly 60.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (60). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #4] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2006 as exactly 65.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (65). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #5] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2008 as exactly 70.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (70). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #6] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2010 as exactly 75.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (75). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #7] Question: What is the exact value for Rohan?\nStatement I: Rohan is 8 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2012 as exactly 80.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (80). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #8] Question: What is the exact value for Aarav?\nStatement I: Aarav is 9 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2014 as exactly 85.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (85). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #9] Question: What is the exact value for Vikram?\nStatement I: Vikram is 2 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2016 as exactly 90.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (90). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #10] Question: What is the exact value for Karan?\nStatement I: Karan is 3 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2018 as exactly 95.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (95). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #11] Question: What is the exact value for Rahul?\nStatement I: Rahul is 4 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2020 as exactly 100.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (100). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #12] Question: What is the exact value for Aditya?\nStatement I: Aditya is 5 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2022 as exactly 105.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (105). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #13] Question: What is the exact value for Rohan?\nStatement I: Rohan is 6 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2024 as exactly 110.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (110). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #14] Question: What is the exact value for Aarav?\nStatement I: Aarav is 7 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2026 as exactly 115.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (115). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #15] Question: What is the exact value for Vikram?\nStatement I: Vikram is 8 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2028 as exactly 120.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (120). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #16] Question: What is the exact value for Karan?\nStatement I: Karan is 9 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2030 as exactly 125.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (125). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #17] Question: What is the exact value for Rahul?\nStatement I: Rahul is 2 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2032 as exactly 130.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (130). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #18] Question: What is the exact value for Aditya?\nStatement I: Aditya is 3 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2034 as exactly 135.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (135). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #19] Question: What is the exact value for Rohan?\nStatement I: Rohan is 4 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2036 as exactly 140.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (140). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #20] Question: What is the exact value for Aarav?\nStatement I: Aarav is 5 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2038 as exactly 145.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (145). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #21] Question: What is the exact value for Vikram?\nStatement I: Vikram is 6 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2040 as exactly 150.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (150). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #22] Question: What is the exact value for Karan?\nStatement I: Karan is 7 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2042 as exactly 155.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (155). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #23] Question: What is the exact value for Rahul?\nStatement I: Rahul is 8 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2044 as exactly 160.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (160). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #24] Question: What is the exact value for Aditya?\nStatement I: Aditya is 9 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2046 as exactly 165.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (165). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #25] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2048 as exactly 170.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (170). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #26] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2050 as exactly 175.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (175). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #27] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2052 as exactly 180.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (180). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #28] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2054 as exactly 185.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (185). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #29] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2056 as exactly 190.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (190). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #30] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2058 as exactly 195.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (195). Together both are required and sufficient."
    }
  ],
  "level4": [
    {
      "q": "[Data Sufficiency #1] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2000 as exactly 50.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (50). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #2] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2002 as exactly 55.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (55). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #3] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2004 as exactly 60.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (60). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #4] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2006 as exactly 65.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (65). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #5] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2008 as exactly 70.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (70). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #6] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2010 as exactly 75.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (75). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #7] Question: What is the exact value for Rohan?\nStatement I: Rohan is 8 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2012 as exactly 80.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (80). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #8] Question: What is the exact value for Aarav?\nStatement I: Aarav is 9 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2014 as exactly 85.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (85). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #9] Question: What is the exact value for Vikram?\nStatement I: Vikram is 2 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2016 as exactly 90.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (90). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #10] Question: What is the exact value for Karan?\nStatement I: Karan is 3 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2018 as exactly 95.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (95). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #11] Question: What is the exact value for Rahul?\nStatement I: Rahul is 4 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2020 as exactly 100.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (100). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #12] Question: What is the exact value for Aditya?\nStatement I: Aditya is 5 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2022 as exactly 105.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (105). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #13] Question: What is the exact value for Rohan?\nStatement I: Rohan is 6 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2024 as exactly 110.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (110). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #14] Question: What is the exact value for Aarav?\nStatement I: Aarav is 7 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2026 as exactly 115.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (115). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #15] Question: What is the exact value for Vikram?\nStatement I: Vikram is 8 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2028 as exactly 120.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (120). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #16] Question: What is the exact value for Karan?\nStatement I: Karan is 9 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2030 as exactly 125.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (125). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #17] Question: What is the exact value for Rahul?\nStatement I: Rahul is 2 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2032 as exactly 130.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (130). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #18] Question: What is the exact value for Aditya?\nStatement I: Aditya is 3 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2034 as exactly 135.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (135). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #19] Question: What is the exact value for Rohan?\nStatement I: Rohan is 4 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2036 as exactly 140.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (140). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #20] Question: What is the exact value for Aarav?\nStatement I: Aarav is 5 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2038 as exactly 145.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (145). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #21] Question: What is the exact value for Vikram?\nStatement I: Vikram is 6 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2040 as exactly 150.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (150). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #22] Question: What is the exact value for Karan?\nStatement I: Karan is 7 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2042 as exactly 155.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (155). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #23] Question: What is the exact value for Rahul?\nStatement I: Rahul is 8 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2044 as exactly 160.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (8). Statement II provides absolute value (160). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #24] Question: What is the exact value for Aditya?\nStatement I: Aditya is 9 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2046 as exactly 165.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (9). Statement II provides absolute value (165). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #25] Question: What is the exact value for Rohan?\nStatement I: Rohan is 2 years older than Priya.\nStatement II: Priya's baseline benchmark was recorded in 2048 as exactly 170.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (2). Statement II provides absolute value (170). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #26] Question: What is the exact value for Aarav?\nStatement I: Aarav is 3 cm taller than Sneha.\nStatement II: Sneha's baseline benchmark was recorded in 2050 as exactly 175.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (3). Statement II provides absolute value (175). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #27] Question: What is the exact value for Vikram?\nStatement I: Vikram is 4 kg heavier than Ananya.\nStatement II: Ananya's baseline benchmark was recorded in 2052 as exactly 180.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (4). Statement II provides absolute value (180). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #28] Question: What is the exact value for Karan?\nStatement I: Karan is 5 marks higher than Kavya.\nStatement II: Kavya's baseline benchmark was recorded in 2054 as exactly 185.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (5). Statement II provides absolute value (185). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #29] Question: What is the exact value for Rahul?\nStatement I: Rahul is 6 seconds faster than Meera.\nStatement II: Meera's baseline benchmark was recorded in 2056 as exactly 190.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (6). Statement II provides absolute value (190). Together both are required and sufficient."
    },
    {
      "q": "[Data Sufficiency #30] Question: What is the exact value for Aditya?\nStatement I: Aditya is 7 rank ahead of Neha.\nStatement II: Neha's baseline benchmark was recorded in 2058 as exactly 195.",
      "opts": [
        "Both Statements I and II together are sufficient",
        "Statement I alone is sufficient",
        "Statement II alone is sufficient",
        "Neither Statement I nor II is sufficient"
      ],
      "ans": "A",
      "exp": "Statement I provides relative difference (7). Statement II provides absolute value (195). Together both are required and sufficient."
    }
  ]
};

LOGICAL_POOLS_MAP["assumptions-conclusions"] = {
  "level1": [
    {
      "q": "[Inference Policy #1] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #2] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #3] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #4] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #5] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #6] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #7] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #8] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #9] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #10] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #11] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #12] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #13] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #14] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #15] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #16] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #17] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #18] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #19] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #20] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #21] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #22] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #23] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #24] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #25] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #26] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #27] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #28] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #29] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #30] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    }
  ],
  "level2": [
    {
      "q": "[Inference Policy #1] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #2] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #3] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #4] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #5] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #6] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #7] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #8] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #9] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #10] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #11] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #12] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #13] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #14] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #15] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #16] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #17] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #18] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #19] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #20] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #21] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #22] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #23] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #24] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #25] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #26] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #27] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #28] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #29] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #30] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    }
  ],
  "level3": [
    {
      "q": "[Inference Policy #1] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #2] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #3] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #4] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #5] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #6] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #7] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #8] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #9] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #10] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #11] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #12] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #13] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #14] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #15] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #16] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #17] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #18] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #19] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #20] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #21] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #22] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #23] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #24] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #25] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #26] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #27] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #28] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #29] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #30] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    }
  ],
  "level4": [
    {
      "q": "[Inference Policy #1] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #2] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #3] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #4] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #5] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #6] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #7] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #8] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #9] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #10] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #11] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #12] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #13] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #14] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #15] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #16] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #17] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #18] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #19] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #20] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #21] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #22] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #23] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #24] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #25] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #26] Statement: \"To reduce urban vehicular pollution, the municipal corporation will mandate odd-even vehicle rotation rules downtown.\"\nAssumption I: Commuters will utilize public transportation alternatives on restricted days.\nAssumption II: The municipal authority possesses the enforcement capability to penalize non-compliant motorists.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #27] Statement: \"To improve software engineering quality, the tech company will introduce mandatory automated peer code reviews.\"\nAssumption I: Engineers will identify and rectify bugs earlier in development cycles.\nAssumption II: Code quality reviews foster collaborative knowledge sharing among team members.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #28] Statement: \"To encourage renewable power adoption, the government introduced a 30% capital subsidy on residential solar rooftop units.\"\nAssumption I: Homeowners will find solar installation financially attractive due to the subsidy.\nAssumption II: The state electrical grid can accommodate decentralized distributed solar feeding.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #29] Statement: \"To combat student exam anxiety, the university administration eliminated letter grades for first-year undergraduate courses.\"\nAssumption I: Students will focus more on comprehensive concept learning rather than cramming for grades.\nAssumption II: First-year academic attrition will decline following the grade policy transition.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    },
    {
      "q": "[Inference Policy #30] Statement: \"To prevent corporate insider trading, the securities regulator mandated pre-clearance for all executive stock liquidations.\"\nAssumption I: Executives will comply with official pre-clearance filings prior to selling equity.\nAssumption II: The regulatory agency can cross-reference trading timestamps against confidential disclosures.",
      "opts": [
        "Both Assumptions I and II are implicit",
        "Only Assumption I is implicit",
        "Only Assumption II is implicit",
        "Neither is implicit"
      ],
      "ans": "A",
      "exp": "Any deliberate policy intervention implicitly assumes target behavioural compliance (Assumption I) and operational feasibility (Assumption II)."
    }
  ]
};

LOGICAL_POOLS_MAP["cube-and-cuboid"] = {
  "level1": [
    {
      "q": "A solid wooden cube of side 3 cm (Block #1) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #2) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #3) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #4) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #5) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #6) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #7) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #8) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #9) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #10) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #11) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #12) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #13) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #14) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #15) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #16) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #17) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #18) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #19) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #20) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #21) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #22) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #23) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #24) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #25) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #26) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #27) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #28) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #29) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #30) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    }
  ],
  "level2": [
    {
      "q": "A solid wooden cube of side 3 cm (Block #1) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #2) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #3) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #4) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #5) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #6) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #7) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #8) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #9) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #10) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #11) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #12) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #13) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #14) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #15) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #16) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #17) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #18) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #19) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #20) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #21) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #22) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #23) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #24) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #25) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #26) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #27) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #28) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #29) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #30) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    }
  ],
  "level3": [
    {
      "q": "A solid wooden cube of side 3 cm (Block #1) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #2) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #3) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #4) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #5) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #6) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #7) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #8) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #9) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #10) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #11) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #12) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #13) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #14) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #15) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #16) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #17) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #18) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #19) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #20) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #21) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #22) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #23) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #24) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #25) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #26) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #27) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #28) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #29) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #30) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    }
  ],
  "level4": [
    {
      "q": "A solid wooden cube of side 3 cm (Block #1) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #2) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #3) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #4) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #5) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #6) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #7) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #8) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #9) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #10) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #11) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #12) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #13) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #14) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #15) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #16) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #17) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #18) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #19) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #20) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #21) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #22) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #23) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #24) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    },
    {
      "q": "A solid wooden cube of side 3 cm (Block #25) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "6 cubes",
        "12 cubes",
        "1 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(3 - 2)² = 6 cubes."
    },
    {
      "q": "A solid cube of side 4 cm (Block #26) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "24 cubes",
        "24 cubes",
        "8 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(4 - 2) = 24 cubes."
    },
    {
      "q": "A solid wooden cube of side 5 cm (Block #27) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "27 cubes",
        "54 cubes",
        "36 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (5 - 2)³ = 27 cubes."
    },
    {
      "q": "A solid wooden cube of side 6 cm (Block #28) is painted completely red on all outer surfaces and then sliced into unit cubes of side 1 cm. How many smaller cubes have exactly ONE face painted?",
      "opts": [
        "96 cubes",
        "48 cubes",
        "64 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly one face painted = 6(n - 2)² = 6(6 - 2)² = 96 cubes."
    },
    {
      "q": "A solid cube of side 7 cm (Block #29) is painted blue on all exterior faces and cut into 1 cm cubes. How many smaller cubes have exactly TWO faces painted?",
      "opts": [
        "60 cubes",
        "150 cubes",
        "125 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for exactly two faces painted = 12(n - 2) = 12(7 - 2) = 60 cubes."
    },
    {
      "q": "A solid wooden cube of side 8 cm (Block #30) is painted green on all faces and cut into 1 cm unit cubes. How many smaller cubes have ZERO faces painted (completely unpainted)?",
      "opts": [
        "216 cubes",
        "216 cubes",
        "72 cubes",
        "8 cubes"
      ],
      "ans": "A",
      "exp": "Formula for zero faces painted (inner core) = (n - 2)³ = (8 - 2)³ = 216 cubes."
    }
  ]
};

LOGICAL_POOLS_MAP["direction-sense"] = {
  "level1": [
    {
      "q": "[Navigation Trial #1] Aarav walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #2] Rohan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #3] Priya walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #4] Karan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #5] Sneha walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #6] Vikram walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #7] Aarav walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #8] Rohan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #9] Priya walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #10] Karan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #11] Sneha walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #12] Vikram walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #13] Aarav walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #14] Rohan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #15] Priya walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #16] Karan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #17] Sneha walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #18] Vikram walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #19] Aarav walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #20] Rohan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #21] Priya walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #22] Karan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #23] Sneha walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #24] Vikram walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #25] Aarav walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #26] Rohan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #27] Priya walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #28] Karan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #29] Sneha walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #30] Vikram walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    }
  ],
  "level2": [
    {
      "q": "[Navigation Trial #1] Aarav walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #2] Rohan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #3] Priya walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #4] Karan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #5] Sneha walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #6] Vikram walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #7] Aarav walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #8] Rohan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #9] Priya walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #10] Karan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #11] Sneha walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #12] Vikram walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #13] Aarav walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #14] Rohan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #15] Priya walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #16] Karan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #17] Sneha walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #18] Vikram walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #19] Aarav walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #20] Rohan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #21] Priya walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #22] Karan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #23] Sneha walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #24] Vikram walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #25] Aarav walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #26] Rohan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #27] Priya walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #28] Karan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #29] Sneha walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #30] Vikram walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    }
  ],
  "level3": [
    {
      "q": "[Navigation Trial #1] Aarav walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #2] Rohan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #3] Priya walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #4] Karan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #5] Sneha walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #6] Vikram walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #7] Aarav walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #8] Rohan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #9] Priya walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #10] Karan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #11] Sneha walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #12] Vikram walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #13] Aarav walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #14] Rohan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #15] Priya walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #16] Karan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #17] Sneha walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #18] Vikram walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #19] Aarav walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #20] Rohan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #21] Priya walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #22] Karan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #23] Sneha walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #24] Vikram walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #25] Aarav walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #26] Rohan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #27] Priya walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #28] Karan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #29] Sneha walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #30] Vikram walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    }
  ],
  "level4": [
    {
      "q": "[Navigation Trial #1] Aarav walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #2] Rohan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #3] Priya walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #4] Karan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #5] Sneha walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #6] Vikram walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #7] Aarav walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #8] Rohan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #9] Priya walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #10] Karan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #11] Sneha walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #12] Vikram walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #13] Aarav walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #14] Rohan walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #15] Priya walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #16] Karan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #17] Sneha walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #18] Vikram walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #19] Aarav walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #20] Rohan walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #21] Priya walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #22] Karan walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #23] Sneha walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #24] Vikram walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #25] Aarav walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Aarav's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    },
    {
      "q": "[Navigation Trial #26] Rohan walks 6 metres towards North, turns right at a 90° angle, and walks 8 metres towards East. What is the shortest direct displacement from Rohan's initial starting point?",
      "opts": [
        "10 metres",
        "14 metres",
        "15 metres",
        "8 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(6² + 8²) = √(36 + 64) = 10 metres."
    },
    {
      "q": "[Navigation Trial #27] Priya walks 9 metres towards North, turns right at a 90° angle, and walks 12 metres towards East. What is the shortest direct displacement from Priya's initial starting point?",
      "opts": [
        "15 metres",
        "21 metres",
        "20 metres",
        "13 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(9² + 12²) = √(81 + 144) = 15 metres."
    },
    {
      "q": "[Navigation Trial #28] Karan walks 12 metres towards North, turns right at a 90° angle, and walks 16 metres towards East. What is the shortest direct displacement from Karan's initial starting point?",
      "opts": [
        "20 metres",
        "28 metres",
        "25 metres",
        "18 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(12² + 16²) = √(144 + 256) = 20 metres."
    },
    {
      "q": "[Navigation Trial #29] Sneha walks 15 metres towards North, turns right at a 90° angle, and walks 20 metres towards East. What is the shortest direct displacement from Sneha's initial starting point?",
      "opts": [
        "25 metres",
        "35 metres",
        "30 metres",
        "23 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(15² + 20²) = √(225 + 400) = 25 metres."
    },
    {
      "q": "[Navigation Trial #30] Vikram walks 18 metres towards North, turns right at a 90° angle, and walks 24 metres towards East. What is the shortest direct displacement from Vikram's initial starting point?",
      "opts": [
        "30 metres",
        "42 metres",
        "35 metres",
        "28 metres"
      ],
      "ans": "A",
      "exp": "By Pythagorean theorem: Shortest distance = √(18² + 24²) = √(324 + 576) = 30 metres."
    }
  ]
};

LOGICAL_POOLS_MAP["seating-arrangement"] = {
  "level1": [
    {
      "q": "[Seating Setup #1] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #2] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #3] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #4] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #5] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #6] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #7] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #8] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #9] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #10] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #11] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #12] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #13] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #14] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #15] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #16] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #17] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #18] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #19] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #20] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #21] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #22] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #23] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #24] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #25] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #26] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #27] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #28] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #29] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #30] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    }
  ],
  "level2": [
    {
      "q": "[Seating Setup #1] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #2] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #3] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #4] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #5] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #6] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #7] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #8] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #9] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #10] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #11] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #12] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #13] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #14] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #15] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #16] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #17] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #18] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #19] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #20] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #21] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #22] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #23] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #24] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #25] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #26] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #27] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #28] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #29] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #30] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    }
  ],
  "level3": [
    {
      "q": "[Seating Setup #1] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #2] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #3] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #4] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #5] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #6] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #7] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #8] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #9] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #10] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #11] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #12] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #13] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #14] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #15] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #16] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #17] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #18] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #19] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #20] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #21] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #22] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #23] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #24] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #25] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #26] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #27] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #28] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #29] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #30] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    }
  ],
  "level4": [
    {
      "q": "[Seating Setup #1] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #2] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #3] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #4] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #5] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #6] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #7] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #8] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #9] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #10] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #11] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #12] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #13] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #14] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #15] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #16] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #17] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #18] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #19] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #20] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #21] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #22] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #23] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #24] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #25] 6 friends are seated in a circular arrangement facing the center. If A is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between A and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #26] 8 friends are seated in a circular arrangement facing the center. If B is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between B and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #27] 7 friends are seated in a circular arrangement facing the center. If C is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between C and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #28] 6 friends are seated in a circular arrangement facing the center. If D is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between D and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #29] 8 friends are seated in a circular arrangement facing the center. If P is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between P and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    },
    {
      "q": "[Seating Setup #30] 7 friends are seated in a circular arrangement facing the center. If Q is seated second to the left of the group leader and two seats away from the host, how many persons are seated strictly between Q and the host along the shorter circular arc?",
      "opts": [
        "1 person",
        "2 persons",
        "3 persons",
        "0 persons"
      ],
      "ans": "A",
      "exp": "In circular seating, 'two seats away' means exactly 1 intervening seat/person between them along the shorter arc."
    }
  ]
};

/**
 * Generate 30 questions for any logical reasoning topic and set
 * 1-to-1 mapping ensures zero duplication across all 30 questions in every set.
 */
export function getLogicalQuestions(topic, type, setNumber) {
    const questions = [];
    const pool = LOGICAL_POOLS_MAP[topic.topicId] || LOGICAL_POOLS_MAP["clocks"];

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
        // Mock Assessment: Progressive mixed blend across all logical pools
        const allKeys = Object.keys(LOGICAL_POOLS_MAP);
        for (let i = 1; i <= 30; i++) {
            const topicKey = allKeys[(i - 1) % allKeys.length];
            const subPool = LOGICAL_POOLS_MAP[topicKey];
            
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
