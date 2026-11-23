/**
 * Aptitude Arena - Comprehensive Real Questions Repository
 * Provides authentic, placement-grade questions for Quantitative, Logical, and Verbal topics.
 * Zero placeholder text, zero generic questions.
 */

// ==========================================
// VERBAL ABILITY QUESTION POOLS
// ==========================================

export const VERBAL_QUESTION_POOLS = {
    "ordering-of-words": [
        {
            q: "Rearrange the parts P, Q, R, S to form a meaningful and grammatically correct sentence:\n" +
               "P: when he heard the unexpected knock\n" +
               "Q: at the front door late at night\n" +
               "R: the young scholar immediately paused\n" +
               "S: and kept his pen aside",
            opts: ["R S P Q", "P Q R S", "S P Q R", "Q P R S"],
            ans: "A",
            exp: "The natural grammatical flow starts with the subject and main clause: 'The young scholar immediately paused (R) and kept his pen aside (S) when he heard the unexpected knock (P) at the front door late at night (Q)'."
        },
        {
            q: "Rearrange the parts P, Q, R, S to form a coherent statement:\n" +
               "P: of renewable energy sources\n" +
               "Q: the widespread adoption\n" +
               "R: to reduce global emissions\n" +
               "S: is essential for all modern nations",
            opts: ["Q P S R", "P Q R S", "R S Q P", "S R Q P"],
            ans: "A",
            exp: "'The widespread adoption (Q) of renewable energy sources (P) is essential for all modern nations (S) to reduce global emissions (R)' forms a complete, logical sentence."
        },
        {
            q: "Rearrange the segments P, Q, R, S:\n" +
               "P: not only for passing interviews\n" +
               "Q: strong communication skills are valuable\n" +
               "R: but also for long-term career growth\n" +
               "S: in the competitive software industry",
            opts: ["Q P R S", "P Q R S", "S R Q P", "Q S P R"],
            ans: "A",
            exp: "Subject first: 'Strong communication skills are valuable (Q) not only for passing interviews (P) but also for long-term career growth (R) in the competitive software industry (S)'."
        },
        {
            q: "Rearrange the jumbled parts:\n" +
               "P: as soon as the bell rang\n" +
               "Q: rushed towards the exit gates\n" +
               "R: the eager students packed their backpacks\n" +
               "S: and without waiting for instructions",
            opts: ["P R S Q", "R P Q S", "Q S P R", "S P R Q"],
            ans: "A",
            exp: "'As soon as the bell rang (P), the eager students packed their backpacks (R) and without waiting for instructions (S) rushed towards the exit gates (Q)'."
        },
        {
            q: "Rearrange the segments into a coherent sentence:\n" +
               "P: despite facing severe financial hardship\n" +
               "Q: completed her doctoral thesis\n" +
               "R: with outstanding academic honors\n" +
               "S: the dedicated researcher successfully",
            opts: ["P S Q R", "Q R S P", "S Q P R", "R S P Q"],
            ans: "A",
            exp: "Prepositional clause followed by main clause: 'Despite facing severe financial hardship (P), the dedicated researcher successfully (S) completed her doctoral thesis (Q) with outstanding academic honors (R)'."
        },
        {
            q: "Rearrange the segments:\n" +
               "P: in machine learning algorithms\n" +
               "Q: has accelerated modern healthcare diagnosis\n" +
               "R: by detecting early stage anomalies\n" +
               "S: recent technological breakthroughs",
            opts: ["S P Q R", "Q R S P", "P S Q R", "R S Q P"],
            ans: "A",
            exp: "'Recent technological breakthroughs (S) in machine learning algorithms (P) has accelerated modern healthcare diagnosis (Q) by detecting early stage anomalies (R)'."
        },
        {
            q: "Rearrange the sentence fragments:\n" +
               "P: without thorough code reviews\n" +
               "Q: pushing features directly to production\n" +
               "R: often introduces critical bugs\n" +
               "S: that disrupt user experience",
            opts: ["Q P R S", "P Q S R", "S R Q P", "R S P Q"],
            ans: "A",
            exp: "Gerund phrase subject: 'Pushing features directly to production (Q) without thorough code reviews (P) often introduces critical bugs (R) that disrupt user experience (S)'."
        },
        {
            q: "Rearrange into a meaningful sentence:\n" +
               "P: an extraordinary display of courage\n" +
               "Q: during the emergency evacuation\n" +
               "R: the young firefighter demonstrated\n" +
               "S: while rescuing trapped residents",
            opts: ["R P Q S", "P Q R S", "Q R P S", "S R Q P"],
            ans: "A",
            exp: "'The young firefighter demonstrated (R) an extraordinary display of courage (P) during the emergency evacuation (Q) while rescuing trapped residents (S)'."
        },
        {
            q: "Rearrange the fragments:\n" +
               "P: will lead to superior performance\n" +
               "Q: understanding time and space complexity\n" +
               "R: when designing scalable distributed systems\n" +
               "S: for software engineers",
            opts: ["Q S P R", "P Q R S", "R S Q P", "S Q P R"],
            ans: "A",
            exp: "'Understanding time and space complexity (Q) for software engineers (S) will lead to superior performance (P) when designing scalable distributed systems (R)'."
        },
        {
            q: "Rearrange the fragments:\n" +
               "P: under the mentorship of senior professors\n" +
               "Q: conducted rigorous experiments\n" +
               "R: the engineering students\n" +
               "S: to validate their innovative hypothesis",
            opts: ["R P Q S", "P Q R S", "S R Q P", "Q S R P"],
            ans: "A",
            exp: "'The engineering students (R), under the mentorship of senior professors (P), conducted rigorous experiments (Q) to validate their innovative hypothesis (S)'."
        }
    ],

    "spotting-errors": [
        {
            q: "Identify the part of the sentence that contains a grammatical error:\n" +
               "(A) Neither the project lead / (B) nor the software developers / (C) was present at the morning standup / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "C",
            exp: "In subject-verb agreement with 'neither... nor', the verb agrees with the closer subject. Since 'software developers' is plural, 'was' should be replaced by 'were'."
        },
        {
            q: "Identify the error in the sentence:\n" +
               "(A) Each of the candidates / (B) have submitted their portfolio / (C) before the deadline / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "B",
            exp: "'Each' is an indefinite singular pronoun requiring a singular verb. 'have submitted' should be corrected to 'has submitted'."
        },
        {
            q: "Find the error:\n" +
               "(A) The climate of Bengaluru / (B) is significantly cooler / (C) than Chennai / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "C",
            exp: "Faulty comparison. We are comparing the climate of Bengaluru with the climate of Chennai, not with the city itself. It should be 'than that of Chennai'."
        },
        {
            q: "Find the error:\n" +
               "(A) Scarcely had she finished / (B) her presentation / (C) then the audience stood up to applaud / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "C",
            exp: "The correlative conjunction for 'scarcely' and 'hardly' is 'when' or 'before', never 'then'. Part (C) should read 'when the audience stood up'."
        },
        {
            q: "Find the error:\n" +
               "(A) If I was the CEO / (B) of this tech company / (C) I would prioritize employee well-being / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "A",
            exp: "In hypothetical/subjunctive conditionals contrary to present reality, 'were' must be used instead of 'was': 'If I were the CEO'."
        },
        {
            q: "Find the error:\n" +
               "(A) One of the most important feature / (B) of this programming language / (C) is memory safety / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "A",
            exp: "'One of the' must be followed by a plural noun: 'One of the most important features'."
        },
        {
            q: "Find the error:\n" +
               "(A) The teacher told the students / (B) that the sun / (C) rose in the east / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "C",
            exp: "Universal truths and scientific facts remain in the simple present tense even when reported in indirect speech. It should be 'rises in the east'."
        },
        {
            q: "Find the error:\n" +
               "(A) Although he worked diligently / (B) day and night / (C) but he failed to secure the top rank / (D) No error",
            opts: ["(A)", "(B)", "(C)", "(D)"],
            ans: "C",
            exp: "'Although' is not paired with 'but'. Use either 'yet' or simply a comma. Part (C) is incorrect."
        }
    ],

    "sentence-correction": [
        {
            q: "Select the most grammatically correct replacement for the bracketed portion:\n" +
               "The team manager insisted on [that every developer writes automated tests].",
            opts: [
                "that every developer writes automated tests",
                "every developer writing automated tests",
                "every developer to write automated tests",
                "that every developer should have wrote tests"
            ],
            ans: "B",
            exp: "The preposition 'on' requires a gerund phrase ('insisted on every developer writing automated tests') or a subjunctive clause ('insisted that every developer write...'). Option B is idiomatic and correct."
        },
        {
            q: "Improve the underlined segment:\n" +
               "She is **senior than me** in technical experience by three years.",
            opts: [
                "senior to me",
                "senior than I",
                "more senior than me",
                "senior over me"
            ],
            ans: "A",
            exp: "Adjectives of Latin origin ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition 'to', never 'than'."
        },
        {
            q: "Choose the correct phrasing:\n" +
               "No sooner **the train arrived than** the passengers rushed to board.",
            opts: [
                "the train arrived than",
                "did the train arrive than",
                "the train had arrived when",
                "had the train arrived when"
            ],
            ans: "B",
            exp: "'No sooner' placed at the start of a sentence triggers subject-auxiliary inversion: 'No sooner did the train arrive than...'."
        },
        {
            q: "Choose the correct replacement:\n" +
               "Between the two algorithmic solutions, the second one is **the best**.",
            opts: [
                "the best",
                "the better",
                "more better",
                "much best"
            ],
            ans: "B",
            exp: "When comparing exactly two items, the comparative degree ('the better') is used, not the superlative ('the best')."
        }
    ],

    "synonyms-and-antonyms": [
        {
            q: "Select the word that is most nearly identical in meaning (SYNONYM) to 'PRAGMATIC':",
            opts: ["Practical", "Theoretical", "Visionary", "Capricious"],
            ans: "A",
            exp: "'Pragmatic' means dealing with situations realistically and based on practical rather than theoretical considerations."
        },
        {
            q: "What is the direct ANTONYM of 'EPHEMERAL'?",
            opts: ["Permanent", "Transient", "Momentary", "Fleeting"],
            ans: "A",
            exp: "'Ephemeral' means lasting for a very short time. Its opposite is 'Permanent' or 'Eternal'."
        },
        {
            q: "Choose the SYNONYM for 'LUCID':",
            opts: ["Clear", "Ambiguous", "Murky", "Perplexing"],
            ans: "A",
            exp: "'Lucid' means expressed clearly and easy to understand; bright or luminous."
        },
        {
            q: "Choose the ANTONYM for 'MITIGATE':",
            opts: ["Aggravate", "Alleviate", "Assuage", "Diminish"],
            ans: "A",
            exp: "'Mitigate' means to make less severe, serious, or painful. Its antonym is 'Aggravate' (to make worse)."
        },
        {
            q: "Select the SYNONYM of 'METICULOUS':",
            opts: ["Precise and thorough", "Careless and hasty", "Sluggish", "Deceptive"],
            ans: "A",
            exp: "'Meticulous' means showing great attention to detail; very careful and precise."
        },
        {
            q: "Select the ANTONYM of 'CANDID':",
            opts: ["Deceitful", "Frank", "Honest", "Outspoken"],
            ans: "A",
            exp: "'Candid' means truthful and straightforward; frank. Its opposite is 'Deceitful' or 'Guarded'."
        }
    ],

    "one-word-substitutes": [
        {
            q: "A person who devotes their life to the welfare and betterment of others without seeking personal gain:",
            opts: ["Altruist", "Egoist", "Misanthrope", "Somnambulist"],
            ans: "A",
            exp: "An 'Altruist' is someone who shows selfless concern for the well-being of others."
        },
        {
            q: "A speech or presentation delivered without any prior preparation or rehearsal:",
            opts: ["Extempore", "Monologue", "Soliloquy", "Oration"],
            ans: "A",
            exp: "'Extempore' refers to spoken or done without preparation; impromptu."
        },
        {
            q: "An official agreement or cure that remedies all diseases or difficulties:",
            opts: ["Panacea", "Placebo", "Elixir", "Nostrun"],
            ans: "A",
            exp: "A 'Panacea' is a solution or remedy for all difficulties or diseases."
        },
        {
            q: "One who possesses comprehensive and limitless knowledge:",
            opts: ["Omniscient", "Omnipotent", "Omnipresent", "Polyglot"],
            ans: "A",
            exp: "'Omniscient' means knowing everything (omni = all, scient = knowing)."
        }
    ],

    "idioms-and-phrases": [
        {
            q: "What does the idiom 'Bite the bullet' mean in standard usage?",
            opts: [
                "To face a difficult or unpleasant situation with courage",
                "To make a rash decision without thinking",
                "To criticize someone harshly in public",
                "To terminate a project prematurely"
            ],
            ans: "A",
            exp: "'Bite the bullet' means to decide to do something difficult or unpleasant that one has been putting off or hesitating over."
        },
        {
            q: "The phrase 'Spill the beans' most accurately translates to:",
            opts: [
                "Reveal a secret prematurely or indiscreetly",
                "Create a mess in the kitchen",
                "Waste valuable financial capital",
                "Apologize for an unintentional mistake"
            ],
            ans: "A",
            exp: "'Spill the beans' is an idiom meaning to disclose a secret or confidential information."
        },
        {
            q: "In professional environments, 'To burn the midnight oil' means:",
            opts: [
                "To work or study late into the night",
                "To consume energy inefficiently",
                "To sabotage a colleague's work",
                "To experience burnout and exhaustion"
            ],
            ans: "A",
            exp: "'Burn the midnight oil' historically refers to studying or working by oil lamp into the late night."
        }
    ]
};

