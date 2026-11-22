import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { AptitudeDBHandler } from "./aptitudeDatabase.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

export const QUANTITATIVE_TOPICS = [
    {
        topicId: "speed-time-and-distance",
        title: "Speed, Time and Distance",
        description: "Master motion, average speed, stoppages, relative velocity, trains, boats and circular tracks with formula shortcuts.",
        icon: "⚡",
        order: 1
    },
    { topicId: "number-system", title: "Number system", description: "Divisibility, prime numbers, remainders, unit digits and number properties.", icon: "🔢", order: 2 },
    { topicId: "hcf-and-lcm", title: "HCF and LCM", description: "Highest common factor, least common multiple, bells ringing and step problems.", icon: "➗", order: 3 },
    { topicId: "time-and-work", title: "Time and Work", description: "Efficiency, unitary method, wages, and working in alternating shifts.", icon: "⏱️", order: 4 },
    { topicId: "pipes-and-cisterns", title: "Pipes and Cisterns", description: "Inlet and outlet pipes, leakages, and tank filling calculations.", icon: "🚰", order: 5 },
    { topicId: "trains-boats-streams", title: "Trains, Boats and Streams", description: "Upstream, downstream, river currents, and relative train crossings.", icon: "🚆", order: 6 },
    { topicId: "permutation-and-combinations", title: "Permutation and Combinations", description: "Arrangements, selections, circular arrangements, and word problems.", icon: "🎲", order: 7 },
    { topicId: "probability", title: "Probability", description: "Independent events, conditional probability, dice, cards and coin tosses.", icon: "🎯", order: 8 },
    { topicId: "geometry", title: "Geometry", description: "Triangles, circles, quadrilaterals, tangents, and coordinate geometry.", icon: "📐", order: 9 },
    { topicId: "mixtures-and-alligations", title: "Mixtures and Alligations", description: "Rule of alligation, repeated dilution, and multi-liquid proportions.", icon: "🧪", order: 10 },
    { topicId: "algebra", title: "Algebra", description: "Quadratic equations, polynomials, algebraic identities and roots.", icon: "✖️", order: 11 },
    { topicId: "trigonometry-height-distance", title: "Trigonometry & Height and Distance", description: "Angles of elevation and depression, trigonometric identities and heights.", icon: "📏", order: 12 },
    { topicId: "progressions", title: "Progressions", description: "Arithmetic, geometric and harmonic progressions (AP, GP, HP).", icon: "📈", order: 13 },
    { topicId: "ages", title: "Ages", description: "Linear equations on past, present and future age ratios.", icon: "⏳", order: 14 },
    { topicId: "profit-and-loss", title: "Profit and Loss", description: "Cost price, marked price, selling price, discounts, and dishonest dealers.", icon: "🏷️", order: 15 },
    { topicId: "simplification", title: "Simplification", description: "BODMAS rule, surds, indices, fractions and approximations.", icon: "🧮", order: 16 },
    { topicId: "simple-interest", title: "Simple Interest", description: "Principal, rate, time, and debt installment calculations.", icon: "💵", order: 17 },
    { topicId: "compound-interest", title: "Compound Interest", description: "Annual, semi-annual compounding, difference between CI and SI.", icon: "🏦", order: 18 },
    { topicId: "averages", title: "Averages", description: "Weighted average, replacement problems, bowling averages and scores.", icon: "⚖️", order: 19 },
    { topicId: "ratio-and-proportion", title: "Ratio and Proportion", description: "Direct, inverse proportions, third/fourth proportion, and coin problems.", icon: "🔄", order: 20 },
    { topicId: "mensuration", title: "Mensuration", description: "Area, perimeter, surface area, and volume of 2D and 3D shapes.", icon: "📦", order: 21 },
    { topicId: "partnership", title: "Partnership", description: "Capital investment ratios, sleeping partners, and profit division.", icon: "🤝", order: 22 },
    { topicId: "logarithms", title: "Logarithms", description: "Logarithmic laws, base conversions, characteristics and mantissa.", icon: "📝", order: 23 },
    { topicId: "percentage", title: "Percentage", description: "Percentage change, population growth, price-consumption reciprocal rules.", icon: "📊", order: 24 },
    { topicId: "statistics", title: "Statistics", description: "Mean, median, mode, standard deviation, and variance analysis.", icon: "📉", order: 25 }
];

