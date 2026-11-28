/**
 * Codigo Platform - Revision Exporter
 * Exports Topic Modules and Sets for offline revision.
 * Features:
 * - Module-wise export (Formulas, Cheat Sheet, and Questions)
 * - Set-wise export (30 questions, user selections, correct answers, step-by-step explanations)
 * - Hidden Signature of "AlphaCoder" embedded in watermarks, metadata, and authentication blocks
 */

(function (global) {

    /**
     * Escape HTML characters
     */
    function esc(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /**
     * Generate and open a print-ready Revision Document
     */
    function exportSetRevision(data) {
        const {
            topicTitle = "Aptitude Topic",
            type = "practice",
            setNumber = 1,
            score = "100%",
            netScore = "30.0",
            totalQuestions = 30,
            date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            detailedAnswers = [],
            cheatSheetHtml = ""
        } = data;

        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            alert("Please allow pop-ups to open the Revision PDF exporter.");
            return;
        }

        const setTitle = type === 'mock' ? `Mock Assessment ${setNumber}` : `Practice Set ${setNumber}`;

        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="AlphaCoder">
    <meta name="generator" content="Codigo Platform by AlphaCoder">
    <meta name="revision-auth" content="ALPHACODER-VERIFIED-AUTH-HASH-2026">
    <title>${esc(topicTitle)} - ${esc(setTitle)} [Revision Guide]</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    <style>
        @page {
            size: A4 portrait;
            margin: 16mm 14mm 16mm 14mm;
        }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #1e293b;
            background: #ffffff;
            font-size: 13px;
            line-height: 1.55;
            position: relative;
        }

        /* Subtle Security Watermark with AlphaCoder */
        .watermark-overlay {
            position: fixed;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-35deg);
            font-size: 58px;
            font-weight: 800;
            color: rgba(226, 232, 240, 0.55);
            pointer-events: none;
            z-index: 0;
            white-space: nowrap;
            letter-spacing: 6px;
            text-transform: uppercase;
        }

        .revision-header {
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 14px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            position: relative;
            z-index: 1;
        }
        .header-brand {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .brand-logo {
            font-size: 18px;
            font-weight: 800;
            color: #e53935;
        }
        .doc-title {
            font-size: 20px;
            font-weight: 800;
            color: #0f172a;
            margin-top: 4px;
        }
        .doc-meta {
            font-size: 12px;
            color: #64748b;
            text-align: right;
        }

        .score-pill-row {
            display: flex;
            gap: 12px;
            margin-bottom: 22px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;
        }
        .score-pill {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 8px 14px;
            font-size: 12px;
        }
        .score-pill strong {
            color: #0f172a;
            font-size: 13px;
        }

        .section-heading {
            font-size: 15px;
            font-weight: 700;
            color: #0f172a;
            margin: 24px 0 12px;
            border-left: 4px solid #e53935;
            padding-left: 8px;
            position: relative;
            z-index: 1;
        }

        .cheat-sheet-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 14px 18px;
            margin-bottom: 24px;
            font-size: 12.5px;
            position: relative;
            z-index: 1;
        }

        .question-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 14px 16px;
            margin-bottom: 14px;
            page-break-inside: avoid;
            position: relative;
            z-index: 1;
        }
        .q-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            font-size: 12px;
            font-weight: 700;
            color: #475569;
        }
        .q-statement {
            font-size: 13.5px;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 10px;
        }
        .options-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            margin-bottom: 10px;
        }
        .opt-item {
            background: #f8fafc;
            border: 1px solid #edf2f7;
            border-radius: 6px;
            padding: 6px 10px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .opt-item.is-correct {
            background: #ecfdf5;
            border-color: #a7f3d0;
            color: #065f46;
            font-weight: 600;
        }
        .opt-item.user-wrong {
            background: #fef2f2;
            border-color: #fecaca;
            color: #991b1b;
        }

        .explanation-box {
            background: #f1f5f9;
            border-radius: 6px;
            padding: 8px 12px;
            font-size: 12px;
            color: #334155;
            border-left: 3px solid #3b82f6;
            margin-top: 6px;
        }

        .footer-auth-bar {
            border-top: 1px solid #cbd5e1;
            padding-top: 12px;
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 11px;
            color: #64748b;
            position: relative;
            z-index: 1;
        }
        .footer-signature {
            font-weight: 700;
            color: #1e293b;
        }

        /* Print Controls for Interactive Screen Mode */
        @media screen {
            body {
                background: #f1f5f9;
                padding: 30px 15px;
            }
            .page-container {
                max-width: 860px;
                margin: 0 auto;
                background: #ffffff;
                padding: 36px 40px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                border-radius: 12px;
            }
            .screen-action-bar {
                position: fixed;
                top: 20px;
                right: 30px;
                display: flex;
                gap: 10px;
                z-index: 1000;
            }
            .btn-print {
                background: #e53935;
                color: #ffffff;
                border: none;
                padding: 10px 18px;
                border-radius: 8px;
                font-weight: 700;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(229, 57, 53, 0.3);
            }
        }
        @media print {
            .screen-action-bar {
                display: none !important;
            }
            .page-container {
                box-shadow: none !important;
                padding: 0 !important;
            }
        }
    </style>
</head>
<body>
    <div class="screen-action-bar">
        <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
    </div>

    <!-- Hidden Steganographic / Metadata Signature of AlphaCoder -->
    <div data-author="AlphaCoder" data-auth-token="ALPHACODER_VERIFIED_2026" style="display:none;">
        Crafted and verified by AlphaCoder for Codigo Placement Platform.
    </div>

    <div class="watermark-overlay">ALPHACODER VERIFIED</div>

    <div class="page-container">
        <!-- Document Header -->
        <header class="revision-header">
            <div>
                <div class="header-brand">
                    <span class="brand-logo">&lt;/&gt; Codigo</span>
                    <span style="font-size: 12px; font-weight: 700; color: #e53935; text-transform: uppercase; letter-spacing: 0.05em;">Aptitude Arena</span>
                </div>
                <h1 class="doc-title">${esc(topicTitle)}</h1>
                <div style="font-size: 13px; font-weight: 600; color: #475569; margin-top: 2px;">
                    ${esc(setTitle)} • Comprehensive Revision Dossier
                </div>
            </div>
            <div class="doc-meta">
                <div>Date: <strong>${esc(date)}</strong></div>
                <div>Questions: <strong>${totalQuestions} MCQs</strong></div>
                <div>Status: <strong style="color: #10b981;">Completed</strong></div>
            </div>
        </header>

        <!-- Stats Overview Pill Row -->
        <div class="score-pill-row">
            <div class="score-pill">Performance Score: <strong>${esc(score)}</strong></div>
            <div class="score-pill">Net Evaluated Score: <strong>${esc(netScore)} pts</strong></div>
            <div class="score-pill">Marking Scheme: <strong>+1.0 / -0.25</strong></div>
            <div class="score-pill">Verified Engine: <strong>AlphaCoder Standard</strong></div>
        </div>

        <!-- Cheat Sheet / Formulas Section (If Available) -->
        ${cheatSheetHtml ? `
        <h2 class="section-heading">Key Formulas & Placement Cheat Sheet</h2>
        <div class="cheat-sheet-box">
            ${cheatSheetHtml}
        </div>
        ` : ''}

        <!-- Questions & Step-by-Step Solutions -->
        <h2 class="section-heading">Questions, Responses & Step-by-Step Solutions</h2>
        <div class="questions-list">
            ${detailedAnswers.map(ans => {
                const isCorrect = ans.isCorrect;
                return `
                <div class="question-card">
                    <div class="q-header">
                        <span>Question ${ans.questionNumber}</span>
                        <span style="color: ${isCorrect ? '#10b981' : (ans.selectedOption ? '#e53935' : '#f59e0b')};">
                            ${isCorrect ? '✓ Correct (+1.0)' : (ans.selectedOption ? '✗ Incorrect (-0.25)' : 'Unattempted (0.0)')}
                        </span>
                    </div>
                    <div class="q-statement">${esc(ans.question)}</div>
                    
                    <div style="font-size: 12px; margin-bottom: 8px;">
                        <span>Your Answer: <strong style="color: ${isCorrect ? '#10b981' : '#e53935'};">${esc(ans.selectedOption || 'None')}</strong></span>
                        &nbsp;&nbsp;•&nbsp;&nbsp;
                        <span>Correct Answer: <strong style="color: #10b981;">Option ${esc(ans.correctOption)}</strong></span>
                    </div>

                    <div class="explanation-box">
                        <strong>Solution & Mathematical Proof:</strong><br>
                        ${esc(ans.explanation)}
                    </div>
                </div>
                `;
            }).join('')}
        </div>

        <!-- Footer Authentication Signature -->
        <footer class="footer-auth-bar">
            <div>
                © ${new Date().getFullYear()} Codigo Placement Platform. Distributed for candidate interview preparation.
            </div>
            <div class="footer-signature">
                ✦ Verified by AlphaCoder | CodeBattle-Arena Technical Board
            </div>
        </footer>
    </div>
</body>
</html>
        `;

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();
    }

    /**
     * Export Full Topic Module (Formulas + Sets)
     */
    async function exportModuleRevision(topicId) {
        try {
            const resp = await fetch(`/api/aptitude/topic/${topicId}`);
            const data = await resp.json();
            if (!data.success || !data.topic) {
                throw new Error(data.error || "Failed to load topic details for export");
            }

            const topic = data.topic;
            const cheatSheetHtml = topic.cheatSheet ? `
                <h3>${esc(topic.cheatSheet.title || topic.title)}</h3>
                <div>${topic.cheatSheet.overviewHtml || ''}</div>
            ` : '';

            // Load set 1 questions by default for quick complete module overview
            const qResp = await fetch(`/api/aptitude/exam/${topicId}/practice/1`);
            const qData = await qResp.json();
            const questions = qData.questions || [];

            exportSetRevision({
                topicTitle: topic.title,
                type: 'practice',
                setNumber: 1,
                score: '100% Ready',
                netScore: '30.0',
                totalQuestions: questions.length,
                detailedAnswers: questions.map(q => ({
                    questionNumber: q.questionNumber,
                    question: q.question,
                    selectedOption: 'Revision Mode',
                    correctOption: 'Answer Key',
                    isCorrect: true,
                    explanation: 'Review the step-by-step principles outlined in the pre-learning cheat sheet.'
                })),
                cheatSheetHtml
            });
        } catch (err) {
            console.error("Module export error:", err);
            alert("Could not export module: " + err.message);
        }
    }

    // Export to global scope
    global.RevisionExporter = {
        exportSet: exportSetRevision,
        exportModule: exportModuleRevision
    };

})(window);
