import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Card from '../components/Card';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const IntermediateProblems = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const topics = [
    'Dynamic Programming', 'Graph Algorithms', 'Tree Traversal', 
    'Binary Search', 'Backtracking', 'Greedy Algorithms', 
    'String Manipulation', 'Sorting & Searching'
  ];

  useEffect(() => {
    fetchProblems();
  }, [selectedTopics]);

  const fetchProblems = async () => {
    try {
      setLoading(true);
      let url = `${process.env.REACT_APP_API_URL}/api/problems?difficulty=medium`;
      if (selectedTopics.length > 0) {
        url += `&topics=${selectedTopics.join(',')}`;
      }
      
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

  const toggleTopic = (topic) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
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
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-yellow-600 text-white md:hidden"
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
            <h1 className="text-xl font-bold text-yellow-500">🟡 Intermediate Arena</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button className="text-yellow-400 font-medium">Challenges</button>
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
        } md:translate-x-0 md:static md:h-auto`}>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Filter by Topics</h3>
            <div className="space-y-2">
              {topics.map(topic => (
                <label key={topic} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTopics.includes(topic)}
                    onChange={() => toggleTopic(topic)}
                    className="rounded border-gray-600 bg-gray-700 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="text-sm text-gray-300">{topic}</span>
                </label>
              ))}
            </div>
            
            {selectedTopics.length > 0 && (
              <Button
                onClick={() => setSelectedTopics([])}
                variant="outline"
                className="w-full mt-4 border-gray-600 text-gray-400 hover:bg-gray-700"
              >
                Clear Filters
              </Button>
            )}
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
            <h2 className="text-3xl font-bold mb-4">🟡 Intermediate Problems</h2>
            <p className="text-gray-400 mb-4">
              Ready to level up? These problems will challenge your algorithmic thinking and help you master core computer science concepts.
            </p>
            
            {selectedTopics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-400">Filtering by:</span>
                {selectedTopics.map(topic => (
                  <span key={topic} className="px-2 py-1 bg-yellow-600 text-white rounded text-xs">
                    {topic}
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
                  {selectedTopics.length > 0 
                    ? 'No problems found for the selected topics. Try adjusting your filters.' 
                    : 'Check back later for new challenges!'
                  }
                </p>
              </Card>
            ) : (
              problems.map((problem, index) => (
                <Card 
                  key={problem.id || index} 
                  className="p-6 bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer"
                  onClick={() => handleProblemClick(problem.id)}
                >
                  <div className="flex items-start justify-between">
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
                      
                      <p className="text-gray-300 mb-4 line-clamp-2">{problem.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span>🧠 {problem.concepts?.join(', ') || 'Algorithm Design'}</span>
                        <span>⏱️ {problem.timeLimit || '2 seconds'}</span>
                        <span>📝 {problem.submissions || 0} submissions</span>
                        <span>✅ {problem.acceptanceRate || 0}% acceptance</span>
                      </div>
                      
                      {problem.prerequisites && (
                        <div className="mb-3">
                          <span className="text-sm text-yellow-400">Prerequisites: </span>
                          <span className="text-sm text-gray-400">{problem.prerequisites.join(', ')}</span>
                        </div>
                      )}
                      
                      {problem.tags && (
                        <div className="flex flex-wrap gap-2">
                          {problem.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-4 flex flex-col space-y-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProblemClick(problem.id);
                        }}
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        {problem.completed ? 'Review' : 'Solve'}
                      </Button>
                      
                      {problem.hasEditorial && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Navigate to editorial
                          }}
                          variant="outline"
                          className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white text-xs"
                        >
                          Editorial
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {problem.difficulty === 'medium' && (
                    <div className="mt-4 p-3 bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded">
                      <p className="text-yellow-300 text-sm">
                        💡 <strong>Tip:</strong> This problem requires understanding of {problem.primaryConcept || 'algorithmic patterns'}. 
                        Consider reviewing the fundamentals before attempting.
                      </p>
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>

          {/* Load More Button */}
          {problems.length > 0 && (
            <div className="text-center mt-8">
              <Button
                onClick={fetchProblems}
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white"
              >
                Load More Problems
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

export default IntermediateProblems;
