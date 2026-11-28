/**
 * Exam / Assessment Session Engine
 * Handles Safe Exam Mode, anti-cheating, timer, question palette, server evaluation,
 * clickable vocabulary synonym brackets, difficulty progression, and client-side
 * instant Certificate and Revision PDF downloads.
 */

let examData = {
    topicId: '',
    type: 'practice', // 'practice' | 'mock'
    setNumber: 1,
    questions: [],
    currentIndex: 0,
    answers: {}, // { [questionId]: 'A' }
    markedReview: {}, // { [questionId]: true }
    visited: {},
    timeRemaining: 45 * 60, // 45 minutes in seconds
    timerInterval: null,
    timeTakenSeconds: 0,
    tabSwitchViolations: 0,
    safeExamActive: false
};

let lastSubmissionResults = null;

// ==========================================
// DIFFICULTY PROGRESSION CONFIG
// Set 1: Easy / Foundational
// Set 2: Moderate / Intermediate
// Set 3: Moderate-Hard / Advanced
// Set 4: Hard / Master
// Mock 1: Mixed Comprehensive Blend (10 Easy + 10 Mod + 10 Hard)
// Mock 2: Hardcore Placement Assessment (5 Mod + 17 Hard + 8 Master)
// ==========================================
const DIFFICULTY_CONFIG = {
    practice: {
        1: { title: "Set 1: Easy / Foundational", badgeClass: "badge-diff-easy" },
        2: { title: "Set 2: Moderate / Intermediate", badgeClass: "badge-diff-moderate" },
        3: { title: "Set 3: Moderate-Hard / Advanced", badgeClass: "badge-diff-advanced" },
        4: { title: "Set 4: Hard / Master", badgeClass: "badge-diff-master" }
    },
    mock: {
        1: { title: "Mock 1: Mixed Comprehensive Blend", badgeClass: "badge-diff-moderate" },
        2: { title: "Mock 2: Master Placement Assessment", badgeClass: "badge-diff-master" }
    }
};

