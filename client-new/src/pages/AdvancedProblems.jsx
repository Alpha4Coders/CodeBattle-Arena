import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Card from '../components/Card';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const AdvancedProblems = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('difficulty');

  const categories = [
    'Advanced Algorithms', 'System Design', 'Competitive Programming', 
    'Machine Learning', 'Distributed Systems', 'Cryptography', 
    'Game Theory', 'Advanced Data Structures', 'Optimization'
  ];

  const sortOptions = [
    { value: 'difficulty', label: 'Difficulty' },
    { value: 'acceptance', label: 'Acceptance Rate' },
    { value: 'submissions', label: 'Most Popular' },
    { value: 'recent', label: 'Recently Added' }
  ];

  useEffect(() => {
    fetchProblems();
  }, [selectedCategories, sortBy]);

  const fetchProblems = async () => {
    try {
      setLoading(true);
      let url = `${process.env.REACT_APP_API_URL}/api/problems?difficulty=hard`;
      if (selectedCategories.length > 0) {
        url += `&categories=${selectedCategories.join(',')}`;
      }
      url += `&sort=${sortBy}`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${await user?.getToken()}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setProblems(data.problems);
      } else {
        setError(data.error || 'Failed to fetch problems');
      }
    } catch (err) {
      setError('Failed to fetch problems');
      console.error('Error fetching problems:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleProblemClick = (problemId) => {
    navigate(`/problem/${problemId}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-green-500 bg-green-100 border-green-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'hard': return 'text-red-500 bg-red-100 border-red-200';
      default: return 'text-gray-500 bg-gray-100 border-gray-200';
    }
  };

  const getCompletionStatus = (problem) => {
    return problem.completed ? 'Solved ✓' : 'Not Solved';
  };

  const getPriorityLevel = (problem) => {
    if (problem.acceptanceRate < 20) return { level: 'Expert', color: 'text-red-400' };
    if (problem.acceptanceRate < 40) return { level: 'Advanced', color: 'text-orange-400' };
    return { level: 'Hard', color: 'text-red-300' };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Navigation Toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-red-600 text-white md:hidden"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-red-500">🔴 Advanced Arena</h1>
            <span className="px-2 py-1 bg-red-900 text-red-200 rounded text-xs font-medium">Expert Level</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button className="text-red-400 font-medium">Challenges</button>
            <button 
              onClick={() => navigate('/leaderboard')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Leaderboard
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 h-full w-64 bg-gray-800 z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:h-auto overflow-y-auto`}>
          <div className="p-6">
            {/* Sort Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-red-400">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-red-400">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded border-gray-600 bg-gray-700 text-red-500 focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
              
              {selectedCategories.length > 0 && (
                <Button
                  onClick={() => setSelectedCategories([])}
                  variant="outline"
                  className="w-full mt-4 border-gray-600 text-gray-400 hover:bg-gray-700"
                >
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Challenge Stats */}
            <div className="p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded">
              <h4 className="font-semibold text-red-300 mb-2">⚠️ Challenge Zone</h4>
              <p className="text-xs text-red-200">
                These problems are designed for expert-level programmers. 
                Average solving time: 2-4 hours.
              </p>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">🔴 Advanced Problems</h2>
            <p className="text-gray-400 mb-4">
              Elite-level challenges that will push your problem-solving skills to the limit. 
              These problems are commonly asked in top-tier tech interviews and competitive programming.
            </p>
            
            <div className="bg-orange-900 bg-opacity-50 border border-orange-600 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 text-orange-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Prerequisites Required</span>
              </div>
              <p className="text-orange-200 text-sm mt-1">
                Solid understanding of data structures, algorithms, and intermediate problem-solving patterns is essential.
              </p>
            </div>
            
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm text-gray-400">Filtering by:</span>
                {selectedCategories.map(category => (
                  <span key={category} className="px-2 py-1 bg-red-600 text-white rounded text-xs">
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg text-red-200">
              {error}
            </div>
          )}

          {/* Problems Grid */}
          <div className="grid gap-6">
            {problems.length === 0 && !loading ? (
              <Card className="p-8 text-center bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">No Problems Available</h3>
                <p className="text-gray-400">
                  {selectedCategories.length > 0 
                    ? 'No problems found for the selected categories. Try adjusting your filters.' 
                    : 'Check back later for new challenges!'
                  }
                </p>
              </Card>
            ) : (
              problems.map((problem, index) => {
                const priority = getPriorityLevel(problem);
                return (
                  <Card 
                    key={problem.id || index} 
                    className="p-6 bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 cursor-pointer relative"
                    onClick={() => handleProblemClick(problem.id)}
                  >
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${priority.color} bg-gray-900 border border-current`}>
                        {priority.level}
                      </span>
                    </div>

                    <div className="flex items-start justify-between pr-20">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                          <span className={`text-sm ${problem.completed ? 'text-green-400' : 'text-gray-500'}`}>
                            {getCompletionStatus(problem)}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">{problem.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
                          <div className="space-y-1">
                            <div>🧠 Complexity: {problem.timeComplexity || 'O(n log n)'}</div>
                            <div>💾 Space: {problem.spaceComplexity || 'O(n)'}</div>
                          </div>
                          <div className="space-y-1">
                            <div>⏱️ Time Limit: {problem.timeLimit || '3 seconds'}</div>
                            <div>✅ Success Rate: {problem.acceptanceRate || 0}%</div>
                          </div>
                        </div>
                        
                        {problem.companies && (
                          <div className="mb-3">
                            <span className="text-sm text-red-400">Asked by: </span>
                            <span className="text-sm text-gray-300">{problem.companies.join(', ')}</span>
                          </div>
                        )}
                        
                        {problem.prerequisites && (
                          <div className="mb-3">
                            <span className="text-sm text-red-400">Prerequisites: </span>
                            <span className="text-sm text-gray-400">{problem.prerequisites.join(', ')}</span>
                          </div>
                        )}
                        
                        {problem.tags && (
                          <div className="flex flex-wrap gap-2">
                            {problem.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex space-x-3">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProblemClick(problem.id);
                          }}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          {problem.completed ? 'Review Solution' : 'Accept Challenge'}
                        </Button>
                        
                        {problem.hasEditorial && (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              // Navigate to editorial
                            }}
                            variant="outline"
                            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                          >
                            Editorial
                          </Button>
                        )}
                        
                        {problem.hasDiscussion && (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              // Navigate to discussion
                            }}
                            variant="outline"
                            className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white"
                          >
                            Discuss
                          </Button>
                        )}
                      </div>
                      
                      <div className="text-right text-sm text-gray-500">
                        <div>💭 {problem.attempts || 0} attempts</div>
                        <div>⭐ {problem.rating || 0}/5 rating</div>
                      </div>
                    </div>
                    
                    {problem.difficulty === 'hard' && (
                      <div className="mt-4 p-3 bg-red-900 bg-opacity-30 border border-red-700 rounded">
                        <p className="text-red-300 text-sm">
                          🔥 <strong>Expert Challenge:</strong> This problem requires advanced knowledge of {problem.primaryConcept || 'algorithmic techniques'}. 
                          Consider attempting after mastering the prerequisites.
                        </p>
                      </div>
                    )}
                  </Card>
                );
              })
            )}
          </div>

          {/* Load More Button */}
          {problems.length > 0 && (
            <div className="text-center mt-8">
              <Button
                onClick={fetchProblems}
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
              >
                Load More Expert Challenges
              </Button>
            </div>
          )}

          {/* Back to Dashboard */}
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              ← Back to Dashboard
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdvancedProblems;
