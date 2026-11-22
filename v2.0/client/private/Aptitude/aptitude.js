/**
 * Aptitude Arena Client Controller
 * Handles categories, topics, cheat-sheet rendering, set unlocks, and leaderboards.
 */

let currentCategory = 'quantitative';
let currentTopic = null;
let topicsData = [];
let pendingPreviousSetNumber = 1;

// Category metadata
const CATEGORY_META = {
    quantitative: {
        title: "Quantitative Aptitude",
        desc: "Build your quantitative aptitude skills with questions on arithmetic, algebra, geometry, and probability. Practise by topic and develop your speed and accuracy for placement tests.",
        total: 25
    },
    logical: {
        title: "Logical Reasoning",
        desc: "Learn to recognise patterns, connect clues, and draw conclusions through logical reasoning practice. Work through topic-wise questions and mock tests to strengthen your approach to placement assessments.",
        total: 14
    },
    verbal: {
        title: "Verbal Ability",
        desc: "Strengthen your grammar, vocabulary, and sentence skills with focused verbal ability practice. Work through topic-wise questions and mock tests to prepare for placement assessments.",
        total: 8
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', async () => {
    setupTheme();
    setupUrlParams();
    await loadCategory(currentCategory);
});

// Setup theme switcher
function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    document.body.className = savedTheme;
    if (themeToggle) {
        themeToggle.value = savedTheme;
        themeToggle.addEventListener('change', (e) => {
            document.body.className = e.target.value;
            localStorage.setItem('theme', e.target.value);
        });
    }
}