// ==========================================
// VOCABULARY SYNONYM HELPER SYSTEM
// Allows students to click unfamiliar terms in verbal questions to reveal [simple synonym]
// Shown ONLY when clicked, never forced on the student!
// ==========================================
const VOCAB_SYNONYMS = {
    "ephemeral": "short-lived / temporary",
    "ambivalent": "having mixed feelings / uncertain",
    "meticulous": "very careful / precise",
    "pragmatic": "practical / realistic",
    "candid": "honest / frank",
    "superfluous": "unnecessary / excessive",
    "precarious": "uncertain / risky",
    "ubiquitous": "present everywhere / omnipresent",
    "resilient": "able to recover quickly / tough",
    "plausible": "believable / reasonable",
    "mitigate": "lessen / reduce severity",
    "obsolete": "outdated / no longer used",
    "novice": "beginner / learner",
    "verbose": "wordy / using too many words",
    "frugal": "economical / thrifty",
    "hostile": "unfriendly / antagonistic",
    "tenacious": "persistent / determined",
    "enigmatic": "mysterious / puzzling",
    "obscure": "unclear / hard to see",
    "lucrative": "profitable / moneymaking",
    "sporadic": "occasional / irregular",
    "docile": "submissive / easily trained",
    "arduous": "difficult / tiring",
    "futile": "pointless / useless",
    "astute": "shrewd / clever",
    "lethargic": "sluggish / lacking energy",
    "benevolent": "kind-hearted / generous",
    "malevolent": "spiteful / wishing evil",
    "taciturn": "reserved / saying little",
    "garrulous": "excessively talkative / chatty",
    "affluent": "wealthy / prosperous",
    "destitute": "extremely poor / penniless",
    "prudent": "wise / careful",
    "reckless": "rash / careless",
    "evasive": "avoiding direct answers / elusive",
    "aesthetic": "appreciating beauty / artistic",
    "aloof": "distant / uninvolved",
    "autonomous": "self-governing / independent",
    "cryptic": "hidden meaning / mysterious",
    "dogmatic": "inflexible / opinionated",
    "eclectic": "deriving from diverse sources / varied",
    "elusive": "difficult to find or catch",
    "erratic": "unpredictable / irregular",
    "exculpate": "clear from blame / vindicate",
    "fastidious": "very attentive to detail / finicky",
    "lucid": "clear / easily understood",
    "malleable": "easily influenced / adaptable",
    "mundane": "ordinary / dull",
    "nebulous": "cloudy / vague",
    "obstinate": "stubborn / unyielding",
    "panacea": "universal remedy / cure-all",
    "perfidious": "deceitful / untrustworthy",
    "pervasive": "spreading widely / omnipresent",
    "querulous": "whining / complaining",
    "recalcitrant": "uncooperative / resistant",
    "repudiate": "refuse to accept / reject",
    "reticent": "quiet / not revealing thoughts",
    "sagacious": "wise / perceptive",
    "scrupulous": "diligent / highly moral",
    "spurious": "false / fake",
    "stoic": "enduring pain without complaining",
    "transient": "temporary / brief",
    "venerate": "revere / deeply respect",
    "vindicate": "clear of blame / prove right",
    "zealous": "passionate / enthusiastic",
    "coherent": "logical / consistent",
    "anomaly": "irregularity / deviation",
    "adversity": "hardship / misfortune",
    "abundant": "plentiful / in large quantity",
    "scarce": "rare / in short supply",
    "diligent": "hardworking / industrious",
    "negligent": "careless / neglectful",
    "impromptu": "spontaneous / unrehearsed",
    "complacent": "self-satisfied / unconcerned",
    "corroborate": "confirm / support with evidence",
    "discrepancy": "difference / lack of consistency",
    "impeccable": "flawless / perfect",
    "indolent": "lazy / inactive",
    "inadvertent": "unintentional / accidental",
    "juxtapose": "place side-by-side for contrast",
    "paramount": "supreme / chief in importance",
    "substantiate": "prove / provide proof",
    "tangible": "touchable / real / concrete",
    "ubiquity": "widespread presence",
    "validate": "confirm / make valid",
    "zenith": "peak / highest point",
    "nadir": "lowest point",
    "censure": "severe disapproval / criticize",
    "appease": "pacify / satisfy",
    "alacrity": "eagerness / brisk readiness",
    "acrimonious": "bitter and sharp in language",
    "admonish": "warn or reprimand firmly",
    "equivocal": "ambiguous / open to multiple interpretations",
    "inevitable": "unavoidable / bound to happen",
    "preliminary": "introductory / preparatory",
    "comprehensive": "complete / including all elements",
    "deduce": "conclude / figure out from facts",
    "infer": "conclude from reasoning",
    "consecutive": "in unbroken sequence / successive",
    "equilibrium": "state of balance",
    "exponential": "increasing very rapidly",
    "unprecedented": "never done or known before",
    "rigorous": "strict / extremely thorough",
    "subtle": "delicate / not obvious",
    "profound": "very deep / intense",
    "trivial": "unimportant / of little value",
    "implication": "suggestion / consequence",
    "disparity": "inequality / great difference",
    "divergent": "different / moving apart",
    "convergent": "coming together / meeting",
    "proponent": "supporter / advocate",
    "opponent": "rival / adversary",
    "pertinent": "relevant / applicable",
    "indispensable": "absolutely necessary / essential"
};

function formatTextWithVocabHints(rawText) {
    if (!rawText) return '';
    let escaped = escapeHtml(rawText);

    for (const [word, synonym] of Object.entries(VOCAB_SYNONYMS)) {
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        if (regex.test(escaped)) {
            escaped = escaped.replace(regex, (match) => {
                return `<span class="vocab-term" onclick="window.toggleVocabSynonym(this, event)" title="Click to reveal synonym">${match}<span class="vocab-bracket" style="display:none"> [${escapeHtml(synonym)}]</span></span>`;
            });
        }
    }
    return escaped;
}

window.toggleVocabSynonym = function(el, evt) {
    if (evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }
    const bracket = el.querySelector('.vocab-bracket');
    if (bracket) {
        const isHidden = bracket.style.display === 'none';
        bracket.style.display = isHidden ? 'inline-block' : 'none';
    }
};

let allVocabHintsShown = false;
window.toggleAllVocabHints = function() {
    allVocabHintsShown = !allVocabHintsShown;
    document.querySelectorAll('.vocab-bracket').forEach(b => {
        b.style.display = allVocabHintsShown ? 'inline-block' : 'none';
    });
    const btn = document.getElementById('btnVocabHelperToggle');
    if (btn) {
        btn.innerHTML = allVocabHintsShown ? '💡 Hide All Synonyms' : '💡 Show/Hide All Synonyms';
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    parseUrlParams();
    await loadExamData();
});