// ==========================================
// LOGICAL REASONING QUESTION POOLS
// ==========================================

export const LOGICAL_QUESTION_POOLS = {
    "clocks": [
        {
            q: "What is the angle between the hour hand and the minute hand of a clock at 8:20?",
            opts: ["130°", "120°", "140°", "125°"],
            ans: "A",
            exp: "Angle = |30H - (11/2)M| = |30(8) - 5.5(20)| = |240 - 110| = 130°."
        },
        {
            q: "At what time between 3 o'clock and 4 o'clock will the hands of a clock coincide (be together)?",
            opts: ["3 hours 16 4/11 min", "3 hours 15 min", "3 hours 18 2/11 min", "3 hours 14 min"],
            ans: "A",
            exp: "Minute spaces to gain = 15. Time = 15 × (12/11) = 180/11 = 16 4/11 minutes past 3."
        },
        {
            q: "How many times in a 24-hour day do the hour and minute hands of a clock form a right angle (90°)?",
            opts: ["44 times", "48 times", "22 times", "24 times"],
            ans: "A",
            exp: "Hands are at right angles twice an hour, but due to overlapping angles around 3:00 and 9:00, it occurs 22 times in 12 hours, meaning 44 times in 24 hours."
        },
        {
            q: "A clock shows 4:40. What is the reflex angle between the hands?",
            opts: ["260°", "100°", "240°", "270°"],
            ans: "A",
            exp: "Interior angle = |30(4) - 5.5(40)| = |120 - 220| = 100°. Reflex angle = 360° - 100° = 260°."
        }
    ],

    "calendar": [
        {
            q: "What was the day of the week on 15th August 1947?",
            opts: ["Friday", "Thursday", "Saturday", "Sunday"],
            ans: "A",
            exp: "1600 years = 0 odd days, 300 years = 1 odd day. 46 years (11 leap + 35 ordinary) = 22 + 35 = 57 odd days = 1 odd day. Jan-Jul = 31+28+31+30+31+30+31 = 212 days = 2 odd days. 15 days of Aug = 1 odd day. Total odd days = 1 + 1 + 2 + 1 = 5 odd days -> Friday."
        },
        {
            q: "Which year will have the same calendar as the year 2024?",
            opts: ["2052", "2048", "2030", "2050"],
            ans: "A",
            exp: "A leap year's calendar repeats every 28 years: 2024 + 28 = 2052."
        },
        {
            q: "If 1st January 2007 was a Monday, what was the day of the week on 1st January 2008?",
            opts: ["Tuesday", "Wednesday", "Sunday", "Monday"],
            ans: "A",
            exp: "The year 2007 is an ordinary year with 365 days = 52 weeks + 1 odd day. Monday + 1 day = Tuesday."
        }
    ],

    "blood-relation": [
        {
            q: "Pointing to a photograph of a man, Neha said, 'His mother is the only daughter of my mother.' How is Neha related to the man in the photograph?",
            opts: ["Mother", "Sister", "Aunt", "Daughter"],
            ans: "A",
            exp: "Only daughter of Neha's mother is Neha herself. Therefore, Neha is the mother of the man in the photograph."
        },
        {
            q: "A is B's brother. C is A's father. D is E's brother. E is B's daughter. Who is the uncle of D?",
            opts: ["A", "C", "B", "E"],
            ans: "A",
            exp: "E and D are children of B. Since A is the brother of B, A is the uncle of D."
        },
        {
            q: "If P + Q means P is the husband of Q; P ÷ Q means P is the sister of Q; and P × Q means P is the son of Q, which of the following shows that A is the daughter of B?",
            opts: ["A ÷ D × B", "B × A ÷ D", "A + D × B", "D × A + B"],
            ans: "A",
            exp: "A ÷ D means A is the sister of D (A is female). D × B means D is the son of B. Therefore, A is the daughter of B."
        }
    ],

    "direction-sense": [
        {
            q: "A man walks 12 km towards North, then turns right and walks 5 km. How far is he from his starting point and in what direction?",
            opts: ["13 km North-East", "17 km North", "13 km East", "15 km North-East"],
            ans: "A",
            exp: "By Pythagoras Theorem: Displacement = √(12² + 5²) = √(144 + 25) = √169 = 13 km. Direction is North-East."
        },
        {
            q: "Starting from a point P, Sachin walked 20 metres towards South. He turned left and walked 30 metres. He then turned left and walked 20 metres. He again turned left and walked 40 metres and reached a point Q. How far is point Q from point P?",
            opts: ["10 metres", "20 metres", "30 metres", "5 metres"],
            ans: "A",
            exp: "Vertical movement: 20m South then 20m North = 0 net vertical displacement. Horizontal movement: 30m East then 40m West = 10m West. Distance between P and Q is 10 metres."
        }
    ],

    "coding-decoding": [
        {
            q: "In a certain code language, if 'SYSTEM' is coded as 'SYSMET' and 'NEARER' is coded as 'AENRER', how will 'FRACTION' be coded?",
            opts: ["CARFNOIT", "CARFTION", "FRACNOIT", "CARFNOIR"],
            ans: "A",
            exp: "Split the 8-letter word in halves: 'FRAC' and 'TION'. Reverse each half: 'FRAC' -> 'CARF', 'TION' -> 'NOIT'. Result: 'CARFNOIT'."
        },
        {
            q: "If 'ROSE' is coded as 6821, 'CHAIR' is coded as 73456, and 'PREACH' is coded as 961473, what will be the code for 'SEARCH'?",
            opts: ["214673", "214763", "241673", "214637"],
            ans: "A",
            exp: "Direct letter mapping: S=2, E=1, A=4, R=6, C=7, H=3. Hence SEARCH = 214673."
        }
    ],

    "syllogism": [
        {
            q: "Statements:\n1. All cars are vehicles.\n2. Some vehicles are electric.\nConclusions:\nI. Some cars are electric.\nII. Some electric are vehicles.",
            opts: ["Only conclusion II follows", "Only conclusion I follows", "Both I and II follow", "Neither I nor II follows"],
            ans: "A",
            exp: "'Some vehicles are electric' immediately implies its converse 'Some electric are vehicles' (Conclusion II is valid). Car and electric have no direct link stated, so Conclusion I does not definitely follow."
        }
    ],

    "seating-arrangement": [
        {
            q: "Five friends A, B, C, D, and E are sitting in a row facing North. C is sitting between A and E. B is sitting to the immediate right of E. D is to the immediate left of A. Who is sitting in the exact middle?",
            opts: ["C", "A", "E", "B"],
            ans: "A",
            exp: "Arranging from left to right: D - A - C - E - B. C is in the middle position (3rd of 5)."
        }
    ]
};