// Check URL parameters for direct deep-linking or re-learn redirection
function setupUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('category');
    const topicId = urlParams.get('topic');
    const reLearn = urlParams.get('reLearn') === 'true';
    const score = urlParams.get('score');

    if (cat && CATEGORY_META[cat]) {
        currentCategory = cat;
    }

    if (topicId) {
        setTimeout(async () => {
            await openTopicDetail(topicId);
            if (reLearn) {
                switchTopicTab('cheatSheet');
                const banner = document.getElementById('reLearnBanner');
                const msg = document.getElementById('reLearnMessage');
                if (banner && msg) {
                    banner.style.display = 'flex';
                    msg.textContent = `You scored ${score || 'below 80'}%, which is below the 80% passing requirement. Please review all concepts, formulas, and examples below before re-attempting!`;
                    banner.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 300);
    }
}

// Switch Category (Quantitative / Logical / Verbal)
async function switchCategory(cat) {
    if (!CATEGORY_META[cat]) return;
    currentCategory = cat;

    // Update Category Tab UI
    document.querySelectorAll('.category-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === cat);
    });

    // Update Breadcrumb & Header Banner
    document.getElementById('breadcrumbCategory').textContent = CATEGORY_META[cat].title;
    document.getElementById('categoryTitle').textContent = CATEGORY_META[cat].title;
    document.getElementById('categoryDescription').textContent = CATEGORY_META[cat].desc;
    document.getElementById('statsTotalTopics').textContent = CATEGORY_META[cat].total;

    // Hide Topic Detail and Show Category Overview
    document.getElementById('topicDetailSection').classList.remove('active');
    document.getElementById('categoryOverviewSection').style.display = 'block';
    document.getElementById('breadcrumbTopic').style.display = 'none';
    document.getElementById('breadcrumbTopicSeparator').style.display = 'none';

    await loadCategory(cat);
}

// Load Topics for Selected Category
async function loadCategory(cat) {
    try {
        const response = await fetch(`/api/aptitude/topics/${cat}`);
        const data = await response.json();

        if (data.success && data.topics) {
            topicsData = data.topics;
            renderTopics(topicsData);
            updateCategoryStats(topicsData);
        } else {
            console.error("Failed to load topics:", data.error);
        }
    } catch (error) {
        console.error("Error loading category topics:", error);
    }
}

// Update Category Stats
function updateCategoryStats(topics) {
    let completedSetsCount = 0;
    topics.forEach(t => {
        completedSetsCount += (t.passedPracticeSets ? t.passedPracticeSets.length : 0);
    });
    const completedEl = document.getElementById('statsCompletedSets');
    if (completedEl) completedEl.textContent = completedSetsCount;
}

// Render Topics Grid
function renderTopics(topics) {
    const grid = document.getElementById('topicsGrid');
    if (!grid) return;

    if (topics.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No topics found.</div>`;
        return;
    }

    grid.innerHTML = topics.map(t => {
        const passedCount = t.passedPracticeSets ? t.passedPracticeSets.length : 0;
        const totalPractice = t.totalPracticeSets || 4;
        const pct = Math.round((passedCount / totalPractice) * 100);

        return `
            <div class="topic-card" onclick="openTopicDetail('${t.topicId}')">
                <div>
                    <div class="topic-header">
                        <div class="topic-icon">${t.icon || '📘'}</div>
                        <div class="topic-title-group">
                            <h3>${escapeHtml(t.title)}</h3>
                            <span class="topic-category-tag">${capitalize(t.category)}</span>
                        </div>
                    </div>
                    <p class="topic-desc">${escapeHtml(t.description)}</p>
                </div>
                <div>
                    <div class="topic-progress-bar-container">
                        <div class="progress-info">
                            <span>Your Progress</span>
                            <span><strong>${passedCount}</strong> / ${totalPractice} Sets Passed</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill" style="width: ${pct}%;"></div>
                        </div>
                    </div>
                    <div class="topic-card-footer">
                        <span>4 Practice Sets • 2 Mocks</span>
                        <button class="open-topic-btn">
                            <span>Explore</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter Topics via Search Input
function filterTopics() {
    const query = (document.getElementById('topicSearchInput')?.value || '').toLowerCase().trim();
    if (!query) {
        renderTopics(topicsData);
        return;
    }
    const filtered = topicsData.filter(t => 
        t.title.toLowerCase().includes(query) || 
        t.description.toLowerCase().includes(query)
    );
    renderTopics(filtered);
}

// Open Topic Detail View
async function openTopicDetail(topicId) {
    try {
        const response = await fetch(`/api/aptitude/topic/${topicId}`);
        const data = await response.json();

        if (!data.success || !data.topic) {
            console.error("Topic detail failed:", data.error);
            return;
        }

        currentTopic = data.topic;

        // Update UI View
        document.getElementById('categoryOverviewSection').style.display = 'none';
        const detailSection = document.getElementById('topicDetailSection');
        detailSection.classList.add('active');

        // Update Breadcrumb
        document.getElementById('breadcrumbTopicSeparator').style.display = 'inline';
        const breadcrumbTopic = document.getElementById('breadcrumbTopic');
        breadcrumbTopic.style.display = 'inline';
        breadcrumbTopic.textContent = currentTopic.title;

        // Set Headers
        document.getElementById('detailTopicTitle').textContent = currentTopic.title;
        document.getElementById('detailTopicDesc').textContent = currentTopic.description;

        // Render Tabs
        renderCheatSheet(currentTopic.cheatSheet);
        renderPracticeSets(currentTopic.practiceSets);
        renderMockSets(currentTopic.mockSets);
        loadLeaderboard();

        // Default to Cheat Sheet or Practice
        switchTopicTab('cheatSheet');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error("Error opening topic detail:", error);
    }
}

// Switch Detail Tab
function switchTopicTab(tabKey) {
    document.querySelectorAll('.topic-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabKey);
    });

    const panels = {
        cheatSheet: document.getElementById('tabCheatSheet'),
        practice: document.getElementById('tabPractice'),
        mocks: document.getElementById('tabMocks'),
        leaderboard: document.getElementById('tabLeaderboard')
    };

    Object.keys(panels).forEach(key => {
        if (panels[key]) panels[key].classList.toggle('active', key === tabKey);
    });

    if (tabKey === 'leaderboard') {
        loadLeaderboard();
    }
}

// Back to Topics List
function backToTopicsList() {
    document.getElementById('topicDetailSection').classList.remove('active');
    document.getElementById('categoryOverviewSection').style.display = 'block';
    document.getElementById('breadcrumbTopic').style.display = 'none';
    document.getElementById('breadcrumbTopicSeparator').style.display = 'none';
    document.getElementById('reLearnBanner').style.display = 'none';
    currentTopic = null;
    loadCategory(currentCategory);
}

// Render Cheat-sheet Content
function renderCheatSheet(cheatSheet) {
    if (!cheatSheet) return;

    document.getElementById('cheatSheetTitle').textContent = cheatSheet.title || "Pre-learning & Formulas";
    const contentEl = document.getElementById('cheatSheetContent');
    if (contentEl) contentEl.innerHTML = cheatSheet.content || "<p>Review key concepts and formulas below.</p>";

    // Formulas Table
    const tableBody = document.getElementById('formulasTableBody');
    if (tableBody) {
        if (cheatSheet.formulas && cheatSheet.formulas.length > 0) {
            tableBody.innerHTML = cheatSheet.formulas.map(f => `
                <tr>
                    <td style="font-weight: 500;">${escapeHtml(f.situation)}</td>
                    <td><code>${escapeHtml(f.formula)}</code></td>
                    <td style="color: var(--text-muted); font-size: 0.82rem;">${escapeHtml(f.condition || 'General')}</td>
                </tr>
            `).join('');
            document.getElementById('formulasTable').style.display = 'table';
        } else {
            document.getElementById('formulasTable').style.display = 'none';
        }
    }

    // Shortcuts List
    const shortcutsList = document.getElementById('shortcutsList');
    if (shortcutsList && cheatSheet.shortcuts) {
        shortcutsList.innerHTML = cheatSheet.shortcuts.map(s => `<li>${escapeHtml(s)}</li>`).join('');
    }

    // FAQs Container
    const faqsContainer = document.getElementById('faqsContainer');
    if (faqsContainer && cheatSheet.faqs) {
        faqsContainer.innerHTML = cheatSheet.faqs.map(faq => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px 18px; margin-bottom: 12px;">
                <h4 style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 6px;">Q: ${escapeHtml(faq.question)}</h4>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${escapeHtml(faq.answer)}</p>
            </div>
        `).join('');
    }
}

// Render Practice Sets
function renderPracticeSets(practiceSets) {
    const grid = document.getElementById('practiceSetsGrid');
    if (!grid || !practiceSets) return;

    grid.innerHTML = practiceSets.map(s => {
        const isUnlocked = s.isUnlocked;
        const isPassed = s.isPassed;
        const hasScore = s.lastPercentage !== null;

        return `
            <div class="set-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div>
                    <div class="set-card-header">
                        <span class="set-card-title">Practice Set ${s.setNumber}</span>
                        ${isPassed 
                            ? `<span class="badge-pill badge-emerald">Passed (80%+)</span>` 
                            : (isUnlocked 
                                ? `<span class="badge-pill badge-brand">Unlocked</span>` 
                                : `<span class="badge-pill badge-rose">🔒 Locked</span>`)}
                    </div>
                    <div class="set-meta">30 MCQs • Passing Threshold: 80%</div>
                    
                    <div class="set-stats">
                        <div class="set-stats-row">
                            <span style="color: var(--text-muted);">Status:</span>
                            <span style="font-weight: 600; color: ${isPassed ? 'var(--accent-emerald)' : 'var(--text-secondary)'};">
                                ${isPassed ? 'Passed' : (hasScore ? 'Attempted (<80%)' : (isUnlocked ? 'Not Attempted' : 'Locked'))}
                            </span>
                        </div>
                        ${hasScore ? `
                            <div class="set-stats-row">
                                <span style="color: var(--text-muted);">Last Score:</span>
                                <span><strong>${s.lastPercentage}%</strong> (${s.lastScore} pts)</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div>
                    ${isUnlocked ? `
                        <button class="start-set-btn enabled" onclick="startExam('${currentTopic.topicId}', 'practice', ${s.setNumber})">
                            <span>${hasScore ? 'Re-attempt Set' : 'Start Practice'}</span>
                            <span>→</span>
                        </button>
                    ` : `
                        <button class="start-set-btn locked-btn" onclick="showLockedModal(${s.setNumber})">
                            <span>🔒 Locked (Pass Set ${s.setNumber - 1})</span>
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join('');
}

// Render Mock Sets
function renderMockSets(mockSets) {
    const grid = document.getElementById('mockSetsGrid');
    if (!grid || !mockSets) return;

    grid.innerHTML = mockSets.map(m => {
        const hasScore = m.lastPercentage !== null;
        return `
            <div class="set-card unlocked">
                <div>
                    <div class="set-card-header">
                        <span class="set-card-title">Mock Assessment ${m.setNumber}</span>
                        <span class="badge-pill badge-rose">Safe Exam Mode</span>
                    </div>
                    <div class="set-meta">30 MCQs • Fullscreen • Tab Monitor • -0.25 Negative Marking</div>

                    <div class="set-stats">
                        <div class="set-stats-row">
                            <span style="color: var(--text-muted);">Safe Mode:</span>
                            <span style="color: var(--accent-rose); font-weight: 600;">Enforced</span>
                        </div>
                        <div class="set-stats-row">
                            <span style="color: var(--text-muted);">Tab Penalty:</span>
                            <span>-0.5 pts after 2 warnings</span>
                        </div>
                        ${hasScore ? `
                            <div class="set-stats-row">
                                <span style="color: var(--text-muted);">Best Score:</span>
                                <span><strong>${m.lastScore} pts</strong> (${m.lastPercentage}%)</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div>
                    <button class="start-set-btn enabled" style="background-color: var(--accent-rose);" onclick="startExam('${currentTopic.topicId}', 'mock', ${m.setNumber})">
                        <span>${hasScore ? 'Re-take Mock Exam' : 'Enter Safe Mock Exam'}</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Start Exam / Navigate to exam.html
function startExam(topicId, type, setNumber) {
    window.location.href = `exam.html?topic=${encodeURIComponent(topicId)}&type=${encodeURIComponent(type)}&set=${encodeURIComponent(setNumber)}`;
}

// Show Locked Modal
function showLockedModal(setNumber) {
    pendingPreviousSetNumber = setNumber - 1;
    const modal = document.getElementById('lockedModal');
    const msg = document.getElementById('lockedModalMessage');
    if (msg) {
        msg.innerHTML = `Set ${setNumber} is locked. In accordance with strict placement readiness criteria, you must score at least <strong>80% marks on Set ${pendingPreviousSetNumber}</strong> before unlocking Set ${setNumber}.`;
    }
    if (modal) modal.classList.add('active');
}

function closeLockedModal() {
    const modal = document.getElementById('lockedModal');
    if (modal) modal.classList.remove('active');
}

function goToPreviousSet() {
    closeLockedModal();
    startExam(currentTopic.topicId, 'practice', pendingPreviousSetNumber);
}

// Load Leaderboard Data
async function loadLeaderboard() {
    if (!currentTopic) return;
    const filterVal = document.getElementById('leaderboardSetFilter')?.value || 'practice-1';
    const [type, setNumber] = filterVal.split('-');

    try {
        const response = await fetch(`/api/aptitude/leaderboard?topicId=${currentTopic.topicId}&type=${type}&setNumber=${setNumber}`);
        const data = await response.json();
        const tbody = document.getElementById('leaderboardTableBody');

        if (!tbody) return;

        if (!data.success || !data.leaderboard || data.leaderboard.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">No attempts recorded yet for this set. Be the first to rank!</td></tr>`;
            return;
        }

        tbody.innerHTML = data.leaderboard.map(entry => {
            let rankClass = '';
            if (entry.rank === 1) rankClass = 'rank-1';
            else if (entry.rank === 2) rankClass = 'rank-2';
            else if (entry.rank === 3) rankClass = 'rank-3';

            const mins = Math.floor(entry.timeTakenSeconds / 60);
            const secs = entry.timeTakenSeconds % 60;
            const timeStr = `${mins}m ${secs}s`;

            return `
                <tr>
                    <td><span class="rank-badge ${rankClass}">${entry.rank}</span></td>
                    <td style="font-weight: 600;">${escapeHtml(entry.username || 'User')}</td>
                    <td>${entry.correctCount} / 30 (${entry.percentage}%)</td>
                    <td><span style="color: var(--accent-emerald); font-weight: 500;">${entry.accuracy}%</span></td>
                    <td><strong>${entry.netScore} pts</strong></td>
                    <td style="color: var(--text-secondary);">${timeStr}</td>
                </tr>
            `;
        }).join('');
    } catch (error) {
        console.error("Error loading leaderboard:", error);
    }
}

// Helpers
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
