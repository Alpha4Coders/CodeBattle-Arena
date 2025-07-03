import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const Dashboard = () => {
  const { user } = useUser();
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('dark-theme');
  const [stats, setStats] = useState({
    totalProblems: 0,
    easyCount: 0,
    mediumCount: 0,
    hardCount: 0,
    currRank: '001',
    contestCount: '777',
    streakCount: '04'
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
  };

  const languages = [
    {
      name: 'C',
      icon: '⚡',
      stats: '300+ solved',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'C++',
      icon: '🔥',
      stats: '600+ solved', 
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Python',
      icon: '🐍',
      stats: '500+ solved',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Java',
      icon: '☕',
      stats: '400+ solved',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'HTML',
      icon: '🌐',
      stats: '900+ solved',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'CSS',
      icon: '🎨',
      stats: '800+ solved',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark-theme' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-6 left-6 z-50 lg:hidden p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Sidebar */}
      <nav className={`fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border-r border-gray-700`}>
        
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-6 right-6 lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="p-6">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => showSection('home')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => showSection('practice')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'practice' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Practice
              </button>
            </li>
            <li>
              <button
                onClick={() => showSection('stats')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'stats' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Stats
              </button>
            </li>
            <li>
              <button
                onClick={() => showSection('help')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'help' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Ask AI
              </button>
            </li>
            <li>
              <button
                onClick={() => showSection('contact')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'contact' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Contact Us
              </button>
            </li>
            <li className="pt-6 border-t border-gray-700">
              <select
                value={theme}
                onChange={(e) => handleThemeChange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
              >
                <option value="dark-theme">Dark theme</option>
                <option value="light-theme">Light theme</option>
              </select>
            </li>
            <li>
              <Link
                to="/"
                className="block w-full px-4 py-2 text-center bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-80 p-6">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Welcome Card */}
                <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700`}>
                  <h1 className="text-3xl font-bold mb-4">💻 CodiGo Dashboard</h1>
                  <h2 className="text-xl flex items-center">
                    <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1.5V4H9V1.5L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10S13.1 12 12 12 10 11.1 10 10 10.9 8 12 8Z"/>
                    </svg>
                    Welcome, <span className="text-blue-400">{user?.firstName || 'User'}</span>
                  </h2>
                </div>

                {/* Quick Stats */}
                <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700`}>
                  <h2 className="text-xl font-bold mb-4">📊 Quick Stats</h2>
                  <ul className="space-y-2">
                    <li>⭐ Current Rank: #{stats.currRank}</li>
                    <li>🏆 Contests Won: {stats.contestCount}</li>
                    <li>🔥 Streak: {stats.streakCount} Days</li>
                    <li>🎯 Next Contest: Code Sprint in 2h 30m</li>
                  </ul>
                </div>

                {/* Problems Solved */}
                <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700`}>
                  <h2 className="text-xl font-bold mb-4">🎯 Problems Solved</h2>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold">{stats.totalProblems}</span>
                    <p className="text-gray-400">Total Solved</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <span className="text-2xl">🟢</span>
                      <div className="text-lg font-bold">{stats.easyCount}</div>
                      <div className="text-sm text-gray-400">Easy</div>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl">🟡</span>
                      <div className="text-lg font-bold">{stats.mediumCount}</div>
                      <div className="text-sm text-gray-400">Medium</div>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl">🔴</span>
                      <div className="text-lg font-bold">{stats.hardCount}</div>
                      <div className="text-sm text-gray-400">Hard</div>
                    </div>
                  </div>
                </div>

                {/* Activity Graph */}
                <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700`}>
                  <h2 className="text-xl font-bold mb-4">Activity</h2>
                  <div className="h-32 flex items-end justify-between mb-4">
                    {[80, 60, 90, 40, 70, 30].map((height, index) => (
                      <div
                        key={index}
                        className="bg-green-500 w-6 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold">25k</div>
                      <div className="text-sm text-gray-400">Peak Streak</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">0</div>
                      <div className="text-sm text-gray-400">Missed Days</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">Monthly</div>
                      <div className="text-sm text-gray-400">Progress</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700`}>
                  <h2 className="text-xl font-bold mb-4">⚡ Quick Actions</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => showSection('practice')}
                      className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center"
                    >
                      <div className="text-2xl mb-2">💻</div>
                      <div className="font-semibold">Practice Coding</div>
                      <div className="text-xs opacity-80">Continue solving problems</div>
                    </button>
                    <div className="p-4 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-center cursor-pointer">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="font-semibold">Join Contest</div>
                      <div className="text-xs opacity-80">Compete live</div>
                    </div>
                    <div className="p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-center cursor-pointer">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="font-semibold">AI Help Desk</div>
                      <div className="text-xs opacity-80">Get hints & explanations</div>
                    </div>
                    <Link
                      to="/leaderboard"
                      className="p-4 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors text-center block"
                    >
                      <div className="text-2xl mb-2">📊</div>
                      <div className="font-semibold">Leaderboard</div>
                      <div className="text-xs opacity-80">See rankings</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Popular Languages */}
                <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700`}>
                  <h2 className="text-xl font-bold mb-4">Popular Languages</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {languages.map((lang, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg bg-gradient-to-r ${lang.color} text-white hover:scale-105 transition-transform cursor-pointer`}
                      >
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-2">{lang.icon}</span>
                          <span className="font-semibold">{lang.name}</span>
                        </div>
                        <div className="text-sm opacity-90">{lang.stats}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Practice Section */}
        {activeSection === 'practice' && (
          <section className="space-y-8">
            <div className="text-center mb-8">
              <p className="text-green-400 uppercase tracking-wider text-sm">ARE YOU READY!</p>
              <p className="text-xl mb-2">Practice Here, Rock Your Future</p>
              <h2 className="text-3xl font-bold">Practice a lot of code here, mainly C, C++, Java & Python</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Beginner Level */}
              <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700 hover:border-green-500 transition-colors`}>
                <h3 className="text-xl font-bold mb-4 text-green-400">Beginner Level</h3>
                <p className="mb-4">Perfect for those just starting their programming journey:</p>
                <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
                  <li>Basic syntax and concepts</li>
                  <li>Simple algorithms</li>
                  <li>Fundamental problem-solving</li>
                </ul>
                <Link
                  to="/problems/easy"
                  className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Start Learning Now
                </Link>
              </div>

              {/* Intermediate Level */}
              <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700 hover:border-yellow-500 transition-colors`}>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Intermediate Level</h3>
                <p className="mb-4">For programmers ready to take the next step:</p>
                <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
                  <li>Data structures</li>
                  <li>Object-oriented programming</li>
                  <li>Medium complexity algorithms</li>
                </ul>
                <Link
                  to="/problems/intermediate"
                  className="block w-full text-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Level Up Now
                </Link>
              </div>

              {/* Advanced Level */}
              <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700 hover:border-red-500 transition-colors`}>
                <h3 className="text-xl font-bold mb-4 text-red-400">Advanced Level</h3>
                <p className="mb-4">Challenging content for experienced coders:</p>
                <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
                  <li>Complex algorithms</li>
                  <li>System design</li>
                  <li>Optimization techniques</li>
                </ul>
                <Link
                  to="/problems/advanced"
                  className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Challenge Yourself
                </Link>
              </div>

              {/* Real-world Projects */}
              <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700 hover:border-purple-500 transition-colors`}>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Real-world Projects</h3>
                <p className="mb-4">Apply your skills to practical scenarios:</p>
                <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
                  <li>Full-stack applications</li>
                  <li>Open-source contributions</li>
                  <li>Portfolio builders</li>
                </ul>
                <Link
                  to="/projects"
                  className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Build Projects Now
                </Link>
              </div>
            </div>

            {/* AI Help Section */}
            <div className={`p-6 rounded-2xl ${theme === 'dark-theme' ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-700 text-center`}>
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Our AI-powered help system is here to assist you at every skill level.
                Get personalized guidance from basic concepts to advanced topics.
                Ask anything and accelerate your learning journey!
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Ask CODi Now
              </button>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark-theme' 
                      ? 'bg-gray-800 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark-theme' 
                      ? 'bg-gray-800 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
              <div>
                <textarea
                  rows="6"
                  placeholder="Enter Your Message"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark-theme' 
                      ? 'bg-gray-800 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send
              </button>
            </form>
          </section>
        )}
      </main>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