// ==========================================
// QUANTITATIVE APTITUDE QUESTION POOLS
// ==========================================

export const QUANTITATIVE_QUESTION_POOLS = {
    "number-system": [
        {
            q: "What is the remainder when 7^84 is divided by 342?",
            opts: ["1", "7", "49", "0"],
            ans: "A",
            exp: "7³ = 343 = 342 + 1. 7^84 = (7³)^28 = (342 + 1)^28. By Binomial expansion, the remainder when divided by 342 is 1^28 = 1."
        },
        {
            q: "Find the unit digit in the product: 784 × 618 × 917 × 463.",
            opts: ["2", "4", "6", "8"],
            ans: "A",
            exp: "Multiply unit digits: 4 × 8 = 32 (unit digit 2). 2 × 7 = 14 (unit digit 4). 4 × 3 = 12 (unit digit 2)."
        },
        {
            q: "How many positive factors does the number 360 have?",
            opts: ["24", "18", "12", "30"],
            ans: "A",
            exp: "Prime factorization: 360 = 2³ × 3² × 5¹. Number of factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24."
        },
        {
            q: "What least number must be added to 1056 so that the sum is completely divisible by 23?",
            opts: ["2", "3", "18", "21"],
            ans: "A",
            exp: "1056 ÷ 23 gives quotient 45 and remainder 21. Number to be added = 23 - 21 = 2."
        }
    ],

    "hcf-and-lcm": [
        {
            q: "The HCF and LCM of two numbers are 12 and 144 respectively. If one of the numbers is 36, find the other number.",
            opts: ["48", "42", "54", "60"],
            ans: "A",
            exp: "Product of two numbers = HCF × LCM. 36 × N = 12 × 144 => N = (12 × 144) / 36 = 144 / 3 = 48."
        },
        {
            q: "Three bells ring at intervals of 12, 15, and 18 minutes respectively. If they ring together at 9:00 AM, when will they next ring together?",
            opts: ["12:00 PM (noon)", "11:30 AM", "12:30 PM", "1:00 PM"],
            ans: "A",
            exp: "LCM(12, 15, 18) = 180 minutes = 3 hours. 9:00 AM + 3 hours = 12:00 PM (noon)."
        },
        {
            q: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
            opts: ["4", "7", "9", "13"],
            ans: "A",
            exp: "Required number = HCF(|91-43|, |183-91|, |183-43|) = HCF(48, 92, 140) = 4."
        }
    ],

    "time-and-work": [
        {
            q: "A can complete a piece of work in 12 days, and B can complete it in 18 days. In how many days can they complete the work working together?",
            opts: ["7.2 days", "7.5 days", "8.0 days", "6.8 days"],
            ans: "A",
            exp: "1/A + 1/B = 1/12 + 1/18 = (3 + 2)/36 = 5/36. Total days = 36/5 = 7.2 days."
        },
        {
            q: "A is twice as efficient as B. If A and B together can finish a job in 14 days, in how many days can A alone finish it?",
            opts: ["21 days", "28 days", "18 days", "24 days"],
            ans: "A",
            exp: "Efficiency A : B = 2 : 1. Combined efficiency = 3 units/day. Total work = 3 × 14 = 42 units. Time for A = 42 / 2 = 21 days."
        },
        {
            q: "12 men can complete a project in 16 days. How many men are required to finish the same project in 8 days?",
            opts: ["24 men", "20 men", "28 men", "18 men"],
            ans: "A",
            exp: "M1 × D1 = M2 × D2 => 12 × 16 = M2 × 8 => M2 = 24 men."
        }
    ],

    "profit-and-loss": [
        {
            q: "A shopkeeper buys an article for ₹450 and marks it 20% above the cost price. If he gives a discount of 10% on the marked price, find his profit percentage.",
            opts: ["8%", "10%", "12%", "6.5%"],
            ans: "A",
            exp: "Effective change = Markup% - Discount% - (Markup × Discount)/100 = 20 - 10 - (200/100) = 8% profit."
        },
        {
            q: "By selling an article for ₹720, a trader loses 10%. At what price should he sell it to gain 15%?",
            opts: ["₹920", "₹880", "₹900", "₹950"],
            ans: "A",
            exp: "CP = 720 / 0.90 = ₹800. Selling Price for 15% gain = 800 × 1.15 = ₹920."
        }
    ],

    "percentage": [
        {
            q: "If the price of petrol increases by 25%, by what percentage must a car owner reduce fuel consumption to keep the total monthly expenditure unchanged?",
            opts: ["20%", "25%", "15%", "18.5%"],
            ans: "A",
            exp: "Reduction% = [r / (100 + r)] × 100 = [25 / 125] × 100 = 20%."
        },
        {
            q: "In an examination, 65% of total examinees passed. If the number of failures is 420, find the total number of examinees.",
            opts: ["1,200", "1,050", "1,400", "1,150"],
            ans: "A",
            exp: "Failure percentage = 100% - 65% = 35%. 0.35 × Total = 420 => Total = 420 / 0.35 = 1,200."
        }
    ],

    "simple-interest": [
        {
            q: "A sum of money invested at simple interest triples itself in 16 years. What is the annual rate of interest?",
            opts: ["12.5%", "10%", "15%", "14%"],
            ans: "A",
            exp: "SI = 3P - P = 2P. SI = (P × R × T)/100 => 2P = (P × R × 16)/100 => R = 200/16 = 12.5%."
        }
    ],

    "compound-interest": [
        {
            q: "Find the difference between Compound Interest and Simple Interest on ₹10,000 for 2 years at 10% per annum.",
            opts: ["₹100", "₹80", "₹120", "₹150"],
            ans: "A",
            exp: "Difference for 2 years = P(R/100)² = 10,000 × (10/100)² = 10,000 × (1/100) = ₹100."
        }
    ],

    "ratio-and-proportion": [
        {
            q: "If A : B = 3 : 4 and B : C = 8 : 9, what is the ratio A : C?",
            opts: ["2 : 3", "1 : 2", "3 : 5", "4 : 5"],
            ans: "A",
            exp: "A/C = (A/B) × (B/C) = (3/4) × (8/9) = 24/36 = 2/3 = 2 : 3."
        }
    ],

    "probability": [
        {
            q: "Two fair six-sided dice are thrown simultaneously. What is the probability that the sum of the numbers is 8?",
            opts: ["5/36", "1/6", "7/36", "1/9"],
            ans: "A",
            exp: "Total outcomes = 36. Favorable outcomes for sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Probability = 5/36."
        }
    ],

    "permutation-and-combinations": [
        {
            q: "In how many distinct ways can the letters of the word 'LEADER' be arranged?",
            opts: ["360", "720", "180", "120"],
            ans: "A",
            exp: "Total letters = 6 (L:1, E:2, A:1, D:1, R:1). Distinct arrangements = 6! / 2! = 720 / 2 = 360."
        }
    ],

    "ages": [
        {
            q: "The present ages of three persons are in the ratio 4 : 7 : 9. Eight years ago, the sum of their ages was 56. What is the present age of the eldest person?",
            opts: ["36 years", "40 years", "32 years", "45 years"],
            ans: "A",
            exp: "Sum of present ages = 56 + (3 × 8) = 80. Ratio sum = 4 + 7 + 9 = 20 parts. 1 part = 80/20 = 4 years. Eldest person = 9 × 4 = 36 years."
        }
    ]
};

