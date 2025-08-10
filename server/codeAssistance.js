import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

class CodeAssistanceService {
    constructor() {
        this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        this.isEnabled = process.env.AI_ASSISTANCE_ENABLED === 'true';
    }

    async analyzeCodeLine(code, language, problem, currentLine = null) {
        if (!this.isEnabled) {
            return { suggestions: [], errors: [], warnings: [] };
        }

        try {
            const lines = code.split('\n');
            const currentLineCode = currentLine !== null ? lines[currentLine] : '';
            
            const prompt = `
You are a coding assistant for beginner programmers. Analyze the problem context before making suggestions.

PROBLEM CONTEXT:
Title: ${problem?.title || 'Unknown'}
Description: ${problem?.description || 'No description'}
Difficulty: ${problem?.difficulty || 'beginner'}

CURRENT CODE:
\`\`\`${language}
${code}
\`\`\`

${currentLine !== null ? `CURRENT LINE (${currentLine + 1}): ${currentLineCode}` : ''}

INSTRUCTIONS:
1. Understand what the problem is asking for
2. Check if the current code already solves the problem correctly
3. Only suggest improvements if there are actual errors, bugs, or significant improvements needed
4. For simple input/output problems, don't suggest adding prompts unless specifically required
5. Consider the problem requirements - if it just asks for output, don't suggest input prompts

Please provide a JSON response with:
1. "suggestions" - Array of NECESSARY improvements (only if code has real issues)
2. "errors" - Array of actual syntax or logic errors
3. "warnings" - Array of potential issues

JSON format:
{
  "suggestions": [
    {
      "line": <line_number>,
      "message": "<specific suggestion>",
      "fix": "<suggested fix>",
      "type": "suggestion"
    }
  ],
  "errors": [
    {
      "line": <line_number>,
      "message": "<error description>",
      "fix": "<how to fix>",
      "type": "error"
    }
  ],
  "warnings": [
    {
      "line": <line_number>,
      "message": "<warning description>",
      "fix": "<optional fix>",
      "type": "warning"
    }
  ]
}
`;

            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            try {
                const jsonMatch = text.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const analysis = JSON.parse(jsonMatch[0]);
                    return this.formatResponse(analysis);
                }
                return this.extractSuggestionsFromText(text, currentLine);
            } catch (parseError) {
                return this.extractSuggestionsFromText(text, currentLine);
            }
            
        } catch (error) {
            return {
                suggestions: [],
                errors: [],
                warnings: [],
                error: 'Service temporarily unavailable'
            };
        }
    }

    async getCodeCompletion(code, language, cursorLine, cursorColumn) {
        if (!this.isEnabled) {
            return [];
        }

        try {
            const lines = code.split('\n');
            const currentLine = lines[cursorLine] || '';
            const beforeCursor = currentLine.substring(0, cursorColumn);
            
            const prompt = `
Provide code completion suggestions for ${language} at the cursor position.

Current line: "${currentLine}"
Text before cursor: "${beforeCursor}"
Context:
\`\`\`${language}
${code}
\`\`\`

Return JSON array of completion suggestions:
[
  {
    "text": "<completion text>",
    "description": "<what this does>",
    "type": "<variable|function|keyword|etc>"
  }
]
`;

            const result = await this.model.generateContent(prompt);
            const responseText = result.response.text();
            
            const jsonMatch = responseText.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
            
            return [];
        } catch (error) {
            return [];
        }
    }

    async suggestFix(code, language, errorMessage) {
        if (!this.isEnabled) {
            return { suggestion: 'Fix suggestions unavailable' };
        }

        try {
            const prompt = `
Analyze this ${language} code with error and suggest a fix:

ERROR: ${errorMessage}

CODE:
\`\`\`${language}
${code}
\`\`\`

Provide a JSON response:
{
  "issue": "<what's wrong>",
  "suggestion": "<how to fix it>",
  "fixedCode": "<corrected code if possible>"
}
`;

            const result = await this.model.generateContent(prompt);
            const responseText = result.response.text();
            
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
            
            return { suggestion: 'Unable to analyze error' };
        } catch (error) {
            return { suggestion: 'Fix suggestion service unavailable' };
        }
    }

    async performRealTimeAnalysis(code, currentLine, currentLineText, language, problem) {
        if (!this.isEnabled) {
            return { lineAnalysis: [] };
        }

        try {
            const prompt = `
Provide real-time analysis for ${language} code.

PROBLEM STATEMENT: ${problem?.description || problem?.title || 'Coding Challenge'}
LANGUAGE: ${language}
CURRENT LINE ${currentLine + 1}: "${currentLineText}"

FULL CODE:
\`\`\`${language}
${code}
\`\`\`

Provide line-specific suggestions for improvement. Focus on REAL issues:
- Actual syntax errors
- Logic bugs that would cause wrong output
- Performance issues in complex code
- Security vulnerabilities
- Critical best practices violations

AVOID suggesting:
- Adding prompts when problem doesn't require them
- Cosmetic changes to working code
- Style preferences that don't affect functionality
- Unnecessary complexity for simple problems

Return JSON:
{
  "lineAnalysis": [
    {
      "line": <line_number>,
      "type": "error|warning|suggestion",
      "message": "<issue description>",
      "fix": "<suggested fix>"
    }
  ],
  "currentLineSuggestions": [
    {
      "type": "suggestion|completion",
      "message": "<suggestion for current line>",
      "code": "<suggested code completion>",
      "explanation": "<why this helps>"
    }
  ]
}

Only focus on REAL issues. Empty lineAnalysis is better than false suggestions.
`;

            const result = await this.model.generateContent(prompt);
            const responseText = result.response.text();
            
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const analysis = JSON.parse(jsonMatch[0]);
                return {
                    success: true,
                    analysis: analysis
                };
            }
            
            return {
                success: true,
                analysis: { lineAnalysis: [], currentLineSuggestions: [] }
            };
            
        } catch (error) {
            return {
                success: false,
                error: error.message,
                analysis: { lineAnalysis: [] }
            };
        }
    }

    async getContextualHelp(line, token, cursor, language, problem) {
        if (!this.isEnabled) {
            return { suggestions: [] };
        }

        try {
            const prompt = `
Provide contextual help for a ${language} programmer at cursor position.

CONTEXT:
- Current line: "${line}"
- Token at cursor: ${JSON.stringify(token)}
- Cursor position: row ${cursor.row}, column ${cursor.column}
- Problem: ${problem?.title || 'Coding Challenge'}

Provide helpful suggestions for what the user might want to do next.

Return JSON:
{
  "suggestions": [
    {
      "type": "completion|hint|method",
      "message": "<helpful suggestion>",
      "code": "<code completion if applicable>",
      "explanation": "<brief explanation>"
    }
  ]
}

Focus on:
- Code completion
- Method suggestions
- Variable suggestions
- Common patterns for this context
- Problem-specific hints (without giving away the solution)
`;

            const result = await this.model.generateContent(prompt);
            const responseText = result.response.text();
            
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const suggestions = JSON.parse(jsonMatch[0]);
                return {
                    success: true,
                    suggestions: suggestions.suggestions || []
                };
            }
            
            return { success: true, suggestions: [] };
            
        } catch (error) {
            return { success: false, error: error.message, suggestions: [] };
        }
    }

    async analyzeTestCaseFailure(code, language, problem, testResults) {
        if (!this.isEnabled) {
            return { failedTests: [] };
        }

        try {
            const prompt = `
Analyze why test cases are failing and provide specific fixes.

PROBLEM: ${problem?.title || 'Coding Challenge'}
DESCRIPTION: ${problem?.description || 'No description'}

USER'S CODE:
\`\`\`${language}
${code}
\`\`\`

FAILED TEST RESULTS:
${JSON.stringify(testResults, null, 2)}

Analyze why the tests are failing and provide specific, actionable fixes.

Return JSON:
{
  "analysis": "Brief explanation of what's going wrong",
  "failedTests": [
    {
      "name": "<test case name>",
      "expected": "<expected output>",
      "actual": "<actual output>",
      "issue": "<what's causing the failure>",
      "suggestion": "<how to fix it>",
      "codeChange": "<specific code change to make>",
      "line": <line number where fix should be applied>
    }
  ],
  "commonIssues": [
    "<list of common issues found>"
  ],
  "nextSteps": [
    "<step by step instructions to fix>"
  ]
}

Be specific about:
- Exact code changes needed
- Line numbers where changes should be made
- Logic errors vs syntax errors
- Edge cases not handled
- Off-by-one errors
- Input/output format issues
`;

            const result = await this.model.generateContent(prompt);
            const responseText = result.response.text();
            
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const analysis = JSON.parse(jsonMatch[0]);
                return {
                    success: true,
                    analysis: analysis
                };
            }
            
            return {
                success: false,
                error: 'Could not parse analysis',
                analysis: { failedTests: [] }
            };
            
        } catch (error) {
            return {
                success: false,
                error: error.message,
                analysis: { failedTests: [] }
            };
        }
    }

    formatResponse(response) {
        return {
            suggestions: response.suggestions || [],
            errors: response.errors || [],
            warnings: response.warnings || [],
            lineSpecific: response.lineSpecific || []
        };
    }

    extractSuggestionsFromText(text, currentLine) {
        const suggestions = [];
        const errors = [];
        const warnings = [];
        
        if (text.toLowerCase().includes('error') || text.toLowerCase().includes('syntax')) {
            errors.push({
                line: currentLine || 0,
                message: 'Review code for potential issues',
                type: 'error'
            });
        }
        
        if (text.toLowerCase().includes('suggest') || text.toLowerCase().includes('improve')) {
            suggestions.push({
                line: currentLine || 0,
                message: 'Code can be improved',
                type: 'suggestion'
            });
        }
        
        return { suggestions, errors, warnings };
    }

    getLanguageTips(language) {
        const tips = {
            javascript: [
                "Use 'let' or 'const' instead of 'var' for better scope control",
                "Remember to end statements with semicolons",
                "Use === instead of == for strict equality",
                "Don't forget to handle async operations with await or .then()"
            ],
            python: [
                "Use proper indentation (4 spaces) for code blocks",
                "Remember that Python is case-sensitive",
                "Use descriptive variable names",
                "Don't forget colons after if, for, while, and function definitions"
            ],
            'c++': [
                "Include necessary headers like #include <iostream>",
                "Don't forget to return 0 in main function",
                "Use proper variable types (int, string, etc.)",
                "Remember semicolons after statements"
            ],
            java: [
                "Every Java program needs a main method",
                "Class names should start with uppercase",
                "Don't forget semicolons after statements",
                "Use proper access modifiers (public, private)"
            ]
        };

        return tips[language] || [];
    }
}

export { CodeAssistanceService };