function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    examData.topicId = params.get('topic') || 'speed-time-and-distance';
    examData.type = params.get('type') || 'practice';
    examData.setNumber = parseInt(params.get('set') || '1', 10);
}

// Load Questions from Backend
async function loadExamData() {
    try {
        const response = await fetch(`/api/aptitude/exam/${examData.topicId}/${examData.type}/${examData.setNumber}`);
        const data = await response.json();

        if (!data.success || !data.questions) {
            if (data.locked) {
                alert(data.error);
                window.location.href = `aptitude.html?topic=${encodeURIComponent(examData.topicId)}`;
                return;
            }
            throw new Error(data.error || "Failed to load questions");
        }

        examData.questions = data.questions;

        // Update Header
        const topicName = examData.topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        document.getElementById('examTopicTitle').textContent = topicName;
        document.getElementById('examTypeBadge').textContent = `${examData.type === 'mock' ? 'Mock Test' : 'Practice Set'} ${examData.setNumber}`;

        // Update Difficulty Badge
        const diffConfig = DIFFICULTY_CONFIG[examData.type]?.[examData.setNumber] || { title: "Standard Practice", badgeClass: "badge-diff-moderate" };
        const diffBadge = document.getElementById('examDifficultyBadge');
        if (diffBadge) {
            diffBadge.textContent = diffConfig.title;
            diffBadge.className = `badge-pill ${diffConfig.badgeClass}`;
        }

        if (data.safeExamMode) {
            document.getElementById('fullscreenStartOverlay').style.display = 'flex';
        } else {
            initExamSession();
        }
    } catch (error) {
        console.error("Exam load error:", error);
        alert("Failed to initialize assessment: " + error.message);
        window.location.href = 'aptitude.html';
    }
}

// Start Safe Mock Exam after entering Fullscreen
function startSafeMockExam() {
    document.getElementById('fullscreenStartOverlay').style.display = 'none';

    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => {
            console.warn("Fullscreen request declined or failed:", err);
        });
    }

    initSafeExamEngine();
    initExamSession();
}

// Initialize Safe Exam Anti-Cheating Engine
function initSafeExamEngine() {
    examData.safeExamActive = true;

    // 1. Detect Tab Switches & Visibility Changes
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && examData.safeExamActive) {
            handleTabSwitchViolation();
        }
    });

    window.addEventListener('blur', () => {
        if (examData.safeExamActive) {
            handleTabSwitchViolation();
        }
    });

    // 2. Prevent Context Menu, Copy, Cut, Paste
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());

    // 3. Block Inspection Keys (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    document.addEventListener('keydown', e => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'u')
        ) {
            e.preventDefault();
            handleTabSwitchViolation("Developer tools / Inspection shortcut detected.");
        }
    });
}

// Handle Tab Switch Violation
function handleTabSwitchViolation(customMsg) {
    examData.tabSwitchViolations++;

    const modal = document.getElementById('safeViolationModal');
    const badge = document.getElementById('violationCountBadge');
    const warningText = document.getElementById('violationWarningText');

    badge.textContent = `${examData.tabSwitchViolations} / 2`;
    if (examData.tabSwitchViolations > 2) {
        badge.style.color = 'var(--accent-rose)';
        const penalty = (examData.tabSwitchViolations - 2) * 0.5;
        warningText.innerHTML = `<strong>Penalty Warning:</strong> You have exceeded free warnings. Current score penalty: <strong>-${penalty.toFixed(1)} points</strong>.`;
    } else {
        warningText.textContent = customMsg || "Leaving the exam screen or switching tabs is strictly tracked.";
    }

    modal.classList.add('active');
}

function dismissViolationModal() {
    document.getElementById('safeViolationModal').classList.remove('active');
    // Re-request fullscreen if lost
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
    }
}

// Initialize Exam Session
function initExamSession() {
    renderPalette();
    renderCurrentQuestion();
    startTimer();
}

// Timer Countdown Engine
function startTimer() {
    const timerDisplay = document.getElementById('examTimerDisplay');
    const timerBox = document.getElementById('examTimerBox');

    examData.timerInterval = setInterval(() => {
        examData.timeRemaining--;
        examData.timeTakenSeconds++;

        if (examData.timeRemaining <= 0) {
            clearInterval(examData.timerInterval);
            alert("Time is up! Your exam will now be submitted automatically.");
            executeFinalSubmission();
            return;
        }

        const mins = Math.floor(examData.timeRemaining / 60);
        const secs = examData.timeRemaining % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        // Turn timer red when under 5 minutes
        if (examData.timeRemaining <= 300) {
            timerBox.style.borderColor = 'var(--accent-rose)';
            timerBox.style.color = 'var(--accent-rose)';
        }
    }, 1000);
}

