// @author Rouvik Maji & Archisman Pal
async function updateUserDetails()
{
    try {
        // Check if stats were updated from localStorage first
        if (localStorage.getItem('statsUpdated') === 'true') {
            const updatedStats = JSON.parse(localStorage.getItem('updatedStats'));
            if (updatedStats) {
                updateStatsDisplay(updatedStats);
                
                // Clear the localStorage flags
                localStorage.removeItem('statsUpdated');
                localStorage.removeItem('updatedStats');
                
                // Show brief success message
                showStatsUpdateNotification(updatedStats);
                return;
            }
        }

        // Fetch user basic data, stats, and recently solved problems in parallel
        const [userRes, statsRes, solvedRes] = await Promise.allSettled([
            fetch('/api/userdata'),
            fetch('/api/user/stats'),
            fetch('/api/user/solved-problems')
        ]);

        let userData = {};
        let statsData = {};
        let solvedData = {};

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
            userData = await userRes.value.json().catch(() => ({}));
        }
        if (statsRes.status === 'fulfilled' && statsRes.value.ok) {
            statsData = await statsRes.value.json().catch(() => ({}));
        }
        if (solvedRes.status === 'fulfilled' && solvedRes.value.ok) {
            solvedData = await solvedRes.value.json().catch(() => ({}));
        }

        const innerStats = statsData.stats || {};

        // Combine actual dynamic data from backend
        const combinedData = {
            name: userData.name || innerStats.name || 'Developer',
            rank: innerStats.rankPosition || userData.rank || 1,
            arenaWins: innerStats.arena?.wins || 0,
            arenaMatches: innerStats.arena?.matchesPlayed || 0,
            arenaWinRate: innerStats.arena?.winRate,
            streak_count: Number(innerStats.streak_count ?? userData.streak_count ?? 0),
            problemsSolved: Number(innerStats.problemsSolved ?? userData.problemsSolved ?? 0),
            easyCount: Number(innerStats.easyCount ?? userData.easyCount ?? 0),
            mediumCount: Number(innerStats.mediumCount ?? userData.mediumCount ?? 0),
            hardCount: Number(innerStats.hardCount ?? userData.hardCount ?? 0),
            realWorldCount: Number(innerStats.realWorldCount ?? 0),
            recentlySolved: Array.isArray(solvedData.recentlySolved) ? solvedData.recentlySolved : []
        };
        
        updateStatsDisplay(combinedData);
    } catch (error) {
        console.error('Failed to update user details:', error);
        // Fallback with clean 0 values for new or offline session
        updateStatsDisplay({
            name: 'Developer',
            rank: 1,
            arenaWins: 0,
            arenaMatches: 0,
            arenaWinRate: 0,
            streak_count: 0,
            problemsSolved: 0,
            easyCount: 0,
            mediumCount: 0,
            hardCount: 0,
            recentlySolved: []
        });
    }
}