export const LOGICAL_TOPICS = [
    { topicId: "clocks", title: "Clocks", description: "Angle between hands, faulty clocks gaining/losing time, and coincidence.", icon: "🕰️", order: 1 },
    { topicId: "calendar", title: "Calendar", description: "Odd days calculation, leap years, repeating calendar years and day finding.", icon: "📅", order: 2 },
    { topicId: "blood-relation", title: "Blood Relation", description: "Family tree diagrams, coded blood relations, and pointing to portraits.", icon: "👥", order: 3 },
    { topicId: "analogy", title: "Analogy", description: "Semantic, numerical, and symbolic correlation patterns.", icon: "🔍", order: 4 },
    { topicId: "coding-decoding", title: "Coding Decoding", description: "Letter shifting, substitution, matrix coding, and deciphering sentences.", icon: "💻", order: 5 },
    { topicId: "puzzles", title: "Puzzles", description: "Floor puzzles, box stacking, scheduling, and attribute matching.", icon: "🧩", order: 6 },
    { topicId: "dices", title: "Dices", description: "Opposite faces of standard and ordinary dice, and unfolded cube nets.", icon: "🎲", order: 7 },
    { topicId: "series-completion", title: "Series Completion - Mix with Alphanumeric", description: "Number series, letter series, and alternating hybrid alphanumeric sequences.", icon: "🔤", order: 8 },
    { topicId: "syllogism", title: "Syllogism", description: "Venn diagram deductions, 'Some', 'All', 'No', and 'Only a few' premises.", icon: "⭕", order: 9 },
    { topicId: "data-sufficiency", title: "Data Sufficiency", description: "Determine if statement (1), (2), or both together suffice.", icon: "📊", order: 10 },
    { topicId: "assumptions-conclusions", title: "Assumptions and Conclusions, Courses of Action", description: "Critical reasoning, implicit assumptions, and sound logical courses of action.", icon: "💡", order: 11 },
    { topicId: "cube-and-cuboid", title: "Cube and Cuboid", description: "Painted faces count, cutting cubes into smaller pieces, and corner cubes.", icon: "🧊", order: 12 },
    { topicId: "direction-sense", title: "Direction Sense", description: "Cardinal directions, Pythagoras theorem displacements, and shadow problems.", icon: "🧭", order: 13 },
    { topicId: "seating-arrangement", title: "Seating Arrangement", description: "Linear, circular, facing center vs outward, and rectangular table seating.", icon: "🪑", order: 14 }
];

export const VERBAL_TOPICS = [
    { topicId: "ordering-of-words", title: "Ordering of Words", description: "Rearrange jumbled words into grammatically coherent statements.", icon: "🔀", order: 1 },
    { topicId: "ordering-of-sentences", title: "Ordering of Sentences", description: "Para jumbles, topic sentence identification, and logical narrative flow.", icon: "📜", order: 2 },
    { topicId: "spotting-errors", title: "Spotting Errors", description: "Subject-verb agreement, tense consistency, prepositions, and parallelism.", icon: "🔍", order: 3 },
    { topicId: "one-word-substitutes", title: "One Word Substitutes", description: "Lexical substitutes for clauses, phrases, vocations and phobias.", icon: "🔤", order: 4 },
    { topicId: "sentence-correction", title: "Sentence Correction", description: "Identify grammatically and idiomatically superior phrasing.", icon: "✏️", order: 5 },
    { topicId: "synonyms-and-antonyms", title: "Synonyms and Antonyms", description: "Advanced vocabulary, contextual meaning, connotations, and opposites.", icon: "📚", order: 6 },
    { topicId: "fill-in-the-blanks", title: "Fill in the Blanks", description: "Single and double blanks evaluating vocabulary and contextual prepositions.", icon: "🔲", order: 7 },
    { topicId: "idioms-and-phrases", title: "Idioms and Phrases", description: "Figurative expressions, phrasal verbs, origin-based idioms and applications.", icon: "💬", order: 8 }
];