// Render Question Palette Grid (1-30)
function renderPalette() {
    const paletteGrid = document.getElementById('paletteGrid');
    if (!paletteGrid) return;

    paletteGrid.innerHTML = examData.questions.map((q, idx) => `
        <button class="palette-btn" id="pal-btn-${idx}" onclick="jumpToQuestion(${idx})">
            ${idx + 1}
        </button>
    `).join('');

    updatePalette();
}

// Update Palette Statuses
function updatePalette() {
    let answeredCount = 0;
    let reviewCount = 0;

    examData.questions.forEach((q, idx) => {
        const btn = document.getElementById(`pal-btn-${idx}`);
        if (!btn) return;

        btn.className = 'palette-btn';

        if (idx === examData.currentIndex) {
            btn.classList.add('current');
        }

        const isAnswered = Boolean(examData.answers[q.questionId]);
        const isReview = Boolean(examData.markedReview[q.questionId]);
        const isVisited = Boolean(examData.visited[q.questionId]);

        if (isReview) {
            btn.classList.add('review');
            reviewCount++;
        } else if (isAnswered) {
            btn.classList.add('answered');
            answeredCount++;
        } else if (isVisited) {
            btn.classList.add('unanswered');
        }
    });

    const unansweredCount = examData.questions.length - answeredCount;
    document.getElementById('countAnswered').textContent = answeredCount;
    document.getElementById('countUnanswered').textContent = unansweredCount;
    document.getElementById('countReview').textContent = reviewCount;
}

// Render Current Question
function renderCurrentQuestion() {
    const q = examData.questions[examData.currentIndex];
    if (!q) return;

    examData.visited[q.questionId] = true;

    // Update Counter & Statement with Vocab Bracket System
    document.getElementById('questionCounter').textContent = `Question ${examData.currentIndex + 1} of ${examData.questions.length}`;
    document.getElementById('questionNumberLabel').textContent = `QUESTION ${examData.currentIndex + 1}`;
    document.getElementById('questionStatement').innerHTML = formatTextWithVocabHints(q.question);

    // Render Options with Vocab Bracket System
    const currentAnswer = examData.answers[q.questionId];
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = q.options.map(opt => `
        <div class="option-item ${currentAnswer === opt.id ? 'selected' : ''}" onclick="selectOption('${q.questionId}', '${opt.id}')">
            <span class="option-letter">${opt.id}</span>
            <span class="option-text">${formatTextWithVocabHints(opt.text)}</span>
        </div>
    `).join('');

    // Update Mark for Review button state
    const isReview = Boolean(examData.markedReview[q.questionId]);
    const btnReview = document.getElementById('btnMarkReview');
    if (btnReview) {
        btnReview.style.backgroundColor = isReview ? 'var(--accent-purple)' : '';
        btnReview.style.color = isReview ? '#ffffff' : '';
    }

    // Prev / Next button states
    document.getElementById('btnPrev').disabled = examData.currentIndex === 0;
    const btnNext = document.getElementById('btnNext');
    if (examData.currentIndex === examData.questions.length - 1) {
        btnNext.textContent = 'Review & Submit';
    } else {
        btnNext.textContent = 'Save & Next →';
    }

    updatePalette();
}

// Select an Option
function selectOption(questionId, optionId) {
    examData.answers[questionId] = optionId;
    renderCurrentQuestion();
}

// Clear Selection
function clearCurrentSelection() {
    const q = examData.questions[examData.currentIndex];
    if (q && examData.answers[q.questionId]) {
        delete examData.answers[q.questionId];
        renderCurrentQuestion();
    }
}

// Toggle Mark for Review
function toggleMarkReview() {
    const q = examData.questions[examData.currentIndex];
    if (q) {
        examData.markedReview[q.questionId] = !examData.markedReview[q.questionId];
        renderCurrentQuestion();
    }
}

// Navigate Question
function navigateQuestion(delta) {
    const newIndex = examData.currentIndex + delta;
    if (newIndex >= 0 && newIndex < examData.questions.length) {
        examData.currentIndex = newIndex;
        renderCurrentQuestion();
    } else if (newIndex >= examData.questions.length) {
        confirmSubmitExam();
    }
}

