/**
 * Aptitude Arena - Comprehensive Topic Taxonomy
 * Defines all 47 topics across Quantitative, Logical, and Verbal categories.
 */

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

export const ALL_TOPICS = [
    ...QUANTITATIVE_TOPICS.map(t => ({ ...t, category: 'quantitative' })),
    ...LOGICAL_TOPICS.map(t => ({ ...t, category: 'logical' })),
    ...VERBAL_TOPICS.map(t => ({ ...t, category: 'verbal' }))
];
