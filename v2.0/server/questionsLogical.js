/**
 * Aptitude Arena - Logical Reasoning Question Bank & Progressive Generators
 * Covers all 14 Logical Reasoning Topics across:
 * - Level 1 (Set 1: Foundational / Easy)
 * - Level 2 (Set 2: Intermediate / Medium Placement)
 * - Level 3 (Set 3: Advanced / Hard Placement)
 * - Level 4 (Set 4: Master / Tricky / Expert)
 * - Mock 1 & Mock 2: Mixed multi-topic & multi-difficulty blends
 * Sources: IndiaBIX Logical Reasoning, CSE Placement Hub, Campus Assessment tests.
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

// -------------------------------------------------------------
// TOPIC 1: CLOCKS
// -------------------------------------------------------------
const CLOCKS_POOLS = {
    level1: [
        {
            q: "What is the angle between the hour hand and the minute hand of a clock at 3:00?",
            opts: ["90°", "80°", "100°", "120°"],
            ans: "A",
            exp: "Each hour represents 360° / 12 = 30°. At 3:00, separation is 3 hours = 3 × 30° = 90°."
        },
        {
            q: "What is the angle between the two hands of a clock at 4:00?",
            opts: ["120°", "110°", "130°", "90°"],
            ans: "A",
            exp: "At 4:00, separation = 4 × 30° = 120°."
        },
        {
            q: "How many times do the hands of a clock coincide in 12 hours?",
            opts: ["11 times", "12 times", "10 times", "22 times"],
            ans: "A",
            exp: "Hands coincide 11 times in 12 hours because the coincidence between 11:00 and 1:00 happens exactly at 12:00."
        },
        {
            q: "What is the speed of the minute hand in degrees per minute?",
            opts: ["6° per minute", "0.5° per minute", "5.5° per minute", "12° per minute"],
            ans: "A",
            exp: "Minute hand moves 360° in 60 minutes = 360/60 = 6° per minute."
        },
        {
            q: "What is the speed of the hour hand in degrees per minute?",
            opts: ["0.5° per minute", "1° per minute", "6° per minute", "0.25° per minute"],
            ans: "A",
            exp: "Hour hand covers 30° in 60 minutes = 30/60 = 0.5° per minute."
        }
    ],
    level2: [
        {
            q: "Find the acute angle between the hands of a clock at 3:30.",
            opts: ["75°", "70°", "80°", "85°"],
            ans: "A",
            exp: "Formula: |30H - 5.5M| = |30(3) - 5.5(30)| = |90 - 165| = |-75| = 75°."
        },
        {
            q: "At what time between 4 and 5 o'clock will the hands of a clock be together (coincide)?",
            opts: ["21 9/11 min past 4", "22 min past 4", "21 5/11 min past 4", "20 min past 4"],
            ans: "A",
            exp: "Formula for coincidence: M = (2/11) × (30H) = (2/11) × 120 = 240/11 = 21 9/11 minutes past 4."
        },
        {
            q: "Find the angle between the hands of a clock at 8:20.",
            opts: ["130°", "120°", "140°", "125°"],
            ans: "A",
            exp: "Angle = |30(8) - 5.5(20)| = |240 - 110| = 130°."
        },
        {
            q: "At what time between 7 and 8 o'clock are the hands at right angles (90°)?",
            opts: ["21 9/11 min past 7", "22 5/11 min past 7", "20 min past 7", "25 min past 7"],
            ans: "A",
            exp: "M = (2/11) × (30H - 90) = (2/11) × (210 - 90) = (2/11) × 120 = 240/11 = 21 9/11 minutes past 7."
        },
        {
            q: "How many times are the hands of a clock at right angles in a 24-hour day?",
            opts: ["44 times", "48 times", "24 times", "22 times"],
            ans: "A",
            exp: "Hands are at right angles twice an hour, but only 22 times in 12 hours (at 3:00 and 9:00 it occurs once), totaling 44 times in 24 hours."
        }
    ],
    level3: [
        {
            q: "A clock is set right at 5:00 AM. The clock loses 16 minutes in 24 hours. What will be the true time when the clock indicates 10:00 PM on the 4th day?",
            opts: ["11:00 PM", "10:30 PM", "11:15 PM", "10:45 PM"],
            ans: "A",
            exp: "Total time from 5 AM day 1 to 10 PM day 4 = 89 hours. In 24 hrs, clock indicates 23 hrs 44 min = 356/15 hrs. True time = 89 × (24 / (356/15)) = 89 × (360/356) = 90 hours. 90 hours from 5 AM day 1 is exactly 11:00 PM on 4th day."
        },
        {
            q: "At what time between 2 and 3 o'clock will the hands of a clock point in opposite directions (180°)?",
            opts: ["43 7/11 min past 2", "44 min past 2", "42 5/11 min past 2", "45 min past 2"],
            ans: "A",
            exp: "M = (2/11) × (30H + 180) = (2/11) × (60 + 180) = (2/11) × 240 = 480/11 = 43 7/11 min past 2."
        },
        {
            q: "A watch gains 5 seconds in 3 minutes and was set right at 8 AM. If it shows 5:15 PM on the same day, what is the actual time?",
            opts: ["5:00 PM", "5:05 PM", "4:55 PM", "5:10 PM"],
            ans: "A",
            exp: "Gain rate = 5/180 = 1/36. Elapsed watch time from 8 AM to 5:15 PM = 9 hrs 15 min = 555 min. True time × (37/36) = 555 -> True time = 555 × (36/37) = 15 × 36 = 540 min = 9 hours. 8 AM + 9 hrs = 5:00 PM."
        },
        {
            q: "What is the reflex angle between the hands of a clock at 10:25?",
            opts: ["197.5°", "162.5°", "180°", "202.5°"],
            ans: "A",
            exp: "Acute angle = |30(10) - 5.5(25)| = |300 - 137.5| = 162.5°. Reflex angle = 360° - 162.5° = 197.5°."
        },
        {
            q: "Between 5:30 and 6:00, at what time are the hands of a clock at right angles?",
            opts: ["43 7/11 min past 5", "42 min past 5", "45 5/11 min past 5", "40 min past 5"],
            ans: "A",
            exp: "M = (2/11) × (30(5) + 90) = (2/11) × 240 = 480/11 = 43 7/11 min past 5."
        }
    ],
    level4: [
        {
            q: "A clock gains uniformly. It is 5 minutes slow at 8:00 AM on Sunday and 5 minutes 48 seconds fast at 8:00 PM on following Sunday. When was it correct?",
            opts: ["7:20 PM on Wednesday", "7:00 AM on Thursday", "6:40 PM on Tuesday", "8:00 PM on Wednesday"],
            ans: "A",
            exp: "Total hours from Sun 8 AM to next Sun 8 PM = 7 × 24 + 12 = 180 hours. Total gain = 5 min + 5 min 48 sec = 10 min 48 sec = 54/5 minutes. To be correct, clock must gain exactly 5 minutes. Time = 5 × (180 / (54/5)) = 5 × (900/54) = 4500/54 = 83 hrs 20 min = 3 days 11 hrs 20 min. Sun 8 AM + 3 days 11 hrs 20 min = Wednesday 7:20 PM."
        },
        {
            q: "Two clocks are set correctly at 9:00 AM. Clock A gains 3 minutes per hour and Clock B loses 2 minutes per hour. When will Clock A be exactly 1 hour ahead of Clock B?",
            opts: ["9:00 PM on the same day", "8:00 PM on the same day", "10:00 PM on the same day", "7:00 AM next morning"],
            ans: "A",
            exp: "Relative difference gained per hour = 3 - (-2) = 5 minutes per hour. Time required to gain 60 minutes = 60 / 5 = 12 hours. 9:00 AM + 12 hours = 9:00 PM on the same day."
        },
        {
            q: "At what exact time between 12:00 and 1:00 will the minute hand be behind the hour hand by an angle of 33°?",
            opts: ["12:54", "12:52", "12:56", "12:50"],
            ans: "A",
            exp: "Hour hand position at M minutes past 12 = 0.5M degrees. Minute hand position = 6M degrees. Minute hand is behind when it has rotated 360° - 33° = 327° or (360 + 0.5M) - 6M = 33 -> 5.5M = 327 -> M = 59.45 min. For standard acute inside angle: 6M - 0.5M = 33 -> 5.5M = 33 -> M = 6 minutes. When minute hand is behind hour hand: at M = 54 minutes."
        },
        {
            q: "A faulty clock gains 10 minutes every day. If it is set correctly at 12 noon on Monday, what time will it show at 6 PM on the following Sunday?",
            opts: ["7:02:30 PM", "7:15 PM", "6:50 PM", "7:30 PM"],
            ans: "A",
            exp: "Mon 12 noon to Sun 6 PM = 6 days + 6 hrs = 150 hours. Gain per hour = 10 / 24 = 5/12 minutes/hr. Total gain = 150 × (5/12) = 62.5 minutes = 1 hour 2 minutes 30 seconds. Displayed time = 6:00 PM + 1:02:30 = 7:02:30 PM."
        },
        {
            q: "How many times in a week do the two hands of a clock form a straight line (including both 0° and 180°)?",
            opts: ["308 times", "336 times", "154 times", "280 times"],
            ans: "A",
            exp: "In 12 hours, hands form a straight line 22 times (11 times coinciding + 11 times opposite). In 24 hours: 44 times. In a week (7 days): 44 × 7 = 308 times."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 2: CALENDAR
// -------------------------------------------------------------
const CALENDAR_POOLS = {
    level1: [
        {
            q: "How many odd days are there in an ordinary (non-leap) year of 365 days?",
            opts: ["1 odd day", "2 odd days", "0 odd days", "3 odd days"],
            ans: "A",
            exp: "365 / 7 = 52 weeks + 1 remaining day = 1 odd day."
        },
        {
            q: "How many odd days are in a leap year of 366 days?",
            opts: ["2 odd days", "1 odd day", "3 odd days", "0 odd days"],
            ans: "A",
            exp: "366 / 7 = 52 weeks + 2 remaining days = 2 odd days."
        },
        {
            q: "If 1st January 2007 was a Monday, what day of the week was 1st January 2008?",
            opts: ["Tuesday", "Monday", "Wednesday", "Sunday"],
            ans: "A",
            exp: "2007 is an ordinary year with 1 odd day. Monday + 1 day = Tuesday."
        },
        {
            q: "Which of the following is a leap year?",
            opts: ["2000", "1900", "1800", "2100"],
            ans: "A",
            exp: "A century year must be divisible by 400 to be a leap year. 2000 is divisible by 400; 1900, 1800, 2100 are not."
        },
        {
            q: "If today is Wednesday, what day of the week will it be after 63 days?",
            opts: ["Wednesday", "Thursday", "Tuesday", "Friday"],
            ans: "A",
            exp: "63 / 7 = 9 complete weeks with 0 remainder. The day remains Wednesday."
        }
    ],
    level2: [
        {
            q: "What was the day of the week on 15th August 1947 (India's Independence Day)?",
            opts: ["Friday", "Thursday", "Saturday", "Wednesday"],
            ans: "A",
            exp: "1600 yrs = 0 odd days. 300 yrs = 1 odd day. 46 yrs (11 leap + 35 ord) = 22 + 35 = 57 -> 1 odd day. Up to Aug 15: Jan(3)+Feb(0)+Mar(3)+Apr(2)+May(3)+Jun(2)+Jul(3)+Aug(15) = 31 -> 3 odd days. Total odd days = 1 + 1 + 3 = 5 odd days = Friday."
        },
        {
            q: "Which year will have the identical calendar to the year 2003?",
            opts: ["2014", "2008", "2012", "2015"],
            ans: "A",
            exp: "Count odd days from 2003: 2003(1), 2004(2), 2005(1), 2006(1), 2007(1), 2008(2), 2009(1), 2010(1), 2011(1), 2012(2), 2013(1). Sum = 14 (divisible by 7). Next ordinary year is 2014."
        },
        {
            q: "If 6th March 2005 was Monday, what day was 6th March 2004?",
            opts: ["Saturday", "Sunday", "Friday", "Monday"],
            ans: "A",
            exp: "2004 was a leap year, but March 2004 to March 2005 includes ordinary days of 2004 (Feb 2004 already passed). Difference = 365 days = 1 odd day. Monday - 1 = Sunday."
        },
        {
            q: "On what dates of April 2001 did Wednesday fall?",
            opts: ["4th, 11th, 18th, 25th", "5th, 12th, 19th, 26th", "3rd, 10th, 17th, 24th", "2nd, 9th, 16th, 23rd"],
            ans: "A",
            exp: "1st April 2001 was a Sunday. Therefore, 4th April was the first Wednesday. Adding 7 days yields 4th, 11th, 18th, 25th."
        },
        {
            q: "How many odd days are there in 400 consecutive years?",
            opts: ["0 odd days", "1 odd day", "2 odd days", "4 odd days"],
            ans: "A",
            exp: "100 yrs = 5 odd days. 400 yrs = (5 × 4) + 1 (400th yr leap) = 21 days = 3 weeks 0 odd days."
        }
    ],
    level3: [
        {
            q: "The calendar for the year 2007 will be identical to the calendar for:",
            opts: ["2018", "2014", "2016", "2020"],
            ans: "A",
            exp: "Odd days from 2007: 2007(1)+2008(2)+2009(1)+2010(1)+2011(1)+2012(2)+2013(1)+2014(1)+2015(1)+2016(2)+2017(1) = 14 = 0 remainder. Next year 2018 has identical calendar."
        },
        {
            q: "What day of the week was 26th January 1950 (India's Republic Day)?",
            opts: ["Thursday", "Wednesday", "Friday", "Tuesday"],
            ans: "A",
            exp: "1600 yrs = 0. 300 yrs = 1. 49 yrs (12 leap + 37 ord) = 24 + 37 = 61 -> 5. Jan 26 = 26 -> 5. Total = 1 + 5 + 5 = 11 -> 4 odd days = Thursday."
        },
        {
            q: "A person celebrated his birthday on Tuesday, 10th February 2004. When will his birthday fall on a Tuesday again?",
            opts: ["2009", "2010", "2015", "2008"],
            ans: "A",
            exp: "Feb 10 2004 to Feb 10 2005 = 366 days (includes Feb 29 2004) = 2 odd days. 2005(1)+2006(1)+2007(1)+2008(2) = 7 odd days. Birthday falls on Tuesday in 2009."
        },
        {
            q: "Last day of a century year CANNOT be:",
            opts: ["Tuesday, Thursday, Saturday", "Monday, Wednesday, Friday", "Sunday, Monday, Wednesday", "Friday, Sunday, Tuesday"],
            ans: "A",
            exp: "100 yrs ends on Friday (5), 200 yrs on Wednesday (3), 300 yrs on Monday (1), 400 yrs on Sunday (0). Thus, century years can never end on Tuesday, Thursday, or Saturday."
        },
        {
            q: "If 1st January 2004 was a Thursday, what day was 1st January 2005?",
            opts: ["Saturday", "Friday", "Sunday", "Thursday"],
            ans: "A",
            exp: "2004 is a leap year (366 days = 2 odd days). Thursday + 2 = Saturday."
        }
    ],
    level4: [
        {
            q: "In a leap century year, what is the maximum number of times that a specific date (e.g. 13th of a month) can fall on a Friday?",
            opts: ["3 times", "4 times", "2 times", "5 times"],
            ans: "A",
            exp: "In any given calendar year, the 13th can fall on a Friday at most 3 times (e.g. in non-leap years starting on Thursday: Feb, Mar, Nov)."
        },
        {
            q: "How many times does the 29th day of the month occur in 400 consecutive years?",
            opts: ["4497 times", "4400 times", "4800 times", "4496 times"],
            ans: "A",
            exp: "Each year has 11 months with at least 29 days = 400 × 11 = 4400. In 400 years, there are 97 leap years adding 97 February 29ths. Total = 4400 + 97 = 4497."
        },
        {
            q: "Prove what day of the week 1st January 1 AD was:",
            opts: ["Monday", "Sunday", "Saturday", "Friday"],
            ans: "A",
            exp: "By Gregorian calendar definition and ISO 8601 standard, 1st January 1 AD was a Monday."
        },
        {
            q: "If a year starts on Monday and ends on Tuesday, what type of year is it?",
            opts: ["Leap Year", "Ordinary Year", "Century Non-Leap Year", "Cannot be determined"],
            ans: "A",
            exp: "An ordinary year ends on the same day it begins (365 = 52 wks + 1 day). A leap year ends on the next day (366 = 52 wks + 2 days). Thus, starting on Monday and ending on Tuesday means it is a leap year."
        },
        {
            q: "If the first day of an ordinary non-leap year is a Friday, how many Saturdays will be in that year?",
            opts: ["52 Saturdays", "53 Saturdays", "51 Saturdays", "54 Saturdays"],
            ans: "A",
            exp: "In an ordinary year of 365 days, only the first day (Friday) occurs 53 times; all other 6 days (including Saturday) occur exactly 52 times."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 3: BLOOD RELATIONS
// -------------------------------------------------------------
const BLOOD_RELATION_POOLS = {
    level1: [
        {
            q: "Pointing to a photograph, John says, 'She is the daughter of my grandfather's only son.' How is the girl related to John?",
            opts: ["Sister", "Mother", "Aunt", "Cousin"],
            ans: "A",
            exp: "John's grandfather's only son is John's father. The daughter of John's father is John's sister."
        },
        {
            q: "Introducing a man, a woman says, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
            opts: ["Mother", "Sister", "Aunt", "Grandmother"],
            ans: "A",
            exp: "The only daughter of the woman's mother is the woman herself. She is his mother."
        },
        {
            q: "Pointing to a man in a portrait, David said, 'His mother is the wife of my father's son. Brothers and sisters have I none.' Whose portrait is it?",
            opts: ["David's son", "David's nephew", "David's father", "David's brother"],
            ans: "A",
            exp: "David has no siblings, so 'my father's son' is David himself. Wife of David is David's wife. Mother of the man is David's wife -> the man is David's son."
        },
        {
            q: "A is B's brother. C is A's mother. D is C's father. E is B's son. How is D related to A?",
            opts: ["Maternal Grandfather", "Grandfather", "Father", "Uncle"],
            ans: "A",
            exp: "C is A's mother, and D is C's father. Therefore, D is the maternal grandfather of A."
        },
        {
            q: "Pointing to a gentleman, Deepak said, 'His only brother is the father of my daughter's father.' How is the gentleman related to Deepak?",
            opts: ["Uncle", "Father", "Grandfather", "Brother"],
            ans: "A",
            exp: "'My daughter's father' is Deepak himself. The gentleman's only brother is Deepak's father -> the gentleman is Deepak's paternal uncle."
        }
    ],
    level2: [
        {
            q: "If 'A + B' means A is the brother of B; 'A - B' means A is the sister of B; 'A × B' means A is the father of B. Which of the following means 'P is the son of Q'?",
            opts: ["Q × P + R", "P × Q + R", "Q + P × R", "Q - P × R"],
            ans: "A",
            exp: "Q × P means Q is the father of P. P + R means P is male (brother of R). Hence, P is the son of Q."
        },
        {
            q: "A family consists of six members: P, Q, R, X, Y, and Z. Q is the son of R, but R is not the mother of Q. P and R are a married couple. Y is the brother of R. X is the daughter of P. Z is the brother of P. How many female members are in the family?",
            opts: ["2 females", "3 females", "1 female", "4 females"],
            ans: "A",
            exp: "R is father (M), P is mother (F), Q is son (M), X is daughter (F), Y is brother (M), Z is brother (M). Females = P and X = 2."
        },
        {
            q: "Pointing to a photograph, a woman says, 'This man's son's sister is my mother-in-law.' How is the woman's husband related to the man in the photograph?",
            opts: ["Grandson", "Son", "Nephew", "Son-in-law"],
            ans: "A",
            exp: "Man's son's sister is the man's daughter. The man's daughter is the woman's mother-in-law. The woman's husband is the son of that mother-in-law -> grandson of the man."
        },
        {
            q: "If P $ Q means P is the father of Q; P # Q means P is the mother of Q; P * Q means P is the sister of Q. In N # M $ K * T, how is N related to T?",
            opts: ["Paternal Grandmother", "Maternal Grandmother", "Aunt", "Mother"],
            ans: "A",
            exp: "M is father of K and T. N is mother of M. Therefore, N is the paternal grandmother of T."
        },
        {
            q: "A and B are married couple. X and Y are brothers. X is the brother of A. How is Y related to B?",
            opts: ["Brother-in-law", "Brother", "Cousin", "Uncle"],
            ans: "A",
            exp: "X and Y are brothers, so Y is also brother of A. Since A is married to B, Y is the brother-in-law of B."
        }
    ],
    level3: [
        {
            q: "Read the statements: P is the mother of K; K is the sister of D; D is the father of J. How is P related to J?",
            opts: ["Paternal Grandmother", "Maternal Grandmother", "Aunt", "Mother"],
            ans: "A",
            exp: "D is the father of J. P is the mother of D. Hence, P is the paternal grandmother of J."
        },
        {
            q: "If A × B means A is wife of B; A ÷ B means A is brother of B; A + B means A is daughter of B; A - B means A is father of B. In 'M ÷ N - O + P', how is M related to P?",
            opts: ["Brother-in-law", "Father-in-law", "Uncle", "Son"],
            ans: "A",
            exp: "N is father of O, and O is daughter of P -> N and P are husband and wife. M is brother of N -> M is brother-in-law of P."
        },
        {
            q: "In a family, there are two fathers, two mothers, one sister, two brothers, two sons, one daughter, one father-in-law, one mother-in-law, and one daughter-in-law. What is the minimum number of persons in the family?",
            opts: ["5 persons", "6 persons", "7 persons", "8 persons"],
            ans: "A",
            exp: "Grandfather, Grandmother, Father (their son), Mother (his wife), and their 2 children (1 son, 1 daughter) = 5 persons satisfy all relations."
        },
        {
            q: "Rahul tells Anand, 'The boy you saw yesterday playing football is the youngest son of the only daughter of my paternal grandfather.' How is the boy related to Rahul?",
            opts: ["Cousin", "Brother", "Nephew", "Uncle"],
            ans: "A",
            exp: "Only daughter of Rahul's paternal grandfather is Rahul's paternal aunt (bua). The son of Rahul's aunt is Rahul's cousin."
        },
        {
            q: "Pointing to Kapil, Shilpa said, 'His mother's brother is the father of my son Ashish.' How is Kapil related to Shilpa?",
            opts: ["Nephew", "Brother", "Brother-in-law", "Cousin"],
            ans: "A",
            exp: "Father of Shilpa's son is Shilpa's husband. Shilpa's husband is the brother of Kapil's mother. Therefore, Kapil's mother is Shilpa's husband's sister -> Kapil is Shilpa's nephew."
        }
    ],
    level4: [
        {
            q: "Given coded relations: P @ Q (P is mother of Q), P # Q (P is father of Q), P $ Q (P is husband of Q), P % Q (P is sister of Q). If A @ B $ C @ D % E, how is A related to E?",
            opts: ["Paternal Grandmother", "Maternal Grandmother", "Mother-in-law", "Great-grandmother"],
            ans: "A",
            exp: "D % E means D is sister of E. C @ D means C is mother of D (and E). B $ C means B is husband of C (father of E). A @ B means A is mother of B (father). A is paternal grandmother of E."
        },
        {
            q: "In a joint family, A, B, C, D, E, F are seated around. There are 2 married couples. B is a doctor and father of E. F is grandfather of C and is a contractor. D is grandmother of E and is a homemaker. There is one doctor, one contractor, one homemaker, one teacher, and two students. Which of the following is true?",
            opts: ["A is the teacher and wife of B", "E is the sister of C", "D is mother of A", "F is father of A"],
            ans: "A",
            exp: "F (contractor) is married to D (homemaker). Their son B (doctor) is married to A (teacher), with children E and C (students). A is the teacher and wife of B."
        },
        {
            q: "Pointing to a lady, a man said, 'Her maternal grandfather is the only son of my paternal great-grandfather.' How is the lady related to the man?",
            opts: ["Niece or Daughter", "Sister", "Mother", "Cousin"],
            ans: "A",
            exp: "Paternal great-grandfather's only son is grandfather. Her maternal grandfather is the man's grandfather -> the lady's mother is the man's sister (or the man himself is the father/uncle). She is his niece or daughter."
        },
        {
            q: "Eight members P, Q, R, S, T, U, V, W belong to three generations. There are 3 married couples. P is daughter-in-law of R. T is nephew of V. W is father of U. Q has only two children. How is R related to U?",
            opts: ["Grandmother", "Mother", "Aunt", "Sister"],
            ans: "A",
            exp: "Detailed generation breakdown places R in generation 1 as grandmother to U."
        },
        {
            q: "If 'M × N' means M is wife of N, 'M + N' means M is daughter of N, 'M - N' means M is father of N, 'M ÷ N' means M is mother of N. Which expression shows that P is mother-in-law of T?",
            opts: ["P ÷ Q - R × T", "T × R - Q ÷ P", "P - Q × R ÷ T", "P + Q - R × T"],
            ans: "A",
            exp: "P ÷ Q: P is mother of Q. Q - R: Q is father of R. R × T: R is wife of T. P is grandmother... To establish P as mother-in-law of T: P ÷ R × T gives P mother of R, who is wife of T."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 4: ANALOGY
// -------------------------------------------------------------
const ANALOGY_POOLS = {
    level1: [
        {
            q: "Book : Author :: Film : ?",
            opts: ["Director", "Actor", "Producer", "Screenwriter"],
            ans: "A",
            exp: "An author creates a book; a director creates/directs a film."
        },
        {
            q: "Odometer : Mileage :: Compass : ?",
            opts: ["Direction", "Speed", "Altitude", "Pressure"],
            ans: "A",
            exp: "An odometer measures mileage; a compass determines direction."
        },
        {
            q: "Marathon : Race :: Hibernation : ?",
            opts: ["Sleep", "Winter", "Bear", "Dream"],
            ans: "A",
            exp: "A marathon is a long race; hibernation is an extended period of sleep."
        },
        {
            q: "Doctor : Hospital :: Teacher : ?",
            opts: ["School", "Classroom", "Student", "Library"],
            ans: "A",
            exp: "A doctor's workplace is a hospital; a teacher's workplace is a school."
        },
        {
            q: "Cup : Coffee :: Bowl : ?",
            opts: ["Soup", "Spoon", "Food", "Plate"],
            ans: "A",
            exp: "Coffee is served in a cup; soup is served in a bowl."
        }
    ],
    level2: [
        {
            q: "Needle : Thread :: Pen : ?",
            opts: ["Ink", "Paper", "Word", "Nib"],
            ans: "A",
            exp: "A needle requires thread to fulfill its function; a pen requires ink."
        },
        {
            q: "Cell : Cytology :: Tissue : ?",
            opts: ["Histology", "Pathology", "Physiology", "Morphology"],
            ans: "A",
            exp: "The study of cells is cytology; the study of biological tissues is histology."
        },
        {
            q: "Pestle : Mortar :: Bow : ?",
            opts: ["Arrow", "Violin", "Target", "String"],
            ans: "A",
            exp: "Pestle and mortar are complementary paired tools; bow and arrow are paired implements."
        },
        {
            q: "Number Analogy: 12 : 144 :: 15 : ?",
            opts: ["225", "215", "235", "240"],
            ans: "A",
            exp: "12^2 = 144; 15^2 = 225."
        },
        {
            q: "Paleontology : Fossils :: Phrenology : ?",
            opts: ["Skull", "Mind", "Heart", "Bones"],
            ans: "A",
            exp: "Paleontology is the study of fossils; phrenology is the study of skull contours."
        }
    ],
    level3: [
        {
            q: "Seismograph : Earthquakes :: Anemometer : ?",
            opts: ["Wind Speed", "Precipitation", "Humidity", "Atmospheric Pressure"],
            ans: "A",
            exp: "A seismograph measures earthquakes; an anemometer measures wind speed."
        },
        {
            q: "Number Analogy: 6 : 222 :: 7 : ?",
            opts: ["350", "343", "336", "352"],
            ans: "A",
            exp: "6^3 + 6 = 216 + 6 = 222. Similarly, 7^3 + 7 = 343 + 7 = 350."
        },
        {
            q: "Ephemeral : Perpetual :: Discordant : ?",
            opts: ["Harmonious", "Harsh", "Melodious", "Strident"],
            ans: "A",
            exp: "Ephemeral and perpetual are antonyms; discordant and harmonious are antonyms."
        },
        {
            q: "Grain : Silo :: Water : ?",
            opts: ["Reservoir", "Aqueduct", "Canal", "River"],
            ans: "A",
            exp: "Grain is stored in a silo; water is stored in a reservoir."
        },
        {
            q: "8 : 81 :: 64 : ?",
            opts: ["625", "512", "729", "1000"],
            ans: "A",
            exp: "8 = 2^3 -> 81 = 3^4. 64 = 4^3 -> 5^4 = 625."
        }
    ],
    level4: [
        {
            q: "Miasma : Disease :: Catalyst : ?",
            opts: ["Reaction", "Substance", "Inhibition", "Precipitation"],
            ans: "A",
            exp: "Historically, miasma was thought to initiate disease; a catalyst accelerates a chemical reaction."
        },
        {
            q: "Sybarite : Luxury :: Ascetic : ?",
            opts: ["Austerity", "Indulgence", "Hedonism", "Wealth"],
            ans: "A",
            exp: "A sybarite embraces luxury; an ascetic practices rigorous austerity."
        },
        {
            q: "Number Analogy: 42 : 56 :: 110 : ?",
            opts: ["132", "128", "136", "140"],
            ans: "A",
            exp: "42 = 6 × 7, 56 = 7 × 8. 110 = 10 × 11 -> next is 11 × 12 = 132."
        },
        {
            q: "Iconoclast : Tradition :: Rebel : ?",
            opts: ["Authority", "Law", "Anarchy", "Order"],
            ans: "A",
            exp: "An iconoclast attacks established traditions; a rebel challenges established authority."
        },
        {
            q: "Tympanum : Ear :: Cornea : ?",
            opts: ["Eye", "Nose", "Throat", "Brain"],
            ans: "A",
            exp: "Tympanum is a vital membrane of the ear; cornea is a vital transparent membrane of the eye."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 5: CODING & DECODING
// -------------------------------------------------------------
const CODING_POOLS = {
    level1: [
        {
            q: "In a certain code, 'APPLE' is written as 'BQQMF'. How is 'GRAPE' written in that code?",
            opts: ["HSBQF", "HQAPF", "FSAOD", "HSBQG"],
            ans: "A",
            exp: "Each letter is shifted by +1: G->H, R->S, A->B, P->Q, E->F."
        },
        {
            q: "If 'CAT' is coded as 24 (C=3, A=1, T=20), what is the code for 'DOG'?",
            opts: ["26", "25", "28", "30"],
            ans: "A",
            exp: "Sum of letter positions: D(4) + O(15) + G(7) = 26."
        },
        {
            q: "If 'ROSE' is coded as 'ILHV', how is 'LEAF' coded?",
            opts: ["OVZU", "OZVU", "OWVT", "OVZV"],
            ans: "A",
            exp: "Opposite alphabet pairs (A<->Z, B<->Y, etc.): L<->O, E<->V, A<->Z, F<->U -> OVZU."
        },
        {
            q: "If 'BLUE' is coded as 'CMVF', how is 'PINK' coded?",
            opts: ["QJOL", "QJOK", "QIPL", "RJOL"],
            ans: "A",
            exp: "Shift each letter by +1: P->Q, I->J, N->O, K->L."
        },
        {
            q: "In a code language, if 1 represents A, 2 represents B... what does 3-1-20 represent?",
            opts: ["CAT", "BAT", "RAT", "MAT"],
            ans: "A",
            exp: "3=C, 1=A, 20=T -> CAT."
        }
    ],
    level2: [
        {
            q: "If 'SYSTEM' is coded as 'SYSMET' and 'NEARER' as 'AENRER', how is 'FRACTION' coded?",
            opts: ["CARFNOIT", "ARFCNOIT", "CARFTION", "FRACNOIT"],
            ans: "A",
            exp: "Divide 8-letter word into two halves: FRAC -> CARF (first 3 letters reversed), TION -> NOIT (last 4 letters reversed) -> CARFNOIT."
        },
        {
            q: "In a code, '786' means 'study very hard', '958' means 'hard work pays', and '645' means 'study and work'. What is the code for 'very'?",
            opts: ["7", "8", "6", "9"],
            ans: "A",
            exp: "Compare 786 and 958: common word 'hard', common digit 8 -> hard=8. Compare 786 and 645: common word 'study', common digit 6 -> study=6. In 786, remaining word 'very' = 7."
        },
        {
            q: "If 'KASHMIR' is written as 8142753, how is 'SHAMIR' written?",
            opts: ["421753", "412753", "241753", "427153"],
            ans: "A",
            exp: "Direct letter mapping: K=8, A=1, S=4, H=2, M=7, I=5, R=3. SHAMIR = 4 2 1 7 5 3."
        },
        {
            q: "If 'MONKEY' is coded as 'XDJMNL', how is 'TIGER' coded?",
            opts: ["QDFHS", "SDFHQ", "UJHFS", "QDFHT"],
            ans: "A",
            exp: "Reverse order and shift by -1: Y-1=X, E-1=D, K-1=J, N-1=M, O-1=N, M-1=L. TIGER: R-1=Q, E-1=D, G-1=F, I-1=H, T-1=S -> QDFHS."
        },
        {
            q: "In a certain code, '247' means 'spread red carpet', '256' means 'dust one carpet', and '264' means 'one red carpet'. Which digit represents 'dust'?",
            opts: ["5", "2", "6", "4"],
            ans: "A",
            exp: "In 256 and 264, common digits are 2, 6 ('one', 'carpet'). The remaining digit in 256 is 5, which must represent 'dust'."
        }
    ],
    level3: [
        {
            q: "If 'MACHINE' is coded as 19-7-9-14-15-20-11, how will 'DANGER' be coded?",
            opts: ["10-7-20-13-11-24", "11-7-20-13-11-24", "10-7-19-13-11-24", "13-7-20-10-11-25"],
            ans: "A",
            exp: "Each letter position + 6: M(13)+6=19, A(1)+6=7, C(3)+6=9... D(4)+6=10, A(1)+6=7, N(14)+6=20, G(7)+6=13, E(5)+6=11, R(18)+6=24."
        },
        {
            q: "If 'DELHI' is coded as 73541 and 'CALCUTTA' as 82589662, how is 'CALICUT' coded?",
            opts: ["8251896", "8251869", "8251986", "8521896"],
            ans: "A",
            exp: "Direct character substitution: C=8, A=2, L=5, I=1, C=8, U=9, T=6 -> 8251896."
        },
        {
            q: "In a code language: 'pit dar na' means 'you are good', 'dar tok pa' means 'good and bad', 'tim na tok' means 'they are bad'. What represents 'they'?",
            opts: ["tim", "na", "tok", "pit"],
            ans: "A",
            exp: "'na' = are (from 1 & 3). 'tok' = bad (from 2 & 3). In 'tim na tok', the remaining word 'they' must be 'tim'."
        },
        {
            q: "If 'CENTRAL' is coded as 'LARTNEC', and 'SEMINAR' as 'RANIMES', how is 'FESTIVAL' coded?",
            opts: ["LAVITSEF", "LAVITEFS", "LAVISTEF", "LATIVSEF"],
            ans: "A",
            exp: "The word is completely written in reverse order: FESTIVAL -> LAVITSEF."
        },
        {
            q: "If 'ACID' is coded as '1C3D', what is 'BASE' coded as if numbers represent vowels in alphabetical order (A=1, E=2, I=3, O=4, U=5)?",
            opts: ["B1S2", "B1S5", "B2S1", "2AS1"],
            ans: "A",
            exp: "Consonants remain unchanged; vowels are replaced by their vowel index: A=1, E=2 -> B 1 S 2."
        }
    ],
    level4: [
        {
            q: "In a sophisticated matrix cipher: Letters are replaced by [Row, Column]. If 'T' is [4,2] and 'E' is [1,5], what cipher principle allows decoding unknown transposition without the key?",
            opts: ["Frequency analysis of single letters and digraphs", "Brute force of 2^256 states", "Calculating Euclidean gcd", "Converting matrix to eigenvalues"],
            ans: "A",
            exp: "Cryptanalysis of substitution and polyalphabetic ciphers relies on letter and digraph frequency distributions."
        },
        {
            q: "If 'CONSTITUTION' is encrypted through a double transposition column cipher with key [3,1,4,2], how many permutations must be tested to invert without key length?",
            opts: ["Factorial of key length (k!)", "2^k", "k^2", "k × (k-1)"],
            ans: "A",
            exp: "Columnar transpositions without known order require searching among k! column arrangements."
        },
        {
            q: "In an advanced alphanumeric cipher, each vowel V is replaced by V^2 mod 26 and consonants C by (2C + 3) mod 26. What mathematical property ensures unique decryptability?",
            opts: ["The multiplier 2 must be coprime to the modulus 26 (which gcd(2,26)=2 violates)", "The function is strictly monotonic", "26 is a prime number", "Modulo addition is associative"],
            ans: "A",
            exp: "For an affine cipher y = (ax + b) mod m to be invertible, gcd(a, m) must equal 1. Here gcd(2, 26) = 2 != 1, meaning it would produce collisions."
        },
        {
            q: "If 'STREAM' is coded as '19-20-18-5-1-13' and then transformed via XOR with key '1010', what is the resulting first byte?",
            opts: ["25", "19", "29", "15"],
            ans: "A",
            exp: "19 in binary = 00010011. Key 1010 in decimal = 10 (00001010). 19 XOR 10: (00010011 XOR 00001010) = 00011001 = 25."
        },
        {
            q: "If word letters are encoded as modular inverses modulo 29, what is the modular inverse of 2 (representing 'B')?",
            opts: ["15", "14", "13", "16"],
            ans: "A",
            exp: "2 × x ≡ 1 (mod 29). Since 2 × 15 = 30 ≡ 1 (mod 29), the modular inverse is 15."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 6: SYLLOGISMS
// -------------------------------------------------------------
const SYLLOGISM_POOLS = {
    level1: [
        {
            q: "Statements: All cats are dogs. All dogs are birds.\nConclusions:\nI. All cats are birds.\nII. All birds are cats.",
            opts: ["Only conclusion I follows", "Only conclusion II follows", "Both I and II follow", "Neither I nor II follows"],
            ans: "A",
            exp: "All A are B, and All B are C -> All A are C (All cats are birds). The converse 'All birds are cats' is not necessarily true."
        },
        {
            q: "Statements: All roses are flowers. Some flowers are red.\nConclusions:\nI. Some roses are red.\nII. Some flowers are roses.",
            opts: ["Only conclusion II follows", "Only conclusion I follows", "Both I and II follow", "Neither follows"],
            ans: "A",
            exp: "Since 'All roses are flowers', it directly follows that 'Some flowers are roses'. There is no guaranteed overlap between roses and red."
        },
        {
            q: "Statements: No car is a bike. No bike is a bus.\nConclusions:\nI. No car is a bus.\nII. Some buses are cars.",
            opts: ["Neither I nor II follows", "Only I follows", "Only II follows", "Either I or II follows"],
            ans: "A",
            exp: "Two negative premises yield no definitive conclusion between car and bus."
        },
        {
            q: "Statements: Some pens are books. All books are pencils.\nConclusions:\nI. Some pens are pencils.\nII. All pencils are pens.",
            opts: ["Only conclusion I follows", "Only II follows", "Both I and II follow", "Neither follows"],
            ans: "A",
            exp: "Some pens that are books are also pencils -> Some pens are pencils follows."
        },
        {
            q: "Statements: All laptops are computers. Some computers are tablets.\nConclusions:\nI. Some laptops are tablets.\nII. No laptop is a tablet.",
            opts: ["Either I or II follows", "Only I follows", "Only II follows", "Both follow"],
            ans: "A",
            exp: "Laptops and tablets have no stated direct relation, forming a complementary pair (Some / No) which triggers 'Either I or II follows'."
        }
    ],
    level2: [
        {
            q: "Statements: Some mangoes are apples. Some apples are bananas.\nConclusions:\nI. Some mangoes are bananas.\nII. No mango is a banana.",
            opts: ["Either I or II follows", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "Particular affirmative statements (Some + Some) give no definite conclusion, but 'Some' and 'No' form a complementary pair -> Either I or II follows."
        },
        {
            q: "Statements: All windows are doors. No door is a wall.\nConclusions:\nI. No window is a wall.\nII. No wall is a door.",
            opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "Since all windows are inside doors, and no doors overlap with walls, no window can be a wall. Also 'No door is wall' implies 'No wall is door'. Both follow."
        },
        {
            q: "Statements: Only a few books are novels. All novels are papers.\nConclusions:\nI. Some books are not novels.\nII. All papers can never be books.",
            opts: ["Only conclusion I follows", "Only II follows", "Both follow", "Neither follows"],
            ans: "A",
            exp: "'Only a few books are novels' means both 'Some books are novels' and 'Some books are not novels'. Thus I follows."
        },
        {
            q: "Statements: Some doctors are teachers. All teachers are engineers. All engineers are scientists.\nConclusions:\nI. Some doctors are scientists.\nII. All teachers are scientists.",
            opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "Doctors overlap with teachers, who are completely inside engineers and scientists. Both conclusions follow."
        },
        {
            q: "Statements: All rivers are lakes. No lake is a sea.\nConclusions:\nI. No river is a sea.\nII. Some seas are rivers.",
            opts: ["Only conclusion I follows", "Only II follows", "Both follow", "Neither follows"],
            ans: "A",
            exp: "All rivers are inside lakes, which completely exclude seas. Conclusion I follows directly."
        }
    ],
    level3: [
        {
            q: "Statements: Only a few red are blue. No blue is green. All green are yellow.\nConclusions:\nI. All red can never be green.\nII. Some yellow are definitely not blue.",
            opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "The part of red that is blue cannot be green (some red can't be green, but all red... wait: green that is inside yellow can't be blue -> some yellow are not blue). Both follow."
        },
        {
            q: "Statements: Some circles are squares. No square is a triangle. All triangles are rectangles.\nConclusions:\nI. Some circles are not triangles.\nII. Some rectangles are not squares.",
            opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "The portion of circles that are squares cannot be triangles -> I follows. The rectangles that are triangles cannot be squares -> II follows. Both follow."
        },
        {
            q: "Statements: Every musician is an artist. No artist is a scientist.\nConclusions:\nI. No musician is a scientist.\nII. No scientist is a musician.",
            opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "Musicians are a subset of artists. Artists have zero intersection with scientists. Both conclusions follow."
        },
        {
            q: "Statements: Most phones are gadgets. All gadgets are machines.\nConclusions:\nI. Some phones are machines.\nII. All machines are phones.",
            opts: ["Only conclusion I follows", "Only II follows", "Both follow", "Neither follows"],
            ans: "A",
            exp: "'Most' = 'Some'. Some phones are gadgets + All gadgets are machines -> Some phones are machines."
        },
        {
            q: "Statements: No fruit is vegetable. All vegetables are greens.\nConclusions:\nI. Some greens are not fruits.\nII. Some fruits are not greens.",
            opts: ["Only conclusion I follows", "Only II follows", "Both follow", "Neither follows"],
            ans: "A",
            exp: "Greens that are vegetables cannot be fruits -> I follows. Fruits could hypothetically be part of other greens, so II does not necessarily follow."
        }
    ],
    level4: [
        {
            q: "Statements: Only diamonds are gold. Some diamonds are platinum. No platinum is silver.\nConclusions:\nI. All gold being platinum is a possibility.\nII. Some diamonds are not silver.",
            opts: ["Only conclusion II follows", "Only I follows", "Both follow", "Neither follows"],
            ans: "A",
            exp: "'Only diamonds are gold' means All gold are diamonds, and gold can belong to NO OTHER category. Therefore, gold can never be platinum -> I is false. The platinum that is diamond cannot be silver -> II follows."
        },
        {
            q: "Statements: Only a few A are B. Only a few B are C. No C is D.\nConclusions:\nI. All B being D is a possibility.\nII. All A being C is a possibility.",
            opts: ["Only conclusion II follows", "Only I follows", "Both follow", "Neither follows"],
            ans: "A",
            exp: "B has an overlap with C, and no C is D, so the part of B that is C can never be D -> I is impossible. A has no direct restriction with C -> II is possible. Only II follows."
        },
        {
            q: "Statements: Each P is Q. Every Q is R. No R is S.\nConclusions:\nI. No P is S.\nII. At least some R are P.",
            opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "'Each'/'Every' = 'All'. All P are Q, All Q are R, No R is S. It follows that No P is S, and Some R are P. Both follow."
        },
        {
            q: "Statements: 0% water is fire. 100% fire is earth. 50% earth is air.\nConclusions:\nI. Some earth are definitely not water.\nII. Some air being fire is a possibility.",
            opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"],
            ans: "A",
            exp: "Earth that is fire cannot be water -> I follows. Air and fire have no mutual exclusion -> II follows. Both follow."
        },
        {
            q: "Statements: All kings are queens. All queens are rooks. All rooks are pawns.\nConclusions:\nI. All kings are pawns.\nII. Some pawns are rooks.\nIII. Some queens are kings.",
            opts: ["All I, II and III follow", "Only I and II follow", "Only I follows", "Only II and III follow"],
            ans: "A",
            exp: "Hierarchical containment: Kings ⊂ Queens ⊂ Rooks ⊂ Pawns. All three conclusions follow validly."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 7: DIRECTION SENSE
// -------------------------------------------------------------
const DIRECTION_POOLS = {
    level1: [
        {
            q: "A person walks 10 metres North, then turns right and walks 10 metres. In which direction is he now from his starting point?",
            opts: ["North-East", "North-West", "South-East", "East"],
            ans: "A",
            exp: "10 m North + 10 m East puts the person in the North-East quadrant."
        },
        {
            q: "A man walks 5 km South, turns left and walks 3 km, then turns left again and walks 5 km. Which direction is he facing now?",
            opts: ["North", "South", "East", "West"],
            ans: "A",
            exp: "Facing South -> turn left (faces East) -> turn left again (faces North)."
        },
        {
            q: "Rohan walks 8 km East and then 6 km North. How far is he from his starting point?",
            opts: ["10 km", "12 km", "14 km", "8 km"],
            ans: "A",
            exp: "Pythagoras theorem: Distance = sqrt(8^2 + 6^2) = sqrt(64 + 36) = sqrt(100) = 10 km."
        },
        {
            q: "Facing towards the East, Priya turns 90° clockwise. Which direction is she facing now?",
            opts: ["South", "North", "West", "South-West"],
            ans: "A",
            exp: "East is 90°. Turning 90° clockwise points to South (180°)."
        },
        {
            q: "A person travels 12 km West, then turns right and travels 5 km. How far is he from his initial location?",
            opts: ["13 km", "15 km", "17 km", "11 km"],
            ans: "A",
            exp: "Distance = sqrt(12^2 + 5^2) = sqrt(144 + 25) = sqrt(169) = 13 km."
        }
    ],
    level2: [
        {
            q: "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was he facing?",
            opts: ["South", "North", "East", "West"],
            ans: "A",
            exp: "In the morning, the sun is in the East, so shadows fall towards the West. If the shadow is to Suresh's right, his right is West, which means he is facing South."
        },
        {
            q: "One evening before sunset, Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
            opts: ["South", "North", "East", "West"],
            ans: "A",
            exp: "In the evening, the sun is in the West, so shadows fall East. If Hema's shadow is to her right, Hema's right is East, so Hema is facing North. Since Rekha is face to face with Hema, Rekha faces South."
        },
        {
            q: "A person walks 20 m North, then turns right and walks 30 m, then turns right and walks 35 m, then turns left and walks 15 m, and finally turns left and walks 15 m. In which direction and how far is he from the start?",
            opts: ["45 m East", "35 m East", "45 m West", "30 m South"],
            ans: "A",
            exp: "North displacement: 20 - 35 + 15 = 0 m. East displacement: 30 + 15 = 45 m. He is exactly 45 m East."
        },
        {
            q: "A clock is placed on a table such that at 6:00 PM, the hour hand points North. In which direction will the minute hand point at 9:15 PM?",
            opts: ["West", "East", "North", "South"],
            ans: "A",
            exp: "Normally at 6:00 PM, hour hand points South. If it points North, the clock is rotated 180°. At 9:15 PM, minute hand is at 3 (East). Rotated 180°, East becomes West."
        },
        {
            q: "Starting from point A, Rahul walks 10 km South, turns left and walks 25 km, turns left and walks 40 km, then turns right and walks 5 km to reach B. What is the shortest distance between A and B?",
            opts: ["30√2 km", "40 km", "35 km", "50 km"],
            ans: "A",
            exp: "Vertical: -10 + 40 = +30 km North. Horizontal: +25 + 5 = +30 km East. Distance = sqrt(30^2 + 30^2) = 30√2 km."
        }
    ],
    level3: [
        {
            q: "Kunal walks 10 km North. From there, he walks 6 km South. Then, he walks 3 km East. How far and in which direction is he with reference to his starting point?",
            opts: ["5 km North-East", "7 km East", "5 km South-East", "6 km North"],
            ans: "A",
            exp: "Net North = 10 - 6 = 4 km. Net East = 3 km. Distance = sqrt(4^2 + 3^2) = 5 km in the North-East direction."
        },
        {
            q: "A man is facing North-West. He turns 90° clockwise, then 180° anticlockwise, and then another 90° anticlockwise. Which direction is he facing now?",
            opts: ["South-East", "South-West", "North-East", "East"],
            ans: "A",
            exp: "Start: 315° (NW). Clockwise: +90° = 405° = 45° (NE). Anticlockwise: -180° = 225° (SW). Anticlockwise: -90° = 135° (South-East)."
        },
        {
            q: "Village A is 20 km to the West of Village B. Village C is 15 km to the South of Village A. Village D is 15 km to the South of Village B. How far is Village C from Village D?",
            opts: ["20 km", "15 km", "25 km", "30 km"],
            ans: "A",
            exp: "Village C and D are both 15 km South of A and B respectively. Since A is 20 km West of B, C is 20 km West of D. Distance = 20 km."
        },
        {
            q: "If South-East becomes North, North-East becomes West, and so on, what will West become?",
            opts: ["South-East", "North-East", "South-West", "North-West"],
            ans: "A",
            exp: "South-East (135°) becomes North (0°/360°) -> a rotation of 135° anticlockwise. Applying 135° anticlockwise to West (270° - 135° = 135°) yields South-East."
        },
        {
            q: "A car leaves city X and drives 50 km North, 30 km East, 20 km South, and 70 km West to reach Y. What is the displacement vector from X to Y?",
            opts: ["50 km North-West", "40 km North-West", "50 km South-West", "60 km West"],
            ans: "A",
            exp: "North = 50 - 20 = 30 km. West = 70 - 30 = 40 km. Magnitude = sqrt(30^2 + 40^2) = 50 km North-West."
        }
    ],
    level4: [
        {
            q: "A drone flies on a path: 100 m North, turns 60° right and flies 100 m, then turns 120° right and flies 100 m. How far is the drone from its starting point?",
            opts: ["100 m", "150 m", "100√3 m", "200 m"],
            ans: "A",
            exp: "The three segments form three sides of a regular hexagon of side 100 m. The vector sum returns to 100 m from the origin."
        },
        {
            q: "At 12:00 noon on an equator summer solstice, shadows have zero length. At 4:00 PM, a 1.732 m pole casts a 3 m shadow East. What is the sun's elevation angle?",
            opts: ["30°", "45°", "60°", "15°"],
            ans: "A",
            exp: "tan(θ) = height / shadow = 1.732 / 3 = √3 / 3 = 1/√3 -> θ = 30°."
        },
        {
            q: "Point P is 12 m North of Q. Point R is 9 m East of Q. Point S is 15 m South of R. Point T is 20 m West of S. What is the shortest distance between P and T?",
            opts: ["sqrt(778) m ≈ 27.89 m", "25 m", "30 m", "28 m"],
            ans: "A",
            exp: "Q=(0,0). P=(0,12). R=(9,0). S=(9,-15). T=(9-20, -15) = (-11, -15). Distance P to T = sqrt((-11 - 0)^2 + (-15 - 12)^2) = sqrt(121 + 729) = sqrt(850) m."
        },
        {
            q: "A submarine navigates 40 km bearing 045°, then 30 km bearing 135°. What is its distance and bearing from the port?",
            opts: ["50 km bearing 081.9°", "50 km bearing 090°", "60 km bearing 075°", "45 km bearing 060°"],
            ans: "A",
            exp: "Bearings 045° and 135° are perpendicular (difference 90°). By Pythagoras: Distance = sqrt(40^2 + 30^2) = 50 km. Angle offset = arctan(30/40) = 36.87° -> Bearing = 45° + 36.87° = 81.87° ≈ 081.9°."
        },
        {
            q: "Four friends A, B, C, D stand at the corners of a square of side 100 m. At t=0, each begins walking directly towards the next at constant speed v. What path do they trace before meeting?",
            opts: ["Logarithmic spirals meeting at center after distance 100 m", "Straight lines meeting at center after 50 m", "Circular orbits", "Parabolic curves"],
            ans: "A",
            exp: "In the classic 4-bug problem, the velocity of the pursuing bug is always perpendicular to the pursued bug. Closing velocity = v, so distance traveled = side length = 100 m, tracing logarithmic spirals."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 8: SEATING ARRANGEMENT & PUZZLES
// -------------------------------------------------------------
const SEATING_POOLS = {
    level1: [
        {
            q: "Five friends A, B, C, D, and E are sitting in a row facing North. C is sitting in the middle. A is to the immediate right of C. D is to the immediate left of C. Who is sitting on the far right if B is on the far left?",
            opts: ["E", "A", "D", "B"],
            ans: "A",
            exp: "Order from left to right: B, D, C, A, E. The person on the far right is E."
        },
        {
            q: "Four girls P, Q, R, S are sitting on a bench. P is to the left of Q. R is to the right of Q. S is between Q and R. Who is second from the left?",
            opts: ["Q", "P", "S", "R"],
            ans: "A",
            exp: "Arrangement: P, Q, S, R. Second from the left is Q."
        },
        {
            q: "Six people A, B, C, D, E, F are sitting in a circle facing the center. A is facing D. B is to the right of D. Who is sitting opposite B?",
            opts: ["E", "C", "F", "A"],
            ans: "A",
            exp: "In a 6-person circle, the opposite person is 3 positions away. Opposite to B (pos 1) is pos 4, which is E."
        },
        {
            q: "In a row of 25 students, Neha is 12th from the left end. What is her rank from the right end?",
            opts: ["14th", "13th", "15th", "12th"],
            ans: "A",
            exp: "Total = Left + Right - 1 -> 25 = 12 + Right - 1 -> Right = 25 - 11 = 14th."
        },
        {
            q: "Five books are stacked on a table. Book A is above Book B. Book C is below Book D. Book B is above Book D. Which book is at the bottom?",
            opts: ["Book C", "Book D", "Book B", "Book A"],
            ans: "A",
            exp: "Top to bottom order: A, B, D, C. Book C is at the bottom."
        }
    ],
    level2: [
        {
            q: "Eight friends A, B, C, D, E, F, G, H are sitting around a circular table facing the center. B is third to the right of A. F is second to the left of B. Who is sitting to the immediate right of F?",
            opts: ["G or C depending on remaining ties", "A", "B", "D"],
            ans: "A",
            exp: "Positioning around 8 seats: A at 1. B at 4 (3rd right). F at 2 (2nd left of B). Immediate right of F is position 3 (occupied by G/C)."
        },
        {
            q: "In a row of boys, if A who is 10th from the left and B who is 9th from the right interchange their positions, A becomes 15th from the left. How many boys are there in the row?",
            opts: ["23 boys", "24 boys", "22 boys", "25 boys"],
            ans: "A",
            exp: "New position of A is 15th from left, which is B's original position (9th from right). Total = 15 + 9 - 1 = 23 boys."
        },
        {
            q: "Seven people P, Q, R, S, T, U, V live on seven different floors of a building (floors 1 to 7). Only three people live above P. S lives immediately below P. Which floor does S live on?",
            opts: ["Floor 3", "Floor 4", "Floor 2", "Floor 5"],
            ans: "A",
            exp: "Three people live above P (floors 5, 6, 7), so P lives on Floor 4. S lives immediately below P, on Floor 3."
        },
        {
            q: "Six persons A, B, C, D, E, F sit in two parallel rows of three each, facing each other. Row 1 faces South, Row 2 faces North. E is opposite D. C is not at any end. F is to the left of D. Who is opposite F?",
            opts: ["A", "B", "C", "E"],
            ans: "A",
            exp: "Analyzing row alignments places A opposite F."
        },
        {
            q: "In a class of 45 students, rank of Sunita is 11th from top and rank of Anita is 15th from bottom. How many students are between Sunita and Anita?",
            opts: ["19 students", "20 students", "18 students", "21 students"],
            ans: "A",
            exp: "Students between = Total - (Top rank + Bottom rank) = 45 - (11 + 15) = 45 - 26 = 19 students."
        }
    ],
    level3: [
        {
            q: "Eight friends P, Q, R, S, T, U, V, W sit in a circle. Four face the center and four face outward. No two adjacent persons face the same direction. If P faces the center, what direction does the person opposite P face?",
            opts: ["Center", "Outward", "Either Center or Outward", "Cannot be determined"],
            ans: "A",
            exp: "With alternating directions (C, O, C, O, C, O, C, O) in an 8-person circle, position 1 (Center) and opposite position 5 (Center) both face the center."
        },
        {
            q: "Five boxes of different colors (Red, Green, Blue, Yellow, White) are stacked. Red is immediately above Green. Two boxes are between Green and White. Yellow is above Blue. Which box is in the middle?",
            opts: ["Red", "Blue", "Green", "Yellow"],
            ans: "A",
            exp: "From top to bottom: Yellow, White, Red, Green, Blue. The middle box is Red."
        },
        {
            q: "Six executives L, M, N, O, P, Q attend meetings on six days from Monday to Saturday. L attends on Wednesday. Exactly one person attends between L and P. P does not attend on Monday. Which day does P attend?",
            opts: ["Friday", "Thursday", "Tuesday", "Saturday"],
            ans: "A",
            exp: "One person between L (Wed) and P means P is either Monday or Friday. Since P does not attend on Monday, P attends on Friday."
        },
        {
            q: "A, B, C, D, E, F, G sit in a straight line facing North. D sits third to the right of G. Neither D nor G sits at an extreme end. Only two people sit between C and D. Who sits at the extreme left end?",
            opts: ["A or B", "G", "C", "D"],
            ans: "A",
            exp: "Line constraints place G at position 2 and D at position 5. Position 1 (extreme left) is occupied by A or B."
        },
        {
            q: "In a sports tournament, 8 teams play in a single-elimination knockout format. How many total matches must be played to determine the champion?",
            opts: ["7 matches", "8 matches", "14 matches", "6 matches"],
            ans: "A",
            exp: "In any single-elimination tournament of N teams, each match eliminates exactly 1 team. To eliminate N - 1 teams requires N - 1 = 8 - 1 = 7 matches."
        }
    ],
    level4: [
        {
            q: "Seven professors P, Q, R, S, T, U, V teach seven subjects on seven consecutive days. P teaches physics 3 days before the chemistry lecture. No two science lectures are adjacent. What branch of combinatorial algorithms solves this constraint satisfaction problem?",
            opts: ["Constraint Satisfaction Problem (CSP) with backtracking search", "Breadth-First Search without pruning", "Dijkstra's shortest path algorithm", "Fast Fourier Transform"],
            ans: "A",
            exp: "Complex scheduling with forward/backward constraints is a canonical CSP solved via AC-3 and backtracking search."
        },
        {
            q: "In an 8-person circular table where each person has two attributes (profession and favorite city), what is the minimum number of independent clues needed to avoid multiple valid seating permutations?",
            opts: ["At least 7 to 9 tightly coupled relational constraints", "Exactly 3 clues", "15 clues", "2 clues"],
            ans: "A",
            exp: "With 8! × 8! = 1.6 × 10^9 possible states, determining a unique configuration requires 7-9 non-redundant relational constraints."
        },
        {
            q: "Ten people sit in two parallel rows facing each other. If row 1 shifts 1 seat clockwise in circular projection while row 2 shifts 1 seat counter-clockwise, how many cycles are required for all original facing pairs to realign?",
            opts: ["5 cycles", "10 cycles", "2 cycles", "20 cycles"],
            ans: "A",
            exp: "Each row has 5 people. Relative shift between facing positions is 2 positions per cycle. Since gcd(2, 5) = 1, it requires 5 cycles to realign all pairs."
        },
        {
            q: "In a 3D rubik-style box packing puzzle, how many distinct rotations of a non-symmetrical L-tromino block exist in 3D space?",
            opts: ["24 distinct orientations", "12 orientations", "8 orientations", "48 orientations"],
            ans: "A",
            exp: "A general rigid 3D object has 24 proper rotations belonging to the chiral octahedral symmetry group SO(3)."
        },
        {
            q: "In a floor puzzle with 8 floors, P is on an odd floor above floor 3. Q is 3 floors below P. R is on an even floor between P and Q. How many valid floor assignments exist for P, Q, R?",
            opts: ["2 valid configurations (P=5, Q=2, R=4; or P=7, Q=4, R=6)", "1 configuration", "3 configurations", "0 configurations"],
            ans: "A",
            exp: "P can be 5 or 7. If P=5: Q=2, even floor between is R=4. If P=7: Q=4, even floor between is R=6. Exactly 2 valid configurations."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 9-14 FALLBACK GENERATORS (SERIES, DICES, PUZZLES, ETC.)
// -------------------------------------------------------------
const GENERIC_LOGICAL_POOLS = {
    "series-completion": {
        level1: [
            { q: "Find the next number in the series: 2, 4, 8, 16, 32, ?", opts: ["64", "48", "60", "56"], ans: "A", exp: "Each term is multiplied by 2: 32 × 2 = 64." },
            { q: "Complete the series: 3, 6, 9, 12, 15, ?", opts: ["18", "21", "16", "20"], ans: "A", exp: "Add 3 to each term: 15 + 3 = 18." },
            { q: "Find the missing term: 100, 90, 80, 70, ?", opts: ["60", "65", "50", "55"], ans: "A", exp: "Subtract 10 each time: 70 - 10 = 60." },
            { q: "Letter series: A, C, E, G, ?", opts: ["I", "H", "J", "K"], ans: "A", exp: "Skip one letter: A(+2), C(+2), E(+2), G(+2) = I." },
            { q: "Find the next term: 1, 4, 9, 16, 25, ?", opts: ["36", "49", "30", "40"], ans: "A", exp: "Square numbers: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2 = 36." }
        ],
        level2: [
            { q: "Find the next number: 2, 5, 10, 17, 26, ?", opts: ["37", "35", "36", "38"], ans: "A", exp: "Pattern: n^2 + 1. 6^2 + 1 = 37." },
            { q: "Complete the series: 3, 5, 9, 17, 33, ?", opts: ["65", "63", "67", "60"], ans: "A", exp: "Differences are powers of 2: +2, +4, +8, +16, +32 -> 33 + 32 = 65." },
            { q: "Find missing term: 1, 8, 27, 64, 125, ?", opts: ["216", "343", "256", "196"], ans: "A", exp: "Cube numbers: 1^3, 2^3, 3^3, 4^3, 5^3, 6^3 = 216." },
            { q: "Alphanumeric series: A1, C3, E5, G7, ?", opts: ["I9", "H8", "J10", "I8"], ans: "A", exp: "Letter +2 (G->I), number +2 (7->9) = I9." },
            { q: "Find next term: 6, 12, 21, 33, ?", opts: ["48", "46", "50", "45"], ans: "A", exp: "Differences are +6, +9, +12, +15 -> 33 + 15 = 48." }
        ],
        level3: [
            { q: "Find the next number: 2, 3, 8, 27, 112, ?", opts: ["565", "560", "448", "570"], ans: "A", exp: "Pattern: ×1+1, ×2+2, ×3+3, ×4+4, ×5+5 -> 112 × 5 + 5 = 560 + 5 = 565." },
            { q: "Find next: 7, 26, 63, 124, 215, ?", opts: ["342", "343", "341", "344"], ans: "A", exp: "Pattern: n^3 - 1. 7^3 - 1 = 343 - 1 = 342." },
            { q: "Find missing: 4, 18, 48, 100, 180, ?", opts: ["294", "280", "300", "290"], ans: "A", exp: "Pattern: n^2 × (n - 1) or n^3 - n^2. For n=7: 7^3 - 7^2 = 343 - 49 = 294." },
            { q: "Alternating sequence: 14, 28, 20, 40, 32, 64, ?", opts: ["56", "96", "48", "128"], ans: "A", exp: "Pattern: ×2, -8, ×2, -8, ×2, -8 -> 64 - 8 = 56." },
            { q: "Fibonacci variant: 2, 3, 5, 8, 13, 21, ?", opts: ["34", "32", "35", "30"], ans: "A", exp: "Sum of previous two numbers: 13 + 21 = 34." }
        ],
        level4: [
            { q: "Find the next number in the recursive sequence: 1, 2, 6, 42, ?", opts: ["1806", "1764", "1800", "1842"], ans: "A", exp: "Sylvester's sequence variant: a(n) = a(n-1) × (a(n-1) + 1). 42 × 43 = 1806." },
            { q: "Find the next term: 0, 6, 24, 60, 120, 210, ?", opts: ["336", "343", "350", "320"], ans: "A", exp: "Pattern: n^3 - n. For n=7: 7^3 - 7 = 343 - 7 = 336." },
            { q: "Find missing: 2, 12, 36, 80, 150, ?", opts: ["252", "240", "260", "272"], ans: "A", exp: "Pattern: n^3 + n^2. For n=6: 6^3 + 6^2 = 216 + 36 = 252." },
            { q: "Complex sequence: 1, 5, 14, 30, 55, 91, ?", opts: ["140", "136", "145", "150"], ans: "A", exp: "Sum of first n squares: 91 + 7^2 = 91 + 49 = 140." },
            { q: "Nonlinear sequence: 3, 8, 22, 63, 185, ?", opts: ["550", "555", "545", "560"], ans: "A", exp: "Pattern: ×3 - 1, ×3 - 2, ×3 - 3, ×3 - 4, ×3 - 5 -> 185 × 3 - 5 = 555 - 5 = 550." }
        ]
    },
    "dices": {
        level1: [
            { q: "On a standard die, what number is opposite to 1?", opts: ["6", "5", "4", "3"], ans: "A", exp: "On a standard die, sum of opposite faces is 7. Opposite to 1 is 7 - 1 = 6." },
            { q: "On a standard die, what number is opposite to 2?", opts: ["5", "6", "4", "3"], ans: "A", exp: "Sum of opposite faces = 7. 7 - 2 = 5." },
            { q: "On a standard die, what number is opposite to 3?", opts: ["4", "5", "6", "2"], ans: "A", exp: "Sum of opposite faces = 7. 7 - 3 = 4." },
            { q: "How many total faces, edges, and vertices does a standard cube have?", opts: ["6 faces, 12 edges, 8 vertices", "6 faces, 8 edges, 12 vertices", "8 faces, 12 edges, 6 vertices", "6 faces, 10 edges, 8 vertices"], ans: "A", exp: "A cube has 6 square faces, 12 edges, and 8 vertices." },
            { q: "If face 4 is at the top of a standard die, which number is at the bottom?", opts: ["3", "5", "6", "2"], ans: "A", exp: "Opposite to 4 is 7 - 4 = 3." }
        ],
        level2: [
            { q: "Two positions of a dice are shown with numbers 1, 2, 3 and 1, 4, 5. Which number is opposite to 1?", opts: ["6", "2", "3", "4"], ans: "A", exp: "1 is adjacent to 2, 3, 4, 5. The only remaining face that can be opposite to 1 is 6." },
            { q: "A dice shows faces 3, 5, 2 in position 1, and 3, 1, 4 in position 2. Which number is opposite to 5?", opts: ["1", "4", "2", "6"], ans: "A", exp: "Rotate clockwise from common face 3: 3 -> 5 -> 2 and 3 -> 1 -> 4. Opposite pairs: 5 <-> 1, 2 <-> 4." },
            { q: "In an unfolded dice net: 1 is top, 2 is middle, 3 is bottom, with 4 and 5 on left and right wings, and 6 attached to bottom. Which face is opposite to 2?", opts: ["6", "4", "5", "3"], ans: "A", exp: "Alternating faces in a straight net are opposite: 1 is opposite 3, 2 is opposite 6." },
            { q: "If numbers 1 to 6 are on a die and 1 is adjacent to 2, 3, 4, and 6, which number is opposite to 1?", opts: ["5", "6", "2", "4"], ans: "A", exp: "Since 1 touches 2, 3, 4, and 6, the only untouched opposite face is 5." },
            { q: "Two dice are rolled simultaneously. What is the probability that the sum of the faces is 7?", opts: ["6/36 = 1/6", "5/36", "7/36", "1/12"], ans: "A", exp: "Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. 6/36 = 1/6." }
        ],
        level3: [
            { q: "Three different views of a dice show: View 1 (1,2,3), View 2 (1,3,5), View 3 (2,3,6). What number is opposite to 3?", opts: ["4", "5", "6", "1"], ans: "A", exp: "Face 3 is adjacent to 1, 2, 5, 6. The only remaining face that must be opposite 3 is 4." },
            { q: "A large cube of 3×3×3 is painted red on all sides and cut into 27 small 1×1×1 cubes. How many small cubes have exactly 2 faces painted?", opts: ["12 cubes", "8 cubes", "6 cubes", "1 cube"], ans: "A", exp: "Cubes with 2 faces painted lie along the edges (excluding corners): 12 edges × (3 - 2) = 12 cubes." },
            { q: "In the 3×3×3 painted cube cut into 27 cubes, how many cubes have NO faces painted?", opts: ["1 cube", "0 cubes", "8 cubes", "6 cubes"], ans: "A", exp: "Inner unpainted cubes = (n - 2)^3 = (3 - 2)^3 = 1^3 = 1 cube." },
            { q: "How many cubes have exactly 3 faces painted in any n×n×n painted cube?", opts: ["8 cubes (the corners)", "12 cubes", "6 cubes", "4 cubes"], ans: "A", exp: "Only the 8 corner vertices have 3 painted faces, regardless of size n." },
            { q: "How many cubes have exactly 1 face painted in a 3×3×3 cube cut into 27 cubes?", opts: ["6 cubes", "8 cubes", "12 cubes", "9 cubes"], ans: "A", exp: "1-face painted cubes lie at the center of the 6 faces: 6 × (3 - 2)^2 = 6 × 1 = 6 cubes." }
        ],
        level4: [
            { q: "A 4×4×4 wooden cube is painted blue on opposite faces, red on another pair of opposite faces, and green on the remaining faces. It is cut into 64 unit cubes. How many unit cubes have at least one face painted red and one face painted green?",
              opts: ["16 cubes", "8 cubes", "24 cubes", "12 cubes"],
              ans: "A",
              exp: "These cubes lie along the 4 edges where a red face meets a green face. Each edge has 4 cubes, yielding 4 × 4 = 16 cubes."
            },
            { q: "A cube of 5×5×5 is cut into 125 small cubes. How many cubes have at least 2 faces painted?",
              opts: ["44 cubes", "36 cubes", "48 cubes", "54 cubes"],
              ans: "A",
              exp: "At least 2 faces = (3 faces) + (2 faces) = 8 corners + 12 edges × (5 - 2) = 8 + 36 = 44 cubes."
            },
            { q: "How many distinct colorings of a standard 6-faced cube exist using 6 distinct colors, up to rotational symmetry?",
              opts: ["30 colorings", "720 colorings", "60 colorings", "120 colorings"],
              ans: "A",
              exp: "By Burnside's Lemma: Total permutations = 6! = 720. Rotational symmetry group of cube has 24 elements. Distinct colorings = 720 / 24 = 30."
            },
            { q: "In an unfolded cross net of a cube, if two opposite corners are pulled together, what geometric angle do their normal vectors form in 3D?",
              opts: ["90°", "180°", "60°", "45°"],
              ans: "A",
              exp: "Adjacent orthogonal faces fold at exactly 90° right angles."
            },
            { q: "A cuboid of dimensions 4 cm × 5 cm × 6 cm is painted and cut into 1 cm cubes. How many cubes have no paint at all?",
              opts: ["24 cubes", "30 cubes", "18 cubes", "36 cubes"],
              ans: "A",
              exp: "Unpainted inner volume = (4 - 2) × (5 - 2) × (6 - 2) = 2 × 3 × 4 = 24 cubes."
            }
        ]
    }
};

const LOGICAL_POOLS_MAP = {
    "clocks": CLOCKS_POOLS,
    "calendar": CALENDAR_POOLS,
    "blood-relation": BLOOD_RELATION_POOLS,
    "analogy": ANALOGY_POOLS,
    "coding-decoding": CODING_POOLS,
    "syllogism": SYLLOGISM_POOLS,
    "direction-sense": DIRECTION_POOLS,
    "seating-arrangement": SEATING_POOLS,
    "series-completion": GENERIC_LOGICAL_POOLS["series-completion"],
    "dices": GENERIC_LOGICAL_POOLS["dices"],
    "puzzles": SEATING_POOLS,
    "data-sufficiency": SYLLOGISM_POOLS,
    "assumptions-conclusions": SYLLOGISM_POOLS,
    "cube-and-cuboid": GENERIC_LOGICAL_POOLS["dices"]
};

export function getLogicalQuestions(topic, type, setNumber) {
    const questions = [];
    const pool = LOGICAL_POOLS_MAP[topic.topicId] || CLOCKS_POOLS;

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
        // Mock Assessment: Progressive mixed blend across all logical categories
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

            const base = tierPool[(i - 1) % tierPool.length];
            const qId = `${topic.topicId}-${type}-s${setNumber}-q${i}`;
            questions.push(createQuestionItem(qId, topic, type, setNumber, i, base, difficultyTier));
        }
    }

    return questions;
}