// Jump to Question from Palette
function jumpToQuestion(index) {
    if (index >= 0 && index < examData.questions.length) {
        examData.currentIndex = index;
        renderCurrentQuestion();
    }
}

// Submit Confirmation
function confirmSubmitExam() {
    const answered = Object.keys(examData.answers).length;
    const unanswered = examData.questions.length - answered;
    const review = Object.values(examData.markedReview).filter(Boolean).length;

    document.getElementById('modalAnsweredCount').textContent = answered;
    document.getElementById('modalUnansweredCount').textContent = unanswered;
    document.getElementById('modalReviewCount').textContent = review;

    const modal = document.getElementById('submitConfirmModal');
    if (modal) modal.classList.add('active');
}

function closeSubmitConfirmModal() {
    const modal = document.getElementById('submitConfirmModal');
    if (modal) modal.classList.remove('active');
}

// Execute Final Submission to Backend
async function executeFinalSubmission() {
    closeSubmitConfirmModal();
    clearInterval(examData.timerInterval);
    examData.safeExamActive = false;

    // Exit fullscreen if active
    if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    }

    const payload = {
        topicId: examData.topicId,
        category: examData.category || 'quantitative',
        type: examData.type,
        setNumber: examData.setNumber,
        answers: examData.answers,
        timeTakenSeconds: examData.timeTakenSeconds,
        tabSwitchViolations: examData.tabSwitchViolations
    };

    try {
        const response = await fetch('/api/aptitude/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!data.success || !data.results) {
            throw new Error(data.error || "Failed to evaluate answers on server");
        }

        renderResultsOverlay(data.results);
    } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to submit exam: " + error.message);
    }
}

