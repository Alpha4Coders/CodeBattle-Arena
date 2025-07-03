import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Card from '../components/Card';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const EasyProblems = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/problems?difficulty=easy`, {
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-green-500 bg-green-100 border-green-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'hard': return 'text-red-500 bg-red-100 border-red-200';
      default: return 'text-gray-500 bg-gray-100 border-gray-200';
    }
  };

  const getCompletionStatus = (problem) => {
    // This would be based on user's completion data
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
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-green-600 text-white md:hidden"
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
            <h1 className="text-xl font-bold text-green-500">🟢 Beginner Arena</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button className="text-green-400 font-medium">Challenges</button>
            <button 
              onClick={() => navigate('/leaderboard')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Leaderboard
            </button>
          </div>
          <Button
            onClick={toggleSidebar}
            variant="outline"
            className="md:hidden"
          >
            ☰
          </Button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 z-50 transform transition-transform duration-300 md:hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-500 mb-6">Navigation</h2>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => { navigate('/home'); setIsSidebarOpen(false); }}
                    className="w-full text-left px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-lg bg-green-600 text-white">
                    Challenges
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { navigate('/leaderboard'); setIsSidebarOpen(false); }}
                    className="w-full text-left px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    Leaderboard
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">🟢 Beginner Problems</h2>
          <p className="text-gray-400">
            Perfect for getting started with coding challenges. Build your foundation with these carefully selected problems.
          </p>
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
              <p className="text-gray-400">Check back later for new challenges!</p>
            </Card>
          ) : (
            problems.map((problem, index) => (
              <Card 
                key={problem.id || index} 
                className="p-6 bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 cursor-pointer"
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
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>💡 {problem.hints || 3} hints available</span>
                      <span>👥 {problem.submissions || 0} submissions</span>
                      <span>✅ {problem.acceptanceRate || 0}% acceptance</span>
                    </div>
                    
                    {problem.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
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
                  
                  <div className="ml-4">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProblemClick(problem.id);
                      }}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {problem.completed ? 'Review' : 'Solve'}
                    </Button>
                  </div>
                </div>
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
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
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
  );
};

export default EasyProblems;
