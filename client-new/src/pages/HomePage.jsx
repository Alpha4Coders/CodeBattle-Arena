import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Card from '../components/Card';
import Button from '../components/Button';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [stats, setStats] = useState({
    currentRank: 1,
    contestCount: 0,
    streakCount: 0,
    totalProblems: 0,
    easyCount: 0,
    mediumCount: 0,
    hardCount: 0
  });
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Fetch user stats
    fetchUserStats();
  }, []);

  const fetchUserStats = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/stats`, {
        headers: {
          'Authorization': `Bearer ${await user?.getToken()}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch user stats:', error);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
    
    // Navigate to specific pages for certain sections
    if (section === 'practice') {
      navigate('/dashboard');
    } else if (section === 'leaderboard') {
      navigate('/leaderboard');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      {/* Mobile Navigation Toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white md:hidden"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar Navigation */}
      <nav className={`fixed left-0 top-0 h-full w-64 z-40 transform transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-8">CodiGo</h2>
          
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleSectionChange('home')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'home' 
                    ? 'bg-blue-600 text-white' 
                    : `${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
              >
                🏠 Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange('practice')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'practice' 
                    ? 'bg-blue-600 text-white' 
                    : `${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
              >
                💻 Practice
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange('stats')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'stats' 
                    ? 'bg-blue-600 text-white' 
                    : `${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
              >
                📊 Stats
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange('help')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'help' 
                    ? 'bg-blue-600 text-white' 
                    : `${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
              >
                🤖 Ask AI
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange('contact')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'contact' 
                    ? 'bg-blue-600 text-white' 
                    : `${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
              >
                📞 Contact Us
              </button>
            </li>
          </ul>

          <div className="mt-8 space-y-4">
            <select
              value={isDarkTheme ? 'dark-theme' : 'light-theme'}
              onChange={(e) => setIsDarkTheme(e.target.value === 'dark-theme')}
              className={`w-full px-3 py-2 rounded-lg border ${
                isDarkTheme 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option value="dark-theme">Dark theme</option>
              <option value="light-theme">Light theme</option>
            </select>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="w-full"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`md:ml-64 min-h-screen transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="p-6">
          {/* Home Section */}
          {activeSection === 'home' && (
            <div className="space-y-6">
              {/* Welcome Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">💻 CodiGo Dashboard</h1>
                <div className="flex items-center justify-center space-x-2 text-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.5 14.6 3.4 14.5 3.3L13 2L11.5 3.3C11.4 3.4 11.2 3.5 11 3.5L5 7V9H21ZM21 10H5V21H21V10Z"/>
                  </svg>
                  <span>Welcome, <span className="text-blue-500 font-semibold">{user?.firstName || 'User'}</span></span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Quick Stats */}
                  <Card className={`p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-xl font-semibold mb-4">📊 Quick Stats</h2>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>⭐ Current Rank:</span>
                        <span className="font-semibold">#{stats.currentRank.toString().padStart(3, '0')}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🏆 Contests Won:</span>
                        <span className="font-semibold">{stats.contestCount}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🔥 Streak:</span>
                        <span className="font-semibold">{stats.streakCount} Days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🎯 Next Contest:</span>
                        <span className="font-semibold text-green-500">Code Sprint in 2h 30m</span>
                      </li>
                    </ul>
                  </Card>

                  {/* Problems Solved */}
                  <Card className={`p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-xl font-semibold mb-4">🎯 Problems Solved</h2>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-500">{stats.totalProblems}</div>
                      <div className="text-sm text-gray-500">Total Solved</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">🟢</span>
                          <span>Easy</span>
                        </div>
                        <span className="font-semibold">{stats.easyCount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-500">🟡</span>
                          <span>Medium</span>
                        </div>
                        <span className="font-semibold">{stats.mediumCount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500">🔴</span>
                          <span>Hard</span>
                        </div>
                        <span className="font-semibold">{stats.hardCount}</span>
                      </div>
                    </div>
                  </Card>

                  {/* Activity Graph */}
                  <Card className={`p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-xl font-semibold mb-4">📈 Activity</h2>
                    <div className="flex items-end justify-center space-x-2 h-24 mb-4">
                      {[80, 60, 90, 40, 70, 30].map((height, index) => (
                        <div
                          key={index}
                          className="bg-blue-500 rounded-t"
                          style={{ height: `${height}%`, width: '20px' }}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold">25k</div>
                        <div className="text-gray-500">Peak Streak</div>
                      </div>
                      <div>
                        <div className="font-semibold">0</div>
                        <div className="text-gray-500">Missed Days</div>
                      </div>
                      <div>
                        <div className="font-semibold">Monthly</div>
                        <div className="text-gray-500">Progress</div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Middle Column */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Quick Actions */}
                  <Card className={`p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-xl font-semibold mb-4">⚡ Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => navigate('/dashboard')}
                        className={`p-4 rounded-lg border-2 border-dashed transition-colors ${
                          isDarkTheme 
                            ? 'border-gray-600 hover:border-blue-500 hover:bg-gray-700' 
                            : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                        }`}
                      >
                        <div className="text-2xl mb-2">💻</div>
                        <div className="font-semibold text-sm">Practice Coding</div>
                        <div className="text-xs text-gray-500">Continue solving</div>
                      </button>
                      
                      <button className={`p-4 rounded-lg border-2 border-dashed transition-colors ${
                        isDarkTheme 
                          ? 'border-gray-600 hover:border-blue-500 hover:bg-gray-700' 
                          : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                      }`}>
                        <div className="text-2xl mb-2">🏆</div>
                        <div className="font-semibold text-sm">Join Contest</div>
                        <div className="text-xs text-gray-500">Compete live</div>
                      </button>
                      
                      <button className={`p-4 rounded-lg border-2 border-dashed transition-colors ${
                        isDarkTheme 
                          ? 'border-gray-600 hover:border-blue-500 hover:bg-gray-700' 
                          : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                      }`}>
                        <div className="text-2xl mb-2">🤖</div>
                        <div className="font-semibold text-sm">AI Help Desk</div>
                        <div className="text-xs text-gray-500">Get hints</div>
                      </button>
                      
                      <button
                        onClick={() => navigate('/leaderboard')}
                        className={`p-4 rounded-lg border-2 border-dashed transition-colors ${
                          isDarkTheme 
                            ? 'border-gray-600 hover:border-blue-500 hover:bg-gray-700' 
                            : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                        }`}
                      >
                        <div className="text-2xl mb-2">📊</div>
                        <div className="font-semibold text-sm">Leaderboard</div>
                        <div className="text-xs text-gray-500">See rankings</div>
                      </button>
                    </div>
                  </Card>

                  {/* Popular Languages */}
                  <Card className={`p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-xl font-semibold mb-4">🔥 Popular Languages</h2>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: 'Python', icon: '🐍', color: 'bg-green-500' },
                        { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500' },
                        { name: 'Java', icon: '☕', color: 'bg-red-500' },
                        { name: 'C++', icon: '⚙️', color: 'bg-blue-500' },
                        { name: 'HTML', icon: '🌐', color: 'bg-orange-500' },
                        { name: 'CSS', icon: '🎨', color: 'bg-purple-500' }
                      ].map((lang, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-12 h-12 ${lang.color} rounded-lg flex items-center justify-center text-white text-xl mx-auto mb-2`}>
                            {lang.icon}
                          </div>
                          <div className="text-sm font-medium">{lang.name}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Recent Activity */}
                  <Card className={`p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-xl font-semibold mb-4">🕒 Recent Activity</h2>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Solved Two Sum</div>
                          <div className="text-xs text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">🏆</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Won Weekly Contest</div>
                          <div className="text-xs text-gray-500">1 day ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">⭐</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Achieved 5-day streak</div>
                          <div className="text-xs text-gray-500">3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Upcoming Contests */}
                  <Card className={`p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-xl font-semibold mb-4">🎯 Upcoming Contests</h2>
                    <div className="space-y-3">
                      <div className={`p-3 rounded-lg ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <div className="font-medium text-sm">Weekly Code Sprint</div>
                        <div className="text-xs text-gray-500">Starts in 2h 30m</div>
                        <div className="text-xs text-blue-500">Register now</div>
                      </div>
                      <div className={`p-3 rounded-lg ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <div className="font-medium text-sm">Algorithm Challenge</div>
                        <div className="text-xs text-gray-500">Tomorrow at 2:00 PM</div>
                        <div className="text-xs text-green-500">Registered</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Other sections can be implemented here */}
          {activeSection === 'stats' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">📊 Detailed Statistics</h2>
              <p className="text-gray-500">Comprehensive analytics coming soon...</p>
            </div>
          )}

          {activeSection === 'help' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">🤖 AI Assistant</h2>
              <p className="text-gray-500">AI-powered coding help coming soon...</p>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">📞 Contact Us</h2>
              <p className="text-gray-500">Get in touch with our support team...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
