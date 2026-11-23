/**
 * Aptitude Arena - Verbal Ability Question Bank & Progressive Generators
 * Covers all 8 Verbal Topics across:
 * - Level 1 (Set 1: Foundational / Easy)
 * - Level 2 (Set 2: Intermediate / Medium Placement)
 * - Level 3 (Set 3: Advanced / Hard Placement)
 * - Level 4 (Set 4: Master / Tricky / Expert)
 * - Mock 1 & Mock 2: Mixed multi-topic & multi-difficulty blends
 * Sources: CSE Placement Hub, IndiaBIX, GATE/CAT Verbal & Placement assessments.
 */

// Rotate options to ensure uniform distribution of correct options
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

// -------------------------------------------------------------
// TOPIC 1: ORDERING OF WORDS (Parajumbles / Fragment Ordering)
// -------------------------------------------------------------
const WORDS_ORDER_POOLS = {
    level1: [
        {
            q: "Rearrange parts P, Q, R, S into a meaningful sentence:\nP: when the morning bell rang\nQ: immediately stood in line\nR: the young schoolchildren\nS: for the morning prayer",
            opts: ["P R Q S", "R P Q S", "S P Q R", "Q R P S"],
            ans: "A",
            exp: "'When the morning bell rang (P), the young schoolchildren (R) immediately stood in line (Q) for the morning prayer (S)' is logically and grammatically correct."
        },
        {
            q: "Rearrange P, Q, R, S:\nP: to improve your physical health\nQ: regular exercise and balanced nutrition\nR: are highly recommended\nS: by medical experts worldwide",
            opts: ["Q R S P", "P Q R S", "R S P Q", "S P Q R"],
            ans: "A",
            exp: "Subject 'Regular exercise and balanced nutrition (Q) are highly recommended (R) by medical experts worldwide (S) to improve your physical health (P)'."
        },
        {
            q: "Rearrange the sentence fragments:\nP: with immense determination\nQ: the brave young athlete\nR: completed the grueling marathon\nS: despite severe leg cramps",
            opts: ["Q R S P", "P Q R S", "S R P Q", "R Q P S"],
            ans: "A",
            exp: "'The brave young athlete (Q) completed the grueling marathon (R) despite severe leg cramps (S) with immense determination (P)'."
        },
        {
            q: "Rearrange the fragments:\nP: before making any major investment\nQ: consulting a registered financial advisor\nR: is always a prudent step\nS: to avoid unnecessary losses",
            opts: ["Q R S P", "P Q R S", "R S P Q", "S Q P R"],
            ans: "A",
            exp: "'Consulting a registered financial advisor (Q) is always a prudent step (R) to avoid unnecessary losses (S) before making any major investment (P)'."
        },
        {
            q: "Rearrange the parts:\nP: on the library table\nQ: the diligent student\nR: left his reference notebooks\nS: before rushing to catch the train",
            opts: ["Q R P S", "P Q R S", "S R Q P", "R Q P S"],
            ans: "A",
            exp: "'The diligent student (Q) left his reference notebooks (R) on the library table (P) before rushing to catch the train (S)'."
        }
    ],
    level2: [
        {
            q: "Rearrange P, Q, R, S:\nP: by adopting microservices architecture\nQ: software development teams\nR: can build highly decoupled scalable applications\nS: that reduce deployment downtime",
            opts: ["P Q R S", "Q R S P", "S R Q P", "R S Q P"],
            ans: "A",
            exp: "'By adopting microservices architecture (P), software development teams (Q) can build highly decoupled scalable applications (R) that reduce deployment downtime (S)'."
        },
        {
            q: "Rearrange the jumbled clauses:\nP: which had baffled astronomers for centuries\nQ: using high-precision space telescopes\nR: astrophysics researchers finally solved\nS: the mysterious stellar pulsation enigma",
            opts: ["Q R S P", "R S P Q", "P Q R S", "S P Q R"],
            ans: "A",
            exp: "'Using high-precision space telescopes (Q), astrophysics researchers finally solved (R) the mysterious stellar pulsation enigma (S) which had baffled astronomers for centuries (P)'."
        },
        {
            q: "Rearrange the phrases:\nP: in an era dominated by artificial intelligence\nQ: critical analytical thinking\nR: remains an irreplaceable human competency\nS: across all industry sectors",
            opts: ["P Q R S", "Q R S P", "S R P Q", "R S Q P"],
            ans: "A",
            exp: "'In an era dominated by artificial intelligence (P), critical analytical thinking (Q) remains an irreplaceable human competency (R) across all industry sectors (S)'."
        },
        {
            q: "Rearrange into a formal coherent sentence:\nP: notwithstanding several logistical delays\nQ: the global climate summit delegates\nR: achieved a historic unanimous consensus\nS: on carbon emission taxation treaties",
            opts: ["P Q R S", "Q R S P", "S R Q P", "R S P Q"],
            ans: "A",
            exp: "'Notwithstanding several logistical delays (P), the global climate summit delegates (Q) achieved a historic unanimous consensus (R) on carbon emission taxation treaties (S)'."
        },
        {
            q: "Rearrange the parts:\nP: unless continuous unit testing is implemented\nQ: deploying code into production environments\nR: poses significant stability risks\nS: to customer facing web services",
            opts: ["P Q R S", "Q R S P", "R S P Q", "S P Q R"],
            ans: "A",
            exp: "'Unless continuous unit testing is implemented (P), deploying code into production environments (Q) poses significant stability risks (R) to customer facing web services (S)'."
        }
    ],
    level3: [
        {
            q: "Rearrange parts P, Q, R, S with complex subordination:\nP: had the security vulnerability been detected earlier\nQ: millions of confidential records\nR: would not have been compromised\nS: during the malicious database breach",
            opts: ["P Q R S", "Q R S P", "S R Q P", "R S P Q"],
            ans: "A",
            exp: "Conditional inversion: 'Had the security vulnerability been detected earlier (P), millions of confidential records (Q) would not have been compromised (R) during the malicious database breach (S)'."
        },
        {
            q: "Rearrange the fragments:\nP: seldom do emerging startup founders\nQ: anticipate the acute cash-flow constraints\nR: that accompany rapid organizational scaling\nS: during volatile macroeconomic downturns",
            opts: ["P Q R S", "Q R S P", "S P Q R", "R S P Q"],
            ans: "A",
            exp: "Negative adverbial inversion: 'Seldom do emerging startup founders (P) anticipate the acute cash-flow constraints (Q) that accompany rapid organizational scaling (R) during volatile macroeconomic downturns (S)'."
        },
        {
            q: "Rearrange the parts:\nP: scarcely had the prime minister concluded his address\nQ: when spontaneous celebrations erupted\nR: across major public squares\nS: in anticipation of economic reforms",
            opts: ["P Q R S", "Q R S P", "S R P Q", "R S Q P"],
            ans: "A",
            exp: "Correlative 'Scarcely had... when': 'Scarcely had the prime minister concluded his address (P) when spontaneous celebrations erupted (Q) across major public squares (R) in anticipation of economic reforms (S)'."
        },
        {
            q: "Rearrange the clauses:\nP: to ascertain whether algorithmic trading\nQ: amplifies systemic volatility during flash crashes\nR: regulatory authorities commissioned\nS: an extensive multi-year quantitative study",
            opts: ["P Q R S", "R S P Q", "S R Q P", "Q R S P"],
            ans: "A",
            exp: "Infinitive purpose phrase first: 'To ascertain whether algorithmic trading (P) amplifies systemic volatility during flash crashes (Q), regulatory authorities commissioned (R) an extensive multi-year quantitative study (S)'."
        },
        {
            q: "Rearrange the fragments:\nP: so profound was the impact of the economic paradigm shift\nQ: that conventional Keynesian models failed\nR: to accurately predict consumer behavior\nS: in the newly deregulated market",
            opts: ["P Q R S", "Q R S P", "R S P Q", "S P Q R"],
            ans: "A",
            exp: "'So profound was the impact of the economic paradigm shift (P) that conventional Keynesian models failed (Q) to accurately predict consumer behavior (R) in the newly deregulated market (S)'."
        }
    ],
    level4: [
        {
            q: "Rearrange into a polished literary sentence:\nP: fraught though the diplomatic negotiation was\nQ: with mutual recriminations and ideological fissures\nR: the emissaries managed to forge an interim truce\nS: that forestalled imminent hostilities along the frontier",
            opts: ["P Q R S", "R S P Q", "Q R S P", "S R P Q"],
            ans: "A",
            exp: "Concessive inversion 'Fraught though... with...': 'Fraught though the diplomatic negotiation was (P) with mutual recriminations and ideological fissures (Q), the emissaries managed to forge an interim truce (R) that forestalled imminent hostilities along the frontier (S)'."
        },
        {
            q: "Rearrange with inverted subjunctive structure:\nP: were the central bank to intervene precipitously\nQ: in the foreign exchange forward markets\nR: liquidity constraints might exacerbate\nS: rather than mitigate inflationary pressures",
            opts: ["P Q R S", "R S P Q", "Q R S P", "S R Q P"],
            ans: "A",
            exp: "'Were the central bank to intervene precipitously (P) in the foreign exchange forward markets (Q), liquidity constraints might exacerbate (R) rather than mitigate inflationary pressures (S)'."
        },
        {
            q: "Rearrange the segments:\nP: not until quantum computing attains commercial fault tolerance\nQ: will asymmetric cryptographic architectures\nR: be rendered vulnerable\nS: to polynomial-time factoring algorithms",
            opts: ["P Q R S", "Q R S P", "S R P Q", "R S P Q"],
            ans: "A",
            exp: "Adverbial inversion: 'Not until quantum computing attains commercial fault tolerance (P) will asymmetric cryptographic architectures (Q) be rendered vulnerable (R) to polynomial-time factoring algorithms (S)'."
        },
        {
            q: "Rearrange the complex philosophical proposition:\nP: what appears to the untrained observer\nQ: as an entirely stochastic phenomenon\nR: in reality exemplifies a deterministic chaotic system\nS: governed by non-linear differential equations",
            opts: ["P Q R S", "Q R S P", "R S P Q", "S R Q P"],
            ans: "A",
            exp: "Noun clause subject: 'What appears to the untrained observer (P) as an entirely stochastic phenomenon (Q), in reality exemplifies a deterministic chaotic system (R) governed by non-linear differential equations (S)'."
        },
        {
            q: "Rearrange the segments:\nP: only after cross-validating the empirical datasets\nQ: with multiple independent observational studies\nR: did the investigative epidemiologists confirm\nS: the causal vector of the localized pathogen outbreak",
            opts: ["P Q R S", "R S P Q", "Q R S P", "S R Q P"],
            ans: "A",
            exp: "'Only after cross-validating the empirical datasets (P) with multiple independent observational studies (Q) did the investigative epidemiologists confirm (R) the causal vector of the localized pathogen outbreak (S)'."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 2: SPOTTING ERRORS (Grammatical Error Identification)
// -------------------------------------------------------------
const SPOTTING_ERRORS_POOLS = {
    level1: [
        {
            q: "Identify the part containing a grammatical error:\n(A) Each of the candidates / (B) have completed / (C) their assessment / (D) on the portal.",
            opts: ["(B) have completed", "(A) Each of the candidates", "(C) their assessment", "(D) on the portal"],
            ans: "A",
            exp: "'Each' is singular and requires the singular verb 'has completed', not 'have completed'."
        },
        {
            q: "Spot the error:\n(A) One of my best friends / (B) are planning / (C) to visit Japan / (D) next month.",
            opts: ["(B) are planning", "(A) One of my best friends", "(C) to visit Japan", "(D) next month"],
            ans: "A",
            exp: "'One of [plural noun]' takes a singular verb. It must be 'is planning'."
        },
        {
            q: "Spot the error:\n(A) Neither the manager / (B) nor the assistant / (C) were available / (D) for the press meeting.",
            opts: ["(C) were available", "(A) Neither the manager", "(B) nor the assistant", "(D) for the press meeting"],
            ans: "A",
            exp: "When singular subjects are connected by 'neither... nor', the verb must be singular ('was available')."
        },
        {
            q: "Spot the error:\n(A) The luggage were / (B) carefully loaded / (C) into the aircraft cargo / (D) this morning.",
            opts: ["(A) The luggage were", "(B) carefully loaded", "(C) into the aircraft cargo", "(D) this morning"],
            ans: "A",
            exp: "'Luggage' is an uncountable noun and takes a singular verb: 'The luggage was'."
        },
        {
            q: "Spot the error:\n(A) He walked / (B) very quick / (C) to catch / (D) the departing train.",
            opts: ["(B) very quick", "(A) He walked", "(C) to catch", "(D) the departing train"],
            ans: "A",
            exp: "The verb 'walked' must be modified by an adverb: 'very quickly'."
        }
    ],
    level2: [
        {
            q: "Identify the error:\n(A) Scarcely had she stepped out / (B) of the building / (C) than the thunderous storm / (D) commenced.",
            opts: ["(C) than the thunderous storm", "(A) Scarcely had she stepped out", "(B) of the building", "(D) commenced"],
            ans: "A",
            exp: "'Scarcely' pairs with 'when' (or 'before'), never with 'than'. ('No sooner' pairs with 'than')."
        },
        {
            q: "Identify the error:\n(A) The committee has discussed / (B) about the annual budget allocation / (C) in great detail / (D) throughout the morning.",
            opts: ["(B) about the annual budget allocation", "(A) The committee has discussed", "(C) in great detail", "(D) throughout the morning"],
            ans: "A",
            exp: "'Discuss' is a transitive verb that directly takes an object without the preposition 'about'."
        },
        {
            q: "Spot the error:\n(A) If he would have studied / (B) the documentation earlier / (C) he would have passed / (D) the certification test.",
            opts: ["(A) If he would have studied", "(B) the documentation earlier", "(C) he would have passed", "(D) the certification test"],
            ans: "A",
            exp: "In third conditional 'if' clauses, use past perfect: 'If he had studied', never 'would have'."
        },
        {
            q: "Spot the error:\n(A) The number of applications / (B) received for the internship / (C) have increased significantly / (D) this quarter.",
            opts: ["(C) have increased significantly", "(A) The number of applications", "(B) received for the internship", "(D) this quarter"],
            ans: "A",
            exp: "'The number of...' takes a singular verb ('has increased'). ('A number of...' takes plural)."
        },
        {
            q: "Spot the error:\n(A) Despite of the torrential downpour / (B) the scheduled software demo / (C) proceeded seamlessly / (D) without interruption.",
            opts: ["(A) Despite of the torrential downpour", "(B) the scheduled software demo", "(C) proceeded seamlessly", "(D) without interruption"],
            ans: "A",
            exp: "'Despite' is never followed by 'of'. Use either 'Despite' or 'In spite of'."
        }
    ],
    level3: [
        {
            q: "Identify the grammatical fault:\n(A) The CEO, along with his senior directors / (B) and strategic board advisors / (C) are visiting the European headquarters / (D) next Tuesday.",
            opts: ["(C) are visiting the European headquarters", "(A) The CEO, along with his senior directors", "(B) and strategic board advisors", "(D) next Tuesday"],
            ans: "A",
            exp: "Parenthetical phrases like 'along with...', 'together with...' do not change the subject number. The subject is 'The CEO' (singular), requiring 'is visiting'."
        },
        {
            q: "Spot the error:\n(A) Having worked diligently on the project / (B) the deadline was met / (C) three days before / (D) the formal client review.",
            opts: ["(B) the deadline was met", "(A) Having worked diligently on the project", "(C) three days before", "(D) the formal client review"],
            ans: "A",
            exp: "Dangling participle! 'The deadline' did not work diligently on the project. It should be: '...the engineering team met the deadline'."
        },
        {
            q: "Spot the error:\n(A) His analytical acumen / (B) is superior than / (C) that of any other / (D) data scientist on the team.",
            opts: ["(B) is superior than", "(A) His analytical acumen", "(C) that of any other", "(D) data scientist on the team"],
            ans: "A",
            exp: "Latin comparatives like 'superior', 'inferior', 'prior', 'senior', 'preferable' take the preposition 'to', never 'than'."
        },
        {
            q: "Spot the error:\n(A) She is one of those exceptional engineers / (B) who always delivers / (C) clean and scalable code / (D) ahead of schedule.",
            opts: ["(B) who always delivers", "(A) She is one of those exceptional engineers", "(C) clean and scalable code", "(D) ahead of schedule"],
            ans: "A",
            exp: "In 'one of those [plural noun] who...', the relative pronoun 'who' refers to 'engineers' (plural), so the verb must be plural: 'who always deliver'."
        },
        {
            q: "Spot the error:\n(A) No sooner had the bell rung / (B) when the agitated crowd / (C) rushed through the gates / (D) towards the podium.",
            opts: ["(B) when the agitated crowd", "(A) No sooner had the bell rung", "(C) rushed through the gates", "(D) towards the podium"],
            ans: "A",
            exp: "'No sooner' requires 'than', not 'when'."
        }
    ],
    level4: [
        {
            q: "Identify the subtle grammatical violation:\n(A) The regulatory panel recommended that / (B) the errant corporation complies / (C) with all mandatory environmental audits / (D) immediately.",
            opts: ["(B) the errant corporation complies", "(A) The regulatory panel recommended that", "(C) with all mandatory environmental audits", "(D) immediately"],
            ans: "A",
            exp: "Subjunctive mood requires the base form of the verb after 'recommend that': 'the errant corporation comply' (not 'complies')."
        },
        {
            q: "Spot the error:\n(A) Being that it was an exceptionally sultry afternoon / (B) the outdoor symposium / (C) was adjourned to / (D) an air-conditioned auditorium.",
            opts: ["(A) Being that it was an exceptionally sultry afternoon", "(B) the outdoor symposium", "(C) was adjourned to", "(D) an air-conditioned auditorium"],
            ans: "A",
            exp: "'Being that' is non-standard and ungrammatical in formal English. Use 'Since it was...' or 'Because it was...'."
        },
        {
            q: "Spot the error:\n(A) Neither the lead counsel nor the presiding judges / (B) was prepared for the revelatory testimony / (C) presented by the surprise witness / (D) on the concluding day.",
            opts: ["(B) was prepared for the revelatory testimony", "(A) Neither the lead counsel nor the presiding judges", "(C) presented by the surprise witness", "(D) on the concluding day"],
            ans: "A",
            exp: "When subjects connected by 'neither... nor' differ in number, the verb agrees with the nearer subject ('judges' -> plural 'were prepared')."
        },
        {
            q: "Spot the error:\n(A) I would rather that you / (B) do not disclose / (C) the proprietary encryption keys / (D) to unauthorized contractors.",
            opts: ["(B) do not disclose", "(A) I would rather that you", "(C) the proprietary encryption keys", "(D) to unauthorized contractors"],
            ans: "A",
            exp: "'Would rather that [subject]...' followed by a past subjunctive: 'did not disclose', not present 'do not'."
        },
        {
            q: "Spot the error:\n(A) Between you and I / (B) there should be / (C) absolute transparency regarding / (D) the operational expenditures.",
            opts: ["(A) Between you and I", "(B) there should be", "(C) absolute transparency regarding", "(D) the operational expenditures"],
            ans: "A",
            exp: "'Between' is a preposition and requires objective case pronouns: 'Between you and me'."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 3: ONE WORD SUBSTITUTES
// -------------------------------------------------------------
const ONE_WORD_POOLS = {
    level1: [
        {
            q: "One who possesses many talents or is capable of turning with ease from one task to another:",
            opts: ["Versatile", "Omniscient", "Philanthropist", "Polyglot"],
            ans: "A",
            exp: "Versatile refers to a person able to adapt or perform many different activities well."
        },
        {
            q: "A person who looks on the bright side of things:",
            opts: ["Optimist", "Pessimist", "Altruist", "Stoic"],
            ans: "A",
            exp: "An optimist anticipates positive outcomes, whereas a pessimist anticipates negative ones."
        },
        {
            q: "A life history of a person written by that same person:",
            opts: ["Autobiography", "Biography", "Chronicle", "Memoir"],
            ans: "A",
            exp: "Autobiography is an account written by oneself ('auto' = self)."
        },
        {
            q: "A doctor who specializes in diseases of the eye:",
            opts: ["Ophthalmologist", "Dermatologist", "Neurologist", "Orthopedist"],
            ans: "A",
            exp: "An ophthalmologist diagnoses and treats eye conditions."
        },
        {
            q: "A book or work of art whose author is unknown:",
            opts: ["Anonymous", "Pseudonymous", "Plagiarized", "Apocryphal"],
            ans: "A",
            exp: "Anonymous denotes unknown or undisclosed authorship."
        }
    ],
    level2: [
        {
            q: "One who loves humanity and makes generous donations to promote welfare:",
            opts: ["Philanthropist", "Misanthrope", "Somnambulist", "Hedonist"],
            ans: "A",
            exp: "Philanthropist combines 'phil' (love) + 'anthropos' (man/humanity)."
        },
        {
            q: "An extremely meticulous person who is impossible to please easily:",
            opts: ["Fastidious", "Garrulous", "Gregarious", "Insolent"],
            ans: "A",
            exp: "Fastidious denotes showing excessive care and being very hard to satisfy."
        },
        {
            q: "One who knows everything:",
            opts: ["Omniscient", "Omnipotent", "Omnipresent", "Omnivorous"],
            ans: "A",
            exp: "Omniscient means all-knowing ('omni' = all, 'scient' = knowing)."
        },
        {
            q: "A person indifferent to pleasure or pain and enduring distress without complaint:",
            opts: ["Stoic", "Epicurean", "Cynic", "Ascetic"],
            ans: "A",
            exp: "A stoic person endures suffering without displaying feelings or complaining."
        },
        {
            q: "The practice of having more than one spouse at the same time:",
            opts: ["Polygamy", "Monogamy", "Bigamy", "Endogamy"],
            ans: "A",
            exp: "Polygamy ('poly' = many, 'gamos' = marriage) is marriage to multiple partners."
        }
    ],
    level3: [
        {
            q: "A speech or presentation delivered spontaneously without any prior preparation:",
            opts: ["Extempore", "Soliloquy", "Eulogy", "Peroration"],
            ans: "A",
            exp: "Extempore (or impromptu) means performed without previous thought or preparation."
        },
        {
            q: "A remedy or cure purported to heal all diseases and ailments:",
            opts: ["Panacea", "Elixir", "Nostrum", "Antidote"],
            ans: "A",
            exp: "A panacea is a universal remedy for all difficulties or diseases."
        },
        {
            q: "A person who renounces all worldly pleasures and practices rigorous self-discipline:",
            opts: ["Ascetic", "Sybarite", "Voluptuary", "Libertine"],
            ans: "A",
            exp: "An ascetic practices severe self-denial typically for religious or spiritual reasons."
        },
        {
            q: "One who walks in their sleep:",
            opts: ["Somnambulist", "Somniloquist", "Noctambulist", "Insomniac"],
            ans: "A",
            exp: "Somnambulism ('somnus' = sleep, 'ambulare' = walk) is sleepwalking."
        },
        {
            q: "A person who is fluent in speaking or writing several foreign languages:",
            opts: ["Polyglot", "Linguist", "Lexicographer", "Philologist"],
            ans: "A",
            exp: "A polyglot speaks or uses several different languages."
        }
    ],
    level4: [
        {
            q: "One who delights in luxury, sensual comfort, and self-indulgence (opposite of ascetic):",
            opts: ["Sybarite", "Cenobite", "Anachorite", "Eremite"],
            ans: "A",
            exp: "A sybarite is devoted to luxury and sensual pleasure (originating from Sybaris)."
        },
        {
            q: "The deliberate compilation and writing of dictionaries:",
            opts: ["Lexicography", "Calligraphy", "Epigraphy", "Orthography"],
            ans: "A",
            exp: "Lexicography is the scholarly art or profession of compiling dictionaries."
        },
        {
            q: "The act of speaking irreverently or contemptuously about sacred or divine things:",
            opts: ["Blasphemy", "Sacrilege", "Heresy", "Iconoclasm"],
            ans: "A",
            exp: "Blasphemy refers to showing contempt or disrespect toward divine things or deities."
        },
        {
            q: "A subtle linguistic fallacy involving ambiguity through multiple syntactic interpretations:",
            opts: ["Amphiboly", "Solecism", "Pleonasmod", "Paralepsis"],
            ans: "A",
            exp: "Amphiboly is an ambiguity caused by a loose phrase or faulty sentence structure."
        },
        {
            q: "The study of birds and avian physiology:",
            opts: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
            ans: "A",
            exp: "Ornithology is the scientific study of birds."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 4: SYNONYMS & ANTONYMS
// -------------------------------------------------------------
const SYN_ANT_POOLS = {
    level1: [
        {
            q: "Select the word that is most nearly SYNONYMOUS with 'CANDID':",
            opts: ["Frank", "Deceptive", "Arrogant", "Timid"],
            ans: "A",
            exp: "Candid means truthful, straightforward, and frank in speech."
        },
        {
            q: "Select the word that is most nearly OPPOSITE (ANTONYM) to 'OBSOLETE':",
            opts: ["Contemporary", "Ancient", "Archaic", "Outmoded"],
            ans: "A",
            exp: "Obsolete means outdated or no longer in use; contemporary means modern or current."
        },
        {
            q: "Find the SYNONYM of 'METICULOUS':",
            opts: ["Painstaking", "Careless", "Hasty", "Indifferent"],
            ans: "A",
            exp: "Meticulous denotes showing great attention to detail; painstaking."
        },
        {
            q: "Find the ANTONYM of 'AFFLUENT':",
            opts: ["Destitute", "Wealthy", "Opulent", "Prosperous"],
            ans: "A",
            exp: "Affluent means wealthy; destitute means utterly impoverished."
        },
        {
            q: "Find the SYNONYM of 'ADVERSITY':",
            opts: ["Hardship", "Prosperity", "Euphoria", "Serenity"],
            ans: "A",
            exp: "Adversity refers to a state of continued difficulty or misfortune."
        }
    ],
    level2: [
        {
            q: "Select the closest SYNONYM for 'PRAGMATIC':",
            opts: ["Utilitarian", "Idealistic", "Dogmatic", "Capricious"],
            ans: "A",
            exp: "Pragmatic means dealing with matters realistically and sensibly (utilitarian)."
        },
        {
            q: "Select the ANTONYM of 'EPHEMERAL':",
            opts: ["Perpetual", "Transient", "Evanescent", "Fugitive"],
            ans: "A",
            exp: "Ephemeral means lasting a very short time; perpetual means enduring forever."
        },
        {
            q: "Choose the SYNONYM for 'UBIQUITOUS':",
            opts: ["Omnipresent", "Rare", "Scarce", "Inconspicuous"],
            ans: "A",
            exp: "Ubiquitous means found everywhere at once; omnipresent."
        },
        {
            q: "Choose the ANTONYM of 'GREGARIOUS':",
            opts: ["Reclusive", "Sociable", "Extroverted", "Affable"],
            ans: "A",
            exp: "Gregarious means fond of company and sociable; reclusive means solitary."
        },
        {
            q: "Select the closest SYNONYM for 'MITIGATE':",
            opts: ["Alleviate", "Exacerbate", "Intensify", "Aggravate"],
            ans: "A",
            exp: "Mitigate means make less severe, serious, or painful; alleviate."
        }
    ],
    level3: [
        {
            q: "Select the closest SYNONYM of 'OBDURATE':",
            opts: ["Intransigent", "Compliant", "Malleable", "Docile"],
            ans: "A",
            exp: "Obdurate means stubbornly refusing to change one's opinion; intransigent."
        },
        {
            q: "Select the ANTONYM of 'SAGACIOUS':",
            opts: ["Fatuous", "Prudent", "Discerning", "Perspicacious"],
            ans: "A",
            exp: "Sagacious means possessing keen mental discernment and good judgment; fatuous means silly and pointless."
        },
        {
            q: "Select the closest SYNONYM for 'PERSPICACIOUS':",
            opts: ["Astute", "Myopic", "Obtuse", "Vacuous"],
            ans: "A",
            exp: "Perspicacious means having a ready insight into and understanding of things; astute."
        },
        {
            q: "Choose the ANTONYM of 'ENERVATE':",
            opts: ["Invigorate", "Debilitate", "Sap", "Exhaust"],
            ans: "A",
            exp: "Enervate means to drain of energy or vitality; invigorate means to give strength or energy."
        },
        {
            q: "Choose the closest SYNONYM for 'CAPRICIOUS':",
            opts: ["Whimsical", "Steadfast", "Resolute", "Predictable"],
            ans: "A",
            exp: "Capricious means given to sudden and unaccountable changes of mood or behavior."
        }
    ],
    level4: [
        {
            q: "Select the closest SYNONYM for 'PUGNACIOUS':",
            opts: ["Bellicose", "Pacific", "Conciliatory", "Irenic"],
            ans: "A",
            exp: "Pugnacious means eager or quick to argue or fight; bellicose."
        },
        {
            q: "Select the ANTONYM of 'INTRANSIGENT':",
            opts: ["Accommodating", "Tenacious", "Obstinate", "Refractory"],
            ans: "A",
            exp: "Intransigent means uncompromising; accommodating means willing to fit in with someone's wishes."
        },
        {
            q: "Select the closest SYNONYM for 'TURPITUDE':",
            opts: ["Depravity", "Probity", "Rectitude", "Chastity"],
            ans: "A",
            exp: "Turpitude means depravity, wickedness, or shameful behavior."
        },
        {
            q: "Choose the ANTONYM of 'PUSILLANIMOUS':",
            opts: ["Valiant", "Craven", "Timid", "Cowardly"],
            ans: "A",
            exp: "Pusillanimous means lacking courage or timid; valiant means possessing or showing courage."
        },
        {
            q: "Choose the closest SYNONYM for 'ESOTERIC':",
            opts: ["Arcane", "Exoteric", "Commonplace", "Pervasive"],
            ans: "A",
            exp: "Esoteric means intended for or likely to be understood by only a small number of people; arcane."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 5: IDIOMS & PHRASES
// -------------------------------------------------------------
const IDIOMS_POOLS = {
    level1: [
        {
            q: "What is the meaning of the idiom 'A BLESSING IN DISGUISE'?",
            opts: ["An apparent misfortune that yields an unexpected positive result", "A curse received from an enemy", "A secret financial reward", "A religious ceremony"],
            ans: "A",
            exp: "A blessing in disguise is something that initially seems bad or unlucky, but results in something good happening later."
        },
        {
            q: "What does 'BREAK THE ICE' mean?",
            opts: ["To initiate conversation in a socially awkward setting", "To suffer a frostbite injury", "To terminate an ongoing agreement", "To cause physical damage"],
            ans: "A",
            exp: "Break the ice means to relieve social tension and make people feel comfortable talking to each other."
        },
        {
            q: "What does 'BEAT AROUND THE BUSH' mean?",
            opts: ["To avoid speaking directly about the main issue", "To clean up garden foliage", "To physically assault someone in hiding", "To win an outdoor game"],
            ans: "A",
            exp: "Beat around the bush means to deliberate over trivial matters to avoid speaking directly on the difficult core issue."
        },
        {
            q: "What is the meaning of 'ON CLOUD NINE'?",
            opts: ["Extremely joyous and elated", "Suffering from high altitude sickness", "Confused and unable to decide", "Experiencing heavy rainfall"],
            ans: "A",
            exp: "On cloud nine signifies a state of euphoric happiness or exhilaration."
        },
        {
            q: "What does 'ONCE IN A BLUE MOON' mean?",
            opts: ["Very rarely or almost never", "Occurring on a bi-weekly cycle", "Happening only during a lunar eclipse", "An event scheduled in advance"],
            ans: "A",
            exp: "Once in a blue moon refers to an occurrence that happens very infrequently."
        }
    ],
    level2: [
        {
            q: "What does 'BURN THE MIDNIGHT OIL' signify?",
            opts: ["To work or study late into the night with diligence", "To waste precious fuel reserves", "To intentionally start an arson fire", "To prepare dinner at late hours"],
            ans: "A",
            exp: "Burning the midnight oil refers to studying or working late into the nocturnal hours."
        },
        {
            q: "What does 'AT THE ELEVENTH HOUR' mean?",
            opts: ["At the very last possible moment before a deadline", "Late in the morning business shift", "Exactly one hour before midday", "During an emergency alarm"],
            ans: "A",
            exp: "At the eleventh hour means at the latest possible time right before something terminates or expires."
        },
        {
            q: "What is the meaning of 'SPILL THE BEANS'?",
            opts: ["To divulge a secret prematurely or indiscreetly", "To drop groceries onto the floor", "To ruin a culinary recipe", "To confess under police custody"],
            ans: "A",
            exp: "Spill the beans means to inadvertently reveal classified, private, or secret information."
        },
        {
            q: "What does 'BITE THE BULLET' convey?",
            opts: ["To courageously face an inevitable unpleasant situation", "To engage in dangerous combat", "To commit a catastrophic error", "To suffer from gunshot wounds"],
            ans: "A",
            exp: "To bite the bullet means to endure a painful or undesirable situation with fortitude."
        },
        {
            q: "What does 'CALL IT A DAY' mean?",
            opts: ["To cease working on something for the remaining day", "To assign a calendar name to an event", "To announce a holiday", "To end a formal employment contract"],
            ans: "A",
            exp: "To call it a day means to stop what one is doing, especially work, for the rest of the day."
        }
    ],
    level3: [
        {
            q: "What is the meaning of 'ACID TEST'?",
            opts: ["A definitive, rigorous test that conclusively proves the quality or truth of something", "A laboratory experiment involving corrosive liquids", "A harsh critical review from an opponent", "A dangerous chemical leak"],
            ans: "A",
            exp: "An acid test is a conclusive evaluation that provides an irrefutable proof of effectiveness or authenticity."
        },
        {
            q: "What does 'RED HERRING' signify in argumentation or investigation?",
            opts: ["A misleading clue or argument deliberately designed to divert attention from the real issue", "A smoked marine fish delicacy", "A verified piece of forensic evidence", "A communist manifesto slogan"],
            ans: "A",
            exp: "A red herring is something that misleads or distracts from a relevant or important question."
        },
        {
            q: "What does 'TO STEAL A MARCH ON SOMEONE' mean?",
            opts: ["To gain an unexpected tactical advantage over a rival by acting before them", "To disrupt a military parade", "To illegally rob someone while traveling", "To copy another person's intellectual work"],
            ans: "A",
            exp: "Steal a march on someone means to gain an advantage over a competitor secretly and preemptively."
        },
        {
            q: "What is the meaning of 'SWAN SONG'?",
            opts: ["A final artistic performance or accomplishment before retirement or death", "A melodic birdsong recorded in nature", "A mournful funeral eulogy", "A triumphant debut performance"],
            ans: "A",
            exp: "A swan song refers to a final performance, gesture, or work of someone right before their career ends or they die."
        },
        {
            q: "What does 'TO REST ON ONE'S LAURELS' mean?",
            opts: ["To become complacent due to past achievements instead of continuing to strive", "To sleep outdoors in nature", "To retire with prestigious government honors", "To receive a royal wreath"],
            ans: "A",
            exp: "Rest on one's laurels means to be so satisfied with past successes that one makes no further effort."
        }
    ],
    level4: [
        {
            q: "What does 'A PYRRHIC VICTORY' signify?",
            opts: ["A triumph achieved at such devastating cost that it is tantamount to defeat", "A decisive landslide military conquest", "An accidental victory achieved by default", "A victory won through treachery"],
            ans: "A",
            exp: "A Pyrrhic victory (named after King Pyrrhus of Epirus) is a triumph won at immense, ruinous cost to the victor."
        },
        {
            q: "What does 'TO GIRD ONE'S LOINS' mean?",
            opts: ["To mentally or physically prepare oneself for impending arduous conflict or labor", "To wear protective armor in battle", "To suffer abdominal muscle strain", "To fast for spiritual purification"],
            ans: "A",
            exp: "Gird up one's loins means to brace and prepare oneself for a rigorous effort or encounter."
        },
        {
            q: "What does 'HOBSON'S CHOICE' describe?",
            opts: ["A seemingly free choice where in reality only one option is available", "A decision between two equally catastrophic alternatives", "A lottery draw decided by pure luck", "An auction bidding dilemma"],
            ans: "A",
            exp: "A Hobson's choice is a take-it-or-leave-it proposition where no real alternative actually exists."
        },
        {
            q: "What does 'TO CROSS THE RUBICON' mean?",
            opts: ["To commit irreversibly to an irrevocable course of action with no turning back", "To swim across a dangerous European river", "To reach a peaceful diplomatic compromise", "To betray one's native country for money"],
            ans: "A",
            exp: "Crossing the Rubicon (Julius Caesar's civil war advance) means taking an irreversible decisive step."
        },
        {
            q: "What does 'TO CUT THE GORDIAN KNOT' mean?",
            opts: ["To resolve a deeply complex problem through bold, unconventional, and decisive action", "To untangle sailing ropes aboard a vessel", "To destroy valuable historical artifacts", "To execute an intricate surgical procedure"],
            ans: "A",
            exp: "Alexander the Great solved the insoluble Gordian Knot by boldly cutting it with his sword."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 6: SENTENCE CORRECTION
// -------------------------------------------------------------
const SENTENCE_CORRECTION_POOLS = {
    level1: [
        {
            q: "Select the grammatically correct sentence:",
            opts: [
                "Neither of the two candidates was selected for the final interview round.",
                "Neither of the two candidates were selected for the final interview round.",
                "Neither of the two candidates have been selected for the final interview round.",
                "Neither of the two candidates are selected for the final interview round."
            ],
            ans: "A",
            exp: "'Neither' when used alone as a pronoun is singular and takes the singular verb 'was selected'."
        },
        {
            q: "Choose the correct replacement for the underlined segment:\n'The manager insisted to inspect all warehouse registers.'",
            opts: ["insisted on inspecting", "insisted for inspecting", "insisted to inspection", "insisted in inspecting"],
            ans: "A",
            exp: "'Insist' takes the preposition 'on' followed by a gerund: 'insisted on inspecting'."
        },
        {
            q: "Choose the grammatically superior phrasing:",
            opts: [
                "She prefers drinking fresh tea to cold soda.",
                "She prefers drinking fresh tea than cold soda.",
                "She prefers drinking fresh tea over than cold soda.",
                "She prefers drinking fresh tea instead cold soda."
            ],
            ans: "A",
            exp: "'Prefer' takes the preposition 'to' when comparing two choices, not 'than'."
        },
        {
            q: "Select the sentence with proper subject-verb agreement:",
            opts: [
                "Bread and butter is his staple breakfast every morning.",
                "Bread and butter are his staple breakfast every morning.",
                "Bread and butter were his staple breakfast every morning.",
                "Bread and butter have been his staple breakfast every morning."
            ],
            ans: "A",
            exp: "When two nouns express a single compound idea or item (bread and butter as breakfast), they take a singular verb."
        },
        {
            q: "Choose the correct form:\n'He has been absent _____ Monday.'",
            opts: ["since", "for", "from", "by"],
            ans: "A",
            exp: "'Since' is used to denote a specific starting point in time in perfect tenses."
        }
    ],
    level2: [
        {
            q: "Choose the correct version:\n'Hardly had the aircraft touched down _____ torrential rain started flooding the tarmac.'",
            opts: ["when", "than", "then", "since"],
            ans: "A",
            exp: "'Hardly had... when' is the correct correlative conjunction pairing."
        },
        {
            q: "Improve the sentence: 'Being a rainy day, he decided to stay indoors.'",
            opts: [
                "It being a rainy day, he decided to stay indoors.",
                "Being rainy day, he decided to stay indoors.",
                "He being a rainy day, decided to stay indoors.",
                "As being a rainy day, he decided to stay indoors."
            ],
            ans: "A",
            exp: "An absolute nominative participle clause requires an explicit subject ('It being a rainy day') to avoid a dangling modifier."
        },
        {
            q: "Select the correct sentence:",
            opts: [
                "No sooner did the bell ring than the students rushed out of the hall.",
                "No sooner did the bell ring when the students rushed out of the hall.",
                "No sooner had the bell rung then the students rushed out of the hall.",
                "No sooner the bell rang than the students rushed out of the hall."
            ],
            ans: "A",
            exp: "'No sooner' requires inverted auxiliary syntax and correlates with 'than'."
        },
        {
            q: "Select the correctly formatted comparative sentence:",
            opts: [
                "The climate of Bangalore is more pleasant than that of Delhi.",
                "The climate of Bangalore is more pleasant than Delhi.",
                "The climate of Bangalore is more pleasant than those of Delhi.",
                "The climate of Bangalore is pleasant than Delhi."
            ],
            ans: "A",
            exp: "Comparing the climate of one city to another requires 'that of' to avoid illogically comparing climate to a geographic city."
        },
        {
            q: "Choose the proper conditional phrasing:\n'Had you informed us earlier, we _____ the itinerary.'",
            opts: ["would have rescheduled", "will have rescheduled", "would reschedule", "should reschedule"],
            ans: "A",
            exp: "Third conditional past counterfactual requires 'would have + past participle'."
        }
    ],
    level3: [
        {
            q: "Select the sentence devoid of redundancy:",
            opts: [
                "The software engineer reverted promptly with the requested log diagnostics.",
                "The software engineer reverted back promptly with the requested log diagnostics.",
                "The software engineer repeated the explanation again once more.",
                "The software engineer returned back to his workstation."
            ],
            ans: "A",
            exp: "'Revert back', 'repeat again', and 'return back' are redundant tautologies. 'Reverted promptly' is clean and correct."
        },
        {
            q: "Choose the proper subjunctive form:\n'The senior physician requested that the patient _____ kept under intensive observation.'",
            opts: ["be", "is", "was", "must be"],
            ans: "A",
            exp: "Verbs expressing requests, decrees, or mandates in 'that' clauses trigger present subjunctive base form: 'be kept'."
        },
        {
            q: "Select the sentence with impeccable parallel structure:",
            opts: [
                "The candidate demonstrated proficiency in coding, debugging, and documenting complex APIs.",
                "The candidate demonstrated proficiency in coding, to debug, and documenting complex APIs.",
                "The candidate demonstrated proficiency in coding, debugging, and how to document complex APIs.",
                "The candidate demonstrated proficiency in code, debugging, and documentation."
            ],
            ans: "A",
            exp: "Parallelism requires consistent gerund forms (-ing): coding, debugging, documenting."
        },
        {
            q: "Choose the correct relative pronoun:\n'This is the senior cloud architect _____ everyone believes will lead the division.'",
            opts: ["who", "whom", "which", "whose"],
            ans: "A",
            exp: "'Who' is the subject of the clause 'will lead the division' (intervening clause 'everyone believes' does not turn it into an object)."
        },
        {
            q: "Select the correct sentence:",
            opts: [
                "I would rather you remained here until the storm subsides.",
                "I would rather you remain here until the storm subsides.",
                "I would rather that you are remaining here until the storm subsides.",
                "I would rather you to remain here until the storm subsides."
            ],
            ans: "A",
            exp: "'Would rather [subject]...' followed by a past subjunctive verb: 'remained'."
        }
    ],
    level4: [
        {
            q: "Select the sentence with flawless inverted syntax:",
            opts: [
                "Under no circumstances should confidential database credentials be committed to a public repository.",
                "Under no circumstances confidential database credentials should be committed to a public repository.",
                "Under no circumstances should be confidential database credentials committed to a public repository.",
                "Under no circumstances confidential database credentials to be committed to a public repository."
            ],
            ans: "A",
            exp: "Negative restrictive prepositional phrase 'Under no circumstances' triggers inversion of auxiliary verb before subject ('should credentials be...')."
        },
        {
            q: "Identify the grammatically unassailable sentence:",
            opts: [
                "Whomever the board appoints as chief executive will confront immediate regulatory challenges.",
                "Whoever the board appoints as chief executive will confront immediate regulatory challenges.",
                "Whosoever the board appoints as chief executive will confront immediate regulatory challenges.",
                "Whomever the board will appoint will confront immediate regulatory challenges."
            ],
            ans: "A",
            exp: "'Whomever' is the object of the verb 'appoints' inside the noun clause, and the entire clause acts as subject of 'will confront'."
        },
        {
            q: "Select the correct phrasing:\n'Lest you _____ misunderstandings, please send a detailed email confirmation.'",
            opts: ["should cause", "shall cause", "might cause", "would cause"],
            ans: "A",
            exp: "'Lest' is followed by 'should' (or the bare subjunctive verb without auxiliary)."
        },
        {
            q: "Choose the correct sentence:",
            opts: [
                "The jury gave their individual dissenting opinions before signing the verdict.",
                "The jury gave its individual dissenting opinions before signing the verdict.",
                "The jury was divided in its verdict.",
                "The jury have unanimously agreed on its decision."
            ],
            ans: "A",
            exp: "When members of a collective noun act individually or disagree, plural pronouns ('their') and plural verbs are used."
        },
        {
            q: "Select the sentence with correct mood and tense alignment:",
            opts: [
                "If it were not for his steadfast tenacity, the enterprise would have succumbed to bankruptcy.",
                "If it was not for his steadfast tenacity, the enterprise would have succumbed to bankruptcy.",
                "If it had not been for his steadfast tenacity, the enterprise will succumb to bankruptcy.",
                "Were it not for his steadfast tenacity, the enterprise had succumbed to bankruptcy."
            ],
            ans: "A",
            exp: "Mixed counterfactual conditional pairing past subjunctive condition with perfect conditional outcome."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 7: FILL IN THE BLANKS & VOCABULARY
// -------------------------------------------------------------
const FILL_BLANKS_POOLS = {
    level1: [
        {
            q: "The candidate was confident of her success because she had prepared _____ for the assessment.",
            opts: ["thoroughly", "hardly", "casually", "rarely"],
            ans: "A",
            exp: "Preparing thoroughly (exhaustively, with complete diligence) leads to confidence of success."
        },
        {
            q: "The teacher warned the students not to _____ into unauthorized exam halls.",
            opts: ["trespass", "wander", "sojourn", "stride"],
            ans: "A",
            exp: "Trespass means to enter someone's land or property without permission."
        },
        {
            q: "Because of the unprecedented traffic congestion, the delivery van was delayed by _____ forty minutes.",
            opts: ["nearly", "closely", "roughly", "hardly"],
            ans: "A",
            exp: "'Nearly' fits the estimation of forty minutes of delay."
        },
        {
            q: "The CEO was known for his _____ attitude, always listening patiently to every employee grievance.",
            opts: ["sympathetic", "indifferent", "belligerent", "arrogant"],
            ans: "A",
            exp: "Listening patiently to grievances indicates a sympathetic and empathetic attitude."
        },
        {
            q: "Please _____ your signature at the designated bottom space on this contract.",
            opts: ["affix", "inscribe", "annex", "appendage"],
            ans: "A",
            exp: "'Affix your signature' is the standard formal idiom for applying a signature to a legal document."
        }
    ],
    level2: [
        {
            q: "The company's quarterly revenue plummeted, forcing the management to _____ non-essential expenditures.",
            opts: ["curtail", "augment", "subsidize", "proliferate"],
            ans: "A",
            exp: "Curtail means to reduce in extent or quantity; impose a restriction upon."
        },
        {
            q: "Despite the witness's convincing demeanor, the jury detected several _____ statements in her testimony.",
            opts: ["contradictory", "corroborating", "plausible", "verifiable"],
            ans: "A",
            exp: "Contradictory statements undermine testimony and raise doubt."
        },
        {
            q: "The software architect was lauded for her _____ approach to resolving intricate network bottlenecks.",
            opts: ["innovative", "antiquated", "pedestrian", "dogmatic"],
            ans: "A",
            exp: "Innovative denotes featuring new methods or advanced thinking."
        },
        {
            q: "The diplomat skillfully avoided contentious subjects, remaining deliberately _____ throughout the press conference.",
            opts: ["ambiguous", "lucid", "unequivocal", "forthright"],
            ans: "A",
            exp: "Remaining ambiguous means open to more than one interpretation, avoiding taking a definite polarizing stance."
        },
        {
            q: "Heavy industrial pollutants have severely _____ the local river ecosystem.",
            opts: ["degraded", "elevated", "ameliorated", "fortified"],
            ans: "A",
            exp: "Degraded means lowered the quality or healthy ecological balance."
        }
    ],
    level3: [
        {
            q: "His arguments, although superficially persuasive, were fundamentally _____ upon rigorous empirical scrutiny.",
            opts: ["specious", "impeccable", "cogent", "unassailable"],
            ans: "A",
            exp: "Specious describes something that seems plausible on the surface but is actually false or fallacious."
        },
        {
            q: "The research team was granted full _____ to investigate the causes behind the server infrastructure outage.",
            opts: ["autonomy", "subjugation", "proscription", "servitude"],
            ans: "A",
            exp: "Autonomy refers to the freedom and authority to act independently."
        },
        {
            q: "Far from being a tranquil discussion, the board meeting quickly degenerated into an acrimonious _____.",
            opts: ["altercation", "concord", "camaraderie", "symposium"],
            ans: "A",
            exp: "Altercation denotes a noisy, heated, or angry argument."
        },
        {
            q: "The new regulatory framework was designed to _____ the monopolistic tendencies of dominant tech conglomerates.",
            opts: ["curb", "foster", "aggrandize", "perpetuate"],
            ans: "A",
            exp: "Curb means to restrain or keep in check."
        },
        {
            q: "The author's prose is remarkably _____, conveying profound philosophical axioms in few words.",
            opts: ["laconic", "diffuse", "prolix", "pleonastic"],
            ans: "A",
            exp: "Laconic describes using very few words to express complex ideas."
        }
    ],
    level4: [
        {
            q: "The dictator's speech was laden with _____ rhetoric designed to scapegoat minority enclaves.",
            opts: ["demagogic", "conciliatory", "irenic", "magnanimous"],
            ans: "A",
            exp: "Demagogic rhetoric appeals to popular desires and prejudices rather than rational argument."
        },
        {
            q: "The profound philosophical treatises of the 18th century often seem _____ to modern readers accustomed to brevity.",
            opts: ["recondite", "pellucid", "limpid", "manifest"],
            ans: "A",
            exp: "Recondite means little known, abstruse, or dealing with very profound and difficult subjects."
        },
        {
            q: "Her _____ demeanor masked an iron determination to enact comprehensive organizational restructuring.",
            opts: ["suave", "recalcitrant", "truculent", "fractious"],
            ans: "A",
            exp: "Suave describes a charming, elegant, and confident exterior that can mask underlying firmness."
        },
        {
            q: "The judge condemned the corrupt official's blatant _____ in accepting clandestine kickbacks from defense contractors.",
            opts: ["venality", "probity", "scrupulousness", "rectitude"],
            ans: "A",
            exp: "Venality is the condition of being open to bribery or willing to compromise integrity for money."
        },
        {
            q: "The emerging economic forecast remains _____, with conflicting indicators pointing toward both growth and stagflation.",
            opts: ["equivocal", "unambiguous", "categorical", "explicit"],
            ans: "A",
            exp: "Equivocal means open to multiple interpretations or uncertain in outcome."
        }
    ]
};

// -------------------------------------------------------------
// TOPIC 8: ORDERING OF SENTENCES (Paragraph Jumbles / Coherence)
// -------------------------------------------------------------
const SENTENCE_ORDER_POOLS = {
    level1: [
        {
            q: "Rearrange the sentences S1, S2, S3, S4 to form a coherent paragraph:\n" +
               "S1: Solar energy is the cleanest and most abundant renewable resource on Earth.\n" +
               "S2: Photovoltaic panels convert sunlight directly into usable electrical power.\n" +
               "S3: As production technology improves, the installation costs continue to drop.\n" +
               "S4: Consequently, more households are adopting solar solutions every year.",
            opts: ["S1 S2 S3 S4", "S2 S1 S4 S3", "S4 S3 S2 S1", "S3 S2 S1 S4"],
            ans: "A",
            exp: "Logical progression: Introduction of solar energy -> mechanism of panels -> drop in costs -> conclusion/consequence."
        },
        {
            q: "Rearrange the sentences into a logical sequence:\n" +
               "S1: First-year university students often encounter acute academic stress.\n" +
               "S2: Balancing independent living with demanding coursework can be overwhelming.\n" +
               "S3: Campus counseling centers provide dedicated mental health support services.\n" +
               "S4: Utilizing these resources helps students navigate the collegiate transition.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S4 S3 S2 S1", "S3 S4 S1 S2"],
            ans: "A",
            exp: "Problem stated -> cause elaborated -> remedy offered -> beneficial outcome."
        },
        {
            q: "Rearrange the sentences:\n" +
               "S1: A computer virus is a malicious software program designed to self-replicate.\n" +
               "S2: It attaches itself to legitimate executable files without user knowledge.\n" +
               "S3: Once the infected file is opened, the payload executes its destructive code.\n" +
               "S4: Regular antivirus updates are therefore essential to safeguard digital assets.",
            opts: ["S1 S2 S3 S4", "S3 S2 S1 S4", "S4 S1 S2 S3", "S2 S3 S1 S4"],
            ans: "A",
            exp: "Definition -> mechanism of infection -> activation upon execution -> preventive conclusion."
        },
        {
            q: "Arrange the chronological steps:\n" +
               "S1: The engineering candidate submitted her resume through the company careers portal.\n" +
               "S2: She was subsequently invited for an online technical coding screening.\n" +
               "S3: Having aced the screening, she participated in two rounds of architectural interviews.\n" +
               "S4: Within a week, the recruitment team extended a formal full-time offer letter.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S1 S3 S2 S4", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Standard chronological hiring sequence: application -> online screening -> interviews -> offer."
        },
        {
            q: "Rearrange the narrative sentences:\n" +
               "S1: The rain ceased abruptly as the evening sun dipped beneath the western hills.\n" +
               "S2: A magnificent double rainbow spanned across the eastern horizon.\n" +
               "S3: Villagers stepped out onto their verandas to admire the breathtaking spectacle.\n" +
               "S4: Children laughed and splashed joyfully through the remaining water puddles.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S4 S3 S2 S1", "S3 S2 S1 S4"],
            ans: "A",
            exp: "Weather clearing -> phenomenon appearing -> human reaction -> child play."
        }
    ],
    level2: [
        {
            q: "Arrange the segments into a coherent argumentative paragraph:\n" +
               "S1: Artificial intelligence is rapidly transforming contemporary software engineering workflows.\n" +
               "S2: Modern code assistance tools generate boilerplate routines and test suites automatically.\n" +
               "S3: While this significantly enhances developer velocity, it introduces reliance risks.\n" +
               "S4: Engineers must therefore cultivate deep fundamentals to audit algorithmic suggestions.",
            opts: ["S1 S2 S3 S4", "S2 S3 S1 S4", "S4 S3 S2 S1", "S3 S1 S2 S4"],
            ans: "A",
            exp: "General premise -> specific tooling example -> counterpoint / risk -> synthesis advice."
        },
        {
            q: "Arrange the steps in data pipeline processing:\n" +
               "S1: Raw clickstream data is ingested continuously through distributed streaming message queues.\n" +
               "S2: Transformation engines normalize anomalies, strip sensitive credentials, and deduplicate entries.\n" +
               "S3: The sanitized event records are then partitioned and stored in high-throughput analytical warehouses.\n" +
               "S4: Finally, business intelligence dashboards query the tables to surface real-time KPIs.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S2 S1 S4", "S4 S3 S2 S1"],
            ans: "A",
            exp: "ETL architectural lifecycle: Ingest -> Cleanse/Transform -> Store -> Visualize."
        },
        {
            q: "Rearrange the economics sequence:\n" +
               "S1: Central banks frequently adjust benchmark interest rates to regulate macroeconomic liquidity.\n" +
               "S2: Lowering rates diminishes the cost of borrowing for both businesses and consumers.\n" +
               "S3: This elevated borrowing stimulates capital expenditure and household spending.\n" +
               "S4: Over time, robust aggregate demand drives economic expansion and higher employment.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S4 S3 S2 S1", "S3 S2 S1 S4"],
            ans: "A",
            exp: "Monetary policy action -> direct rate effect -> consumer behavioral response -> macroeconomic outcome."
        },
        {
            q: "Arrange the sentences:\n" +
               "S1: The concept of work-from-home gained immense traction following global lockdowns.\n" +
               "S2: Employers quickly discovered that productivity remained steady across most technical roles.\n" +
               "S3: However, maintaining long-term organizational culture and serendipitous mentoring proved challenging.\n" +
               "S4: Consequently, the majority of technology enterprises have stabilized on a flexible hybrid model.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S4 S3 S2 S1", "S3 S2 S1 S4"],
            ans: "A",
            exp: "Background -> initial positive realization -> emerging systemic drawback -> hybrid resolution."
        },
        {
            q: "Arrange the medical discovery narrative:\n" +
               "S1: Alexander Fleming returned to his laboratory to find an accidental mold contamination.\n" +
               "S2: He observed that the Penicillium mold had cleared a bacteria-free zone around itself.\n" +
               "S3: Further experiments proved that the mold produced an agent capable of killing microbes.\n" +
               "S4: This serendipitous finding led to the mass production of penicillin, saving millions of lives.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S2 S1 S4", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Observation -> specific anomaly noted -> laboratory verification -> historical global impact."
        }
    ],
    level3: [
        {
            q: "Rearrange the philosophical argumentation:\n" +
               "S1: Epistemology grapples with the fundamental nature, scope, and limits of human knowledge.\n" +
               "S2: Rationalists contend that reason and deductive a priori logic constitute the primary basis of truth.\n" +
               "S3: Conversely, empiricists assert that all genuine knowledge originates solely in sensory experience.\n" +
               "S4: Immanuel Kant sought to synthesize these divergent traditions by arguing that sensory intuitions without concepts are blind.",
            opts: ["S1 S2 S3 S4", "S2 S3 S1 S4", "S4 S3 S2 S1", "S3 S2 S1 S4"],
            ans: "A",
            exp: "Field defined -> first thesis (Rationalism) -> antithesis (Empiricism) -> Kantian synthesis."
        },
        {
            q: "Rearrange the corporate governance analysis:\n" +
               "S1: The principal-agent problem arises when executives prioritize self-interest over shareholder equity.\n" +
               "S2: Executive compensation packages tied strictly to short-term stock gains exacerbate this hazard.\n" +
               "S3: In response, institutional investors demand extended vesting periods and clawback provisions.\n" +
               "S4: Such governance mechanisms realign executive incentives with sustainable long-term corporate health.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S4 S3 S2 S1", "S3 S4 S1 S2"],
            ans: "A",
            exp: "Theory defined -> aggravating circumstance -> corporate remedy instituted -> alignment achieved."
        },
        {
            q: "Arrange the distributed systems sequence:\n" +
               "S1: The CAP theorem posits that a distributed data store can guarantee at most two out of Consistency, Availability, and Partition Tolerance.\n" +
               "S2: Because network partitions are unavoidable in physical networks, distributed architectures must choose between CP and AP.\n" +
               "S3: Systems choosing consistency sacrifice availability by rejecting writes when cluster consensus fails.\n" +
               "S4: Conversely, systems choosing availability accept writes during partitions, reconciling conflicts later via eventual consistency.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S4 S1 S2", "S4 S3 S2 S1"],
            ans: "A",
            exp: "CAP theorem stated -> Partition inevitability -> CP branch explained -> AP branch contrasted."
        },
        {
            q: "Arrange the environmental science narrative:\n" +
               "S1: Ocean acidification is driven primarily by the absorption of anthropogenic carbon dioxide.\n" +
               "S2: Dissolved carbon dioxide reacts with seawater to form carbonic acid, reducing ocean pH.\n" +
               "S3: The subsequent depletion of carbonate ions hampers calcification in marine organisms like coral reefs.\n" +
               "S4: The collapse of coral ecosystems imperils global marine biodiversity and coastal fisheries.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S2 S1 S4", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Primary driver -> chemical mechanism -> biological consequence -> ecological catastrophe."
        },
        {
            q: "Arrange the architectural history sequence:\n" +
               "S1: Medieval Gothic architecture discarded the heavy, somber stone walls of the Romanesque era.\n" +
               "S2: The invention of flying buttresses redistributed structural weight away from vertical masonry.\n" +
               "S3: This architectural innovation permitted cathedral walls to be pierced with expansive stained-glass windows.\n" +
               "S4: Cathedrals were thus transformed into luminous, towering sanctuaries filled with celestial light.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S2 S1 S4", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Historical shift -> engineering innovation -> design enablement -> aesthetic culmination."
        }
    ],
    level4: [
        {
            q: "Arrange the high-level theoretical physics exposition:\n" +
               "S1: General Relativity and Quantum Mechanics remain mathematically incompatible at the Planck scale.\n" +
               "S2: Einstein's smooth geometric spacetime breaks down under the violent quantum fluctuations of microscopic reality.\n" +
               "S3: Theoretical frameworks such as String Theory and Loop Quantum Gravity attempt to bridge this chasm.\n" +
               "S4: However, until high-energy experimental apparatus can probe Planck-scale regimes, empirical verification remains out of reach.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S4 S3 S2 S1", "S3 S2 S1 S4"],
            ans: "A",
            exp: "Core theoretical crisis -> physical breakdown mechanism -> candidate frameworks -> empirical bottleneck."
        },
        {
            q: "Arrange the geopolitical diplomacy analysis:\n" +
               "S1: The Westphalian sovereignty model established the nation-state as the inviolable unit of international order.\n" +
               "S2: Under this regime, external intervention in domestic sovereign affairs was categorically prohibited.\n" +
               "S3: Yet modern globalization and transnational ecological crises transcend municipal borders.\n" +
               "S4: Consequently, international law increasingly recognizes multilateral mandates that curtail absolute sovereignty.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S4 S1 S2", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Westphalian premise -> core prohibition -> modern globalization challenge -> emerging multilateral paradigm."
        },
        {
            q: "Arrange the cognitive neuroscience narrative:\n" +
               "S1: Neuroplasticity fundamentally overturned the dogma that the adult mammalian brain is static.\n" +
               "S2: Synaptic pruning and long-term potentiation continuously reshape neural circuits in response to experience.\n" +
               "S3: This dynamic structural reorganization facilitates cognitive rehabilitation following ischemic strokes.\n" +
               "S4: Neuroscientists now develop targeted neuro-prosthetics to deliberately catalyze and guide this cortical remodeling.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S2 S1 S4", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Dogma overturned -> biological mechanism -> clinical application -> modern engineering intervention."
        },
        {
            q: "Arrange the macroeconomic currency discourse:\n" +
               "S1: The Bretton Woods conference anchored the post-war international monetary order to the gold-backed US dollar.\n" +
               "S2: By the late 1960s, mounting domestic expenditures and trade deficits strained American gold reserves.\n" +
               "S3: In 1971, President Nixon unilaterally suspended the dollar's convertibility into gold, precipitating the 'Nixon Shock'.\n" +
               "S4: This historic inflection point initiated the contemporary era of free-floating fiat currencies.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S2 S1 S4", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Institutional foundation -> structural strain -> political disruption -> contemporary monetary regime."
        },
        {
            q: "Arrange the philosophy of language exposition:\n" +
               "S1: In his early Tractatus, Ludwig Wittgenstein argued that language's sole legitimate function is to picture empirical reality.\n" +
               "S2: Propositions that do not map directly onto factual state-of-affairs were dismissed as strictly nonsensical.\n" +
               "S3: Decades later, his Philosophical Investigations radically repudiated this rigid picturing model.\n" +
               "S4: Instead, Wittgenstein conceptualized language as a dynamic collection of diverse 'language-games' governed by social use.",
            opts: ["S1 S2 S3 S4", "S2 S1 S3 S4", "S3 S4 S1 S2", "S4 S3 S2 S1"],
            ans: "A",
            exp: "Early philosophy defined -> consequence derived -> radical later rejection -> new pragmatic paradigm established."
        }
    ]
};

// Map each topicId to its pool
const TOPIC_POOLS_MAP = {
    "ordering-of-words": WORDS_ORDER_POOLS,
    "ordering-of-sentences": SENTENCE_ORDER_POOLS,
    "spotting-errors": SPOTTING_ERRORS_POOLS,
    "one-word-substitutes": ONE_WORD_POOLS,
    "sentence-correction": SENTENCE_CORRECTION_POOLS,
    "synonyms-and-antonyms": SYN_ANT_POOLS,
    "fill-in-the-blanks": FILL_BLANKS_POOLS,
    "idioms-and-phrases": IDIOMS_POOLS
};

/**
 * Generate 30 questions for any verbal topic and set
 * Ensures:
 * - Set 1 = Level 1 (Easy / Foundational)
 * - Set 2 = Level 2 (Medium / Placement)
 * - Set 3 = Level 3 (Hard / Advanced)
 * - Set 4 = Level 4 (Master / Expert)
 * - Mock 1 & 2 = Mixed multi-topic blend with progressive difficulty
 */
export function getVerbalQuestions(topic, type, setNumber) {
    const questions = [];
    const pool = TOPIC_POOLS_MAP[topic.topicId] || WORDS_ORDER_POOLS;

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
        // Mock Assessment: Balanced progressive mixed blend across all verbal pools
        const allKeys = Object.keys(TOPIC_POOLS_MAP);
        for (let i = 1; i <= 30; i++) {
            const topicKey = allKeys[(i - 1) % allKeys.length];
            const subPool = TOPIC_POOLS_MAP[topicKey];
            
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
