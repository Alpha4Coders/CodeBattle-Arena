/**
 * Aptitude Arena - Comprehensive Learning Guides & Formula Cheat Sheets
 * Provides placement-grade concept explanations, clear examples, mathematical formulas,
 * conditions, shortcuts and FAQs for all 47 Quantitative, Logical & Verbal topics.
 */

export const TOPIC_CHEATSHEETS = {
    // -------------------------------------------------------------------------
    // 1. SPEED, TIME AND DISTANCE
    // -------------------------------------------------------------------------
    "speed-time-and-distance": {
        title: "Speed, Time and Distance: Concepts, Formulas, and Clear Examples",
        content: `
            <div class="cheat-section">
                <h3>Overview & Core Relationship</h3>
                <p>Speed, Time and Distance describes how far an object travels, how long the journey takes, and how quickly the distance is covered. Speed is the distance travelled per unit of time. Distance is the length of the journey. Time is the duration of that journey.</p>
                <div class="example-card">
                    <strong>Example:</strong> If a car covers 168 km in 3 hours, it covers <code>168 / 3 = 56 km</code> in one hour. Its speed is therefore <strong>56 km/h</strong>.
                </div>
                <div class="formula-box">
                    <div class="formula-item"><code>Speed = Distance / Time</code></div>
                    <div class="formula-item"><code>Distance = Speed × Time</code></div>
                    <div class="formula-item"><code>Time = Distance / Speed</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Unit Conversions & Conversions Rule</h3>
                <p>Units must always match before calculating. Convert between systems using standard ratios:</p>
                <ul>
                    <li><strong>km/h to m/s:</strong> Multiply by <code>5 / 18</code></li>
                    <li><strong>m/s to km/h:</strong> Multiply by <code>18 / 5</code></li>
                    <li><strong>Benchmark speeds:</strong> 18, 36, 54, 72, 90 km/h = 5, 10, 15, 20, 25 m/s.</li>
                </ul>
                <div class="example-card">
                    <strong>Example:</strong> Convert 54 km/h to m/s: <code>54 × (5/18) = 15 m/s</code>.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Average Speed</h3>
                <p>Average speed is <strong>Total Distance / Total Time</strong>. It is never the simple average of speeds unless time intervals are identical.</p>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Equal Distances (Harmonic Mean)</h4>
                        <p>When equal distances are covered at speeds <code>u</code> and <code>v</code>:</p>
                        <code>Average Speed = 2uv / (u + v)</code>
                    </div>
                    <div class="rule-box">
                        <h4>Equal Time Intervals</h4>
                        <p>When speeds <code>u</code> and <code>v</code> are run for equal duration:</p>
                        <code>Average Speed = (u + v) / 2</code>
                    </div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Relative Speed & Stoppages</h3>
                <ul>
                    <li><strong>Opposite Directions:</strong> Objects close together at <code>u + v</code>.</li>
                    <li><strong>Same Direction:</strong> Gap closes at <code>|u - v|</code>.</li>
                    <li><strong>Stoppages per hour:</strong> <code>60 × (1 - Speed_with_stops / Speed_without_stops) minutes</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Basic motion", formula: "D = S × T, S = D / T, T = D / S", condition: "Units must be consistent" },
            { situation: "km/h to m/s", formula: "Speed × 5/18", condition: "Distance in m, Time in s" },
            { situation: "m/s to km/h", formula: "Speed × 18/5", condition: "Distance in km, Time in h" },
            { situation: "Equal distances at speeds u, v", formula: "2uv / (u + v)", condition: "Distances must be equal" },
            { situation: "Opposite direction relative speed", formula: "u + v", condition: "Moving towards or away" },
            { situation: "Same direction relative speed", formula: "|u - v|", condition: "Chasing / overtaking" },
            { situation: "Stoppage time per hour", formula: "60 × (1 - S_stops / S_nonstop)", condition: "Measured per 1 hour" }
        ],
        shortcuts: [
            "Check average speed range: it MUST lie between the lowest and highest speeds.",
            "For fixed distance, speed and time ratios are inverse: S1 : S2 = T2 : T1.",
            "When two objects start towards each other at the same time, distances travelled are directly in the ratio of their speeds."
        ],
        faqs: [
            { question: "Is average speed always the average of two speeds?", answer: "No. Average speed is Total Distance / Total Time. For equal distances, use the harmonic mean 2uv/(u+v)." },
            { question: "When do relative speeds add?", answer: "Relative speeds add when two objects move in opposite directions, as both close the separation gap." }
        ]
    },

    // -------------------------------------------------------------------------
    // 2. NUMBER SYSTEM
    // -------------------------------------------------------------------------
    "number-system": {
        title: "Number System: Core Concepts, Divisibility Rules, Remainders, and Solved Examples",
        content: `
            <div class="cheat-section">
                <h3>Classification of Numbers</h3>
                <p>The real number system consists of Rational numbers (fractions and integers) and Irrational numbers (non-terminating, non-repeating decimals such as &radic;2, &pi;). Prime numbers are positive integers greater than 1 that have exactly two distinct factors: 1 and itself (2 is the only even prime).</p>
                <div class="example-card">
                    <strong>Prime Check Test:</strong> To test if <code>N</code> is prime, test divisibility by primes up to <code>&radic;N</code>. For 173: <code>&radic;173 &approx; 13.1</code>. Testing primes 2, 3, 5, 7, 11, 13 shows none divide 173, so 173 is prime.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Divisibility Rules</h3>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>2, 4, 8, 16</h4>
                        <p>Look at the last <code>k</code> digits for <code>2^k</code> (Last digit for 2, last 2 digits for 4, last 3 digits for 8).</p>
                    </div>
                    <div class="rule-box">
                        <h4>3 and 9</h4>
                        <p>Sum of digits must be divisible by 3 (for 3) or by 9 (for 9).</p>
                    </div>
                    <div class="rule-box">
                        <h4>6 and 12</h4>
                        <p>Divisible by coprime factors: 6 = 2 × 3; 12 = 3 × 4.</p>
                    </div>
                    <div class="rule-box">
                        <h4>11</h4>
                        <p>Difference between sum of digits in odd places and even places must be 0 or a multiple of 11.</p>
                    </div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Unit Digit & Cyclicity</h3>
                <p>The unit digit of powers repeats cyclically with a period of 4 (or 1, 2 for some numbers):</p>
                <ul>
                    <li><strong>0, 1, 5, 6:</strong> Cyclicity 1. Unit digit never changes (e.g., 6^any = ends in 6).</li>
                    <li><strong>4 and 9:</strong> Cyclicity 2. <code>4^odd = 4, 4^even = 6</code>; <code>9^odd = 9, 9^even = 1</code>.</li>
                    <li><strong>2, 3, 7, 8:</strong> Cyclicity 4. Divide power by 4 and take remainder <code>r</code> (if remainder is 0, use power 4).</li>
                </ul>
                <div class="example-card">
                    <strong>Example:</strong> Find the unit digit of <code>7^142</code>.<br>
                    Divide 142 by 4: <code>142 = 35 × 4 + 2</code> (remainder 2).<br>
                    Unit digit = <code>7^2 = 49 &rarr; 9</code>.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Number of Factors and Trailing Zeroes</h3>
                <p>If <code>N = p^a &times; q^b &times; r^c</code> where p, q, r are prime factors:</p>
                <div class="formula-box">
                    <div class="formula-item"><code>Total Factors = (a + 1)(b + 1)(c + 1)</code></div>
                    <div class="formula-item"><code>Trailing zeroes in n! = &lfloor;n/5&rfloor; + &lfloor;n/25&rfloor; + &lfloor;n/125&rfloor; + ...</code></div>
                </div>
            </div>
        `,
        formulas: [
            { situation: "Total factors of N = p^a q^b r^c", formula: "(a + 1)(b + 1)(c + 1)", condition: "p, q, r must be prime" },
            { situation: "Sum of factors of N", formula: "[(p^(a+1) - 1)/(p - 1)] × [(q^(b+1) - 1)/(q - 1)]", condition: "Prime factorized" },
            { situation: "Trailing zeroes in n!", formula: "Sum of floor(n / 5^k) for k >= 1", condition: "Factorial expression" },
            { situation: "Divisibility by 11", formula: "|Sum(odd pos) - Sum(even pos)| = 0 or 11k", condition: "Base 10 integers" },
            { situation: "Unit digit of N^P", formula: "Base_unit^(P mod 4)", condition: "If P mod 4 == 0, use power 4" }
        ],
        shortcuts: [
            "Any 6-digit number formed by repeating a 3-digit number (e.g. 738738) is always divisible by 7, 11, and 13 (because 1001 = 7 × 11 × 13).",
            "The product of any k consecutive integers is always divisible by k! (k factorial).",
            "A number has an odd number of factors if and only if it is a perfect square."
        ],
        faqs: [
            { question: "Why is 1 not considered a prime number?", answer: "By mathematical definition, a prime number has exactly two distinct positive divisors: 1 and itself. 1 has only one divisor (1), so it is neither prime nor composite." },
            { question: "How to quickly find remainder of a large power?", answer: "Use Euler's or Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) mod p = 1." }
        ]
    },

    // -------------------------------------------------------------------------
    // 3. HCF AND LCM
    // -------------------------------------------------------------------------
    "hcf-and-lcm": {
        title: "HCF and LCM: Core Concepts, Fraction Rules, and Bell/Step Problems",
        content: `
            <div class="cheat-section">
                <h3>Definitions & Fundamental Theorem</h3>
                <p><strong>Highest Common Factor (HCF / GCD):</strong> The greatest number which divides each of the given numbers without leaving a remainder.<br>
                <strong>Lowest Common Multiple (LCM):</strong> The smallest positive number that is a multiple of two or more numbers.</p>
                <div class="formula-box">
                    <div class="formula-item"><code>Product of Two Numbers = HCF × LCM</code></div>
                    <div class="formula-item"><code>HCF is always a factor of LCM</code></div>
                </div>
                <div class="example-card">
                    <strong>Example:</strong> For numbers 24 and 36: <code>24 = 2^3 × 3^1</code>, <code>36 = 2^2 × 3^2</code>.<br>
                    HCF = lowest powers = <code>2^2 × 3^1 = 12</code>.<br>
                    LCM = highest powers = <code>2^3 × 3^2 = 72</code>.<br>
                    Verification: <code>24 × 36 = 864 = 12 × 72</code>.
                </div>
            </div>

            <div class="cheat-section">
                <h3>HCF and LCM of Fractions</h3>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>HCF of Fractions</h4>
                        <code>HCF = HCF(Numerators) / LCM(Denominators)</code>
                    </div>
                    <div class="rule-box">
                        <h4>LCM of Fractions</h4>
                        <code>LCM = LCM(Numerators) / HCF(Denominators)</code>
                    </div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Classic Placement Problem Types</h3>
                <ul>
                    <li><strong>Bells ringing / Traffic lights:</strong> Bells ring at intervals of t1, t2, t3 seconds. They will toll together next after <code>LCM(t1, t2, t3)</code> seconds.</li>
                    <li><strong>Greatest number dividing x, y, z leaving same remainder r:</strong> Calculate <code>HCF(|x - y|, |y - z|, |z - x|)</code>.</li>
                    <li><strong>Smallest number divided by x, y, z leaving common remainder r:</strong> <code>LCM(x, y, z) + r</code>.</li>
                    <li><strong>Smallest number divided by x, y, z leaving remainders a, b, c where (x-a = y-b = z-c = k):</strong> <code>LCM(x, y, z) - k</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Product relation", formula: "A × B = HCF(A, B) × LCM(A, B)", condition: "Valid strictly for two numbers" },
            { situation: "HCF of fractions", formula: "HCF(Numerators) / LCM(Denominators)", condition: "Fractions in simplest form" },
            { situation: "LCM of fractions", formula: "LCM(Numerators) / HCF(Denominators)", condition: "Fractions in simplest form" },
            { situation: "Bells ringing together", formula: "Interval = LCM(t1, t2, t3, ...)", condition: "Simultaneous events" },
            { situation: "Same remainder r with unknown r", formula: "HCF(|x-y|, |y-z|, |z-x|)", condition: "Dividing x, y, z" }
        ],
        shortcuts: [
            "If two numbers are in the ratio a : b, their numbers are HCF × a and HCF × b, and their LCM is HCF × a × b.",
            "If the difference between two numbers is small, their HCF must be either that difference or a factor of that difference.",
            "Always simplify fractions to their irreducible lowest terms before applying fraction HCF/LCM formulas."
        ],
        faqs: [
            { question: "Does A × B × C = HCF(A,B,C) × LCM(A,B,C)?", answer: "No! The product formula holds ONLY for two numbers. For three numbers, higher order factors overlap." },
            { question: "How to find greatest number dividing 43, 91, 183 leaving same remainder?", answer: "Find HCF of differences: |91-43|=48, |183-91|=92, |183-43|=140. HCF(48, 92, 140) = 4." }
        ]
    },

    // -------------------------------------------------------------------------
    // 4. TIME AND WORK
    // -------------------------------------------------------------------------
    "time-and-work": {
        title: "Time and Work: Efficiency, Man-Days Formula, and Alternating Shifts",
        content: `
            <div class="cheat-section">
                <h3>The Unit Work & Efficiency Method</h3>
                <p>Work is considered as 1 complete unit, or conveniently as the <strong>LCM of individual completion times</strong> (total work units). Efficiency is the rate of work done per unit time.</p>
                <div class="formula-box">
                    <div class="formula-item"><code>Efficiency (Work/day) = Total Work / Time taken</code></div>
                    <div class="formula-item"><code>Time taken = Total Work / Combined Efficiency</code></div>
                </div>
                <div class="example-card">
                    <strong>LCM Method Example:</strong> A takes 12 days, B takes 18 days. Total Work = LCM(12, 18) = 36 units.<br>
                    A's rate = <code>36 / 12 = 3 units/day</code>.<br>
                    B's rate = <code>36 / 18 = 2 units/day</code>.<br>
                    Together rate = <code>3 + 2 = 5 units/day</code>.<br>
                    Days needed together = <code>36 / 5 = 7.2 days</code> (or 7 days and 4.8 hours).
                </div>
            </div>

            <div class="cheat-section">
                <h3>The Universal Man-Days Formula</h3>
                <p>When men of varying efficiencies work different hours per day on different amounts of work:</p>
                <div class="formula-box">
                    <code>(M1 × D1 × H1 × E1) / W1 = (M2 × D2 × H2 × E2) / W2</code>
                </div>
                <p>Where <code>M</code> = Men/Workers, <code>D</code> = Days, <code>H</code> = Hours/day, <code>E</code> = Efficiency factor, and <code>W</code> = Work done or Wages earned.</p>
            </div>

            <div class="cheat-section">
                <h3>Alternating Work & Wages</h3>
                <ul>
                    <li><strong>Alternating Days:</strong> Group work into pairs of days (A day 1, B day 2). Calculate complete 2-day cycles first, then allocate remaining fraction.</li>
                    <li><strong>Wages Division:</strong> Wages are distributed strictly in proportion to the <strong>actual amount of work done</strong> by each person, which simplifies to efficiency ratio if they work for the same duration.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Two workers together", formula: "Time = (A × B) / (A + B)", condition: "A and B working together" },
            { situation: "Three workers together", formula: "Time = (A × B × C) / (AB + BC + CA)", condition: "Individual days A, B, C" },
            { situation: "General Man-Days relation", formula: "(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2", condition: "Proportional work scale" },
            { situation: "Remaining work", formula: "1 - (Work done so far)", condition: "Work as single unit" },
            { situation: "Wages ratio", formula: "Wage_A : Wage_B = Work_A : Work_B", condition: "Proportional compensation" }
        ],
        shortcuts: [
            "Always assign Total Work = LCM of given time numbers to work purely with integers and avoid messy fractions.",
            "If A is k times as efficient as B, A takes 1/k times the time B takes.",
            "If A leaves before completion, assume A didn't leave and add his would-be work to the total, then divide by combined rate."
        ],
        faqs: [
            { question: "How to handle women and children equivalency?", answer: "Convert to a common unit: e.g. if 2 men = 3 women, 1 woman = 2/3 man. Substitute into the M1D1 formula." },
            { question: "What if someone works negative work?", answer: "Treat them like a drain pipe: their efficiency is subtracted from the group's total positive work rate." }
        ]
    },

    // -------------------------------------------------------------------------
    // 5. PIPES AND CISTERNS
    // -------------------------------------------------------------------------
    "pipes-and-cisterns": {
        title: "Pipes and Cisterns: Inlets, Outlets, Leakages, and Tank Capacities",
        content: `
            <div class="cheat-section">
                <h3>Inlets vs Outlets</h3>
                <p>An <strong>Inlet</strong> fills the cistern (positive rate +), while an <strong>Outlet or Leak</strong> empties it (negative rate -). The total capacity of the cistern is taken as the LCM of all individual times.</p>
                <div class="example-card">
                    <strong>Example:</strong> Pipe A fills in 10 hrs, Pipe B fills in 15 hrs, and Drain C empties in 20 hrs.<br>
                    Tank capacity = LCM(10, 15, 20) = 60 units.<br>
                    A rate = <code>+6 units/hr</code>, B rate = <code>+4 units/hr</code>, C rate = <code>-3 units/hr</code>.<br>
                    Net rate = <code>6 + 4 - 3 = +7 units/hr</code>.<br>
                    Time to fill empty tank = <code>60 / 7 = 8 4/7 hours</code>.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Tank Leak Calculations</h3>
                <p>If an inlet pipe fills a tank in <code>T</code> hours, but due to a leak at the bottom takes <code>T + t</code> hours:</p>
                <div class="formula-box">
                    <code>Leak emptying rate = (1 / T) - [1 / (T + t)]</code>
                    <code>Time for leak alone to empty full tank = [T(T + t)] / t hours</code>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Alternating Pipes with Leakage</h3>
                <p>When pipes open alternately, calculate work in completed cycles. Be careful on the final cycle: if an inlet fills the tank during its turn, the tank is FULL and the cycle terminates before the drain pipe acts!</p>
            </div>
        `,
        formulas: [
            { situation: "Net fill rate with leak", formula: "Net = (1/A) - (1/Leak)", condition: "Leak empties tank" },
            { situation: "Leak alone emptying time", formula: "Time = (T × T_leak) / (T_leak - T)", condition: "Given normal and delayed times" },
            { situation: "Two inlets and one outlet", formula: "Rate = 1/A + 1/B - 1/C", condition: "Simultaneous operation" },
            { situation: "Cistern Capacity", formula: "Pumping rate (litres/min) × Emptying time (min)", condition: "Flow rate given" }
        ],
        shortcuts: [
            "Beware of the terminal filling step in alternating pipe problems: once the tank reaches 100% full, the cycle stops immediately.",
            "Use the LCM method for tank capacity just like Time & Work; assign negative signs to emptying rates.",
            "If an outlet pipe empties 2/3 of a tank in 12 hours, it empties the full tank in 12 × (3/2) = 18 hours."
        ],
        faqs: [
            { question: "Can a tank ever fill if emptying pipe is faster than inlet?", answer: "No. If emptying rate > filling rate, net rate is negative and an empty tank can never be filled." },
            { question: "How to calculate when to turn off a pipe?", answer: "Calculate the exact volume filled by the other pipe during the required duration, and let the first pipe fill the exact remaining volume." }
        ]
    },

    // -------------------------------------------------------------------------
    // 6. TRAINS, BOATS AND STREAMS
    // -------------------------------------------------------------------------
    "trains-boats-streams": {
        title: "Trains, Boats and Streams: Relative Speed, Bridge Crossings, and River Currents",
        content: `
            <div class="cheat-section">
                <h3>Train Motion & Crossing Distances</h3>
                <p>When a train moves, the distance covered during a crossing depends on the size of the object crossed:</p>
                <ul>
                    <li><strong>Passing a point object (pole, standing man, signal post):</strong> Distance = <code>Length of Train (L)</code></li>
                    <li><strong>Passing an extended stationary object (platform, bridge, tunnel of length P):</strong> Distance = <code>L + P</code></li>
                    <li><strong>Two trains crossing each other:</strong> Distance = <code>L1 + L2</code> (always sum of lengths!)</li>
                </ul>
                <div class="formula-box">
                    <div>Opposite directions crossing time: <code>Time = (L1 + L2) / (S1 + S2)</code></div>
                    <div>Same direction overtaking time: <code>Time = (L1 + L2) / |S1 - S2|</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Boats and Streams (River Currents)</h3>
                <p>Let <code>b</code> = speed of boat in still water, and <code>c</code> = speed of stream/current:</p>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Downstream (With Current)</h4>
                        <code>Downstream Speed D = b + c</code>
                    </div>
                    <div class="rule-box">
                        <h4>Upstream (Against Current)</h4>
                        <code>Upstream Speed U = b - c</code>
                    </div>
                </div>
                <div class="formula-box">
                    <div>Boat speed in still water: <code>b = (D + U) / 2</code></div>
                    <div>Current speed: <code>c = (D - U) / 2</code></div>
                </div>
                <div class="example-card">
                    <strong>Example:</strong> A boat travels 36 km downstream in 3 hrs (D = 12 km/h) and 24 km upstream in 4 hrs (U = 6 km/h).<br>
                    Boat speed in still water = <code>(12 + 6) / 2 = 9 km/h</code>.<br>
                    Current speed = <code>(12 - 6) / 2 = 3 km/h</code>.
                </div>
            </div>
        `,
        formulas: [
            { situation: "Train crossing pole", formula: "Time = L / S", condition: "L in metres, S in m/s" },
            { situation: "Train crossing platform", formula: "Time = (L + P) / S", condition: "P = platform length" },
            { situation: "Two trains crossing", formula: "Time = (L1 + L2) / Relative_Speed", condition: "Sum or diff of speeds" },
            { situation: "Still water boat speed", formula: "b = (D + U) / 2", condition: "D = downstream, U = upstream" },
            { situation: "Stream current speed", formula: "c = (D - U) / 2", condition: "D > U always" },
            { situation: "Round trip average river speed", formula: "2DU / (D + U) = (b^2 - c^2) / b", condition: "Equal distance round trip" }
        ],
        shortcuts: [
            "Always check units: train lengths are almost always given in metres, but speeds in km/h. Multiply speed by 5/18 immediately!",
            "When a man inside a moving train observes another train crossing him, use ONLY the length of the other train in the numerator.",
            "If a boat takes n times longer upstream than downstream over the same distance: b / c = (n + 1) / (n - 1)."
        ],
        faqs: [
            { question: "Why is current subtracted twice between downstream and upstream?", answer: "Because D = b + c and U = b - c. The difference D - U = 2c. Hence dropping from downstream to upstream loses twice the current." },
            { question: "What if the boat engine stops?", answer: "The boat drifts purely with the current at speed c in the downstream direction." }
        ]
    },

    // -------------------------------------------------------------------------
    // 7. PERMUTATION AND COMBINATIONS
    // -------------------------------------------------------------------------
    "permutation-and-combinations": {
        title: "Permutation and Combinations: Counting Principles, Arrangements, and Selections",
        content: `
            <div class="cheat-section">
                <h3>Permutation (Order Matters) vs Combination (Order Doesn't Matter)</h3>
                <p>Use <strong>Permutation (nPr)</strong> when arrangement, position, rank, or order is significant (e.g. word anagrams, digit codes, podium finishes).<br>
                Use <strong>Combination (nCr)</strong> when group selection, team picking, or collection is involved without order (e.g. selecting committee members, cards, handshakes).</p>
                <div class="formula-box">
                    <div class="formula-item"><code>nPr = n! / (n - r)!</code></div>
                    <div class="formula-item"><code>nCr = n! / [r! × (n - r)!] = nPr / r!</code></div>
                    <div class="formula-item"><code>nCr = nC(n - r)</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Special Permutation Cases</h3>
                <ul>
                    <li><strong>Permutations with Repetition:</strong> Distinct arrangements of n items where p items are alike of type 1, q of type 2: <code>n! / (p! × q!)</code></li>
                    <li><strong>Circular Permutations:</strong> Arranging n distinct objects around a circle: <code>(n - 1)!</code>. (For beads on a necklace / garland where clockwise and anticlockwise are indistinguishable: <code>(n - 1)! / 2</code>).</li>
                    <li><strong>Grouping Method (Items Together):</strong> Bundle items that must be together into 1 super-item, arrange the group, then multiply by internal arrangements.</li>
                    <li><strong>Gap Method (Items Never Together):</strong> Arrange other items first, then place constrained items in the gaps created.</li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>Handshake and Diagonal Formulas</h3>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Handshakes in group of n people</h4>
                        <code>Handshakes = nC2 = n(n - 1) / 2</code>
                    </div>
                    <div class="rule-box">
                        <h4>Diagonals in an n-sided polygon</h4>
                        <code>Diagonals = nC2 - n = n(n - 3) / 2</code>
                    </div>
                </div>
            </div>
        `,
        formulas: [
            { situation: "Permutations of n distinct objects", formula: "nPr = n! / (n - r)!", condition: "Order matters" },
            { situation: "Combinations of n objects taken r", formula: "nCr = n! / [r! (n - r)!]", condition: "Order does not matter" },
            { situation: "Identical items arrangements", formula: "n! / (p! q! r!)", condition: "p, q, r are identical sets" },
            { situation: "Circular arrangement", formula: "(n - 1)!", condition: "Distinct seating" },
            { situation: "Polygon diagonals", formula: "n(n - 3) / 2", condition: "n-sided polygon" }
        ],
        shortcuts: [
            "Remember nC0 = nCn = 1, and nC1 = n.",
            "To calculate combinations fast: nC2 = n(n-1)/2, nC3 = n(n-1)(n-2)/6.",
            "Total subsets of a set with n elements = 2^n. Non-empty subsets = 2^n - 1."
        ],
        faqs: [
            { question: "Why is circular permutation (n-1)! instead of n!?", answer: "Because in a circle there is no fixed starting head or tail. Shifting everyone by one position yields the exact same relative ordering; fixing 1 person anchors the circle." },
            { question: "How to handle 'at least one' selection problems?", answer: "Use the complementary counting technique: Total Selections - Selections with NONE of that item." }
        ]
    },

    // -------------------------------------------------------------------------
    // 8. PROBABILITY
    // -------------------------------------------------------------------------
    "probability": {
        title: "Probability: Sample Spaces, Addition Rule, Independent Events, and Card/Dice Setups",
        content: `
            <div class="cheat-section">
                <h3>Classical Probability Foundations</h3>
                <p>The probability of an event <code>E</code> occurring in a sample space <code>S</code> of equally likely outcomes is:</p>
                <div class="formula-box">
                    <div class="formula-item"><code>P(E) = n(E) / n(S) = (Favourable Outcomes) / (Total Outcomes)</code></div>
                    <div class="formula-item"><code>0 &le; P(E) &le; 1</code> and <code>P(E') = 1 - P(E)</code> (Complement rule)</div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Addition & Multiplication Rules</h3>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Addition Rule (OR)</h4>
                        <p>For any two events A and B:</p>
                        <code>P(A &cup; B) = P(A) + P(B) - P(A &cap; B)</code>
                        <p class="rule-note">If mutually exclusive: <code>P(A &cap; B) = 0</code></p>
                    </div>
                    <div class="rule-box">
                        <h4>Multiplication Rule (AND)</h4>
                        <p>If events A and B are independent:</p>
                        <code>P(A &cap; B) = P(A) &times; P(B)</code>
                    </div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Standard Probability Setups</h3>
                <ul>
                    <li><strong>Deck of 52 Playing Cards:</strong> 4 suits of 13 cards each (Spades & Clubs are Black; Hearts & Diamonds are Red). 12 Face cards (4 Kings, 4 Queens, 4 Jacks). 4 Aces.</li>
                    <li><strong>Two 6-sided Dice (36 outcomes):</strong> Sum varies from 2 to 12. Most frequent sum is 7 with probability <code>6 / 36 = 1/6</code>.</li>
                    <li><strong>Coin Tosses (2^n outcomes):</strong> Probability of exactly r heads in n tosses = <code>nCr / 2^n</code>.</li>
                    <li><strong>At Least One Shortcut:</strong> <code>P(At least one success) = 1 - P(Zero successes)</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Basic Definition", formula: "P(E) = n(E) / n(S)", condition: "Equally likely outcomes" },
            { situation: "Complement Event", formula: "P(Not A) = 1 - P(A)", condition: "Always valid" },
            { situation: "General Union", formula: "P(A or B) = P(A) + P(B) - P(A and B)", condition: "Any events" },
            { situation: "Independent Events", formula: "P(A and B) = P(A) × P(B)", condition: "Events don't affect each other" },
            { situation: "At least one condition", formula: "P(At least 1) = 1 - P(None)", condition: "Independent trials" }
        ],
        shortcuts: [
            "Whenever you see 'at least one', immediately calculate 1 minus the probability of none.",
            "In card problems without replacement, remember the denominator decreases (52 &rarr; 51 &rarr; 50).",
            "In two dice problems, sums symmetric around 7 have equal chances: P(sum=6) = P(sum=8) = 5/36."
        ],
        faqs: [
            { question: "What is the difference between mutually exclusive and independent events?", answer: "Mutually exclusive means they cannot occur together (P(A and B) = 0). Independent means the occurrence of one does not affect the probability of the other." },
            { question: "Can a probability ever be negative or greater than 1?", answer: "Never. P(E) is strictly bounded: 0 &le; P(E) &le; 1. 0 represents impossible event, 1 represents certainty." }
        ]
    },

    // -------------------------------------------------------------------------
    // 9. GEOMETRY
    // -------------------------------------------------------------------------
    "geometry": {
        title: "Geometry: Triangles, Circles, Tangents, Angles, and Area Formulas",
        content: `
            <div class="cheat-section">
                <h3>Triangles: Angles & Area</h3>
                <ul>
                    <li>Sum of internal angles of any triangle = <strong>180&deg;</strong>. Exterior angle = sum of two opposite interior angles.</li>
                    <li><strong>Heron's Formula:</strong> <code>Area = &radic;[s(s - a)(s - b)(s - c)]</code> where semi-perimeter <code>s = (a + b + c) / 2</code>.</li>
                    <li><strong>Equilateral Triangle:</strong> Area = <code>(&radic;3 / 4)a^2</code>; Height = <code>(&radic;3 / 2)a</code>.</li>
                    <li><strong>Inradius (r) & Circumradius (R):</strong> <code>r = &Delta; / s</code> and <code>R = abc / (4&Delta;)</code>.</li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>Similarity & Pythagoras Theorem</h3>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Pythagoras Theorem</h4>
                        <p>For a right triangle: <code>Hypotenuse^2 = Base^2 + Perpendicular^2</code>.</p>
                        <p class="rule-note">Triplets: (3,4,5), (5,12,13), (7,24,25), (8,15,17), (9,40,41).</p>
                    </div>
                    <div class="rule-box">
                        <h4>Similar Triangles Theorem</h4>
                        <p>If &Delta;ABC &sim; &Delta;DEF:</p>
                        <code>Area(ABC) / Area(DEF) = (Side1 / Side2)^2</code>
                    </div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Circles & Tangent Theorems</h3>
                <ul>
                    <li>The angle subtended by an arc at the center is <strong>twice</strong> the angle subtended at any point on the circumference.</li>
                    <li>Angle in a semicircle is a <strong>right angle (90&deg;)</strong>.</li>
                    <li>Opposite angles of a cyclic quadrilateral add up to <strong>180&deg;</strong>.</li>
                    <li><strong>Tangent-Secant Theorem:</strong> If secant PAB and tangent PT are drawn from external point P: <code>PT^2 = PA &times; PB</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Heron's area formula", formula: "sqrt(s(s-a)(s-b)(s-c))", condition: "s = (a+b+c)/2" },
            { situation: "Equilateral triangle area", formula: "(sqrt(3)/4) × a^2", condition: "All sides equal to a" },
            { situation: "Inradius of any triangle", formula: "r = Area / s", condition: "s = semi-perimeter" },
            { situation: "Tangent-Secant relation", formula: "PT^2 = PA × PB", condition: "Secant PAB, tangent PT" },
            { situation: "Polygon sum of interior angles", formula: "(n - 2) × 180°", condition: "n-sided convex polygon" }
        ],
        shortcuts: [
            "Memorize common Pythagorean triplets (3-4-5, 5-12-13, 8-15-17, 7-24-25) and their multiples to avoid root calculations.",
            "Ratio of areas of two similar figures is always the square of their linear dimension ratio.",
            "The circumcenter of a right-angled triangle lies exactly on the midpoint of its hypotenuse; R = Hypotenuse / 2."
        ],
        faqs: [
            { question: "What is an Apollonius theorem?", answer: "For triangle with median AD to side BC: AB^2 + AC^2 = 2(AD^2 + BD^2)." },
            { question: "What is the sum of exterior angles of any convex polygon?", answer: "Always exactly 360°, regardless of the number of sides." }
        ]
    },

    // -------------------------------------------------------------------------
    // 10. MIXTURES AND ALLIGATIONS
    // -------------------------------------------------------------------------
    "mixtures-and-alligations": {
        title: "Mixtures and Alligations: The Rule of Alligation, Dilution, and Replacement",
        content: `
            <div class="cheat-section">
                <h3>The Alligation Cross Rule</h3>
                <p>The rule of alligation enables fast calculation of the ratio in which two ingredients of prices (or concentrations) <code>C</code> (Cheaper) and <code>D</code> (Dearer) must be blended to produce a mixture of mean price <code>M</code>.</p>
                <div class="formula-box">
                    <div class="formula-item"><code>(Quantity of Cheaper) / (Quantity of Dearer) = (Dearer Price - Mean Price) / (Mean Price - Cheaper Price)</code></div>
                    <div class="formula-item"><code>Q_cheaper / Q_dearer = (D - M) / (M - C)</code></div>
                </div>
                <div class="example-card">
                    <strong>Example:</strong> In what ratio must rice at &dollar;40/kg be mixed with rice at &dollar;60/kg to sell the mixture at &dollar;54/kg?<br>
                    Cheaper C = 40, Dearer D = 60, Mean M = 54.<br>
                    <code>(D - M) = 60 - 54 = 6</code><br>
                    <code>(M - C) = 54 - 40 = 14</code><br>
                    Ratio = <code>6 : 14 = 3 : 7</code>.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Repeated Replacement / Dilution Formula</h3>
                <p>A vessel contains <code>V</code> litres of a pure liquid. If <code>x</code> litres are withdrawn and replaced with water, and this process is repeated <code>n</code> times:</p>
                <div class="formula-box">
                    <code>Liquid remaining = Initial Volume × [1 - (x / V)]^n</code>
                </div>
                <div class="example-card">
                    <strong>Example:</strong> A container has 80L pure milk. 8L is replaced with water twice.<br>
                    Remaining milk = <code>80 × [1 - (8/80)]^2 = 80 × (0.9)^2 = 80 × 0.81 = 64.8 Litres</code>.<br>
                    Water in container = <code>80 - 64.8 = 15.2 Litres</code>.
                </div>
            </div>
        `,
        formulas: [
            { situation: "Rule of alligation ratio", formula: "(D - M) / (M - C)", condition: "C < M < D" },
            { situation: "Repeated dilution liquid remaining", formula: "V × (1 - x / V)^n", condition: "n equal replacements" },
            { situation: "Mean mixture price", formula: "M = (Q1 × C1 + Q2 × C2) / (Q1 + Q2)", condition: "Weighted mean" }
        ],
        shortcuts: [
            "All prices used in the alligation cross MUST be Cost Prices (CP). If Selling Price (SP) is given, convert it to CP first!",
            "Water cost is always taken as &dollar;0 unless stated otherwise.",
            "Alligation works for any rate quantities: concentrations (%), speeds (km/h), profit percentages, or costs."
        ],
        faqs: [
            { question: "Can alligation be applied to solve average speed problems?", answer: "Yes! If you alligate speeds, the resulting ratio is in terms of TIME spent, not distance travelled." },
            { question: "What if three items are mixed?", answer: "Pair them into two binary mixtures that span across the mean price and combine the respective ratios." }
        ]
    },

    // -------------------------------------------------------------------------
    // 11. ALGEBRA
    // -------------------------------------------------------------------------
    "algebra": {
        title: "Algebra: Identities, Quadratic Equations, Roots, and Polynomials",
        content: `
            <div class="cheat-section">
                <h3>Essential Algebraic Identities</h3>
                <div class="formula-box">
                    <div class="formula-item"><code>(a + b)^2 = a^2 + 2ab + b^2</code></div>
                    <div class="formula-item"><code>(a - b)^2 = a^2 - 2ab + b^2</code></div>
                    <div class="formula-item"><code>a^2 - b^2 = (a - b)(a + b)</code></div>
                    <div class="formula-item"><code>(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)</code></div>
                    <div class="formula-item"><code>a^3 + b^3 = (a + b)(a^2 - ab + b^2)</code></div>
                    <div class="formula-item"><code>a^3 - b^3 = (a - b)(a^2 + ab + b^2)</code></div>
                    <div class="formula-item"><code>a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)</code></div>
                </div>
                <div class="tip-card">
                    <strong>Golden Identity:</strong> If <code>a + b + c = 0</code>, then <code>a^3 + b^3 + c^3 = 3abc</code>.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Quadratic Equations & Roots</h3>
                <p>For standard quadratic equation <code>ax^2 + bx + c = 0</code> with roots &alpha; and &beta;:</p>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Roots Formulation</h4>
                        <code>x = [-b &plusmn; &radic;(b^2 - 4ac)] / (2a)</code>
                    </div>
                    <div class="rule-box">
                        <h4>Sum & Product of Roots</h4>
                        <code>&alpha; + &beta; = -b / a</code><br>
                        <code>&alpha; &times; &beta; = c / a</code>
                    </div>
                </div>
                <p><strong>Discriminant (D = b^2 - 4ac) Nature:</strong></p>
                <ul>
                    <li><code>D > 0:</code> Real and distinct roots.</li>
                    <li><code>D = 0:</code> Real and equal roots (<code>-b / 2a</code>).</li>
                    <li><code>D < 0:</code> Complex / imaginary conjugate roots.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Quadratic formula", formula: "x = [-b ± sqrt(b^2 - 4ac)] / (2a)", condition: "a != 0" },
            { situation: "Sum of roots", formula: "alpha + beta = -b / a", condition: "Standard ax^2+bx+c=0" },
            { situation: "Product of roots", formula: "alpha × beta = c / a", condition: "Standard ax^2+bx+c=0" },
            { situation: "Form quadratic from roots", formula: "x^2 - (Sum)x + (Product) = 0", condition: "Roots known" },
            { situation: "Cubic conditional identity", formula: "a^3 + b^3 + c^3 = 3abc", condition: "When a + b + c = 0" }
        ],
        shortcuts: [
            "If x + 1/x = k, then x^2 + 1/x^2 = k^2 - 2, and x^3 + 1/x^3 = k^3 - 3k.",
            "If x - 1/x = k, then x^2 + 1/x^2 = k^2 + 2, and x^3 - 1/x^3 = k^3 + 3k.",
            "For minimum value of ax^2 + bx + c (when a > 0): Min value = (4ac - b^2) / 4a at x = -b / (2a)."
        ],
        faqs: [
            { question: "What is the remainder theorem?", answer: "When polynomial f(x) is divided by (x - a), the remainder is simply f(a)." },
            { question: "What is the factor theorem?", answer: "If f(a) = 0, then (x - a) is a factor of polynomial f(x)." }
        ]
    },

    // -------------------------------------------------------------------------
    // 12. TRIGONOMETRY & HEIGHT AND DISTANCE
    // -------------------------------------------------------------------------
    "trigonometry-height-distance": {
        title: "Trigonometry & Height and Distance: Ratios, Angle of Elevation, and Tower Shadows",
        content: `
            <div class="cheat-section">
                <h3>Trigonometric Ratios & Pythagorean Identities</h3>
                <div class="formula-box">
                    <div class="formula-item"><code>sin &theta; = Opp / Hyp</code>, <code>cos &theta; = Adj / Hyp</code>, <code>tan &theta; = Opp / Adj</code></div>
                    <div class="formula-item"><code>sin^2 &theta; + cos^2 &theta; = 1</code></div>
                    <div class="formula-item"><code>1 + tan^2 &theta; = sec^2 &theta;</code></div>
                    <div class="formula-item"><code>1 + cot^2 &theta; = csc^2 &theta;</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Standard Angle Values</h3>
                <table class="leaderboard-table" style="margin-top: 10px;">
                    <thead><tr><th>Ratio</th><th>0&deg;</th><th>30&deg;</th><th>45&deg;</th><th>60&deg;</th><th>90&deg;</th></tr></thead>
                    <tbody>
                        <tr><td>sin</td><td>0</td><td>1/2</td><td>1/&radic;2</td><td>&radic;3/2</td><td>1</td></tr>
                        <tr><td>cos</td><td>1</td><td>&radic;3/2</td><td>1/&radic;2</td><td>1/2</td><td>0</td></tr>
                        <tr><td>tan</td><td>0</td><td>1/&radic;3</td><td>1</td><td>&radic;3</td><td>&infin;</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="cheat-section">
                <h3>Height and Distance Standard Setups</h3>
                <ul>
                    <li><strong>Angle of Elevation:</strong> Angle formed by line of sight looking UP from horizontal.</li>
                    <li><strong>Angle of Depression:</strong> Angle formed looking DOWN from horizontal (equals angle of elevation by alternate interior angles).</li>
                    <li><strong>30&deg; - 60&deg; Tower Shortcut:</strong> If a shadow lengthens by distance <code>d</code> as sun angle drops from 60&deg; to 30&deg;: <code>Height h = d / (cot 30&deg; - cot 60&deg;) = (d &radic;3) / 2</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Fundamental Identity", formula: "sin^2 θ + cos^2 θ = 1", condition: "Any angle θ" },
            { situation: "Secant Identity", formula: "sec^2 θ - tan^2 θ = 1", condition: "θ != 90°" },
            { situation: "Tower height (30° and 60° shift)", formula: "h = (d × sqrt(3)) / 2", condition: "Shift distance d" },
            { situation: "Complementary Angles", formula: "sin(90° - θ) = cos θ, tan(90° - θ) = cot θ", condition: "Acute angles" }
        ],
        shortcuts: [
            "Remember the 30-60-90 triangle side ratio is 1 : sqrt(3) : 2.",
            "Remember the 45-45-90 triangle side ratio is 1 : 1 : sqrt(2).",
            "If angles of elevation from two points at distances a and b from the tower base are complementary: Tower Height h = sqrt(a × b)."
        ],
        faqs: [
            { question: "Why does angle of depression equal angle of elevation?", answer: "Because the observer's horizontal line of sight and the ground are parallel, making them alternate interior angles." }
        ]
    },

    // -------------------------------------------------------------------------
    // 13. PROGRESSIONS
    // -------------------------------------------------------------------------
    "progressions": {
        title: "Progressions: Arithmetic (AP), Geometric (GP), and Harmonic (HP) Sequences",
        content: `
            <div class="cheat-section">
                <h3>Arithmetic Progression (AP)</h3>
                <p>Sequence with constant difference <code>d</code>: <code>a, a+d, a+2d, ...</code></p>
                <div class="formula-box">
                    <div class="formula-item"><code>n-th term: Tn = a + (n - 1)d</code></div>
                    <div class="formula-item"><code>Sum of n terms: Sn = (n / 2)[2a + (n - 1)d] = (n / 2)(first + last)</code></div>
                    <div class="formula-item"><code>Arithmetic Mean of a, b: AM = (a + b) / 2</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Geometric Progression (GP)</h3>
                <p>Sequence with constant common ratio <code>r</code>: <code>a, ar, ar^2, ...</code></p>
                <div class="formula-box">
                    <div class="formula-item"><code>n-th term: Tn = a × r^(n - 1)</code></div>
                    <div class="formula-item"><code>Sum of n terms: Sn = [a(r^n - 1)] / (r - 1)</code> for r &gt; 1</div>
                    <div class="formula-item"><code>Sum to Infinity: S_inf = a / (1 - r)</code> (strictly for |r| &lt; 1)</div>
                    <div class="formula-item"><code>Geometric Mean of a, b: GM = &radic;(ab)</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>AM, GM, HM Inequality</h3>
                <p>For any positive real numbers: <code>AM &ge; GM &ge; HM</code>, and <code>GM^2 = AM &times; HM</code>.</p>
            </div>
        `,
        formulas: [
            { situation: "AP n-th term", formula: "Tn = a + (n - 1)d", condition: "Common diff d" },
            { situation: "AP sum of n terms", formula: "Sn = (n / 2)(a + l)", condition: "l = last term" },
            { situation: "GP n-th term", formula: "Tn = a × r^(n - 1)", condition: "Common ratio r" },
            { situation: "Infinite GP sum", formula: "S_inf = a / (1 - r)", condition: "|r| < 1" },
            { situation: "Relation between means", formula: "GM^2 = AM × HM", condition: "Positive numbers" }
        ],
        shortcuts: [
            "Sum of first n natural numbers = n(n + 1) / 2.",
            "Sum of first n odd numbers = n^2.",
            "Sum of first n squares = n(n + 1)(2n + 1) / 6.",
            "Sum of first n cubes = [n(n + 1) / 2]^2."
        ],
        faqs: [
            { question: "What is Harmonic Progression (HP)?", answer: "A sequence of numbers whose reciprocals form an Arithmetic Progression. If a, b, c are in HP, then 1/a, 1/b, 1/c are in AP, and b = 2ac/(a+c)." }
        ]
    },

    // -------------------------------------------------------------------------
    // 14. AGES
    // -------------------------------------------------------------------------
    "ages": {
        title: "Ages: Age Ratio Problems, Past/Future Formulation, and Constant Difference Rule",
        content: `
            <div class="cheat-section">
                <h3>The Golden Principle of Ages</h3>
                <p>The <strong>difference between the ages of two people remains constant forever</strong>. If A is 5 years older than B today, A was 5 years older 10 years ago and will be 5 years older 50 years from now.</p>
            </div>

            <div class="cheat-section">
                <h3>Formulating Linear Equations</h3>
                <ul>
                    <li>If present age is <code>x</code>, age <code>T</code> years ago was <code>x - T</code>.</li>
                    <li>Age <code>T</code> years hence (in future) will be <code>x + T</code>.</li>
                    <li>If ratio of ages of A and B is currently <code>p : q</code>, let their ages be <code>px</code> and <code>qx</code>. After <code>T</code> years: <code>(px + T) / (qx + T) = m / n</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Age shift backwards", formula: "Past Age = Present - T", condition: "T years ago" },
            { situation: "Age shift forward", formula: "Future Age = Present + T", condition: "T years hence" },
            { situation: "Constant difference", formula: "Age_A - Age_B = Constant", condition: "At all points in time" }
        ],
        shortcuts: [
            "Equate the vertical ratio differences: If ratio changes from a:b to c:d after T years, make the vertical differences (c-a) and (d-b) equal by multiplying ratios by cross-differences.",
            "Never assume ages can be negative or fractional in placement questions."
        ],
        faqs: [
            { question: "What does 'hence' and 'ago' mean in age problems?", answer: "'Hence' means in the future (+T years); 'ago' means in the past (-T years)." }
        ]
    },

    // -------------------------------------------------------------------------
    // 15. PROFIT AND LOSS
    // -------------------------------------------------------------------------
    "profit-and-loss": {
        title: "Profit and Loss: Cost Price, Selling Price, Marked Price, Discounts, and Dishonest Dealers",
        content: `
            <div class="cheat-section">
                <h3>Fundamental Equations</h3>
                <div class="formula-box">
                    <div class="formula-item"><code>Profit = SP - CP</code> (when SP &gt; CP)</div>
                    <div class="formula-item"><code>Loss = CP - SP</code> (when CP &gt; SP)</div>
                    <div class="formula-item"><code>Profit% = (Profit / CP) × 100</code></div>
                    <div class="formula-item"><code>Loss% = (Loss / CP) × 100</code></div>
                </div>
                <p class="rule-note">Profit% and Loss% are ALWAYS calculated on Cost Price (CP) unless specifically stated on SP.</p>
            </div>

            <div class="cheat-section">
                <h3>Marked Price (MP) & Discounts</h3>
                <p>Discount is always calculated on Marked Price (MP):</p>
                <div class="formula-box">
                    <div><code>Selling Price SP = MP × [1 - (Discount% / 100)]</code></div>
                    <div><code>Successive Discounts d1 and d2: Net Discount = d1 + d2 - (d1 × d2) / 100</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Dishonest Dealer & Special Placement Rules</h3>
                <ul>
                    <li><strong>Faulty Weight Dealer:</strong> Sells at cost price but uses false weight: <code>Gain% = [Error / (True Value - Error)] × 100</code>.</li>
                    <li><strong>Two Items Sold at Same SP with x% profit and x% loss:</strong> Always results in an overall net LOSS of <code>(x / 10)^2 %</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Profit percentage", formula: "[(SP - CP) / CP] × 100", condition: "Calculated on CP" },
            { situation: "SP from CP and Profit%", formula: "SP = CP × (100 + P%) / 100", condition: "Standard sale" },
            { situation: "Net Successive Discount", formula: "d1 + d2 - (d1 × d2) / 100", condition: "Two discounts in sequence" },
            { situation: "Dishonest dealer gain", formula: "[Error / (True - Error)] × 100", condition: "Sells at CP with false weight" },
            { situation: "Same SP with ±x%", formula: "Net Loss = (x / 10)^2 %", condition: "Equal SP with equal profit & loss %" }
        ],
        shortcuts: [
            "If cost price of x articles = selling price of y articles: Profit% = [(x - y) / y] × 100.",
            "Buy x get y free: Discount% = [y / (x + y)] × 100 (e.g. Buy 3 get 1 free = 1/4 = 25% discount).",
            "Markup Formula: MP / CP = (100 + Profit%) / (100 - Discount%)."
        ],
        faqs: [
            { question: "Why is there always a loss when two articles have same SP with equal gain and loss%?", answer: "Because the gain is earned on a smaller CP and the loss is suffered on a larger CP, so the absolute loss exceeds the absolute gain." }
        ]
    },

    // -------------------------------------------------------------------------
    // 16. SIMPLIFICATION
    // -------------------------------------------------------------------------
    "simplification": {
        title: "Simplification: VBODMAS Rule, Indices Laws, Surds Rationalization, and Fractions",
        content: `
            <div class="cheat-section">
                <h3>The VBODMAS Order of Operations</h3>
                <p>Strict order of precedence from left to right:</p>
                <ol>
                    <li><strong>V - Vinculum:</strong> Bar over numbers (e.g. <code>5 - 3̄-̄2 = 5 - 1 = 4</code>)</li>
                    <li><strong>B - Brackets:</strong> In order: <code>( )</code> round, <code>{ }</code> curly, <code>[ ]</code> square</li>
                    <li><strong>O - Of:</strong> Multiplication represented as 'of' (takes precedence over division!)</li>
                    <li><strong>D - Division</strong> and <strong>M - Multiplication</strong> (left to right)</li>
                    <li><strong>A - Addition</strong> and <strong>S - Subtraction</strong> (left to right)</li>
                </ol>
            </div>

            <div class="cheat-section">
                <h3>Recurring Decimals into Fractions</h3>
                <ul>
                    <li>Pure recurring: <code>0.ā = a / 9</code>; <code>0.āb̄ = ab / 99</code></li>
                    <li>Mixed recurring: <code>0.ab̄ = (ab - a) / 90</code>; <code>0.abc̄ = (abc - ab) / 900</code></li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Indices product", formula: "a^m × a^n = a^(m + n)", condition: "Same base" },
            { situation: "Indices quotient", formula: "a^m / a^n = a^(m - n)", condition: "Same base" },
            { situation: "Indices power of power", formula: "(a^m)^n = a^(m × n)", condition: "Powers multiply" },
            { situation: "Mixed recurring to fraction", formula: "(Total digits - Non recurring) / (9s followed by 0s)", condition: "Decimal conversion" }
        ],
        shortcuts: [
            "Use digital root check (casting out nines) to verify large arithmetic calculations in 5 seconds.",
            "Square of numbers ending in 5: for (10a + 5)^2, write a(a + 1) followed by 25 (e.g. 75^2 = 7×8 | 25 = 5625)."
        ],
        faqs: [
            { question: "What is the difference between 'of' and 'multiplication' in BODMAS?", answer: "'Of' has higher priority than division; standard '×' has lower priority than division." }
        ]
    },

    // -------------------------------------------------------------------------
    // 17. SIMPLE INTEREST
    // -------------------------------------------------------------------------
    "simple-interest": {
        title: "Simple Interest: Principal, Rate, Time, Debt Installments, and Doubling Formulas",
        content: `
            <div class="cheat-section">
                <h3>Core Simple Interest Formula</h3>
                <div class="formula-box">
                    <div class="formula-item"><code>SI = (P × R × T) / 100</code></div>
                    <div class="formula-item"><code>Amount A = P + SI = P × [1 + (R × T / 100)]</code></div>
                </div>
                <p>Where <code>P</code> = Principal, <code>R</code> = Annual interest rate %, and <code>T</code> = Time in years.</p>
            </div>

            <div class="cheat-section">
                <h3>Sum Multiplying Rules</h3>
                <ul>
                    <li>If a sum becomes <code>n</code> times itself in <code>T</code> years: <code>R = [(n - 1) × 100] / T</code></li>
                    <li>If a sum becomes <code>n</code> times in <code>T1</code> years, it will become <code>m</code> times in: <code>T2 = T1 × [(m - 1) / (n - 1)]</code></li>
                </ul>
                <div class="example-card">
                    <strong>Example:</strong> A sum doubles in 8 years. In how many years will it become 4 times?<br>
                    Here n = 2, m = 4, T1 = 8.<br>
                    <code>T2 = 8 × [(4 - 1) / (2 - 1)] = 8 × 3 = 24 years</code>.
                </div>
            </div>
        `,
        formulas: [
            { situation: "Simple Interest", formula: "SI = (P × R × T) / 100", condition: "T in years" },
            { situation: "Total Amount", formula: "A = P + SI = P(1 + RT/100)", condition: "At maturity" },
            { situation: "Rate for n-fold growth", formula: "R = [(n - 1) × 100] / T", condition: "Simple interest growth" },
            { situation: "Annual Debt Installment", formula: "x = (100A) / [100T + R × T(T - 1) / 2]", condition: "Debt discharge in T payments" }
        ],
        shortcuts: [
            "Interest earned in simple interest is constant every single year.",
            "Convert months to years by dividing by 12, and days by dividing by 365."
        ],
        faqs: [
            { question: "Does interest earn interest in Simple Interest?", answer: "No. Simple interest is calculated solely on the initial principal every year." }
        ]
    },

    // -------------------------------------------------------------------------
    // 18. COMPOUND INTEREST
    // -------------------------------------------------------------------------
    "compound-interest": {
        title: "Compound Interest: Compounding Frequencies, CI vs SI Difference, and Doubling Rule",
        content: `
            <div class="cheat-section">
                <h3>Annual Compounding Formula</h3>
                <div class="formula-box">
                    <div class="formula-item"><code>Amount A = P × [1 + (R / 100)]^n</code></div>
                    <div class="formula-item"><code>CI = Amount - Principal = P × {[1 + (R / 100)]^n - 1}</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Compounding Frequencies</h3>
                <ul>
                    <li><strong>Half-Yearly (Semi-annually):</strong> Rate = <code>R / 2</code>, Periods = <code>2n</code></li>
                    <li><strong>Quarterly:</strong> Rate = <code>R / 4</code>, Periods = <code>4n</code></li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>Difference between CI and SI</h3>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Difference for 2 Years</h4>
                        <code>Diff_2 = P × (R / 100)^2</code>
                    </div>
                    <div class="rule-box">
                        <h4>Difference for 3 Years</h4>
                        <code>Diff_3 = P × (R / 100)^2 × [(300 + R) / 100]</code>
                    </div>
                </div>
            </div>
        `,
        formulas: [
            { situation: "Compound Amount", formula: "A = P(1 + R/100)^n", condition: "Compounded annually" },
            { situation: "Half-yearly compounding", formula: "A = P[1 + R/200]^(2n)", condition: "Twice a year" },
            { situation: "Difference CI - SI (2 yrs)", formula: "Diff = P(R / 100)^2", condition: "Exactly 2 years" },
            { situation: "Difference CI - SI (3 yrs)", formula: "Diff = P(R / 100)^2 × (3 + R / 100)", condition: "Exactly 3 years" }
        ],
        shortcuts: [
            "Rule of 72: A sum doubles under compound interest in approximately 72 / R years.",
            "If a sum becomes n times in T years under CI, it becomes n^k times in k × T years (exponential power growth)."
        ],
        faqs: [
            { question: "Why is CI always greater than or equal to SI?", answer: "Because in CI, previously earned interest is added to the principal to earn additional interest in subsequent periods." }
        ]
    },

    // -------------------------------------------------------------------------
    // 19. AVERAGES
    // -------------------------------------------------------------------------
    "averages": {
        title: "Averages: Weighted Averages, Replacement Method, and Cricket Bowling Scores",
        content: `
            <div class="cheat-section">
                <h3>Definition & Weighted Average</h3>
                <div class="formula-box">
                    <div class="formula-item"><code>Average = (Sum of Observations) / (Number of Observations)</code></div>
                    <div class="formula-item"><code>Sum = Average × Number</code></div>
                    <div class="formula-item"><code>Weighted Average = (n1 × A1 + n2 × A2) / (n1 + n2)</code></div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Deviation & Replacement Method</h3>
                <ul>
                    <li><strong>Replacement:</strong> If one person of weight W is replaced and the average of n people increases by x: <code>New Weight = W + (n × x)</code>.</li>
                    <li><strong>New Member Added:</strong> If a new member joins and increases the average of n members by x: <code>New Member Value = Old Average + (n + 1) × x</code>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Arithmetic Average", formula: "Sum / N", condition: "N observations" },
            { situation: "Weighted Average", formula: "(n1 A1 + n2 A2) / (n1 + n2)", condition: "Groups with sizes n1, n2" },
            { situation: "Replacement Value", formula: "Old_Value + N × (Change_in_avg)", condition: "One person replaced" },
            { situation: "Bowling Average", formula: "Total Runs Conceded / Total Wickets", condition: "Lower is better" }
        ],
        shortcuts: [
            "The sum of deviations of all observations from their arithmetic mean is ALWAYS 0.",
            "If every observation is increased/decreased/multiplied by k, the average is also increased/decreased/multiplied by k."
        ],
        faqs: [
            { question: "What is batting average in cricket?", answer: "Batting average = Total Runs Scored / Number of Times Dismissed (Out)." }
        ]
    },

    // -------------------------------------------------------------------------
    // 20. RATIO AND PROPORTION
    // -------------------------------------------------------------------------
    "ratio-and-proportion": {
        title: "Ratio and Proportion: Mean/Third/Fourth Proportional, Dividendo, and Coin Problems",
        content: `
            <div class="cheat-section">
                <h3>Definitions & Properties</h3>
                <p>Ratio <code>a : b</code> compares two quantities of the same kind. Proportion <code>a : b :: c : d</code> implies <code>a / b = c / d</code> (Product of Extremes <code>a × d</code> = Product of Means <code>b × c</code>).</p>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Mean Proportional of a, b</h4>
                        <code>Mean = &radic;(a × b)</code>
                    </div>
                    <div class="rule-box">
                        <h4>Third Proportional to a, b</h4>
                        <code>Third = b^2 / a</code>
                    </div>
                    <div class="rule-box">
                        <h4>Fourth Proportional to a, b, c</h4>
                        <code>Fourth = (b × c) / a</code>
                    </div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Componendo & Dividendo</h3>
                <p>If <code>a / b = c / d</code>, then:</p>
                <div class="formula-box">
                    <code>(a + b) / (a - b) = (c + d) / (c - d)</code>
                </div>
            </div>
        `,
        formulas: [
            { situation: "Extremes and Means", formula: "a × d = b × c", condition: "For a : b :: c : d" },
            { situation: "Mean Proportional", formula: "sqrt(a × b)", condition: "Two numbers a and b" },
            { situation: "Third Proportional", formula: "b^2 / a", condition: "Two numbers a and b" },
            { situation: "Fourth Proportional", formula: "(b × c) / a", condition: "Three numbers a, b, c" },
            { situation: "Componendo & Dividendo", formula: "(a + b)/(a - b) = (c + d)/(c - d)", condition: "Given a/b = c/d" }
        ],
        shortcuts: [
            "To combine A:B = 2:3 and B:C = 4:5, multiply A:B by 4 and B:C by 3 to get A:B:C = 8:12:15.",
            "For coin count problems, convert the coin ratio into currency value by multiplying by each coin's value."
        ],
        faqs: [
            { question: "What is a duplicate ratio?", answer: "The duplicate ratio of a : b is a^2 : b^2. The sub-duplicate ratio is sqrt(a) : sqrt(b)." }
        ]
    },

    // -------------------------------------------------------------------------
    // 21. MENSURATION
    // -------------------------------------------------------------------------
    "mensuration": {
        title: "Mensuration: 2D Areas, Perimeters, and 3D Solid Surface Areas and Volumes",
        content: `
            <div class="cheat-section">
                <h3>2D Figures Formulas</h3>
                <ul>
                    <li><strong>Circle:</strong> Area = <code>&pi; r^2</code>; Perimeter = <code>2 &pi; r</code></li>
                    <li><strong>Rectangle:</strong> Area = <code>l × b</code>; Perimeter = <code>2(l + b)</code>; Diagonal = <code>&radic;(l^2 + b^2)</code></li>
                    <li><strong>Square:</strong> Area = <code>a^2</code>; Diagonal = <code>a &radic;2</code></li>
                    <li><strong>Trapezium:</strong> Area = <code>(1/2) × (sum of parallel sides) × height</code></li>
                    <li><strong>Rhombus:</strong> Area = <code>(1/2) × d1 × d2</code>; Perimeter = <code>4a</code></li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>3D Solids Formulas</h3>
                <table class="leaderboard-table">
                    <thead><tr><th>Solid</th><th>Volume</th><th>Curved / Lateral Surface</th><th>Total Surface Area</th></tr></thead>
                    <tbody>
                        <tr><td>Cube</td><td>a^3</td><td>4a^2</td><td>6a^2</td></tr>
                        <tr><td>Cuboid</td><td>l × b × h</td><td>2h(l + b)</td><td>2(lb + bh + hl)</td></tr>
                        <tr><td>Cylinder</td><td>&pi; r^2 h</td><td>2 &pi; r h</td><td>2 &pi; r (r + h)</td></tr>
                        <tr><td>Cone</td><td>(1/3) &pi; r^2 h</td><td>&pi; r l (l = &radic;(r^2+h^2))</td><td>&pi; r (r + l)</td></tr>
                        <tr><td>Sphere</td><td>(4/3) &pi; r^3</td><td>4 &pi; r^2</td><td>4 &pi; r^2</td></tr>
                        <tr><td>Hemisphere</td><td>(2/3) &pi; r^3</td><td>2 &pi; r^2</td><td>3 &pi; r^2</td></tr>
                    </tbody>
                </table>
            </div>
        `,
        formulas: [
            { situation: "Cylinder Volume", formula: "pi × r^2 × h", condition: "Radius r, height h" },
            { situation: "Cone Volume", formula: "(1/3) × pi × r^2 × h", condition: "Radius r, height h" },
            { situation: "Sphere Volume", formula: "(4/3) × pi × r^3", condition: "Radius r" },
            { situation: "Hemisphere TSA", formula: "3 × pi × r^2", condition: "Solid hemisphere" },
            { situation: "Cube Body Diagonal", formula: "a × sqrt(3)", condition: "Side length a" }
        ],
        shortcuts: [
            "If linear dimensions of a 3D solid increase by x%, surface area increases by roughly 2x% and volume by 3x%.",
            "When a solid is melted and recast into another shape, its VOLUME remains strictly conserved."
        ],
        faqs: [
            { question: "What is the longest rod that can fit in a room?", answer: "The space diagonal of the cuboid: sqrt(l^2 + b^2 + h^2)." }
        ]
    },

    // -------------------------------------------------------------------------
    // 22. PARTNERSHIP
    // -------------------------------------------------------------------------
    "partnership": {
        title: "Partnership: Capital Investment, Time Periods, Sleeping Partners, and Profit Ratios",
        content: `
            <div class="cheat-section">
                <h3>Profit Distribution Rule</h3>
                <p>Profits are distributed in direct proportion to the product of <strong>Capital Invested</strong> and <strong>Time Duration</strong>:</p>
                <div class="formula-box">
                    <code>Profit_A : Profit_B : Profit_C = (C_A × T_A) : (C_B × T_B) : (C_C × T_C)</code>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Working vs Sleeping Partner</h3>
                <p>A <strong>working partner</strong> receives an agreed salary or management commission from total profits first, and the remaining profit is then divided according to investment ratios.</p>
            </div>
        `,
        formulas: [
            { situation: "Profit Sharing Ratio", formula: "P1 : P2 = (C1 × T1) : (C2 × T2)", condition: "Investments C, durations T" },
            { situation: "Working Partner Remainder", formula: "Net Divisible = Total Profit - Working Salary", condition: "Salary deducted first" }
        ],
        shortcuts: [
            "If time periods are equal for all partners, profit ratio is simply equal to capital ratio C1 : C2.",
            "If profits and time are given, investment ratio = (P1 / T1) : (P2 / T2)."
        ],
        faqs: [
            { question: "What is a sleeping partner?", answer: "A partner who only contributes capital but does not participate in active business operations." }
        ]
    },

    // -------------------------------------------------------------------------
    // 23. LOGARITHMS
    // -------------------------------------------------------------------------
    "logarithms": {
        title: "Logarithms: Definition, Laws of Logarithms, Base Change, and Characteristics",
        content: `
            <div class="cheat-section">
                <h3>Definition & Core Identity</h3>
                <p><code>log_b(a) = c &hArr; b^c = a</code> (where a &gt; 0, b &gt; 0, and b &ne; 1).</p>
                <div class="formula-box">
                    <div class="formula-item"><code>log_b(xy) = log_b(x) + log_b(y)</code> (Product Rule)</div>
                    <div class="formula-item"><code>log_b(x / y) = log_b(x) - log_b(y)</code> (Quotient Rule)</div>
                    <div class="formula-item"><code>log_b(x^k) = k × log_b(x)</code> (Power Rule)</div>
                    <div class="formula-item"><code>log_b(a) = log_c(a) / log_c(b) = 1 / log_a(b)</code> (Base Change)</div>
                </div>
            </div>
        `,
        formulas: [
            { situation: "Product rule", formula: "log(xy) = log x + log y", condition: "x, y > 0" },
            { situation: "Quotient rule", formula: "log(x/y) = log x - log y", condition: "x, y > 0" },
            { situation: "Power rule", formula: "log(x^k) = k log x", condition: "x > 0" },
            { situation: "Base change", formula: "log_b a = log a / log b", condition: "b != 1" }
        ],
        shortcuts: [
            "Remember: log 1 = 0 for any valid base, and log_b(b) = 1.",
            "log 2 approx 0.3010, log 3 approx 0.4771. Then log 5 = 1 - log 2 approx 0.6990."
        ],
        faqs: [
            { question: "Can a logarithm have a negative number inside?", answer: "No. In real numbers, the argument of a logarithm must be strictly positive (x > 0)." }
        ]
    },

    // -------------------------------------------------------------------------
    // 24. PERCENTAGE
    // -------------------------------------------------------------------------
    "percentage": {
        title: "Percentage: Base Conversions, Successive Changes, and Price-Consumption Rules",
        content: `
            <div class="cheat-section">
                <h3>Fraction to Percentage Equivalents</h3>
                <p>Memorize these immediate placement equivalents:</p>
                <ul>
                    <li>1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%</li>
                    <li>1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%</li>
                    <li>1/10 = 10%, 1/11 = 9.09%, 1/12 = 8.33%, 1/16 = 6.25%</li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>Successive Percentage & Product Constancy</h3>
                <div class="formula-box">
                    <div>Net Successive Change: <code>x + y + (x × y) / 100 %</code></div>
                    <div>If price increases by <code>r%</code>, consumption must reduce by <code>[r / (100 + r)] × 100%</code> to keep expenditure unchanged.</div>
                </div>
            </div>
        `,
        formulas: [
            { situation: "Percentage Change", formula: "[(Final - Initial) / Initial] × 100", condition: "Relative to initial" },
            { situation: "Successive Changes x% and y%", formula: "x + y + (xy / 100)", condition: "Consecutive changes" },
            { situation: "Price-Consumption Constancy", formula: "[r / (100 + r)] × 100 %", condition: "For r% price rise" }
        ],
        shortcuts: [
            "x% of y is ALWAYS equal to y% of x (e.g. 16% of 50 = 50% of 16 = 8).",
            "Population after n years growing at r%: P_new = P_orig × (1 + r/100)^n."
        ],
        faqs: [
            { question: "Why does 20% increase followed by 20% decrease result in a loss?", answer: "Because the 20% decrease is calculated on a larger base: net change = +20 - 20 - (400/100) = -4%." }
        ]
    },

    // -------------------------------------------------------------------------
    // 25. STATISTICS
    // -------------------------------------------------------------------------
    "statistics": {
        title: "Statistics: Mean, Median, Mode, Empirical Relation, Variance, and Standard Deviation",
        content: `
            <div class="cheat-section">
                <h3>Central Tendencies</h3>
                <ul>
                    <li><strong>Mean:</strong> Arithmetic sum divided by count <code>&sum; x / N</code>.</li>
                    <li><strong>Median:</strong> Middle value of ordered data. If N is odd: value at <code>(N+1)/2</code>. If N is even: average of <code>N/2</code> and <code>(N/2)+1</code>.</li>
                    <li><strong>Mode:</strong> Most frequently occurring observation.</li>
                </ul>
                <div class="formula-box">
                    <code>Empirical Relationship: Mode = 3 × Median - 2 × Mean</code>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Dispersion Measures</h3>
                <div class="formula-box">
                    <div><code>Variance (&sigma;^2) = &sum;(x - Mean)^2 / N</code></div>
                    <div><code>Standard Deviation (&sigma;) = &radic;Variance</code></div>
                    <div><code>Coefficient of Variation (CV) = (&sigma; / Mean) × 100%</code></div>
                </div>
            </div>
        `,
        formulas: [
            { situation: "Empirical Mode", formula: "Mode = 3 × Median - 2 × Mean", condition: "Moderately skewed data" },
            { situation: "Variance", formula: "Sum((x - Mean)^2) / N", condition: "Population variance" },
            { situation: "Standard Deviation", formula: "sqrt(Variance)", condition: "Always non-negative" }
        ],
        shortcuts: [
            "If every observation is shifted by adding k, standard deviation does NOT change.",
            "If every observation is multiplied by k, standard deviation is multiplied by |k|."
        ],
        faqs: [
            { question: "Which measure is most robust against extreme outliers?", answer: "Median, because it depends only on order and rank, not on extreme numerical magnitudes." }
        ]
    },

    // -------------------------------------------------------------------------
    // LOGICAL REASONING TOPICS
    // -------------------------------------------------------------------------
    "clocks": {
        title: "Clocks: Hands Angle Formula, Coincidence, Right Angles, and Faulty Clock Rates",
        content: `
            <div class="cheat-section">
                <h3>Clock Geometry & Speed of Hands</h3>
                <p>The dial is 360&deg; divided into 12 hours (30&deg; per hour) and 60 minutes (6&deg; per minute).</p>
                <ul>
                    <li><strong>Minute hand speed:</strong> 6&deg; per minute</li>
                    <li><strong>Hour hand speed:</strong> 0.5&deg; per minute (30&deg; in 60 mins)</li>
                    <li><strong>Relative speed of minute hand to hour hand:</strong> <code>6&deg; - 0.5&deg; = 5.5&deg; = 11/2 &deg; per minute</code></li>
                </ul>
                <div class="formula-box">
                    <code>Angle between hands &theta; = |30H - (11 / 2)M|</code>
                </div>
                <div class="example-card">
                    <strong>Example:</strong> Find the angle between clock hands at 4:20.<br>
                    H = 4, M = 20.<br>
                    <code>&theta; = |30(4) - (11/2)(20)| = |120 - 110| = 10&deg;</code>.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Key Hand Positions per Day</h3>
                <ul>
                    <li><strong>Coincide (0&deg;):</strong> 11 times in 12 hours, <strong>22 times in 24 hours</strong> (not 24, because 11-1 overlap occurs at exactly 12:00).</li>
                    <li><strong>Opposite (180&deg; straight line):</strong> 11 times in 12 hours, <strong>22 times in 24 hours</strong>.</li>
                    <li><strong>Right Angle (90&deg;):</strong> 22 times in 12 hours, <strong>44 times in 24 hours</strong>.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Angle between hands", formula: "θ = |30H - 5.5M|", condition: "H in hours 1-12, M in 0-59" },
            { situation: "Coincidence times", formula: "M = (60/11) × H", condition: "Hands together" }
        ],
        shortcuts: [
            "If the calculated angle is greater than 180°, subtract from 360° to find the interior angle.",
            "Hands of a clock coincide every 65 5/11 minutes in a correct clock."
        ],
        faqs: [
            { question: "Why do hands coincide only 22 times a day?", answer: "Between 11:00 and 1:00, the hands coincide only once at exactly 12:00, losing one coincidence in each 12-hour period." }
        ]
    },

    "calendar": {
        title: "Calendar: Odd Days Method, Leap Years, Day of the Week, and Repeating Years",
        content: `
            <div class="cheat-section">
                <h3>Odd Days Principle</h3>
                <p>Odd days are the remainder left after dividing the total number of days by 7:</p>
                <ul>
                    <li><strong>Ordinary year (365 days):</strong> <code>52 weeks + 1 day = 1 odd day</code></li>
                    <li><strong>Leap year (366 days):</strong> <code>52 weeks + 2 days = 2 odd days</code></li>
                </ul>
                <div class="tip-card">
                    <strong>Century Odd Days:</strong> 100 yrs = 5 odd days; 200 yrs = 3 odd days; 300 yrs = 1 odd day; 400 yrs = 0 odd days.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Leap Year Identification Rule</h3>
                <p>Non-century year must be divisible by <strong>4</strong>. Century years (1600, 1900, 2000) must be divisible by <strong>400</strong> to be a leap year (1900 was NOT a leap year!).</p>
            </div>
        `,
        formulas: [
            { situation: "Odd Days Count", formula: "Total Days mod 7", condition: "Day mapping: 0=Sun, 1=Mon, ..., 6=Sat" },
            { situation: "Repeating Calendar", formula: "+28 yrs (leap), +11 yrs, or +6 yrs", condition: "Same day distribution" }
        ],
        shortcuts: [
            "Any calendar repeats after 28 years for a leap year.",
            "Day of Jan 1 and Dec 31 are identical in an ordinary year (e.g. starts on Monday, ends on Monday)."
        ],
        faqs: [
            { question: "Why is 1900 not a leap year?", answer: "Century years must be divisible by 400 to prevent calendar drift caused by the earth's 365.2422 day orbit." }
        ]
    },

    "blood-relation": {
        title: "Blood Relation: Family Tree Symbols, Coded Relations, and Generation Mapping",
        content: `
            <div class="cheat-section">
                <h3>Standard Family Tree Notation</h3>
                <ul>
                    <li><strong>Male:</strong> <code>[+]</code> box or plus sign</li>
                    <li><strong>Female:</strong> <code>[-]</code> circle or minus sign</li>
                    <li><strong>Married Couple:</strong> Double horizontal line <code>A = B</code></li>
                    <li><strong>Siblings:</strong> Single horizontal line <code>A - B</code></li>
                    <li><strong>Generations:</strong> Vertical line downwards (Parents on top, children below)</li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>Key Maternal vs Paternal Relations</h3>
                <ul>
                    <li>Mother's brother = Maternal Uncle; Father's brother = Paternal Uncle.</li>
                    <li>Son of brother or sister = Nephew; Daughter = Niece.</li>
                    <li>Child of uncle or aunt = Cousin.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Family tree layout", formula: "Grandparents -> Parents -> Self/Siblings -> Children", condition: "Vertical generation levels" }
        ],
        shortcuts: [
            "Never assume the gender of a person from their name (e.g. 'Alex' or 'Robin') unless explicitly stated in the problem.",
            "Work backwards from 'my father's only son' (which is the speaker himself, if male)."
        ],
        faqs: [
            { question: "Who is my father's father's only daughter-in-law?", answer: "Your mother (provided father has no other brothers)." }
        ]
    },

    "coding-decoding": {
        title: "Coding Decoding: Alphabet Positions, Opposite Pairs, and Pattern Recognition",
        content: `
            <div class="cheat-section">
                <h3>Letter Positions & EJOTY Tool</h3>
                <p>Memorize letter positions 1 to 26 using the <strong>EJOTY</strong> benchmark: <code>E=5, J=10, O=15, T=20, Y=25</code>.</p>
                <div class="formula-box">
                    <code>Reverse Position = 27 - Forward Position</code>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Opposite Letter Pairs (Sum = 27)</h3>
                <p><code>A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N</code></p>
            </div>
        `,
        formulas: [
            { situation: "Opposite letter pair", formula: "Letter1 + Letter2 = 27", condition: "Position sum" }
        ],
        shortcuts: [
            "Check for letter shifts: +1, +2, +3 or alternating +1, -1, +1, -1.",
            "Check for word reversal: last letter becomes first."
        ],
        faqs: [
            { question: "What is matrix coding?", answer: "Finding letters using row and column coordinates given in two 5x5 letter matrices." }
        ]
    },

    "syllogism": {
        title: "Syllogism: Venn Diagram Rules, 'Only a Few', and Either-Or Complementary Pairs",
        content: `
            <div class="cheat-section">
                <h3>Four Standard Propositions</h3>
                <ul>
                    <li><strong>A (All A are B):</strong> Universal affirmative (Circle A inside Circle B).</li>
                    <li><strong>E (No A is B):</strong> Universal negative (Circles A and B completely separated).</li>
                    <li><strong>I (Some A are B):</strong> Particular affirmative (Circles A and B overlap).</li>
                    <li><strong>O (Some A are not B):</strong> Particular negative.</li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>Modern Rules: 'Only a Few'</h3>
                <p><code>Only a few A are B</code> means TWO things simultaneously: <strong>Some A are B</strong> AND <strong>Some A are NOT B</strong>.</p>
            </div>
        `,
        formulas: [
            { situation: "Either-Or Pair", formula: "Some + No, or All + Some Not", condition: "Same subject & predicate, both wrong alone" }
        ],
        shortcuts: [
            "If all statements are positive, a definite negative conclusion can NEVER follow.",
            "Never assume facts outside the given statements; reality does not matter in syllogism."
        ],
        faqs: [
            { question: "Can 'Some' mean 'All' in syllogism?", answer: "Yes, 'Some' means at least one and possibly all." }
        ]
    },

    "direction-sense": {
        title: "Direction Sense: Compass Cardinals, Shadow Rules, and Pythagoras Displacement",
        content: `
            <div class="cheat-section">
                <h3>The 8-Point Compass & Right/Left Turns</h3>
                <p>North is top (0&deg;), East is right (90&deg;), South is bottom (180&deg;), West is left (270&deg;).</p>
                <ul>
                    <li><strong>Turning Right:</strong> 90&deg; clockwise</li>
                    <li><strong>Turning Left:</strong> 90&deg; anticlockwise</li>
                    <li><strong>Displacement:</strong> Shortest distance = <code>&radic;(&Delta;x^2 + &Delta;y^2)</code></li>
                </ul>
            </div>

            <div class="cheat-section">
                <h3>Shadow Rules</h3>
                <ul>
                    <li><strong>Morning (Sun in East):</strong> All shadows fall towards the <strong>West</strong>.</li>
                    <li><strong>Evening (Sun in West):</strong> All shadows fall towards the <strong>East</strong>.</li>
                    <li><strong>12:00 Noon:</strong> No shadow (sun is overhead).</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Shortest displacement", formula: "D = sqrt(East_West_diff^2 + North_South_diff^2)", condition: "Pythagoras theorem" }
        ],
        shortcuts: [
            "Always draw a quick '+' cross to anchor your starting coordinate (0,0)."
        ],
        faqs: [
            { question: "If facing North, which side is your right?", answer: "East." }
        ]
    },

    "cube-and-cuboid": {
        title: "Cube and Cuboid: Painted Faces Count, Cutting Rules, and Corner Blocks",
        content: `
            <div class="cheat-section">
                <h3>A Painted Cube Cut into n × n × n Smaller Cubes</h3>
                <p>Let a cube of side length <code>L</code> be cut into smaller cubes of side <code>l</code>, so <code>n = L / l</code>:</p>
                <div class="formula-box">
                    <div class="formula-item"><code>3 Faces Painted (Corners): Exactly 8</code> (always constant!)</div>
                    <div class="formula-item"><code>2 Faces Painted (Edges): 12 × (n - 2)</code></div>
                    <div class="formula-item"><code>1 Face Painted (Face Centres): 6 × (n - 2)^2</code></div>
                    <div class="formula-item"><code>0 Faces Painted (Unpainted Inner Core): (n - 2)^3</code></div>
                    <div class="formula-item"><code>Total small cubes: n^3</code></div>
                </div>
            </div>
        `,
        formulas: [
            { situation: "3 faces painted", formula: "8", condition: "Always 8 corner cubes" },
            { situation: "2 faces painted", formula: "12(n - 2)", condition: "Edge cubes" },
            { situation: "1 face painted", formula: "6(n - 2)^2", condition: "Face centre cubes" },
            { situation: "0 faces painted", formula: "(n - 2)^3", condition: "Internal core" }
        ],
        shortcuts: [
            "Sum of all categories (8 + 12(n-2) + 6(n-2)^2 + (n-2)^3) must sum up to exactly n^3."
        ],
        faqs: [
            { question: "How many cuts are needed to make n^3 small cubes?", answer: "3 × (n - 1) cuts." }
        ]
    },

    // -------------------------------------------------------------------------
    // VERBAL ABILITY TOPICS
    // -------------------------------------------------------------------------
    "ordering-of-sentences": {
        title: "Ordering of Sentences: Para Jumbles, Mandatory Pairs, and Narrative Flow",
        content: `
            <div class="cheat-section">
                <h3>Para Jumbles Strategy</h3>
                <ol>
                    <li><strong>Identify the Opening Sentence:</strong> Must be an independent statement introducing a concept, name, or theme without dangling pronouns (he, she, it, this).</li>
                    <li><strong>Find Mandatory Pairs:</strong>
                        <ul>
                            <li>Full Name &rarr; Surname / Pronoun (e.g. Dr. APJ Abdul Kalam &rarr; He).</li>
                            <li>Acronym rule: Full form first &rarr; Acronym later (e.g. World Health Organization &rarr; WHO).</li>
                            <li>Chronology: Past &rarr; Present &rarr; Future.</li>
                            <li>Cause &rarr; Effect (e.g. It rained heavily &rarr; Therefore streets flooded).</li>
                        </ul>
                    </li>
                    <li><strong>Spot Closing Signals:</strong> Look for concluding connectors: <em>Hence, Thus, Therefore, In summary, Finally</em>.</li>
                </ol>
            </div>
        `,
        formulas: [
            { situation: "Sentence Flow", formula: "Topic Introduction -> Elaboration -> Evidence/Example -> Conclusion", condition: "Logical progression" }
        ],
        shortcuts: [
            "Eliminate options that start with conjunctions like 'However', 'Furthermore', or 'Moreover'.",
            "Option verification: Test the flow of options directly to save time."
        ],
        faqs: [
            { question: "What is a mandatory pair?", answer: "Two sentences that must logically appear consecutively due to pronoun referents, contrast, or cause-and-effect." }
        ]
    },

    "spotting-errors": {
        title: "Spotting Errors: Subject-Verb Agreement, Parallelism, and Preposition Rules",
        content: `
            <div class="cheat-section">
                <h3>Top Grammatical Rules in Placements</h3>
                <ul>
                    <li><strong>Subject-Verb Agreement:</strong> When two subjects are joined by <em>neither... nor</em> or <em>either... or</em>, the verb agrees with the <strong>nearer subject</strong>.</li>
                    <li><strong>'One of the':</strong> <code>One of the + [Plural Noun] + [Singular Verb]</code> (e.g. <em>One of the students IS absent</em>).</li>
                    <li><strong>Paired Conjunctions:</strong> <em>Not only... but also</em>, <em>Neither... nor</em>, <em>Hardly... when</em>, <em>No sooner... than</em>.</li>
                    <li><strong>Tense Rule:</strong> <em>Lest</em> is always followed by <em>should</em> (e.g. <em>Walk carefully lest you should stumble</em>).</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "One of the rule", formula: "One of + Plural Noun + Singular Verb", condition: "Subject is 'One'" },
            { situation: "Nearer Subject Rule", formula: "Neither S1 nor S2 + Verb(agrees with S2)", condition: "Correlative conjunctions" }
        ],
        shortcuts: [
            "Look for 'than' with 'No sooner', and 'when' with 'Hardly / Scarcely'.",
            "Check for redundant words: 'return back' is wrong (use 'return'), 'cope up with' is wrong (use 'cope with')."
        ],
        faqs: [
            { question: "Is 'Each of the boys have done their homework' correct?", answer: "No! 'Each' is singular. Correct: 'Each of the boys HAS done HIS homework'." }
        ]
    },

    "idioms-and-phrases": {
        title: "Idioms and Phrases: High-Frequency Placement Idioms, Origins, and Nuances",
        content: `
            <div class="cheat-section">
                <h3>High-Frequency Idioms for Technical Placements</h3>
                <ul>
                    <li><strong>Bite the bullet:</strong> Face a painful or difficult situation with courage.</li>
                    <li><strong>Burn the midnight oil:</strong> Work or study late into the night.</li>
                    <li><strong>Break the ice:</strong> Overcome initial awkwardness in a conversation.</li>
                    <li><strong>Hit the nail on the head:</strong> Describe exactly what is causing a situation or problem.</li>
                    <li><strong>Through thick and thin:</strong> Under all circumstances, no matter how difficult.</li>
                    <li><strong>Blessing in disguise:</strong> Something that seems bad at first, but results in something good.</li>
                    <li><strong>Spill the beans:</strong> Reveal a secret prematurely or inadvertently.</li>
                </ul>
            </div>
        `,
        formulas: [
            { situation: "Idiom Interpretation", formula: "Contextual Figurative Meaning != Literal Word Meaning", condition: "Idiomatic usage" }
        ],
        shortcuts: [
            "Never pick an option that gives a purely literal translation of the words in the idiom."
        ],
        faqs: [
            { question: "What does 'at the eleventh hour' mean?", answer: "At the very last possible moment, right before a deadline." }
        ]
    }
};

/**
 * Universal fallback generator that builds rich, placement-grade concept guides
 * for any topic not explicitly detailed in the custom dictionary.
 */
export function getCheatSheetForTopic(topicId, title, category, description) {
    if (TOPIC_CHEATSHEETS[topicId]) {
        return TOPIC_CHEATSHEETS[topicId];
    }

    const cleanTitle = title || topicId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const cleanDesc = description || `Comprehensive mastery guide for ${cleanTitle} covering core principles, placement questions, and analytical shortcuts.`;

    return {
        title: `${cleanTitle}: Concepts, Core Principles, and Solved Examples`,
        content: `
            <div class="cheat-section">
                <h3>Foundations & Overview: ${cleanTitle}</h3>
                <p>${cleanDesc}</p>
                <p>Recruiters consistently assess <strong>${cleanTitle}</strong> in placement examinations (such as TCS NQT, Infosys, Wipro, Cognizant, Accenture, and product engineering challenges) to evaluate systematic reasoning and numerical agility.</p>
                <div class="example-card">
                    <strong>Analytical Approach:</strong> Break the scenario down into given quantities, target variable, and the governing mathematical or logical rule before calculating.
                </div>
            </div>

            <div class="cheat-section">
                <h3>Core Rules and Analytical Framework</h3>
                <div class="rules-grid">
                    <div class="rule-box">
                        <h4>Fundamental Relationship</h4>
                        <p>Identify invariant parameters (constants) versus changing variables in the problem statement.</p>
                    </div>
                    <div class="rule-box">
                        <h4>Option Elimination</h4>
                        <p>Eliminate impossible options by evaluating parity (even/odd), order of magnitude, and unit dimensional analysis.</p>
                    </div>
                </div>
            </div>

            <div class="cheat-section">
                <h3>Placement Strategy & Step-by-Step Procedure</h3>
                <ol>
                    <li>Read prompt thoroughly to ensure all constraints are recognized.</li>
                    <li>Formulate algebraic equations or logical constraints cleanly.</li>
                    <li>Execute calculation using verified shortcuts to minimize scratchpad time.</li>
                </ol>
            </div>
        `,
        formulas: [
            { situation: `Standard ${cleanTitle} Formulation`, formula: "Target Variable = Governing Rule(Inputs)", condition: "Standard placement constraints" },
            { situation: "Unit Consistency Check", formula: "Input units must strictly match output scale", condition: "Always verify before calculating" },
            { situation: "Verification Check", formula: "Substitute result back into original constraint", condition: "Sanity check" }
        ],
        shortcuts: [
            `In ${cleanTitle}, check boundaries: test extreme values (0, 1, or maximum bounds) to eliminate incorrect choices.`,
            `Do not spend more than 90 seconds on a single question; flag for review if initial approach takes longer than 45 seconds.`,
            `Use elimination by units or unit digits to bypass full long-division arithmetic.`
        ],
        faqs: [
            { question: `What is the key to mastering ${cleanTitle}?`, answer: `Focus on pattern recognition across standard problem archetypes rather than rote memorization.` },
            { question: `How much time should I spend on ${cleanTitle} questions?`, answer: `Aim for 45 to 60 seconds per question during practice sets to build high speed for final placement exams.` }
        ]
    };
}
