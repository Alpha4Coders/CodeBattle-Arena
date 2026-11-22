# ⚔️ CodeBattle Arena — Real-Time Competitive Coding & Aptitude Platform

[![Platform](https://img.shields.io/badge/Platform-Web-blue.svg)](https://github.com/vikashgupta16/CodeBattle-Arena)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

**CodeBattle Arena** is a modern, full-stack competitive programming and assessment platform featuring:
- ⚔️ **Live 1v1 PvP Coding Duels** (WebSocket real-time matchmaking)
- 📐 **Aptitude Arena** (Quantitative, Logical Reasoning & Verbal Ability with Safe Exam Mode)
- 🤖 **AI-Powered Code Assistance** (Google Gemini AI contextual hints)
- 📚 **Tiered Difficulty Practice & Real-World Projects**
- 🏆 **Global Rankings, Streaks & ELO Rating System**

---

## 🌟 What's New: Aptitude Arena 📐

A comprehensive placement and assessment preparation hub adhering to strict academic and corporate recruitment standards (TCS, Infosys, Wipro, Cognizant, Accenture, Amazon):

### 1. Categories & Topics (47 Total)
- **Quantitative Aptitude (25 Topics)**: Speed, Time and Distance, Algebra, Geometry, Probability, Number System, Permutation & Combinations, Interest, Mensuration, Statistics, etc.
- **Logical Reasoning (14 Topics)**: Clocks, Calendar, Blood Relations, Syllogisms, Puzzles, Coding Decoding, Seating Arrangement, etc.
- **Verbal Ability (8 Topics)**: Ordering of Words, Ordering of Sentences, Spotting Errors, Sentence Correction, Idioms & Phrases, Synonyms & Antonyms.

### 2. Pre-Learning & Formula Cheat-Sheets
- Every topic includes concept breakdowns, mathematical derivations, formula cheat-sheets, conversion rules, and FAQ sections.
- Comprehensive coverage for topics like **Speed, Time and Distance** (harmonic vs arithmetic mean, stoppages, relative velocity, boats/streams, circular tracks).

### 3. 80% Passing Mastery & Set Unlocking Logic
- **4 Practice Sets (30 MCQs each)** + **2 Mock Tests (30 MCQs each)** per topic.
- Set $N+1$ unlocks **if and only if** Set $N$ is completed with at least **80% marks**.
- Candidates scoring $< 80\%$ are prompted to re-learn concepts on the cheat-sheet before re-attempting.

### 4. 🛡️ Safe Exam Mode (Mock Tests)
- Enforces full-screen mode to prevent side-by-side extension and browser inspection.
- Monitors tab switching and window blur with a 2-warning grace period; subsequent infractions incur a **-0.5 points penalty** per switch.
- Disables right-click context menus, clipboard copying, and inspection shortcuts (`F12`, `Ctrl+Shift+I`).

### 5. Server-Side Security & Evaluation
- **Zero Answer Leakage**: Questions are delivered with options only; answer keys and explanations remain strictly on the server until final submission.
- **Negative Marking**: $+1.0$ for correct answers, $-0.25$ negative marking for wrong answers.
- **Topic Leaderboards**: Ranked by Net Score, Accuracy, and Time Taken.

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 (Neon-Free, Modern Dark/Light Palette), ES6+ JavaScript, ACE Code Editor.
- **Backend**: Node.js, Express.js (RESTful APIs), Socket.IO (WebSocket live duels).
- **Database**: MongoDB with Mongoose ODM (with in-memory fallback for local development resilience).
- **Authentication**: Clerk authentication & session management.
- **AI Integration**: Google Gemini AI for real-time contextual code intelligence.
- **Code Execution**: Piston API integration (40+ language runtime support).

---

## 📁 Repository Structure

```
CodeBattle-Arena/
├── judge0/                 # Isolated judge container configuration
└── v2.0/                   # Platform core application
    ├── client/
    │   ├── public/         # Public pages & authentication flows
    │   └── private/        # Protected student dashboard
    │       ├── Aptitude/   # Aptitude Arena (Quant, Logic, Verbal & Exam Engine)
    │       ├── Arena/      # 1v1 PvP coding battle arena
    │       ├── HomePage/   # Main dashboard with user stats
    │       ├── Leaderboard/# Global user rankings
    │       └── common/     # Shared styles, navigation & auth handlers
    └── server/
        ├── index.js        # Main Express server & API routes
        ├── aptitudeDatabase.js # Aptitude LLD, grading & leaderboard
        ├── seedAptitude.js # 47 topics, cheat-sheets & 30-MCQ sets seeder
        ├── testAptitude.js # Automated unit test suite (10 test cases)
        ├── arenaSocket.js  # WebSocket duel coordinator
        ├── arenaDatabase.js# Arena matchmaking & match records
        └── aiAssistance.js # Gemini AI assistant service
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or bun
- MongoDB (optional for local testing; in-memory fallback included)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vikashgupta16/CodeBattle-Arena.git
cd CodeBattle-Arena/v2.0

# 2. Install dependencies
npm install

# 3. Configure environment variables (.env)
cp .env.example .env
# Edit .env with your Clerk and MongoDB credentials

# 4. Run automated test suite
node server/testAptitude.js

# 5. Start development server
npm run dev
# or
npm start
```

Access the dashboard at `http://localhost:8080/private/HomePage/codigo.html` or the Aptitude Arena at `http://localhost:8080/private/Aptitude/aptitude.html`.

---

## 📄 License & Authors

Distributed under the **GPL-3.0-or-later** license.

**Authors:**
- [Vikash Gupta](https://github.com/Vortex-16)
- [Rouvik Maji](https://github.com/Rouvik)
- [Archisman Pal](https://github.com/Dealer-09)
- [Rajbeer Saha](https://github.com/pixelpioneer404)