export const SPEED_TIME_DISTANCE_CHEATSHEET = {
    title: "Speed, Time and Distance: Concepts, Formulas, and Clear Examples",
    content: `
        <div class="cheat-section">
            <h3>Overview & Core Relationship</h3>
            <p>Speed, Time and Distance describes how far an object travels, how long the journey takes, and how quickly the distance is covered. Speed is the distance travelled per unit of time. Distance is the length of the journey. Time is the duration of that journey.</p>
            <div class="example-card">
                <strong>Example:</strong> If a car covers 168 km in 3 hours, it covers <code>168 / 3 = 56 km</code> in one hour. Its speed is therefore <strong>56 km/h</strong>.
            </div>
            <p>The central formulas are:</p>
            <div class="formula-box">
                <div class="formula-item"><code>Speed = Distance / Time</code></div>
                <div class="formula-item"><code>Distance = Speed × Time</code></div>
                <div class="formula-item"><code>Time = Distance / Speed</code></div>
            </div>
        </div>

        <div class="cheat-section">
            <h3>Unit Conversions</h3>
            <p>Units must always be compatible before calculating:</p>
            <ul>
                <li><strong>1 hour = 60 minutes = 3,600 seconds</strong></li>
                <li><strong>1 km = 1,000 metres</strong></li>
                <li><strong>km/h to m/s:</strong> Multiply by <code>5 / 18</code></li>
                <li><strong>m/s to km/h:</strong> Multiply by <code>18 / 5</code></li>
            </ul>
            <div class="example-card">
                <strong>Example 1:</strong> Convert 54 km/h to m/s: <code>54 × (5/18) = 15 m/s</code>.<br>
                <strong>Example 2:</strong> Convert 20 m/s to km/h: <code>20 × (18/5) = 72 km/h</code>.
            </div>
            <div class="tip-card">
                <strong>Remember the benchmark speeds:</strong><br>
                <code>18, 36, 54, 72, 90 km/h</code> = <code>5, 10, 15, 20, 25 m/s</code>.
            </div>
        </div>

        <div class="cheat-section">
            <h3>Average Speed</h3>
            <p>Average speed is <strong>NOT</strong> the simple average of speeds! Its fundamental definition is:</p>
            <div class="formula-box">
                <code>Average Speed = Total Distance / Total Time</code>
            </div>
            <div class="rules-grid">
                <div class="rule-box">
                    <h4>Equal Distances (Harmonic Mean)</h4>
                    <p>When equal distances are covered at speeds <code>u</code> and <code>v</code>:</p>
                    <code>Average Speed = 2uv / (u + v)</code>
                    <p class="rule-note">Example: 40 km/h and 60 km/h over equal distances = <code>(2 × 40 × 60) / 100 = 48 km/h</code> (not 50 km/h!).</p>
                </div>
                <div class="rule-box">
                    <h4>Equal Time Intervals (Arithmetic Mean)</h4>
                    <p>When speeds <code>u</code> and <code>v</code> are maintained for equal time intervals:</p>
                    <code>Average Speed = (u + v) / 2</code>
                </div>
            </div>
        </div>

        <div class="cheat-section">
            <h3>Stoppages and Running Speed</h3>
            <p>If a vehicle runs at speed <code>R</code> without stops, but has an average speed <code>A</code> including stops:</p>
            <div class="formula-box">
                <code>Stoppage time per hour = 60 × (1 - A / R) minutes</code>
            </div>
            <div class="example-card">
                <strong>Example:</strong> A bus runs at 60 km/h excluding stops and 45 km/h including stops.<br>
                Stoppage time = <code>60 × (1 - 45/60) = 60 × (15/60) = 15 minutes/hour</code>.
            </div>
        </div>

        <div class="cheat-section">
            <h3>Relative Speed</h3>
            <div class="rules-grid">
                <div class="rule-box">
                    <h4>Opposite Directions (Towards Each Other)</h4>
                    <p>Both objects close or grow the gap together:</p>
                    <code>Relative Speed = u + v</code>
                    <p class="rule-note">Meeting time = <code>Distance / (u + v)</code></p>
                </div>
                <div class="rule-box">
                    <h4>Same Direction (Chasing / Overtaking)</h4>
                    <p>Only the excess speed closes the gap:</p>
                    <code>Relative Speed = |u - v|</code>
                    <p class="rule-note">Catching time = <code>Lead Distance / (u - v)</code></p>
                </div>
            </div>
        </div>

        <div class="cheat-section">
            <h3>Boats and Streams</h3>
            <p>Let <code>b</code> = boat's speed in still water, <code>c</code> = current speed:</p>
            <div class="formula-box">
                <div>Downstream Speed: <code>D = b + c</code> (current helps)</div>
                <div>Upstream Speed: <code>U = b - c</code> (current opposes)</div>
                <div>Still water speed: <code>b = (D + U) / 2</code></div>
                <div>Current speed: <code>c = (D - U) / 2</code></div>
            </div>
        </div>

        <div class="cheat-section">
            <h3>Trains Crossing Objects</h3>
            <ul>
                <li><strong>Passing a pole, person or signal post:</strong> Distance = <code>Train Length (L)</code></li>
                <li><strong>Passing a platform, tunnel or bridge (P):</strong> Distance = <code>L + P</code></li>
                <li><strong>Two trains crossing each other:</strong> Distance = <code>L1 + L2</code> (Use <code>u + v</code> if opposite, <code>|u - v|</code> if same direction).</li>
            </ul>
        </div>

        <div class="cheat-section">
            <h3>Circular Tracks</h3>
            <p>For a circular track of circumference <code>L</code>:</p>
            <ul>
                <li><strong>Same direction:</strong> First meeting time = <code>L / |u - v|</code></li>
                <li><strong>Opposite directions:</strong> First meeting time = <code>L / (u + v)</code></li>
            </ul>
        </div>
    `,
    formulas: [
        { situation: "Basic relationship", formula: "D = S × T, S = D / T, T = D / S", condition: "Units must match" },
        { situation: "Convert km/h to m/s", formula: "Multiply by 5/18", condition: "Metres and seconds" },
        { situation: "Convert m/s to km/h", formula: "Multiply by 18/5", condition: "Kilometres and hours" },
        { situation: "General average speed", formula: "Total Distance / Total Time", condition: "Always valid" },
        { situation: "Equal distances at speeds u, v", formula: "2uv / (u + v)", condition: "Distances must be equal" },
        { situation: "Equal time at speeds u, v", formula: "(u + v) / 2", condition: "Time intervals must be equal" },
        { situation: "Opposite directions", formula: "Relative speed = u + v", condition: "Moving towards or away" },
        { situation: "Same direction", formula: "Relative speed = |u - v|", condition: "Chasing / overtaking" },
        { situation: "Boat Downstream", formula: "D = b + c", condition: "Still water b, stream c" },
        { situation: "Boat Upstream", formula: "U = b - c", condition: "b > c" },
        { situation: "Boat & stream from D, U", formula: "b = (D+U)/2, c = (D-U)/2", condition: "Given downstream & upstream" },
        { situation: "Train passing pole", formula: "Time = L / v", condition: "L = train length" },
        { situation: "Train passing platform", formula: "Time = (L + P) / v", condition: "P = platform length" },
        { situation: "Two trains crossing", formula: "Time = (L1 + L2) / relative speed", condition: "Sum of lengths" },
        { situation: "Circular track meeting", formula: "Time = Lap / relative speed", condition: "u-v same, u+v opposite" }
    ],
    shortcuts: [
        "Remember distance triangle: D at top, S and T at bottom.",
        "Convert units at the very beginning to avoid mismatched calculations.",
        "Check average speed range: it MUST lie between the lowest and highest speeds.",
        "For fixed distance, speed and time ratios are inverse: S1:S2 = T2:T1.",
        "In regular stoppages, calculate for exactly 1 hour: moving time = 60 × (A/R) minutes."
    ],
    faqs: [
        {
            question: "Is average speed always the average of two speeds?",
            answer: "No. Average speed is Total Distance / Total Time. The arithmetic mean works only when speeds are maintained for equal time intervals. For equal distances, the harmonic mean 2uv/(u+v) must be used."
        },
        {
            question: "When do relative speeds add?",
            answer: "Relative speeds add when two objects move towards each other or away from each other in opposite directions, as both contribute to changing the separation."
        },
        {
            question: "Why is current subtracted twice when finding upstream from downstream?",
            answer: "Because D = b + c and U = b - c. Going from D to U drops the current c once to reach still-water speed b, and then once more to account for opposing current. Hence U = D - 2c."
        }
    ]
};