// Helper function to update stats display with dynamic backend data
function updateStatsDisplay(data) {
    const username = document.getElementById("dashboard_username");
    const currRank = document.getElementById("dashboard_currRank");
    const contestCount = document.getElementById("dashboard_contestCount");
    const streakCount = document.getElementById("dashboard_streakCount");
    const totalProblems = document.getElementById("dashboard_totalProblems");
    const easyCount = document.getElementById("dashboard_easyCount");
    const mediumCount = document.getElementById("dashboard_mediumCount");
    const hardCount = document.getElementById("dashboard_hardCount");

    // 1. User Name and Avatar Initials
    if (username) username.textContent = data.name || 'Developer';
    
    const initial = (data.name || 'D').charAt(0).toUpperCase();
    document.querySelectorAll('.user_avatar_initial').forEach(el => {
        el.textContent = initial;
    });

    if (currRank) currRank.textContent = String(data.rank || 1).padStart(3, '0');
    if (contestCount) contestCount.textContent = data.arenaWins || 0;

    // 2. Day Streak Card
    const streakVal = Number(data.streak_count || 0);
    if (streakCount) streakCount.textContent = streakVal;
    
    const streakTrend = document.getElementById("dashboard_streakTrend");
    if (streakTrend) {
        streakTrend.textContent = streakVal > 0 ? `↑ +${streakVal}` : '0 days';
    }

    const sidebarStreak = document.getElementById("sidebar_streak_count");
    if (sidebarStreak) sidebarStreak.textContent = streakVal;

    const sidebarStreakDesc = document.getElementById("sidebar_streak_desc");
    if (sidebarStreakDesc) {
        sidebarStreakDesc.innerHTML = streakVal > 0 
            ? `You're on a <span id="sidebar_streak_count">${streakVal}</span> day streak 🔥`
            : 'Solve a problem to start your streak 🔥';
    }

    // 3. Problems Solved Card
    const solvedVal = Number(data.problemsSolved || 0);
    if (totalProblems) totalProblems.textContent = solvedVal;
    
    const solvedTrend = document.getElementById("dashboard_solvedTrend");
    if (solvedTrend) {
        solvedTrend.textContent = solvedVal > 0 ? `↑ +${Math.min(solvedVal, 3)}` : '0 solved';
    }

    if (easyCount) easyCount.textContent = data.easyCount || 0;
    if (mediumCount) mediumCount.textContent = data.mediumCount || 0;
    if (hardCount) hardCount.textContent = data.hardCount || 0;

    // 4. Learning Time Card (Computed dynamically: 0.5h per solved problem + 0.25h per arena match)
    const learningTimeEl = document.getElementById("dashboard_learningTime");
    const learningTrend = document.getElementById("dashboard_learningTrend");
    const totalHours = (solvedVal * 0.5) + ((data.arenaMatches || 0) * 0.25);
    
    if (learningTimeEl) {
        learningTimeEl.textContent = totalHours > 0 
            ? (totalHours < 10 ? totalHours.toFixed(1) : Math.round(totalHours)) + 'h'
            : '0h';
    }
    if (learningTrend) {
        learningTrend.textContent = totalHours > 0 
            ? `↑ +${(Math.min(totalHours, 2.5)).toFixed(1)}h`
            : '0h';
    }

    // 5. Accuracy Card (Computed dynamically from arena win rate or weighted difficulty ratio)
    const accuracyEl = document.getElementById("dashboard_accuracy");
    const accuracyTrend = document.getElementById("dashboard_accuracyTrend");
    let accuracyPct = 0;

    if (data.arenaMatches > 0 && typeof data.arenaWinRate === 'number') {
        accuracyPct = Math.round(data.arenaWinRate);
    } else if (solvedVal > 0) {
        const weightedScore = (Number(data.hardCount || 0) * 25) + (Number(data.mediumCount || 0) * 15) + (Number(data.easyCount || 0) * 10);
        const expectedScore = solvedVal * 15;
        accuracyPct = Math.min(99, Math.max(50, Math.round((weightedScore / Math.max(1, expectedScore)) * 75)));
    }

    if (accuracyEl) {
        accuracyEl.textContent = `${accuracyPct}%`;
    }
    if (accuracyTrend) {
        accuracyTrend.textContent = accuracyPct > 0 
            ? `↑ +${Math.max(1, Math.round(accuracyPct * 0.02))}%`
            : '0%';
    }

    // 6. Continue Learning Widget (Dynamic from user's actual solved problems or active track)
    const continueTitle = document.getElementById("continue_course_title");
    const continueMeta = document.getElementById("continue_course_meta");
    const continueFill = document.getElementById("continue_course_fill");
    const continuePct = document.getElementById("continue_course_pct");
    const continueBtn = document.getElementById("continue_course_btn");

    if (data.recentlySolved && data.recentlySolved.length > 0) {
        const recent = data.recentlySolved[0];
        if (continueTitle) continueTitle.textContent = recent.problemTitle || recent.problemId || 'Algorithm Challenge';
        if (continueMeta) continueMeta.textContent = `${recent.difficulty || 'DSA'} • ${(recent.language || 'Code').toUpperCase()} • In Progress`;
        const pct = Math.min(100, Math.max(25, Math.round(((solvedVal % 5) + 1) * 20)));
        if (continueFill) continueFill.style.width = `${pct}%`;
        if (continuePct) continuePct.textContent = `${pct}%`;
        if (continueBtn) continueBtn.href = `../Easy/beginner.html#${recent.problemId || ''}`;
    } else {
        if (continueTitle) continueTitle.textContent = 'Number Systems & Aptitude';
        if (continueMeta) continueMeta.textContent = 'Aptitude • 25 Quantitative Topics';
        if (continueFill) continueFill.style.width = '15%';
        if (continuePct) continuePct.textContent = '15%';
        if (continueBtn) continueBtn.href = '../Aptitude/aptitude.html';
    }

    // 7. Upcoming Goals Widget (Dynamic weekly goal tracking)
    const weeklyGoal = 5;
    const currentGoalCount = solvedVal > 0 
        ? (solvedVal % weeklyGoal === 0 ? weeklyGoal : solvedVal % weeklyGoal)
        : 0;

    const goalRingFill = document.getElementById("goal_ring_fill");
    const goalProgressText = document.getElementById("goal_progress_text");
    const goalStatementText = document.getElementById("goal_statement_text");

    if (goalProgressText) goalProgressText.textContent = `${currentGoalCount}/${weeklyGoal}`;
    if (goalRingFill) {
        const circumference = 201; // 2 * PI * 32
        const offset = circumference - (circumference * (currentGoalCount / weeklyGoal));
        goalRingFill.style.strokeDashoffset = offset;
    }
    if (goalStatementText) {
        if (currentGoalCount >= weeklyGoal) {
            goalStatementText.textContent = "Weekly goal achieved! Outstanding work! 🔥";
        } else {
            const remaining = weeklyGoal - currentGoalCount;
            goalStatementText.textContent = `Complete ${remaining} more problem${remaining === 1 ? '' : 's'} this week`;
        }
    }

    // 8. Your Progress Spline Chart (Dynamically renders SVG curve and Mon-Sun points)
    const chartBadge = document.getElementById("dashboard_chartProgress");
    if (chartBadge) {
        chartBadge.textContent = `${accuracyPct}%`;
    }
    renderProgressSplineChart(accuracyPct, solvedVal, streakVal);

    // 9. Profile Section Updates
    const customName = localStorage.getItem('userCustomName');
    const finalName = customName || data.name || 'Developer';
    if (username) username.textContent = finalName;

    const profileName = document.getElementById("profile_display_name");
    const editName = document.getElementById("edit_user_name");
    if (profileName) profileName.textContent = finalName;
    if (editName && !editName.dataset.dirty) editName.value = finalName;

    const profileRank = document.getElementById("profile_rank_val");
    if (profileRank) profileRank.textContent = '#' + String(data.rank || 1).padStart(3, '0');

    const profileStreak = document.getElementById("profile_streak_val");
    if (profileStreak) profileStreak.textContent = streakVal;

    const profilePoints = document.getElementById("profile_points_val");
    const calcPts = (Number(data.hardCount || 0) * 20) + (Number(data.mediumCount || 0) * 10) + (Number(data.easyCount || 0) * 5);
    if (profilePoints) profilePoints.textContent = calcPts;

    const profileTotal = document.getElementById("profile_solved_total");
    if (profileTotal) profileTotal.textContent = solvedVal;

    const profileEasy = document.getElementById("profile_easy_val");
    if (profileEasy) profileEasy.textContent = data.easyCount || 0;

    const profileMedium = document.getElementById("profile_medium_val");
    if (profileMedium) profileMedium.textContent = data.mediumCount || 0;

    const profileHard = document.getElementById("profile_hard_val");
    if (profileHard) profileHard.textContent = data.hardCount || 0;

    // Badges
    const badgeStreak = document.getElementById("badge_streak_val");
    if (badgeStreak) badgeStreak.textContent = Math.min(7, streakVal);

    const badgeSolved = document.getElementById("badge_solved_val");
    if (badgeSolved) badgeSolved.textContent = Math.min(25, solvedVal);
}