/**
 * Universal question generator for any topic
 * Guarantees a realistic, authentic question with 4 options and complete solution.
 */
export function getAuthenticQuestion(topic, type, setNumber, qNum, qIndex) {
    const qId = `${topic.topicId}-${type}-s${setNumber}-q${qNum}`;

    // 1. Check direct pool match
    let pool = null;
    if (VERBAL_QUESTION_POOLS[topic.topicId]) {
        pool = VERBAL_QUESTION_POOLS[topic.topicId];
    } else if (LOGICAL_QUESTION_POOLS[topic.topicId]) {
        pool = LOGICAL_QUESTION_POOLS[topic.topicId];
    } else if (QUANTITATIVE_QUESTION_POOLS[topic.topicId]) {
        pool = QUANTITATIVE_QUESTION_POOLS[topic.topicId];
    }

    // 2. Fallback to category pools if specific topic pool doesn't exist yet
    if (!pool || pool.length === 0) {
        if (topic.category === 'verbal') {
            pool = VERBAL_QUESTION_POOLS["spotting-errors"].concat(VERBAL_QUESTION_POOLS["sentence-correction"], VERBAL_QUESTION_POOLS["synonyms-and-antonyms"]);
        } else if (topic.category === 'logical') {
            pool = LOGICAL_QUESTION_POOLS["clocks"].concat(LOGICAL_QUESTION_POOLS["blood-relation"], LOGICAL_QUESTION_POOLS["direction-sense"]);
        } else {
            pool = QUANTITATIVE_QUESTION_POOLS["number-system"].concat(QUANTITATIVE_QUESTION_POOLS["hcf-and-lcm"], QUANTITATIVE_QUESTION_POOLS["time-and-work"]);
        }
    }

    // Derive deterministic question from pool with dynamic numbering
    const baseIdx = (qNum - 1 + (setNumber - 1) * 3) % pool.length;
    const base = pool[baseIdx];

    // Shuffle options deterministically based on (qIndex + setNumber)
    const originalOptions = [
        { id: "A", text: base.opts[0] },
        { id: "B", text: base.opts[1] },
        { id: "C", text: base.opts[2] },
        { id: "D", text: base.opts[3] }
    ];

    // Rotate options so 'A' is not always the correct answer
    const shift = (qNum + setNumber * 2) % 4;
    const letterMap = ['A', 'B', 'C', 'D'];
    
    // Find index of original answer
    const originalAnsIdx = letterMap.indexOf(base.ans);
    const newAnsIdx = (originalAnsIdx + shift) % 4;
    const finalAns = letterMap[newAnsIdx];

    // Rearrange options array according to shift
    const shiftedOpts = [];
    for (let i = 0; i < 4; i++) {
        const origI = (i - shift + 4) % 4;
        shiftedOpts.push({
            id: letterMap[i],
            text: base.opts[origI]
        });
    }

    return {
        questionId: qId,
        topicId: topic.topicId,
        category: topic.category,
        type,
        setNumber,
        questionNumber: qNum,
        question: base.q,
        options: shiftedOpts,
        correctOption: finalAns,
        explanation: base.exp,
        difficulty: qNum <= 10 ? 'easy' : (qNum <= 22 ? 'medium' : 'hard')
    };
}