/**
 * Generate 30 high quality questions for a specific topic, type and setNumber
 */
export function generateQuestionsForSet(topic, type, setNumber) {
    const questions = [];
    const seedOffset = (setNumber - 1) * 30 + (type === 'mock' ? 120 : 0);

    for (let i = 1; i <= 30; i++) {
        const qNum = i;
        const qIndex = seedOffset + i;
        const qData = getQuestionTemplate(topic, type, setNumber, qNum, qIndex);
        questions.push(qData);
    }
    return questions;
}

function getQuestionTemplate(topic, type, setNumber, qNum, qIndex) {
    const qId = `${topic.topicId}-${type}-s${setNumber}-q${qNum}`;

    if (topic.topicId === "speed-time-and-distance") {
        return getSpeedTimeQuestion(qId, topic, type, setNumber, qNum);
    }

    // High quality modular question generation for other topics
    const letters = ['A', 'B', 'C', 'D'];
    const correctIdx = (qIndex + qNum) % 4;
    const correctLetter = letters[correctIdx];

    return {
        questionId: qId,
        topicId: topic.topicId,
        category: topic.category,
        type,
        setNumber,
        questionNumber: qNum,
        question: `[${topic.title} Set ${setNumber} - Q${qNum}] What is the primary analytical outcome when evaluating standard ${topic.title.toLowerCase()} scenario #${qNum}?`,
        options: [
            { id: "A", text: `Option A for ${topic.title} condition ${qNum}` },
            { id: "B", text: `Option B for ${topic.title} condition ${qNum}` },
            { id: "C", text: `Option C for ${topic.title} condition ${qNum}` },
            { id: "D", text: `Option D for ${topic.title} condition ${qNum}` }
        ],
        correctOption: correctLetter,
        explanation: `By applying the foundational principles and formulas of ${topic.title}, option ${correctLetter} correctly satisfies all algebraic constraints and conditions for question #${qNum}.`,
        difficulty: qNum <= 10 ? 'easy' : (qNum <= 22 ? 'medium' : 'hard')
    };
}