function saveProfileName() {
    const input = document.getElementById("edit_user_name");
    if (!input || !input.value.trim()) return;
    const newName = input.value.trim();
    localStorage.setItem('userCustomName', newName);
    const username = document.getElementById("dashboard_username");
    const profileName = document.getElementById("profile_display_name");
    if (username) username.textContent = newName;
    if (profileName) profileName.textContent = newName;
    const initial = newName.charAt(0).toUpperCase();
    document.querySelectorAll('.user_avatar_initial').forEach(el => el.textContent = initial);
    alert('Profile name updated to: ' + newName);
}

// Dynamically generate smooth spline curve & dots for 7 days (Mon-Sun)
function renderProgressSplineChart(accuracy, solvedCount, streak) {
    const areaPath = document.getElementById("spline_area_path");
    const linePath = document.getElementById("spline_line_path");
    const dotsGroup = document.getElementById("spline_dots_group");

    if (!areaPath || !linePath || !dotsGroup) return;

    // Generate 7 progressive values based on real user activity
    const base = Math.max(10, Math.min(75, accuracy || 25));
    const points = [];
    for (let i = 0; i < 7; i++) {
        const dayFactor = (i / 6);
        const streakFactor = Math.min(15, streak * 2);
        const val = Math.min(85, Math.max(15, base * (0.6 + (dayFactor * 0.4)) + (i >= (7 - Math.min(7, streak)) ? streakFactor : 0)));
        points.push(val);
    }

    // Chart dimensions: viewBox 0 0 320 90
    // X goes from 15 to 305 (step ~48.3). Y goes from 75 (bottom) to 15 (top).
    const coords = points.map((p, i) => {
        const x = Math.round(15 + i * (290 / 6));
        const y = Math.round(75 - (p / 100) * 58);
        return { x, y };
    });

    // Build cubic bezier curve through coords
    let lineD = `M ${coords[0].x},${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
        const p0 = coords[i];
        const p1 = coords[i + 1];
        const cx = (p0.x + p1.x) / 2;
        lineD += ` C ${cx},${p0.y} ${cx},${p1.y} ${p1.x},${p1.y}`;
    }

    const areaD = `${lineD} L ${coords[coords.length - 1].x},90 L ${coords[0].x},90 Z`;

    linePath.setAttribute('d', lineD);
    areaPath.setAttribute('d', areaD);

    // Build SVG circle data dots
    let dotsHtml = '';
    coords.forEach((pt, i) => {
        const isLast = (i === coords.length - 1);
        if (isLast) {
            dotsHtml += `<circle cx="${pt.x}" cy="${pt.y}" r="4.5" fill="#e53935" stroke="#ffffff" stroke-width="1.8"></circle>`;
        } else {
            dotsHtml += `<circle cx="${pt.x}" cy="${pt.y}" r="3.2" fill="#e53935"></circle>`;
        }
    });
    dotsGroup.innerHTML = dotsHtml;
}

// Show brief notification when stats are updated
function showStatsUpdateNotification(stats) {
    const notification = document.createElement('div');
    notification.className = 'stats-update-notification';
    notification.innerHTML = `
        <div class="notification-banner">
            <span class="notification-icon">📈</span>
            <span class="notification-text">Stats updated! You're doing great!</span>
            <button class="close-notification" onclick="this.closest('.stats-update-notification').remove()">×</button>
        </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .stats-update-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-banner {
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 15px rgba(72, 187, 120, 0.3);
            min-width: 300px;
        }
        
        .notification-icon {
            font-size: 1.2rem;
        }
        
        .notification-text {
            flex: 1;
            font-weight: 500;
        }
        
        .close-notification {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
            style.remove();
        }
    }, 3000);
}