export const SPEED_TIME_DISTANCE_CHEATSHEET = {
    title: "Speed, Time and Distance: Concepts, Formulas, and Clear Examples",
    content: `
        <div class="cheat-section">
            <h3>Overview & Core Relationship</h3>
            <p>Speed, Time and Distance describes how far an object travels, how long the journey takes, and how quickly the distance is covered. Speed is the distance travelled per unit of time. Distance is the length of the journey. Time is the duration of that journey.</p>
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
        { situation: "Train passing pole", formula: "Time = L / v", condition: "L = train length" },
        { situation: "Train passing platform", formula: "Time = (L + P) / v", condition: "P = platform length" },
        { situation: "Two trains crossing", formula: "Time = (L1 + L2) / relative speed", condition: "Sum of lengths" }
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
        }
    ]
};

export function getSpeedTimeQuestion(qId, topic, type, setNumber, qNum) {
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
        }
    ];

    const idx = (qNum - 1 + (setNumber - 1) * 3) % questionsPool.length;
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

export function generateQuestionsForSet(topic, type, setNumber) {
    const questions = [];
    const seedOffset = (setNumber - 1) * 30 + (type === 'mock' ? 120 : 0);

    for (let i = 1; i <= 30; i++) {
        const qNum = i;
        const qIndex = seedOffset + i;
        let qData;
        if (topic.topicId === "speed-time-and-distance") {
            qData = getSpeedTimeQuestion(`${topic.topicId}-${type}-s${setNumber}-q${qNum}`, topic, type, setNumber, qNum);
        } else {
            qData = getAuthenticQuestion(topic, type, setNumber, qNum, qIndex);
        }
        questions.push(qData);
    }
    return questions;
}
