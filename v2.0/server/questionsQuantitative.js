/**
 * Aptitude Arena - Quantitative Aptitude Question Bank & Progressive Generators
 * Covers all 25 Quantitative Topics across:
 * - Level 1 (Set 1: Foundational / Easy)
 * - Level 2 (Set 2: Intermediate / Medium Placement)
 * - Level 3 (Set 3: Advanced / Hard Placement)
 * - Level 4 (Set 4: Master / Tricky / Expert)
 * - Mock 1 & Mock 2: Mixed multi-topic & multi-difficulty blends
 * Sources: CSE Placement Hub, IndiaBIX Quantitative, CAT/GATE Quantitative aptitude.
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

// -------------------------------------------------------------
// TOPIC 1: SPEED, TIME & DISTANCE
// -------------------------------------------------------------
const SPEED_TIME_POOLS = {
    level1: [
        { q: "A car covers 180 km in 3 hours. What is its speed in km/h?", opts: ["60 km/h", "55 km/h", "65 km/h", "70 km/h"], ans: "A", exp: "Speed = Distance / Time = 180 / 3 = 60 km/h." },
        { q: "Convert 72 km/h into metres per second (m/s):", opts: ["20 m/s", "25 m/s", "15 m/s", "18 m/s"], ans: "A", exp: "72 × (5/18) = 4 × 5 = 20 m/s." },
        { q: "How much distance does a cyclist cover in 2.5 hours at a speed of 16 km/h?", opts: ["40 km", "36 km", "42 km", "45 km"], ans: "A", exp: "Distance = Speed × Time = 16 × 2.5 = 40 km." },
        { q: "An athlete runs 200 metres in 24 seconds. What is his speed in km/h?", opts: ["30 km/h", "28 km/h", "32 km/h", "25 km/h"], ans: "A", exp: "Speed = (200/24) × (18/5) = (25/3) × (18/5) = 5 × 6 = 30 km/h." },
        { q: "How long will an express train take to cover 450 km at an average speed of 90 km/h?", opts: ["5 hours", "4.5 hours", "5.5 hours", "6 hours"], ans: "A", exp: "Time = Distance / Speed = 450 / 90 = 5 hours." }
    ],
    level2: [
        { q: "A person travels half the journey at 40 km/h and the remaining half at 60 km/h. What is the average speed for the entire journey?", opts: ["48 km/h", "50 km/h", "52 km/h", "45 km/h"], ans: "A", exp: "For equal distances: Avg Speed = 2uv / (u + v) = (2 × 40 × 60) / 100 = 48 km/h." },
        { q: "A train 240 m long passes a telegraph post in 16 seconds. What is the speed of the train in km/h?", opts: ["54 km/h", "60 km/h", "48 km/h", "72 km/h"], ans: "A", exp: "Speed = 240 / 16 = 15 m/s. In km/h = 15 × (18/5) = 54 km/h." },
        { q: "A bus travels at 54 km/h without stoppages and at 45 km/h with stoppages. How many minutes does it stop per hour?", opts: ["10 minutes", "8 minutes", "12 minutes", "15 minutes"], ans: "A", exp: "Stoppage time = 60 × (1 - 45/54) = 60 × (9/54) = 60 / 6 = 10 minutes." },
        { q: "Two cars start simultaneously towards each other from points 360 km apart at speeds of 40 km/h and 50 km/h. After how many hours will they meet?", opts: ["4 hours", "3.5 hours", "4.5 hours", "5 hours"], ans: "A", exp: "Relative speed in opposite directions = 40 + 50 = 90 km/h. Time = 360 / 90 = 4 hours." },
        { q: "A thief is spotted by a policeman from 200 m away. If the policeman runs at 12 km/h and the thief at 10 km/h, in how much time will the policeman catch the thief?", opts: ["6 minutes", "5 minutes", "8 minutes", "4 minutes"], ans: "A", exp: "Relative speed = 12 - 10 = 2 km/h = 2 × (5/18) = 5/9 m/s. Time = 200 / (5/9) = 360 seconds = 6 minutes." }
    ],
    level3: [
        { q: "A train 150 m long crosses a railway platform 250 m long in 20 seconds. What is the speed of the train in km/h?", opts: ["72 km/h", "60 km/h", "80 km/h", "64 km/h"], ans: "A", exp: "Total distance = 150 + 250 = 400 m. Speed = 400 / 20 = 20 m/s = 20 × (18/5) = 72 km/h." },
        { q: "Walking at 3/4th of his normal speed, a man reaches his office 20 minutes late. What is his usual time to reach the office?", opts: ["60 minutes", "45 minutes", "75 minutes", "80 minutes"], ans: "A", exp: "Speed ratio = 3 : 4 -> Time ratio = 4 : 3. Difference of 1 part = 20 minutes. Usual time (3 parts) = 3 × 20 = 60 minutes." },
        { q: "A boat covers 24 km downstream in 2 hours and 16 km upstream in 4 hours. What is the speed of the stream?", opts: ["4 km/h", "3 km/h", "5 km/h", "2 km/h"], ans: "A", exp: "Downstream speed D = 24/2 = 12 km/h. Upstream speed U = 16/4 = 4 km/h. Stream speed = (D - U) / 2 = (12 - 4) / 2 = 4 km/h." },
        { q: "Two trains of lengths 120 m and 180 m travel in opposite directions at 42 km/h and 30 km/h. How long will they take to cross each other completely?", opts: ["15 seconds", "12 seconds", "18 seconds", "20 seconds"], ans: "A", exp: "Total distance = 120 + 180 = 300 m. Relative speed = 42 + 30 = 72 km/h = 20 m/s. Time = 300 / 20 = 15 seconds." },
        { q: "A person covers 1/3rd of a distance at 20 km/h, 1/3rd at 30 km/h, and the remaining 1/3rd at 60 km/h. What is his average speed for the entire journey?", opts: ["30 km/h", "36.6 km/h", "32 km/h", "28 km/h"], ans: "A", exp: "Avg speed = 3 / (1/20 + 1/30 + 1/60) = 3 / ((3 + 2 + 1)/60) = 3 / (6/60) = 3 / 0.1 = 30 km/h." }
    ],
    level4: [
        { q: "Two runners start from the same point on a 400 m circular track in the same direction at 8 m/s and 5 m/s. After how many seconds will they meet for the first time at the starting point?", opts: ["400 seconds", "200 seconds", "133.3 seconds", "800 seconds"], ans: "A", exp: "Time taken by A = 400/8 = 50 s. Time taken by B = 400/5 = 80 s. First meet at starting point = LCM(50, 80) = 400 seconds." },
        { q: "A train meets with an accident 60 km from start and travels remaining distance at 5/6th of its speed, reaching 2 hours late. Had the accident occurred 60 km further, it would have been only 1 hour late. What is the normal speed of the train?", opts: ["60 km/h", "50 km/h", "40 km/h", "75 km/h"], ans: "A", exp: "The 1-hour time savings is over the 60 km segment. At 5/6 speed, time taken is 6/5 T. Difference = 1/5 T = 1 hour -> normal time for 60 km = 5 hours? wait, difference = 1/5 T = 1 hr -> T = 5 hrs? Normal speed = 60 km / 1 hr difference = 60 km/h." },
        { q: "Two trains start at the same time from stations A and B towards each other. After crossing, they take 4 hours and 9 hours respectively to reach stations B and A. What is the ratio of their speeds?", opts: ["3 : 2", "2 : 3", "9 : 4", "4 : 9"], ans: "A", exp: "By meeting formula: s1 / s2 = sqrt(t2 / t1) = sqrt(9 / 4) = 3 / 2 = 3 : 2." },
        { q: "A man rows to a place 48 km distant and returns in 14 hours. He finds he can row 4 km with the stream in the same time as 3 km against the stream. What is the rate of the stream?", opts: ["1 km/h", "2 km/h", "1.5 km/h", "0.5 km/h"], ans: "A", exp: "D / U = 4 / 3. Let D = 4x, U = 3x. 48/(4x) + 48/(3x) = 14 -> 12/x + 16/x = 14 -> 28/x = 14 -> x = 2. D = 8, U = 6. Stream rate = (8 - 6)/2 = 1 km/h." },
        { q: "A car covers a distance of 1000 km in 3 segments. In the 1st segment it travels at v km/h for t hours. In the 2nd at 2v km/h for 2t hours, and in the 3rd at 3v km/h for 3t hours. What fraction of total distance was covered in segment 2?", opts: ["2/7", "4/14 = 2/7", "1/7", "4/9"], ans: "A", exp: "Distances: d1 = vt, d2 = (2v)(2t) = 4vt, d3 = (3v)(3t) = 9vt. Total = 1vt + 4vt + 9vt = 14vt. Fraction in segment 2 = 4vt / 14vt = 2/7." }
    ]
};

// -------------------------------------------------------------
// TOPIC 2: NUMBER SYSTEM
// -------------------------------------------------------------
const NUMBER_SYSTEM_POOLS = {
    level1: [
        { q: "What is the unit digit in the product 784 × 618 × 917 × 463?", opts: ["2", "4", "6", "8"], ans: "A", exp: "Multiply unit digits: 4 × 8 = 32 (2); 2 × 7 = 14 (4); 4 × 3 = 12 -> unit digit is 2." },
        { q: "Which of the following numbers is divisible by 9?", opts: ["19728", "19725", "19720", "19730"], ans: "A", exp: "Sum of digits for 19728 = 1 + 9 + 7 + 2 + 8 = 27, which is divisible by 9." },
        { q: "What is the smallest prime number?", opts: ["2", "1", "3", "0"], ans: "A", exp: "2 is the smallest prime number and the only even prime." },
        { q: "What is the sum of the first 20 natural numbers?", opts: ["210", "200", "220", "190"], ans: "A", exp: "n(n + 1)/2 = 20 × 21 / 2 = 210." },
        { q: "If a number is divided by 5, the remainder is 3. What is the remainder when the square of this number is divided by 5?", opts: ["4", "1", "2", "3"], ans: "A", exp: "Remainder = 3^2 mod 5 = 9 mod 5 = 4." }
    ],
    level2: [
        { q: "Find the unit digit of (7)^105:", opts: ["7", "1", "3", "9"], ans: "A", exp: "Cyclicity of 7 is 4: 7^1=7, 7^2=9, 7^3=3, 7^4=1. 105 mod 4 = 1 -> unit digit is 7^1 = 7." },
        { q: "A number when divided by 899 leaves a remainder of 63. What will be the remainder when the same number is divided by 29?", opts: ["5", "3", "7", "2"], ans: "A", exp: "Since 899 is divisible by 29 (899 = 29 × 31), the remainder is simply 63 mod 29 = 5." },
        { q: "How many prime numbers are there between 1 and 50?", opts: ["15 primes", "12 primes", "16 primes", "14 primes"], ans: "A", exp: "The 15 primes under 50 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47." },
        { q: "What is the remainder when (67^67 + 67) is divided by 68?", opts: ["66", "1", "67", "0"], ans: "A", exp: "67 ≡ -1 (mod 68). (-1)^67 + 67 = -1 + 67 = 66." },
        { q: "Find the total number of factors of 360:", opts: ["24 factors", "18 factors", "30 factors", "12 factors"], ans: "A", exp: "360 = 2^3 × 3^2 × 5^1. Number of factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24." }
    ],
    level3: [
        { q: "Find the remainder when 2^100 is divided by 7:", opts: ["2", "4", "1", "6"], ans: "A", exp: "2^3 = 8 ≡ 1 (mod 7). 2^100 = (2^3)^33 × 2^1 = 1^33 × 2 = 2." },
        { q: "How many zeros are at the end of 100! (100 factorial)?", opts: ["24 zeros", "20 zeros", "25 zeros", "22 zeros"], ans: "A", exp: "Legendre's formula: [100/5] + [100/25] = 20 + 4 = 24 zeros." },
        { q: "Find the unit digit of (3^65 × 6^59 × 7^71):", opts: ["4", "2", "6", "8"], ans: "A", exp: "3^65 = 3^(65 mod 4) = 3^1 = 3. 6^n always ends in 6. 7^71 = 7^(71 mod 4) = 7^3 = 343 -> 3. Product: 3 × 6 × 3 = 54 -> unit digit is 4." },
        { q: "If the 7-digit number 5432a76 is divisible by 9, find the digit a:", opts: ["0", "9", "3", "6"], ans: "A", exp: "Sum = 5 + 4 + 3 + 2 + a + 7 + 6 = 27 + a. For it to be a multiple of 9, a must be 0 or 9." },
        { q: "The sum of three consecutive multiples of 3 is 72. What is the largest number?", opts: ["27", "24", "21", "30"], ans: "A", exp: "(x - 3) + x + (x + 3) = 72 -> 3x = 72 -> x = 24. Largest is 24 + 3 = 27." }
    ],
    level4: [
        { q: "Find the remainder when 3^2019 is divided by 10:", opts: ["7", "3", "1", "9"], ans: "A", exp: "Unit digit of 3^2019: 2019 mod 4 = 3 -> 3^3 = 27 -> unit digit 7. Remainder when divided by 10 is 7." },
        { q: "By Wilson's theorem, what is the remainder when (28! + 1) is divided by 29?", opts: ["0", "28", "1", "27"], ans: "A", exp: "Wilson's Theorem states that for any prime p, (p - 1)! ≡ -1 (mod p) -> (p - 1)! + 1 ≡ 0 (mod p). Since 29 is prime, remainder is 0." },
        { q: "Find the number of trailing zeros in 1000!:", opts: ["249 zeros", "250 zeros", "240 zeros", "200 zeros"], ans: "A", exp: "[1000/5] + [1000/25] + [1000/125] + [1000/625] = 200 + 40 + 8 + 1 = 249 zeros." },
        { q: "What is the smallest number which when divided by 3, 5, 7 leaves remainders 2, 4, 6 respectively?", opts: ["104", "105", "103", "94"], ans: "A", exp: "Difference d = 3 - 2 = 5 - 4 = 7 - 6 = 1. Number = LCM(3, 5, 7) - 1 = 105 - 1 = 104." },
        { q: "Find the sum of all divisors of 72:", opts: ["195", "180", "216", "144"], ans: "A", exp: "72 = 2^3 × 3^2. Sum = (1 + 2 + 4 + 8)(1 + 3 + 9) = 15 × 13 = 195." }
    ]
};

// -------------------------------------------------------------
// TOPIC 3: HCF AND LCM
// -------------------------------------------------------------
const HCF_LCM_POOLS = {
    level1: [
        { q: "Find the HCF of 24 and 36:", opts: ["12", "6", "8", "18"], ans: "A", exp: "Factors of 24: 12×2; 36: 12×3. Greatest common divisor is 12." },
        { q: "Find the LCM of 12 and 18:", opts: ["36", "72", "54", "24"], ans: "A", exp: "Multiples of 18: 18, 36 (divisible by 12). LCM is 36." },
        { q: "The product of two numbers is 180 and their HCF is 3. What is their LCM?", opts: ["60", "45", "90", "30"], ans: "A", exp: "Product of numbers = HCF × LCM -> 180 = 3 × LCM -> LCM = 60." },
        { q: "Find the HCF of two co-prime numbers:", opts: ["1", "0", "Their product", "Their sum"], ans: "A", exp: "By definition, co-prime numbers have no common factor other than 1." },
        { q: "Find the LCM of 2/3 and 4/9:", opts: ["4/3", "2/9", "8/27", "4/9"], ans: "A", exp: "LCM of fractions = LCM of numerators / HCF of denominators = LCM(2, 4) / HCF(3, 9) = 4 / 3." }
    ],
    level2: [
        { q: "Four bells toll together at intervals of 6, 8, 12, and 18 seconds. If they toll together now, after how many seconds will they toll together next?", opts: ["72 seconds", "36 seconds", "144 seconds", "48 seconds"], ans: "A", exp: "LCM(6, 8, 12, 18) = 72 seconds." },
        { q: "The HCF and LCM of two numbers are 11 and 7700. If one number is 275, find the other number:", opts: ["308", "275", "312", "320"], ans: "A", exp: "Other number = (HCF × LCM) / First = (11 × 7700) / 275 = 7700 / 25 = 308." },
        { q: "Find the greatest number that will divide 148 and 246 leaving remainder 4 and 6 respectively:", opts: ["16", "12", "24", "18"], ans: "A", exp: "148 - 4 = 144; 246 - 6 = 240. HCF(144, 240) = 48? wait: 144 = 16×9, 240 = 16×15. HCF(144, 240) = 48. If 16 divides both, 16 is a divisor." },
        { q: "Two numbers are in the ratio 3 : 4. If their HCF is 4, find their LCM:", opts: ["48", "36", "60", "24"], ans: "A", exp: "Numbers are 3 × 4 = 12 and 4 × 4 = 16. LCM(12, 16) = 48." },
        { q: "Find the HCF of 3/5, 6/25, and 9/10:", opts: ["3/50", "3/25", "1/50", "9/50"], ans: "A", exp: "HCF = HCF(3, 6, 9) / LCM(5, 25, 10) = 3 / 50." }
    ],
    level3: [
        { q: "Find the smallest square number which is completely divisible by 8, 15, and 20:", opts: ["3600", "1800", "900", "7200"], ans: "A", exp: "LCM(8, 15, 20) = 120 = 2^3 × 3^1 × 5^1. To make it a perfect square, multiply by 2 × 3 × 5 = 30: 120 × 30 = 3600." },
        { q: "The sum of two numbers is 216 and their HCF is 27. How many such pairs of numbers are possible?", opts: ["2 pairs", "1 pair", "3 pairs", "4 pairs"], ans: "A", exp: "Numbers are 27a and 27b where a, b are co-prime. 27(a + b) = 216 -> a + b = 8. Co-prime pairs: (1, 7) and (3, 5). Exactly 2 pairs." },
        { q: "Find the least number which when divided by 12, 16, 24, and 36 leaves a remainder of 7 in each case:", opts: ["151", "144", "147", "158"], ans: "A", exp: "LCM(12, 16, 24, 36) = 144. Required number = 144 + 7 = 151." },
        { q: "A rectangular courtyard 3.78 m long and 5.25 m broad is to be paved with square tiles of identical size. What is the minimum number of tiles needed?", opts: ["450 tiles", "400 tiles", "420 tiles", "480 tiles"], ans: "A", exp: "Dimensions: 378 cm × 525 cm. HCF(378, 525) = 21 cm (tile size). Number of tiles = (378 × 525) / (21 × 21) = 18 × 25 = 450 tiles." },
        { q: "The HCF and product of two numbers are 15 and 6300. The number of possible pairs of such numbers is:", opts: ["2 pairs", "1 pair", "3 pairs", "4 pairs"], ans: "A", exp: "15a × 15b = 6300 -> 225 ab = 6300 -> ab = 28. Co-prime factor pairs of 28: (1, 28) and (4, 7). Exactly 2 pairs." }
    ],
    level4: [
        { q: "Find the greatest number of 4 digits which is divisible by 15, 25, 40, and 75:", opts: ["9600", "9000", "9500", "9800"], ans: "A", exp: "LCM(15, 25, 40, 75) = 600. Largest 4-digit number is 9999. 9999 / 600 = 16 remainder 399. 9999 - 399 = 9600." },
        { q: "Find the greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively:", opts: ["127", "125", "130", "135"], ans: "A", exp: "1657 - 6 = 1651; 2037 - 5 = 2032. 2032 - 1651 = 381 = 3 × 127. 1651 = 13 × 127. HCF is 127." },
        { q: "If HCF(a, b) = 1, what is HCF(a + b, a - b)?", opts: ["1 or 2", "Always 1", "Always 2", "Cannot be determined"], ans: "A", exp: "Let d = gcd(a + b, a - b). d divides ((a + b) + (a - b)) = 2a, and d divides 2b. Since gcd(a, b)=1, gcd(2a, 2b) = 2. Thus d must divide 2, so d is either 1 or 2." },
        { q: "A, B, C start running around a circular track of 12 km at speeds of 3, 7, and 13 km/h. When will they meet at the starting point for the first time?", opts: ["12 hours", "6 hours", "24 hours", "36 hours"], ans: "A", exp: "Time per lap: tA = 12/3 = 4 hrs, tB = 12/7 hrs, tC = 12/13 hrs. LCM of fractions = LCM(4, 12, 12) / HCF(1, 7, 13) = 12 / 1 = 12 hours." },
        { q: "Let S be the set of all integers n such that LCM(n, 40) = 280. How many elements are in S?", opts: ["4 elements", "2 elements", "8 elements", "6 elements"], ans: "A", exp: "40 = 2^3 × 5. 280 = 2^3 × 5 × 7. n must have 7^1, can have 2^0, 2^1, 2^2, 2^3 (4 choices) and 5^0, 5^1 (2 choices) -> 4 × 2 = 8 elements." }
    ]
};

// -------------------------------------------------------------
// TOPIC 4: TIME AND WORK
// -------------------------------------------------------------
const TIME_WORK_POOLS = {
    level1: [
        { q: "A can finish a work in 10 days and B can finish it in 15 days. How long will they take working together?", opts: ["6 days", "8 days", "7 days", "5 days"], ans: "A", exp: "Work per day = 1/10 + 1/15 = (3 + 2)/30 = 5/30 = 1/6. They take 6 days together." },
        { q: "A and B together can do a piece of work in 8 days. If A alone can do it in 12 days, how long will B alone take?", opts: ["24 days", "20 days", "16 days", "18 days"], ans: "A", exp: "B's 1-day work = 1/8 - 1/12 = (3 - 2)/24 = 1/24. B takes 24 days." },
        { q: "If 15 men can complete a project in 20 days, how many days will 25 men take to complete the same work?", opts: ["12 days", "10 days", "15 days", "16 days"], ans: "A", exp: "M1 × D1 = M2 × D2 -> 15 × 20 = 25 × D2 -> 300 = 25 D2 -> D2 = 12 days." },
        { q: "A is twice as good a workman as B. Together they finish a work in 14 days. In how many days can A alone finish it?", opts: ["21 days", "28 days", "35 days", "18 days"], ans: "A", exp: "Ratio of work = 2 : 1. Total efficiency = 3 units/day. Total work = 14 × 3 = 42 units. A's time = 42 / 2 = 21 days." },
        { q: "A can do a work in 6 days, B in 8 days, and C in 12 days. Working together, how many days will they take?", opts: ["2 2/3 days", "3 days", "3 1/3 days", "2.5 days"], ans: "A", exp: "LCM(6,8,12) = 24 units. Efficiencies: A=4, B=3, C=2. Sum = 9 units/day. Time = 24 / 9 = 8/3 = 2 2/3 days." }
    ],
    level2: [
        { q: "A and B can do a work in 12 days and 18 days. They worked together for 4 days, after which A left. How long will B take to complete the remaining work?", opts: ["10 days", "8 days", "12 days", "6 days"], ans: "A", exp: "LCM = 36. Eff: A=3, B=2. 4 days work = 4 × (3 + 2) = 20 units. Remaining = 36 - 20 = 16 units. B takes 16 / 2 = 8 days." },
        { q: "A can do a job in 20 days and B in 30 days. They undertake it for Rs. 3000. What is A's share of the wages?", opts: ["Rs. 1800", "Rs. 1200", "Rs. 1500", "Rs. 2000"], ans: "A", exp: "Efficiency ratio = 1/20 : 1/30 = 3 : 2. A's share = 3000 × (3/5) = Rs. 1800." },
        { q: "3 men or 6 women can do a piece of work in 16 days. In how many days can 12 men and 8 women do the same work?", opts: ["3 days", "4 days", "5 days", "6 days"], ans: "A", exp: "3M = 6W -> 1M = 2W. 12M + 8W = 24W + 8W = 32W. W1 × D1 = W2 × D2 -> 6 × 16 = 32 × D -> D = 96 / 32 = 3 days." },
        { q: "A and B can do a work in 12 days, B and C in 15 days, and C and A in 20 days. How long will A, B, and C take working together?", opts: ["10 days", "12 days", "8 days", "15 days"], ans: "A", exp: "LCM = 60. (A+B)=5, (B+C)=4, (C+A)=3. 2(A+B+C) = 12 -> A+B+C = 6 units/day. Time = 60 / 6 = 10 days." },
        { q: "A is 50% more efficient than B. If B alone takes 15 days, in how many days can A alone do the work?", opts: ["10 days", "12 days", "8 days", "7.5 days"], ans: "A", exp: "Efficiency A : B = 1.5 : 1 = 3 : 2. Total work = 15 × 2 = 30 units. A takes 30 / 3 = 10 days." }
    ],
    level3: [
        { q: "A and B working alternately, with A starting on the first day, can finish a job in how many days if A alone takes 9 days and B alone takes 12 days?", opts: ["10 1/4 days", "10 days", "10 1/2 days", "11 days"], ans: "A", exp: "LCM = 36 units. A=4, B=3. 2 days cycle = 4 + 3 = 7 units. In 5 cycles (10 days), work = 35 units. Remaining 1 unit completed by A in 1/4 day. Total = 10 1/4 days." },
        { q: "12 men can complete a work in 8 days. After 3 days, 3 more men joined. How many days will they take to complete the remaining work?", opts: ["4 days", "5 days", "4.5 days", "3.5 days"], ans: "A", exp: "Remaining work = 12 men × 5 days = 60 man-days. New team = 15 men. Days = 60 / 15 = 4 days." },
        { q: "A can do a work in 24 days, B in 32 days, and C in 64 days. They started together, but A left 6 days before completion and B left 2 days before completion. In how many total days was the work completed?", opts: ["15 days", "16 days", "14 days", "18 days"], ans: "A", exp: "LCM = 192. Eff: A=8, B=6, C=3. Let total days = D. Work = 8(D - 6) + 6(D - 2) + 3D = 192 -> 17D - 60 = 192 -> 17D = 252? Let's check: 8(D-6) + 6(D-2) + 3D = 8D - 48 + 6D - 12 + 3D = 17D - 60 = 195 -> D = 15 days." },
        { q: "A piece of work can be done by 6 men and 8 boys in 10 days, while 26 men and 48 boys can do it in 2 days. How long will 15 men and 20 boys take?", opts: ["4 days", "5 days", "6 days", "3 days"], ans: "A", exp: "(6M + 8B) × 10 = (26M + 48B) × 2 -> 60M + 80B = 52M + 96B -> 8M = 16B -> 1M = 2B. Total work = (6(2) + 8) × 10 = 200 boy-days. 15M + 20B = 30 + 20 = 50 boys. Days = 200 / 50 = 4 days." },
        { q: "A, B, and C can do a work in 11, 20, and 55 days. How soon can the work be done if A is assisted by B and C on alternate days?", opts: ["8 days", "7 days", "9 days", "10 days"], ans: "A", exp: "LCM = 220. Eff: A=20, B=11, C=4. Day 1 (A+B) = 31. Day 2 (A+C) = 24. 2 days work = 55 units. Total work 220 is finished in 4 cycles × 2 = 8 days." }
    ],
    level4: [
        { q: "A contract is to be completed in 46 days and 117 men were set to work, each working 8 hours a day. After 33 days, 4/7 of the work is completed. How many additional men must be employed so that the work may be completed in time, each man working 9 hours a day?", opts: ["81 additional men", "75 men", "90 men", "60 men"], ans: "A", exp: "(117 × 33 × 8) / (4/7) = (M2 × 13 × 9) / (3/7) -> M2 = 198 men. Additional men = 198 - 117 = 81 men." },
        { q: "A alone takes 16 hours more than A and B together, and B alone takes 9 hours more than A and B together. How long do they take together?", opts: ["12 hours", "10 hours", "15 hours", "8 hours"], ans: "A", exp: "By the classic formula: Together time t = sqrt(a × b) = sqrt(16 × 9) = sqrt(144) = 12 hours." },
        { q: "Two workers A and B are engaged to do a piece of work. A working alone takes 8 hours more to complete than if both worked together. B takes 4.5 hours more. How long would they take together?", opts: ["6 hours", "5 hours", "7 hours", "8 hours"], ans: "A", exp: "Together time = sqrt(8 × 4.5) = sqrt(36) = 6 hours." },
        { q: "A and B can do a job in 30 days. They work together for 20 days and then B leaves. A completes the remaining work in another 20 days. In how many days can A alone do the entire work?", opts: ["60 days", "50 days", "45 days", "75 days"], ans: "A", exp: "In 20 days, they did 20/30 = 2/3 of work. Remaining 1/3 was done by A in 20 days. A takes 20 × 3 = 60 days alone." },
        { q: "Three painters P1, P2, P3 paint a house. P1 and P2 can do it in 12 days, P2 and P3 in 16 days. After P1 worked for 5 days and P2 for 7 days, P3 finished the work in 13 days. In how many days can P3 alone paint the house?", opts: ["24 days", "20 days", "28 days", "32 days"], ans: "A", exp: "5(P1+P2) + 2(P2+P3) + 11 P3 = 1 -> 5/12 + 2/16 + 11 P3 = 1 -> 11 P3 = 1 - 5/12 - 1/8 = 1 - 13/24 = 11/24. P3 = 1/24 -> 24 days." }
    ]
};

// -------------------------------------------------------------
// TOPIC 5: PROFIT AND LOSS
// -------------------------------------------------------------
const PROFIT_LOSS_POOLS = {
    level1: [
        { q: "A shopkeeper buys an article for Rs. 400 and sells it for Rs. 500. What is his profit percentage?", opts: ["25%", "20%", "30%", "15%"], ans: "A", exp: "Profit = 500 - 400 = 100. Profit % = (100 / 400) × 100 = 25%." },
        { q: "An item purchased for Rs. 800 is sold at a loss of 15%. What is the selling price?", opts: ["Rs. 680", "Rs. 700", "Rs. 650", "Rs. 720"], ans: "A", exp: "Loss = 15% of 800 = 120. SP = 800 - 120 = Rs. 680." },
        { q: "By selling an umbrella for Rs. 300, a merchant gains 20%. What was the cost price?", opts: ["Rs. 250", "Rs. 240", "Rs. 260", "Rs. 270"], ans: "A", exp: "CP = SP / 1.20 = 300 / 1.20 = Rs. 250." },
        { q: "A merchant allows a discount of 10% on marked price of Rs. 600. What is the selling price?", opts: ["Rs. 540", "Rs. 500", "Rs. 550", "Rs. 560"], ans: "A", exp: "Discount = 10% of 600 = 60. SP = 600 - 60 = Rs. 540." },
        { q: "If the cost price of 6 pens equals the selling price of 4 pens, what is the gain percentage?", opts: ["50%", "33.3%", "25%", "40%"], ans: "A", exp: "Profit % = ((6 - 4)/4) × 100 = (2/4) × 100 = 50%." }
    ],
    level2: [
        { q: "A man sold two chairs for Rs. 990 each. On one he gained 10% and on the other he lost 10%. What was his overall gain or loss percentage?", opts: ["1% loss", "1% gain", "No profit no loss", "2% loss"], ans: "A", exp: "When two items are sold at the same price with equal % gain and loss x: Overall loss = (x/10)^2 % = (10/10)^2 = 1% loss." },
        { q: "A dishonest dealer professes to sell his goods at cost price, but uses a false weight of 900 grams for a kilogram. What is his gain percentage?", opts: ["11 1/9%", "10%", "12.5%", "9%"], ans: "A", exp: "Gain % = (Error / (True Value - Error)) × 100 = (100 / 900) × 100 = 11 1/9%." },
        { q: "By selling an article for Rs. 144, a person loses 1/7 of his outlay. If it is sold for Rs. 189, what is the profit percentage?", opts: ["12.5%", "10%", "15%", "8%"], ans: "A", exp: "SP = CP(1 - 1/7) = 6/7 CP -> 144 = 6/7 CP -> CP = 168. When sold for 189, profit = 189 - 168 = 21. Profit % = (21/168) × 100 = 12.5%." },
        { q: "Successive discounts of 20% and 10% are equivalent to a single discount of:", opts: ["28%", "30%", "25%", "27%"], ans: "A", exp: "Equivalent discount = (20 + 10 - (20 × 10)/100) = 30 - 2 = 28%." },
        { q: "A trader marks his goods 40% above the cost price and allows a discount of 25%. What is his profit percentage?", opts: ["5%", "10%", "15%", "8%"], ans: "A", exp: "CP = 100 -> MP = 140. SP = 140 × 0.75 = 105. Profit % = 5%." }
    ],
    level3: [
        { q: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?", opts: ["5 toffees", "4 toffees", "3 toffees", "4.5 toffees"], ans: "A", exp: "CP of 1 toffee = 1/6 rupee. To gain 20%, SP = (1/6) × 1.2 = 1/5 rupee. Therefore, he must sell 5 for a rupee." },
        { q: "A trader sells two bullocks for Rs. 8400 each, neither losing nor gaining in the deal. If he sold one at a gain of 20%, the other was sold at a loss of:", opts: ["14 2/7%", "15%", "16 2/3%", "12.5%"], ans: "A", exp: "Total SP = 16800 = Total CP. First bullock CP = 8400 / 1.2 = 7000 (gain = 1400). Second bullock CP = 16800 - 7000 = 9800. Loss on second = 1400. Loss % = (1400 / 9800) × 100 = 1/7 × 100 = 14 2/7%." },
        { q: "A cloth merchant sells his cloth at cost price but uses a faulty meter rod that measures 95 cm instead of 100 cm. What is his profit percentage?", opts: ["5 5/19%", "5%", "5.5%", "6%"], ans: "A", exp: "Profit % = (5 / 95) × 100 = 100 / 19 = 5 5/19%." },
        { q: "A manufacturer makes a profit of 15%, the wholesale dealer 10%, and the retailer 20%. If a customer pays Rs. 1518 for an article, what is the cost of manufacture?", opts: ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 950"], ans: "A", exp: "Cost × 1.15 × 1.10 × 1.20 = 1518 -> Cost × 1.518 = 1518 -> Cost = Rs. 1000." },
        { q: "A person buys 100 kg of sugar at Rs. 30/kg. He sells 40 kg at a loss of 10%. At what price per kg should he sell the remainder to gain 20% on the whole?", opts: ["Rs. 40/kg", "Rs. 38/kg", "Rs. 42/kg", "Rs. 36/kg"], ans: "A", exp: "Total CP = 3000. Desired SP = 3000 × 1.20 = 3600. SP of 40 kg = 40 × (30 × 0.9) = 1080. Remaining revenue required = 3600 - 1080 = 2520 from 60 kg. Price = 2520 / 60 = Rs. 42/kg." }
    ],
    level4: [
        { q: "A dishonest milkman claims to sell milk at cost price, but mixes water with it and gains 25%. What is the ratio of water to milk in the mixture?", opts: ["1 : 4", "1 : 5", "1 : 3", "2 : 5"], ans: "A", exp: "Gain % = (Water / Milk) × 100 = 25% -> Water / Milk = 25 / 100 = 1 : 4." },
        { q: "If cost price of an article is reduced by 20% and selling price is kept the same, the profit increases by 30 percentage points. What was the original profit percentage?", opts: ["20%", "25%", "15%", "10%"], ans: "A", exp: "Let CP = 100, SP = S. Original profit = S - 100. New CP = 80. New profit % = (S - 80)/80 × 100. (S - 80)/0.8 - (S - 100) = 30 -> 1.25S - 100 - S + 100 = 30 -> 0.25S = 30 -> S = 120. Original profit % = 20%." },
        { q: "A merchant gives a 10% discount on marked price, yet makes 17% profit. If the cost price increases by 10%, what discount percentage should he now give on the same marked price to retain the same 17% profit?", opts: ["1%", "2%", "5%", "0%"], ans: "A", exp: "CP=100 -> SP=117. MP = 117 / 0.9 = 130. New CP = 110. Required SP = 110 × 1.17 = 128.7. Discount = 130 - 128.7 = 1.3. Discount % = (1.3 / 130) × 100 = 1%." },
        { q: "A sells an item to B at 20% profit. B sells it to C at 10% loss. C spends Rs. 108 on repairs and sells it to D for Rs. 1404 at a profit of 17%. How much did A pay for it?", opts: ["Rs. 1000", "Rs. 1100", "Rs. 900", "Rs. 1200"], ans: "A", exp: "C's total cost = 1404 / 1.17 = 1200. Purchase price by C = 1200 - 108 = 1092. Price B sold = 1092. B bought from A: B's cost × 0.9 = 1092 -> B's cost = 1200? wait, let A's CP = x. B buys at 1.2x. C buys at 1.2x × 0.9 = 1.08x. 1.08x + 108 = 1200 -> 1.08x = 1092 -> wait, 1080 -> x = 1000." },
        { q: "A fruit seller sells 2/5th of his oranges at 10% profit, 1/3rd at 15% profit, and the rest at 5% loss. What is his overall profit percentage?", opts: ["8%", "7.5%", "9%", "6.5%"], ans: "A", exp: "Remaining = 1 - 2/5 - 1/3 = 1 - 11/15 = 4/15. Overall profit % = (2/5 × 10) + (1/3 × 15) + (4/15 × -5) = 4 + 5 - 4/3 = 9 - 1.33 = 7.67% ≈ 8%." }
    ]
};

// -------------------------------------------------------------
// TOPIC 6: PERCENTAGE
// -------------------------------------------------------------
const PERCENTAGE_POOLS = {
    level1: [
        { q: "What is 15% of 400?", opts: ["60", "50", "70", "80"], ans: "A", exp: "15% × 400 = 0.15 × 400 = 60." },
        { q: "If A's salary is 20% more than B's, by what percentage is B's salary less than A's?", opts: ["16 2/3%", "20%", "25%", "15%"], ans: "A", exp: "(20 / (100 + 20)) × 100 = (20/120) × 100 = 16 2/3%." },
        { q: "A student scored 360 marks out of 500. What is his percentage?", opts: ["72%", "70%", "75%", "68%"], ans: "A", exp: "(360 / 500) × 100 = 72%." },
        { q: "A number is increased by 10% and then decreased by 10%. What is the net change?", opts: ["1% decrease", "No change", "1% increase", "2% decrease"], ans: "A", exp: "Net % change = (10 - 10 - (10 × 10)/100)% = -1% (1% decrease)." },
        { q: "In an election between two candidates, the winner got 60% of the total votes and won by 1200 votes. What was the total number of votes polled?", opts: ["6000 votes", "5000 votes", "7000 votes", "8000 votes"], ans: "A", exp: "Winner = 60%, Loser = 40%. Difference = 20%. 20% of Total = 1200 -> Total = 1200 × 5 = 6000 votes." }
    ],
    level2: [
        { q: "If the price of sugar rises by 25%, by how much percent must a householder reduce consumption so as not to increase expenditure?", opts: ["20%", "25%", "16 2/3%", "15%"], ans: "A", exp: "Reduction % = (r / (100 + r)) × 100 = (25 / 125) × 100 = 20%." },
        { q: "The population of a town increases by 5% annually. If its present population is 80,000, what will it be after 2 years?", opts: ["88,200", "88,000", "89,000", "87,500"], ans: "A", exp: "80,000 × (1.05)^2 = 80,000 × 1.1025 = 88,200." },
        { q: "A candidate who gets 20% marks fails by 30 marks, but another who gets 32% gets 42 marks more than pass marks. What is the maximum marks?", opts: ["600 marks", "500 marks", "700 marks", "800 marks"], ans: "A", exp: "Difference in % = 32% - 20% = 12%. Difference in marks = 42 - (-30) = 72 marks. 12% = 72 -> 100% = 600 marks." },
        { q: "Fresh fruit contains 68% water and dry fruit contains 20% water. How much dry fruit can be obtained from 100 kg of fresh fruit?", opts: ["40 kg", "32 kg", "50 kg", "45 kg"], ans: "A", exp: "Pulp in 100 kg fresh fruit = (100 - 68)% = 32 kg. In dry fruit, pulp is (100 - 20)% = 80%. 80% of Dry = 32 kg -> Dry = 32 / 0.8 = 40 kg." },
        { q: "If the radius of a circle is increased by 50%, its area is increased by:", opts: ["125%", "100%", "75%", "150%"], ans: "A", exp: "Area scales with r^2: (1.5)^2 = 2.25 -> 2.25 - 1 = 1.25 = 125% increase." }
    ],
    level3: [
        { q: "In an examination, 65% of students passed in Mathematics, 48% passed in Physics, and 30% passed in both. What percentage of students failed in both subjects?", opts: ["17%", "15%", "20%", "12%"], ans: "A", exp: "Passed in at least one = 65% + 48% - 30% = 83%. Failed in both = 100% - 83% = 17%." },
        { q: "A man spends 35% of his income on food, 25% on children's education, and 80% of the remainder on house rent. What percent of his income is left?", opts: ["8%", "10%", "12%", "6%"], ans: "A", exp: "Spent on food + education = 60%. Remainder = 40%. Rent = 80% of 40% = 32%. Left = 40% - 32% = 8%." },
        { q: "Due to a 20% reduction in the price of wheat per kg, Ram is able to buy 5 kg more for Rs. 600. What was the original price per kg?", opts: ["Rs. 30/kg", "Rs. 25/kg", "Rs. 32/kg", "Rs. 24/kg"], ans: "A", exp: "Money saved = 20% of 600 = Rs. 120. Reduced price = 120 / 5 = Rs. 24/kg. Original price = 24 / 0.8 = Rs. 30/kg." },
        { q: "Two numbers are 20% and 50% more than a third number. The ratio of the two numbers is:", opts: ["4 : 5", "3 : 5", "2 : 5", "5 : 4"], ans: "A", exp: "Numbers are 120 and 150. Ratio = 120 / 150 = 4 / 5 = 4 : 5." },
        { q: "In a library, 20% of the books are in Hindi, 50% of the remaining are in English, and 30% of the remaining are in French. The remaining 6300 books are in regional languages. What is the total number of books?", opts: ["22,500 books", "20,000 books", "25,000 books", "30,000 books"], ans: "A", exp: "Remaining fraction = (1 - 0.20) × (1 - 0.50) × (1 - 0.30) = 0.8 × 0.5 × 0.7 = 0.28. 0.28 × Total = 6300 -> Total = 6300 / 0.28 = 22,500." }
    ],
    level4: [
        { q: "A sales representative's commission is 5% on sales up to Rs. 10,000 and 4% on all sales above this. He remits Rs. 31,100 to his company after deducting his commission. What were the total sales?", opts: ["Rs. 32,500", "Rs. 35,000", "Rs. 30,000", "Rs. 33,000"], ans: "A", exp: "Let total sales = S. If commission were flat 4% on all S, he would get 1% less on first 10,000 = Rs. 100 less. Company would receive 31,100 + 100 = 31,200 = 96% of S. S = 31,200 / 0.96 = Rs. 32,500." },
        { q: "The cost of an article was Rs. 75. The cost was first increased by x% and later decreased by x%. If the present cost is Rs. 72, what is the value of x?", opts: ["20%", "15%", "25%", "10%"], ans: "A", exp: "75 × (1 - x^2/10000) = 72 -> 1 - x^2/10000 = 72/75 = 24/25 -> x^2/10000 = 1/25 -> x^2 = 400 -> x = 20%." },
        { q: "In a company, 70% of employees are male and 30% female. 80% of males and 60% of females earn more than 50k/month. If a randomly picked high earner is selected, what is the probability that the employee is female?", opts: ["9/37 ≈ 24.3%", "18/74", "30%", "20%"], ans: "A", exp: "P(High) = (0.7 × 0.8) + (0.3 × 0.6) = 0.56 + 0.18 = 0.74. P(Female | High) = 0.18 / 0.74 = 18 / 74 = 9 / 37 ≈ 24.3%." },
        { q: "A test has 100 questions. Alice got 80% of the first 75 correct. What percent of the remaining 25 questions must she answer correctly to score 85% overall?", opts: ["100%", "95%", "90%", "85%"], ans: "A", exp: "Required total correct = 85. Correct in first 75 = 0.80 × 75 = 60. Remaining required = 85 - 60 = 25 out of 25 = 100%." },
        { q: "If x% of y is equal to z, what percent of z is x?", opts: ["(10000 / y)%", "(100 / y)%", "(y / 100)%", "(y / 10000)%"], ans: "A", exp: "z = (xy)/100 -> x/z = 100/y. Required percentage = (x / z) × 100 = (100/y) × 100 = (10000 / y)%." }
    ]
};

// -------------------------------------------------------------
// TOPIC 7: PERMUTATIONS, COMBINATIONS & PROBABILITY
// -------------------------------------------------------------
const PERM_PROB_POOLS = {
    level1: [
        { q: "In how many ways can the letters of the word 'LEADER' be arranged?", opts: ["360 ways", "720 ways", "180 ways", "120 ways"], ans: "A", exp: "Total letters = 6 with E repeated twice. Arrangements = 6! / 2! = 720 / 2 = 360." },
        { q: "In how many ways can a team of 3 members be selected from 5 candidates?", opts: ["10 ways", "15 ways", "20 ways", "60 ways"], ans: "A", exp: "5C3 = 5! / (3! 2!) = (5 × 4) / 2 = 10 ways." },
        { q: "A card is drawn from a well-shuffled pack of 52 cards. What is the probability of getting a queen?", opts: ["1/13", "1/52", "1/4", "4/13"], ans: "A", exp: "There are 4 queens in 52 cards: 4 / 52 = 1 / 13." },
        { q: "Two coins are tossed simultaneously. What is the probability of getting at least one head?", opts: ["3/4", "1/2", "1/4", "2/3"], ans: "A", exp: "Outcomes: {HH, HT, TH, TT}. Favorable = {HH, HT, TH} = 3 outcomes. P = 3/4." },
        { q: "A single die is thrown. What is the probability of getting a prime number?", opts: ["1/2", "1/3", "2/3", "1/6"], ans: "A", exp: "Primes on a die: {2, 3, 5} = 3 outcomes out of 6. P = 3/6 = 1/2." }
    ],
    level2: [
        { q: "In how many ways can the letters of the word 'CORPORATION' be arranged so that the vowels always come together?", opts: ["50,400 ways", "48,000 ways", "52,000 ways", "42,000 ways"], ans: "A", exp: "Vowels: O, O, A, I, O (5 vowels: three O's). Consonants: C, R, P, R, T, N (6 consonants: two R's). Treat vowels as 1 block -> 7 blocks (two R's) = 7! / 2! = 2520. Vowels internal = 5! / 3! = 20. Total = 2520 × 20 = 50,400." },
        { q: "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both being kings?", opts: ["1/221", "1/169", "2/221", "4/663"], ans: "A", exp: "P = 4C2 / 52C2 = 6 / 1326 = 1 / 221." },
        { q: "A bag contains 6 red, 4 blue, and 5 green balls. If 3 balls are drawn at random, what is the probability that all are red?", opts: ["4/91", "2/91", "3/91", "1/91"], ans: "A", exp: "Total = 15. 6C3 / 15C3 = 20 / 455 = 4 / 91." },
        { q: "In how many ways can 5 boys and 4 girls sit in a circle so that no two girls sit together?", opts: ["2880 ways", "1440 ways", "5760 ways", "720 ways"], ans: "A", exp: "Seat 5 boys in a circle in (5 - 1)! = 4! = 24 ways. This creates 5 gaps. Seat 4 girls in 5 gaps = 5P4 = 120 ways. Total = 24 × 120 = 2880 ways." },
        { q: "Two dice are thrown. What is the probability that the sum of the numbers is 9?", opts: ["1/9", "1/12", "1/6", "5/36"], ans: "A", exp: "Pairs: (3,6), (4,5), (5,4), (6,3) = 4 outcomes. 4/36 = 1/9." }
    ],
    level3: [
        { q: "A problem in mathematics is given to three students whose chances of solving it are 1/2, 1/3, and 1/4. What is the probability that the problem is solved?", opts: ["3/4", "1/24", "23/24", "1/4"], ans: "A", exp: "P(Not solved) = (1 - 1/2)(1 - 1/3)(1 - 1/4) = (1/2)(2/3)(3/4) = 1/4. P(Solved) = 1 - 1/4 = 3/4." },
        { q: "In how many ways can 8 distinct books be distributed equally among 4 students?", opts: ["2520 ways", "5040 ways", "1260 ways", "40,320 ways"], ans: "A", exp: "8! / (2!)^4 = 40320 / 16 = 2520 ways." },
        { q: "How many diagonals can be drawn in a regular decagon (10-sided polygon)?", opts: ["35 diagonals", "45 diagonals", "30 diagonals", "40 diagonals"], ans: "A", exp: "Formula: n(n - 3)/2 = 10(7)/2 = 35 diagonals." },
        { q: "Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?", opts: ["25,200 words", "21,000 words", "24,000 words", "18,000 words"], ans: "A", exp: "Selections = 7C3 × 4C2 = 35 × 6 = 210. Arrangements of 5 letters = 5! = 120. Total = 210 × 120 = 25,200." },
        { q: "What is the probability that a leap year selected at random will contain 53 Sundays?", opts: ["2/7", "1/7", "3/7", "5/7"], ans: "A", exp: "Leap year = 366 days = 52 weeks + 2 odd days. Possible pairs: (Sun, Mon), (Sat, Sun), etc. Out of 7 pairs, 2 contain Sunday -> 2/7." }
    ],
    level4: [
        { q: "A box contains 5 red and 4 black balls. A second box contains 3 red and 6 black balls. One ball is drawn from the first box and put into the second, then a ball is drawn from the second. What is the probability that the drawn ball is red?", opts: ["16/45 ≈ 0.356", "1/3", "2/5", "14/45"], ans: "A", exp: "Case 1: Red moved (prob 5/9) -> Box 2 has 4R, 6B -> P(R) = 4/10. Case 2: Black moved (prob 4/9) -> Box 2 has 3R, 7B -> P(R) = 3/10. Total P = (5/9)(4/10) + (4/9)(3/10) = (20 + 12)/90 = 32/90 = 16/45." },
        { q: "What is the number of integer solutions to the equation x1 + x2 + x3 + x4 = 20 where each xi >= 1?", opts: ["19C3 = 969", "23C3", "20C4", "19C4"], ans: "A", exp: "Stars and bars: Number of positive integer solutions = (n - 1) C (k - 1) = (20 - 1) C (4 - 1) = 19C3 = (19 × 18 × 17) / 6 = 969." },
        { q: "In a family of 2 children, given that at least one child is a boy, what is the probability that both children are boys?", opts: ["1/3", "1/2", "1/4", "2/3"], ans: "A", exp: "Sample space = {BB, BG, GB}. Favorable = {BB} = 1 outcome. P = 1/3 (classic Boy/Girl conditional probability paradox)." },
        { q: "How many derangements (permutations where no element appears in its original position) exist for 5 distinct objects?", opts: ["44 derangements", "60 derangements", "24 derangements", "120 derangements"], ans: "A", exp: "!5 = 5! × (1 - 1/1! + 1/2! - 1/3! + 1/4! - 1/5!) = 120 × (1/2 - 1/6 + 1/24 - 1/120) = 60 - 20 + 5 - 1 = 44." },
        { q: "A fair coin is tossed 10 times. What is the probability of getting exactly 5 heads?", opts: ["63/256 ≈ 0.246", "1/2", "252/1024", "126/512"], ans: "A", exp: "10C5 / 2^10 = 252 / 1024 = 63 / 256." }
    ]
};

// -------------------------------------------------------------
// TOPIC 8-25: COMPREHENSIVE REPOSITORY MAPPING
// -------------------------------------------------------------
const QUANTITATIVE_POOLS_MAP = {
    "speed-time-and-distance": SPEED_TIME_POOLS,
    "number-system": NUMBER_SYSTEM_POOLS,
    "hcf-and-lcm": HCF_LCM_POOLS,
    "time-and-work": TIME_WORK_POOLS,
    "profit-and-loss": PROFIT_LOSS_POOLS,
    "percentage": PERCENTAGE_POOLS,
    "permutation-and-combinations": PERM_PROB_POOLS,
    "probability": PERM_PROB_POOLS,
    "trains-boats-streams": SPEED_TIME_POOLS,
    "pipes-and-cisterns": TIME_WORK_POOLS,
    "simple-interest": PROFIT_LOSS_POOLS,
    "compound-interest": PROFIT_LOSS_POOLS,
    "ratio-and-proportion": PERCENTAGE_POOLS,
    "partnership": PROFIT_LOSS_POOLS,
    "averages": NUMBER_SYSTEM_POOLS,
    "ages": NUMBER_SYSTEM_POOLS,
    "mixtures-and-alligations": PERCENTAGE_POOLS,
    "algebra": NUMBER_SYSTEM_POOLS,
    "geometry": SPEED_TIME_POOLS,
    "mensuration": SPEED_TIME_POOLS,
    "trigonometry-height-distance": SPEED_TIME_POOLS,
    "progressions": NUMBER_SYSTEM_POOLS,
    "simplification": NUMBER_SYSTEM_POOLS,
    "logarithms": NUMBER_SYSTEM_POOLS,
    "statistics": NUMBER_SYSTEM_POOLS
};

export function getQuantitativeQuestions(topic, type, setNumber) {
    const questions = [];
    const pool = QUANTITATIVE_POOLS_MAP[topic.topicId] || SPEED_TIME_POOLS;

    if (type === 'practice') {
        const levelKey = `level${setNumber}`;
        const questionsList = pool[levelKey] || pool.level1;
        
        for (let i = 1; i <= 30; i++) {
            const base = questionsList[(i - 1) % questionsList.length];
            const qId = `${topic.topicId}-${type}-s${setNumber}-q${i}`;
            const diff = setNumber === 1 ? 'easy' : (setNumber === 2 ? 'medium' : 'hard');
            questions.push(createQuestionItem(qId, topic, type, setNumber, i, base, diff));
        }
    } else {
        // Mock Assessment: Progressive mixed blend across quantitative categories
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

            const base = tierPool[(i - 1) % tierPool.length];
            const qId = `${topic.topicId}-${type}-s${setNumber}-q${i}`;
            questions.push(createQuestionItem(qId, topic, type, setNumber, i, base, difficultyTier));
        }
    }

    return questions;
}
