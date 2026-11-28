/**
 * Codigo Platform - Certificate Generator
 * Client-Side Instant PDF / Canvas Generator
 * Matches the official Codigo Certificate of Achievement design:
 * - Geometric gold and navy framing
 * - "BEST AWARD" gold ribbon medallion
 * - Official Signatures: "Codigo Platform" & "AlphaCoder"
 * - Zero server storage: dynamic on-the-fly client generation and download
 */

(function (global) {
    /**
     * Draw the certificate onto an HTML5 Canvas matching the uploaded design
     */
    function renderCertificateToCanvas(data) {
        const {
            studentName = "Valued Candidate",
            topicTitle = "Quantitative Aptitude Mastery",
            score = "90%",
            date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            certId = 'CDG-' + Math.random().toString(36).substring(2, 8).toUpperCase()
        } = data;

        const canvas = document.createElement('canvas');
        canvas.width = 1600;
        canvas.height = 1100;
        const ctx = canvas.getContext('2d');

        // 1. Base Background Gradient (Deep Navy / Slate Outer, White / Cream Center)
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, 1600, 1100);

        // Inner Certificate Card
        const m = 40; // Outer margin
        const cardW = 1600 - m * 2;
        const cardH = 1100 - m * 2;

        const bgGrad = ctx.createLinearGradient(m, m, m + cardW, m + cardH);
        bgGrad.addColorStop(0, '#ffffff');
        bgGrad.addColorStop(0.5, '#f8fafc');
        bgGrad.addColorStop(1, '#f1f5f9');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(m, m, cardW, cardH);

        // Security / Pinstripe Texture in Center
        ctx.strokeStyle = 'rgba(218, 225, 233, 0.45)';
        ctx.lineWidth = 1;
        for (let y = m + 20; y < m + cardH - 20; y += 8) {
            ctx.beginPath();
            ctx.moveTo(m + 30, y);
            ctx.lineTo(m + cardW - 30, y);
            ctx.stroke();
        }

        // 2. Geometric Left-Side Gold & Navy Ribbons / Angles
        // Outer Navy Corner
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(m, m);
        ctx.lineTo(m + 380, m);
        ctx.lineTo(m, m + 380);
        ctx.closePath();
        ctx.fill();

        // Left Middle Gold Band
        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.moveTo(m, m + 420);
        ctx.lineTo(m + 340, m + 420);
        ctx.lineTo(m, m + 80);
        ctx.closePath();
        ctx.fill();

        // Bottom Left Navy Corner
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.moveTo(m, m + cardH);
        ctx.lineTo(m + 400, m + cardH);
        ctx.lineTo(m, m + cardH - 400);
        ctx.closePath();
        ctx.fill();

        // Left Gold Thin Accent Lines
        ctx.strokeStyle = '#c5a059';
        ctx.lineWidth = 2.5;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(m + 30 + i * 14, m);
            ctx.lineTo(m, m + 30 + i * 14);
            ctx.stroke();
        }

        // Inner Border Frame (Dual Gold & Grey Lines)
        ctx.strokeStyle = '#c5a059';
        ctx.lineWidth = 3;
        ctx.strokeRect(m + 30, m + 30, cardW - 60, cardH - 60);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.strokeRect(m + 38, m + 38, cardW - 76, cardH - 76);

        // 3. Top-Right "BEST AWARD" Medal & Ribbon
        const medalX = 1600 - m - 180;
        const medalY = m + 140;

        // Ribbon Tails (Navy Blue with Gold Edges)
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#c5a059';
        ctx.lineWidth = 3;

        // Tail 1
        ctx.beginPath();
        ctx.moveTo(medalX - 35, medalY + 30);
        ctx.lineTo(medalX - 45, medalY + 220);
        ctx.lineTo(medalX - 15, medalY + 185);
        ctx.lineTo(medalX - 5, medalY + 220);
        ctx.lineTo(medalX - 5, medalY + 30);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Tail 2
        ctx.beginPath();
        ctx.moveTo(medalX + 5, medalY + 30);
        ctx.lineTo(medalX + 5, medalY + 220);
        ctx.lineTo(medalX + 35, medalY + 185);
        ctx.lineTo(medalX + 55, medalY + 220);
        ctx.lineTo(medalX + 35, medalY + 30);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Outer Gold Medallion Ring
        const goldGrad = ctx.createRadialGradient(medalX, medalY, 20, medalX, medalY, 70);
        goldGrad.addColorStop(0, '#fef08a');
        goldGrad.addColorStop(0.5, '#d4af37');
        goldGrad.addColorStop(1, '#996515');
        ctx.fillStyle = goldGrad;
        ctx.beginPath();
        ctx.arc(medalX, medalY, 68, 0, Math.PI * 2);
        ctx.fill();

        // Inner Dark Navy Core of Medal
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(medalX, medalY, 52, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Text inside Medal
        ctx.fillStyle = '#fef08a';
        ctx.textAlign = 'center';
        ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("BEST", medalX, medalY - 8);
        ctx.fillText("AWARD", medalX, medalY + 12);
        ctx.font = '14px serif';
        ctx.fillText("★ ★ ★", medalX, medalY + 30);

        // 4. Center Typography
        // Main Title: "CERTIFICATE"
        ctx.textAlign = 'center';
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 64px "Times New Roman", Georgia, serif';
        ctx.letterSpacing = "6px";
        ctx.fillText("CERTIFICATE", 820, 260);

        // Subtitle: "OF ACHIEVEMENT"
        ctx.fillStyle = '#c5a059';
        ctx.font = '600 24px "Plus Jakarta Sans", Poppins, sans-serif';
        ctx.fillText("OF ACHIEVEMENT", 820, 310);

        // Subtext: "THIS CERTIFICATE IS PROUDLY PRESENTED TO"
        ctx.fillStyle = '#64748b';
        ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("THIS CERTIFICATE IS PROUDLY PRESENTED TO", 820, 390);

        // Student Recipient Name (Large, Gold / Serif / Script)
        ctx.fillStyle = '#1e293b';
        ctx.font = 'italic bold 56px "Georgia", "Times New Roman", serif';
        ctx.fillText(studentName, 820, 480);

        // Underline Accent Rule
        ctx.strokeStyle = '#c5a059';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(520, 510);
        ctx.lineTo(1120, 510);
        ctx.stroke();

        // Certificate Narrative
        ctx.fillStyle = '#475569';
        ctx.font = '400 18px "Plus Jakarta Sans", "Poppins", sans-serif';
        ctx.fillText(`For successfully demonstrating comprehensive mastery in ${topicTitle}`, 820, 560);
        ctx.fillText(`with an evaluated benchmark score of ${score} on the Codigo Platform.`, 820, 595);
        ctx.fillText("This credential certifies placement-grade problem solving, speed, and analytical rigor.", 820, 630);

        // 5. Signatures Block (Bottom Left & Right)
        const sigY = 820;

        // Left Signature: Codigo Platform
        ctx.textAlign = 'center';
        // Stylized cursive script signature
        ctx.fillStyle = '#0f172a';
        ctx.font = 'italic bold 34px "Brush Script MT", "Segoe Script", cursive, serif';
        ctx.fillText("Codigo Platform", 580, sigY);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(430, sigY + 15);
        ctx.lineTo(730, sigY + 15);
        ctx.stroke();

        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("SIGNATURE", 580, sigY + 38);
        ctx.fillStyle = '#64748b';
        ctx.font = '13px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("Codigo Examination Authority", 580, sigY + 58);

        // Right Signature: AlphaCoder
        ctx.fillStyle = '#0f172a';
        ctx.font = 'italic bold 34px "Brush Script MT", "Segoe Script", cursive, serif';
        ctx.fillText("AlphaCoder", 1060, sigY);

        ctx.beginPath();
        ctx.moveTo(910, sigY + 15);
        ctx.lineTo(1210, sigY + 15);
        ctx.stroke();

        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("SIGNATURE", 1060, sigY + 38);
        ctx.fillStyle = '#64748b';
        ctx.font = '13px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("AlphaCoder Verification Lead", 1060, sigY + 58);

        // Metadata & Verification Hash (Bottom Center)
        ctx.fillStyle = '#94a3b8';
        ctx.font = '500 12px "Courier New", monospace';
        ctx.fillText(`DATE: ${date}   •   ID: ${certId}   •   VERIFIED BY ALPHACODER`, 820, 960);

        return canvas;
    }

    /**
     * Download the certificate directly as a high-quality PDF or high-res image
     * Zero server storage: 100% client side
     */
    async function downloadCertificate(data = {}) {
        try {
            const canvas = renderCertificateToCanvas(data);
            const fileName = `Certificate_${(data.topicTitle || 'Aptitude').replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.pdf`;

            // If jsPDF is available in browser window
            if (global.jspdf && global.jspdf.jsPDF) {
                const { jsPDF } = global.jspdf;
                // Landscape A4 orientation
                const doc = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [canvas.width, canvas.height]
                });
                const imgData = canvas.toDataURL('image/jpeg', 0.95);
                doc.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
                doc.save(fileName);
                return;
            }

            // Fallback: Use HTML5 canvas toBlob download if jsPDF CDN is blocked or unavailable
            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName.replace('.pdf', '.png');
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }, 500);
            }, 'image/png');
        } catch (err) {
            console.error("Certificate generation error:", err);
            alert("Could not generate certificate: " + err.message);
        }
    }

    // Export to global scope
    global.CertificateGenerator = {
        renderToCanvas: renderCertificateToCanvas,
        download: downloadCertificate
    };

})(window);