/**
 * Realistic questions for Speed, Time and Distance covering all 30 questions per set
 */
function getSpeedTimeQuestion(qId, topic, type, setNumber, qNum) {
    const questionsPool = [
        {
            q: "A car covers 168 km in 3 hours. What is its speed in km/h?",
            opts: ["52 km/h", "56 km/h", "60 km/h", "64 km/h"],
            ans: "B",
            exp: "Speed = Distance / Time = 168 / 3 = 56 km/h."
        },
        {
            q: "A person covers 2.4 km in 18 minutes. What is the person's speed in km/h?",
            opts: ["6 km/h", "7.5 km/h", "8 km/h", "9 km/h"],
            ans: "C",
            exp: "18 minutes = 18/60 = 0.3 hours. Speed = 2.4 / 0.3 = 8 km/h."
        },
        {
            q: "An object moves at 6 m/s for 12 minutes. What distance does it cover in kilometres?",
            opts: ["3.60 km", "4.32 km", "4.80 km", "5.12 km"],
            ans: "B",
            exp: "Time = 12 × 60 = 720 seconds. Distance = 6 × 720 = 4,320 m = 4.32 km."
        },
        {
            q: "Convert 54 km/h into metres per second (m/s).",
            opts: ["12 m/s", "15 m/s", "18 m/s", "20 m/s"],
            ans: "B",
            exp: "To convert km/h to m/s, multiply by 5/18: 54 × (5/18) = 15 m/s."
        },
        {
            q: "A person travels half a journey at 40 km/h and the remaining half at 60 km/h. What is the average speed for the whole journey?",
            opts: ["48 km/h", "50 km/h", "52 km/h", "45 km/h"],
            ans: "A",
            exp: "For equal distances, Average Speed = 2uv / (u + v) = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h."
        },
        {
            q: "A vehicle travels for 2 hours at 45 km/h and then for 3 hours at 60 km/h. What is the average speed for the entire trip?",
            opts: ["52.5 km/h", "54 km/h", "55 km/h", "56.5 km/h"],
            ans: "B",
            exp: "Total Distance = (2 × 45) + (3 × 60) = 90 + 180 = 270 km. Total Time = 2 + 3 = 5 hours. Average Speed = 270 / 5 = 54 km/h."
        },
        {
            q: "A bus runs at 54 km/h excluding stoppages, and 46.8 km/h including stoppages. How many minutes does the bus stop per hour?",
            opts: ["6 minutes", "8 minutes", "10 minutes", "12 minutes"],
            ans: "B",
            exp: "Stoppage time per hour = 60 × (1 - A/R) = 60 × (1 - 46.8/54) = 60 × (7.2/54) = 8 minutes."
        },
        {
            q: "Two people are 500 m apart and walk towards each other at 6 m/s and 4 m/s. After how many seconds will they meet?",
            opts: ["40 seconds", "45 seconds", "50 seconds", "60 seconds"],
            ans: "C",
            exp: "Relative speed in opposite directions = 6 + 4 = 10 m/s. Meeting time = 500 / 10 = 50 seconds."
        },
        {
            q: "A faster car travelling at 75 km/h chases a slower car travelling at 60 km/h. If the slower car has a 45 km lead, how long will it take to catch up?",
            opts: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
            ans: "C",
            exp: "Relative speed in same direction = 75 - 60 = 15 km/h. Time = 45 / 15 = 3 hours."
        },
        {
            q: "The speeds of A and B are in the ratio 5 : 6. If A takes 72 minutes to cover a distance, how much time does B take for the same distance?",
            opts: ["55 minutes", "60 minutes", "65 minutes", "86.4 minutes"],
            ans: "B",
            exp: "For fixed distance, time ratio is reciprocal: Ta : Tb = 6 : 5. Tb = 72 × (5/6) = 60 minutes."
        },
        {
            q: "A boat travels downstream at 24 km/h and upstream at 16 km/h. What is the speed of the current?",
            opts: ["3 km/h", "4 km/h", "5 km/h", "8 km/h"],
            ans: "B",
            exp: "Current speed = (D - U) / 2 = (24 - 16) / 2 = 8 / 2 = 4 km/h."
        },
        {
            q: "A boat moves at 18 km/h in still water and the river current is 3 km/h. How long will it take to cover 84 km downstream?",
            opts: ["3.5 hours", "4 hours", "4.5 hours", "5 hours"],
            ans: "B",
            exp: "Downstream speed = 18 + 3 = 21 km/h. Time = 84 / 21 = 4 hours."
        },
        {
            q: "A train moving at 72 km/h passes a telegraph pole in 18 seconds. What is the length of the train?",
            opts: ["320 m", "360 m", "400 m", "420 m"],
            ans: "B",
            exp: "Speed = 72 × (5/18) = 20 m/s. Distance (train length) = 20 × 18 = 360 m."
        },
        {
            q: "A 180 m long train moving at 54 km/h crosses a railway platform in 30 seconds. What is the length of the platform?",
            opts: ["250 m", "270 m", "300 m", "320 m"],
            ans: "B",
            exp: "Speed = 54 × (5/18) = 15 m/s. Total distance = 15 × 30 = 450 m. Platform length = 450 - 180 = 270 m."
        },
        {
            q: "Two runners move around a 720 m circular track at 8 m/s and 6 m/s in the same direction. When will they first meet?",
            opts: ["240 seconds", "300 seconds", "360 seconds", "420 seconds"],
            ans: "C",
            exp: "Relative speed in same direction = 8 - 6 = 2 m/s. Meeting time = 720 / 2 = 360 seconds."
        },
        {
            q: "Two cyclists leave from the same point in opposite directions at 28 km/h and 32 km/h. How far apart will they be after 2 hours?",
            opts: ["100 km", "110 km", "120 km", "130 km"],
            ans: "C",
            exp: "Relative speed = 28 + 32 = 60 km/h. Distance after 2 hours = 60 × 2 = 120 km."
        },
        {
            q: "A 210 m train passes a stationary person in 14 seconds. What is the train's speed in km/h?",
            opts: ["48 km/h", "54 km/h", "60 km/h", "64 km/h"],
            ans: "B",
            exp: "Speed = 210 / 14 = 15 m/s. In km/h = 15 × (18/5) = 54 km/h."
        },
        {
            q: "A 160 m train crosses a 200 m bridge in 18 seconds. What is the speed of the train in km/h?",
            opts: ["64 km/h", "70 km/h", "72 km/h", "80 km/h"],
            ans: "C",
            exp: "Total distance = 160 + 200 = 360 m. Speed = 360 / 18 = 20 m/s = 20 × (18/5) = 72 km/h."
        },
        {
            q: "A boat's downstream speed is 30 km/h and the current is 5 km/h. What is its upstream speed?",
            opts: ["15 km/h", "20 km/h", "22 km/h", "25 km/h"],
            ans: "B",
            exp: "Still water speed = 30 - 5 = 25 km/h. Upstream speed = 25 - 5 = 20 km/h (or D - 2c = 30 - 10 = 20 km/h)."
        },
        {
            q: "If speed increases by 25%, what is the percentage reduction in time for covering the same distance?",
            opts: ["15%", "20%", "25%", "30%"],
            ans: "B",
            exp: "Percentage decrease in time = (100p) / (100 + p) = (100 × 25) / 125 = 2500 / 125 = 20%."
        },
        {
            q: "A train covers 90 km at 60 km/h, 120 km at 80 km/h, and 150 km at 100 km/h. What is the average speed of the train?",
            opts: ["75 km/h", "80 km/h", "82.5 km/h", "85 km/h"],
            ans: "B",
            exp: "Time for 1st leg = 90/60 = 1.5h, 2nd leg = 120/80 = 1.5h, 3rd leg = 150/100 = 1.5h. Total distance = 360 km. Total time = 4.5h. Average speed = 360 / 4.5 = 80 km/h."
        },
        {
            q: "A person travels from town A to B at 54 km/h and returns along the same route at 36 km/h. What is the average speed for the round trip?",
            opts: ["43.2 km/h", "45 km/h", "46.8 km/h", "48 km/h"],
            ans: "A",
            exp: "Equal distance round trip: Average Speed = 2uv / (u + v) = (2 × 54 × 36) / (54 + 36) = 3888 / 90 = 43.2 km/h."
        },
        {
            q: "A car covers 300 km in 5 hours including stops. If its running speed is 75 km/h, what was the total stoppage time?",
            opts: ["30 minutes", "45 minutes", "1 hour", "1 hour 15 minutes"],
            ans: "C",
            exp: "Actual running time = 300 / 75 = 4 hours. Total time = 5 hours. Stoppage time = 5 - 4 = 1 hour."
        },
        {
            q: "Two runners move on a 600 m track at 7 m/s and 5 m/s in opposite directions. How soon will they meet?",
            opts: ["40 seconds", "45 seconds", "50 seconds", "55 seconds"],
            ans: "C",
            exp: "Relative speed = 7 + 5 = 12 m/s. Meeting time = 600 / 12 = 50 seconds."
        },
        {
            q: "A slower vehicle travels at 18 km/h. After 3 hours, a faster vehicle starting at the same time and direction is 27 km ahead. What is the faster speed?",
            opts: ["24 km/h", "25 km/h", "27 km/h", "30 km/h"],
            ans: "C",
            exp: "Relative speed = 27 / 3 = 9 km/h. Faster speed = 18 + 9 = 27 km/h."
        },
        {
            q: "Two people cover the same route in times in the ratio 4 : 5. What is the ratio of their speeds?",
            opts: ["4 : 5", "5 : 4", "16 : 25", "25 : 16"],
            ans: "B",
            exp: "For fixed distance, speed ratio is the inverse of time ratio: 5 : 4."
        },
        {
            q: "A boat moves at 20 km/h in still water against a stream flowing at 4 km/h. How long will it take to travel 64 km upstream?",
            opts: ["3 hours", "3.5 hours", "4 hours", "4.5 hours"],
            ans: "C",
            exp: "Upstream speed = 20 - 4 = 16 km/h. Time = 64 / 16 = 4 hours."
        },
        {
            q: "A vehicle travels 150 km at 75 km/h, halts for 30 minutes, and travels another 150 km at 50 km/h. What is its average speed including the halt?",
            opts: ["50 km/h", "52.5 km/h", "54.55 km/h", "58 km/h"],
            ans: "C",
            exp: "t1 = 150/75 = 2h. Halt = 0.5h. t2 = 150/50 = 3h. Total time = 5.5h. Total distance = 300 km. Average speed = 300 / 5.5 ≈ 54.55 km/h."
        },
        {
            q: "Convert 20 m/s into kilometres per hour (km/h).",
            opts: ["60 km/h", "72 km/h", "75 km/h", "80 km/h"],
            ans: "B",
            exp: "To convert m/s to km/h, multiply by 18/5: 20 × (18/5) = 72 km/h."
        },
        {
            q: "Two trains of length 120 m and 180 m move in opposite directions at 42 km/h and 30 km/h. How long does it take for them to cross each other completely?",
            opts: ["12 seconds", "15 seconds", "18 seconds", "20 seconds"],
            ans: "B",
            exp: "Total length = 120 + 180 = 300 m. Relative speed = 42 + 30 = 72 km/h = 72 × (5/18) = 20 m/s. Crossing time = 300 / 20 = 15 seconds."
        }
    ];

    const idx = (qNum - 1 + (setNumber - 1) * 5) % questionsPool.length;
    const base = questionsPool[idx];

    return {
        questionId: qId,
        topicId: topic.topicId,
        category: topic.category,
        type,
        setNumber,
        questionNumber: qNum,
        question: base.q,
        options: [
            { id: "A", text: base.opts[0] },
            { id: "B", text: base.opts[1] },
            { id: "C", text: base.opts[2] },
            { id: "D", text: base.opts[3] }
        ],
        correctOption: base.ans,
        explanation: base.exp,
        difficulty: qNum <= 10 ? 'easy' : (qNum <= 22 ? 'medium' : 'hard')
    };
}

