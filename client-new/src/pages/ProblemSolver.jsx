import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const ProblemSolver = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentProblem, setCurrentProblem] = useState({
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9'
    ]
  });

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'c', label: 'C' }
  ];

  const defaultCode = {
    javascript: `function twoSum(nums, target) {
    // Your code here
    
}`,
    python: `def two_sum(nums, target):
    # Your code here
    pass`,
    java: `public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        
    }
}`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your code here
        
    }
};`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Your code here
    
}`
  };

  useEffect(() => {
    setCode(defaultCode[selectedLanguage] || '');
  }, [selectedLanguage]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running...');
    
    try {
      // Simulate API call to run code
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock output based on language
      const mockOutput = {
        javascript: 'Output: [0, 1]\nExecution time: 68ms\nMemory usage: 42.1 MB',
        python: 'Output: [0, 1]\nExecution time: 72ms\nMemory usage: 14.8 MB',
        java: 'Output: [0, 1]\nExecution time: 1ms\nMemory usage: 44.3 MB',
        cpp: 'Output: [0, 1]\nExecution time: 0ms\nMemory usage: 11.9 MB',
        c: 'Output: [0, 1]\nExecution time: 0ms\nMemory usage: 6.4 MB'
      };
      
      setOutput(mockOutput[selectedLanguage] || 'Code executed successfully');
    } catch (error) {
      setOutput('Error: ' + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  const submitCode = async () => {
    setIsRunning(true);
    setOutput('Submitting...');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setOutput('✅ Accepted\n\nRuntime: 64ms (Beats 85.23% of submissions)\nMemory: 42.1 MB (Beats 78.95% of submissions)\n\nTest cases passed: 57/57');
    } catch (error) {
      setOutput('Submission failed: ' + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-2xl font-bold text-blue-400">
              CodiGo
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/dashboard" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/dashboard#practice" className="hover:text-blue-400 transition-colors">
                Challenges
              </Link>
              <Link to="/leaderboard" className="hover:text-blue-400 transition-colors">
                Leaderboard
              </Link>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 p-6">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-700"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <ul className="space-y-4 mt-8">
              <li><Link to="/dashboard" className="block hover:text-blue-400">Home</Link></li>
              <li><Link to="/dashboard#practice" className="block hover:text-blue-400">Challenges</Link></li>
              <li><Link to="/leaderboard" className="block hover:text-blue-400">Leaderboard</Link></li>
            </ul>
          </div>
        </div>
      )}

      <main className="container mx-auto px-6 py-6">
        {/* Back Button */}
        <Link
          to="/dashboard#practice"
          className="inline-flex items-center mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Challenges
        </Link>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Problem Panel */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h1 className="text-2xl font-bold mb-2">{currentProblem.title}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span className="px-2 py-1 bg-green-600 text-white rounded">Easy</span>
                <span className="text-gray-400">Acceptance Rate: 49.8%</span>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto h-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{currentProblem.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Examples</h3>
                  {currentProblem.examples.map((example, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg mb-4">
                      <div className="font-semibold mb-2">Example {index + 1}:</div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Input:</strong> {example.input}</div>
                        <div><strong>Output:</strong> {example.output}</div>
                        {example.explanation && (
                          <div><strong>Explanation:</strong> {example.explanation}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Constraints</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {currentProblem.constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Editor Panel */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden flex flex-col">
            {/* Editor Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Solution</h3>
              <select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Code Editor */}
            <div className="flex-1">
              <Editor
                height="100%"
                language={selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage}
                theme="vs-dark"
                value={code}
                onChange={setCode}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  automaticLayout: true
                }}
              />
            </div>

            {/* Input Section */}
            <div className="border-t border-gray-700">
              <div className="p-4">
                <label className="block text-sm font-medium mb-2">Custom Input (optional)</label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter test input..."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  rows="2"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 p-4 border-t border-gray-700">
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {isRunning ? 'Running...' : 'Run Code'}
                </button>
                
                <button
                  onClick={submitCode}
                  disabled={isRunning}
                  className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  {isRunning ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="mt-6 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h4 className="text-lg font-semibold">Output</h4>
          </div>
          <div className="p-4">
            <pre className="text-sm font-mono whitespace-pre-wrap text-gray-300 min-h-[120px] max-h-[300px] overflow-y-auto">
              {output || 'Click "Run Code" to see the output here...'}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProblemSolver;