// Arena Data Loading Functions
async function loadArenaData() {
    try {
        // Load Arena system stats (online users, active matches, total matches)
        const statsResponse = await fetch('/api/arena/system-stats');
        if (statsResponse.ok) {
            const { stats } = await statsResponse.json();
            updateArenaStats(stats);
        }

        // Load Arena leaderboard preview
        const leaderboardResponse = await fetch('/api/arena/leaderboard');
        if (leaderboardResponse.ok) {
            const { leaderboard } = await leaderboardResponse.json();
            updateArenaLeaderboard(leaderboard.slice(0, 3)); // Show top 3
        }
    } catch (error) {
        console.error('Failed to load Arena data:', error);
    }
}

function updateArenaStats(stats) {
    if (!stats) return;
    const elOnline = document.getElementById('arenaOnlineUsers');
    const elActive = document.getElementById('arenaActiveMatches');
    const elTotal = document.getElementById('arenaTotalMatches');
    if (elOnline) elOnline.textContent = stats.onlinePlayersCount || 0;
    if (elActive) elActive.textContent = stats.activeMatchesCount || 0;
    if (elTotal) elTotal.textContent = stats.totalMatchesCount || 0;
}

function updateArenaLeaderboard(leaderboard) {
    const container = document.getElementById('arenaTopPlayers');
    if (!container) return;
    
    if (!leaderboard || leaderboard.length === 0) {
        container.innerHTML = '<div class="loading">No matches played yet. Be the first to enter the Arena!</div>';
        return;
    }
    
    container.innerHTML = leaderboard.map((player, index) => `
        <div class="leaderboard-item-preview">
            <div class="leaderboard-rank-preview">#${index + 1}</div>
            <div class="leaderboard-player-preview">
                <h4>${player.username}</h4>
                <p>${player.totalMatches} matches • ${player.currentStreak} streak</p>
            </div>
            <div class="leaderboard-stats-preview">
                <div class="win-rate-preview">${player.winRate}%</div>
                <div>${player.wins}W ${player.losses}L</div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    // Load Arena data on page load
    loadArenaData();

    // Email Form
    // Email Validation and Sending
//   email 
function validate(){
    let name= document.querySelector(".name");
    let email= document.querySelector(".email");
    let msg= document.querySelector(".message");
    let sendBtn= document.querySelector(".send-btn");
    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value== ""){
            emptyerror();
        }else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });

}
validate();
function sendmail(name,email,msg)
{
    emailjs.send("service_vikash__gupta","template_u8mh7fk",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}
function emptyerror()
{
    swal({
        title: "Complete All The Sections",
        text: "Fields cant be empty",
        icon: "error",
      });
}
function success()
{
    swal({
        title: "Email Sent Succesfully",
        text: "We will Try To Rspond In 24 Hours",
        icon: "success",
      });
}

    updateUserDetails(); // update the user details once all listeners have been added
});