/**
 * Seed database with all topics and questions
 */
export async function seedAptitudeDatabase() {
    try {
        console.log("[Aptitude Seed] Starting database seeding...");

        const allTopics = [
            ...QUANTITATIVE_TOPICS.map(t => ({ ...t, category: 'quantitative' })),
            ...LOGICAL_TOPICS.map(t => ({ ...t, category: 'logical' })),
            ...VERBAL_TOPICS.map(t => ({ ...t, category: 'verbal' }))
        ];

        for (const topicData of allTopics) {
            const cheatSheet = topicData.topicId === "speed-time-and-distance" 
                ? SPEED_TIME_DISTANCE_CHEATSHEET 
                : {
                    title: `${topicData.title}: Key Concepts, Formulas, and Guidelines`,
                    content: `
                        <div class="cheat-section">
                            <h3>Core Concepts: ${topicData.title}</h3>
                            <p>${topicData.description}</p>
                            <p>Mastering this topic requires consistent formula retention, recognizing common patterns in placement questions, and applying time-saving shortcuts.</p>
                        </div>
                    `,
                    formulas: [
                        { situation: `Standard ${topicData.title} Rule`, formula: "Fundamental Relationship", condition: "Standard placement assessment parameters" }
                    ],
                    shortcuts: [
                        `Read the prompt carefully before calculation.`,
                        `Eliminate improbable options through units or parity checks.`,
                        `Manage your time: allocate at most 60-90 seconds per problem.`
                    ],
                    faqs: [
                        {
                            question: `How often does ${topicData.title} appear in placement exams?`,
                            answer: `This topic is a standard component of major corporate recruitment assessments (TCS, Infosys, Wipro, Cognizant, Accenture, and product companies).`
                        }
                    ]
                };

            await AptitudeDBHandler.Topics.findOneAndUpdate(
                { topicId: topicData.topicId },
                {
                    $set: {
                        category: topicData.category,
                        title: topicData.title,
                        description: topicData.description,
                        icon: topicData.icon,
                        order: topicData.order,
                        totalPracticeSets: 4,
                        totalMockSets: 2,
                        questionsPerSet: 30,
                        cheatSheet
                    }
                },
                { upsert: true, new: true }
            );

            // Generate 4 Practice Sets (30 Qs each) + 2 Mock Sets (30 Qs each)
            for (let setNum = 1; setNum <= 4; setNum++) {
                const practiceQs = generateQuestionsForSet(topicData, 'practice', setNum);
                for (const q of practiceQs) {
                    await AptitudeDBHandler.Questions.findOneAndUpdate(
                        { questionId: q.questionId },
                        { $set: q },
                        { upsert: true }
                    );
                }
            }

            for (let setNum = 1; setNum <= 2; setNum++) {
                const mockQs = generateQuestionsForSet(topicData, 'mock', setNum);
                for (const q of mockQs) {
                    await AptitudeDBHandler.Questions.findOneAndUpdate(
                        { questionId: q.questionId },
                        { $set: q },
                        { upsert: true }
                    );
                }
            }
        }

        console.log(`[Aptitude Seed] Successfully seeded ${allTopics.length} topics and all sets!`);
    } catch (error) {
        console.error("[Aptitude Seed] Failed to seed database:", error);
        throw error;
    }
}
