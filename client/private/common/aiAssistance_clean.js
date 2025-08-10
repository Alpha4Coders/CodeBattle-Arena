class AIAssistanceManager {
    constructor(codeEditor, language = 'javascript') {
        this.codeEditor = codeEditor;
        this.language = language;
        this.currentProblem = null;
        this.isEnabled = true;
        this.debounceTimer = null;
        this.realTimeTimer = null;
        this.lastAnalyzedCode = '';
        this.currentSuggestions = [];
        this.lineDecorations = [];
        this.quickFixAnnotations = [];
        this.testCaseResults = null;
        this.gutterClickListener = null;
        this.annotationClickHandlers = [];
        this.fallbackClickHandlers = [];
        
        this.init();
    }

    init() {
        this.createAssistanceUI();
        this.setupEventListeners();
        this.setupLineDecorations();
        this.loadLanguageTips();
    }

    createAssistanceUI() {
        const statusIndicator = document.createElement('div');
        statusIndicator.id = 'ai-status-indicator';
        statusIndicator.className = 'ai-status-indicator';
        statusIndicator.innerHTML = `
            <div class="ai-status-content">
                <span class="ai-status-icon">🤖</span>
                <span class="ai-status-text">Assistant Active</span>
                <button class="ai-status-toggle" id="ai-toggle" title="Toggle Assistant">
                    <span class="toggle-icon">👁️</span>
                </button>
            </div>
        `;

        const editorContainer = document.querySelector('.code-editor-container') || 
                               document.querySelector('.editor-section') ||
                               document.querySelector('#code-editor-section') ||
                               document.body;
        
        editorContainer.insertBefore(statusIndicator, editorContainer.firstChild);
        this.addAssistanceStyles();
    }

    addAssistanceStyles() {
        const styles = `
            <style id="ai-assistance-styles">
                .ai-status-indicator {
                    background: var(--card-bg, #1e1e1e);
                    border-bottom: 1px solid var(--border-color, #333);
                    padding: 8px 16px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 12px;
                    color: var(--text-secondary, #aaa);
                    position: relative;
                    z-index: 5;
                }

                .ai-status-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .ai-status-icon {
                    font-size: 14px;
                    animation: pulse 3s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }

                .ai-status-text {
                    flex: 1;
                    font-weight: 500;
                }

                .ai-status-toggle {
                    background: transparent;
                    border: 1px solid var(--border-color, #444);
                    color: var(--text-secondary, #aaa);
                    padding: 4px 8px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 10px;
                    transition: all 0.3s ease;
                }

                .ai-status-toggle:hover {
                    background: var(--accent-blue, #75f74d);
                    color: #000;
                    border-color: var(--accent-blue, #75f74d);
                }

                .ace_gutter-cell.has-ai-suggestion {
                    position: relative;
                }
                
                .ace_gutter-cell .ai-lightbulb {
                    position: absolute;
                    right: 2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                    z-index: 20;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 3px;
                    transition: all 0.2s ease;
                    font-size: 12px;
                }
                
                .ace_gutter-cell .ai-lightbulb:hover {
                    background: rgba(117, 247, 77, 0.2);
                    transform: translateY(-50%) scale(1.1);
                }
                
                .ace_gutter-cell .ai-lightbulb.suggestion {
                    color: #75f74d;
                }
                
                .ace_gutter-cell .ai-lightbulb.error {
                    color: #f56565;
                }
                
                .ace_gutter-cell .ai-lightbulb.warning {
                    color: #ffd43b;
                }

                .ai-popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    z-index: 1000;
                    pointer-events: auto;
                }
                
                .ai-suggestion-popup {
                    position: absolute;
                    background: var(--card-bg, #2d2d2d);
                    border: 1px solid var(--border-color, #444);
                    border-radius: 6px;
                    padding: 0;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
                    z-index: 1001;
                    min-width: 300px;
                    max-width: 450px;
                    font-family: 'Segoe UI', sans-serif;
                    overflow: hidden;
                }

                .ai-popup-header {
                    background: var(--accent-blue, #75f74d);
                    color: #000;
                    padding: 8px 12px;
                    font-weight: 600;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .ai-popup-content {
                    padding: 12px;
                    color: var(--text-primary, #e0e0e0);
                    font-size: 13px;
                    line-height: 1.4;
                }

                .ai-popup-message {
                    margin-bottom: 12px;
                }

                .ai-popup-actions {
                    display: flex;
                    gap: 8px;
                    margin-top: 12px;
                }

                .ai-popup-btn {
                    padding: 6px 12px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }

                .ai-popup-btn.primary {
                    background: var(--accent-blue, #75f74d);
                    color: #000;
                }

                .ai-popup-btn.primary:hover {
                    background: var(--accent-green, #5fd13a);
                }

                .ai-popup-btn.secondary {
                    background: transparent;
                    color: var(--text-secondary, #aaa);
                    border: 1px solid var(--border-color, #444);
                }

                .ai-popup-btn.secondary:hover {
                    background: var(--bg-dark, #444);
                    color: var(--text-primary, #e0e0e0);
                }

                .ace_line.ace_ai_highlight_error {
                    background-color: rgba(245, 101, 101, 0.1) !important;
                    border-left: 3px solid #f56565;
                }
                
                .ace_line.ace_ai_highlight_warning {
                    background-color: rgba(255, 212, 59, 0.1) !important;
                    border-left: 3px solid #ffd43b;
                }
                
                .ace_line.ace_ai_highlight_suggestion {
                    background-color: rgba(117, 247, 77, 0.1) !important;
                    border-left: 3px solid #75f74d;
                }

                .ai-status-indicator.success-state {
                    background: linear-gradient(135deg, #75f74d 0%, #2b8a3e 100%);
                    border-color: #75f74d;
                }
                
                .ai-status-indicator.success-state .ai-status-icon {
                    animation: celebrateSuccess 2s ease-in-out;
                }
                
                @keyframes celebrateSuccess {
                    0%, 100% { transform: scale(1); }
                    25% { transform: scale(1.2) rotate(10deg); }
                    50% { transform: scale(1.1) rotate(-10deg); }
                    75% { transform: scale(1.2) rotate(5deg); }
                }
                
                .ai-status-indicator.success-state .ai-status-text {
                    color: #000 !important;
                    font-weight: 600;
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    setupEventListeners() {
        const toggleBtn = document.getElementById('ai-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.toggleAssistance();
            });
        }

        if (this.codeEditor) {
            this.codeEditor.on('change', () => {
                if (!this.isEnabled) {
                    this.reEnableAfterModification();
                }
                
                clearTimeout(this.realTimeTimer);
                this.realTimeTimer = setTimeout(() => {
                    this.performRealTimeAnalysis();
                }, 500);
            });

            this.codeEditor.on('change', () => {
                this.debouncedAnalyzeCode();
            });

            this.codeEditor.on('changeCursor', () => {
                this.showContextualHelp();
            });

            this.codeEditor.on('changeSelection', () => {
                this.handleSelectionChange();
            });
        }
    }

    debouncedAnalyzeCode() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.analyzeCode();
        }, 1500);
    }

    async analyzeCode() {
        if (!this.isEnabled) return;

        const code = this.codeEditor.getValue();
        
        if (code === this.lastAnalyzedCode || code.trim().length < 5) {
            return;
        }

        this.lastAnalyzedCode = code;
        this.showThinking();

        try {
            const response = await fetch('/api/ai/analyze-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: code,
                    language: this.language,
                    problem: this.currentProblem,
                    currentLine: this.codeEditor.getCursorPosition()?.row
                })
            });

            const data = await response.json();
            
            if (data.success) {
                this.displayAnalysis(data.analysis);
            } else {
                this.showError('Analysis failed: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            this.showError('Could not connect to service');
        }
    }

    displayAnalysis(analysis) {
        this.displaySuggestions(analysis.suggestions || []);
        this.displayErrors(analysis.errors || []);
        this.displayWarnings(analysis.warnings || []);
        
        this.toggleSection('suggestions-section', analysis.suggestions?.length > 0);
        this.toggleSection('errors-section', analysis.errors?.length > 0);
        this.toggleSection('warnings-section', analysis.warnings?.length > 0);
    }

    displaySuggestions(suggestions) {
        const container = document.getElementById('ai-suggestions');
        if (!container) return;

        if (suggestions.length === 0) {
            container.innerHTML = '<div class="loading-message">No suggestions at the moment</div>';
            return;
        }

        container.innerHTML = suggestions.map(suggestion => `
            <div class="suggestion-item" onclick="window.currentAIAssistance?.goToLine(${suggestion.line})">
                <span class="item-line">Line ${suggestion.line + 1}</span>
                <div class="item-message">${suggestion.message}</div>
                ${suggestion.fix ? `<div class="item-fix">✨ ${suggestion.fix}</div>` : ''}
            </div>
        `).join('');
    }

    displayErrors(errors) {
        const container = document.getElementById('ai-errors');
        if (!container) return;

        container.innerHTML = errors.map(error => `
            <div class="error-item" onclick="window.currentAIAssistance?.goToLine(${error.line})">
                <span class="item-line">Line ${error.line + 1}</span>
                <div class="item-message">${error.message}</div>
                ${error.fix ? `<div class="item-fix">🔧 ${error.fix}</div>` : ''}
            </div>
        `).join('');
    }

    displayWarnings(warnings) {
        const container = document.getElementById('ai-warnings');
        if (!container) return;

        container.innerHTML = warnings.map(warning => `
            <div class="warning-item" onclick="window.currentAIAssistance?.goToLine(${warning.line})">
                <span class="item-line">Line ${warning.line + 1}</span>
                <div class="item-message">${warning.message}</div>
                ${warning.fix ? `<div class="item-fix">✨ ${warning.fix}</div>` : ''}
            </div>
        `).join('');
    }

    async loadLanguageTips() {
        try {
            const response = await fetch(`/api/ai/language-tips/${this.language}`);
            const data = await response.json();
            
            if (data.success) {
                this.displayLanguageTips(data.tips);
            }
        } catch (error) {
        }
    }

    displayLanguageTips(tips) {
        const container = document.getElementById('language-tips');
        if (!container) return;

        container.innerHTML = tips.map(tip => `
            <div class="tip-item">
                <div class="item-message">${tip}</div>
            </div>
        `).join('');
    }

    showThinking() {
        const statusText = document.querySelector('.ai-status-text');
        if (statusText) {
            statusText.textContent = 'Assistant Analyzing...';
            setTimeout(() => {
                statusText.textContent = 'Assistant Active';
            }, 3000);
        }
    }

    showError(message) {
        const statusText = document.querySelector('.ai-status-text');
        if (statusText) {
            statusText.textContent = 'Assistant Error';
            setTimeout(() => {
                statusText.textContent = 'Assistant Active';
            }, 5000);
        }
    }
    
    showAuthenticationRequired() {
        const statusText = document.querySelector('.ai-status-text');
        if (statusText) {
            statusText.textContent = 'Assistant - Authentication Required';
            statusText.style.color = '#ffd43b';
        }
    }
    
    showNetworkError() {
        const statusText = document.querySelector('.ai-status-text');
        if (statusText) {
            statusText.textContent = 'Assistant - Network Error';
            statusText.style.color = '#f56565';
        }
    }

    toggleSection(sectionId, show) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = show ? 'block' : 'none';
        }
    }

    toggleAssistance() {
        this.isEnabled = !this.isEnabled;
        const indicator = document.getElementById('ai-status-indicator');
        const toggleBtn = document.getElementById('ai-toggle');
        
        if (indicator) {
            indicator.classList.toggle('disabled', !this.isEnabled);
        }
        
        if (toggleBtn) {
            toggleBtn.querySelector('.toggle-icon').textContent = this.isEnabled ? '👁️' : '🙈';
            toggleBtn.title = this.isEnabled ? 'Disable Assistant' : 'Enable Assistant';
        }

        if (!this.isEnabled) {
            this.clearLineDecorations();
        }
    }

    setupLineDecorations() {
        if (this.codeEditor && this.codeEditor.renderer) {
            this.setupGutterClickHandling();
        }
    }

    setupGutterClickHandling() {
        if (!this.codeEditor || !this.codeEditor.renderer) {
            return;
        }
        
        const renderer = this.codeEditor.renderer;
        const gutterElement = renderer.$gutterLayer.element;
        
        if (this.gutterClickListener) {
            gutterElement.removeEventListener('click', this.gutterClickListener);
        }
        
        this.gutterClickListener = (e) => {
            if (e.target.classList.contains('ai-lightbulb')) {
                return;
            }
            
            const rect = gutterElement.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const lineHeight = this.codeEditor.renderer.lineHeight;
            const lineNumber = Math.floor(y / lineHeight);
            
            const suggestion = this.findSuggestionForLine(lineNumber);
            if (suggestion) {
                this.showVSCodePopup(e, suggestion, lineNumber);
            }
        };
        
        gutterElement.addEventListener('click', this.gutterClickListener);
    }

    findSuggestionForLine(lineNumber) {
        return this.lineDecorations.find(decoration => decoration.lineNumber === lineNumber);
    }

    async performRealTimeAnalysis() {
        if (!this.isEnabled) {
            return;
        }
        
        const code = this.codeEditor.getValue();
        const currentLine = this.codeEditor.getCursorPosition().row;
        const currentLineText = this.codeEditor.session.getLine(currentLine);
        
        if (!currentLineText.trim() || currentLineText.trim().length < 3) {
            return;
        }
        
        if (this.isSimpleCompleteSolution(code)) {
            return;
        }
        
        const detectedLanguage = window.detectLanguageFromCode ? window.detectLanguageFromCode(code) : this.language;
        if (detectedLanguage !== this.language) {
            this.language = detectedLanguage;
            
            const langSelector = document.getElementById('language-selector');
            if (langSelector && langSelector.value !== detectedLanguage) {
                langSelector.value = detectedLanguage;
                
                if (window.changeLang) {
                    window.changeLang(langSelector);
                }
            }
        }
        
        try {
            const requestData = {
                code: code,
                currentLine: currentLine,
                currentLineText: currentLineText,
                language: this.language,
                problem: this.currentProblem
            };
            
            const response = await fetch('/api/ai/real-time-analysis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    this.showAuthenticationRequired();
                }
                return;
            }

            const data = await response.json();
            
            if (data.success) {
                this.updateLineDecorations(data.analysis);
            }
        } catch (error) {
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                this.showNetworkError();
            }
        }
    }

    isSimpleCompleteSolution(code) {
        const lines = code.split('\n').filter(line => line.trim().length > 0);
        
        if (lines.length <= 5) {
            const hasOutput = /console\.log|print|cout|System\.out/.test(code);
            const hasBasicLogic = /if|for|while|function|def|class/.test(code);
            
            if (hasOutput && !hasBasicLogic) {
                return true;
            }
        }
        
        return false;
    }

    updateLineDecorations(analysis) {
        this.clearLineDecorations();
        
        if (analysis.lineAnalysis && analysis.lineAnalysis.length > 0) {
            analysis.lineAnalysis.forEach(item => {
                this.addLineDecoration(item.line, item.type, item.message, item.fix);
            });
        }
    }

    addLineDecoration(lineNumber, type, message, fix) {
        const Range = ace.require('ace/range').Range;
        
        const range = new Range(lineNumber, 0, lineNumber, 1);
        const markerId = this.codeEditor.session.addMarker(range, `ace_ai_highlight_${type}`, "fullLine");
        
        this.addLightbulbToGutter(lineNumber, type, message, fix);
        
        this.lineDecorations.push({
            markerId: markerId,
            lineNumber: lineNumber,
            type: type,
            message: message,
            fix: fix
        });
    }

    addLightbulbToGutter(lineNumber, type, message, fix) {
        try {
            const gutterLayer = this.codeEditor.renderer.$gutterLayer;
            if (!gutterLayer || !gutterLayer.element) {
                this.addAlternativeLightbulb(lineNumber, type, message, fix);
                return;
            }

            const gutterCells = gutterLayer.element.querySelectorAll('.ace_gutter-cell');
            if (lineNumber < gutterCells.length) {
                const targetCell = gutterCells[lineNumber];
                
                if (targetCell.querySelector('.ai-lightbulb')) {
                    return;
                }
                
                const lightbulb = document.createElement('span');
                lightbulb.className = `ai-lightbulb ${type}`;
                lightbulb.textContent = '💡';
                
                if (type === 'error') lightbulb.textContent = '🔴';
                if (type === 'warning') lightbulb.textContent = '🟡';
                
                lightbulb.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showVSCodePopup(e, { type, message, fix }, lineNumber);
                });
                
                targetCell.classList.add('has-ai-suggestion');
                targetCell.appendChild(lightbulb);
            }
        } catch (error) {
            this.addAlternativeLightbulb(lineNumber, type, message, fix);
        }
    }

    addAlternativeLightbulb(lineNumber, type, message, fix) {
        try {
            const session = this.codeEditor.session;
            
            const existingAnnotations = session.getAnnotations() || [];
            const filteredAnnotations = existingAnnotations.filter(ann => ann.row !== lineNumber || !ann.className?.includes('ai-lightbulb'));
            
            const annotation = {
                row: lineNumber,
                column: 0,
                text: message,
                type: type,
                className: `ai-lightbulb-annotation ${type}`,
                raw: fix
            };
            
            session.setAnnotations([...filteredAnnotations, annotation]);
            
            this.addAlternativeLightbulbStyles();
            
            this.setupAnnotationClickHandler(lineNumber, type, message, fix);
        } catch (error) {
            this.setupLineClickFallback(lineNumber, type, message, fix);
        }
    }

    addAlternativeLightbulbStyles() {
        if (document.getElementById('ai-lightbulb-annotations')) return;
        
        const styles = `
            <style id="ai-lightbulb-annotations">
                .ace_gutter .ace_annotation.ai-lightbulb-annotation {
                    background: none !important;
                    position: relative;
                }
                
                .ace_gutter .ace_annotation.ai-lightbulb-annotation::before {
                    content: "💡";
                    position: absolute;
                    right: 2px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 12px;
                    cursor: pointer;
                    z-index: 10;
                    opacity: 0.8;
                    transition: opacity 0.3s ease;
                }
                
                .ace_gutter .ace_annotation.ai-lightbulb-annotation.error::before {
                    content: "🔴";
                }
                
                .ace_gutter .ace_annotation.ai-lightbulb-annotation.warning::before {
                    content: "🟡";
                }
                
                .ace_gutter .ace_annotation.ai-lightbulb-annotation::before:hover {
                    opacity: 1;
                    transform: translateY(-50%) scale(1.2);
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    setupAnnotationClickHandler(lineNumber, type, message, fix) {
        const gutterElement = this.codeEditor.renderer.$gutterLayer.element;
        
        const annotationClickHandler = (e) => {
            const rect = gutterElement.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const lineHeight = this.codeEditor.renderer.lineHeight;
            const clickedLine = Math.floor(y / lineHeight);
            
            if (clickedLine === lineNumber || Math.abs(clickedLine - lineNumber) <= 1) {
                this.showVSCodePopup(e, { type, message, fix }, lineNumber);
            }
        };
        
        this.annotationClickHandlers = this.annotationClickHandlers || [];
        this.annotationClickHandlers.push({ handler: annotationClickHandler, element: gutterElement });
        
        gutterElement.addEventListener('click', annotationClickHandler);
    }

    setupLineClickFallback(lineNumber, type, message, fix) {
        const fallbackHandler = (e) => {
            const position = this.codeEditor.renderer.screenToTextCoordinates(e.clientX, e.clientY);
            if (position.row === lineNumber) {
                this.showVSCodePopup(e, { type, message, fix }, lineNumber);
            }
        };
        
        this.fallbackClickHandlers = this.fallbackClickHandlers || [];
        this.fallbackClickHandlers.push(fallbackHandler);
        
        try {
            this.codeEditor.on('click', fallbackHandler);
        } catch (error) {
            // Silent fail
        }
    }

    async analyzeTestCaseFailure(testResults) {
        this.testCaseResults = testResults;
        
        try {
            const response = await fetch('/api/ai/analyze-test-failure', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: this.codeEditor.getValue(),
                    language: this.language,
                    problem: this.currentProblem,
                    testResults: testResults
                })
            });

            const data = await response.json();
            
            if (data.success) {
                this.displayTestFailureAnalysis(data.analysis);
            }
        } catch (error) {
        }
    }

    displayTestFailureAnalysis(analysis) {
        const existingSection = document.getElementById('test-failure-section');
        if (existingSection) {
            existingSection.remove();
        }
        
        const testFailureSection = document.createElement('div');
        testFailureSection.id = 'test-failure-section';
        testFailureSection.className = 'ai-section test-failure-analysis';
        testFailureSection.innerHTML = `
            <h4>🧪 Test Case Analysis</h4>
            <div class="test-failure-content">
                ${analysis.failedTests?.map(test => `
                    <div class="test-failure-item">
                        <div class="test-name">❌ ${test.name}</div>
                        <div class="test-expected">Expected: <code>${test.expected}</code></div>
                        <div class="test-actual">Got: <code>${test.actual}</code></div>
                        <div class="test-issue">💡 ${test.issue}</div>
                        <div class="test-suggestion">💡 ${test.suggestion}</div>
                        ${test.codeChange ? `
                            <button class="ai-quick-fix-btn" onclick="window.currentAIAssistance.applyTestFix('${test.codeChange.replace(/'/g, "\\'")}')">
                                Apply Suggested Fix
                            </button>
                        ` : ''}
                    </div>
                `).join('') || '<div class="loading-message">No specific test failures detected</div>'}
            </div>
        `;
        
        const aiContent = document.getElementById('ai-content');
        if (aiContent) {
            aiContent.insertBefore(testFailureSection, aiContent.firstChild);
        }
    }

    applyTestFix(codeChange) {
        if (this.codeEditor && codeChange) {
            this.codeEditor.setValue(codeChange);
            this.codeEditor.gotoLine(1, 0, true);
        }
    }

    applySuggestion(suggestion) {
        if (suggestion.line !== undefined) {
            this.goToLine(suggestion.line);
        }
        
        if (suggestion.code) {
            const currentLine = this.codeEditor.getCursorPosition().row;
            const lineText = this.codeEditor.session.getLine(currentLine);
            this.codeEditor.session.replace({
                start: { row: currentLine, column: 0 },
                end: { row: currentLine, column: lineText.length }
            }, suggestion.code);
        }
    }

    goToLine(lineNumber) {
        if (this.codeEditor && lineNumber !== undefined) {
            this.codeEditor.gotoLine(lineNumber + 1, 0, true);
            this.codeEditor.focus();
        }
    }

    handleCursorChange() {
    }

    handleSelectionChange() {
    }

    setProblem(problem) {
        this.currentProblem = problem;
        this.analyzeCode();
    }

    setLanguage(language) {
        this.language = language;
        this.loadLanguageTips();
        this.analyzeCode();
    }

    showContextualHelp() {
    }

    showVSCodePopup(event, suggestion, lineNumber) {
        this.removeExistingPopups();
        
        const overlay = document.createElement('div');
        overlay.className = 'ai-popup-overlay';
        
        const popup = document.createElement('div');
        popup.className = 'ai-suggestion-popup';
        
        const typeIcon = suggestion.type === 'error' ? '🔴' : 
                        suggestion.type === 'warning' ? '⚠️' : '💡';
        
        popup.innerHTML = `
            <div class="ai-popup-header">
                ${typeIcon} ${suggestion.type.charAt(0).toUpperCase() + suggestion.type.slice(1)}
            </div>
            <div class="ai-popup-content">
                <div class="ai-popup-message">${suggestion.message}</div>
                ${suggestion.fix ? `<div class="ai-popup-fix"><strong>Suggestion:</strong> ${suggestion.fix}</div>` : ''}
                <div class="ai-popup-actions">
                    ${suggestion.fix ? `<button class="ai-popup-btn primary" onclick="window.currentAIAssistance.applySuggestion({line: ${lineNumber}, code: '${suggestion.fix?.replace(/'/g, "\\'")}'}); this.closest('.ai-popup-overlay').remove();">Apply Fix</button>` : ''}
                    <button class="ai-popup-btn secondary" onclick="this.closest('.ai-popup-overlay').remove();">Close</button>
                </div>
            </div>
        `;
        
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        
        const rect = this.codeEditor.renderer.$gutterLayer.element.getBoundingClientRect();
        popup.style.left = `${rect.right + 10}px`;
        popup.style.top = `${event.clientY - 50}px`;
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }

    removeExistingPopups() {
        const existingPopups = document.querySelectorAll('.ai-popup-overlay');
        existingPopups.forEach(popup => popup.remove());
    }

    disableForSuccess() {
        this.isEnabled = false;
        const indicator = document.getElementById('ai-status-indicator');
        const statusText = document.querySelector('.ai-status-text');
        
        if (indicator) {
            indicator.classList.add('success-state');
        }
        
        if (statusText) {
            statusText.textContent = 'Problem Solved! 🎉';
        }
        
        this.clearLineDecorations();
        this.addSuccessStateStyles();
    }
    
    addSuccessStateStyles() {
        const existingStyles = document.getElementById('ai-assistance-styles');
        if (existingStyles) {
            const successStyles = `
                .ai-status-indicator.success-state {
                    background: linear-gradient(135deg, #75f74d 0%, #2b8a3e 100%);
                    border-color: #75f74d;
                }
                
                .ai-status-indicator.success-state .ai-status-icon {
                    animation: celebrateSuccess 2s ease-in-out;
                }
                
                @keyframes celebrateSuccess {
                    0%, 100% { transform: scale(1); }
                    25% { transform: scale(1.2) rotate(10deg); }
                    50% { transform: scale(1.1) rotate(-10deg); }
                    75% { transform: scale(1.2) rotate(5deg); }
                }
                
                .ai-status-indicator.success-state .ai-status-text {
                    color: #000 !important;
                    font-weight: 600;
                }
            `;
            
            existingStyles.insertAdjacentHTML('beforeend', successStyles);
        }
    }
    
    reEnableAfterModification() {
        if (!this.isEnabled) {
            this.isEnabled = true;
            const indicator = document.getElementById('ai-status-indicator');
            const statusText = document.querySelector('.ai-status-text');
            const toggleBtn = document.getElementById('ai-toggle');
            
            if (indicator) {
                indicator.classList.remove('success-state', 'disabled');
            }
            
            if (statusText) {
                statusText.textContent = 'Assistant Active';
                statusText.style.color = '';
            }
            
            if (toggleBtn) {
                toggleBtn.querySelector('.toggle-icon').textContent = '👁️';
                toggleBtn.title = 'Disable Assistant';
            }
        }
    }

    clearLineDecorations() {
        this.lineDecorations.forEach(decoration => {
            if (decoration.markerId) {
                this.codeEditor.session.removeMarker(decoration.markerId);
            }
        });
        
        try {
            const gutterLayer = this.codeEditor.renderer.$gutterLayer;
            if (gutterLayer && gutterLayer.element) {
                const gutterCells = gutterLayer.element.querySelectorAll('.ace_gutter-cell');
                gutterCells.forEach(cell => {
                    const lightbulbs = cell.querySelectorAll('.ai-lightbulb');
                    lightbulbs.forEach(lightbulb => lightbulb.remove());
                    cell.classList.remove('has-ai-suggestion');
                });
            }
        } catch (error) {
        }
        
        try {
            const session = this.codeEditor.session;
            const existingAnnotations = session.getAnnotations() || [];
            const filteredAnnotations = existingAnnotations.filter(ann => 
                !ann.className?.includes('ai-lightbulb-annotation')
            );
            session.setAnnotations(filteredAnnotations);
        } catch (error) {
        }
        
        if (this.annotationClickHandlers) {
            this.annotationClickHandlers.forEach(({ handler, element }) => {
                element.removeEventListener('click', handler);
            });
            this.annotationClickHandlers = [];
        }
        
        if (this.fallbackClickHandlers) {
            this.fallbackClickHandlers.forEach(handler => {
                if (typeof handler === 'function') {
                    try {
                        this.codeEditor.off('click', handler);
                    } catch (e) {
                    }
                }
            });
            this.fallbackClickHandlers = [];
        }
        
        this.removeExistingPopups();
        this.lineDecorations = [];
    }

    destroy() {
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }

        if (this.realTimeTimer) {
            clearTimeout(this.realTimeTimer);
        }

        if (this.codeEditor) {
            this.codeEditor.off('change');
            this.codeEditor.off('changeCursor');
            this.codeEditor.off('changeSelection');
        }

        if (this.gutterClickListener && this.codeEditor.renderer) {
            const gutterElement = this.codeEditor.renderer.$gutterLayer.element;
            gutterElement.removeEventListener('click', this.gutterClickListener);
        }

        this.clearLineDecorations();
        this.removeExistingPopups();

        const indicator = document.getElementById('ai-status-indicator');
        if (indicator) {
            indicator.remove();
        }

        const styles = document.getElementById('ai-assistance-styles');
        if (styles) {
            styles.remove();
        }

        this.codeEditor = null;
        this.currentProblem = null;
        this.currentSuggestions = [];
        this.isEnabled = false;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AIAssistanceManager };
}
