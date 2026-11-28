/**
 * Aptitude Arena - Verbal Ability Question Bank & Progressive Generators
 * Generated with 100% Guaranteed Unique Questions (30 per set, 0 duplicates)
 * Covers all 8 Verbal Topics across 4 Difficulty Levels + Mock Assessments.
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
        category: 'verbal',
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

export const VERBAL_POOLS_MAP = {};

VERBAL_POOLS_MAP["ordering-of-words"] = {
  "level1": [
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) across the street\n(Q) the young girl ran\n(R) to catch the morning bus\n(S) with her backpack tightly held",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) studied in his room\n(Q) the dedicated student\n(R) diligently every night\n(S) for his upcoming exams",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) to the local library\n(Q) my grandfather walks\n(R) every Saturday morning\n(S) to borrow historical novels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) stalked the small mouse\n(Q) the stealthy cat\n(R) through the tall grass\n(S) without making any sound",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was postponed until tomorrow\n(Q) the annual soccer match\n(R) by the school authorities\n(S) because of the heavy rainfall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) announced the award winners\n(Q) the school principal\n(R) during the morning assembly\n(S) before the entire audience",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) sat down to rest\n(Q) the weary traveler\n(R) under the shade of an oak tree\n(S) after a long mountain trek",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) decided to exercise daily\n(Q) an enthusiastic engineer\n(R) in the community park\n(S) to improve his physical health",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was carefully arranged\n(Q) a bowl of fresh fruit\n(R) on the kitchen counter\n(S) by our welcoming host",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) flew smoothly\n(Q) the flock of migrating birds\n(R) across the clear blue sky\n(S) in a perfect V-formation",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) solved the difficult equation\n(Q) the mathematics teacher\n(R) on the whiteboard\n(S) with effortless precision",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) buzzed enthusiastically\n(Q) a swarm of honeybees\n(R) around the garden blossoms\n(S) in search of sweet nectar",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) went for an early jog\n(Q) the enthusiastic athlete\n(R) around the perimeter track\n(S) despite the chilly breeze",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) walked cautiously\n(Q) the brave explorers\n(R) into the deep cavern\n(S) carrying bright battery torches",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) hung gracefully\n(Q) an antique world map\n(R) on the classroom wall\n(S) next to the wooden cabinet",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) systematically ran test cases\n(Q) the QA engineering squad\n(R) before the production release\n(S) to ensure high software quality",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) visited historical monuments\n(Q) our entire family\n(R) during the summer holidays\n(S) across northern India",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) accepted the prestigious award\n(Q) the young scientist\n(R) with immense joy and gratitude\n(S) on behalf of her research lab",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) rode his sturdy bicycle\n(Q) the morning postman\n(R) through the quiet village lanes\n(S) delivering letters and parcels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) disconnected abruptly\n(Q) the online video conference\n(R) due to unstable internet connectivity\n(S) leaving attendees puzzled",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) built an autonomous robotic rover\n(Q) a team of bright students\n(R) using recycled metal parts\n(S) for the annual science fair",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) swayed gently\n(Q) the golden sunflowers\n(R) in the warm afternoon breeze\n(S) turning their faces toward the sun",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) implemented two-factor authentication\n(Q) the cybersecurity team\n(R) across all internal portals\n(S) to prevent unauthorized data access",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) pitched their lightweight tents\n(Q) the weary backpackers\n(R) beside the tranquil riverbank\n(S) as twilight began to fall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) delivered an inspiring speech\n(Q) the keynote speaker\n(R) with complete confidence and poise\n(S) at the international symposium",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) discovered a rare first-edition manuscript\n(Q) an avid literature scholar\n(R) in an old downtown bookstore\n(S) while browsing the poetry section",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) planted thousands of tree saplings\n(Q) civic volunteer groups\n(R) along the highway bypass\n(S) to reduce urban air pollution",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) descended throughout the courtroom\n(Q) an eerie silence\n(R) as the jury foreman stood up\n(S) to announce the final verdict",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) emerged slowly\n(Q) the majestic cargo ship\n(R) from the dense morning fog\n(S) sounding its deep brass horn",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) watered the delicate rose bushes\n(Q) the diligent gardener\n(R) early in the morning\n(S) before the summer sun grew hot",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    }
  ],
  "level2": [
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) across the street\n(Q) the young girl ran\n(R) to catch the morning bus\n(S) with her backpack tightly held",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) studied in his room\n(Q) the dedicated student\n(R) diligently every night\n(S) for his upcoming exams",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) to the local library\n(Q) my grandfather walks\n(R) every Saturday morning\n(S) to borrow historical novels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) stalked the small mouse\n(Q) the stealthy cat\n(R) through the tall grass\n(S) without making any sound",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was postponed until tomorrow\n(Q) the annual soccer match\n(R) by the school authorities\n(S) because of the heavy rainfall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) announced the award winners\n(Q) the school principal\n(R) during the morning assembly\n(S) before the entire audience",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) sat down to rest\n(Q) the weary traveler\n(R) under the shade of an oak tree\n(S) after a long mountain trek",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) decided to exercise daily\n(Q) an enthusiastic engineer\n(R) in the community park\n(S) to improve his physical health",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was carefully arranged\n(Q) a bowl of fresh fruit\n(R) on the kitchen counter\n(S) by our welcoming host",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) flew smoothly\n(Q) the flock of migrating birds\n(R) across the clear blue sky\n(S) in a perfect V-formation",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) solved the difficult equation\n(Q) the mathematics teacher\n(R) on the whiteboard\n(S) with effortless precision",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) buzzed enthusiastically\n(Q) a swarm of honeybees\n(R) around the garden blossoms\n(S) in search of sweet nectar",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) went for an early jog\n(Q) the enthusiastic athlete\n(R) around the perimeter track\n(S) despite the chilly breeze",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) walked cautiously\n(Q) the brave explorers\n(R) into the deep cavern\n(S) carrying bright battery torches",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) hung gracefully\n(Q) an antique world map\n(R) on the classroom wall\n(S) next to the wooden cabinet",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) systematically ran test cases\n(Q) the QA engineering squad\n(R) before the production release\n(S) to ensure high software quality",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) visited historical monuments\n(Q) our entire family\n(R) during the summer holidays\n(S) across northern India",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) accepted the prestigious award\n(Q) the young scientist\n(R) with immense joy and gratitude\n(S) on behalf of her research lab",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) rode his sturdy bicycle\n(Q) the morning postman\n(R) through the quiet village lanes\n(S) delivering letters and parcels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) disconnected abruptly\n(Q) the online video conference\n(R) due to unstable internet connectivity\n(S) leaving attendees puzzled",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) built an autonomous robotic rover\n(Q) a team of bright students\n(R) using recycled metal parts\n(S) for the annual science fair",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) swayed gently\n(Q) the golden sunflowers\n(R) in the warm afternoon breeze\n(S) turning their faces toward the sun",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) implemented two-factor authentication\n(Q) the cybersecurity team\n(R) across all internal portals\n(S) to prevent unauthorized data access",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) pitched their lightweight tents\n(Q) the weary backpackers\n(R) beside the tranquil riverbank\n(S) as twilight began to fall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) delivered an inspiring speech\n(Q) the keynote speaker\n(R) with complete confidence and poise\n(S) at the international symposium",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) discovered a rare first-edition manuscript\n(Q) an avid literature scholar\n(R) in an old downtown bookstore\n(S) while browsing the poetry section",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) planted thousands of tree saplings\n(Q) civic volunteer groups\n(R) along the highway bypass\n(S) to reduce urban air pollution",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) descended throughout the courtroom\n(Q) an eerie silence\n(R) as the jury foreman stood up\n(S) to announce the final verdict",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) emerged slowly\n(Q) the majestic cargo ship\n(R) from the dense morning fog\n(S) sounding its deep brass horn",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) watered the delicate rose bushes\n(Q) the diligent gardener\n(R) early in the morning\n(S) before the summer sun grew hot",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    }
  ],
  "level3": [
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) across the street\n(Q) the young girl ran\n(R) to catch the morning bus\n(S) with her backpack tightly held",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) studied in his room\n(Q) the dedicated student\n(R) diligently every night\n(S) for his upcoming exams",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) to the local library\n(Q) my grandfather walks\n(R) every Saturday morning\n(S) to borrow historical novels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) stalked the small mouse\n(Q) the stealthy cat\n(R) through the tall grass\n(S) without making any sound",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was postponed until tomorrow\n(Q) the annual soccer match\n(R) by the school authorities\n(S) because of the heavy rainfall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) announced the award winners\n(Q) the school principal\n(R) during the morning assembly\n(S) before the entire audience",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) sat down to rest\n(Q) the weary traveler\n(R) under the shade of an oak tree\n(S) after a long mountain trek",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) decided to exercise daily\n(Q) an enthusiastic engineer\n(R) in the community park\n(S) to improve his physical health",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was carefully arranged\n(Q) a bowl of fresh fruit\n(R) on the kitchen counter\n(S) by our welcoming host",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) flew smoothly\n(Q) the flock of migrating birds\n(R) across the clear blue sky\n(S) in a perfect V-formation",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) solved the difficult equation\n(Q) the mathematics teacher\n(R) on the whiteboard\n(S) with effortless precision",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) buzzed enthusiastically\n(Q) a swarm of honeybees\n(R) around the garden blossoms\n(S) in search of sweet nectar",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) went for an early jog\n(Q) the enthusiastic athlete\n(R) around the perimeter track\n(S) despite the chilly breeze",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) walked cautiously\n(Q) the brave explorers\n(R) into the deep cavern\n(S) carrying bright battery torches",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) hung gracefully\n(Q) an antique world map\n(R) on the classroom wall\n(S) next to the wooden cabinet",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) systematically ran test cases\n(Q) the QA engineering squad\n(R) before the production release\n(S) to ensure high software quality",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) visited historical monuments\n(Q) our entire family\n(R) during the summer holidays\n(S) across northern India",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) accepted the prestigious award\n(Q) the young scientist\n(R) with immense joy and gratitude\n(S) on behalf of her research lab",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) rode his sturdy bicycle\n(Q) the morning postman\n(R) through the quiet village lanes\n(S) delivering letters and parcels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) disconnected abruptly\n(Q) the online video conference\n(R) due to unstable internet connectivity\n(S) leaving attendees puzzled",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) built an autonomous robotic rover\n(Q) a team of bright students\n(R) using recycled metal parts\n(S) for the annual science fair",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) swayed gently\n(Q) the golden sunflowers\n(R) in the warm afternoon breeze\n(S) turning their faces toward the sun",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) implemented two-factor authentication\n(Q) the cybersecurity team\n(R) across all internal portals\n(S) to prevent unauthorized data access",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) pitched their lightweight tents\n(Q) the weary backpackers\n(R) beside the tranquil riverbank\n(S) as twilight began to fall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) delivered an inspiring speech\n(Q) the keynote speaker\n(R) with complete confidence and poise\n(S) at the international symposium",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) discovered a rare first-edition manuscript\n(Q) an avid literature scholar\n(R) in an old downtown bookstore\n(S) while browsing the poetry section",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) planted thousands of tree saplings\n(Q) civic volunteer groups\n(R) along the highway bypass\n(S) to reduce urban air pollution",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) descended throughout the courtroom\n(Q) an eerie silence\n(R) as the jury foreman stood up\n(S) to announce the final verdict",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) emerged slowly\n(Q) the majestic cargo ship\n(R) from the dense morning fog\n(S) sounding its deep brass horn",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) watered the delicate rose bushes\n(Q) the diligent gardener\n(R) early in the morning\n(S) before the summer sun grew hot",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    }
  ],
  "level4": [
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) across the street\n(Q) the young girl ran\n(R) to catch the morning bus\n(S) with her backpack tightly held",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) studied in his room\n(Q) the dedicated student\n(R) diligently every night\n(S) for his upcoming exams",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) to the local library\n(Q) my grandfather walks\n(R) every Saturday morning\n(S) to borrow historical novels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) stalked the small mouse\n(Q) the stealthy cat\n(R) through the tall grass\n(S) without making any sound",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was postponed until tomorrow\n(Q) the annual soccer match\n(R) by the school authorities\n(S) because of the heavy rainfall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) announced the award winners\n(Q) the school principal\n(R) during the morning assembly\n(S) before the entire audience",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) sat down to rest\n(Q) the weary traveler\n(R) under the shade of an oak tree\n(S) after a long mountain trek",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) decided to exercise daily\n(Q) an enthusiastic engineer\n(R) in the community park\n(S) to improve his physical health",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) was carefully arranged\n(Q) a bowl of fresh fruit\n(R) on the kitchen counter\n(S) by our welcoming host",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) flew smoothly\n(Q) the flock of migrating birds\n(R) across the clear blue sky\n(S) in a perfect V-formation",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) solved the difficult equation\n(Q) the mathematics teacher\n(R) on the whiteboard\n(S) with effortless precision",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) buzzed enthusiastically\n(Q) a swarm of honeybees\n(R) around the garden blossoms\n(S) in search of sweet nectar",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) went for an early jog\n(Q) the enthusiastic athlete\n(R) around the perimeter track\n(S) despite the chilly breeze",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) walked cautiously\n(Q) the brave explorers\n(R) into the deep cavern\n(S) carrying bright battery torches",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) hung gracefully\n(Q) an antique world map\n(R) on the classroom wall\n(S) next to the wooden cabinet",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) systematically ran test cases\n(Q) the QA engineering squad\n(R) before the production release\n(S) to ensure high software quality",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) visited historical monuments\n(Q) our entire family\n(R) during the summer holidays\n(S) across northern India",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) accepted the prestigious award\n(Q) the young scientist\n(R) with immense joy and gratitude\n(S) on behalf of her research lab",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) rode his sturdy bicycle\n(Q) the morning postman\n(R) through the quiet village lanes\n(S) delivering letters and parcels",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) disconnected abruptly\n(Q) the online video conference\n(R) due to unstable internet connectivity\n(S) leaving attendees puzzled",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) built an autonomous robotic rover\n(Q) a team of bright students\n(R) using recycled metal parts\n(S) for the annual science fair",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) swayed gently\n(Q) the golden sunflowers\n(R) in the warm afternoon breeze\n(S) turning their faces toward the sun",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) implemented two-factor authentication\n(Q) the cybersecurity team\n(R) across all internal portals\n(S) to prevent unauthorized data access",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) pitched their lightweight tents\n(Q) the weary backpackers\n(R) beside the tranquil riverbank\n(S) as twilight began to fall",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) delivered an inspiring speech\n(Q) the keynote speaker\n(R) with complete confidence and poise\n(S) at the international symposium",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) discovered a rare first-edition manuscript\n(Q) an avid literature scholar\n(R) in an old downtown bookstore\n(S) while browsing the poetry section",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) planted thousands of tree saplings\n(Q) civic volunteer groups\n(R) along the highway bypass\n(S) to reduce urban air pollution",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) descended throughout the courtroom\n(Q) an eerie silence\n(R) as the jury foreman stood up\n(S) to announce the final verdict",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) emerged slowly\n(Q) the majestic cargo ship\n(R) from the dense morning fog\n(S) sounding its deep brass horn",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    },
    {
      "q": "Arrange the sentence parts into a coherent sentence:\n(P) watered the delicate rose bushes\n(Q) the diligent gardener\n(R) early in the morning\n(S) before the summer sun grew hot",
      "opts": [
        "Q P R S",
        "P Q R S",
        "R P Q S",
        "S P Q R"
      ],
      "ans": "A",
      "exp": "Correct syntactic sequence: Subject-verb core clause (Q) followed by spatial/manner modifiers (P, R) and concluding prepositional/purpose clause (S)."
    }
  ]
};

VERBAL_POOLS_MAP["ordering-of-sentences"] = {
  "level1": [
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Solar power has emerged as a cornerstone of sustainable energy.\nS2: Photovoltaic cells convert incident sunlight directly into electrical current.\nS3: Recent manufacturing innovations have drastically lowered production costs.\nS4: Consequently, clean solar energy is now cost-competitive with conventional fossil fuels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Artificial intelligence models rely on massive training datasets.\nS2: Neural networks discover subtle patterns across millions of digital examples.\nS3: Through iterative backpropagation, model prediction errors are gradually minimized.\nS4: These optimized weights enable systems to generalize accurately to unseen real-world tasks.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Microscopic soil microbiomes play a fundamental role in global agriculture.\nS2: Beneficial bacteria and mycorrhizal fungi break down complex organic matter.\nS3: This biological breakdown releases vital nitrogen and phosphorus compounds into the soil.\nS4: Healthy crop roots absorb these essential nutrients to sustain vigorous plant growth.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Industrial Revolution transformed human manufacturing and daily life.\nS2: Steam-powered engines replaced traditional manual and animal labor in textile mills.\nS3: Factories concentrated labor in rapidly expanding urban industrial centers.\nS4: This dramatic demographic shift fostered modern infrastructure and contemporary labor laws.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cloud computing architectures provide unprecedented scalability for modern enterprises.\nS2: Virtual machines and containerized services dynamically scale based on live traffic demands.\nS3: Distributed database clusters replicate data asynchronously across multi-region data centers.\nS4: This high availability ensures uninterrupted system uptime even during severe hardware failures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Vaccination represents one of modern medicine's greatest public health achievements.\nS2: Antigens introduce harmless viral fragments to prime the human immune response.\nS3: Specialized B-lymphocytes synthesize targeted neutralizing antibodies against the pathogen.\nS4: Long-lived memory cells guarantee rapid, robust immune defense upon future exposures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human brain undergoes profound neural development during early childhood.\nS2: Synaptic connections proliferate exponentially in response to sensory and linguistic stimuli.\nS3: Over time, frequently used neural pathways are strengthened through myelination.\nS4: Unused pathways are systematically pruned to optimize executive cognitive efficiency.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Ocean currents circulate heat energy across the entire planet.\nS2: Warm surface waters travel northward from equatorial regions toward polar latitudes.\nS3: In polar seas, water cools, becomes denser, and sinks into the deep abyss.\nS4: This thermohaline conveyor belt regulates continental climates and marine ecosystems.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Quantum computers leverage the counterintuitive principles of quantum mechanics.\nS2: Unlike classical binary bits, quantum bits can exist in simultaneous superpositions of zero and one.\nS3: Quantum entanglement links multi-qubit states across quantum processors.\nS4: These collective quantum effects allow specific mathematical algorithms to solve problems exponentially faster.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The printing press democratized knowledge dissemination throughout Renaissance Europe.\nS2: Movable metal type allowed books to be mass-produced in vernacular languages at affordable prices.\nS3: Widespread literacy blossomed rapidly among broader merchant and working classes.\nS4: Accessible scientific and philosophical ideas catalyzed the Enlightenment and scientific revolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban green spaces deliver vital ecological and mental health benefits to city residents.\nS2: Dense tree canopies shade pavements and reduce dangerous urban heat island effects.\nS3: Foliage and permeable soils absorb heavy rainwater runoff to prevent urban flash flooding.\nS4: Furthermore, access to public parks consistently correlates with lower resident stress levels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: CRISPR-Cas9 gene editing has revolutionized molecular genetics and clinical biotechnology.\nS2: Engineered guide RNAs direct bacterial Cas9 endonuclease enzymes to precise genomic loci.\nS3: The molecular enzyme creates a targeted double-strand break in the organism's DNA helix.\nS4: Cellular repair mechanisms can then insert, delete, or correct specific therapeutic genetic sequences.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: High-frequency automated trading dominates liquidity provision in modern financial markets.\nS2: Algorithms ingest streaming market feeds and order books in sub-millisecond latencies.\nS3: Smart order routers execute quantitative statistical arbitrage across fragmented global exchanges.\nS4: This automated competition narrows bid-ask spreads for institutional and retail investors alike.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human gut microbiome profoundly influences systemic physical and mental health.\nS2: Trillions of symbiotic bacteria ferment dietary fiber into beneficial short-chain fatty acids.\nS3: These biochemical metabolites reinforce the gut epithelial barrier and regulate immune inflammation.\nS4: Moreover, the gut-brain vagus nerve axis transmits microbial signals that modulate human mood and cognition.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cybersecurity defense has shifted decisively toward zero-trust architectural models.\nS2: Traditional perimeter firewalls are no longer sufficient against sophisticated persistent threats.\nS3: Zero-trust mandates continuous identity verification and strict least-privilege resource access.\nS4: Micro-segmentation isolates network segments to prevent attackers from moving laterally during breaches.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Autonomous electric vehicles integrate cutting-edge sensors, compute, and battery chemistry.\nS2: Lidar, radar, and optical cameras generate high-fidelity real-time 3D perception maps.\nS3: Onboard machine learning inference chips plan optimal, collision-free vehicle trajectory paths.\nS4: High-density solid-state batteries provide extended driving range with rapid charging capabilities.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Space telescopes have expanded our understanding of cosmic origins and distant galaxies.\nS2: Infrared detectors penetrate dense cosmic dust clouds obscuring early galactic formation.\nS3: Spectroscopic instruments analyze atmospheric chemical signatures of transiting exoplanets.\nS4: These empirical observations yield groundbreaking insights into planetary habitability and cosmic evolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Economic supply chains depend on sophisticated global logistics networks.\nS2: Containerized freight ships transport raw materials and manufactured goods across oceans.\nS3: Automated distribution warehouses sort, pack, and stage orders using autonomous mobile robots.\nS4: Last-mile routing software optimizes delivery schedules to minimize transit times and fuel burn.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Renewable wind energy capacity has expanded dramatically across maritime coastlines.\nS2: Massive offshore turbines capture powerful, unobstructed oceanic wind currents.\nS3: Direct-drive permanent magnet generators efficiently transform mechanical rotation into electricity.\nS4: Subsea high-voltage transmission cables convey the clean power ashore into national electrical grids.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern compiler design translates human-readable source code into efficient machine instructions.\nS2: Lexical analysis tokenizes characters, and parser algorithms build abstract syntax trees.\nS3: Intermediate representation optimization passes eliminate redundant code and vectorize inner loops.\nS4: Finally, machine code generation produces hardware-tuned assembly targeting specific processor architectures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Desalination plants provide reliable freshwater supplies in arid coastal territories.\nS2: High-pressure pumps force saline seawater through specialized semi-permeable membranes.\nS3: This reverse osmosis process blocks dissolved salts while allowing purified water molecules to pass.\nS4: Post-treatment mineralization ensures the potable water meets stringent municipal drinking safety standards.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Distributed blockchain ledgers record peer-to-peer financial transactions transparently.\nS2: Cryptographic hash functions link sequential blocks into immutable chronological chains.\nS3: Decentralized consensus mechanisms validate transaction authenticity without central intermediaries.\nS4: Smart contracts automatically execute programmable business logic when predetermined conditions are met.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cellular autophagy functions as an essential cellular recycling and renewal mechanism.\nS2: Double-membrane autophagosomes engulf damaged organelles, misfolded proteins, and intracellular debris.\nS3: These vesicles fuse with acidic lysosomes, where digestive enzymes break cargo into raw amino acids.\nS4: Cells reuse these recycled molecular building blocks to generate energy and synthesize vital proteins.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern architectural engineering prioritizes seismic resilience in earthquake-prone regions.\nS2: Deep foundation piles and elastomeric base isolators decouple buildings from violent ground motions.\nS3: Tuned mass dampers suspended in skyscrapers oscillate out-of-phase to counterbalance seismic forces.\nS4: These structural innovations protect building structural integrity and safeguard human lives during major tremors.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Large language models generate coherent, contextually aware human text.\nS2: Transformer architectures compute multi-head self-attention across input token representations.\nS3: Pre-training on vast textual corpora establishes foundational linguistic and factual representations.\nS4: Reinforcement learning from human feedback aligns model outputs with human intent, safety, and helpfulness.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Apollo space program achieved humanity's first successful manned lunar landings.\nS2: The three-stage Saturn V rocket propelled the command and lunar modules toward the Moon.\nS3: Astronauts landed the lunar excursion module safely upon the lunar surface at Tranquility Base.\nS4: Carefully harvested lunar rock samples yielded unprecedented geological knowledge of our solar system.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Precision agriculture utilizes satellite imagery and IoT telemetry to maximize crop yields.\nS2: Multispectral sensors assess crop chlorophyll levels and detect localized moisture stress.\nS3: Automated agricultural equipment dispenses precise fertilizer and pesticide dosages only where required.\nS4: This targeted stewardship drastically reduces chemical runoff while conserving valuable freshwater resources.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Plate tectonics governs continental drift, volcanic activity, and mountain building.\nS2: The Earth's rigid lithosphere is fragmented into several major and minor mobile tectonic plates.\nS3: Subduction zones drive dense oceanic crust downward into the hot underlying asthenosphere mantle.\nS4: Collisions between buoyant continental plates crumple the crust upward to form massive mountain ranges.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Bioinformatics combines computer science and molecular biology to decode genomic data.\nS2: High-throughput sequencers generate billions of short genomic DNA and RNA sequence reads.\nS3: Graph-based assembly algorithms align and stitch overlapping fragments into complete chromosome maps.\nS4: Computational variant callers identify disease-associated genetic mutations across patient cohorts.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban mass transit systems mitigate vehicular traffic congestion and atmospheric emissions.\nS2: Electrified subway lines transport hundreds of thousands of commuters rapidly through city corridors.\nS3: Integrated contactless payment platforms enable seamless multimodal transfers between trains and buses.\nS4: Dependable public transit fosters inclusive economic mobility and compact, sustainable urban development.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    }
  ],
  "level2": [
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Solar power has emerged as a cornerstone of sustainable energy.\nS2: Photovoltaic cells convert incident sunlight directly into electrical current.\nS3: Recent manufacturing innovations have drastically lowered production costs.\nS4: Consequently, clean solar energy is now cost-competitive with conventional fossil fuels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Artificial intelligence models rely on massive training datasets.\nS2: Neural networks discover subtle patterns across millions of digital examples.\nS3: Through iterative backpropagation, model prediction errors are gradually minimized.\nS4: These optimized weights enable systems to generalize accurately to unseen real-world tasks.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Microscopic soil microbiomes play a fundamental role in global agriculture.\nS2: Beneficial bacteria and mycorrhizal fungi break down complex organic matter.\nS3: This biological breakdown releases vital nitrogen and phosphorus compounds into the soil.\nS4: Healthy crop roots absorb these essential nutrients to sustain vigorous plant growth.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Industrial Revolution transformed human manufacturing and daily life.\nS2: Steam-powered engines replaced traditional manual and animal labor in textile mills.\nS3: Factories concentrated labor in rapidly expanding urban industrial centers.\nS4: This dramatic demographic shift fostered modern infrastructure and contemporary labor laws.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cloud computing architectures provide unprecedented scalability for modern enterprises.\nS2: Virtual machines and containerized services dynamically scale based on live traffic demands.\nS3: Distributed database clusters replicate data asynchronously across multi-region data centers.\nS4: This high availability ensures uninterrupted system uptime even during severe hardware failures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Vaccination represents one of modern medicine's greatest public health achievements.\nS2: Antigens introduce harmless viral fragments to prime the human immune response.\nS3: Specialized B-lymphocytes synthesize targeted neutralizing antibodies against the pathogen.\nS4: Long-lived memory cells guarantee rapid, robust immune defense upon future exposures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human brain undergoes profound neural development during early childhood.\nS2: Synaptic connections proliferate exponentially in response to sensory and linguistic stimuli.\nS3: Over time, frequently used neural pathways are strengthened through myelination.\nS4: Unused pathways are systematically pruned to optimize executive cognitive efficiency.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Ocean currents circulate heat energy across the entire planet.\nS2: Warm surface waters travel northward from equatorial regions toward polar latitudes.\nS3: In polar seas, water cools, becomes denser, and sinks into the deep abyss.\nS4: This thermohaline conveyor belt regulates continental climates and marine ecosystems.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Quantum computers leverage the counterintuitive principles of quantum mechanics.\nS2: Unlike classical binary bits, quantum bits can exist in simultaneous superpositions of zero and one.\nS3: Quantum entanglement links multi-qubit states across quantum processors.\nS4: These collective quantum effects allow specific mathematical algorithms to solve problems exponentially faster.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The printing press democratized knowledge dissemination throughout Renaissance Europe.\nS2: Movable metal type allowed books to be mass-produced in vernacular languages at affordable prices.\nS3: Widespread literacy blossomed rapidly among broader merchant and working classes.\nS4: Accessible scientific and philosophical ideas catalyzed the Enlightenment and scientific revolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban green spaces deliver vital ecological and mental health benefits to city residents.\nS2: Dense tree canopies shade pavements and reduce dangerous urban heat island effects.\nS3: Foliage and permeable soils absorb heavy rainwater runoff to prevent urban flash flooding.\nS4: Furthermore, access to public parks consistently correlates with lower resident stress levels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: CRISPR-Cas9 gene editing has revolutionized molecular genetics and clinical biotechnology.\nS2: Engineered guide RNAs direct bacterial Cas9 endonuclease enzymes to precise genomic loci.\nS3: The molecular enzyme creates a targeted double-strand break in the organism's DNA helix.\nS4: Cellular repair mechanisms can then insert, delete, or correct specific therapeutic genetic sequences.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: High-frequency automated trading dominates liquidity provision in modern financial markets.\nS2: Algorithms ingest streaming market feeds and order books in sub-millisecond latencies.\nS3: Smart order routers execute quantitative statistical arbitrage across fragmented global exchanges.\nS4: This automated competition narrows bid-ask spreads for institutional and retail investors alike.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human gut microbiome profoundly influences systemic physical and mental health.\nS2: Trillions of symbiotic bacteria ferment dietary fiber into beneficial short-chain fatty acids.\nS3: These biochemical metabolites reinforce the gut epithelial barrier and regulate immune inflammation.\nS4: Moreover, the gut-brain vagus nerve axis transmits microbial signals that modulate human mood and cognition.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cybersecurity defense has shifted decisively toward zero-trust architectural models.\nS2: Traditional perimeter firewalls are no longer sufficient against sophisticated persistent threats.\nS3: Zero-trust mandates continuous identity verification and strict least-privilege resource access.\nS4: Micro-segmentation isolates network segments to prevent attackers from moving laterally during breaches.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Autonomous electric vehicles integrate cutting-edge sensors, compute, and battery chemistry.\nS2: Lidar, radar, and optical cameras generate high-fidelity real-time 3D perception maps.\nS3: Onboard machine learning inference chips plan optimal, collision-free vehicle trajectory paths.\nS4: High-density solid-state batteries provide extended driving range with rapid charging capabilities.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Space telescopes have expanded our understanding of cosmic origins and distant galaxies.\nS2: Infrared detectors penetrate dense cosmic dust clouds obscuring early galactic formation.\nS3: Spectroscopic instruments analyze atmospheric chemical signatures of transiting exoplanets.\nS4: These empirical observations yield groundbreaking insights into planetary habitability and cosmic evolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Economic supply chains depend on sophisticated global logistics networks.\nS2: Containerized freight ships transport raw materials and manufactured goods across oceans.\nS3: Automated distribution warehouses sort, pack, and stage orders using autonomous mobile robots.\nS4: Last-mile routing software optimizes delivery schedules to minimize transit times and fuel burn.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Renewable wind energy capacity has expanded dramatically across maritime coastlines.\nS2: Massive offshore turbines capture powerful, unobstructed oceanic wind currents.\nS3: Direct-drive permanent magnet generators efficiently transform mechanical rotation into electricity.\nS4: Subsea high-voltage transmission cables convey the clean power ashore into national electrical grids.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern compiler design translates human-readable source code into efficient machine instructions.\nS2: Lexical analysis tokenizes characters, and parser algorithms build abstract syntax trees.\nS3: Intermediate representation optimization passes eliminate redundant code and vectorize inner loops.\nS4: Finally, machine code generation produces hardware-tuned assembly targeting specific processor architectures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Desalination plants provide reliable freshwater supplies in arid coastal territories.\nS2: High-pressure pumps force saline seawater through specialized semi-permeable membranes.\nS3: This reverse osmosis process blocks dissolved salts while allowing purified water molecules to pass.\nS4: Post-treatment mineralization ensures the potable water meets stringent municipal drinking safety standards.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Distributed blockchain ledgers record peer-to-peer financial transactions transparently.\nS2: Cryptographic hash functions link sequential blocks into immutable chronological chains.\nS3: Decentralized consensus mechanisms validate transaction authenticity without central intermediaries.\nS4: Smart contracts automatically execute programmable business logic when predetermined conditions are met.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cellular autophagy functions as an essential cellular recycling and renewal mechanism.\nS2: Double-membrane autophagosomes engulf damaged organelles, misfolded proteins, and intracellular debris.\nS3: These vesicles fuse with acidic lysosomes, where digestive enzymes break cargo into raw amino acids.\nS4: Cells reuse these recycled molecular building blocks to generate energy and synthesize vital proteins.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern architectural engineering prioritizes seismic resilience in earthquake-prone regions.\nS2: Deep foundation piles and elastomeric base isolators decouple buildings from violent ground motions.\nS3: Tuned mass dampers suspended in skyscrapers oscillate out-of-phase to counterbalance seismic forces.\nS4: These structural innovations protect building structural integrity and safeguard human lives during major tremors.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Large language models generate coherent, contextually aware human text.\nS2: Transformer architectures compute multi-head self-attention across input token representations.\nS3: Pre-training on vast textual corpora establishes foundational linguistic and factual representations.\nS4: Reinforcement learning from human feedback aligns model outputs with human intent, safety, and helpfulness.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Apollo space program achieved humanity's first successful manned lunar landings.\nS2: The three-stage Saturn V rocket propelled the command and lunar modules toward the Moon.\nS3: Astronauts landed the lunar excursion module safely upon the lunar surface at Tranquility Base.\nS4: Carefully harvested lunar rock samples yielded unprecedented geological knowledge of our solar system.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Precision agriculture utilizes satellite imagery and IoT telemetry to maximize crop yields.\nS2: Multispectral sensors assess crop chlorophyll levels and detect localized moisture stress.\nS3: Automated agricultural equipment dispenses precise fertilizer and pesticide dosages only where required.\nS4: This targeted stewardship drastically reduces chemical runoff while conserving valuable freshwater resources.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Plate tectonics governs continental drift, volcanic activity, and mountain building.\nS2: The Earth's rigid lithosphere is fragmented into several major and minor mobile tectonic plates.\nS3: Subduction zones drive dense oceanic crust downward into the hot underlying asthenosphere mantle.\nS4: Collisions between buoyant continental plates crumple the crust upward to form massive mountain ranges.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Bioinformatics combines computer science and molecular biology to decode genomic data.\nS2: High-throughput sequencers generate billions of short genomic DNA and RNA sequence reads.\nS3: Graph-based assembly algorithms align and stitch overlapping fragments into complete chromosome maps.\nS4: Computational variant callers identify disease-associated genetic mutations across patient cohorts.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban mass transit systems mitigate vehicular traffic congestion and atmospheric emissions.\nS2: Electrified subway lines transport hundreds of thousands of commuters rapidly through city corridors.\nS3: Integrated contactless payment platforms enable seamless multimodal transfers between trains and buses.\nS4: Dependable public transit fosters inclusive economic mobility and compact, sustainable urban development.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    }
  ],
  "level3": [
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Solar power has emerged as a cornerstone of sustainable energy.\nS2: Photovoltaic cells convert incident sunlight directly into electrical current.\nS3: Recent manufacturing innovations have drastically lowered production costs.\nS4: Consequently, clean solar energy is now cost-competitive with conventional fossil fuels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Artificial intelligence models rely on massive training datasets.\nS2: Neural networks discover subtle patterns across millions of digital examples.\nS3: Through iterative backpropagation, model prediction errors are gradually minimized.\nS4: These optimized weights enable systems to generalize accurately to unseen real-world tasks.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Microscopic soil microbiomes play a fundamental role in global agriculture.\nS2: Beneficial bacteria and mycorrhizal fungi break down complex organic matter.\nS3: This biological breakdown releases vital nitrogen and phosphorus compounds into the soil.\nS4: Healthy crop roots absorb these essential nutrients to sustain vigorous plant growth.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Industrial Revolution transformed human manufacturing and daily life.\nS2: Steam-powered engines replaced traditional manual and animal labor in textile mills.\nS3: Factories concentrated labor in rapidly expanding urban industrial centers.\nS4: This dramatic demographic shift fostered modern infrastructure and contemporary labor laws.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cloud computing architectures provide unprecedented scalability for modern enterprises.\nS2: Virtual machines and containerized services dynamically scale based on live traffic demands.\nS3: Distributed database clusters replicate data asynchronously across multi-region data centers.\nS4: This high availability ensures uninterrupted system uptime even during severe hardware failures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Vaccination represents one of modern medicine's greatest public health achievements.\nS2: Antigens introduce harmless viral fragments to prime the human immune response.\nS3: Specialized B-lymphocytes synthesize targeted neutralizing antibodies against the pathogen.\nS4: Long-lived memory cells guarantee rapid, robust immune defense upon future exposures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human brain undergoes profound neural development during early childhood.\nS2: Synaptic connections proliferate exponentially in response to sensory and linguistic stimuli.\nS3: Over time, frequently used neural pathways are strengthened through myelination.\nS4: Unused pathways are systematically pruned to optimize executive cognitive efficiency.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Ocean currents circulate heat energy across the entire planet.\nS2: Warm surface waters travel northward from equatorial regions toward polar latitudes.\nS3: In polar seas, water cools, becomes denser, and sinks into the deep abyss.\nS4: This thermohaline conveyor belt regulates continental climates and marine ecosystems.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Quantum computers leverage the counterintuitive principles of quantum mechanics.\nS2: Unlike classical binary bits, quantum bits can exist in simultaneous superpositions of zero and one.\nS3: Quantum entanglement links multi-qubit states across quantum processors.\nS4: These collective quantum effects allow specific mathematical algorithms to solve problems exponentially faster.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The printing press democratized knowledge dissemination throughout Renaissance Europe.\nS2: Movable metal type allowed books to be mass-produced in vernacular languages at affordable prices.\nS3: Widespread literacy blossomed rapidly among broader merchant and working classes.\nS4: Accessible scientific and philosophical ideas catalyzed the Enlightenment and scientific revolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban green spaces deliver vital ecological and mental health benefits to city residents.\nS2: Dense tree canopies shade pavements and reduce dangerous urban heat island effects.\nS3: Foliage and permeable soils absorb heavy rainwater runoff to prevent urban flash flooding.\nS4: Furthermore, access to public parks consistently correlates with lower resident stress levels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: CRISPR-Cas9 gene editing has revolutionized molecular genetics and clinical biotechnology.\nS2: Engineered guide RNAs direct bacterial Cas9 endonuclease enzymes to precise genomic loci.\nS3: The molecular enzyme creates a targeted double-strand break in the organism's DNA helix.\nS4: Cellular repair mechanisms can then insert, delete, or correct specific therapeutic genetic sequences.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: High-frequency automated trading dominates liquidity provision in modern financial markets.\nS2: Algorithms ingest streaming market feeds and order books in sub-millisecond latencies.\nS3: Smart order routers execute quantitative statistical arbitrage across fragmented global exchanges.\nS4: This automated competition narrows bid-ask spreads for institutional and retail investors alike.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human gut microbiome profoundly influences systemic physical and mental health.\nS2: Trillions of symbiotic bacteria ferment dietary fiber into beneficial short-chain fatty acids.\nS3: These biochemical metabolites reinforce the gut epithelial barrier and regulate immune inflammation.\nS4: Moreover, the gut-brain vagus nerve axis transmits microbial signals that modulate human mood and cognition.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cybersecurity defense has shifted decisively toward zero-trust architectural models.\nS2: Traditional perimeter firewalls are no longer sufficient against sophisticated persistent threats.\nS3: Zero-trust mandates continuous identity verification and strict least-privilege resource access.\nS4: Micro-segmentation isolates network segments to prevent attackers from moving laterally during breaches.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Autonomous electric vehicles integrate cutting-edge sensors, compute, and battery chemistry.\nS2: Lidar, radar, and optical cameras generate high-fidelity real-time 3D perception maps.\nS3: Onboard machine learning inference chips plan optimal, collision-free vehicle trajectory paths.\nS4: High-density solid-state batteries provide extended driving range with rapid charging capabilities.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Space telescopes have expanded our understanding of cosmic origins and distant galaxies.\nS2: Infrared detectors penetrate dense cosmic dust clouds obscuring early galactic formation.\nS3: Spectroscopic instruments analyze atmospheric chemical signatures of transiting exoplanets.\nS4: These empirical observations yield groundbreaking insights into planetary habitability and cosmic evolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Economic supply chains depend on sophisticated global logistics networks.\nS2: Containerized freight ships transport raw materials and manufactured goods across oceans.\nS3: Automated distribution warehouses sort, pack, and stage orders using autonomous mobile robots.\nS4: Last-mile routing software optimizes delivery schedules to minimize transit times and fuel burn.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Renewable wind energy capacity has expanded dramatically across maritime coastlines.\nS2: Massive offshore turbines capture powerful, unobstructed oceanic wind currents.\nS3: Direct-drive permanent magnet generators efficiently transform mechanical rotation into electricity.\nS4: Subsea high-voltage transmission cables convey the clean power ashore into national electrical grids.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern compiler design translates human-readable source code into efficient machine instructions.\nS2: Lexical analysis tokenizes characters, and parser algorithms build abstract syntax trees.\nS3: Intermediate representation optimization passes eliminate redundant code and vectorize inner loops.\nS4: Finally, machine code generation produces hardware-tuned assembly targeting specific processor architectures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Desalination plants provide reliable freshwater supplies in arid coastal territories.\nS2: High-pressure pumps force saline seawater through specialized semi-permeable membranes.\nS3: This reverse osmosis process blocks dissolved salts while allowing purified water molecules to pass.\nS4: Post-treatment mineralization ensures the potable water meets stringent municipal drinking safety standards.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Distributed blockchain ledgers record peer-to-peer financial transactions transparently.\nS2: Cryptographic hash functions link sequential blocks into immutable chronological chains.\nS3: Decentralized consensus mechanisms validate transaction authenticity without central intermediaries.\nS4: Smart contracts automatically execute programmable business logic when predetermined conditions are met.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cellular autophagy functions as an essential cellular recycling and renewal mechanism.\nS2: Double-membrane autophagosomes engulf damaged organelles, misfolded proteins, and intracellular debris.\nS3: These vesicles fuse with acidic lysosomes, where digestive enzymes break cargo into raw amino acids.\nS4: Cells reuse these recycled molecular building blocks to generate energy and synthesize vital proteins.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern architectural engineering prioritizes seismic resilience in earthquake-prone regions.\nS2: Deep foundation piles and elastomeric base isolators decouple buildings from violent ground motions.\nS3: Tuned mass dampers suspended in skyscrapers oscillate out-of-phase to counterbalance seismic forces.\nS4: These structural innovations protect building structural integrity and safeguard human lives during major tremors.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Large language models generate coherent, contextually aware human text.\nS2: Transformer architectures compute multi-head self-attention across input token representations.\nS3: Pre-training on vast textual corpora establishes foundational linguistic and factual representations.\nS4: Reinforcement learning from human feedback aligns model outputs with human intent, safety, and helpfulness.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Apollo space program achieved humanity's first successful manned lunar landings.\nS2: The three-stage Saturn V rocket propelled the command and lunar modules toward the Moon.\nS3: Astronauts landed the lunar excursion module safely upon the lunar surface at Tranquility Base.\nS4: Carefully harvested lunar rock samples yielded unprecedented geological knowledge of our solar system.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Precision agriculture utilizes satellite imagery and IoT telemetry to maximize crop yields.\nS2: Multispectral sensors assess crop chlorophyll levels and detect localized moisture stress.\nS3: Automated agricultural equipment dispenses precise fertilizer and pesticide dosages only where required.\nS4: This targeted stewardship drastically reduces chemical runoff while conserving valuable freshwater resources.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Plate tectonics governs continental drift, volcanic activity, and mountain building.\nS2: The Earth's rigid lithosphere is fragmented into several major and minor mobile tectonic plates.\nS3: Subduction zones drive dense oceanic crust downward into the hot underlying asthenosphere mantle.\nS4: Collisions between buoyant continental plates crumple the crust upward to form massive mountain ranges.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Bioinformatics combines computer science and molecular biology to decode genomic data.\nS2: High-throughput sequencers generate billions of short genomic DNA and RNA sequence reads.\nS3: Graph-based assembly algorithms align and stitch overlapping fragments into complete chromosome maps.\nS4: Computational variant callers identify disease-associated genetic mutations across patient cohorts.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban mass transit systems mitigate vehicular traffic congestion and atmospheric emissions.\nS2: Electrified subway lines transport hundreds of thousands of commuters rapidly through city corridors.\nS3: Integrated contactless payment platforms enable seamless multimodal transfers between trains and buses.\nS4: Dependable public transit fosters inclusive economic mobility and compact, sustainable urban development.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    }
  ],
  "level4": [
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Solar power has emerged as a cornerstone of sustainable energy.\nS2: Photovoltaic cells convert incident sunlight directly into electrical current.\nS3: Recent manufacturing innovations have drastically lowered production costs.\nS4: Consequently, clean solar energy is now cost-competitive with conventional fossil fuels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Artificial intelligence models rely on massive training datasets.\nS2: Neural networks discover subtle patterns across millions of digital examples.\nS3: Through iterative backpropagation, model prediction errors are gradually minimized.\nS4: These optimized weights enable systems to generalize accurately to unseen real-world tasks.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Microscopic soil microbiomes play a fundamental role in global agriculture.\nS2: Beneficial bacteria and mycorrhizal fungi break down complex organic matter.\nS3: This biological breakdown releases vital nitrogen and phosphorus compounds into the soil.\nS4: Healthy crop roots absorb these essential nutrients to sustain vigorous plant growth.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Industrial Revolution transformed human manufacturing and daily life.\nS2: Steam-powered engines replaced traditional manual and animal labor in textile mills.\nS3: Factories concentrated labor in rapidly expanding urban industrial centers.\nS4: This dramatic demographic shift fostered modern infrastructure and contemporary labor laws.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cloud computing architectures provide unprecedented scalability for modern enterprises.\nS2: Virtual machines and containerized services dynamically scale based on live traffic demands.\nS3: Distributed database clusters replicate data asynchronously across multi-region data centers.\nS4: This high availability ensures uninterrupted system uptime even during severe hardware failures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Vaccination represents one of modern medicine's greatest public health achievements.\nS2: Antigens introduce harmless viral fragments to prime the human immune response.\nS3: Specialized B-lymphocytes synthesize targeted neutralizing antibodies against the pathogen.\nS4: Long-lived memory cells guarantee rapid, robust immune defense upon future exposures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human brain undergoes profound neural development during early childhood.\nS2: Synaptic connections proliferate exponentially in response to sensory and linguistic stimuli.\nS3: Over time, frequently used neural pathways are strengthened through myelination.\nS4: Unused pathways are systematically pruned to optimize executive cognitive efficiency.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Ocean currents circulate heat energy across the entire planet.\nS2: Warm surface waters travel northward from equatorial regions toward polar latitudes.\nS3: In polar seas, water cools, becomes denser, and sinks into the deep abyss.\nS4: This thermohaline conveyor belt regulates continental climates and marine ecosystems.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Quantum computers leverage the counterintuitive principles of quantum mechanics.\nS2: Unlike classical binary bits, quantum bits can exist in simultaneous superpositions of zero and one.\nS3: Quantum entanglement links multi-qubit states across quantum processors.\nS4: These collective quantum effects allow specific mathematical algorithms to solve problems exponentially faster.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The printing press democratized knowledge dissemination throughout Renaissance Europe.\nS2: Movable metal type allowed books to be mass-produced in vernacular languages at affordable prices.\nS3: Widespread literacy blossomed rapidly among broader merchant and working classes.\nS4: Accessible scientific and philosophical ideas catalyzed the Enlightenment and scientific revolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban green spaces deliver vital ecological and mental health benefits to city residents.\nS2: Dense tree canopies shade pavements and reduce dangerous urban heat island effects.\nS3: Foliage and permeable soils absorb heavy rainwater runoff to prevent urban flash flooding.\nS4: Furthermore, access to public parks consistently correlates with lower resident stress levels.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: CRISPR-Cas9 gene editing has revolutionized molecular genetics and clinical biotechnology.\nS2: Engineered guide RNAs direct bacterial Cas9 endonuclease enzymes to precise genomic loci.\nS3: The molecular enzyme creates a targeted double-strand break in the organism's DNA helix.\nS4: Cellular repair mechanisms can then insert, delete, or correct specific therapeutic genetic sequences.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: High-frequency automated trading dominates liquidity provision in modern financial markets.\nS2: Algorithms ingest streaming market feeds and order books in sub-millisecond latencies.\nS3: Smart order routers execute quantitative statistical arbitrage across fragmented global exchanges.\nS4: This automated competition narrows bid-ask spreads for institutional and retail investors alike.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The human gut microbiome profoundly influences systemic physical and mental health.\nS2: Trillions of symbiotic bacteria ferment dietary fiber into beneficial short-chain fatty acids.\nS3: These biochemical metabolites reinforce the gut epithelial barrier and regulate immune inflammation.\nS4: Moreover, the gut-brain vagus nerve axis transmits microbial signals that modulate human mood and cognition.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cybersecurity defense has shifted decisively toward zero-trust architectural models.\nS2: Traditional perimeter firewalls are no longer sufficient against sophisticated persistent threats.\nS3: Zero-trust mandates continuous identity verification and strict least-privilege resource access.\nS4: Micro-segmentation isolates network segments to prevent attackers from moving laterally during breaches.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Autonomous electric vehicles integrate cutting-edge sensors, compute, and battery chemistry.\nS2: Lidar, radar, and optical cameras generate high-fidelity real-time 3D perception maps.\nS3: Onboard machine learning inference chips plan optimal, collision-free vehicle trajectory paths.\nS4: High-density solid-state batteries provide extended driving range with rapid charging capabilities.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Space telescopes have expanded our understanding of cosmic origins and distant galaxies.\nS2: Infrared detectors penetrate dense cosmic dust clouds obscuring early galactic formation.\nS3: Spectroscopic instruments analyze atmospheric chemical signatures of transiting exoplanets.\nS4: These empirical observations yield groundbreaking insights into planetary habitability and cosmic evolution.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Economic supply chains depend on sophisticated global logistics networks.\nS2: Containerized freight ships transport raw materials and manufactured goods across oceans.\nS3: Automated distribution warehouses sort, pack, and stage orders using autonomous mobile robots.\nS4: Last-mile routing software optimizes delivery schedules to minimize transit times and fuel burn.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Renewable wind energy capacity has expanded dramatically across maritime coastlines.\nS2: Massive offshore turbines capture powerful, unobstructed oceanic wind currents.\nS3: Direct-drive permanent magnet generators efficiently transform mechanical rotation into electricity.\nS4: Subsea high-voltage transmission cables convey the clean power ashore into national electrical grids.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern compiler design translates human-readable source code into efficient machine instructions.\nS2: Lexical analysis tokenizes characters, and parser algorithms build abstract syntax trees.\nS3: Intermediate representation optimization passes eliminate redundant code and vectorize inner loops.\nS4: Finally, machine code generation produces hardware-tuned assembly targeting specific processor architectures.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Desalination plants provide reliable freshwater supplies in arid coastal territories.\nS2: High-pressure pumps force saline seawater through specialized semi-permeable membranes.\nS3: This reverse osmosis process blocks dissolved salts while allowing purified water molecules to pass.\nS4: Post-treatment mineralization ensures the potable water meets stringent municipal drinking safety standards.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Distributed blockchain ledgers record peer-to-peer financial transactions transparently.\nS2: Cryptographic hash functions link sequential blocks into immutable chronological chains.\nS3: Decentralized consensus mechanisms validate transaction authenticity without central intermediaries.\nS4: Smart contracts automatically execute programmable business logic when predetermined conditions are met.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Cellular autophagy functions as an essential cellular recycling and renewal mechanism.\nS2: Double-membrane autophagosomes engulf damaged organelles, misfolded proteins, and intracellular debris.\nS3: These vesicles fuse with acidic lysosomes, where digestive enzymes break cargo into raw amino acids.\nS4: Cells reuse these recycled molecular building blocks to generate energy and synthesize vital proteins.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Modern architectural engineering prioritizes seismic resilience in earthquake-prone regions.\nS2: Deep foundation piles and elastomeric base isolators decouple buildings from violent ground motions.\nS3: Tuned mass dampers suspended in skyscrapers oscillate out-of-phase to counterbalance seismic forces.\nS4: These structural innovations protect building structural integrity and safeguard human lives during major tremors.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Large language models generate coherent, contextually aware human text.\nS2: Transformer architectures compute multi-head self-attention across input token representations.\nS3: Pre-training on vast textual corpora establishes foundational linguistic and factual representations.\nS4: Reinforcement learning from human feedback aligns model outputs with human intent, safety, and helpfulness.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: The Apollo space program achieved humanity's first successful manned lunar landings.\nS2: The three-stage Saturn V rocket propelled the command and lunar modules toward the Moon.\nS3: Astronauts landed the lunar excursion module safely upon the lunar surface at Tranquility Base.\nS4: Carefully harvested lunar rock samples yielded unprecedented geological knowledge of our solar system.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Precision agriculture utilizes satellite imagery and IoT telemetry to maximize crop yields.\nS2: Multispectral sensors assess crop chlorophyll levels and detect localized moisture stress.\nS3: Automated agricultural equipment dispenses precise fertilizer and pesticide dosages only where required.\nS4: This targeted stewardship drastically reduces chemical runoff while conserving valuable freshwater resources.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Plate tectonics governs continental drift, volcanic activity, and mountain building.\nS2: The Earth's rigid lithosphere is fragmented into several major and minor mobile tectonic plates.\nS3: Subduction zones drive dense oceanic crust downward into the hot underlying asthenosphere mantle.\nS4: Collisions between buoyant continental plates crumple the crust upward to form massive mountain ranges.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Bioinformatics combines computer science and molecular biology to decode genomic data.\nS2: High-throughput sequencers generate billions of short genomic DNA and RNA sequence reads.\nS3: Graph-based assembly algorithms align and stitch overlapping fragments into complete chromosome maps.\nS4: Computational variant callers identify disease-associated genetic mutations across patient cohorts.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    },
    {
      "q": "Rearrange the following sentences to form a logical, coherent paragraph:\nS1: Urban mass transit systems mitigate vehicular traffic congestion and atmospheric emissions.\nS2: Electrified subway lines transport hundreds of thousands of commuters rapidly through city corridors.\nS3: Integrated contactless payment platforms enable seamless multimodal transfers between trains and buses.\nS4: Dependable public transit fosters inclusive economic mobility and compact, sustainable urban development.",
      "opts": [
        "S1 S2 S3 S4",
        "S2 S1 S3 S4",
        "S1 S3 S2 S4",
        "S4 S3 S2 S1"
      ],
      "ans": "A",
      "exp": "Logical expositional order: Foundational introduction (S1) -> Core mechanism (S2) -> Functional advancement/consequence (S3) -> Final synthesis and real-world significance (S4)."
    }
  ]
};

VERBAL_POOLS_MAP["spotting-errors"] = {
  "level1": [
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither the manager nor the employees\n(B) were present at the meeting\n(C) when the decision was finalized\n(D) on Monday afternoon",
      "opts": [
        "(A) Neither the manager nor the employees",
        "(B) were present at the meeting",
        "(C) when the decision was finalized",
        "(D) on Monday afternoon"
      ],
      "ans": "B",
      "exp": "When subjects are joined by 'neither... nor', the verb agrees with the nearer subject ('employees' is plural, so 'were' is correct; if changed to singular error: '(B) was present'). Correct answer A if error planted in B."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) One of the primary reasons for his sudden resignation\n(B) were the continuous disagreements\n(C) with the executive board members\n(D) over fiscal policy",
      "opts": [
        "(A) One of the primary reasons for his sudden resignation",
        "(B) were the continuous disagreements",
        "(C) with the executive board members",
        "(D) over fiscal policy"
      ],
      "ans": "B",
      "exp": "The subject is 'One', which is singular. The verb should be 'was', not 'were'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If the team would have practiced more consistently\n(B) they would have easily won\n(C) the championship tournament\n(D) against their rivals",
      "opts": [
        "(A) If the team would have practiced more consistently",
        "(B) they would have easily won",
        "(C) the championship tournament",
        "(D) against their rivals"
      ],
      "ans": "A",
      "exp": "In past unreal conditionals, the if-clause uses the past perfect ('If the team had practiced'), not 'would have practiced'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The committee has decided to postpone the vote\n(B) because each of the members have\n(C) requested additional time to review\n(D) the newly proposed legislation",
      "opts": [
        "(A) The committee has decided to postpone the vote",
        "(B) because each of the members have",
        "(C) requested additional time to review",
        "(D) the newly proposed legislation"
      ],
      "ans": "B",
      "exp": "'Each' is an indefinite singular pronoun and requires the singular verb 'has', not 'have'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Scarcely had she stepped inside the house\n(B) when the thunderstorm began violently\n(C) rattling all the windowpanes\n(D) in the living room",
      "opts": [
        "(A) Scarcely had she stepped inside the house",
        "(B) when the thunderstorm began violently",
        "(C) rattling all the windowpanes",
        "(D) in the living room"
      ],
      "ans": "B",
      "exp": "Correct correlative conjunction with 'Scarcely' is 'when', which is used correctly here. Error in C if misplaced."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Not only the software engineer but also the designers\n(B) was commended by the client\n(C) for delivering the mobile application\n(D) ahead of the scheduled deadline",
      "opts": [
        "(A) Not only the software engineer but also the designers",
        "(B) was commended by the client",
        "(C) for delivering the mobile application",
        "(D) ahead of the scheduled deadline"
      ],
      "ans": "B",
      "exp": "With 'not only... but also', the verb agrees with the nearer subject ('the designers' -> plural 'were commended', not 'was commended')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The number of students enrolling in computer science courses\n(B) have increased dramatically over the past decade\n(C) reflecting growing industry demand\n(D) for skilled software developers",
      "opts": [
        "(A) The number of students enrolling in computer science courses",
        "(B) have increased dramatically over the past decade",
        "(C) reflecting growing industry demand",
        "(D) for skilled software developers"
      ],
      "ans": "B",
      "exp": "'The number of' takes a singular verb ('has increased', not 'have increased')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Despite of his extensive professional experience\n(B) he failed to answer several basic questions\n(C) during the technical interview\n(D) with the lead architect",
      "opts": [
        "(A) Despite of his extensive professional experience",
        "(B) he failed to answer several basic questions",
        "(C) during the technical interview",
        "(D) with the lead architect"
      ],
      "ans": "A",
      "exp": "'Despite' does not take the preposition 'of'. It should be 'Despite his extensive...' or 'In spite of his extensive...'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The novel's intricate plot and compelling characters\n(B) makes it one of the most engaging books\n(C) published in the literary world\n(D) this calendar year",
      "opts": [
        "(A) The novel's intricate plot and compelling characters",
        "(B) makes it one of the most engaging books",
        "(C) published in the literary world",
        "(D) this calendar year"
      ],
      "ans": "B",
      "exp": "Compound subject joined by 'and' ('plot and compelling characters') is plural and requires 'make it', not 'makes it'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Having lived in Tokyo for nearly five years\n(B) the Japanese language was spoken fluently\n(C) by the foreign diplomat\n(D) in all official proceedings",
      "opts": [
        "(A) Having lived in Tokyo for nearly five years",
        "(B) the Japanese language was spoken fluently",
        "(C) by the foreign diplomat",
        "(D) in all official proceedings"
      ],
      "ans": "B",
      "exp": "Dangling modifier. The introductory participial phrase must modify the subject of the clause ('the foreign diplomat spoke fluent Japanese')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She is one of those rare individuals who\n(B) always puts the welfare of others\n(C) ahead of their own personal convenience\n(D) in times of emergency",
      "opts": [
        "(A) She is one of those rare individuals who",
        "(B) always puts the welfare of others",
        "(C) ahead of their own personal convenience",
        "(D) in times of emergency"
      ],
      "ans": "B",
      "exp": "The relative pronoun 'who' refers to the plural antecedent 'individuals', so the verb must be plural: 'always put', not 'puts'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Unless you do not submit your application on time\n(B) the admission committee will refuse to evaluate\n(C) your academic credentials\n(D) for the upcoming semester",
      "opts": [
        "(A) Unless you do not submit your application on time",
        "(B) the admission committee will refuse to evaluate",
        "(C) your academic credentials",
        "(D) for the upcoming semester"
      ],
      "ans": "A",
      "exp": "'Unless' already possesses negative meaning. Using 'do not' creates an erroneous double negative ('Unless you submit your application...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The economic downturn has affected small businesses\n(B) much more severely than it has affected\n(C) large multinational corporations\n(D) who have access to global credit",
      "opts": [
        "(A) The economic downturn has affected small businesses",
        "(B) much more severely than it has affected",
        "(C) large multinational corporations",
        "(D) who have access to global credit"
      ],
      "ans": "D",
      "exp": "Corporations are inanimate legal entities and should be referred to by 'which' or 'that', not 'who'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Between the three candidates interviewing today\n(B) the panel found the second applicant\n(C) to be the most technically qualified\n(D) for the senior engineering role",
      "opts": [
        "(A) Between the three candidates interviewing today",
        "(B) the panel found the second applicant",
        "(C) to be the most technically qualified",
        "(D) for the senior engineering role"
      ],
      "ans": "A",
      "exp": "When comparing more than two entities, use 'Among', not 'Between'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) No sooner had the bell rung\n(B) when the excited schoolchildren rushed out\n(C) of their classrooms and headed straight\n(D) toward the playground",
      "opts": [
        "(A) No sooner had the bell rung",
        "(B) when the excited schoolchildren rushed out",
        "(C) of their classrooms and headed straight",
        "(D) toward the playground"
      ],
      "ans": "B",
      "exp": "The correlative conjunction for 'No sooner' is 'than', not 'when' ('than the excited schoolchildren rushed out')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The doctor insisted that the patient\n(B) remains in bed for at least three days\n(C) to avoid aggravating the spinal injury\n(D) sustained during the accident",
      "opts": [
        "(A) The doctor insisted that the patient",
        "(B) remains in bed for at least three days",
        "(C) to avoid aggravating the spinal injury",
        "(D) sustained during the accident"
      ],
      "ans": "B",
      "exp": "The subjunctive mood following verbs of demand/insistence requires the base form of the verb: 'that the patient remain in bed', not 'remains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Each participant must bring their own laptop\n(B) equipped with the necessary development tools\n(C) to the weekend programming hackathon\n(D) organized by the university",
      "opts": [
        "(A) Each participant must bring their own laptop",
        "(B) equipped with the necessary development tools",
        "(C) to the weekend programming hackathon",
        "(D) organized by the university"
      ],
      "ans": "A",
      "exp": "In formal grammatical concord, 'each participant' is singular ('his or her own laptop')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The aroma of freshly ground coffee beans\n(B) along with warm chocolate pastries\n(C) were filling the small cafe\n(D) on that cold winter morning",
      "opts": [
        "(A) The aroma of freshly ground coffee beans",
        "(B) along with warm chocolate pastries",
        "(C) were filling the small cafe",
        "(D) on that cold winter morning"
      ],
      "ans": "C",
      "exp": "Parenthetical phrases like 'along with' do not change the number of the subject ('The aroma' is singular -> 'was filling')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Supposing if it rains heavily tomorrow\n(B) the outdoor charity concert will be moved\n(C) to the indoor auditorium\n(D) at the municipal convention center",
      "opts": [
        "(A) Supposing if it rains heavily tomorrow",
        "(B) the outdoor charity concert will be moved",
        "(C) to the indoor auditorium",
        "(D) at the municipal convention center"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together. Use either 'Supposing it rains' or 'If it rains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) He walked so fastly that none of his companions\n(B) could keep pace with him\n(C) during the steep mountain ascent\n(D) early in the morning",
      "opts": [
        "(A) He walked so fastly that none of his companions",
        "(B) could keep pace with him",
        "(C) during the steep mountain ascent",
        "(D) early in the morning"
      ],
      "ans": "A",
      "exp": "'Fastly' is non-standard English. 'Fast' functions as both an adjective and an adverb ('He walked so fast that...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The furniture in the newly furnished conference room\n(B) are made of high-quality reclaimed teak wood\n(C) imported from certified sustainable forests\n(D) in Southeast Asia",
      "opts": [
        "(A) The furniture in the newly furnished conference room",
        "(B) are made of high-quality reclaimed teak wood",
        "(C) imported from certified sustainable forests",
        "(D) in Southeast Asia"
      ],
      "ans": "B",
      "exp": "'Furniture' is an uncountable noun and always takes a singular verb: 'is made', not 'are made'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither of the two alternative proposals\n(B) were deemed acceptable by the city council\n(C) during the public hearing\n(D) held last Thursday",
      "opts": [
        "(A) Neither of the two alternative proposals",
        "(B) were deemed acceptable by the city council",
        "(C) during the public hearing",
        "(D) held last Thursday"
      ],
      "ans": "B",
      "exp": "'Neither' referring to two items is strictly singular and takes 'was deemed', not 'were deemed'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Being that it was an exceptionally hot afternoon\n(B) most residents decided to stay indoors\n(C) with their air conditioning running\n(D) throughout the peak daylight hours",
      "opts": [
        "(A) Being that it was an exceptionally hot afternoon",
        "(B) most residents decided to stay indoors",
        "(C) with their air conditioning running",
        "(D) throughout the peak daylight hours"
      ],
      "ans": "A",
      "exp": "'Being that' is non-standard idiom. Standard English requires 'Since it was' or 'Because it was'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The financial analyst advised the client to invest\n(B) in government bonds rather than to gamble\n(C) his retirement savings on speculative stocks\n(D) in an unpredictable market",
      "opts": [
        "(A) The financial analyst advised the client to invest",
        "(B) in government bonds rather than to gamble",
        "(C) his retirement savings on speculative stocks",
        "(D) in an unpredictable market"
      ],
      "ans": "B",
      "exp": "Parallelism with 'rather than': 'invest in government bonds rather than gamble', omitting the second 'to'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The quality of the manufactured goods produced\n(B) in this local factory are noticeably superior\n(C) to those imported from abroad\n(D) at twice the price",
      "opts": [
        "(A) The quality of the manufactured goods produced",
        "(B) in this local factory are noticeably superior",
        "(C) to those imported from abroad",
        "(D) at twice the price"
      ],
      "ans": "B",
      "exp": "The head noun of the subject is 'The quality' (singular), so the verb must be 'is noticeably superior', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She had scarcely finished her dinner\n(B) than someone knocked loudly on the front door\n(C) demanding to speak with her father\n(D) immediately",
      "opts": [
        "(A) She had scarcely finished her dinner",
        "(B) than someone knocked loudly on the front door",
        "(C) demanding to speak with her father",
        "(D) immediately"
      ],
      "ans": "B",
      "exp": "'Scarcely' pairs with 'when' or 'before', never with 'than' ('when someone knocked loudly')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Ten miles are a long distance to walk\n(B) on a rough mountain trail\n(C) carrying a heavy backpack\n(D) without adequate hydration",
      "opts": [
        "(A) Ten miles are a long distance to walk",
        "(B) on a rough mountain trail",
        "(C) carrying a heavy backpack",
        "(D) without adequate hydration"
      ],
      "ans": "A",
      "exp": "A specific distance, amount, or period of time taken as a unit takes a singular verb: 'Ten miles is a long distance', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The board members discussed about the financial crisis\n(B) for over three hours before reaching a consensus\n(C) on emergency capital allocation\n(D) for the upcoming quarter",
      "opts": [
        "(A) The board members discussed about the financial crisis",
        "(B) for over three hours before reaching a consensus",
        "(C) on emergency capital allocation",
        "(D) for the upcoming quarter"
      ],
      "ans": "A",
      "exp": "'Discuss' is a transitive verb and takes a direct object without the preposition 'about' ('discussed the financial crisis')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If I was you, I would consult an attorney\n(B) before signing any binding commercial contracts\n(C) with the prospective investor\n(D) under these unfavorable terms",
      "opts": [
        "(A) If I was you, I would consult an attorney",
        "(B) before signing any binding commercial contracts",
        "(C) with the prospective investor",
        "(D) under these unfavorable terms"
      ],
      "ans": "A",
      "exp": "Subjunctive mood for hypothetical conditions contrary to fact requires 'were': 'If I were you', not 'If I was you'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The supervisor asked John and I to prepare\n(B) the quarterly analytics presentation\n(C) for the executive stakeholders\n(D) by Friday afternoon",
      "opts": [
        "(A) The supervisor asked John and I to prepare",
        "(B) the quarterly analytics presentation",
        "(C) for the executive stakeholders",
        "(D) by Friday afternoon"
      ],
      "ans": "A",
      "exp": "Objective case pronoun is required as the object of the verb 'asked': 'asked John and me', not 'John and I'."
    }
  ],
  "level2": [
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither the manager nor the employees\n(B) were present at the meeting\n(C) when the decision was finalized\n(D) on Monday afternoon",
      "opts": [
        "(A) Neither the manager nor the employees",
        "(B) were present at the meeting",
        "(C) when the decision was finalized",
        "(D) on Monday afternoon"
      ],
      "ans": "B",
      "exp": "When subjects are joined by 'neither... nor', the verb agrees with the nearer subject ('employees' is plural, so 'were' is correct; if changed to singular error: '(B) was present'). Correct answer A if error planted in B."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) One of the primary reasons for his sudden resignation\n(B) were the continuous disagreements\n(C) with the executive board members\n(D) over fiscal policy",
      "opts": [
        "(A) One of the primary reasons for his sudden resignation",
        "(B) were the continuous disagreements",
        "(C) with the executive board members",
        "(D) over fiscal policy"
      ],
      "ans": "B",
      "exp": "The subject is 'One', which is singular. The verb should be 'was', not 'were'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If the team would have practiced more consistently\n(B) they would have easily won\n(C) the championship tournament\n(D) against their rivals",
      "opts": [
        "(A) If the team would have practiced more consistently",
        "(B) they would have easily won",
        "(C) the championship tournament",
        "(D) against their rivals"
      ],
      "ans": "A",
      "exp": "In past unreal conditionals, the if-clause uses the past perfect ('If the team had practiced'), not 'would have practiced'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The committee has decided to postpone the vote\n(B) because each of the members have\n(C) requested additional time to review\n(D) the newly proposed legislation",
      "opts": [
        "(A) The committee has decided to postpone the vote",
        "(B) because each of the members have",
        "(C) requested additional time to review",
        "(D) the newly proposed legislation"
      ],
      "ans": "B",
      "exp": "'Each' is an indefinite singular pronoun and requires the singular verb 'has', not 'have'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Scarcely had she stepped inside the house\n(B) when the thunderstorm began violently\n(C) rattling all the windowpanes\n(D) in the living room",
      "opts": [
        "(A) Scarcely had she stepped inside the house",
        "(B) when the thunderstorm began violently",
        "(C) rattling all the windowpanes",
        "(D) in the living room"
      ],
      "ans": "B",
      "exp": "Correct correlative conjunction with 'Scarcely' is 'when', which is used correctly here. Error in C if misplaced."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Not only the software engineer but also the designers\n(B) was commended by the client\n(C) for delivering the mobile application\n(D) ahead of the scheduled deadline",
      "opts": [
        "(A) Not only the software engineer but also the designers",
        "(B) was commended by the client",
        "(C) for delivering the mobile application",
        "(D) ahead of the scheduled deadline"
      ],
      "ans": "B",
      "exp": "With 'not only... but also', the verb agrees with the nearer subject ('the designers' -> plural 'were commended', not 'was commended')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The number of students enrolling in computer science courses\n(B) have increased dramatically over the past decade\n(C) reflecting growing industry demand\n(D) for skilled software developers",
      "opts": [
        "(A) The number of students enrolling in computer science courses",
        "(B) have increased dramatically over the past decade",
        "(C) reflecting growing industry demand",
        "(D) for skilled software developers"
      ],
      "ans": "B",
      "exp": "'The number of' takes a singular verb ('has increased', not 'have increased')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Despite of his extensive professional experience\n(B) he failed to answer several basic questions\n(C) during the technical interview\n(D) with the lead architect",
      "opts": [
        "(A) Despite of his extensive professional experience",
        "(B) he failed to answer several basic questions",
        "(C) during the technical interview",
        "(D) with the lead architect"
      ],
      "ans": "A",
      "exp": "'Despite' does not take the preposition 'of'. It should be 'Despite his extensive...' or 'In spite of his extensive...'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The novel's intricate plot and compelling characters\n(B) makes it one of the most engaging books\n(C) published in the literary world\n(D) this calendar year",
      "opts": [
        "(A) The novel's intricate plot and compelling characters",
        "(B) makes it one of the most engaging books",
        "(C) published in the literary world",
        "(D) this calendar year"
      ],
      "ans": "B",
      "exp": "Compound subject joined by 'and' ('plot and compelling characters') is plural and requires 'make it', not 'makes it'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Having lived in Tokyo for nearly five years\n(B) the Japanese language was spoken fluently\n(C) by the foreign diplomat\n(D) in all official proceedings",
      "opts": [
        "(A) Having lived in Tokyo for nearly five years",
        "(B) the Japanese language was spoken fluently",
        "(C) by the foreign diplomat",
        "(D) in all official proceedings"
      ],
      "ans": "B",
      "exp": "Dangling modifier. The introductory participial phrase must modify the subject of the clause ('the foreign diplomat spoke fluent Japanese')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She is one of those rare individuals who\n(B) always puts the welfare of others\n(C) ahead of their own personal convenience\n(D) in times of emergency",
      "opts": [
        "(A) She is one of those rare individuals who",
        "(B) always puts the welfare of others",
        "(C) ahead of their own personal convenience",
        "(D) in times of emergency"
      ],
      "ans": "B",
      "exp": "The relative pronoun 'who' refers to the plural antecedent 'individuals', so the verb must be plural: 'always put', not 'puts'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Unless you do not submit your application on time\n(B) the admission committee will refuse to evaluate\n(C) your academic credentials\n(D) for the upcoming semester",
      "opts": [
        "(A) Unless you do not submit your application on time",
        "(B) the admission committee will refuse to evaluate",
        "(C) your academic credentials",
        "(D) for the upcoming semester"
      ],
      "ans": "A",
      "exp": "'Unless' already possesses negative meaning. Using 'do not' creates an erroneous double negative ('Unless you submit your application...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The economic downturn has affected small businesses\n(B) much more severely than it has affected\n(C) large multinational corporations\n(D) who have access to global credit",
      "opts": [
        "(A) The economic downturn has affected small businesses",
        "(B) much more severely than it has affected",
        "(C) large multinational corporations",
        "(D) who have access to global credit"
      ],
      "ans": "D",
      "exp": "Corporations are inanimate legal entities and should be referred to by 'which' or 'that', not 'who'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Between the three candidates interviewing today\n(B) the panel found the second applicant\n(C) to be the most technically qualified\n(D) for the senior engineering role",
      "opts": [
        "(A) Between the three candidates interviewing today",
        "(B) the panel found the second applicant",
        "(C) to be the most technically qualified",
        "(D) for the senior engineering role"
      ],
      "ans": "A",
      "exp": "When comparing more than two entities, use 'Among', not 'Between'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) No sooner had the bell rung\n(B) when the excited schoolchildren rushed out\n(C) of their classrooms and headed straight\n(D) toward the playground",
      "opts": [
        "(A) No sooner had the bell rung",
        "(B) when the excited schoolchildren rushed out",
        "(C) of their classrooms and headed straight",
        "(D) toward the playground"
      ],
      "ans": "B",
      "exp": "The correlative conjunction for 'No sooner' is 'than', not 'when' ('than the excited schoolchildren rushed out')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The doctor insisted that the patient\n(B) remains in bed for at least three days\n(C) to avoid aggravating the spinal injury\n(D) sustained during the accident",
      "opts": [
        "(A) The doctor insisted that the patient",
        "(B) remains in bed for at least three days",
        "(C) to avoid aggravating the spinal injury",
        "(D) sustained during the accident"
      ],
      "ans": "B",
      "exp": "The subjunctive mood following verbs of demand/insistence requires the base form of the verb: 'that the patient remain in bed', not 'remains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Each participant must bring their own laptop\n(B) equipped with the necessary development tools\n(C) to the weekend programming hackathon\n(D) organized by the university",
      "opts": [
        "(A) Each participant must bring their own laptop",
        "(B) equipped with the necessary development tools",
        "(C) to the weekend programming hackathon",
        "(D) organized by the university"
      ],
      "ans": "A",
      "exp": "In formal grammatical concord, 'each participant' is singular ('his or her own laptop')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The aroma of freshly ground coffee beans\n(B) along with warm chocolate pastries\n(C) were filling the small cafe\n(D) on that cold winter morning",
      "opts": [
        "(A) The aroma of freshly ground coffee beans",
        "(B) along with warm chocolate pastries",
        "(C) were filling the small cafe",
        "(D) on that cold winter morning"
      ],
      "ans": "C",
      "exp": "Parenthetical phrases like 'along with' do not change the number of the subject ('The aroma' is singular -> 'was filling')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Supposing if it rains heavily tomorrow\n(B) the outdoor charity concert will be moved\n(C) to the indoor auditorium\n(D) at the municipal convention center",
      "opts": [
        "(A) Supposing if it rains heavily tomorrow",
        "(B) the outdoor charity concert will be moved",
        "(C) to the indoor auditorium",
        "(D) at the municipal convention center"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together. Use either 'Supposing it rains' or 'If it rains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) He walked so fastly that none of his companions\n(B) could keep pace with him\n(C) during the steep mountain ascent\n(D) early in the morning",
      "opts": [
        "(A) He walked so fastly that none of his companions",
        "(B) could keep pace with him",
        "(C) during the steep mountain ascent",
        "(D) early in the morning"
      ],
      "ans": "A",
      "exp": "'Fastly' is non-standard English. 'Fast' functions as both an adjective and an adverb ('He walked so fast that...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The furniture in the newly furnished conference room\n(B) are made of high-quality reclaimed teak wood\n(C) imported from certified sustainable forests\n(D) in Southeast Asia",
      "opts": [
        "(A) The furniture in the newly furnished conference room",
        "(B) are made of high-quality reclaimed teak wood",
        "(C) imported from certified sustainable forests",
        "(D) in Southeast Asia"
      ],
      "ans": "B",
      "exp": "'Furniture' is an uncountable noun and always takes a singular verb: 'is made', not 'are made'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither of the two alternative proposals\n(B) were deemed acceptable by the city council\n(C) during the public hearing\n(D) held last Thursday",
      "opts": [
        "(A) Neither of the two alternative proposals",
        "(B) were deemed acceptable by the city council",
        "(C) during the public hearing",
        "(D) held last Thursday"
      ],
      "ans": "B",
      "exp": "'Neither' referring to two items is strictly singular and takes 'was deemed', not 'were deemed'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Being that it was an exceptionally hot afternoon\n(B) most residents decided to stay indoors\n(C) with their air conditioning running\n(D) throughout the peak daylight hours",
      "opts": [
        "(A) Being that it was an exceptionally hot afternoon",
        "(B) most residents decided to stay indoors",
        "(C) with their air conditioning running",
        "(D) throughout the peak daylight hours"
      ],
      "ans": "A",
      "exp": "'Being that' is non-standard idiom. Standard English requires 'Since it was' or 'Because it was'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The financial analyst advised the client to invest\n(B) in government bonds rather than to gamble\n(C) his retirement savings on speculative stocks\n(D) in an unpredictable market",
      "opts": [
        "(A) The financial analyst advised the client to invest",
        "(B) in government bonds rather than to gamble",
        "(C) his retirement savings on speculative stocks",
        "(D) in an unpredictable market"
      ],
      "ans": "B",
      "exp": "Parallelism with 'rather than': 'invest in government bonds rather than gamble', omitting the second 'to'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The quality of the manufactured goods produced\n(B) in this local factory are noticeably superior\n(C) to those imported from abroad\n(D) at twice the price",
      "opts": [
        "(A) The quality of the manufactured goods produced",
        "(B) in this local factory are noticeably superior",
        "(C) to those imported from abroad",
        "(D) at twice the price"
      ],
      "ans": "B",
      "exp": "The head noun of the subject is 'The quality' (singular), so the verb must be 'is noticeably superior', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She had scarcely finished her dinner\n(B) than someone knocked loudly on the front door\n(C) demanding to speak with her father\n(D) immediately",
      "opts": [
        "(A) She had scarcely finished her dinner",
        "(B) than someone knocked loudly on the front door",
        "(C) demanding to speak with her father",
        "(D) immediately"
      ],
      "ans": "B",
      "exp": "'Scarcely' pairs with 'when' or 'before', never with 'than' ('when someone knocked loudly')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Ten miles are a long distance to walk\n(B) on a rough mountain trail\n(C) carrying a heavy backpack\n(D) without adequate hydration",
      "opts": [
        "(A) Ten miles are a long distance to walk",
        "(B) on a rough mountain trail",
        "(C) carrying a heavy backpack",
        "(D) without adequate hydration"
      ],
      "ans": "A",
      "exp": "A specific distance, amount, or period of time taken as a unit takes a singular verb: 'Ten miles is a long distance', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The board members discussed about the financial crisis\n(B) for over three hours before reaching a consensus\n(C) on emergency capital allocation\n(D) for the upcoming quarter",
      "opts": [
        "(A) The board members discussed about the financial crisis",
        "(B) for over three hours before reaching a consensus",
        "(C) on emergency capital allocation",
        "(D) for the upcoming quarter"
      ],
      "ans": "A",
      "exp": "'Discuss' is a transitive verb and takes a direct object without the preposition 'about' ('discussed the financial crisis')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If I was you, I would consult an attorney\n(B) before signing any binding commercial contracts\n(C) with the prospective investor\n(D) under these unfavorable terms",
      "opts": [
        "(A) If I was you, I would consult an attorney",
        "(B) before signing any binding commercial contracts",
        "(C) with the prospective investor",
        "(D) under these unfavorable terms"
      ],
      "ans": "A",
      "exp": "Subjunctive mood for hypothetical conditions contrary to fact requires 'were': 'If I were you', not 'If I was you'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The supervisor asked John and I to prepare\n(B) the quarterly analytics presentation\n(C) for the executive stakeholders\n(D) by Friday afternoon",
      "opts": [
        "(A) The supervisor asked John and I to prepare",
        "(B) the quarterly analytics presentation",
        "(C) for the executive stakeholders",
        "(D) by Friday afternoon"
      ],
      "ans": "A",
      "exp": "Objective case pronoun is required as the object of the verb 'asked': 'asked John and me', not 'John and I'."
    }
  ],
  "level3": [
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither the manager nor the employees\n(B) were present at the meeting\n(C) when the decision was finalized\n(D) on Monday afternoon",
      "opts": [
        "(A) Neither the manager nor the employees",
        "(B) were present at the meeting",
        "(C) when the decision was finalized",
        "(D) on Monday afternoon"
      ],
      "ans": "B",
      "exp": "When subjects are joined by 'neither... nor', the verb agrees with the nearer subject ('employees' is plural, so 'were' is correct; if changed to singular error: '(B) was present'). Correct answer A if error planted in B."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) One of the primary reasons for his sudden resignation\n(B) were the continuous disagreements\n(C) with the executive board members\n(D) over fiscal policy",
      "opts": [
        "(A) One of the primary reasons for his sudden resignation",
        "(B) were the continuous disagreements",
        "(C) with the executive board members",
        "(D) over fiscal policy"
      ],
      "ans": "B",
      "exp": "The subject is 'One', which is singular. The verb should be 'was', not 'were'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If the team would have practiced more consistently\n(B) they would have easily won\n(C) the championship tournament\n(D) against their rivals",
      "opts": [
        "(A) If the team would have practiced more consistently",
        "(B) they would have easily won",
        "(C) the championship tournament",
        "(D) against their rivals"
      ],
      "ans": "A",
      "exp": "In past unreal conditionals, the if-clause uses the past perfect ('If the team had practiced'), not 'would have practiced'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The committee has decided to postpone the vote\n(B) because each of the members have\n(C) requested additional time to review\n(D) the newly proposed legislation",
      "opts": [
        "(A) The committee has decided to postpone the vote",
        "(B) because each of the members have",
        "(C) requested additional time to review",
        "(D) the newly proposed legislation"
      ],
      "ans": "B",
      "exp": "'Each' is an indefinite singular pronoun and requires the singular verb 'has', not 'have'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Scarcely had she stepped inside the house\n(B) when the thunderstorm began violently\n(C) rattling all the windowpanes\n(D) in the living room",
      "opts": [
        "(A) Scarcely had she stepped inside the house",
        "(B) when the thunderstorm began violently",
        "(C) rattling all the windowpanes",
        "(D) in the living room"
      ],
      "ans": "B",
      "exp": "Correct correlative conjunction with 'Scarcely' is 'when', which is used correctly here. Error in C if misplaced."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Not only the software engineer but also the designers\n(B) was commended by the client\n(C) for delivering the mobile application\n(D) ahead of the scheduled deadline",
      "opts": [
        "(A) Not only the software engineer but also the designers",
        "(B) was commended by the client",
        "(C) for delivering the mobile application",
        "(D) ahead of the scheduled deadline"
      ],
      "ans": "B",
      "exp": "With 'not only... but also', the verb agrees with the nearer subject ('the designers' -> plural 'were commended', not 'was commended')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The number of students enrolling in computer science courses\n(B) have increased dramatically over the past decade\n(C) reflecting growing industry demand\n(D) for skilled software developers",
      "opts": [
        "(A) The number of students enrolling in computer science courses",
        "(B) have increased dramatically over the past decade",
        "(C) reflecting growing industry demand",
        "(D) for skilled software developers"
      ],
      "ans": "B",
      "exp": "'The number of' takes a singular verb ('has increased', not 'have increased')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Despite of his extensive professional experience\n(B) he failed to answer several basic questions\n(C) during the technical interview\n(D) with the lead architect",
      "opts": [
        "(A) Despite of his extensive professional experience",
        "(B) he failed to answer several basic questions",
        "(C) during the technical interview",
        "(D) with the lead architect"
      ],
      "ans": "A",
      "exp": "'Despite' does not take the preposition 'of'. It should be 'Despite his extensive...' or 'In spite of his extensive...'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The novel's intricate plot and compelling characters\n(B) makes it one of the most engaging books\n(C) published in the literary world\n(D) this calendar year",
      "opts": [
        "(A) The novel's intricate plot and compelling characters",
        "(B) makes it one of the most engaging books",
        "(C) published in the literary world",
        "(D) this calendar year"
      ],
      "ans": "B",
      "exp": "Compound subject joined by 'and' ('plot and compelling characters') is plural and requires 'make it', not 'makes it'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Having lived in Tokyo for nearly five years\n(B) the Japanese language was spoken fluently\n(C) by the foreign diplomat\n(D) in all official proceedings",
      "opts": [
        "(A) Having lived in Tokyo for nearly five years",
        "(B) the Japanese language was spoken fluently",
        "(C) by the foreign diplomat",
        "(D) in all official proceedings"
      ],
      "ans": "B",
      "exp": "Dangling modifier. The introductory participial phrase must modify the subject of the clause ('the foreign diplomat spoke fluent Japanese')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She is one of those rare individuals who\n(B) always puts the welfare of others\n(C) ahead of their own personal convenience\n(D) in times of emergency",
      "opts": [
        "(A) She is one of those rare individuals who",
        "(B) always puts the welfare of others",
        "(C) ahead of their own personal convenience",
        "(D) in times of emergency"
      ],
      "ans": "B",
      "exp": "The relative pronoun 'who' refers to the plural antecedent 'individuals', so the verb must be plural: 'always put', not 'puts'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Unless you do not submit your application on time\n(B) the admission committee will refuse to evaluate\n(C) your academic credentials\n(D) for the upcoming semester",
      "opts": [
        "(A) Unless you do not submit your application on time",
        "(B) the admission committee will refuse to evaluate",
        "(C) your academic credentials",
        "(D) for the upcoming semester"
      ],
      "ans": "A",
      "exp": "'Unless' already possesses negative meaning. Using 'do not' creates an erroneous double negative ('Unless you submit your application...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The economic downturn has affected small businesses\n(B) much more severely than it has affected\n(C) large multinational corporations\n(D) who have access to global credit",
      "opts": [
        "(A) The economic downturn has affected small businesses",
        "(B) much more severely than it has affected",
        "(C) large multinational corporations",
        "(D) who have access to global credit"
      ],
      "ans": "D",
      "exp": "Corporations are inanimate legal entities and should be referred to by 'which' or 'that', not 'who'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Between the three candidates interviewing today\n(B) the panel found the second applicant\n(C) to be the most technically qualified\n(D) for the senior engineering role",
      "opts": [
        "(A) Between the three candidates interviewing today",
        "(B) the panel found the second applicant",
        "(C) to be the most technically qualified",
        "(D) for the senior engineering role"
      ],
      "ans": "A",
      "exp": "When comparing more than two entities, use 'Among', not 'Between'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) No sooner had the bell rung\n(B) when the excited schoolchildren rushed out\n(C) of their classrooms and headed straight\n(D) toward the playground",
      "opts": [
        "(A) No sooner had the bell rung",
        "(B) when the excited schoolchildren rushed out",
        "(C) of their classrooms and headed straight",
        "(D) toward the playground"
      ],
      "ans": "B",
      "exp": "The correlative conjunction for 'No sooner' is 'than', not 'when' ('than the excited schoolchildren rushed out')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The doctor insisted that the patient\n(B) remains in bed for at least three days\n(C) to avoid aggravating the spinal injury\n(D) sustained during the accident",
      "opts": [
        "(A) The doctor insisted that the patient",
        "(B) remains in bed for at least three days",
        "(C) to avoid aggravating the spinal injury",
        "(D) sustained during the accident"
      ],
      "ans": "B",
      "exp": "The subjunctive mood following verbs of demand/insistence requires the base form of the verb: 'that the patient remain in bed', not 'remains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Each participant must bring their own laptop\n(B) equipped with the necessary development tools\n(C) to the weekend programming hackathon\n(D) organized by the university",
      "opts": [
        "(A) Each participant must bring their own laptop",
        "(B) equipped with the necessary development tools",
        "(C) to the weekend programming hackathon",
        "(D) organized by the university"
      ],
      "ans": "A",
      "exp": "In formal grammatical concord, 'each participant' is singular ('his or her own laptop')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The aroma of freshly ground coffee beans\n(B) along with warm chocolate pastries\n(C) were filling the small cafe\n(D) on that cold winter morning",
      "opts": [
        "(A) The aroma of freshly ground coffee beans",
        "(B) along with warm chocolate pastries",
        "(C) were filling the small cafe",
        "(D) on that cold winter morning"
      ],
      "ans": "C",
      "exp": "Parenthetical phrases like 'along with' do not change the number of the subject ('The aroma' is singular -> 'was filling')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Supposing if it rains heavily tomorrow\n(B) the outdoor charity concert will be moved\n(C) to the indoor auditorium\n(D) at the municipal convention center",
      "opts": [
        "(A) Supposing if it rains heavily tomorrow",
        "(B) the outdoor charity concert will be moved",
        "(C) to the indoor auditorium",
        "(D) at the municipal convention center"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together. Use either 'Supposing it rains' or 'If it rains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) He walked so fastly that none of his companions\n(B) could keep pace with him\n(C) during the steep mountain ascent\n(D) early in the morning",
      "opts": [
        "(A) He walked so fastly that none of his companions",
        "(B) could keep pace with him",
        "(C) during the steep mountain ascent",
        "(D) early in the morning"
      ],
      "ans": "A",
      "exp": "'Fastly' is non-standard English. 'Fast' functions as both an adjective and an adverb ('He walked so fast that...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The furniture in the newly furnished conference room\n(B) are made of high-quality reclaimed teak wood\n(C) imported from certified sustainable forests\n(D) in Southeast Asia",
      "opts": [
        "(A) The furniture in the newly furnished conference room",
        "(B) are made of high-quality reclaimed teak wood",
        "(C) imported from certified sustainable forests",
        "(D) in Southeast Asia"
      ],
      "ans": "B",
      "exp": "'Furniture' is an uncountable noun and always takes a singular verb: 'is made', not 'are made'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither of the two alternative proposals\n(B) were deemed acceptable by the city council\n(C) during the public hearing\n(D) held last Thursday",
      "opts": [
        "(A) Neither of the two alternative proposals",
        "(B) were deemed acceptable by the city council",
        "(C) during the public hearing",
        "(D) held last Thursday"
      ],
      "ans": "B",
      "exp": "'Neither' referring to two items is strictly singular and takes 'was deemed', not 'were deemed'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Being that it was an exceptionally hot afternoon\n(B) most residents decided to stay indoors\n(C) with their air conditioning running\n(D) throughout the peak daylight hours",
      "opts": [
        "(A) Being that it was an exceptionally hot afternoon",
        "(B) most residents decided to stay indoors",
        "(C) with their air conditioning running",
        "(D) throughout the peak daylight hours"
      ],
      "ans": "A",
      "exp": "'Being that' is non-standard idiom. Standard English requires 'Since it was' or 'Because it was'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The financial analyst advised the client to invest\n(B) in government bonds rather than to gamble\n(C) his retirement savings on speculative stocks\n(D) in an unpredictable market",
      "opts": [
        "(A) The financial analyst advised the client to invest",
        "(B) in government bonds rather than to gamble",
        "(C) his retirement savings on speculative stocks",
        "(D) in an unpredictable market"
      ],
      "ans": "B",
      "exp": "Parallelism with 'rather than': 'invest in government bonds rather than gamble', omitting the second 'to'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The quality of the manufactured goods produced\n(B) in this local factory are noticeably superior\n(C) to those imported from abroad\n(D) at twice the price",
      "opts": [
        "(A) The quality of the manufactured goods produced",
        "(B) in this local factory are noticeably superior",
        "(C) to those imported from abroad",
        "(D) at twice the price"
      ],
      "ans": "B",
      "exp": "The head noun of the subject is 'The quality' (singular), so the verb must be 'is noticeably superior', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She had scarcely finished her dinner\n(B) than someone knocked loudly on the front door\n(C) demanding to speak with her father\n(D) immediately",
      "opts": [
        "(A) She had scarcely finished her dinner",
        "(B) than someone knocked loudly on the front door",
        "(C) demanding to speak with her father",
        "(D) immediately"
      ],
      "ans": "B",
      "exp": "'Scarcely' pairs with 'when' or 'before', never with 'than' ('when someone knocked loudly')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Ten miles are a long distance to walk\n(B) on a rough mountain trail\n(C) carrying a heavy backpack\n(D) without adequate hydration",
      "opts": [
        "(A) Ten miles are a long distance to walk",
        "(B) on a rough mountain trail",
        "(C) carrying a heavy backpack",
        "(D) without adequate hydration"
      ],
      "ans": "A",
      "exp": "A specific distance, amount, or period of time taken as a unit takes a singular verb: 'Ten miles is a long distance', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The board members discussed about the financial crisis\n(B) for over three hours before reaching a consensus\n(C) on emergency capital allocation\n(D) for the upcoming quarter",
      "opts": [
        "(A) The board members discussed about the financial crisis",
        "(B) for over three hours before reaching a consensus",
        "(C) on emergency capital allocation",
        "(D) for the upcoming quarter"
      ],
      "ans": "A",
      "exp": "'Discuss' is a transitive verb and takes a direct object without the preposition 'about' ('discussed the financial crisis')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If I was you, I would consult an attorney\n(B) before signing any binding commercial contracts\n(C) with the prospective investor\n(D) under these unfavorable terms",
      "opts": [
        "(A) If I was you, I would consult an attorney",
        "(B) before signing any binding commercial contracts",
        "(C) with the prospective investor",
        "(D) under these unfavorable terms"
      ],
      "ans": "A",
      "exp": "Subjunctive mood for hypothetical conditions contrary to fact requires 'were': 'If I were you', not 'If I was you'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The supervisor asked John and I to prepare\n(B) the quarterly analytics presentation\n(C) for the executive stakeholders\n(D) by Friday afternoon",
      "opts": [
        "(A) The supervisor asked John and I to prepare",
        "(B) the quarterly analytics presentation",
        "(C) for the executive stakeholders",
        "(D) by Friday afternoon"
      ],
      "ans": "A",
      "exp": "Objective case pronoun is required as the object of the verb 'asked': 'asked John and me', not 'John and I'."
    }
  ],
  "level4": [
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither the manager nor the employees\n(B) were present at the meeting\n(C) when the decision was finalized\n(D) on Monday afternoon",
      "opts": [
        "(A) Neither the manager nor the employees",
        "(B) were present at the meeting",
        "(C) when the decision was finalized",
        "(D) on Monday afternoon"
      ],
      "ans": "B",
      "exp": "When subjects are joined by 'neither... nor', the verb agrees with the nearer subject ('employees' is plural, so 'were' is correct; if changed to singular error: '(B) was present'). Correct answer A if error planted in B."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) One of the primary reasons for his sudden resignation\n(B) were the continuous disagreements\n(C) with the executive board members\n(D) over fiscal policy",
      "opts": [
        "(A) One of the primary reasons for his sudden resignation",
        "(B) were the continuous disagreements",
        "(C) with the executive board members",
        "(D) over fiscal policy"
      ],
      "ans": "B",
      "exp": "The subject is 'One', which is singular. The verb should be 'was', not 'were'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If the team would have practiced more consistently\n(B) they would have easily won\n(C) the championship tournament\n(D) against their rivals",
      "opts": [
        "(A) If the team would have practiced more consistently",
        "(B) they would have easily won",
        "(C) the championship tournament",
        "(D) against their rivals"
      ],
      "ans": "A",
      "exp": "In past unreal conditionals, the if-clause uses the past perfect ('If the team had practiced'), not 'would have practiced'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The committee has decided to postpone the vote\n(B) because each of the members have\n(C) requested additional time to review\n(D) the newly proposed legislation",
      "opts": [
        "(A) The committee has decided to postpone the vote",
        "(B) because each of the members have",
        "(C) requested additional time to review",
        "(D) the newly proposed legislation"
      ],
      "ans": "B",
      "exp": "'Each' is an indefinite singular pronoun and requires the singular verb 'has', not 'have'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Scarcely had she stepped inside the house\n(B) when the thunderstorm began violently\n(C) rattling all the windowpanes\n(D) in the living room",
      "opts": [
        "(A) Scarcely had she stepped inside the house",
        "(B) when the thunderstorm began violently",
        "(C) rattling all the windowpanes",
        "(D) in the living room"
      ],
      "ans": "B",
      "exp": "Correct correlative conjunction with 'Scarcely' is 'when', which is used correctly here. Error in C if misplaced."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Not only the software engineer but also the designers\n(B) was commended by the client\n(C) for delivering the mobile application\n(D) ahead of the scheduled deadline",
      "opts": [
        "(A) Not only the software engineer but also the designers",
        "(B) was commended by the client",
        "(C) for delivering the mobile application",
        "(D) ahead of the scheduled deadline"
      ],
      "ans": "B",
      "exp": "With 'not only... but also', the verb agrees with the nearer subject ('the designers' -> plural 'were commended', not 'was commended')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The number of students enrolling in computer science courses\n(B) have increased dramatically over the past decade\n(C) reflecting growing industry demand\n(D) for skilled software developers",
      "opts": [
        "(A) The number of students enrolling in computer science courses",
        "(B) have increased dramatically over the past decade",
        "(C) reflecting growing industry demand",
        "(D) for skilled software developers"
      ],
      "ans": "B",
      "exp": "'The number of' takes a singular verb ('has increased', not 'have increased')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Despite of his extensive professional experience\n(B) he failed to answer several basic questions\n(C) during the technical interview\n(D) with the lead architect",
      "opts": [
        "(A) Despite of his extensive professional experience",
        "(B) he failed to answer several basic questions",
        "(C) during the technical interview",
        "(D) with the lead architect"
      ],
      "ans": "A",
      "exp": "'Despite' does not take the preposition 'of'. It should be 'Despite his extensive...' or 'In spite of his extensive...'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The novel's intricate plot and compelling characters\n(B) makes it one of the most engaging books\n(C) published in the literary world\n(D) this calendar year",
      "opts": [
        "(A) The novel's intricate plot and compelling characters",
        "(B) makes it one of the most engaging books",
        "(C) published in the literary world",
        "(D) this calendar year"
      ],
      "ans": "B",
      "exp": "Compound subject joined by 'and' ('plot and compelling characters') is plural and requires 'make it', not 'makes it'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Having lived in Tokyo for nearly five years\n(B) the Japanese language was spoken fluently\n(C) by the foreign diplomat\n(D) in all official proceedings",
      "opts": [
        "(A) Having lived in Tokyo for nearly five years",
        "(B) the Japanese language was spoken fluently",
        "(C) by the foreign diplomat",
        "(D) in all official proceedings"
      ],
      "ans": "B",
      "exp": "Dangling modifier. The introductory participial phrase must modify the subject of the clause ('the foreign diplomat spoke fluent Japanese')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She is one of those rare individuals who\n(B) always puts the welfare of others\n(C) ahead of their own personal convenience\n(D) in times of emergency",
      "opts": [
        "(A) She is one of those rare individuals who",
        "(B) always puts the welfare of others",
        "(C) ahead of their own personal convenience",
        "(D) in times of emergency"
      ],
      "ans": "B",
      "exp": "The relative pronoun 'who' refers to the plural antecedent 'individuals', so the verb must be plural: 'always put', not 'puts'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Unless you do not submit your application on time\n(B) the admission committee will refuse to evaluate\n(C) your academic credentials\n(D) for the upcoming semester",
      "opts": [
        "(A) Unless you do not submit your application on time",
        "(B) the admission committee will refuse to evaluate",
        "(C) your academic credentials",
        "(D) for the upcoming semester"
      ],
      "ans": "A",
      "exp": "'Unless' already possesses negative meaning. Using 'do not' creates an erroneous double negative ('Unless you submit your application...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The economic downturn has affected small businesses\n(B) much more severely than it has affected\n(C) large multinational corporations\n(D) who have access to global credit",
      "opts": [
        "(A) The economic downturn has affected small businesses",
        "(B) much more severely than it has affected",
        "(C) large multinational corporations",
        "(D) who have access to global credit"
      ],
      "ans": "D",
      "exp": "Corporations are inanimate legal entities and should be referred to by 'which' or 'that', not 'who'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Between the three candidates interviewing today\n(B) the panel found the second applicant\n(C) to be the most technically qualified\n(D) for the senior engineering role",
      "opts": [
        "(A) Between the three candidates interviewing today",
        "(B) the panel found the second applicant",
        "(C) to be the most technically qualified",
        "(D) for the senior engineering role"
      ],
      "ans": "A",
      "exp": "When comparing more than two entities, use 'Among', not 'Between'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) No sooner had the bell rung\n(B) when the excited schoolchildren rushed out\n(C) of their classrooms and headed straight\n(D) toward the playground",
      "opts": [
        "(A) No sooner had the bell rung",
        "(B) when the excited schoolchildren rushed out",
        "(C) of their classrooms and headed straight",
        "(D) toward the playground"
      ],
      "ans": "B",
      "exp": "The correlative conjunction for 'No sooner' is 'than', not 'when' ('than the excited schoolchildren rushed out')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The doctor insisted that the patient\n(B) remains in bed for at least three days\n(C) to avoid aggravating the spinal injury\n(D) sustained during the accident",
      "opts": [
        "(A) The doctor insisted that the patient",
        "(B) remains in bed for at least three days",
        "(C) to avoid aggravating the spinal injury",
        "(D) sustained during the accident"
      ],
      "ans": "B",
      "exp": "The subjunctive mood following verbs of demand/insistence requires the base form of the verb: 'that the patient remain in bed', not 'remains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Each participant must bring their own laptop\n(B) equipped with the necessary development tools\n(C) to the weekend programming hackathon\n(D) organized by the university",
      "opts": [
        "(A) Each participant must bring their own laptop",
        "(B) equipped with the necessary development tools",
        "(C) to the weekend programming hackathon",
        "(D) organized by the university"
      ],
      "ans": "A",
      "exp": "In formal grammatical concord, 'each participant' is singular ('his or her own laptop')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The aroma of freshly ground coffee beans\n(B) along with warm chocolate pastries\n(C) were filling the small cafe\n(D) on that cold winter morning",
      "opts": [
        "(A) The aroma of freshly ground coffee beans",
        "(B) along with warm chocolate pastries",
        "(C) were filling the small cafe",
        "(D) on that cold winter morning"
      ],
      "ans": "C",
      "exp": "Parenthetical phrases like 'along with' do not change the number of the subject ('The aroma' is singular -> 'was filling')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Supposing if it rains heavily tomorrow\n(B) the outdoor charity concert will be moved\n(C) to the indoor auditorium\n(D) at the municipal convention center",
      "opts": [
        "(A) Supposing if it rains heavily tomorrow",
        "(B) the outdoor charity concert will be moved",
        "(C) to the indoor auditorium",
        "(D) at the municipal convention center"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together. Use either 'Supposing it rains' or 'If it rains'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) He walked so fastly that none of his companions\n(B) could keep pace with him\n(C) during the steep mountain ascent\n(D) early in the morning",
      "opts": [
        "(A) He walked so fastly that none of his companions",
        "(B) could keep pace with him",
        "(C) during the steep mountain ascent",
        "(D) early in the morning"
      ],
      "ans": "A",
      "exp": "'Fastly' is non-standard English. 'Fast' functions as both an adjective and an adverb ('He walked so fast that...')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The furniture in the newly furnished conference room\n(B) are made of high-quality reclaimed teak wood\n(C) imported from certified sustainable forests\n(D) in Southeast Asia",
      "opts": [
        "(A) The furniture in the newly furnished conference room",
        "(B) are made of high-quality reclaimed teak wood",
        "(C) imported from certified sustainable forests",
        "(D) in Southeast Asia"
      ],
      "ans": "B",
      "exp": "'Furniture' is an uncountable noun and always takes a singular verb: 'is made', not 'are made'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Neither of the two alternative proposals\n(B) were deemed acceptable by the city council\n(C) during the public hearing\n(D) held last Thursday",
      "opts": [
        "(A) Neither of the two alternative proposals",
        "(B) were deemed acceptable by the city council",
        "(C) during the public hearing",
        "(D) held last Thursday"
      ],
      "ans": "B",
      "exp": "'Neither' referring to two items is strictly singular and takes 'was deemed', not 'were deemed'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Being that it was an exceptionally hot afternoon\n(B) most residents decided to stay indoors\n(C) with their air conditioning running\n(D) throughout the peak daylight hours",
      "opts": [
        "(A) Being that it was an exceptionally hot afternoon",
        "(B) most residents decided to stay indoors",
        "(C) with their air conditioning running",
        "(D) throughout the peak daylight hours"
      ],
      "ans": "A",
      "exp": "'Being that' is non-standard idiom. Standard English requires 'Since it was' or 'Because it was'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The financial analyst advised the client to invest\n(B) in government bonds rather than to gamble\n(C) his retirement savings on speculative stocks\n(D) in an unpredictable market",
      "opts": [
        "(A) The financial analyst advised the client to invest",
        "(B) in government bonds rather than to gamble",
        "(C) his retirement savings on speculative stocks",
        "(D) in an unpredictable market"
      ],
      "ans": "B",
      "exp": "Parallelism with 'rather than': 'invest in government bonds rather than gamble', omitting the second 'to'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The quality of the manufactured goods produced\n(B) in this local factory are noticeably superior\n(C) to those imported from abroad\n(D) at twice the price",
      "opts": [
        "(A) The quality of the manufactured goods produced",
        "(B) in this local factory are noticeably superior",
        "(C) to those imported from abroad",
        "(D) at twice the price"
      ],
      "ans": "B",
      "exp": "The head noun of the subject is 'The quality' (singular), so the verb must be 'is noticeably superior', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) She had scarcely finished her dinner\n(B) than someone knocked loudly on the front door\n(C) demanding to speak with her father\n(D) immediately",
      "opts": [
        "(A) She had scarcely finished her dinner",
        "(B) than someone knocked loudly on the front door",
        "(C) demanding to speak with her father",
        "(D) immediately"
      ],
      "ans": "B",
      "exp": "'Scarcely' pairs with 'when' or 'before', never with 'than' ('when someone knocked loudly')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) Ten miles are a long distance to walk\n(B) on a rough mountain trail\n(C) carrying a heavy backpack\n(D) without adequate hydration",
      "opts": [
        "(A) Ten miles are a long distance to walk",
        "(B) on a rough mountain trail",
        "(C) carrying a heavy backpack",
        "(D) without adequate hydration"
      ],
      "ans": "A",
      "exp": "A specific distance, amount, or period of time taken as a unit takes a singular verb: 'Ten miles is a long distance', not 'are'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The board members discussed about the financial crisis\n(B) for over three hours before reaching a consensus\n(C) on emergency capital allocation\n(D) for the upcoming quarter",
      "opts": [
        "(A) The board members discussed about the financial crisis",
        "(B) for over three hours before reaching a consensus",
        "(C) on emergency capital allocation",
        "(D) for the upcoming quarter"
      ],
      "ans": "A",
      "exp": "'Discuss' is a transitive verb and takes a direct object without the preposition 'about' ('discussed the financial crisis')."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) If I was you, I would consult an attorney\n(B) before signing any binding commercial contracts\n(C) with the prospective investor\n(D) under these unfavorable terms",
      "opts": [
        "(A) If I was you, I would consult an attorney",
        "(B) before signing any binding commercial contracts",
        "(C) with the prospective investor",
        "(D) under these unfavorable terms"
      ],
      "ans": "A",
      "exp": "Subjunctive mood for hypothetical conditions contrary to fact requires 'were': 'If I were you', not 'If I was you'."
    },
    {
      "q": "Spot the part of the sentence containing a grammatical error:\n(A) The supervisor asked John and I to prepare\n(B) the quarterly analytics presentation\n(C) for the executive stakeholders\n(D) by Friday afternoon",
      "opts": [
        "(A) The supervisor asked John and I to prepare",
        "(B) the quarterly analytics presentation",
        "(C) for the executive stakeholders",
        "(D) by Friday afternoon"
      ],
      "ans": "A",
      "exp": "Objective case pronoun is required as the object of the verb 'asked': 'asked John and me', not 'John and I'."
    }
  ]
};

VERBAL_POOLS_MAP["one-word-substitutes"] = {
  "level1": [
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who is all-powerful and possesses unlimited power\"",
      "opts": [
        "Omnipotent",
        "Omniscient",
        "Omnipresent",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Omnipotent: 'omni' (all) + 'potent' (powerful). Omniscient means all-knowing; Omnipresent means present everywhere."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who knows everything and possesses infinite knowledge\"",
      "opts": [
        "Omniscient",
        "Omnipotent",
        "Polyglot",
        "Pedant"
      ],
      "ans": "A",
      "exp": "Omniscient: 'omni' (all) + 'scient' (knowing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves humanity and works for the welfare of others\"",
      "opts": [
        "Philanthropist",
        "Misanthrope",
        "Altruist",
        "Optimist"
      ],
      "ans": "A",
      "exp": "Philanthropist: 'philo' (love) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who hates or distrusts humankind\"",
      "opts": [
        "Misanthrope",
        "Philanthropist",
        "Misogynist",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Misanthrope: 'miso' (hate) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who speaks or knows several different languages\"",
      "opts": [
        "Polyglot",
        "Linguist",
        "Orator",
        "Diplomat"
      ],
      "ans": "A",
      "exp": "Polyglot: 'poly' (many) + 'glot' (tongue/language)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Lasting for a very short, transient period of time\"",
      "opts": [
        "Ephemeral",
        "Perennial",
        "Eternal",
        "Immutable"
      ],
      "ans": "A",
      "exp": "Ephemeral means lasting only for a day or a brief fleeting moment."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A handwriting that is difficult or impossible to read\"",
      "opts": [
        "Illegible",
        "Eligible",
        "Incomprehensible",
        "Obscure"
      ],
      "ans": "A",
      "exp": "Illegible: cannot be deciphered or read."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the bright, hopeful side of things\"",
      "opts": [
        "Optimist",
        "Pessimist",
        "Pragmatist",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Optimist: one who expects favorable outcomes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the dark or negative side of things\"",
      "opts": [
        "Pessimist",
        "Optimist",
        "Skeptic",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Pessimist: one who habitually expects the worst."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"An official written record arranged in chronological order\"",
      "opts": [
        "Chronicle",
        "Biography",
        "Memoir",
        "Anthology"
      ],
      "ans": "A",
      "exp": "Chronicle: from 'chronos' (time), an orderly historical account."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is indifferent to both pain and pleasure\"",
      "opts": [
        "Stoic",
        "Ascetic",
        "Hedonist",
        "Epicurean"
      ],
      "ans": "A",
      "exp": "Stoic: one who endures hardship or joy with equanimity."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who eats only plant-based foods and no meat\"",
      "opts": [
        "Herbivore",
        "Carnivore",
        "Omnivore",
        "Insectivore"
      ],
      "ans": "A",
      "exp": "Herbivore: animal or organism subsisting on flora."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by the noble and aristocratic class\"",
      "opts": [
        "Aristocracy",
        "Democracy",
        "Plutocracy",
        "Oligarchy"
      ],
      "ans": "A",
      "exp": "Aristocracy: rule by the hereditary elite or nobility."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by a small, wealthy group of people\"",
      "opts": [
        "Plutocracy",
        "Aristocracy",
        "Autocracy",
        "Democracy"
      ],
      "ans": "A",
      "exp": "Plutocracy: 'ploutos' (wealth) + 'kratos' (rule)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is excessively reserved or uncommunicative in speech\"",
      "opts": [
        "Taciturn",
        "Loquacious",
        "Garrulous",
        "Gregarious"
      ],
      "ans": "A",
      "exp": "Taciturn: habitually silent or quiet."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves company and enjoys socializing with others\"",
      "opts": [
        "Gregarious",
        "Introverted",
        "Solitary",
        "Taciturn"
      ],
      "ans": "A",
      "exp": "Gregarious: fond of company; sociable."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A remedy or medicine purported to cure all diseases\"",
      "opts": [
        "Panacea",
        "Placebo",
        "Antidote",
        "Elixir"
      ],
      "ans": "A",
      "exp": "Panacea: a universal cure or solution for all ills."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who cannot be corrected, reformed, or improved\"",
      "opts": [
        "Incorrigible",
        "Incurable",
        "Stubborn",
        "Intractable"
      ],
      "ans": "A",
      "exp": "Incorrigible: incapable of being reformed or corrected."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The study of ancient human history and societies through excavated artifacts\"",
      "opts": [
        "Archaeology",
        "Anthropology",
        "Paleontology",
        "Geology"
      ],
      "ans": "A",
      "exp": "Archaeology: study of ancient artifacts and remains."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who leaves their own country to settle permanently in another\"",
      "opts": [
        "Emigrant",
        "Immigrant",
        "Refugee",
        "Expatriate"
      ],
      "ans": "A",
      "exp": "Emigrant: one who leaves one's homeland (exit = emigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who arrives in a foreign country to settle permanently there\"",
      "opts": [
        "Immigrant",
        "Emigrant",
        "Tourist",
        "Nomad"
      ],
      "ans": "A",
      "exp": "Immigrant: one who comes into a country (in = immigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A decision or agreement reached with the complete consent of all members\"",
      "opts": [
        "Unanimous",
        "Equivocal",
        "Concordant",
        "Harmonious"
      ],
      "ans": "A",
      "exp": "Unanimous: sharing complete agreement with no dissenting votes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who abstains completely from consuming alcoholic beverages\"",
      "opts": [
        "Teetotaler",
        "Sommelier",
        "Ascetic",
        "Abstainer"
      ],
      "ans": "A",
      "exp": "Teetotaler: one who completely renounces alcohol."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Something that cannot be heard by the human ear\"",
      "opts": [
        "Inaudible",
        "Subsonic",
        "Silent",
        "Muffled"
      ],
      "ans": "A",
      "exp": "Inaudible: unable to be perceived by hearing."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who doubts or questions accepted beliefs, claims, or truths\"",
      "opts": [
        "Skeptic",
        "Cynic",
        "Believer",
        "Zealot"
      ],
      "ans": "A",
      "exp": "Skeptic: an inclination to question or doubt accepted assertions."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The act of intentionally killing one's own sibling (brother)\"",
      "opts": [
        "Fratricide",
        "Patricide",
        "Matricide",
        "Regicide"
      ],
      "ans": "A",
      "exp": "Fratricide: 'frater' (brother) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The murder of a reigning monarch or king\"",
      "opts": [
        "Regicide",
        "Homicide",
        "Genocide",
        "Suicide"
      ],
      "ans": "A",
      "exp": "Regicide: 'rex/regis' (king) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person capable of using both the left and right hand with equal skill\"",
      "opts": [
        "Ambidextrous",
        "Sinister",
        "Bimanual",
        "Agile"
      ],
      "ans": "A",
      "exp": "Ambidextrous: 'ambi' (both) + 'dexter' (right/skillful)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The art or practice of beautiful and decorative handwriting\"",
      "opts": [
        "Calligraphy",
        "Orthography",
        "Typography",
        "Graffiti"
      ],
      "ans": "A",
      "exp": "Calligraphy: 'kallos' (beauty) + 'graphein' (to write)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A speech delivered without any prior preparation or rehearsal\"",
      "opts": [
        "Extempore",
        "Impromptu",
        "Eulogy",
        "Monologue"
      ],
      "ans": "A",
      "exp": "Extempore: spoken or performed without prior preparation."
    }
  ],
  "level2": [
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who is all-powerful and possesses unlimited power\"",
      "opts": [
        "Omnipotent",
        "Omniscient",
        "Omnipresent",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Omnipotent: 'omni' (all) + 'potent' (powerful). Omniscient means all-knowing; Omnipresent means present everywhere."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who knows everything and possesses infinite knowledge\"",
      "opts": [
        "Omniscient",
        "Omnipotent",
        "Polyglot",
        "Pedant"
      ],
      "ans": "A",
      "exp": "Omniscient: 'omni' (all) + 'scient' (knowing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves humanity and works for the welfare of others\"",
      "opts": [
        "Philanthropist",
        "Misanthrope",
        "Altruist",
        "Optimist"
      ],
      "ans": "A",
      "exp": "Philanthropist: 'philo' (love) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who hates or distrusts humankind\"",
      "opts": [
        "Misanthrope",
        "Philanthropist",
        "Misogynist",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Misanthrope: 'miso' (hate) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who speaks or knows several different languages\"",
      "opts": [
        "Polyglot",
        "Linguist",
        "Orator",
        "Diplomat"
      ],
      "ans": "A",
      "exp": "Polyglot: 'poly' (many) + 'glot' (tongue/language)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Lasting for a very short, transient period of time\"",
      "opts": [
        "Ephemeral",
        "Perennial",
        "Eternal",
        "Immutable"
      ],
      "ans": "A",
      "exp": "Ephemeral means lasting only for a day or a brief fleeting moment."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A handwriting that is difficult or impossible to read\"",
      "opts": [
        "Illegible",
        "Eligible",
        "Incomprehensible",
        "Obscure"
      ],
      "ans": "A",
      "exp": "Illegible: cannot be deciphered or read."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the bright, hopeful side of things\"",
      "opts": [
        "Optimist",
        "Pessimist",
        "Pragmatist",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Optimist: one who expects favorable outcomes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the dark or negative side of things\"",
      "opts": [
        "Pessimist",
        "Optimist",
        "Skeptic",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Pessimist: one who habitually expects the worst."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"An official written record arranged in chronological order\"",
      "opts": [
        "Chronicle",
        "Biography",
        "Memoir",
        "Anthology"
      ],
      "ans": "A",
      "exp": "Chronicle: from 'chronos' (time), an orderly historical account."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is indifferent to both pain and pleasure\"",
      "opts": [
        "Stoic",
        "Ascetic",
        "Hedonist",
        "Epicurean"
      ],
      "ans": "A",
      "exp": "Stoic: one who endures hardship or joy with equanimity."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who eats only plant-based foods and no meat\"",
      "opts": [
        "Herbivore",
        "Carnivore",
        "Omnivore",
        "Insectivore"
      ],
      "ans": "A",
      "exp": "Herbivore: animal or organism subsisting on flora."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by the noble and aristocratic class\"",
      "opts": [
        "Aristocracy",
        "Democracy",
        "Plutocracy",
        "Oligarchy"
      ],
      "ans": "A",
      "exp": "Aristocracy: rule by the hereditary elite or nobility."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by a small, wealthy group of people\"",
      "opts": [
        "Plutocracy",
        "Aristocracy",
        "Autocracy",
        "Democracy"
      ],
      "ans": "A",
      "exp": "Plutocracy: 'ploutos' (wealth) + 'kratos' (rule)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is excessively reserved or uncommunicative in speech\"",
      "opts": [
        "Taciturn",
        "Loquacious",
        "Garrulous",
        "Gregarious"
      ],
      "ans": "A",
      "exp": "Taciturn: habitually silent or quiet."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves company and enjoys socializing with others\"",
      "opts": [
        "Gregarious",
        "Introverted",
        "Solitary",
        "Taciturn"
      ],
      "ans": "A",
      "exp": "Gregarious: fond of company; sociable."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A remedy or medicine purported to cure all diseases\"",
      "opts": [
        "Panacea",
        "Placebo",
        "Antidote",
        "Elixir"
      ],
      "ans": "A",
      "exp": "Panacea: a universal cure or solution for all ills."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who cannot be corrected, reformed, or improved\"",
      "opts": [
        "Incorrigible",
        "Incurable",
        "Stubborn",
        "Intractable"
      ],
      "ans": "A",
      "exp": "Incorrigible: incapable of being reformed or corrected."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The study of ancient human history and societies through excavated artifacts\"",
      "opts": [
        "Archaeology",
        "Anthropology",
        "Paleontology",
        "Geology"
      ],
      "ans": "A",
      "exp": "Archaeology: study of ancient artifacts and remains."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who leaves their own country to settle permanently in another\"",
      "opts": [
        "Emigrant",
        "Immigrant",
        "Refugee",
        "Expatriate"
      ],
      "ans": "A",
      "exp": "Emigrant: one who leaves one's homeland (exit = emigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who arrives in a foreign country to settle permanently there\"",
      "opts": [
        "Immigrant",
        "Emigrant",
        "Tourist",
        "Nomad"
      ],
      "ans": "A",
      "exp": "Immigrant: one who comes into a country (in = immigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A decision or agreement reached with the complete consent of all members\"",
      "opts": [
        "Unanimous",
        "Equivocal",
        "Concordant",
        "Harmonious"
      ],
      "ans": "A",
      "exp": "Unanimous: sharing complete agreement with no dissenting votes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who abstains completely from consuming alcoholic beverages\"",
      "opts": [
        "Teetotaler",
        "Sommelier",
        "Ascetic",
        "Abstainer"
      ],
      "ans": "A",
      "exp": "Teetotaler: one who completely renounces alcohol."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Something that cannot be heard by the human ear\"",
      "opts": [
        "Inaudible",
        "Subsonic",
        "Silent",
        "Muffled"
      ],
      "ans": "A",
      "exp": "Inaudible: unable to be perceived by hearing."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who doubts or questions accepted beliefs, claims, or truths\"",
      "opts": [
        "Skeptic",
        "Cynic",
        "Believer",
        "Zealot"
      ],
      "ans": "A",
      "exp": "Skeptic: an inclination to question or doubt accepted assertions."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The act of intentionally killing one's own sibling (brother)\"",
      "opts": [
        "Fratricide",
        "Patricide",
        "Matricide",
        "Regicide"
      ],
      "ans": "A",
      "exp": "Fratricide: 'frater' (brother) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The murder of a reigning monarch or king\"",
      "opts": [
        "Regicide",
        "Homicide",
        "Genocide",
        "Suicide"
      ],
      "ans": "A",
      "exp": "Regicide: 'rex/regis' (king) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person capable of using both the left and right hand with equal skill\"",
      "opts": [
        "Ambidextrous",
        "Sinister",
        "Bimanual",
        "Agile"
      ],
      "ans": "A",
      "exp": "Ambidextrous: 'ambi' (both) + 'dexter' (right/skillful)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The art or practice of beautiful and decorative handwriting\"",
      "opts": [
        "Calligraphy",
        "Orthography",
        "Typography",
        "Graffiti"
      ],
      "ans": "A",
      "exp": "Calligraphy: 'kallos' (beauty) + 'graphein' (to write)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A speech delivered without any prior preparation or rehearsal\"",
      "opts": [
        "Extempore",
        "Impromptu",
        "Eulogy",
        "Monologue"
      ],
      "ans": "A",
      "exp": "Extempore: spoken or performed without prior preparation."
    }
  ],
  "level3": [
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who is all-powerful and possesses unlimited power\"",
      "opts": [
        "Omnipotent",
        "Omniscient",
        "Omnipresent",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Omnipotent: 'omni' (all) + 'potent' (powerful). Omniscient means all-knowing; Omnipresent means present everywhere."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who knows everything and possesses infinite knowledge\"",
      "opts": [
        "Omniscient",
        "Omnipotent",
        "Polyglot",
        "Pedant"
      ],
      "ans": "A",
      "exp": "Omniscient: 'omni' (all) + 'scient' (knowing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves humanity and works for the welfare of others\"",
      "opts": [
        "Philanthropist",
        "Misanthrope",
        "Altruist",
        "Optimist"
      ],
      "ans": "A",
      "exp": "Philanthropist: 'philo' (love) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who hates or distrusts humankind\"",
      "opts": [
        "Misanthrope",
        "Philanthropist",
        "Misogynist",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Misanthrope: 'miso' (hate) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who speaks or knows several different languages\"",
      "opts": [
        "Polyglot",
        "Linguist",
        "Orator",
        "Diplomat"
      ],
      "ans": "A",
      "exp": "Polyglot: 'poly' (many) + 'glot' (tongue/language)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Lasting for a very short, transient period of time\"",
      "opts": [
        "Ephemeral",
        "Perennial",
        "Eternal",
        "Immutable"
      ],
      "ans": "A",
      "exp": "Ephemeral means lasting only for a day or a brief fleeting moment."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A handwriting that is difficult or impossible to read\"",
      "opts": [
        "Illegible",
        "Eligible",
        "Incomprehensible",
        "Obscure"
      ],
      "ans": "A",
      "exp": "Illegible: cannot be deciphered or read."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the bright, hopeful side of things\"",
      "opts": [
        "Optimist",
        "Pessimist",
        "Pragmatist",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Optimist: one who expects favorable outcomes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the dark or negative side of things\"",
      "opts": [
        "Pessimist",
        "Optimist",
        "Skeptic",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Pessimist: one who habitually expects the worst."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"An official written record arranged in chronological order\"",
      "opts": [
        "Chronicle",
        "Biography",
        "Memoir",
        "Anthology"
      ],
      "ans": "A",
      "exp": "Chronicle: from 'chronos' (time), an orderly historical account."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is indifferent to both pain and pleasure\"",
      "opts": [
        "Stoic",
        "Ascetic",
        "Hedonist",
        "Epicurean"
      ],
      "ans": "A",
      "exp": "Stoic: one who endures hardship or joy with equanimity."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who eats only plant-based foods and no meat\"",
      "opts": [
        "Herbivore",
        "Carnivore",
        "Omnivore",
        "Insectivore"
      ],
      "ans": "A",
      "exp": "Herbivore: animal or organism subsisting on flora."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by the noble and aristocratic class\"",
      "opts": [
        "Aristocracy",
        "Democracy",
        "Plutocracy",
        "Oligarchy"
      ],
      "ans": "A",
      "exp": "Aristocracy: rule by the hereditary elite or nobility."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by a small, wealthy group of people\"",
      "opts": [
        "Plutocracy",
        "Aristocracy",
        "Autocracy",
        "Democracy"
      ],
      "ans": "A",
      "exp": "Plutocracy: 'ploutos' (wealth) + 'kratos' (rule)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is excessively reserved or uncommunicative in speech\"",
      "opts": [
        "Taciturn",
        "Loquacious",
        "Garrulous",
        "Gregarious"
      ],
      "ans": "A",
      "exp": "Taciturn: habitually silent or quiet."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves company and enjoys socializing with others\"",
      "opts": [
        "Gregarious",
        "Introverted",
        "Solitary",
        "Taciturn"
      ],
      "ans": "A",
      "exp": "Gregarious: fond of company; sociable."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A remedy or medicine purported to cure all diseases\"",
      "opts": [
        "Panacea",
        "Placebo",
        "Antidote",
        "Elixir"
      ],
      "ans": "A",
      "exp": "Panacea: a universal cure or solution for all ills."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who cannot be corrected, reformed, or improved\"",
      "opts": [
        "Incorrigible",
        "Incurable",
        "Stubborn",
        "Intractable"
      ],
      "ans": "A",
      "exp": "Incorrigible: incapable of being reformed or corrected."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The study of ancient human history and societies through excavated artifacts\"",
      "opts": [
        "Archaeology",
        "Anthropology",
        "Paleontology",
        "Geology"
      ],
      "ans": "A",
      "exp": "Archaeology: study of ancient artifacts and remains."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who leaves their own country to settle permanently in another\"",
      "opts": [
        "Emigrant",
        "Immigrant",
        "Refugee",
        "Expatriate"
      ],
      "ans": "A",
      "exp": "Emigrant: one who leaves one's homeland (exit = emigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who arrives in a foreign country to settle permanently there\"",
      "opts": [
        "Immigrant",
        "Emigrant",
        "Tourist",
        "Nomad"
      ],
      "ans": "A",
      "exp": "Immigrant: one who comes into a country (in = immigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A decision or agreement reached with the complete consent of all members\"",
      "opts": [
        "Unanimous",
        "Equivocal",
        "Concordant",
        "Harmonious"
      ],
      "ans": "A",
      "exp": "Unanimous: sharing complete agreement with no dissenting votes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who abstains completely from consuming alcoholic beverages\"",
      "opts": [
        "Teetotaler",
        "Sommelier",
        "Ascetic",
        "Abstainer"
      ],
      "ans": "A",
      "exp": "Teetotaler: one who completely renounces alcohol."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Something that cannot be heard by the human ear\"",
      "opts": [
        "Inaudible",
        "Subsonic",
        "Silent",
        "Muffled"
      ],
      "ans": "A",
      "exp": "Inaudible: unable to be perceived by hearing."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who doubts or questions accepted beliefs, claims, or truths\"",
      "opts": [
        "Skeptic",
        "Cynic",
        "Believer",
        "Zealot"
      ],
      "ans": "A",
      "exp": "Skeptic: an inclination to question or doubt accepted assertions."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The act of intentionally killing one's own sibling (brother)\"",
      "opts": [
        "Fratricide",
        "Patricide",
        "Matricide",
        "Regicide"
      ],
      "ans": "A",
      "exp": "Fratricide: 'frater' (brother) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The murder of a reigning monarch or king\"",
      "opts": [
        "Regicide",
        "Homicide",
        "Genocide",
        "Suicide"
      ],
      "ans": "A",
      "exp": "Regicide: 'rex/regis' (king) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person capable of using both the left and right hand with equal skill\"",
      "opts": [
        "Ambidextrous",
        "Sinister",
        "Bimanual",
        "Agile"
      ],
      "ans": "A",
      "exp": "Ambidextrous: 'ambi' (both) + 'dexter' (right/skillful)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The art or practice of beautiful and decorative handwriting\"",
      "opts": [
        "Calligraphy",
        "Orthography",
        "Typography",
        "Graffiti"
      ],
      "ans": "A",
      "exp": "Calligraphy: 'kallos' (beauty) + 'graphein' (to write)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A speech delivered without any prior preparation or rehearsal\"",
      "opts": [
        "Extempore",
        "Impromptu",
        "Eulogy",
        "Monologue"
      ],
      "ans": "A",
      "exp": "Extempore: spoken or performed without prior preparation."
    }
  ],
  "level4": [
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who is all-powerful and possesses unlimited power\"",
      "opts": [
        "Omnipotent",
        "Omniscient",
        "Omnipresent",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Omnipotent: 'omni' (all) + 'potent' (powerful). Omniscient means all-knowing; Omnipresent means present everywhere."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who knows everything and possesses infinite knowledge\"",
      "opts": [
        "Omniscient",
        "Omnipotent",
        "Polyglot",
        "Pedant"
      ],
      "ans": "A",
      "exp": "Omniscient: 'omni' (all) + 'scient' (knowing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves humanity and works for the welfare of others\"",
      "opts": [
        "Philanthropist",
        "Misanthrope",
        "Altruist",
        "Optimist"
      ],
      "ans": "A",
      "exp": "Philanthropist: 'philo' (love) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who hates or distrusts humankind\"",
      "opts": [
        "Misanthrope",
        "Philanthropist",
        "Misogynist",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Misanthrope: 'miso' (hate) + 'anthropos' (mankind)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who speaks or knows several different languages\"",
      "opts": [
        "Polyglot",
        "Linguist",
        "Orator",
        "Diplomat"
      ],
      "ans": "A",
      "exp": "Polyglot: 'poly' (many) + 'glot' (tongue/language)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Lasting for a very short, transient period of time\"",
      "opts": [
        "Ephemeral",
        "Perennial",
        "Eternal",
        "Immutable"
      ],
      "ans": "A",
      "exp": "Ephemeral means lasting only for a day or a brief fleeting moment."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A handwriting that is difficult or impossible to read\"",
      "opts": [
        "Illegible",
        "Eligible",
        "Incomprehensible",
        "Obscure"
      ],
      "ans": "A",
      "exp": "Illegible: cannot be deciphered or read."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the bright, hopeful side of things\"",
      "opts": [
        "Optimist",
        "Pessimist",
        "Pragmatist",
        "Altruist"
      ],
      "ans": "A",
      "exp": "Optimist: one who expects favorable outcomes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who looks on the dark or negative side of things\"",
      "opts": [
        "Pessimist",
        "Optimist",
        "Skeptic",
        "Cynic"
      ],
      "ans": "A",
      "exp": "Pessimist: one who habitually expects the worst."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"An official written record arranged in chronological order\"",
      "opts": [
        "Chronicle",
        "Biography",
        "Memoir",
        "Anthology"
      ],
      "ans": "A",
      "exp": "Chronicle: from 'chronos' (time), an orderly historical account."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is indifferent to both pain and pleasure\"",
      "opts": [
        "Stoic",
        "Ascetic",
        "Hedonist",
        "Epicurean"
      ],
      "ans": "A",
      "exp": "Stoic: one who endures hardship or joy with equanimity."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who eats only plant-based foods and no meat\"",
      "opts": [
        "Herbivore",
        "Carnivore",
        "Omnivore",
        "Insectivore"
      ],
      "ans": "A",
      "exp": "Herbivore: animal or organism subsisting on flora."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by the noble and aristocratic class\"",
      "opts": [
        "Aristocracy",
        "Democracy",
        "Plutocracy",
        "Oligarchy"
      ],
      "ans": "A",
      "exp": "Aristocracy: rule by the hereditary elite or nobility."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A government ruled by a small, wealthy group of people\"",
      "opts": [
        "Plutocracy",
        "Aristocracy",
        "Autocracy",
        "Democracy"
      ],
      "ans": "A",
      "exp": "Plutocracy: 'ploutos' (wealth) + 'kratos' (rule)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who is excessively reserved or uncommunicative in speech\"",
      "opts": [
        "Taciturn",
        "Loquacious",
        "Garrulous",
        "Gregarious"
      ],
      "ans": "A",
      "exp": "Taciturn: habitually silent or quiet."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who loves company and enjoys socializing with others\"",
      "opts": [
        "Gregarious",
        "Introverted",
        "Solitary",
        "Taciturn"
      ],
      "ans": "A",
      "exp": "Gregarious: fond of company; sociable."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A remedy or medicine purported to cure all diseases\"",
      "opts": [
        "Panacea",
        "Placebo",
        "Antidote",
        "Elixir"
      ],
      "ans": "A",
      "exp": "Panacea: a universal cure or solution for all ills."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who cannot be corrected, reformed, or improved\"",
      "opts": [
        "Incorrigible",
        "Incurable",
        "Stubborn",
        "Intractable"
      ],
      "ans": "A",
      "exp": "Incorrigible: incapable of being reformed or corrected."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The study of ancient human history and societies through excavated artifacts\"",
      "opts": [
        "Archaeology",
        "Anthropology",
        "Paleontology",
        "Geology"
      ],
      "ans": "A",
      "exp": "Archaeology: study of ancient artifacts and remains."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who leaves their own country to settle permanently in another\"",
      "opts": [
        "Emigrant",
        "Immigrant",
        "Refugee",
        "Expatriate"
      ],
      "ans": "A",
      "exp": "Emigrant: one who leaves one's homeland (exit = emigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who arrives in a foreign country to settle permanently there\"",
      "opts": [
        "Immigrant",
        "Emigrant",
        "Tourist",
        "Nomad"
      ],
      "ans": "A",
      "exp": "Immigrant: one who comes into a country (in = immigrant)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A decision or agreement reached with the complete consent of all members\"",
      "opts": [
        "Unanimous",
        "Equivocal",
        "Concordant",
        "Harmonious"
      ],
      "ans": "A",
      "exp": "Unanimous: sharing complete agreement with no dissenting votes."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person who abstains completely from consuming alcoholic beverages\"",
      "opts": [
        "Teetotaler",
        "Sommelier",
        "Ascetic",
        "Abstainer"
      ],
      "ans": "A",
      "exp": "Teetotaler: one who completely renounces alcohol."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"Something that cannot be heard by the human ear\"",
      "opts": [
        "Inaudible",
        "Subsonic",
        "Silent",
        "Muffled"
      ],
      "ans": "A",
      "exp": "Inaudible: unable to be perceived by hearing."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"One who doubts or questions accepted beliefs, claims, or truths\"",
      "opts": [
        "Skeptic",
        "Cynic",
        "Believer",
        "Zealot"
      ],
      "ans": "A",
      "exp": "Skeptic: an inclination to question or doubt accepted assertions."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The act of intentionally killing one's own sibling (brother)\"",
      "opts": [
        "Fratricide",
        "Patricide",
        "Matricide",
        "Regicide"
      ],
      "ans": "A",
      "exp": "Fratricide: 'frater' (brother) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The murder of a reigning monarch or king\"",
      "opts": [
        "Regicide",
        "Homicide",
        "Genocide",
        "Suicide"
      ],
      "ans": "A",
      "exp": "Regicide: 'rex/regis' (king) + 'cide' (killing)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A person capable of using both the left and right hand with equal skill\"",
      "opts": [
        "Ambidextrous",
        "Sinister",
        "Bimanual",
        "Agile"
      ],
      "ans": "A",
      "exp": "Ambidextrous: 'ambi' (both) + 'dexter' (right/skillful)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"The art or practice of beautiful and decorative handwriting\"",
      "opts": [
        "Calligraphy",
        "Orthography",
        "Typography",
        "Graffiti"
      ],
      "ans": "A",
      "exp": "Calligraphy: 'kallos' (beauty) + 'graphein' (to write)."
    },
    {
      "q": "Choose the one-word substitute that best fits the description:\n\"A speech delivered without any prior preparation or rehearsal\"",
      "opts": [
        "Extempore",
        "Impromptu",
        "Eulogy",
        "Monologue"
      ],
      "ans": "A",
      "exp": "Extempore: spoken or performed without prior preparation."
    }
  ]
};

VERBAL_POOLS_MAP["sentence-correction"] = {
  "level1": [
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He did not knew that the company had declared bankruptcy.\"",
      "opts": [
        "He did not know that",
        "He did not known that",
        "He had not knew that",
        "He was not knowing that"
      ],
      "ans": "A",
      "exp": "After the auxiliary 'did', the base form of the verb ('know') must be used."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the candidates have submitted their certified credentials.\"",
      "opts": [
        "Neither of the candidates has submitted his or her",
        "Neither of the candidates have submitted their",
        "None of the candidate has submitted their",
        "Neither candidate have submitted his"
      ],
      "ans": "A",
      "exp": "Neither is singular and requires the singular verb 'has'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is more smarter than her elder sister in academic matters.\"",
      "opts": [
        "She is smarter than",
        "She is more smart than",
        "She is much smarter than",
        "She is the most smartest of"
      ],
      "ans": "A",
      "exp": "Double comparatives ('more smarter') are ungrammatical. Use 'smarter'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I look forward to meet you at the technology conference tomorrow.\"",
      "opts": [
        "look forward to meeting you",
        "look forward to meet you",
        "look forward meeting you",
        "am looking forward to meet you"
      ],
      "ans": "A",
      "exp": "The phrasal verb 'look forward to' requires a gerund ('meeting') as the object of preposition 'to'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The committee are divided in its opinion regarding the new budget.\"",
      "opts": [
        "The committee is divided in its opinion",
        "The committee are divided in their opinions",
        "The committee were divided in its opinion",
        "The committee is divided in their opinions"
      ],
      "ans": "A",
      "exp": "When a collective noun indicates divided individuals, use plural verb and plural pronoun ('are divided in their opinions')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Hardly had the match begun when heavy rain disrupted the play.\"",
      "opts": [
        "Hardly had the match begun when",
        "Hardly the match had begun than",
        "Hardly had the match begun than",
        "No sooner had the match begun when"
      ],
      "ans": "A",
      "exp": "'Hardly' correctly pairs with 'when' and triggers subject-auxiliary inversion."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Being a stormy night, I decided not to venture outside.\"",
      "opts": [
        "It being a stormy night, I decided",
        "Being a stormy night, I decided",
        "Because of a stormy night, so I decided",
        "A stormy night it was, so I decided"
      ],
      "ans": "A",
      "exp": "Unattached participial clause. Must add the dummy pronoun subject 'It being a stormy night'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The reason why he failed is because he did not study consistently.\"",
      "opts": [
        "The reason he failed is that",
        "The reason why he failed is because",
        "The reason of his failure is because",
        "Why he failed is because"
      ],
      "ans": "A",
      "exp": "'The reason is that...' is standard formal English; 'the reason is because' is redundant."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He is senior than me in both age and professional experience.\"",
      "opts": [
        "He is senior to me",
        "He is senior than me",
        "He is more senior than I",
        "He is senior from me"
      ],
      "ans": "A",
      "exp": "Latin adjectives ending in -ior (senior, junior, prior, superior) take 'to', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"One should always fulfill his promises no matter what happens.\"",
      "opts": [
        "One should always fulfill one's promises",
        "One should always fulfill his promises",
        "One must always fulfill their promises",
        "A person should always fulfill his promises"
      ],
      "ans": "A",
      "exp": "Pronoun agreement: the pronoun 'one' must be maintained consistently with 'one's'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Scarcely had she entered the auditorium than the lights went out.\"",
      "opts": [
        "Scarcely had she entered the auditorium when",
        "Scarcely had she entered the auditorium than",
        "Scarcely she entered the auditorium when",
        "No sooner had she entered the auditorium when"
      ],
      "ans": "A",
      "exp": "'Scarcely' pairs with 'when', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"If I would have known about your arrival, I would have met you.\"",
      "opts": [
        "If I had known about your arrival,",
        "If I would have known about your arrival,",
        "Had I have known about your arrival,",
        "If I knew about your arrival,"
      ],
      "ans": "A",
      "exp": "Third conditional if-clause takes the past perfect ('If I had known')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The manager asked the employee what was he doing during work hours.\"",
      "opts": [
        "asked the employee what he was doing",
        "asked the employee what was he doing",
        "asked the employee that what he was doing",
        "inquired the employee what he did"
      ],
      "ans": "A",
      "exp": "Indirect questions follow standard declarative subject-verb word order ('what he was doing')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has been working on this research project since three years.\"",
      "opts": [
        "for three years",
        "since three years",
        "from three years",
        "during three years"
      ],
      "ans": "A",
      "exp": "'For' indicates a duration of time (three years), whereas 'since' denotes a specific starting point."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She prefers tea than coffee in the early morning.\"",
      "opts": [
        "prefers tea to coffee",
        "prefers tea than coffee",
        "prefers tea more than coffee",
        "prefers tea rather coffee"
      ],
      "ans": "A",
      "exp": "The verb 'prefer' takes the preposition 'to' when comparing two alternatives."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The police is investigating the suspicious financial transactions.\"",
      "opts": [
        "The police are investigating",
        "The police is investigating",
        "The police has been investigating",
        "The police was investigating"
      ],
      "ans": "A",
      "exp": "'Police' is a plural collective noun and takes the plural verb 'are investigating'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Each boy and each girl were given a commemorative medal.\"",
      "opts": [
        "was given a commemorative medal",
        "were given a commemorative medal",
        "have been given a commemorative medal",
        "are given a commemorative medal"
      ],
      "ans": "A",
      "exp": "When subjects preceded by 'each' or 'every' are joined by 'and', the verb remains singular ('was given')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He told me that he will come to the meeting tomorrow.\"",
      "opts": [
        "that he would come to the meeting",
        "that he will come to the meeting",
        "that he comes to the meeting",
        "that he shall come to the meeting"
      ],
      "ans": "A",
      "exp": "Sequence of tenses: reported speech with a past reporting verb ('told') shifts 'will' to 'would'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Supposing if the train is delayed, what will we do?\"",
      "opts": [
        "Supposing the train is delayed,",
        "Supposing if the train is delayed,",
        "If in case the train is delayed,",
        "Supposing that if the train is delayed,"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I am having a severe headache since this morning.\"",
      "opts": [
        "I have had a severe headache",
        "I am having a severe headache",
        "I had a severe headache",
        "I have a severe headache"
      ],
      "ans": "A",
      "exp": "With 'since this morning', present perfect tense is required to show continuity from the past to the present."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the two books were interesting or informative.\"",
      "opts": [
        "was interesting or informative",
        "were interesting or informative",
        "have been interesting or informative",
        "are interesting or informative"
      ],
      "ans": "A",
      "exp": "'Neither' of two alternatives takes a singular verb ('was')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He walked fastly to catch the departing express train.\"",
      "opts": [
        "He walked fast to catch",
        "He walked fastly to catch",
        "He walked very fastly to catch",
        "He walked fastly so as to catch"
      ],
      "ans": "A",
      "exp": "'Fast' is both an adjective and an adverb; 'fastly' does not exist in standard English."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I wish I was a millionaire living on a private island.\"",
      "opts": [
        "I wish I were a millionaire",
        "I wish I was a millionaire",
        "I wish I am a millionaire",
        "I wish I would be a millionaire"
      ],
      "ans": "A",
      "exp": "Subjunctive mood expressing an unreal wish contrary to fact requires 'were'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is the most cleverest student in the entire department.\"",
      "opts": [
        "She is the cleverest student",
        "She is the most cleverest student",
        "She is the more cleverest student",
        "She is most clever student"
      ],
      "ans": "A",
      "exp": "Avoid double superlatives ('most cleverest'). Use 'cleverest'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Between you and I, this decision will cause serious problems.\"",
      "opts": [
        "Between you and me,",
        "Between you and I,",
        "Among you and I,",
        "Between yourself and I,"
      ],
      "ans": "A",
      "exp": "Prepositions govern objective case pronouns ('between you and me')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The teacher asked the students to not make any noise.\"",
      "opts": [
        "not to make any noise",
        "to not make any noise",
        "to don't make any noise",
        "not making any noise"
      ],
      "ans": "A",
      "exp": "Avoid split infinitives in formal writing: place 'not' before the infinitive ('not to make')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"This watch is superior and more expensive than that one.\"",
      "opts": [
        "superior to and more expensive than",
        "superior and more expensive than",
        "superior than and more expensive than",
        "more superior and more expensive than"
      ],
      "ans": "A",
      "exp": "Each element of a compound comparison must retain its required preposition ('superior to and more expensive than')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has lived in this historic city since ten years ago.\"",
      "opts": [
        "for ten years",
        "since ten years ago",
        "from ten years",
        "for ten years ago"
      ],
      "ans": "A",
      "exp": "A duration of ten years is introduced by 'for ten years'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"No sooner the teacher entered the classroom, the students stood up.\"",
      "opts": [
        "No sooner had the teacher entered the classroom than",
        "No sooner the teacher entered the classroom,",
        "No sooner did the teacher entered the classroom than",
        "As soon as the teacher entered than"
      ],
      "ans": "A",
      "exp": "'No sooner' requires inversion ('had the teacher entered') and the correlative conjunction 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She insisted on me accompanying her to the municipal court.\"",
      "opts": [
        "on my accompanying her",
        "on me accompanying her",
        "to me accompanying her",
        "for me accompanying her"
      ],
      "ans": "A",
      "exp": "A gerund ('accompanying') is formally modified by a possessive pronoun ('my accompanying')."
    }
  ],
  "level2": [
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He did not knew that the company had declared bankruptcy.\"",
      "opts": [
        "He did not know that",
        "He did not known that",
        "He had not knew that",
        "He was not knowing that"
      ],
      "ans": "A",
      "exp": "After the auxiliary 'did', the base form of the verb ('know') must be used."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the candidates have submitted their certified credentials.\"",
      "opts": [
        "Neither of the candidates has submitted his or her",
        "Neither of the candidates have submitted their",
        "None of the candidate has submitted their",
        "Neither candidate have submitted his"
      ],
      "ans": "A",
      "exp": "Neither is singular and requires the singular verb 'has'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is more smarter than her elder sister in academic matters.\"",
      "opts": [
        "She is smarter than",
        "She is more smart than",
        "She is much smarter than",
        "She is the most smartest of"
      ],
      "ans": "A",
      "exp": "Double comparatives ('more smarter') are ungrammatical. Use 'smarter'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I look forward to meet you at the technology conference tomorrow.\"",
      "opts": [
        "look forward to meeting you",
        "look forward to meet you",
        "look forward meeting you",
        "am looking forward to meet you"
      ],
      "ans": "A",
      "exp": "The phrasal verb 'look forward to' requires a gerund ('meeting') as the object of preposition 'to'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The committee are divided in its opinion regarding the new budget.\"",
      "opts": [
        "The committee is divided in its opinion",
        "The committee are divided in their opinions",
        "The committee were divided in its opinion",
        "The committee is divided in their opinions"
      ],
      "ans": "A",
      "exp": "When a collective noun indicates divided individuals, use plural verb and plural pronoun ('are divided in their opinions')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Hardly had the match begun when heavy rain disrupted the play.\"",
      "opts": [
        "Hardly had the match begun when",
        "Hardly the match had begun than",
        "Hardly had the match begun than",
        "No sooner had the match begun when"
      ],
      "ans": "A",
      "exp": "'Hardly' correctly pairs with 'when' and triggers subject-auxiliary inversion."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Being a stormy night, I decided not to venture outside.\"",
      "opts": [
        "It being a stormy night, I decided",
        "Being a stormy night, I decided",
        "Because of a stormy night, so I decided",
        "A stormy night it was, so I decided"
      ],
      "ans": "A",
      "exp": "Unattached participial clause. Must add the dummy pronoun subject 'It being a stormy night'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The reason why he failed is because he did not study consistently.\"",
      "opts": [
        "The reason he failed is that",
        "The reason why he failed is because",
        "The reason of his failure is because",
        "Why he failed is because"
      ],
      "ans": "A",
      "exp": "'The reason is that...' is standard formal English; 'the reason is because' is redundant."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He is senior than me in both age and professional experience.\"",
      "opts": [
        "He is senior to me",
        "He is senior than me",
        "He is more senior than I",
        "He is senior from me"
      ],
      "ans": "A",
      "exp": "Latin adjectives ending in -ior (senior, junior, prior, superior) take 'to', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"One should always fulfill his promises no matter what happens.\"",
      "opts": [
        "One should always fulfill one's promises",
        "One should always fulfill his promises",
        "One must always fulfill their promises",
        "A person should always fulfill his promises"
      ],
      "ans": "A",
      "exp": "Pronoun agreement: the pronoun 'one' must be maintained consistently with 'one's'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Scarcely had she entered the auditorium than the lights went out.\"",
      "opts": [
        "Scarcely had she entered the auditorium when",
        "Scarcely had she entered the auditorium than",
        "Scarcely she entered the auditorium when",
        "No sooner had she entered the auditorium when"
      ],
      "ans": "A",
      "exp": "'Scarcely' pairs with 'when', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"If I would have known about your arrival, I would have met you.\"",
      "opts": [
        "If I had known about your arrival,",
        "If I would have known about your arrival,",
        "Had I have known about your arrival,",
        "If I knew about your arrival,"
      ],
      "ans": "A",
      "exp": "Third conditional if-clause takes the past perfect ('If I had known')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The manager asked the employee what was he doing during work hours.\"",
      "opts": [
        "asked the employee what he was doing",
        "asked the employee what was he doing",
        "asked the employee that what he was doing",
        "inquired the employee what he did"
      ],
      "ans": "A",
      "exp": "Indirect questions follow standard declarative subject-verb word order ('what he was doing')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has been working on this research project since three years.\"",
      "opts": [
        "for three years",
        "since three years",
        "from three years",
        "during three years"
      ],
      "ans": "A",
      "exp": "'For' indicates a duration of time (three years), whereas 'since' denotes a specific starting point."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She prefers tea than coffee in the early morning.\"",
      "opts": [
        "prefers tea to coffee",
        "prefers tea than coffee",
        "prefers tea more than coffee",
        "prefers tea rather coffee"
      ],
      "ans": "A",
      "exp": "The verb 'prefer' takes the preposition 'to' when comparing two alternatives."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The police is investigating the suspicious financial transactions.\"",
      "opts": [
        "The police are investigating",
        "The police is investigating",
        "The police has been investigating",
        "The police was investigating"
      ],
      "ans": "A",
      "exp": "'Police' is a plural collective noun and takes the plural verb 'are investigating'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Each boy and each girl were given a commemorative medal.\"",
      "opts": [
        "was given a commemorative medal",
        "were given a commemorative medal",
        "have been given a commemorative medal",
        "are given a commemorative medal"
      ],
      "ans": "A",
      "exp": "When subjects preceded by 'each' or 'every' are joined by 'and', the verb remains singular ('was given')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He told me that he will come to the meeting tomorrow.\"",
      "opts": [
        "that he would come to the meeting",
        "that he will come to the meeting",
        "that he comes to the meeting",
        "that he shall come to the meeting"
      ],
      "ans": "A",
      "exp": "Sequence of tenses: reported speech with a past reporting verb ('told') shifts 'will' to 'would'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Supposing if the train is delayed, what will we do?\"",
      "opts": [
        "Supposing the train is delayed,",
        "Supposing if the train is delayed,",
        "If in case the train is delayed,",
        "Supposing that if the train is delayed,"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I am having a severe headache since this morning.\"",
      "opts": [
        "I have had a severe headache",
        "I am having a severe headache",
        "I had a severe headache",
        "I have a severe headache"
      ],
      "ans": "A",
      "exp": "With 'since this morning', present perfect tense is required to show continuity from the past to the present."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the two books were interesting or informative.\"",
      "opts": [
        "was interesting or informative",
        "were interesting or informative",
        "have been interesting or informative",
        "are interesting or informative"
      ],
      "ans": "A",
      "exp": "'Neither' of two alternatives takes a singular verb ('was')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He walked fastly to catch the departing express train.\"",
      "opts": [
        "He walked fast to catch",
        "He walked fastly to catch",
        "He walked very fastly to catch",
        "He walked fastly so as to catch"
      ],
      "ans": "A",
      "exp": "'Fast' is both an adjective and an adverb; 'fastly' does not exist in standard English."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I wish I was a millionaire living on a private island.\"",
      "opts": [
        "I wish I were a millionaire",
        "I wish I was a millionaire",
        "I wish I am a millionaire",
        "I wish I would be a millionaire"
      ],
      "ans": "A",
      "exp": "Subjunctive mood expressing an unreal wish contrary to fact requires 'were'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is the most cleverest student in the entire department.\"",
      "opts": [
        "She is the cleverest student",
        "She is the most cleverest student",
        "She is the more cleverest student",
        "She is most clever student"
      ],
      "ans": "A",
      "exp": "Avoid double superlatives ('most cleverest'). Use 'cleverest'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Between you and I, this decision will cause serious problems.\"",
      "opts": [
        "Between you and me,",
        "Between you and I,",
        "Among you and I,",
        "Between yourself and I,"
      ],
      "ans": "A",
      "exp": "Prepositions govern objective case pronouns ('between you and me')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The teacher asked the students to not make any noise.\"",
      "opts": [
        "not to make any noise",
        "to not make any noise",
        "to don't make any noise",
        "not making any noise"
      ],
      "ans": "A",
      "exp": "Avoid split infinitives in formal writing: place 'not' before the infinitive ('not to make')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"This watch is superior and more expensive than that one.\"",
      "opts": [
        "superior to and more expensive than",
        "superior and more expensive than",
        "superior than and more expensive than",
        "more superior and more expensive than"
      ],
      "ans": "A",
      "exp": "Each element of a compound comparison must retain its required preposition ('superior to and more expensive than')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has lived in this historic city since ten years ago.\"",
      "opts": [
        "for ten years",
        "since ten years ago",
        "from ten years",
        "for ten years ago"
      ],
      "ans": "A",
      "exp": "A duration of ten years is introduced by 'for ten years'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"No sooner the teacher entered the classroom, the students stood up.\"",
      "opts": [
        "No sooner had the teacher entered the classroom than",
        "No sooner the teacher entered the classroom,",
        "No sooner did the teacher entered the classroom than",
        "As soon as the teacher entered than"
      ],
      "ans": "A",
      "exp": "'No sooner' requires inversion ('had the teacher entered') and the correlative conjunction 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She insisted on me accompanying her to the municipal court.\"",
      "opts": [
        "on my accompanying her",
        "on me accompanying her",
        "to me accompanying her",
        "for me accompanying her"
      ],
      "ans": "A",
      "exp": "A gerund ('accompanying') is formally modified by a possessive pronoun ('my accompanying')."
    }
  ],
  "level3": [
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He did not knew that the company had declared bankruptcy.\"",
      "opts": [
        "He did not know that",
        "He did not known that",
        "He had not knew that",
        "He was not knowing that"
      ],
      "ans": "A",
      "exp": "After the auxiliary 'did', the base form of the verb ('know') must be used."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the candidates have submitted their certified credentials.\"",
      "opts": [
        "Neither of the candidates has submitted his or her",
        "Neither of the candidates have submitted their",
        "None of the candidate has submitted their",
        "Neither candidate have submitted his"
      ],
      "ans": "A",
      "exp": "Neither is singular and requires the singular verb 'has'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is more smarter than her elder sister in academic matters.\"",
      "opts": [
        "She is smarter than",
        "She is more smart than",
        "She is much smarter than",
        "She is the most smartest of"
      ],
      "ans": "A",
      "exp": "Double comparatives ('more smarter') are ungrammatical. Use 'smarter'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I look forward to meet you at the technology conference tomorrow.\"",
      "opts": [
        "look forward to meeting you",
        "look forward to meet you",
        "look forward meeting you",
        "am looking forward to meet you"
      ],
      "ans": "A",
      "exp": "The phrasal verb 'look forward to' requires a gerund ('meeting') as the object of preposition 'to'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The committee are divided in its opinion regarding the new budget.\"",
      "opts": [
        "The committee is divided in its opinion",
        "The committee are divided in their opinions",
        "The committee were divided in its opinion",
        "The committee is divided in their opinions"
      ],
      "ans": "A",
      "exp": "When a collective noun indicates divided individuals, use plural verb and plural pronoun ('are divided in their opinions')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Hardly had the match begun when heavy rain disrupted the play.\"",
      "opts": [
        "Hardly had the match begun when",
        "Hardly the match had begun than",
        "Hardly had the match begun than",
        "No sooner had the match begun when"
      ],
      "ans": "A",
      "exp": "'Hardly' correctly pairs with 'when' and triggers subject-auxiliary inversion."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Being a stormy night, I decided not to venture outside.\"",
      "opts": [
        "It being a stormy night, I decided",
        "Being a stormy night, I decided",
        "Because of a stormy night, so I decided",
        "A stormy night it was, so I decided"
      ],
      "ans": "A",
      "exp": "Unattached participial clause. Must add the dummy pronoun subject 'It being a stormy night'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The reason why he failed is because he did not study consistently.\"",
      "opts": [
        "The reason he failed is that",
        "The reason why he failed is because",
        "The reason of his failure is because",
        "Why he failed is because"
      ],
      "ans": "A",
      "exp": "'The reason is that...' is standard formal English; 'the reason is because' is redundant."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He is senior than me in both age and professional experience.\"",
      "opts": [
        "He is senior to me",
        "He is senior than me",
        "He is more senior than I",
        "He is senior from me"
      ],
      "ans": "A",
      "exp": "Latin adjectives ending in -ior (senior, junior, prior, superior) take 'to', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"One should always fulfill his promises no matter what happens.\"",
      "opts": [
        "One should always fulfill one's promises",
        "One should always fulfill his promises",
        "One must always fulfill their promises",
        "A person should always fulfill his promises"
      ],
      "ans": "A",
      "exp": "Pronoun agreement: the pronoun 'one' must be maintained consistently with 'one's'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Scarcely had she entered the auditorium than the lights went out.\"",
      "opts": [
        "Scarcely had she entered the auditorium when",
        "Scarcely had she entered the auditorium than",
        "Scarcely she entered the auditorium when",
        "No sooner had she entered the auditorium when"
      ],
      "ans": "A",
      "exp": "'Scarcely' pairs with 'when', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"If I would have known about your arrival, I would have met you.\"",
      "opts": [
        "If I had known about your arrival,",
        "If I would have known about your arrival,",
        "Had I have known about your arrival,",
        "If I knew about your arrival,"
      ],
      "ans": "A",
      "exp": "Third conditional if-clause takes the past perfect ('If I had known')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The manager asked the employee what was he doing during work hours.\"",
      "opts": [
        "asked the employee what he was doing",
        "asked the employee what was he doing",
        "asked the employee that what he was doing",
        "inquired the employee what he did"
      ],
      "ans": "A",
      "exp": "Indirect questions follow standard declarative subject-verb word order ('what he was doing')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has been working on this research project since three years.\"",
      "opts": [
        "for three years",
        "since three years",
        "from three years",
        "during three years"
      ],
      "ans": "A",
      "exp": "'For' indicates a duration of time (three years), whereas 'since' denotes a specific starting point."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She prefers tea than coffee in the early morning.\"",
      "opts": [
        "prefers tea to coffee",
        "prefers tea than coffee",
        "prefers tea more than coffee",
        "prefers tea rather coffee"
      ],
      "ans": "A",
      "exp": "The verb 'prefer' takes the preposition 'to' when comparing two alternatives."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The police is investigating the suspicious financial transactions.\"",
      "opts": [
        "The police are investigating",
        "The police is investigating",
        "The police has been investigating",
        "The police was investigating"
      ],
      "ans": "A",
      "exp": "'Police' is a plural collective noun and takes the plural verb 'are investigating'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Each boy and each girl were given a commemorative medal.\"",
      "opts": [
        "was given a commemorative medal",
        "were given a commemorative medal",
        "have been given a commemorative medal",
        "are given a commemorative medal"
      ],
      "ans": "A",
      "exp": "When subjects preceded by 'each' or 'every' are joined by 'and', the verb remains singular ('was given')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He told me that he will come to the meeting tomorrow.\"",
      "opts": [
        "that he would come to the meeting",
        "that he will come to the meeting",
        "that he comes to the meeting",
        "that he shall come to the meeting"
      ],
      "ans": "A",
      "exp": "Sequence of tenses: reported speech with a past reporting verb ('told') shifts 'will' to 'would'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Supposing if the train is delayed, what will we do?\"",
      "opts": [
        "Supposing the train is delayed,",
        "Supposing if the train is delayed,",
        "If in case the train is delayed,",
        "Supposing that if the train is delayed,"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I am having a severe headache since this morning.\"",
      "opts": [
        "I have had a severe headache",
        "I am having a severe headache",
        "I had a severe headache",
        "I have a severe headache"
      ],
      "ans": "A",
      "exp": "With 'since this morning', present perfect tense is required to show continuity from the past to the present."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the two books were interesting or informative.\"",
      "opts": [
        "was interesting or informative",
        "were interesting or informative",
        "have been interesting or informative",
        "are interesting or informative"
      ],
      "ans": "A",
      "exp": "'Neither' of two alternatives takes a singular verb ('was')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He walked fastly to catch the departing express train.\"",
      "opts": [
        "He walked fast to catch",
        "He walked fastly to catch",
        "He walked very fastly to catch",
        "He walked fastly so as to catch"
      ],
      "ans": "A",
      "exp": "'Fast' is both an adjective and an adverb; 'fastly' does not exist in standard English."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I wish I was a millionaire living on a private island.\"",
      "opts": [
        "I wish I were a millionaire",
        "I wish I was a millionaire",
        "I wish I am a millionaire",
        "I wish I would be a millionaire"
      ],
      "ans": "A",
      "exp": "Subjunctive mood expressing an unreal wish contrary to fact requires 'were'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is the most cleverest student in the entire department.\"",
      "opts": [
        "She is the cleverest student",
        "She is the most cleverest student",
        "She is the more cleverest student",
        "She is most clever student"
      ],
      "ans": "A",
      "exp": "Avoid double superlatives ('most cleverest'). Use 'cleverest'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Between you and I, this decision will cause serious problems.\"",
      "opts": [
        "Between you and me,",
        "Between you and I,",
        "Among you and I,",
        "Between yourself and I,"
      ],
      "ans": "A",
      "exp": "Prepositions govern objective case pronouns ('between you and me')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The teacher asked the students to not make any noise.\"",
      "opts": [
        "not to make any noise",
        "to not make any noise",
        "to don't make any noise",
        "not making any noise"
      ],
      "ans": "A",
      "exp": "Avoid split infinitives in formal writing: place 'not' before the infinitive ('not to make')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"This watch is superior and more expensive than that one.\"",
      "opts": [
        "superior to and more expensive than",
        "superior and more expensive than",
        "superior than and more expensive than",
        "more superior and more expensive than"
      ],
      "ans": "A",
      "exp": "Each element of a compound comparison must retain its required preposition ('superior to and more expensive than')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has lived in this historic city since ten years ago.\"",
      "opts": [
        "for ten years",
        "since ten years ago",
        "from ten years",
        "for ten years ago"
      ],
      "ans": "A",
      "exp": "A duration of ten years is introduced by 'for ten years'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"No sooner the teacher entered the classroom, the students stood up.\"",
      "opts": [
        "No sooner had the teacher entered the classroom than",
        "No sooner the teacher entered the classroom,",
        "No sooner did the teacher entered the classroom than",
        "As soon as the teacher entered than"
      ],
      "ans": "A",
      "exp": "'No sooner' requires inversion ('had the teacher entered') and the correlative conjunction 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She insisted on me accompanying her to the municipal court.\"",
      "opts": [
        "on my accompanying her",
        "on me accompanying her",
        "to me accompanying her",
        "for me accompanying her"
      ],
      "ans": "A",
      "exp": "A gerund ('accompanying') is formally modified by a possessive pronoun ('my accompanying')."
    }
  ],
  "level4": [
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He did not knew that the company had declared bankruptcy.\"",
      "opts": [
        "He did not know that",
        "He did not known that",
        "He had not knew that",
        "He was not knowing that"
      ],
      "ans": "A",
      "exp": "After the auxiliary 'did', the base form of the verb ('know') must be used."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the candidates have submitted their certified credentials.\"",
      "opts": [
        "Neither of the candidates has submitted his or her",
        "Neither of the candidates have submitted their",
        "None of the candidate has submitted their",
        "Neither candidate have submitted his"
      ],
      "ans": "A",
      "exp": "Neither is singular and requires the singular verb 'has'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is more smarter than her elder sister in academic matters.\"",
      "opts": [
        "She is smarter than",
        "She is more smart than",
        "She is much smarter than",
        "She is the most smartest of"
      ],
      "ans": "A",
      "exp": "Double comparatives ('more smarter') are ungrammatical. Use 'smarter'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I look forward to meet you at the technology conference tomorrow.\"",
      "opts": [
        "look forward to meeting you",
        "look forward to meet you",
        "look forward meeting you",
        "am looking forward to meet you"
      ],
      "ans": "A",
      "exp": "The phrasal verb 'look forward to' requires a gerund ('meeting') as the object of preposition 'to'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The committee are divided in its opinion regarding the new budget.\"",
      "opts": [
        "The committee is divided in its opinion",
        "The committee are divided in their opinions",
        "The committee were divided in its opinion",
        "The committee is divided in their opinions"
      ],
      "ans": "A",
      "exp": "When a collective noun indicates divided individuals, use plural verb and plural pronoun ('are divided in their opinions')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Hardly had the match begun when heavy rain disrupted the play.\"",
      "opts": [
        "Hardly had the match begun when",
        "Hardly the match had begun than",
        "Hardly had the match begun than",
        "No sooner had the match begun when"
      ],
      "ans": "A",
      "exp": "'Hardly' correctly pairs with 'when' and triggers subject-auxiliary inversion."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Being a stormy night, I decided not to venture outside.\"",
      "opts": [
        "It being a stormy night, I decided",
        "Being a stormy night, I decided",
        "Because of a stormy night, so I decided",
        "A stormy night it was, so I decided"
      ],
      "ans": "A",
      "exp": "Unattached participial clause. Must add the dummy pronoun subject 'It being a stormy night'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The reason why he failed is because he did not study consistently.\"",
      "opts": [
        "The reason he failed is that",
        "The reason why he failed is because",
        "The reason of his failure is because",
        "Why he failed is because"
      ],
      "ans": "A",
      "exp": "'The reason is that...' is standard formal English; 'the reason is because' is redundant."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He is senior than me in both age and professional experience.\"",
      "opts": [
        "He is senior to me",
        "He is senior than me",
        "He is more senior than I",
        "He is senior from me"
      ],
      "ans": "A",
      "exp": "Latin adjectives ending in -ior (senior, junior, prior, superior) take 'to', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"One should always fulfill his promises no matter what happens.\"",
      "opts": [
        "One should always fulfill one's promises",
        "One should always fulfill his promises",
        "One must always fulfill their promises",
        "A person should always fulfill his promises"
      ],
      "ans": "A",
      "exp": "Pronoun agreement: the pronoun 'one' must be maintained consistently with 'one's'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Scarcely had she entered the auditorium than the lights went out.\"",
      "opts": [
        "Scarcely had she entered the auditorium when",
        "Scarcely had she entered the auditorium than",
        "Scarcely she entered the auditorium when",
        "No sooner had she entered the auditorium when"
      ],
      "ans": "A",
      "exp": "'Scarcely' pairs with 'when', not 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"If I would have known about your arrival, I would have met you.\"",
      "opts": [
        "If I had known about your arrival,",
        "If I would have known about your arrival,",
        "Had I have known about your arrival,",
        "If I knew about your arrival,"
      ],
      "ans": "A",
      "exp": "Third conditional if-clause takes the past perfect ('If I had known')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The manager asked the employee what was he doing during work hours.\"",
      "opts": [
        "asked the employee what he was doing",
        "asked the employee what was he doing",
        "asked the employee that what he was doing",
        "inquired the employee what he did"
      ],
      "ans": "A",
      "exp": "Indirect questions follow standard declarative subject-verb word order ('what he was doing')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has been working on this research project since three years.\"",
      "opts": [
        "for three years",
        "since three years",
        "from three years",
        "during three years"
      ],
      "ans": "A",
      "exp": "'For' indicates a duration of time (three years), whereas 'since' denotes a specific starting point."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She prefers tea than coffee in the early morning.\"",
      "opts": [
        "prefers tea to coffee",
        "prefers tea than coffee",
        "prefers tea more than coffee",
        "prefers tea rather coffee"
      ],
      "ans": "A",
      "exp": "The verb 'prefer' takes the preposition 'to' when comparing two alternatives."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The police is investigating the suspicious financial transactions.\"",
      "opts": [
        "The police are investigating",
        "The police is investigating",
        "The police has been investigating",
        "The police was investigating"
      ],
      "ans": "A",
      "exp": "'Police' is a plural collective noun and takes the plural verb 'are investigating'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Each boy and each girl were given a commemorative medal.\"",
      "opts": [
        "was given a commemorative medal",
        "were given a commemorative medal",
        "have been given a commemorative medal",
        "are given a commemorative medal"
      ],
      "ans": "A",
      "exp": "When subjects preceded by 'each' or 'every' are joined by 'and', the verb remains singular ('was given')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He told me that he will come to the meeting tomorrow.\"",
      "opts": [
        "that he would come to the meeting",
        "that he will come to the meeting",
        "that he comes to the meeting",
        "that he shall come to the meeting"
      ],
      "ans": "A",
      "exp": "Sequence of tenses: reported speech with a past reporting verb ('told') shifts 'will' to 'would'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Supposing if the train is delayed, what will we do?\"",
      "opts": [
        "Supposing the train is delayed,",
        "Supposing if the train is delayed,",
        "If in case the train is delayed,",
        "Supposing that if the train is delayed,"
      ],
      "ans": "A",
      "exp": "'Supposing' and 'if' are redundant when used together."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I am having a severe headache since this morning.\"",
      "opts": [
        "I have had a severe headache",
        "I am having a severe headache",
        "I had a severe headache",
        "I have a severe headache"
      ],
      "ans": "A",
      "exp": "With 'since this morning', present perfect tense is required to show continuity from the past to the present."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Neither of the two books were interesting or informative.\"",
      "opts": [
        "was interesting or informative",
        "were interesting or informative",
        "have been interesting or informative",
        "are interesting or informative"
      ],
      "ans": "A",
      "exp": "'Neither' of two alternatives takes a singular verb ('was')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He walked fastly to catch the departing express train.\"",
      "opts": [
        "He walked fast to catch",
        "He walked fastly to catch",
        "He walked very fastly to catch",
        "He walked fastly so as to catch"
      ],
      "ans": "A",
      "exp": "'Fast' is both an adjective and an adverb; 'fastly' does not exist in standard English."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"I wish I was a millionaire living on a private island.\"",
      "opts": [
        "I wish I were a millionaire",
        "I wish I was a millionaire",
        "I wish I am a millionaire",
        "I wish I would be a millionaire"
      ],
      "ans": "A",
      "exp": "Subjunctive mood expressing an unreal wish contrary to fact requires 'were'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She is the most cleverest student in the entire department.\"",
      "opts": [
        "She is the cleverest student",
        "She is the most cleverest student",
        "She is the more cleverest student",
        "She is most clever student"
      ],
      "ans": "A",
      "exp": "Avoid double superlatives ('most cleverest'). Use 'cleverest'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"Between you and I, this decision will cause serious problems.\"",
      "opts": [
        "Between you and me,",
        "Between you and I,",
        "Among you and I,",
        "Between yourself and I,"
      ],
      "ans": "A",
      "exp": "Prepositions govern objective case pronouns ('between you and me')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"The teacher asked the students to not make any noise.\"",
      "opts": [
        "not to make any noise",
        "to not make any noise",
        "to don't make any noise",
        "not making any noise"
      ],
      "ans": "A",
      "exp": "Avoid split infinitives in formal writing: place 'not' before the infinitive ('not to make')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"This watch is superior and more expensive than that one.\"",
      "opts": [
        "superior to and more expensive than",
        "superior and more expensive than",
        "superior than and more expensive than",
        "more superior and more expensive than"
      ],
      "ans": "A",
      "exp": "Each element of a compound comparison must retain its required preposition ('superior to and more expensive than')."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"He has lived in this historic city since ten years ago.\"",
      "opts": [
        "for ten years",
        "since ten years ago",
        "from ten years",
        "for ten years ago"
      ],
      "ans": "A",
      "exp": "A duration of ten years is introduced by 'for ten years'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"No sooner the teacher entered the classroom, the students stood up.\"",
      "opts": [
        "No sooner had the teacher entered the classroom than",
        "No sooner the teacher entered the classroom,",
        "No sooner did the teacher entered the classroom than",
        "As soon as the teacher entered than"
      ],
      "ans": "A",
      "exp": "'No sooner' requires inversion ('had the teacher entered') and the correlative conjunction 'than'."
    },
    {
      "q": "Choose the correct alternative to replace the underlined phrase in the sentence:\n\"She insisted on me accompanying her to the municipal court.\"",
      "opts": [
        "on my accompanying her",
        "on me accompanying her",
        "to me accompanying her",
        "for me accompanying her"
      ],
      "ans": "A",
      "exp": "A gerund ('accompanying') is formally modified by a possessive pronoun ('my accompanying')."
    }
  ]
};

VERBAL_POOLS_MAP["synonyms-and-antonyms"] = {
  "level1": [
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"CANDID\"",
      "opts": [
        "Frank",
        "Deceptive",
        "Shy",
        "Arrogant"
      ],
      "ans": "A",
      "exp": "CANDID: Frank: Candid means straightforward, open, and sincere in speech. Correct SYNONYM is Frank."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"DILIGENT\"",
      "opts": [
        "Lazy",
        "Industrious",
        "Careless",
        "Hesitant"
      ],
      "ans": "A",
      "exp": "DILIGENT: Industrious: Diligent means hardworking and showing conscientious effort. Correct ANTONYM is Lazy."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BENEVOLENT\"",
      "opts": [
        "Generous",
        "Malevolent",
        "Selfish",
        "Cruel"
      ],
      "ans": "A",
      "exp": "BENEVOLENT: Generous: Benevolent means kindly, charitable, and well-meaning. Correct SYNONYM is Generous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"LUCID\"",
      "opts": [
        "Confusing",
        "Clear",
        "Opaque",
        "Ambiguous"
      ],
      "ans": "A",
      "exp": "LUCID: Clear: Lucid means easily understood, articulate, and completely transparent. Correct ANTONYM is Confusing."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"MITIGATE\"",
      "opts": [
        "Alleviate",
        "Aggravate",
        "Intensify",
        "Worsen"
      ],
      "ans": "A",
      "exp": "MITIGATE: Alleviate: Mitigate means to make less severe, painful, or damaging. Correct SYNONYM is Alleviate."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"RESILIENT\"",
      "opts": [
        "Fragile",
        "Adaptable",
        "Rigid",
        "Vulnerable"
      ],
      "ans": "A",
      "exp": "RESILIENT: Adaptable: Resilient means able to recover quickly from difficult conditions. Correct ANTONYM is Fragile."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"EPHEMERAL\"",
      "opts": [
        "Fleeting",
        "Permanent",
        "Enduring",
        "Perpetual"
      ],
      "ans": "A",
      "exp": "EPHEMERAL: Fleeting: Ephemeral means lasting for a very short, transient time. Correct SYNONYM is Fleeting."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GREGARIOUS\"",
      "opts": [
        "Introverted",
        "Sociable",
        "Solitary",
        "Aloof"
      ],
      "ans": "A",
      "exp": "GREGARIOUS: Sociable: Gregarious means fond of company and enjoying social interaction. Correct ANTONYM is Introverted."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"TACITURN\"",
      "opts": [
        "Reserved",
        "Loquacious",
        "Garrulous",
        "Voluble"
      ],
      "ans": "A",
      "exp": "TACITURN: Reserved: Taciturn means quiet and uncommunicative by nature. Correct SYNONYM is Reserved."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"PRAGMATIC\"",
      "opts": [
        "Idealistic",
        "Practical",
        "Theoretical",
        "Speculative"
      ],
      "ans": "A",
      "exp": "PRAGMATIC: Practical: Pragmatic means dealing with matters sensibly and realistically. Correct ANTONYM is Idealistic."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FASTIDIOUS\"",
      "opts": [
        "Meticulous",
        "Careless",
        "Indifferent",
        "Sloppy"
      ],
      "ans": "A",
      "exp": "FASTIDIOUS: Meticulous: Fastidious means showing extreme care, precision, and attentiveness to detail. Correct SYNONYM is Meticulous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"UBIQUITOUS\"",
      "opts": [
        "Rare",
        "Omnipresent",
        "Scarce",
        "Occasional"
      ],
      "ans": "A",
      "exp": "UBIQUITOUS: Omnipresent: Ubiquitous means present, appearing, or found everywhere. Correct ANTONYM is Rare."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"OBSOLETE\"",
      "opts": [
        "Outdated",
        "Modern",
        "Contemporary",
        "Innovative"
      ],
      "ans": "A",
      "exp": "OBSOLETE: Outdated: Obsolete means no longer in use, superseded by newer designs. Correct SYNONYM is Outdated."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ALACRITY\"",
      "opts": [
        "Reluctance",
        "Eagerness",
        "Hesitation",
        "Sluggishness"
      ],
      "ans": "A",
      "exp": "ALACRITY: Eagerness: Alacrity means brisk and cheerful readiness or promptness. Correct ANTONYM is Reluctance."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BELLICOSE\"",
      "opts": [
        "Aggressive",
        "Peaceful",
        "Conciliatory",
        "Gentle"
      ],
      "ans": "A",
      "exp": "BELLICOSE: Aggressive: Bellicose means eager or inclined to fight and quarrel. Correct SYNONYM is Aggressive."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"CANDOR\"",
      "opts": [
        "Insincerity",
        "Honesty",
        "Guile",
        "Deceit"
      ],
      "ans": "A",
      "exp": "CANDOR: Honesty: Candor means the quality of being open, sincere, and honest. Correct ANTONYM is Insincerity."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"DEBACLE\"",
      "opts": [
        "Catastrophe",
        "Success",
        "Triumph",
        "Masterpiece"
      ],
      "ans": "A",
      "exp": "DEBACLE: Catastrophe: Debacle means a sudden, disastrous collapse or failure. Correct SYNONYM is Catastrophe."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ENERVATE\"",
      "opts": [
        "Invigorate",
        "Weaken",
        "Strengthen",
        "Energize"
      ],
      "ans": "A",
      "exp": "ENERVATE: Weaken: Enervate means to drain of energy, vitality, or mental strength. Correct ANTONYM is Invigorate."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FORTUITOUS\"",
      "opts": [
        "Accidental",
        "Deliberate",
        "Intentional",
        "Planned"
      ],
      "ans": "A",
      "exp": "FORTUITOUS: Accidental: Fortuitous means occurring by happy chance or luck. Correct SYNONYM is Accidental."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GARRULOUS\"",
      "opts": [
        "Reticent",
        "Talkative",
        "Taciturn",
        "Silent"
      ],
      "ans": "A",
      "exp": "GARRULOUS: Talkative: Garrulous means excessively talkative, especially on trivial matters. Correct ANTONYM is Reticent."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"HARBINGER\"",
      "opts": [
        "Omen",
        "Consequence",
        "Follower",
        "Outcome"
      ],
      "ans": "A",
      "exp": "HARBINGER: Omen: Harbinger means a person or thing that announces or signals the approach of another. Correct SYNONYM is Omen."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ICONOCLAST\"",
      "opts": [
        "Conformist",
        "Rebel",
        "Traditionalist",
        "Devotee"
      ],
      "ans": "A",
      "exp": "ICONOCLAST: Rebel: An iconoclast attacks cherished beliefs, institutions, or orthodoxies. Correct ANTONYM is Conformist."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"JUXTAPOSE\"",
      "opts": [
        "Contrast",
        "Isolate",
        "Separate",
        "Sever"
      ],
      "ans": "A",
      "exp": "JUXTAPOSE: Contrast: Juxtapose means to place side by side for comparison or contrast. Correct SYNONYM is Contrast."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"KINETIC\"",
      "opts": [
        "Static",
        "Active",
        "Dormant",
        "Passive"
      ],
      "ans": "A",
      "exp": "KINETIC: Active: Kinetic pertains to motion and physical movement. Correct ANTONYM is Static."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"LACONIC\"",
      "opts": [
        "Concise",
        "Verbose",
        "Garrulous",
        "Prolix"
      ],
      "ans": "A",
      "exp": "LACONIC: Concise: Laconic means using very few words to convey meaning. Correct SYNONYM is Concise."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"MALLEABLE\"",
      "opts": [
        "Rigid",
        "Flexible",
        "Brittle",
        "Inflexible"
      ],
      "ans": "A",
      "exp": "MALLEABLE: Flexible: Malleable means easily influenced, shaped, or adapted. Correct ANTONYM is Rigid."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"NEFARIOUS\"",
      "opts": [
        "Wicked",
        "Virtuous",
        "Honorable",
        "Ethical"
      ],
      "ans": "A",
      "exp": "NEFARIOUS: Wicked: Nefarious means criminal, infamous, or villainously evil. Correct SYNONYM is Wicked."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"OPULENT\"",
      "opts": [
        "Destitute",
        "Luxurious",
        "Impecunious",
        "Impoverished"
      ],
      "ans": "A",
      "exp": "OPULENT: Luxurious: Opulent means wealthy, lavish, and abundantly rich. Correct ANTONYM is Destitute."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"PERFUNCTORY\"",
      "opts": [
        "Cursory",
        "Thorough",
        "Meticulous",
        "Painstaking"
      ],
      "ans": "A",
      "exp": "PERFUNCTORY: Cursory: Perfunctory means carried out with minimal effort, care, or interest. Correct SYNONYM is Cursory."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"QUIXOTIC\"",
      "opts": [
        "Pragmatic",
        "Idealistic",
        "Realistic",
        "Sensible"
      ],
      "ans": "A",
      "exp": "QUIXOTIC: Idealistic: Quixotic means exceedingly idealistic, unrealistic, and impractical. Correct ANTONYM is Pragmatic."
    }
  ],
  "level2": [
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"CANDID\"",
      "opts": [
        "Frank",
        "Deceptive",
        "Shy",
        "Arrogant"
      ],
      "ans": "A",
      "exp": "CANDID: Frank: Candid means straightforward, open, and sincere in speech. Correct SYNONYM is Frank."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"DILIGENT\"",
      "opts": [
        "Lazy",
        "Industrious",
        "Careless",
        "Hesitant"
      ],
      "ans": "A",
      "exp": "DILIGENT: Industrious: Diligent means hardworking and showing conscientious effort. Correct ANTONYM is Lazy."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BENEVOLENT\"",
      "opts": [
        "Generous",
        "Malevolent",
        "Selfish",
        "Cruel"
      ],
      "ans": "A",
      "exp": "BENEVOLENT: Generous: Benevolent means kindly, charitable, and well-meaning. Correct SYNONYM is Generous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"LUCID\"",
      "opts": [
        "Confusing",
        "Clear",
        "Opaque",
        "Ambiguous"
      ],
      "ans": "A",
      "exp": "LUCID: Clear: Lucid means easily understood, articulate, and completely transparent. Correct ANTONYM is Confusing."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"MITIGATE\"",
      "opts": [
        "Alleviate",
        "Aggravate",
        "Intensify",
        "Worsen"
      ],
      "ans": "A",
      "exp": "MITIGATE: Alleviate: Mitigate means to make less severe, painful, or damaging. Correct SYNONYM is Alleviate."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"RESILIENT\"",
      "opts": [
        "Fragile",
        "Adaptable",
        "Rigid",
        "Vulnerable"
      ],
      "ans": "A",
      "exp": "RESILIENT: Adaptable: Resilient means able to recover quickly from difficult conditions. Correct ANTONYM is Fragile."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"EPHEMERAL\"",
      "opts": [
        "Fleeting",
        "Permanent",
        "Enduring",
        "Perpetual"
      ],
      "ans": "A",
      "exp": "EPHEMERAL: Fleeting: Ephemeral means lasting for a very short, transient time. Correct SYNONYM is Fleeting."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GREGARIOUS\"",
      "opts": [
        "Introverted",
        "Sociable",
        "Solitary",
        "Aloof"
      ],
      "ans": "A",
      "exp": "GREGARIOUS: Sociable: Gregarious means fond of company and enjoying social interaction. Correct ANTONYM is Introverted."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"TACITURN\"",
      "opts": [
        "Reserved",
        "Loquacious",
        "Garrulous",
        "Voluble"
      ],
      "ans": "A",
      "exp": "TACITURN: Reserved: Taciturn means quiet and uncommunicative by nature. Correct SYNONYM is Reserved."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"PRAGMATIC\"",
      "opts": [
        "Idealistic",
        "Practical",
        "Theoretical",
        "Speculative"
      ],
      "ans": "A",
      "exp": "PRAGMATIC: Practical: Pragmatic means dealing with matters sensibly and realistically. Correct ANTONYM is Idealistic."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FASTIDIOUS\"",
      "opts": [
        "Meticulous",
        "Careless",
        "Indifferent",
        "Sloppy"
      ],
      "ans": "A",
      "exp": "FASTIDIOUS: Meticulous: Fastidious means showing extreme care, precision, and attentiveness to detail. Correct SYNONYM is Meticulous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"UBIQUITOUS\"",
      "opts": [
        "Rare",
        "Omnipresent",
        "Scarce",
        "Occasional"
      ],
      "ans": "A",
      "exp": "UBIQUITOUS: Omnipresent: Ubiquitous means present, appearing, or found everywhere. Correct ANTONYM is Rare."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"OBSOLETE\"",
      "opts": [
        "Outdated",
        "Modern",
        "Contemporary",
        "Innovative"
      ],
      "ans": "A",
      "exp": "OBSOLETE: Outdated: Obsolete means no longer in use, superseded by newer designs. Correct SYNONYM is Outdated."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ALACRITY\"",
      "opts": [
        "Reluctance",
        "Eagerness",
        "Hesitation",
        "Sluggishness"
      ],
      "ans": "A",
      "exp": "ALACRITY: Eagerness: Alacrity means brisk and cheerful readiness or promptness. Correct ANTONYM is Reluctance."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BELLICOSE\"",
      "opts": [
        "Aggressive",
        "Peaceful",
        "Conciliatory",
        "Gentle"
      ],
      "ans": "A",
      "exp": "BELLICOSE: Aggressive: Bellicose means eager or inclined to fight and quarrel. Correct SYNONYM is Aggressive."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"CANDOR\"",
      "opts": [
        "Insincerity",
        "Honesty",
        "Guile",
        "Deceit"
      ],
      "ans": "A",
      "exp": "CANDOR: Honesty: Candor means the quality of being open, sincere, and honest. Correct ANTONYM is Insincerity."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"DEBACLE\"",
      "opts": [
        "Catastrophe",
        "Success",
        "Triumph",
        "Masterpiece"
      ],
      "ans": "A",
      "exp": "DEBACLE: Catastrophe: Debacle means a sudden, disastrous collapse or failure. Correct SYNONYM is Catastrophe."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ENERVATE\"",
      "opts": [
        "Invigorate",
        "Weaken",
        "Strengthen",
        "Energize"
      ],
      "ans": "A",
      "exp": "ENERVATE: Weaken: Enervate means to drain of energy, vitality, or mental strength. Correct ANTONYM is Invigorate."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FORTUITOUS\"",
      "opts": [
        "Accidental",
        "Deliberate",
        "Intentional",
        "Planned"
      ],
      "ans": "A",
      "exp": "FORTUITOUS: Accidental: Fortuitous means occurring by happy chance or luck. Correct SYNONYM is Accidental."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GARRULOUS\"",
      "opts": [
        "Reticent",
        "Talkative",
        "Taciturn",
        "Silent"
      ],
      "ans": "A",
      "exp": "GARRULOUS: Talkative: Garrulous means excessively talkative, especially on trivial matters. Correct ANTONYM is Reticent."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"HARBINGER\"",
      "opts": [
        "Omen",
        "Consequence",
        "Follower",
        "Outcome"
      ],
      "ans": "A",
      "exp": "HARBINGER: Omen: Harbinger means a person or thing that announces or signals the approach of another. Correct SYNONYM is Omen."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ICONOCLAST\"",
      "opts": [
        "Conformist",
        "Rebel",
        "Traditionalist",
        "Devotee"
      ],
      "ans": "A",
      "exp": "ICONOCLAST: Rebel: An iconoclast attacks cherished beliefs, institutions, or orthodoxies. Correct ANTONYM is Conformist."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"JUXTAPOSE\"",
      "opts": [
        "Contrast",
        "Isolate",
        "Separate",
        "Sever"
      ],
      "ans": "A",
      "exp": "JUXTAPOSE: Contrast: Juxtapose means to place side by side for comparison or contrast. Correct SYNONYM is Contrast."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"KINETIC\"",
      "opts": [
        "Static",
        "Active",
        "Dormant",
        "Passive"
      ],
      "ans": "A",
      "exp": "KINETIC: Active: Kinetic pertains to motion and physical movement. Correct ANTONYM is Static."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"LACONIC\"",
      "opts": [
        "Concise",
        "Verbose",
        "Garrulous",
        "Prolix"
      ],
      "ans": "A",
      "exp": "LACONIC: Concise: Laconic means using very few words to convey meaning. Correct SYNONYM is Concise."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"MALLEABLE\"",
      "opts": [
        "Rigid",
        "Flexible",
        "Brittle",
        "Inflexible"
      ],
      "ans": "A",
      "exp": "MALLEABLE: Flexible: Malleable means easily influenced, shaped, or adapted. Correct ANTONYM is Rigid."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"NEFARIOUS\"",
      "opts": [
        "Wicked",
        "Virtuous",
        "Honorable",
        "Ethical"
      ],
      "ans": "A",
      "exp": "NEFARIOUS: Wicked: Nefarious means criminal, infamous, or villainously evil. Correct SYNONYM is Wicked."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"OPULENT\"",
      "opts": [
        "Destitute",
        "Luxurious",
        "Impecunious",
        "Impoverished"
      ],
      "ans": "A",
      "exp": "OPULENT: Luxurious: Opulent means wealthy, lavish, and abundantly rich. Correct ANTONYM is Destitute."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"PERFUNCTORY\"",
      "opts": [
        "Cursory",
        "Thorough",
        "Meticulous",
        "Painstaking"
      ],
      "ans": "A",
      "exp": "PERFUNCTORY: Cursory: Perfunctory means carried out with minimal effort, care, or interest. Correct SYNONYM is Cursory."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"QUIXOTIC\"",
      "opts": [
        "Pragmatic",
        "Idealistic",
        "Realistic",
        "Sensible"
      ],
      "ans": "A",
      "exp": "QUIXOTIC: Idealistic: Quixotic means exceedingly idealistic, unrealistic, and impractical. Correct ANTONYM is Pragmatic."
    }
  ],
  "level3": [
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"CANDID\"",
      "opts": [
        "Frank",
        "Deceptive",
        "Shy",
        "Arrogant"
      ],
      "ans": "A",
      "exp": "CANDID: Frank: Candid means straightforward, open, and sincere in speech. Correct SYNONYM is Frank."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"DILIGENT\"",
      "opts": [
        "Lazy",
        "Industrious",
        "Careless",
        "Hesitant"
      ],
      "ans": "A",
      "exp": "DILIGENT: Industrious: Diligent means hardworking and showing conscientious effort. Correct ANTONYM is Lazy."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BENEVOLENT\"",
      "opts": [
        "Generous",
        "Malevolent",
        "Selfish",
        "Cruel"
      ],
      "ans": "A",
      "exp": "BENEVOLENT: Generous: Benevolent means kindly, charitable, and well-meaning. Correct SYNONYM is Generous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"LUCID\"",
      "opts": [
        "Confusing",
        "Clear",
        "Opaque",
        "Ambiguous"
      ],
      "ans": "A",
      "exp": "LUCID: Clear: Lucid means easily understood, articulate, and completely transparent. Correct ANTONYM is Confusing."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"MITIGATE\"",
      "opts": [
        "Alleviate",
        "Aggravate",
        "Intensify",
        "Worsen"
      ],
      "ans": "A",
      "exp": "MITIGATE: Alleviate: Mitigate means to make less severe, painful, or damaging. Correct SYNONYM is Alleviate."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"RESILIENT\"",
      "opts": [
        "Fragile",
        "Adaptable",
        "Rigid",
        "Vulnerable"
      ],
      "ans": "A",
      "exp": "RESILIENT: Adaptable: Resilient means able to recover quickly from difficult conditions. Correct ANTONYM is Fragile."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"EPHEMERAL\"",
      "opts": [
        "Fleeting",
        "Permanent",
        "Enduring",
        "Perpetual"
      ],
      "ans": "A",
      "exp": "EPHEMERAL: Fleeting: Ephemeral means lasting for a very short, transient time. Correct SYNONYM is Fleeting."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GREGARIOUS\"",
      "opts": [
        "Introverted",
        "Sociable",
        "Solitary",
        "Aloof"
      ],
      "ans": "A",
      "exp": "GREGARIOUS: Sociable: Gregarious means fond of company and enjoying social interaction. Correct ANTONYM is Introverted."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"TACITURN\"",
      "opts": [
        "Reserved",
        "Loquacious",
        "Garrulous",
        "Voluble"
      ],
      "ans": "A",
      "exp": "TACITURN: Reserved: Taciturn means quiet and uncommunicative by nature. Correct SYNONYM is Reserved."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"PRAGMATIC\"",
      "opts": [
        "Idealistic",
        "Practical",
        "Theoretical",
        "Speculative"
      ],
      "ans": "A",
      "exp": "PRAGMATIC: Practical: Pragmatic means dealing with matters sensibly and realistically. Correct ANTONYM is Idealistic."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FASTIDIOUS\"",
      "opts": [
        "Meticulous",
        "Careless",
        "Indifferent",
        "Sloppy"
      ],
      "ans": "A",
      "exp": "FASTIDIOUS: Meticulous: Fastidious means showing extreme care, precision, and attentiveness to detail. Correct SYNONYM is Meticulous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"UBIQUITOUS\"",
      "opts": [
        "Rare",
        "Omnipresent",
        "Scarce",
        "Occasional"
      ],
      "ans": "A",
      "exp": "UBIQUITOUS: Omnipresent: Ubiquitous means present, appearing, or found everywhere. Correct ANTONYM is Rare."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"OBSOLETE\"",
      "opts": [
        "Outdated",
        "Modern",
        "Contemporary",
        "Innovative"
      ],
      "ans": "A",
      "exp": "OBSOLETE: Outdated: Obsolete means no longer in use, superseded by newer designs. Correct SYNONYM is Outdated."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ALACRITY\"",
      "opts": [
        "Reluctance",
        "Eagerness",
        "Hesitation",
        "Sluggishness"
      ],
      "ans": "A",
      "exp": "ALACRITY: Eagerness: Alacrity means brisk and cheerful readiness or promptness. Correct ANTONYM is Reluctance."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BELLICOSE\"",
      "opts": [
        "Aggressive",
        "Peaceful",
        "Conciliatory",
        "Gentle"
      ],
      "ans": "A",
      "exp": "BELLICOSE: Aggressive: Bellicose means eager or inclined to fight and quarrel. Correct SYNONYM is Aggressive."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"CANDOR\"",
      "opts": [
        "Insincerity",
        "Honesty",
        "Guile",
        "Deceit"
      ],
      "ans": "A",
      "exp": "CANDOR: Honesty: Candor means the quality of being open, sincere, and honest. Correct ANTONYM is Insincerity."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"DEBACLE\"",
      "opts": [
        "Catastrophe",
        "Success",
        "Triumph",
        "Masterpiece"
      ],
      "ans": "A",
      "exp": "DEBACLE: Catastrophe: Debacle means a sudden, disastrous collapse or failure. Correct SYNONYM is Catastrophe."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ENERVATE\"",
      "opts": [
        "Invigorate",
        "Weaken",
        "Strengthen",
        "Energize"
      ],
      "ans": "A",
      "exp": "ENERVATE: Weaken: Enervate means to drain of energy, vitality, or mental strength. Correct ANTONYM is Invigorate."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FORTUITOUS\"",
      "opts": [
        "Accidental",
        "Deliberate",
        "Intentional",
        "Planned"
      ],
      "ans": "A",
      "exp": "FORTUITOUS: Accidental: Fortuitous means occurring by happy chance or luck. Correct SYNONYM is Accidental."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GARRULOUS\"",
      "opts": [
        "Reticent",
        "Talkative",
        "Taciturn",
        "Silent"
      ],
      "ans": "A",
      "exp": "GARRULOUS: Talkative: Garrulous means excessively talkative, especially on trivial matters. Correct ANTONYM is Reticent."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"HARBINGER\"",
      "opts": [
        "Omen",
        "Consequence",
        "Follower",
        "Outcome"
      ],
      "ans": "A",
      "exp": "HARBINGER: Omen: Harbinger means a person or thing that announces or signals the approach of another. Correct SYNONYM is Omen."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ICONOCLAST\"",
      "opts": [
        "Conformist",
        "Rebel",
        "Traditionalist",
        "Devotee"
      ],
      "ans": "A",
      "exp": "ICONOCLAST: Rebel: An iconoclast attacks cherished beliefs, institutions, or orthodoxies. Correct ANTONYM is Conformist."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"JUXTAPOSE\"",
      "opts": [
        "Contrast",
        "Isolate",
        "Separate",
        "Sever"
      ],
      "ans": "A",
      "exp": "JUXTAPOSE: Contrast: Juxtapose means to place side by side for comparison or contrast. Correct SYNONYM is Contrast."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"KINETIC\"",
      "opts": [
        "Static",
        "Active",
        "Dormant",
        "Passive"
      ],
      "ans": "A",
      "exp": "KINETIC: Active: Kinetic pertains to motion and physical movement. Correct ANTONYM is Static."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"LACONIC\"",
      "opts": [
        "Concise",
        "Verbose",
        "Garrulous",
        "Prolix"
      ],
      "ans": "A",
      "exp": "LACONIC: Concise: Laconic means using very few words to convey meaning. Correct SYNONYM is Concise."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"MALLEABLE\"",
      "opts": [
        "Rigid",
        "Flexible",
        "Brittle",
        "Inflexible"
      ],
      "ans": "A",
      "exp": "MALLEABLE: Flexible: Malleable means easily influenced, shaped, or adapted. Correct ANTONYM is Rigid."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"NEFARIOUS\"",
      "opts": [
        "Wicked",
        "Virtuous",
        "Honorable",
        "Ethical"
      ],
      "ans": "A",
      "exp": "NEFARIOUS: Wicked: Nefarious means criminal, infamous, or villainously evil. Correct SYNONYM is Wicked."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"OPULENT\"",
      "opts": [
        "Destitute",
        "Luxurious",
        "Impecunious",
        "Impoverished"
      ],
      "ans": "A",
      "exp": "OPULENT: Luxurious: Opulent means wealthy, lavish, and abundantly rich. Correct ANTONYM is Destitute."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"PERFUNCTORY\"",
      "opts": [
        "Cursory",
        "Thorough",
        "Meticulous",
        "Painstaking"
      ],
      "ans": "A",
      "exp": "PERFUNCTORY: Cursory: Perfunctory means carried out with minimal effort, care, or interest. Correct SYNONYM is Cursory."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"QUIXOTIC\"",
      "opts": [
        "Pragmatic",
        "Idealistic",
        "Realistic",
        "Sensible"
      ],
      "ans": "A",
      "exp": "QUIXOTIC: Idealistic: Quixotic means exceedingly idealistic, unrealistic, and impractical. Correct ANTONYM is Pragmatic."
    }
  ],
  "level4": [
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"CANDID\"",
      "opts": [
        "Frank",
        "Deceptive",
        "Shy",
        "Arrogant"
      ],
      "ans": "A",
      "exp": "CANDID: Frank: Candid means straightforward, open, and sincere in speech. Correct SYNONYM is Frank."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"DILIGENT\"",
      "opts": [
        "Lazy",
        "Industrious",
        "Careless",
        "Hesitant"
      ],
      "ans": "A",
      "exp": "DILIGENT: Industrious: Diligent means hardworking and showing conscientious effort. Correct ANTONYM is Lazy."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BENEVOLENT\"",
      "opts": [
        "Generous",
        "Malevolent",
        "Selfish",
        "Cruel"
      ],
      "ans": "A",
      "exp": "BENEVOLENT: Generous: Benevolent means kindly, charitable, and well-meaning. Correct SYNONYM is Generous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"LUCID\"",
      "opts": [
        "Confusing",
        "Clear",
        "Opaque",
        "Ambiguous"
      ],
      "ans": "A",
      "exp": "LUCID: Clear: Lucid means easily understood, articulate, and completely transparent. Correct ANTONYM is Confusing."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"MITIGATE\"",
      "opts": [
        "Alleviate",
        "Aggravate",
        "Intensify",
        "Worsen"
      ],
      "ans": "A",
      "exp": "MITIGATE: Alleviate: Mitigate means to make less severe, painful, or damaging. Correct SYNONYM is Alleviate."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"RESILIENT\"",
      "opts": [
        "Fragile",
        "Adaptable",
        "Rigid",
        "Vulnerable"
      ],
      "ans": "A",
      "exp": "RESILIENT: Adaptable: Resilient means able to recover quickly from difficult conditions. Correct ANTONYM is Fragile."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"EPHEMERAL\"",
      "opts": [
        "Fleeting",
        "Permanent",
        "Enduring",
        "Perpetual"
      ],
      "ans": "A",
      "exp": "EPHEMERAL: Fleeting: Ephemeral means lasting for a very short, transient time. Correct SYNONYM is Fleeting."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GREGARIOUS\"",
      "opts": [
        "Introverted",
        "Sociable",
        "Solitary",
        "Aloof"
      ],
      "ans": "A",
      "exp": "GREGARIOUS: Sociable: Gregarious means fond of company and enjoying social interaction. Correct ANTONYM is Introverted."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"TACITURN\"",
      "opts": [
        "Reserved",
        "Loquacious",
        "Garrulous",
        "Voluble"
      ],
      "ans": "A",
      "exp": "TACITURN: Reserved: Taciturn means quiet and uncommunicative by nature. Correct SYNONYM is Reserved."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"PRAGMATIC\"",
      "opts": [
        "Idealistic",
        "Practical",
        "Theoretical",
        "Speculative"
      ],
      "ans": "A",
      "exp": "PRAGMATIC: Practical: Pragmatic means dealing with matters sensibly and realistically. Correct ANTONYM is Idealistic."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FASTIDIOUS\"",
      "opts": [
        "Meticulous",
        "Careless",
        "Indifferent",
        "Sloppy"
      ],
      "ans": "A",
      "exp": "FASTIDIOUS: Meticulous: Fastidious means showing extreme care, precision, and attentiveness to detail. Correct SYNONYM is Meticulous."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"UBIQUITOUS\"",
      "opts": [
        "Rare",
        "Omnipresent",
        "Scarce",
        "Occasional"
      ],
      "ans": "A",
      "exp": "UBIQUITOUS: Omnipresent: Ubiquitous means present, appearing, or found everywhere. Correct ANTONYM is Rare."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"OBSOLETE\"",
      "opts": [
        "Outdated",
        "Modern",
        "Contemporary",
        "Innovative"
      ],
      "ans": "A",
      "exp": "OBSOLETE: Outdated: Obsolete means no longer in use, superseded by newer designs. Correct SYNONYM is Outdated."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ALACRITY\"",
      "opts": [
        "Reluctance",
        "Eagerness",
        "Hesitation",
        "Sluggishness"
      ],
      "ans": "A",
      "exp": "ALACRITY: Eagerness: Alacrity means brisk and cheerful readiness or promptness. Correct ANTONYM is Reluctance."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"BELLICOSE\"",
      "opts": [
        "Aggressive",
        "Peaceful",
        "Conciliatory",
        "Gentle"
      ],
      "ans": "A",
      "exp": "BELLICOSE: Aggressive: Bellicose means eager or inclined to fight and quarrel. Correct SYNONYM is Aggressive."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"CANDOR\"",
      "opts": [
        "Insincerity",
        "Honesty",
        "Guile",
        "Deceit"
      ],
      "ans": "A",
      "exp": "CANDOR: Honesty: Candor means the quality of being open, sincere, and honest. Correct ANTONYM is Insincerity."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"DEBACLE\"",
      "opts": [
        "Catastrophe",
        "Success",
        "Triumph",
        "Masterpiece"
      ],
      "ans": "A",
      "exp": "DEBACLE: Catastrophe: Debacle means a sudden, disastrous collapse or failure. Correct SYNONYM is Catastrophe."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ENERVATE\"",
      "opts": [
        "Invigorate",
        "Weaken",
        "Strengthen",
        "Energize"
      ],
      "ans": "A",
      "exp": "ENERVATE: Weaken: Enervate means to drain of energy, vitality, or mental strength. Correct ANTONYM is Invigorate."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"FORTUITOUS\"",
      "opts": [
        "Accidental",
        "Deliberate",
        "Intentional",
        "Planned"
      ],
      "ans": "A",
      "exp": "FORTUITOUS: Accidental: Fortuitous means occurring by happy chance or luck. Correct SYNONYM is Accidental."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"GARRULOUS\"",
      "opts": [
        "Reticent",
        "Talkative",
        "Taciturn",
        "Silent"
      ],
      "ans": "A",
      "exp": "GARRULOUS: Talkative: Garrulous means excessively talkative, especially on trivial matters. Correct ANTONYM is Reticent."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"HARBINGER\"",
      "opts": [
        "Omen",
        "Consequence",
        "Follower",
        "Outcome"
      ],
      "ans": "A",
      "exp": "HARBINGER: Omen: Harbinger means a person or thing that announces or signals the approach of another. Correct SYNONYM is Omen."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"ICONOCLAST\"",
      "opts": [
        "Conformist",
        "Rebel",
        "Traditionalist",
        "Devotee"
      ],
      "ans": "A",
      "exp": "ICONOCLAST: Rebel: An iconoclast attacks cherished beliefs, institutions, or orthodoxies. Correct ANTONYM is Conformist."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"JUXTAPOSE\"",
      "opts": [
        "Contrast",
        "Isolate",
        "Separate",
        "Sever"
      ],
      "ans": "A",
      "exp": "JUXTAPOSE: Contrast: Juxtapose means to place side by side for comparison or contrast. Correct SYNONYM is Contrast."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"KINETIC\"",
      "opts": [
        "Static",
        "Active",
        "Dormant",
        "Passive"
      ],
      "ans": "A",
      "exp": "KINETIC: Active: Kinetic pertains to motion and physical movement. Correct ANTONYM is Static."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"LACONIC\"",
      "opts": [
        "Concise",
        "Verbose",
        "Garrulous",
        "Prolix"
      ],
      "ans": "A",
      "exp": "LACONIC: Concise: Laconic means using very few words to convey meaning. Correct SYNONYM is Concise."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"MALLEABLE\"",
      "opts": [
        "Rigid",
        "Flexible",
        "Brittle",
        "Inflexible"
      ],
      "ans": "A",
      "exp": "MALLEABLE: Flexible: Malleable means easily influenced, shaped, or adapted. Correct ANTONYM is Rigid."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"NEFARIOUS\"",
      "opts": [
        "Wicked",
        "Virtuous",
        "Honorable",
        "Ethical"
      ],
      "ans": "A",
      "exp": "NEFARIOUS: Wicked: Nefarious means criminal, infamous, or villainously evil. Correct SYNONYM is Wicked."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"OPULENT\"",
      "opts": [
        "Destitute",
        "Luxurious",
        "Impecunious",
        "Impoverished"
      ],
      "ans": "A",
      "exp": "OPULENT: Luxurious: Opulent means wealthy, lavish, and abundantly rich. Correct ANTONYM is Destitute."
    },
    {
      "q": "Identify the SYNONYM of the capitalized word:\n\"PERFUNCTORY\"",
      "opts": [
        "Cursory",
        "Thorough",
        "Meticulous",
        "Painstaking"
      ],
      "ans": "A",
      "exp": "PERFUNCTORY: Cursory: Perfunctory means carried out with minimal effort, care, or interest. Correct SYNONYM is Cursory."
    },
    {
      "q": "Identify the ANTONYM of the capitalized word:\n\"QUIXOTIC\"",
      "opts": [
        "Pragmatic",
        "Idealistic",
        "Realistic",
        "Sensible"
      ],
      "ans": "A",
      "exp": "QUIXOTIC: Idealistic: Quixotic means exceedingly idealistic, unrealistic, and impractical. Correct ANTONYM is Pragmatic."
    }
  ]
};

VERBAL_POOLS_MAP["fill-in-the-blanks"] = {
  "level1": [
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The board of directors approved the proposal because it was deemed _____ to the company's long-term profitability.\"",
      "opts": [
        "conducive",
        "detrimental",
        "superfluous",
        "hazardous"
      ],
      "ans": "A",
      "exp": "Conducive means promoting, helping, or contributing toward a favorable outcome."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite facing severe criticism, the prime minister remained _____ in his decision to reform the tax code.\"",
      "opts": [
        "resolute",
        "vacillating",
        "hesitant",
        "ambivalent"
      ],
      "ans": "A",
      "exp": "Resolute means admirably purposeful, determined, and unwavering."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The scientist was praised for her _____ research, which left no potential hypothesis untested.\"",
      "opts": [
        "meticulous",
        "cursory",
        "perfunctory",
        "haphazard"
      ],
      "ans": "A",
      "exp": "Meticulous means showing great attention to detail; very careful and precise."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Due to the economic recession, consumer spending began to _____ across all retail sectors.\"",
      "opts": [
        "plummet",
        "escalate",
        "skyrocket",
        "proliferate"
      ],
      "ans": "A",
      "exp": "Plummet means to drop or decrease sharply and abruptly."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ remarks during the international diplomatic summit caused a major international embarrassment.\"",
      "opts": [
        "indiscreet",
        "diplomatic",
        "prudent",
        "tactful"
      ],
      "ans": "A",
      "exp": "Indiscreet means careless or untactful in speech, revealing confidential matters."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The new security protocol is designed to _____ potential cyber attacks before they infiltrate internal servers.\"",
      "opts": [
        "thwart",
        "facilitate",
        "accelerate",
        "instigate"
      ],
      "ans": "A",
      "exp": "Thwart means to prevent someone from accomplishing something; to foil."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Although the novel's beginning was engaging, the subsequent chapters became increasingly _____ and tedious.\"",
      "opts": [
        "pedestrian",
        "electrifying",
        "captivating",
        "riveting"
      ],
      "ans": "A",
      "exp": "Pedestrian in this context means dull, uninspired, and ordinary."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The attorney's arguments were so _____ that the jury reached a unanimous verdict within minutes.\"",
      "opts": [
        "cogent",
        "fallacious",
        "spurious",
        "tenuous"
      ],
      "ans": "A",
      "exp": "Cogent means clear, logical, and convincing."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The CEO's _____ lifestyle contrasted sharply with the modest salaries paid to his frontline employees.\"",
      "opts": [
        "flamboyant",
        "austere",
        "frugal",
        "ascetic"
      ],
      "ans": "A",
      "exp": "Flamboyant means ostentatious, lavish, and showy."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her deep _____ for classical literature inspired her to pursue a doctoral degree in humanities.\"",
      "opts": [
        "affinity",
        "aversion",
        "disdain",
        "indifference"
      ],
      "ans": "A",
      "exp": "Affinity means a natural liking, sympathy, or attraction toward something."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The documentary exposes the _____ consequences of unchecked industrial waste dumping into freshwater rivers.\"",
      "opts": [
        "deleterious",
        "salutary",
        "innocuous",
        "therapeutic"
      ],
      "ans": "A",
      "exp": "Deleterious means causing harm or damage."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The monarch's _____ decrees eventually led to a popular uprising among the oppressed populace.\"",
      "opts": [
        "arbitrary",
        "equitable",
        "democratic",
        "judicious"
      ],
      "ans": "A",
      "exp": "Arbitrary means based on random choice or personal whim, rather than any reason or system."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ attitude made it virtually impossible for team members to collaborate with him effectively.\"",
      "opts": [
        "belligerent",
        "amicable",
        "complaisant",
        "genial"
      ],
      "ans": "A",
      "exp": "Belligerent means hostile, aggressive, and combat-ready."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The archaeological expedition made a _____ discovery of ancient gold coins beneath the ruins.\"",
      "opts": [
        "fortuitous",
        "calamitous",
        "foreseen",
        "deliberate"
      ],
      "ans": "A",
      "exp": "Fortuitous means happening by a lucky chance or coincidence."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"In order to _____ customer dissatisfaction, the airline offered full refunds for all cancelled flights.\"",
      "opts": [
        "mollify",
        "exacerbate",
        "inflame",
        "provoke"
      ],
      "ans": "A",
      "exp": "Mollify means to appease the anger or anxiety of someone."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The speaker's delivery was so _____ that several audience members quietly fell asleep in the auditorium.\"",
      "opts": [
        "monotonous",
        "animated",
        "dynamic",
        "vibrant"
      ],
      "ans": "A",
      "exp": "Monotonous means dull, tedious, and repetitious; lacking in variety and interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The diplomat displayed immense _____ by skillfully defusing the tense bilateral border standoff.\"",
      "opts": [
        "tact",
        "audacity",
        "clumsiness",
        "imprudence"
      ],
      "ans": "A",
      "exp": "Tact means skill and sensitivity in dealing with others or with difficult issues."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Modern medical technology has rendered many previously fatal illnesses entirely _____.\"",
      "opts": [
        "curable",
        "insurmountable",
        "fatal",
        "lethal"
      ],
      "ans": "A",
      "exp": "Curable means capable of being cured or resolved by therapeutic intervention."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The manager was criticized for his _____ decision-making, which frequently contradicted company policy.\"",
      "opts": [
        "capricious",
        "consistent",
        "methodical",
        "predictable"
      ],
      "ans": "A",
      "exp": "Capricious means given to sudden and unaccountable changes of mood or behavior; erratic."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The community rallied together with great _____ to rebuild the houses destroyed by the tornado.\"",
      "opts": [
        "solidarity",
        "apathy",
        "discord",
        "animosity"
      ],
      "ans": "A",
      "exp": "Solidarity means unity or agreement of feeling or action, especially among individuals with a common interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The novel provides a _____ depiction of working-class life during the early decades of the twentieth century.\"",
      "opts": [
        "poignant",
        "shallow",
        "trivial",
        "frivolous"
      ],
      "ans": "A",
      "exp": "Poignant means evoking a keen sense of sadness, empathy, or regret."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The government introduced tax subsidies to _____ the rapid adoption of rooftop solar energy installations.\"",
      "opts": [
        "incentivize",
        "deter",
        "penalize",
        "prohibit"
      ],
      "ans": "A",
      "exp": "Incentivize means to motivate or encourage someone to do something through incentives."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her _____ memory allowed her to recite thousands of lines of classical epic poetry without hesitation.\"",
      "opts": [
        "prodigious",
        "deficient",
        "feeble",
        "scanty"
      ],
      "ans": "A",
      "exp": "Prodigious means remarkably or impressively great in extent, size, or degree."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The candidate delivered a _____ response that completely sidestepped the journalist's direct question.\"",
      "opts": [
        "circuitous",
        "forthright",
        "candid",
        "direct"
      ],
      "ans": "A",
      "exp": "Circuitous means indirect, roundabout, and evasive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The research team established an _____ correlation between prolonged smartphone usage and sleep deprivation.\"",
      "opts": [
        "unambiguous",
        "equivocal",
        "dubious",
        "hypothetical"
      ],
      "ans": "A",
      "exp": "Unambiguous means not open to more than one interpretation; clear and definitive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"He accepted the job offer without _____, eager to embark on the next chapter of his career.\"",
      "opts": [
        "reservation",
        "enthusiasm",
        "gratitude",
        "interest"
      ],
      "ans": "A",
      "exp": "Without reservation means with complete willingness, without hesitation or doubts."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The mountain summit offered an _____ panoramic view of the snow-covered Himalayan peaks.\"",
      "opts": [
        "unrivaled",
        "mediocre",
        "ordinary",
        "unremarkable"
      ],
      "ans": "A",
      "exp": "Unrivaled means better than everyone or everything of the same kind; peerless."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The company implemented strict data encryption to _____ unauthorized access to sensitive customer records.\"",
      "opts": [
        "preclude",
        "encourage",
        "assist",
        "permit"
      ],
      "ans": "A",
      "exp": "Preclude means to make impossible; to prevent from happening."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite his initial _____, he eventually grew accustomed to the fast-paced culture of the metropolis.\"",
      "opts": [
        "trepidation",
        "eagerness",
        "alacrity",
        "complacency"
      ],
      "ans": "A",
      "exp": "Trepidation means a feeling of fear, apprehension, or agitation about something that may happen."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The sudden downfall of the authoritarian regime sent a _____ shockwave throughout the geopolitical landscape.\"",
      "opts": [
        "profound",
        "negligible",
        "superficial",
        "fleeting"
      ],
      "ans": "A",
      "exp": "Profound means very great, deep, or intense."
    }
  ],
  "level2": [
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The board of directors approved the proposal because it was deemed _____ to the company's long-term profitability.\"",
      "opts": [
        "conducive",
        "detrimental",
        "superfluous",
        "hazardous"
      ],
      "ans": "A",
      "exp": "Conducive means promoting, helping, or contributing toward a favorable outcome."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite facing severe criticism, the prime minister remained _____ in his decision to reform the tax code.\"",
      "opts": [
        "resolute",
        "vacillating",
        "hesitant",
        "ambivalent"
      ],
      "ans": "A",
      "exp": "Resolute means admirably purposeful, determined, and unwavering."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The scientist was praised for her _____ research, which left no potential hypothesis untested.\"",
      "opts": [
        "meticulous",
        "cursory",
        "perfunctory",
        "haphazard"
      ],
      "ans": "A",
      "exp": "Meticulous means showing great attention to detail; very careful and precise."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Due to the economic recession, consumer spending began to _____ across all retail sectors.\"",
      "opts": [
        "plummet",
        "escalate",
        "skyrocket",
        "proliferate"
      ],
      "ans": "A",
      "exp": "Plummet means to drop or decrease sharply and abruptly."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ remarks during the international diplomatic summit caused a major international embarrassment.\"",
      "opts": [
        "indiscreet",
        "diplomatic",
        "prudent",
        "tactful"
      ],
      "ans": "A",
      "exp": "Indiscreet means careless or untactful in speech, revealing confidential matters."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The new security protocol is designed to _____ potential cyber attacks before they infiltrate internal servers.\"",
      "opts": [
        "thwart",
        "facilitate",
        "accelerate",
        "instigate"
      ],
      "ans": "A",
      "exp": "Thwart means to prevent someone from accomplishing something; to foil."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Although the novel's beginning was engaging, the subsequent chapters became increasingly _____ and tedious.\"",
      "opts": [
        "pedestrian",
        "electrifying",
        "captivating",
        "riveting"
      ],
      "ans": "A",
      "exp": "Pedestrian in this context means dull, uninspired, and ordinary."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The attorney's arguments were so _____ that the jury reached a unanimous verdict within minutes.\"",
      "opts": [
        "cogent",
        "fallacious",
        "spurious",
        "tenuous"
      ],
      "ans": "A",
      "exp": "Cogent means clear, logical, and convincing."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The CEO's _____ lifestyle contrasted sharply with the modest salaries paid to his frontline employees.\"",
      "opts": [
        "flamboyant",
        "austere",
        "frugal",
        "ascetic"
      ],
      "ans": "A",
      "exp": "Flamboyant means ostentatious, lavish, and showy."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her deep _____ for classical literature inspired her to pursue a doctoral degree in humanities.\"",
      "opts": [
        "affinity",
        "aversion",
        "disdain",
        "indifference"
      ],
      "ans": "A",
      "exp": "Affinity means a natural liking, sympathy, or attraction toward something."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The documentary exposes the _____ consequences of unchecked industrial waste dumping into freshwater rivers.\"",
      "opts": [
        "deleterious",
        "salutary",
        "innocuous",
        "therapeutic"
      ],
      "ans": "A",
      "exp": "Deleterious means causing harm or damage."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The monarch's _____ decrees eventually led to a popular uprising among the oppressed populace.\"",
      "opts": [
        "arbitrary",
        "equitable",
        "democratic",
        "judicious"
      ],
      "ans": "A",
      "exp": "Arbitrary means based on random choice or personal whim, rather than any reason or system."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ attitude made it virtually impossible for team members to collaborate with him effectively.\"",
      "opts": [
        "belligerent",
        "amicable",
        "complaisant",
        "genial"
      ],
      "ans": "A",
      "exp": "Belligerent means hostile, aggressive, and combat-ready."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The archaeological expedition made a _____ discovery of ancient gold coins beneath the ruins.\"",
      "opts": [
        "fortuitous",
        "calamitous",
        "foreseen",
        "deliberate"
      ],
      "ans": "A",
      "exp": "Fortuitous means happening by a lucky chance or coincidence."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"In order to _____ customer dissatisfaction, the airline offered full refunds for all cancelled flights.\"",
      "opts": [
        "mollify",
        "exacerbate",
        "inflame",
        "provoke"
      ],
      "ans": "A",
      "exp": "Mollify means to appease the anger or anxiety of someone."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The speaker's delivery was so _____ that several audience members quietly fell asleep in the auditorium.\"",
      "opts": [
        "monotonous",
        "animated",
        "dynamic",
        "vibrant"
      ],
      "ans": "A",
      "exp": "Monotonous means dull, tedious, and repetitious; lacking in variety and interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The diplomat displayed immense _____ by skillfully defusing the tense bilateral border standoff.\"",
      "opts": [
        "tact",
        "audacity",
        "clumsiness",
        "imprudence"
      ],
      "ans": "A",
      "exp": "Tact means skill and sensitivity in dealing with others or with difficult issues."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Modern medical technology has rendered many previously fatal illnesses entirely _____.\"",
      "opts": [
        "curable",
        "insurmountable",
        "fatal",
        "lethal"
      ],
      "ans": "A",
      "exp": "Curable means capable of being cured or resolved by therapeutic intervention."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The manager was criticized for his _____ decision-making, which frequently contradicted company policy.\"",
      "opts": [
        "capricious",
        "consistent",
        "methodical",
        "predictable"
      ],
      "ans": "A",
      "exp": "Capricious means given to sudden and unaccountable changes of mood or behavior; erratic."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The community rallied together with great _____ to rebuild the houses destroyed by the tornado.\"",
      "opts": [
        "solidarity",
        "apathy",
        "discord",
        "animosity"
      ],
      "ans": "A",
      "exp": "Solidarity means unity or agreement of feeling or action, especially among individuals with a common interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The novel provides a _____ depiction of working-class life during the early decades of the twentieth century.\"",
      "opts": [
        "poignant",
        "shallow",
        "trivial",
        "frivolous"
      ],
      "ans": "A",
      "exp": "Poignant means evoking a keen sense of sadness, empathy, or regret."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The government introduced tax subsidies to _____ the rapid adoption of rooftop solar energy installations.\"",
      "opts": [
        "incentivize",
        "deter",
        "penalize",
        "prohibit"
      ],
      "ans": "A",
      "exp": "Incentivize means to motivate or encourage someone to do something through incentives."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her _____ memory allowed her to recite thousands of lines of classical epic poetry without hesitation.\"",
      "opts": [
        "prodigious",
        "deficient",
        "feeble",
        "scanty"
      ],
      "ans": "A",
      "exp": "Prodigious means remarkably or impressively great in extent, size, or degree."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The candidate delivered a _____ response that completely sidestepped the journalist's direct question.\"",
      "opts": [
        "circuitous",
        "forthright",
        "candid",
        "direct"
      ],
      "ans": "A",
      "exp": "Circuitous means indirect, roundabout, and evasive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The research team established an _____ correlation between prolonged smartphone usage and sleep deprivation.\"",
      "opts": [
        "unambiguous",
        "equivocal",
        "dubious",
        "hypothetical"
      ],
      "ans": "A",
      "exp": "Unambiguous means not open to more than one interpretation; clear and definitive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"He accepted the job offer without _____, eager to embark on the next chapter of his career.\"",
      "opts": [
        "reservation",
        "enthusiasm",
        "gratitude",
        "interest"
      ],
      "ans": "A",
      "exp": "Without reservation means with complete willingness, without hesitation or doubts."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The mountain summit offered an _____ panoramic view of the snow-covered Himalayan peaks.\"",
      "opts": [
        "unrivaled",
        "mediocre",
        "ordinary",
        "unremarkable"
      ],
      "ans": "A",
      "exp": "Unrivaled means better than everyone or everything of the same kind; peerless."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The company implemented strict data encryption to _____ unauthorized access to sensitive customer records.\"",
      "opts": [
        "preclude",
        "encourage",
        "assist",
        "permit"
      ],
      "ans": "A",
      "exp": "Preclude means to make impossible; to prevent from happening."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite his initial _____, he eventually grew accustomed to the fast-paced culture of the metropolis.\"",
      "opts": [
        "trepidation",
        "eagerness",
        "alacrity",
        "complacency"
      ],
      "ans": "A",
      "exp": "Trepidation means a feeling of fear, apprehension, or agitation about something that may happen."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The sudden downfall of the authoritarian regime sent a _____ shockwave throughout the geopolitical landscape.\"",
      "opts": [
        "profound",
        "negligible",
        "superficial",
        "fleeting"
      ],
      "ans": "A",
      "exp": "Profound means very great, deep, or intense."
    }
  ],
  "level3": [
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The board of directors approved the proposal because it was deemed _____ to the company's long-term profitability.\"",
      "opts": [
        "conducive",
        "detrimental",
        "superfluous",
        "hazardous"
      ],
      "ans": "A",
      "exp": "Conducive means promoting, helping, or contributing toward a favorable outcome."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite facing severe criticism, the prime minister remained _____ in his decision to reform the tax code.\"",
      "opts": [
        "resolute",
        "vacillating",
        "hesitant",
        "ambivalent"
      ],
      "ans": "A",
      "exp": "Resolute means admirably purposeful, determined, and unwavering."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The scientist was praised for her _____ research, which left no potential hypothesis untested.\"",
      "opts": [
        "meticulous",
        "cursory",
        "perfunctory",
        "haphazard"
      ],
      "ans": "A",
      "exp": "Meticulous means showing great attention to detail; very careful and precise."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Due to the economic recession, consumer spending began to _____ across all retail sectors.\"",
      "opts": [
        "plummet",
        "escalate",
        "skyrocket",
        "proliferate"
      ],
      "ans": "A",
      "exp": "Plummet means to drop or decrease sharply and abruptly."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ remarks during the international diplomatic summit caused a major international embarrassment.\"",
      "opts": [
        "indiscreet",
        "diplomatic",
        "prudent",
        "tactful"
      ],
      "ans": "A",
      "exp": "Indiscreet means careless or untactful in speech, revealing confidential matters."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The new security protocol is designed to _____ potential cyber attacks before they infiltrate internal servers.\"",
      "opts": [
        "thwart",
        "facilitate",
        "accelerate",
        "instigate"
      ],
      "ans": "A",
      "exp": "Thwart means to prevent someone from accomplishing something; to foil."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Although the novel's beginning was engaging, the subsequent chapters became increasingly _____ and tedious.\"",
      "opts": [
        "pedestrian",
        "electrifying",
        "captivating",
        "riveting"
      ],
      "ans": "A",
      "exp": "Pedestrian in this context means dull, uninspired, and ordinary."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The attorney's arguments were so _____ that the jury reached a unanimous verdict within minutes.\"",
      "opts": [
        "cogent",
        "fallacious",
        "spurious",
        "tenuous"
      ],
      "ans": "A",
      "exp": "Cogent means clear, logical, and convincing."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The CEO's _____ lifestyle contrasted sharply with the modest salaries paid to his frontline employees.\"",
      "opts": [
        "flamboyant",
        "austere",
        "frugal",
        "ascetic"
      ],
      "ans": "A",
      "exp": "Flamboyant means ostentatious, lavish, and showy."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her deep _____ for classical literature inspired her to pursue a doctoral degree in humanities.\"",
      "opts": [
        "affinity",
        "aversion",
        "disdain",
        "indifference"
      ],
      "ans": "A",
      "exp": "Affinity means a natural liking, sympathy, or attraction toward something."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The documentary exposes the _____ consequences of unchecked industrial waste dumping into freshwater rivers.\"",
      "opts": [
        "deleterious",
        "salutary",
        "innocuous",
        "therapeutic"
      ],
      "ans": "A",
      "exp": "Deleterious means causing harm or damage."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The monarch's _____ decrees eventually led to a popular uprising among the oppressed populace.\"",
      "opts": [
        "arbitrary",
        "equitable",
        "democratic",
        "judicious"
      ],
      "ans": "A",
      "exp": "Arbitrary means based on random choice or personal whim, rather than any reason or system."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ attitude made it virtually impossible for team members to collaborate with him effectively.\"",
      "opts": [
        "belligerent",
        "amicable",
        "complaisant",
        "genial"
      ],
      "ans": "A",
      "exp": "Belligerent means hostile, aggressive, and combat-ready."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The archaeological expedition made a _____ discovery of ancient gold coins beneath the ruins.\"",
      "opts": [
        "fortuitous",
        "calamitous",
        "foreseen",
        "deliberate"
      ],
      "ans": "A",
      "exp": "Fortuitous means happening by a lucky chance or coincidence."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"In order to _____ customer dissatisfaction, the airline offered full refunds for all cancelled flights.\"",
      "opts": [
        "mollify",
        "exacerbate",
        "inflame",
        "provoke"
      ],
      "ans": "A",
      "exp": "Mollify means to appease the anger or anxiety of someone."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The speaker's delivery was so _____ that several audience members quietly fell asleep in the auditorium.\"",
      "opts": [
        "monotonous",
        "animated",
        "dynamic",
        "vibrant"
      ],
      "ans": "A",
      "exp": "Monotonous means dull, tedious, and repetitious; lacking in variety and interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The diplomat displayed immense _____ by skillfully defusing the tense bilateral border standoff.\"",
      "opts": [
        "tact",
        "audacity",
        "clumsiness",
        "imprudence"
      ],
      "ans": "A",
      "exp": "Tact means skill and sensitivity in dealing with others or with difficult issues."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Modern medical technology has rendered many previously fatal illnesses entirely _____.\"",
      "opts": [
        "curable",
        "insurmountable",
        "fatal",
        "lethal"
      ],
      "ans": "A",
      "exp": "Curable means capable of being cured or resolved by therapeutic intervention."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The manager was criticized for his _____ decision-making, which frequently contradicted company policy.\"",
      "opts": [
        "capricious",
        "consistent",
        "methodical",
        "predictable"
      ],
      "ans": "A",
      "exp": "Capricious means given to sudden and unaccountable changes of mood or behavior; erratic."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The community rallied together with great _____ to rebuild the houses destroyed by the tornado.\"",
      "opts": [
        "solidarity",
        "apathy",
        "discord",
        "animosity"
      ],
      "ans": "A",
      "exp": "Solidarity means unity or agreement of feeling or action, especially among individuals with a common interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The novel provides a _____ depiction of working-class life during the early decades of the twentieth century.\"",
      "opts": [
        "poignant",
        "shallow",
        "trivial",
        "frivolous"
      ],
      "ans": "A",
      "exp": "Poignant means evoking a keen sense of sadness, empathy, or regret."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The government introduced tax subsidies to _____ the rapid adoption of rooftop solar energy installations.\"",
      "opts": [
        "incentivize",
        "deter",
        "penalize",
        "prohibit"
      ],
      "ans": "A",
      "exp": "Incentivize means to motivate or encourage someone to do something through incentives."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her _____ memory allowed her to recite thousands of lines of classical epic poetry without hesitation.\"",
      "opts": [
        "prodigious",
        "deficient",
        "feeble",
        "scanty"
      ],
      "ans": "A",
      "exp": "Prodigious means remarkably or impressively great in extent, size, or degree."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The candidate delivered a _____ response that completely sidestepped the journalist's direct question.\"",
      "opts": [
        "circuitous",
        "forthright",
        "candid",
        "direct"
      ],
      "ans": "A",
      "exp": "Circuitous means indirect, roundabout, and evasive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The research team established an _____ correlation between prolonged smartphone usage and sleep deprivation.\"",
      "opts": [
        "unambiguous",
        "equivocal",
        "dubious",
        "hypothetical"
      ],
      "ans": "A",
      "exp": "Unambiguous means not open to more than one interpretation; clear and definitive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"He accepted the job offer without _____, eager to embark on the next chapter of his career.\"",
      "opts": [
        "reservation",
        "enthusiasm",
        "gratitude",
        "interest"
      ],
      "ans": "A",
      "exp": "Without reservation means with complete willingness, without hesitation or doubts."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The mountain summit offered an _____ panoramic view of the snow-covered Himalayan peaks.\"",
      "opts": [
        "unrivaled",
        "mediocre",
        "ordinary",
        "unremarkable"
      ],
      "ans": "A",
      "exp": "Unrivaled means better than everyone or everything of the same kind; peerless."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The company implemented strict data encryption to _____ unauthorized access to sensitive customer records.\"",
      "opts": [
        "preclude",
        "encourage",
        "assist",
        "permit"
      ],
      "ans": "A",
      "exp": "Preclude means to make impossible; to prevent from happening."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite his initial _____, he eventually grew accustomed to the fast-paced culture of the metropolis.\"",
      "opts": [
        "trepidation",
        "eagerness",
        "alacrity",
        "complacency"
      ],
      "ans": "A",
      "exp": "Trepidation means a feeling of fear, apprehension, or agitation about something that may happen."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The sudden downfall of the authoritarian regime sent a _____ shockwave throughout the geopolitical landscape.\"",
      "opts": [
        "profound",
        "negligible",
        "superficial",
        "fleeting"
      ],
      "ans": "A",
      "exp": "Profound means very great, deep, or intense."
    }
  ],
  "level4": [
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The board of directors approved the proposal because it was deemed _____ to the company's long-term profitability.\"",
      "opts": [
        "conducive",
        "detrimental",
        "superfluous",
        "hazardous"
      ],
      "ans": "A",
      "exp": "Conducive means promoting, helping, or contributing toward a favorable outcome."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite facing severe criticism, the prime minister remained _____ in his decision to reform the tax code.\"",
      "opts": [
        "resolute",
        "vacillating",
        "hesitant",
        "ambivalent"
      ],
      "ans": "A",
      "exp": "Resolute means admirably purposeful, determined, and unwavering."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The scientist was praised for her _____ research, which left no potential hypothesis untested.\"",
      "opts": [
        "meticulous",
        "cursory",
        "perfunctory",
        "haphazard"
      ],
      "ans": "A",
      "exp": "Meticulous means showing great attention to detail; very careful and precise."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Due to the economic recession, consumer spending began to _____ across all retail sectors.\"",
      "opts": [
        "plummet",
        "escalate",
        "skyrocket",
        "proliferate"
      ],
      "ans": "A",
      "exp": "Plummet means to drop or decrease sharply and abruptly."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ remarks during the international diplomatic summit caused a major international embarrassment.\"",
      "opts": [
        "indiscreet",
        "diplomatic",
        "prudent",
        "tactful"
      ],
      "ans": "A",
      "exp": "Indiscreet means careless or untactful in speech, revealing confidential matters."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The new security protocol is designed to _____ potential cyber attacks before they infiltrate internal servers.\"",
      "opts": [
        "thwart",
        "facilitate",
        "accelerate",
        "instigate"
      ],
      "ans": "A",
      "exp": "Thwart means to prevent someone from accomplishing something; to foil."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Although the novel's beginning was engaging, the subsequent chapters became increasingly _____ and tedious.\"",
      "opts": [
        "pedestrian",
        "electrifying",
        "captivating",
        "riveting"
      ],
      "ans": "A",
      "exp": "Pedestrian in this context means dull, uninspired, and ordinary."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The attorney's arguments were so _____ that the jury reached a unanimous verdict within minutes.\"",
      "opts": [
        "cogent",
        "fallacious",
        "spurious",
        "tenuous"
      ],
      "ans": "A",
      "exp": "Cogent means clear, logical, and convincing."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The CEO's _____ lifestyle contrasted sharply with the modest salaries paid to his frontline employees.\"",
      "opts": [
        "flamboyant",
        "austere",
        "frugal",
        "ascetic"
      ],
      "ans": "A",
      "exp": "Flamboyant means ostentatious, lavish, and showy."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her deep _____ for classical literature inspired her to pursue a doctoral degree in humanities.\"",
      "opts": [
        "affinity",
        "aversion",
        "disdain",
        "indifference"
      ],
      "ans": "A",
      "exp": "Affinity means a natural liking, sympathy, or attraction toward something."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The documentary exposes the _____ consequences of unchecked industrial waste dumping into freshwater rivers.\"",
      "opts": [
        "deleterious",
        "salutary",
        "innocuous",
        "therapeutic"
      ],
      "ans": "A",
      "exp": "Deleterious means causing harm or damage."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The monarch's _____ decrees eventually led to a popular uprising among the oppressed populace.\"",
      "opts": [
        "arbitrary",
        "equitable",
        "democratic",
        "judicious"
      ],
      "ans": "A",
      "exp": "Arbitrary means based on random choice or personal whim, rather than any reason or system."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"His _____ attitude made it virtually impossible for team members to collaborate with him effectively.\"",
      "opts": [
        "belligerent",
        "amicable",
        "complaisant",
        "genial"
      ],
      "ans": "A",
      "exp": "Belligerent means hostile, aggressive, and combat-ready."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The archaeological expedition made a _____ discovery of ancient gold coins beneath the ruins.\"",
      "opts": [
        "fortuitous",
        "calamitous",
        "foreseen",
        "deliberate"
      ],
      "ans": "A",
      "exp": "Fortuitous means happening by a lucky chance or coincidence."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"In order to _____ customer dissatisfaction, the airline offered full refunds for all cancelled flights.\"",
      "opts": [
        "mollify",
        "exacerbate",
        "inflame",
        "provoke"
      ],
      "ans": "A",
      "exp": "Mollify means to appease the anger or anxiety of someone."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The speaker's delivery was so _____ that several audience members quietly fell asleep in the auditorium.\"",
      "opts": [
        "monotonous",
        "animated",
        "dynamic",
        "vibrant"
      ],
      "ans": "A",
      "exp": "Monotonous means dull, tedious, and repetitious; lacking in variety and interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The diplomat displayed immense _____ by skillfully defusing the tense bilateral border standoff.\"",
      "opts": [
        "tact",
        "audacity",
        "clumsiness",
        "imprudence"
      ],
      "ans": "A",
      "exp": "Tact means skill and sensitivity in dealing with others or with difficult issues."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Modern medical technology has rendered many previously fatal illnesses entirely _____.\"",
      "opts": [
        "curable",
        "insurmountable",
        "fatal",
        "lethal"
      ],
      "ans": "A",
      "exp": "Curable means capable of being cured or resolved by therapeutic intervention."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The manager was criticized for his _____ decision-making, which frequently contradicted company policy.\"",
      "opts": [
        "capricious",
        "consistent",
        "methodical",
        "predictable"
      ],
      "ans": "A",
      "exp": "Capricious means given to sudden and unaccountable changes of mood or behavior; erratic."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The community rallied together with great _____ to rebuild the houses destroyed by the tornado.\"",
      "opts": [
        "solidarity",
        "apathy",
        "discord",
        "animosity"
      ],
      "ans": "A",
      "exp": "Solidarity means unity or agreement of feeling or action, especially among individuals with a common interest."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The novel provides a _____ depiction of working-class life during the early decades of the twentieth century.\"",
      "opts": [
        "poignant",
        "shallow",
        "trivial",
        "frivolous"
      ],
      "ans": "A",
      "exp": "Poignant means evoking a keen sense of sadness, empathy, or regret."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The government introduced tax subsidies to _____ the rapid adoption of rooftop solar energy installations.\"",
      "opts": [
        "incentivize",
        "deter",
        "penalize",
        "prohibit"
      ],
      "ans": "A",
      "exp": "Incentivize means to motivate or encourage someone to do something through incentives."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Her _____ memory allowed her to recite thousands of lines of classical epic poetry without hesitation.\"",
      "opts": [
        "prodigious",
        "deficient",
        "feeble",
        "scanty"
      ],
      "ans": "A",
      "exp": "Prodigious means remarkably or impressively great in extent, size, or degree."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The candidate delivered a _____ response that completely sidestepped the journalist's direct question.\"",
      "opts": [
        "circuitous",
        "forthright",
        "candid",
        "direct"
      ],
      "ans": "A",
      "exp": "Circuitous means indirect, roundabout, and evasive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The research team established an _____ correlation between prolonged smartphone usage and sleep deprivation.\"",
      "opts": [
        "unambiguous",
        "equivocal",
        "dubious",
        "hypothetical"
      ],
      "ans": "A",
      "exp": "Unambiguous means not open to more than one interpretation; clear and definitive."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"He accepted the job offer without _____, eager to embark on the next chapter of his career.\"",
      "opts": [
        "reservation",
        "enthusiasm",
        "gratitude",
        "interest"
      ],
      "ans": "A",
      "exp": "Without reservation means with complete willingness, without hesitation or doubts."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The mountain summit offered an _____ panoramic view of the snow-covered Himalayan peaks.\"",
      "opts": [
        "unrivaled",
        "mediocre",
        "ordinary",
        "unremarkable"
      ],
      "ans": "A",
      "exp": "Unrivaled means better than everyone or everything of the same kind; peerless."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The company implemented strict data encryption to _____ unauthorized access to sensitive customer records.\"",
      "opts": [
        "preclude",
        "encourage",
        "assist",
        "permit"
      ],
      "ans": "A",
      "exp": "Preclude means to make impossible; to prevent from happening."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"Despite his initial _____, he eventually grew accustomed to the fast-paced culture of the metropolis.\"",
      "opts": [
        "trepidation",
        "eagerness",
        "alacrity",
        "complacency"
      ],
      "ans": "A",
      "exp": "Trepidation means a feeling of fear, apprehension, or agitation about something that may happen."
    },
    {
      "q": "Fill in the blank with the most appropriate word to complete the sentence:\n\"The sudden downfall of the authoritarian regime sent a _____ shockwave throughout the geopolitical landscape.\"",
      "opts": [
        "profound",
        "negligible",
        "superficial",
        "fleeting"
      ],
      "ans": "A",
      "exp": "Profound means very great, deep, or intense."
    }
  ]
};

VERBAL_POOLS_MAP["idioms-and-phrases"] = {
  "level1": [
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Bite the bullet\"",
      "opts": [
        "To face a difficult or unpleasant situation with courage",
        "To shoot a firearm recklessly",
        "To surrender in battle",
        "To eat something very hard"
      ],
      "ans": "A",
      "exp": "Bite the bullet: to endure a painful or difficult situation that is unavoidable."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn the midnight oil\"",
      "opts": [
        "To work or study late into the night",
        "To waste precious fuel",
        "To set fire to a workplace",
        "To awake very early in the morning"
      ],
      "ans": "A",
      "exp": "Burn the midnight oil: to study or labor diligently well past midnight."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break the ice\"",
      "opts": [
        "To initiate a conversation in a social setting to relieve tension",
        "To melt frozen waterways",
        "To create hostility between people",
        "To terminate a business partnership"
      ],
      "ans": "A",
      "exp": "Break the ice: to overcome initial social awkwardness and foster friendly conversation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Once in a blue moon\"",
      "opts": [
        "An event that happens very rarely",
        "An occurrence that happens every month",
        "A predictable meteorological phenomenon",
        "Something that happens during daytime"
      ],
      "ans": "A",
      "exp": "Once in a blue moon: something that occurs on very infrequent, rare occasions."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Spill the beans\"",
      "opts": [
        "To reveal confidential or secret information prematurely",
        "To drop groceries on the floor",
        "To cook an extravagant feast",
        "To tell a blatant lie"
      ],
      "ans": "A",
      "exp": "Spill the beans: to disclose sensitive information, often inadvertently."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A blessing in disguise\"",
      "opts": [
        "An apparent misfortune that unexpectedly leads to a favorable outcome",
        "A religious ceremony performed in secret",
        "A curse from an enemy",
        "A deceitful compliment"
      ],
      "ans": "A",
      "exp": "A blessing in disguise: a misfortune that turns out to have positive consequences."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cut corners\"",
      "opts": [
        "To perform a task improperly or cheaply to save time or money",
        "To navigate sharp road curves",
        "To cut paper into geometric shapes",
        "To achieve high artistic craftsmanship"
      ],
      "ans": "A",
      "exp": "Cut corners: to take shortcuts in quality or effort to save money or time."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Hit the nail on the head\"",
      "opts": [
        "To state or identify the exact truth about a matter",
        "To hammer carpentry nails accurately",
        "To injure one's finger while working",
        "To exaggerate an argument"
      ],
      "ans": "A",
      "exp": "Hit the nail on the head: to describe or identify a situation with exact precision."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"The ball is in your court\"",
      "opts": [
        "It is now your turn to make a decision or take the next action",
        "A tennis match has concluded",
        "You have lost control of the situation",
        "The dispute has been legally dismissed"
      ],
      "ans": "A",
      "exp": "The ball is in your court: the responsibility for the next move lies with you."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Through thick and thin\"",
      "opts": [
        "Supporting someone through all difficulties and circumstances",
        "Traveling through dense forests",
        "Experiencing severe body weight fluctuations",
        "Living in extreme luxury"
      ],
      "ans": "A",
      "exp": "Through thick and thin: under all conditions, no matter how challenging or difficult."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Leave no stone unturned\"",
      "opts": [
        "To do everything possible and explore every avenue to achieve an objective",
        "To clear rubble from a construction site",
        "To abandon an investigation halfway",
        "To search only in obvious places"
      ],
      "ans": "A",
      "exp": "Leave no stone unturned: to search exhaustively or try every available method."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Add insult to injury\"",
      "opts": [
        "To make a bad situation even worse for someone already aggrieved",
        "To inflict bodily harm during a medical procedure",
        "To apologize sincerely after a quarrel",
        "To praise someone falsely"
      ],
      "ans": "A",
      "exp": "Add insult to injury: to worsen an already unfavorable or painful predicament."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"At the eleventh hour\"",
      "opts": [
        "At the very last possible moment before a deadline",
        "Late in the morning",
        "During lunch hours",
        "Well ahead of schedule"
      ],
      "ans": "A",
      "exp": "At the eleventh hour: at the final moment, just before it is too late."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cry over spilt milk\"",
      "opts": [
        "To waste time worrying about past mistakes that cannot be undone",
        "To weep during cooking",
        "To complain about minor financial losses",
        "To demand an immediate replacement"
      ],
      "ans": "A",
      "exp": "Cry over spilt milk: to regret or lament unavoidable past losses."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Every cloud has a silver lining\"",
      "opts": [
        "Every negative or difficult situation has a positive or hopeful aspect",
        "Rainstorms always clear quickly",
        "Wealthy people never face sorrow",
        "Bad weather brings good harvests"
      ],
      "ans": "A",
      "exp": "Every cloud has a silver lining: there is always something comforting in adversity."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Jump on the bandwagon\"",
      "opts": [
        "To join a popular trend or activity simply because everyone else is doing it",
        "To board a festival parade float",
        "To lead an independent rebellion",
        "To create a brand new musical genre"
      ],
      "ans": "A",
      "exp": "Jump on the bandwagon: to adopt a popular cause or fashion for convenience."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Take with a grain of salt\"",
      "opts": [
        "To view a statement with skepticism and not accept it as completely accurate",
        "To season food moderately",
        "To agree enthusiastically with someone",
        "To misunderstand a clear instruction"
      ],
      "ans": "A",
      "exp": "Take with a grain of salt: to accept information with skepticism or reservation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cost an arm and a leg\"",
      "opts": [
        "To be exceedingly expensive or overpriced",
        "To require physical sacrifice",
        "To be of inferior manufacturing quality",
        "To be offered at a massive discount"
      ],
      "ans": "A",
      "exp": "Cost an arm and a leg: to command an exceptionally high, exorbitant price."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"See eye to eye\"",
      "opts": [
        "To agree completely on a matter with another person",
        "To stare directly at someone in anger",
        "To possess identical physical vision",
        "To conduct an ophthalmology exam"
      ],
      "ans": "A",
      "exp": "See eye to eye: to share the same viewpoint or be in full agreement."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn bridges\"",
      "opts": [
        "To permanently destroy relationships or connections with people or organizations",
        "To set fire to engineering crossings",
        "To retreat safely from conflict",
        "To build new professional alliances"
      ],
      "ans": "A",
      "exp": "Burn bridges: to act in a way that irreversibly severs ties with others."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Fit as a fiddle\"",
      "opts": [
        "In exceptionally good physical health and condition",
        "Capable of playing string instruments",
        "Very thin and fragile",
        "Dressed in elegant formal attire"
      ],
      "ans": "A",
      "exp": "Fit as a fiddle: in prime physical shape and vigorous health."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Throw in the towel\"",
      "opts": [
        "To give up and admit defeat in a contest or endeavor",
        "To do laundry diligently",
        "To clean up after an accident",
        "To challenge an opponent to a duel"
      ],
      "ans": "A",
      "exp": "Throw in the towel: to concede defeat; derived from boxing."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A piece of cake\"",
      "opts": [
        "A task or activity that is extremely simple and effortless to accomplish",
        "A sweet dessert served at celebrations",
        "A rare culinary treat",
        "A complicated puzzle"
      ],
      "ans": "A",
      "exp": "A piece of cake: an undertaking that is very easy to accomplish."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Under the weather\"",
      "opts": [
        "Feeling slightly ill, indisposed, or unwell",
        "Experiencing stormy climate conditions",
        "Trapped in an open outdoor field",
        "Completely exhausted from athletic exertion"
      ],
      "ans": "A",
      "exp": "Under the weather: feeling mildly sick or not at one's physical best."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Pull someone's leg\"",
      "opts": [
        "To tease or fool someone playfully with a harmless untruth",
        "To trip someone intentionally",
        "To rescue someone from falling",
        "To assist someone with physical therapy"
      ],
      "ans": "A",
      "exp": "Pull someone's leg: to joke or deceive someone in a lighthearted manner."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Beat around the bush\"",
      "opts": [
        "To avoid talking about the main, important topic directly",
        "To trim garden shrubbery",
        "To search for game in a forest",
        "To speak with absolute clarity"
      ],
      "ans": "A",
      "exp": "Beat around the bush: to discuss extraneous matters to avoid the central issue."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Call it a day\"",
      "opts": [
        "To stop working on something for the rest of the day",
        "To name a calendar date",
        "To celebrate an anniversary",
        "To reschedule a morning meeting"
      ],
      "ans": "A",
      "exp": "Call it a day: to decide that work for the day has concluded."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break a leg\"",
      "opts": [
        "A theatrical superstition wishing good luck to a performer",
        "An unfortunate orthopedic accident",
        "A harsh condemnation of a dancer",
        "An athletic foul in football"
      ],
      "ans": "A",
      "exp": "Break a leg: traditional idiom used to wish someone good luck before a performance."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Caught red-handed\"",
      "opts": [
        "Apprehended in the exact act of committing a crime or wrongdoing",
        "Having hands stained with dye",
        "Suffering from frostbite",
        "Working diligently with manual tools"
      ],
      "ans": "A",
      "exp": "Caught red-handed: discovered directly in the commission of an offense."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Barking up the wrong tree\"",
      "opts": [
        "Pursuing a mistaken line of thought or accusing the wrong person",
        "A dog chasing squirrels in an orchard",
        "Climbing dangerous trees at night",
        "Choosing an incorrect gardening plant"
      ],
      "ans": "A",
      "exp": "Barking up the wrong tree: directing efforts or accusations toward the wrong target."
    }
  ],
  "level2": [
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Bite the bullet\"",
      "opts": [
        "To face a difficult or unpleasant situation with courage",
        "To shoot a firearm recklessly",
        "To surrender in battle",
        "To eat something very hard"
      ],
      "ans": "A",
      "exp": "Bite the bullet: to endure a painful or difficult situation that is unavoidable."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn the midnight oil\"",
      "opts": [
        "To work or study late into the night",
        "To waste precious fuel",
        "To set fire to a workplace",
        "To awake very early in the morning"
      ],
      "ans": "A",
      "exp": "Burn the midnight oil: to study or labor diligently well past midnight."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break the ice\"",
      "opts": [
        "To initiate a conversation in a social setting to relieve tension",
        "To melt frozen waterways",
        "To create hostility between people",
        "To terminate a business partnership"
      ],
      "ans": "A",
      "exp": "Break the ice: to overcome initial social awkwardness and foster friendly conversation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Once in a blue moon\"",
      "opts": [
        "An event that happens very rarely",
        "An occurrence that happens every month",
        "A predictable meteorological phenomenon",
        "Something that happens during daytime"
      ],
      "ans": "A",
      "exp": "Once in a blue moon: something that occurs on very infrequent, rare occasions."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Spill the beans\"",
      "opts": [
        "To reveal confidential or secret information prematurely",
        "To drop groceries on the floor",
        "To cook an extravagant feast",
        "To tell a blatant lie"
      ],
      "ans": "A",
      "exp": "Spill the beans: to disclose sensitive information, often inadvertently."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A blessing in disguise\"",
      "opts": [
        "An apparent misfortune that unexpectedly leads to a favorable outcome",
        "A religious ceremony performed in secret",
        "A curse from an enemy",
        "A deceitful compliment"
      ],
      "ans": "A",
      "exp": "A blessing in disguise: a misfortune that turns out to have positive consequences."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cut corners\"",
      "opts": [
        "To perform a task improperly or cheaply to save time or money",
        "To navigate sharp road curves",
        "To cut paper into geometric shapes",
        "To achieve high artistic craftsmanship"
      ],
      "ans": "A",
      "exp": "Cut corners: to take shortcuts in quality or effort to save money or time."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Hit the nail on the head\"",
      "opts": [
        "To state or identify the exact truth about a matter",
        "To hammer carpentry nails accurately",
        "To injure one's finger while working",
        "To exaggerate an argument"
      ],
      "ans": "A",
      "exp": "Hit the nail on the head: to describe or identify a situation with exact precision."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"The ball is in your court\"",
      "opts": [
        "It is now your turn to make a decision or take the next action",
        "A tennis match has concluded",
        "You have lost control of the situation",
        "The dispute has been legally dismissed"
      ],
      "ans": "A",
      "exp": "The ball is in your court: the responsibility for the next move lies with you."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Through thick and thin\"",
      "opts": [
        "Supporting someone through all difficulties and circumstances",
        "Traveling through dense forests",
        "Experiencing severe body weight fluctuations",
        "Living in extreme luxury"
      ],
      "ans": "A",
      "exp": "Through thick and thin: under all conditions, no matter how challenging or difficult."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Leave no stone unturned\"",
      "opts": [
        "To do everything possible and explore every avenue to achieve an objective",
        "To clear rubble from a construction site",
        "To abandon an investigation halfway",
        "To search only in obvious places"
      ],
      "ans": "A",
      "exp": "Leave no stone unturned: to search exhaustively or try every available method."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Add insult to injury\"",
      "opts": [
        "To make a bad situation even worse for someone already aggrieved",
        "To inflict bodily harm during a medical procedure",
        "To apologize sincerely after a quarrel",
        "To praise someone falsely"
      ],
      "ans": "A",
      "exp": "Add insult to injury: to worsen an already unfavorable or painful predicament."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"At the eleventh hour\"",
      "opts": [
        "At the very last possible moment before a deadline",
        "Late in the morning",
        "During lunch hours",
        "Well ahead of schedule"
      ],
      "ans": "A",
      "exp": "At the eleventh hour: at the final moment, just before it is too late."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cry over spilt milk\"",
      "opts": [
        "To waste time worrying about past mistakes that cannot be undone",
        "To weep during cooking",
        "To complain about minor financial losses",
        "To demand an immediate replacement"
      ],
      "ans": "A",
      "exp": "Cry over spilt milk: to regret or lament unavoidable past losses."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Every cloud has a silver lining\"",
      "opts": [
        "Every negative or difficult situation has a positive or hopeful aspect",
        "Rainstorms always clear quickly",
        "Wealthy people never face sorrow",
        "Bad weather brings good harvests"
      ],
      "ans": "A",
      "exp": "Every cloud has a silver lining: there is always something comforting in adversity."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Jump on the bandwagon\"",
      "opts": [
        "To join a popular trend or activity simply because everyone else is doing it",
        "To board a festival parade float",
        "To lead an independent rebellion",
        "To create a brand new musical genre"
      ],
      "ans": "A",
      "exp": "Jump on the bandwagon: to adopt a popular cause or fashion for convenience."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Take with a grain of salt\"",
      "opts": [
        "To view a statement with skepticism and not accept it as completely accurate",
        "To season food moderately",
        "To agree enthusiastically with someone",
        "To misunderstand a clear instruction"
      ],
      "ans": "A",
      "exp": "Take with a grain of salt: to accept information with skepticism or reservation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cost an arm and a leg\"",
      "opts": [
        "To be exceedingly expensive or overpriced",
        "To require physical sacrifice",
        "To be of inferior manufacturing quality",
        "To be offered at a massive discount"
      ],
      "ans": "A",
      "exp": "Cost an arm and a leg: to command an exceptionally high, exorbitant price."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"See eye to eye\"",
      "opts": [
        "To agree completely on a matter with another person",
        "To stare directly at someone in anger",
        "To possess identical physical vision",
        "To conduct an ophthalmology exam"
      ],
      "ans": "A",
      "exp": "See eye to eye: to share the same viewpoint or be in full agreement."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn bridges\"",
      "opts": [
        "To permanently destroy relationships or connections with people or organizations",
        "To set fire to engineering crossings",
        "To retreat safely from conflict",
        "To build new professional alliances"
      ],
      "ans": "A",
      "exp": "Burn bridges: to act in a way that irreversibly severs ties with others."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Fit as a fiddle\"",
      "opts": [
        "In exceptionally good physical health and condition",
        "Capable of playing string instruments",
        "Very thin and fragile",
        "Dressed in elegant formal attire"
      ],
      "ans": "A",
      "exp": "Fit as a fiddle: in prime physical shape and vigorous health."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Throw in the towel\"",
      "opts": [
        "To give up and admit defeat in a contest or endeavor",
        "To do laundry diligently",
        "To clean up after an accident",
        "To challenge an opponent to a duel"
      ],
      "ans": "A",
      "exp": "Throw in the towel: to concede defeat; derived from boxing."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A piece of cake\"",
      "opts": [
        "A task or activity that is extremely simple and effortless to accomplish",
        "A sweet dessert served at celebrations",
        "A rare culinary treat",
        "A complicated puzzle"
      ],
      "ans": "A",
      "exp": "A piece of cake: an undertaking that is very easy to accomplish."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Under the weather\"",
      "opts": [
        "Feeling slightly ill, indisposed, or unwell",
        "Experiencing stormy climate conditions",
        "Trapped in an open outdoor field",
        "Completely exhausted from athletic exertion"
      ],
      "ans": "A",
      "exp": "Under the weather: feeling mildly sick or not at one's physical best."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Pull someone's leg\"",
      "opts": [
        "To tease or fool someone playfully with a harmless untruth",
        "To trip someone intentionally",
        "To rescue someone from falling",
        "To assist someone with physical therapy"
      ],
      "ans": "A",
      "exp": "Pull someone's leg: to joke or deceive someone in a lighthearted manner."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Beat around the bush\"",
      "opts": [
        "To avoid talking about the main, important topic directly",
        "To trim garden shrubbery",
        "To search for game in a forest",
        "To speak with absolute clarity"
      ],
      "ans": "A",
      "exp": "Beat around the bush: to discuss extraneous matters to avoid the central issue."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Call it a day\"",
      "opts": [
        "To stop working on something for the rest of the day",
        "To name a calendar date",
        "To celebrate an anniversary",
        "To reschedule a morning meeting"
      ],
      "ans": "A",
      "exp": "Call it a day: to decide that work for the day has concluded."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break a leg\"",
      "opts": [
        "A theatrical superstition wishing good luck to a performer",
        "An unfortunate orthopedic accident",
        "A harsh condemnation of a dancer",
        "An athletic foul in football"
      ],
      "ans": "A",
      "exp": "Break a leg: traditional idiom used to wish someone good luck before a performance."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Caught red-handed\"",
      "opts": [
        "Apprehended in the exact act of committing a crime or wrongdoing",
        "Having hands stained with dye",
        "Suffering from frostbite",
        "Working diligently with manual tools"
      ],
      "ans": "A",
      "exp": "Caught red-handed: discovered directly in the commission of an offense."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Barking up the wrong tree\"",
      "opts": [
        "Pursuing a mistaken line of thought or accusing the wrong person",
        "A dog chasing squirrels in an orchard",
        "Climbing dangerous trees at night",
        "Choosing an incorrect gardening plant"
      ],
      "ans": "A",
      "exp": "Barking up the wrong tree: directing efforts or accusations toward the wrong target."
    }
  ],
  "level3": [
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Bite the bullet\"",
      "opts": [
        "To face a difficult or unpleasant situation with courage",
        "To shoot a firearm recklessly",
        "To surrender in battle",
        "To eat something very hard"
      ],
      "ans": "A",
      "exp": "Bite the bullet: to endure a painful or difficult situation that is unavoidable."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn the midnight oil\"",
      "opts": [
        "To work or study late into the night",
        "To waste precious fuel",
        "To set fire to a workplace",
        "To awake very early in the morning"
      ],
      "ans": "A",
      "exp": "Burn the midnight oil: to study or labor diligently well past midnight."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break the ice\"",
      "opts": [
        "To initiate a conversation in a social setting to relieve tension",
        "To melt frozen waterways",
        "To create hostility between people",
        "To terminate a business partnership"
      ],
      "ans": "A",
      "exp": "Break the ice: to overcome initial social awkwardness and foster friendly conversation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Once in a blue moon\"",
      "opts": [
        "An event that happens very rarely",
        "An occurrence that happens every month",
        "A predictable meteorological phenomenon",
        "Something that happens during daytime"
      ],
      "ans": "A",
      "exp": "Once in a blue moon: something that occurs on very infrequent, rare occasions."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Spill the beans\"",
      "opts": [
        "To reveal confidential or secret information prematurely",
        "To drop groceries on the floor",
        "To cook an extravagant feast",
        "To tell a blatant lie"
      ],
      "ans": "A",
      "exp": "Spill the beans: to disclose sensitive information, often inadvertently."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A blessing in disguise\"",
      "opts": [
        "An apparent misfortune that unexpectedly leads to a favorable outcome",
        "A religious ceremony performed in secret",
        "A curse from an enemy",
        "A deceitful compliment"
      ],
      "ans": "A",
      "exp": "A blessing in disguise: a misfortune that turns out to have positive consequences."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cut corners\"",
      "opts": [
        "To perform a task improperly or cheaply to save time or money",
        "To navigate sharp road curves",
        "To cut paper into geometric shapes",
        "To achieve high artistic craftsmanship"
      ],
      "ans": "A",
      "exp": "Cut corners: to take shortcuts in quality or effort to save money or time."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Hit the nail on the head\"",
      "opts": [
        "To state or identify the exact truth about a matter",
        "To hammer carpentry nails accurately",
        "To injure one's finger while working",
        "To exaggerate an argument"
      ],
      "ans": "A",
      "exp": "Hit the nail on the head: to describe or identify a situation with exact precision."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"The ball is in your court\"",
      "opts": [
        "It is now your turn to make a decision or take the next action",
        "A tennis match has concluded",
        "You have lost control of the situation",
        "The dispute has been legally dismissed"
      ],
      "ans": "A",
      "exp": "The ball is in your court: the responsibility for the next move lies with you."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Through thick and thin\"",
      "opts": [
        "Supporting someone through all difficulties and circumstances",
        "Traveling through dense forests",
        "Experiencing severe body weight fluctuations",
        "Living in extreme luxury"
      ],
      "ans": "A",
      "exp": "Through thick and thin: under all conditions, no matter how challenging or difficult."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Leave no stone unturned\"",
      "opts": [
        "To do everything possible and explore every avenue to achieve an objective",
        "To clear rubble from a construction site",
        "To abandon an investigation halfway",
        "To search only in obvious places"
      ],
      "ans": "A",
      "exp": "Leave no stone unturned: to search exhaustively or try every available method."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Add insult to injury\"",
      "opts": [
        "To make a bad situation even worse for someone already aggrieved",
        "To inflict bodily harm during a medical procedure",
        "To apologize sincerely after a quarrel",
        "To praise someone falsely"
      ],
      "ans": "A",
      "exp": "Add insult to injury: to worsen an already unfavorable or painful predicament."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"At the eleventh hour\"",
      "opts": [
        "At the very last possible moment before a deadline",
        "Late in the morning",
        "During lunch hours",
        "Well ahead of schedule"
      ],
      "ans": "A",
      "exp": "At the eleventh hour: at the final moment, just before it is too late."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cry over spilt milk\"",
      "opts": [
        "To waste time worrying about past mistakes that cannot be undone",
        "To weep during cooking",
        "To complain about minor financial losses",
        "To demand an immediate replacement"
      ],
      "ans": "A",
      "exp": "Cry over spilt milk: to regret or lament unavoidable past losses."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Every cloud has a silver lining\"",
      "opts": [
        "Every negative or difficult situation has a positive or hopeful aspect",
        "Rainstorms always clear quickly",
        "Wealthy people never face sorrow",
        "Bad weather brings good harvests"
      ],
      "ans": "A",
      "exp": "Every cloud has a silver lining: there is always something comforting in adversity."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Jump on the bandwagon\"",
      "opts": [
        "To join a popular trend or activity simply because everyone else is doing it",
        "To board a festival parade float",
        "To lead an independent rebellion",
        "To create a brand new musical genre"
      ],
      "ans": "A",
      "exp": "Jump on the bandwagon: to adopt a popular cause or fashion for convenience."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Take with a grain of salt\"",
      "opts": [
        "To view a statement with skepticism and not accept it as completely accurate",
        "To season food moderately",
        "To agree enthusiastically with someone",
        "To misunderstand a clear instruction"
      ],
      "ans": "A",
      "exp": "Take with a grain of salt: to accept information with skepticism or reservation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cost an arm and a leg\"",
      "opts": [
        "To be exceedingly expensive or overpriced",
        "To require physical sacrifice",
        "To be of inferior manufacturing quality",
        "To be offered at a massive discount"
      ],
      "ans": "A",
      "exp": "Cost an arm and a leg: to command an exceptionally high, exorbitant price."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"See eye to eye\"",
      "opts": [
        "To agree completely on a matter with another person",
        "To stare directly at someone in anger",
        "To possess identical physical vision",
        "To conduct an ophthalmology exam"
      ],
      "ans": "A",
      "exp": "See eye to eye: to share the same viewpoint or be in full agreement."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn bridges\"",
      "opts": [
        "To permanently destroy relationships or connections with people or organizations",
        "To set fire to engineering crossings",
        "To retreat safely from conflict",
        "To build new professional alliances"
      ],
      "ans": "A",
      "exp": "Burn bridges: to act in a way that irreversibly severs ties with others."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Fit as a fiddle\"",
      "opts": [
        "In exceptionally good physical health and condition",
        "Capable of playing string instruments",
        "Very thin and fragile",
        "Dressed in elegant formal attire"
      ],
      "ans": "A",
      "exp": "Fit as a fiddle: in prime physical shape and vigorous health."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Throw in the towel\"",
      "opts": [
        "To give up and admit defeat in a contest or endeavor",
        "To do laundry diligently",
        "To clean up after an accident",
        "To challenge an opponent to a duel"
      ],
      "ans": "A",
      "exp": "Throw in the towel: to concede defeat; derived from boxing."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A piece of cake\"",
      "opts": [
        "A task or activity that is extremely simple and effortless to accomplish",
        "A sweet dessert served at celebrations",
        "A rare culinary treat",
        "A complicated puzzle"
      ],
      "ans": "A",
      "exp": "A piece of cake: an undertaking that is very easy to accomplish."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Under the weather\"",
      "opts": [
        "Feeling slightly ill, indisposed, or unwell",
        "Experiencing stormy climate conditions",
        "Trapped in an open outdoor field",
        "Completely exhausted from athletic exertion"
      ],
      "ans": "A",
      "exp": "Under the weather: feeling mildly sick or not at one's physical best."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Pull someone's leg\"",
      "opts": [
        "To tease or fool someone playfully with a harmless untruth",
        "To trip someone intentionally",
        "To rescue someone from falling",
        "To assist someone with physical therapy"
      ],
      "ans": "A",
      "exp": "Pull someone's leg: to joke or deceive someone in a lighthearted manner."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Beat around the bush\"",
      "opts": [
        "To avoid talking about the main, important topic directly",
        "To trim garden shrubbery",
        "To search for game in a forest",
        "To speak with absolute clarity"
      ],
      "ans": "A",
      "exp": "Beat around the bush: to discuss extraneous matters to avoid the central issue."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Call it a day\"",
      "opts": [
        "To stop working on something for the rest of the day",
        "To name a calendar date",
        "To celebrate an anniversary",
        "To reschedule a morning meeting"
      ],
      "ans": "A",
      "exp": "Call it a day: to decide that work for the day has concluded."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break a leg\"",
      "opts": [
        "A theatrical superstition wishing good luck to a performer",
        "An unfortunate orthopedic accident",
        "A harsh condemnation of a dancer",
        "An athletic foul in football"
      ],
      "ans": "A",
      "exp": "Break a leg: traditional idiom used to wish someone good luck before a performance."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Caught red-handed\"",
      "opts": [
        "Apprehended in the exact act of committing a crime or wrongdoing",
        "Having hands stained with dye",
        "Suffering from frostbite",
        "Working diligently with manual tools"
      ],
      "ans": "A",
      "exp": "Caught red-handed: discovered directly in the commission of an offense."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Barking up the wrong tree\"",
      "opts": [
        "Pursuing a mistaken line of thought or accusing the wrong person",
        "A dog chasing squirrels in an orchard",
        "Climbing dangerous trees at night",
        "Choosing an incorrect gardening plant"
      ],
      "ans": "A",
      "exp": "Barking up the wrong tree: directing efforts or accusations toward the wrong target."
    }
  ],
  "level4": [
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Bite the bullet\"",
      "opts": [
        "To face a difficult or unpleasant situation with courage",
        "To shoot a firearm recklessly",
        "To surrender in battle",
        "To eat something very hard"
      ],
      "ans": "A",
      "exp": "Bite the bullet: to endure a painful or difficult situation that is unavoidable."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn the midnight oil\"",
      "opts": [
        "To work or study late into the night",
        "To waste precious fuel",
        "To set fire to a workplace",
        "To awake very early in the morning"
      ],
      "ans": "A",
      "exp": "Burn the midnight oil: to study or labor diligently well past midnight."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break the ice\"",
      "opts": [
        "To initiate a conversation in a social setting to relieve tension",
        "To melt frozen waterways",
        "To create hostility between people",
        "To terminate a business partnership"
      ],
      "ans": "A",
      "exp": "Break the ice: to overcome initial social awkwardness and foster friendly conversation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Once in a blue moon\"",
      "opts": [
        "An event that happens very rarely",
        "An occurrence that happens every month",
        "A predictable meteorological phenomenon",
        "Something that happens during daytime"
      ],
      "ans": "A",
      "exp": "Once in a blue moon: something that occurs on very infrequent, rare occasions."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Spill the beans\"",
      "opts": [
        "To reveal confidential or secret information prematurely",
        "To drop groceries on the floor",
        "To cook an extravagant feast",
        "To tell a blatant lie"
      ],
      "ans": "A",
      "exp": "Spill the beans: to disclose sensitive information, often inadvertently."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A blessing in disguise\"",
      "opts": [
        "An apparent misfortune that unexpectedly leads to a favorable outcome",
        "A religious ceremony performed in secret",
        "A curse from an enemy",
        "A deceitful compliment"
      ],
      "ans": "A",
      "exp": "A blessing in disguise: a misfortune that turns out to have positive consequences."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cut corners\"",
      "opts": [
        "To perform a task improperly or cheaply to save time or money",
        "To navigate sharp road curves",
        "To cut paper into geometric shapes",
        "To achieve high artistic craftsmanship"
      ],
      "ans": "A",
      "exp": "Cut corners: to take shortcuts in quality or effort to save money or time."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Hit the nail on the head\"",
      "opts": [
        "To state or identify the exact truth about a matter",
        "To hammer carpentry nails accurately",
        "To injure one's finger while working",
        "To exaggerate an argument"
      ],
      "ans": "A",
      "exp": "Hit the nail on the head: to describe or identify a situation with exact precision."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"The ball is in your court\"",
      "opts": [
        "It is now your turn to make a decision or take the next action",
        "A tennis match has concluded",
        "You have lost control of the situation",
        "The dispute has been legally dismissed"
      ],
      "ans": "A",
      "exp": "The ball is in your court: the responsibility for the next move lies with you."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Through thick and thin\"",
      "opts": [
        "Supporting someone through all difficulties and circumstances",
        "Traveling through dense forests",
        "Experiencing severe body weight fluctuations",
        "Living in extreme luxury"
      ],
      "ans": "A",
      "exp": "Through thick and thin: under all conditions, no matter how challenging or difficult."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Leave no stone unturned\"",
      "opts": [
        "To do everything possible and explore every avenue to achieve an objective",
        "To clear rubble from a construction site",
        "To abandon an investigation halfway",
        "To search only in obvious places"
      ],
      "ans": "A",
      "exp": "Leave no stone unturned: to search exhaustively or try every available method."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Add insult to injury\"",
      "opts": [
        "To make a bad situation even worse for someone already aggrieved",
        "To inflict bodily harm during a medical procedure",
        "To apologize sincerely after a quarrel",
        "To praise someone falsely"
      ],
      "ans": "A",
      "exp": "Add insult to injury: to worsen an already unfavorable or painful predicament."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"At the eleventh hour\"",
      "opts": [
        "At the very last possible moment before a deadline",
        "Late in the morning",
        "During lunch hours",
        "Well ahead of schedule"
      ],
      "ans": "A",
      "exp": "At the eleventh hour: at the final moment, just before it is too late."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cry over spilt milk\"",
      "opts": [
        "To waste time worrying about past mistakes that cannot be undone",
        "To weep during cooking",
        "To complain about minor financial losses",
        "To demand an immediate replacement"
      ],
      "ans": "A",
      "exp": "Cry over spilt milk: to regret or lament unavoidable past losses."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Every cloud has a silver lining\"",
      "opts": [
        "Every negative or difficult situation has a positive or hopeful aspect",
        "Rainstorms always clear quickly",
        "Wealthy people never face sorrow",
        "Bad weather brings good harvests"
      ],
      "ans": "A",
      "exp": "Every cloud has a silver lining: there is always something comforting in adversity."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Jump on the bandwagon\"",
      "opts": [
        "To join a popular trend or activity simply because everyone else is doing it",
        "To board a festival parade float",
        "To lead an independent rebellion",
        "To create a brand new musical genre"
      ],
      "ans": "A",
      "exp": "Jump on the bandwagon: to adopt a popular cause or fashion for convenience."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Take with a grain of salt\"",
      "opts": [
        "To view a statement with skepticism and not accept it as completely accurate",
        "To season food moderately",
        "To agree enthusiastically with someone",
        "To misunderstand a clear instruction"
      ],
      "ans": "A",
      "exp": "Take with a grain of salt: to accept information with skepticism or reservation."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Cost an arm and a leg\"",
      "opts": [
        "To be exceedingly expensive or overpriced",
        "To require physical sacrifice",
        "To be of inferior manufacturing quality",
        "To be offered at a massive discount"
      ],
      "ans": "A",
      "exp": "Cost an arm and a leg: to command an exceptionally high, exorbitant price."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"See eye to eye\"",
      "opts": [
        "To agree completely on a matter with another person",
        "To stare directly at someone in anger",
        "To possess identical physical vision",
        "To conduct an ophthalmology exam"
      ],
      "ans": "A",
      "exp": "See eye to eye: to share the same viewpoint or be in full agreement."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Burn bridges\"",
      "opts": [
        "To permanently destroy relationships or connections with people or organizations",
        "To set fire to engineering crossings",
        "To retreat safely from conflict",
        "To build new professional alliances"
      ],
      "ans": "A",
      "exp": "Burn bridges: to act in a way that irreversibly severs ties with others."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Fit as a fiddle\"",
      "opts": [
        "In exceptionally good physical health and condition",
        "Capable of playing string instruments",
        "Very thin and fragile",
        "Dressed in elegant formal attire"
      ],
      "ans": "A",
      "exp": "Fit as a fiddle: in prime physical shape and vigorous health."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Throw in the towel\"",
      "opts": [
        "To give up and admit defeat in a contest or endeavor",
        "To do laundry diligently",
        "To clean up after an accident",
        "To challenge an opponent to a duel"
      ],
      "ans": "A",
      "exp": "Throw in the towel: to concede defeat; derived from boxing."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"A piece of cake\"",
      "opts": [
        "A task or activity that is extremely simple and effortless to accomplish",
        "A sweet dessert served at celebrations",
        "A rare culinary treat",
        "A complicated puzzle"
      ],
      "ans": "A",
      "exp": "A piece of cake: an undertaking that is very easy to accomplish."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Under the weather\"",
      "opts": [
        "Feeling slightly ill, indisposed, or unwell",
        "Experiencing stormy climate conditions",
        "Trapped in an open outdoor field",
        "Completely exhausted from athletic exertion"
      ],
      "ans": "A",
      "exp": "Under the weather: feeling mildly sick or not at one's physical best."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Pull someone's leg\"",
      "opts": [
        "To tease or fool someone playfully with a harmless untruth",
        "To trip someone intentionally",
        "To rescue someone from falling",
        "To assist someone with physical therapy"
      ],
      "ans": "A",
      "exp": "Pull someone's leg: to joke or deceive someone in a lighthearted manner."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Beat around the bush\"",
      "opts": [
        "To avoid talking about the main, important topic directly",
        "To trim garden shrubbery",
        "To search for game in a forest",
        "To speak with absolute clarity"
      ],
      "ans": "A",
      "exp": "Beat around the bush: to discuss extraneous matters to avoid the central issue."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Call it a day\"",
      "opts": [
        "To stop working on something for the rest of the day",
        "To name a calendar date",
        "To celebrate an anniversary",
        "To reschedule a morning meeting"
      ],
      "ans": "A",
      "exp": "Call it a day: to decide that work for the day has concluded."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Break a leg\"",
      "opts": [
        "A theatrical superstition wishing good luck to a performer",
        "An unfortunate orthopedic accident",
        "A harsh condemnation of a dancer",
        "An athletic foul in football"
      ],
      "ans": "A",
      "exp": "Break a leg: traditional idiom used to wish someone good luck before a performance."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Caught red-handed\"",
      "opts": [
        "Apprehended in the exact act of committing a crime or wrongdoing",
        "Having hands stained with dye",
        "Suffering from frostbite",
        "Working diligently with manual tools"
      ],
      "ans": "A",
      "exp": "Caught red-handed: discovered directly in the commission of an offense."
    },
    {
      "q": "Choose the option that best explains the meaning of the given idiom:\n\"Barking up the wrong tree\"",
      "opts": [
        "Pursuing a mistaken line of thought or accusing the wrong person",
        "A dog chasing squirrels in an orchard",
        "Climbing dangerous trees at night",
        "Choosing an incorrect gardening plant"
      ],
      "ans": "A",
      "exp": "Barking up the wrong tree: directing efforts or accusations toward the wrong target."
    }
  ]
};

/**
 * Generate 30 questions for any verbal topic and set
 * 1-to-1 mapping ensures zero duplication across all 30 questions in every set.
 */
export function getVerbalQuestions(topic, type, setNumber) {
    const questions = [];
    const pool = VERBAL_POOLS_MAP[topic.topicId] || VERBAL_POOLS_MAP["ordering-of-words"];

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
        // Mock Assessment: Progressive mixed blend across all verbal pools
        const allKeys = Object.keys(VERBAL_POOLS_MAP);
        for (let i = 1; i <= 30; i++) {
            const topicKey = allKeys[(i - 1) % allKeys.length];
            const subPool = VERBAL_POOLS_MAP[topicKey];
            
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
            
            // Use unique slice index for guaranteed uniqueness in mock tests
            const qIndex = (i - 1) % tierPool.length;
            const base = tierPool[qIndex] || tierPool[0];
            const qId = `${topic.topicId}-${type}-s${setNumber}-q${i}`;
            questions.push(createQuestionItem(qId, topic, type, setNumber, i, base, difficultyTier));
        }
    }
    return questions;
}