// Render Results Overlay
function renderResultsOverlay(results) {
    lastSubmissionResults = results;
    const overlay = document.getElementById('resultsOverlay');
    overlay.classList.add('active');

    // Metrics
    document.getElementById('metricPercentage').textContent = `${results.percentage}%`;
    document.getElementById('metricNetScore').textContent = `${results.netScore} pts`;
    document.getElementById('metricCorrect').textContent = `${results.correctCount} / ${results.totalQuestions}`;
    document.getElementById('metricWrong').textContent = results.wrongCount;
    document.getElementById('metricTabPenalties').textContent = `-${results.tabPenaltyPoints} pts`;

    const mins = Math.floor(results.timeTakenSeconds / 60);
    const secs = results.timeTakenSeconds % 60;
    document.getElementById('metricTimeTaken').textContent = `${mins}m ${secs}s`;

    // Banner and Evaluation
    const banner = document.getElementById('resultBanner');
    const bannerIcon = document.getElementById('resultBannerIcon');
    const bannerTitle = document.getElementById('resultBannerTitle');
    const bannerMsg = document.getElementById('resultBannerMessage');
    const btnGoToPreLearn = document.getElementById('btnGoToPreLearn');
    const btnGoNextSet = document.getElementById('btnGoNextSet');

    if (results.passed) {
        banner.className = 'result-banner passed';
        bannerIcon.textContent = '🎉';
        bannerTitle.textContent = `Assessment Passed (${results.percentage}%)`;
        bannerMsg.textContent = results.nextSetUnlocked 
            ? `Congratulations! You cleared the 80% benchmark. Set ${results.nextSetNumber} is now unlocked.`
            : `Great job! You scored ${results.percentage}%. Your score has been recorded to the leaderboard.`;
        btnGoNextSet.style.display = 'inline-flex';
        btnGoToPreLearn.style.display = 'none';
    } else {
        banner.className = 'result-banner failed';
        bannerIcon.textContent = '⚠️';
        bannerTitle.textContent = `Score Below 80% Benchmark (${results.percentage}%)`;
        bannerMsg.textContent = results.reLearnMessage;
        btnGoToPreLearn.style.display = 'inline-flex';
        btnGoNextSet.style.display = 'none';
    }

    // Render Solutions List
    const solutionsList = document.getElementById('solutionsList');
    solutionsList.innerHTML = results.detailedAnswers.map(ans => {
        const isCorrect = ans.isCorrect;
        const isAttempted = Boolean(ans.selectedOption);

        return `
            <div class="solution-item">
                <div class="solution-header">
                    <span style="font-weight: 600;">Question ${ans.questionNumber}</span>
                    <span class="badge-pill ${isCorrect ? 'badge-emerald' : (isAttempted ? 'badge-rose' : 'badge-amber')}">
                        ${isCorrect ? '✓ Correct (+1.0)' : (isAttempted ? '✗ Incorrect (-0.25)' : 'Unanswered (0.0)')}
                    </span>
                </div>
                <p style="color: var(--text-primary); margin-bottom: 12px; font-size: 0.96rem;">${escapeHtml(ans.question)}</p>

                <div style="font-size: 0.88rem; margin-bottom: 8px;">
                    Your Answer: <strong style="color: ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${ans.selectedOption || 'None'}</strong>
                    &nbsp;&nbsp;•&nbsp;&nbsp;
                    Correct Option: <strong style="color: var(--accent-emerald);">${ans.correctOption}</strong>
                </div>

                <div class="solution-explanation">
                    <strong style="color: var(--brand-primary);">Step-by-step Solution:</strong><br>
                    <span>${escapeHtml(ans.explanation)}</span>
                </div>
            </div>
        `;
    }).join('');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Download Official Certificate of Achievement
window.downloadCertificateFromResults = function() {
    if (!lastSubmissionResults) {
        alert("Please wait for your assessment results to evaluate.");
        return;
    }
    const topicName = examData.topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const studentName = localStorage.getItem('codigo_username') || localStorage.getItem('username') || "Candidate";

    if (typeof CertificateGenerator !== 'undefined') {
        CertificateGenerator.download({
            studentName,
            topicTitle: `${topicName} (Set ${examData.setNumber})`,
            score: `${lastSubmissionResults.percentage}%`,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        });
    } else {
        alert("Certificate Generator is loading. Please try again in a moment.");
    }
};

// Export Set for Revision with Hidden AlphaCoder Signature
window.exportRevisionFromResults = function() {
    if (!lastSubmissionResults) {
        alert("Please wait for your assessment results to evaluate.");
        return;
    }
    const topicName = examData.topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    if (typeof RevisionExporter !== 'undefined') {
        RevisionExporter.exportSetRevision({
            topicTitle: topicName,
            type: examData.type,
            setNumber: examData.setNumber,
            score: `${lastSubmissionResults.percentage}%`,
            netScore: lastSubmissionResults.netScore,
            totalQuestions: lastSubmissionResults.totalQuestions,
            detailedAnswers: lastSubmissionResults.detailedAnswers || []
        });
    } else {
        alert("Revision Exporter is loading. Please try again in a moment.");
    }
};

function scrollToSolutions() {
    const el = document.getElementById('solutionsSection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function returnToAptitudeHub() {
    window.location.href = `aptitude.html?topic=${encodeURIComponent(examData.topicId)}`;
}

// Redirect to Pre-learning Cheat Sheet when user failed (<80%)
function goToPreLearningCheatSheet() {
    const percentage = document.getElementById('metricPercentage').textContent.replace('%', '');
    window.location.href = `aptitude.html?topic=${encodeURIComponent(examData.topicId)}&reLearn=true&score=${encodeURIComponent(percentage)}`;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Download Official Certificate of Achievement (Pure Client-Side Canvas/PDF, zero server storage)
window.downloadCertificateFromResults = function() {
    if (!lastSubmissionResults) {
        alert("Please complete the assessment first before downloading the certificate.");
        return;
    }
    const topicName = examData.topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const studentName = localStorage.getItem('codigo_username') || localStorage.getItem('username') || "Candidate";

    if (typeof CertificateGenerator !== 'undefined') {
        CertificateGenerator.download({
            studentName,
            topicTitle: `${topicName} (Set ${examData.setNumber})`,
            score: `${lastSubmissionResults.percentage}%`,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        });
    } else {
        alert("Certificate generator is initializing. Please try again.");
    }
};

// Export Set for Revision with Hidden AlphaCoder Watermark & Verification
window.exportRevisionFromResults = function() {
    if (!lastSubmissionResults) {
        alert("Please complete the assessment first before exporting revision notes.");
        return;
    }
    const topicName = examData.topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    if (typeof RevisionExporter !== 'undefined') {
        RevisionExporter.exportSetRevision({
            topicTitle: topicName,
            type: examData.type,
            setNumber: examData.setNumber,
            score: `${lastSubmissionResults.percentage}%`,
            netScore: lastSubmissionResults.netScore,
            totalQuestions: lastSubmissionResults.totalQuestions,
            detailedAnswers: lastSubmissionResults.detailedAnswers || []
        });
    } else {
        alert("Revision exporter is initializing. Please try again.");
    }
};
