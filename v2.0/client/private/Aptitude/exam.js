/**
 * Exam / Assessment Session Engine
 * Handles Safe Exam Mode, anti-cheating, timer, question palette, and server evaluation.
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

// Initialize
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

    // 2. Disable Right-Click Context Menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // 3. Disable Copy, Cut, Paste
    ['copy', 'cut', 'paste'].forEach(evt => {
        document.addEventListener(evt, (e) => {
            e.preventDefault();
            return false;
        });
    });

    // 4. Intercept DevTools Keys (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && (e.key === 'u' || e.key === 'U'))
        ) {
            e.preventDefault();
            return false;
        }
    });
}

// Handle Tab Switch Violation
function handleTabSwitchViolation() {
    examData.tabSwitchViolations++;

    const modal = document.getElementById('safeViolationModal');
    const warningText = document.getElementById('violationWarningText');
    const badge = document.getElementById('violationCountBadge');

    if (examData.tabSwitchViolations === 1) {
        warningText.innerHTML = `<strong>Warning (1/2):</strong> You switched tabs or left the active window. Tab switching is strictly monitored in Safe Exam Mode. Please remain on this screen.`;
        badge.textContent = `1 / 2 (Free Warning)`;
    } else if (examData.tabSwitchViolations === 2) {
        warningText.innerHTML = `<strong>Final Warning (2/2):</strong> This is your last warning! Any subsequent tab switches will immediately incur a <strong>0.5 points penalty</strong> each on your final score.`;
        badge.textContent = `2 / 2 (Final Warning)`;
    } else {
        const excess = examData.tabSwitchViolations - 2;
        const penalty = (excess * 0.5).toFixed(1);
        warningText.innerHTML = `<strong>Penalty Applied:</strong> You have switched tabs ${examData.tabSwitchViolations} times. An accumulated penalty of <strong>-${penalty} points</strong> has been applied to this submission.`;
        badge.textContent = `${examData.tabSwitchViolations} Violations (-${penalty} pts)`;
    }

    if (modal) modal.classList.add('active');
}

function dismissViolationModal() {
    const modal = document.getElementById('safeViolationModal');
    if (modal) modal.classList.remove('active');
}

// Initialize Exam Session
function initExamSession() {
    renderPalette();
    startTimer();
    renderCurrentQuestion();
}

// Countdown Timer
function startTimer() {
    const timerDisplay = document.getElementById('examTimerDisplay');
    const timerBox = document.getElementById('examTimerBox');

    examData.timerInterval = setInterval(() => {
        if (examData.timeRemaining <= 0) {
            clearInterval(examData.timerInterval);
            alert("Time limit reached! Your assessment will now be submitted automatically.");
            executeFinalSubmission();
            return;
        }

        examData.timeRemaining--;
        examData.timeTakenSeconds++;

        const mins = Math.floor(examData.timeRemaining / 60);
        const secs = examData.timeRemaining % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (examData.timeRemaining <= 300) { // Last 5 minutes
            timerBox.classList.add('urgent');
        }
    }, 1000);
}

// Render Question Palette (1 to 30)
function renderPalette() {
    const grid = document.getElementById('paletteGrid');
    if (!grid) return;

    grid.innerHTML = examData.questions.map((q, idx) => `
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

    // Update Counter & Statement
    document.getElementById('questionCounter').textContent = `Question ${examData.currentIndex + 1} of ${examData.questions.length}`;
    document.getElementById('questionNumberLabel').textContent = `QUESTION ${examData.currentIndex + 1}`;
    document.getElementById('questionStatement').textContent = q.question;

    // Render Options
    const currentAnswer = examData.answers[q.questionId];
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = q.options.map(opt => `
        <div class="option-item ${currentAnswer === opt.id ? 'selected' : ''}" onclick="selectOption('${q.questionId}', '${opt.id}')">
            <span class="option-letter">${opt.id}</span>
            <span class="option-text">${escapeHtml(opt.text)}</span>
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
