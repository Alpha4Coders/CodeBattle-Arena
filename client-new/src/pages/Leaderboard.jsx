import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('all-time');

  useEffect(() => {
    // Simulate API call to fetch leaderboard data
    const fetchLeaderboard = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData = [
        {
          rank: 1,
          username: 'CodeMaster2024',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          score: 2847,
          problemsSolved: 127,
          contestsWon: 23,
          streak: 45,
          country: 'USA'
        },
        {
          rank: 2,
          username: 'AlgoNinja',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
          score: 2756,
          problemsSolved: 119,
          contestsWon: 19,
          streak: 32,
          country: 'India'
        },
        {
          rank: 3,
          username: 'DevGuru',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          score: 2689,
          problemsSolved: 115,
          contestsWon: 18,
          streak: 28,
          country: 'Germany'
        },
        {
          rank: 4,
          username: 'ByteHunter',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
          score: 2634,
          problemsSolved: 112,
          contestsWon: 16,
          streak: 25,
          country: 'Japan'
        },
        {
          rank: 5,
          username: 'CodeWarrior',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
          score: 2578,
          problemsSolved: 108,
          contestsWon: 15,
          streak: 22,
          country: 'Canada'
        },
        {
          rank: 6,
          username: 'AlgorithmAce',
          avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face',
          score: 2523,
          problemsSolved: 105,
          contestsWon: 14,
          streak: 19,
          country: 'UK'
        },
        {
          rank: 7,
          username: 'DataStructureKing',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
          score: 2467,
          problemsSolved: 102,
          contestsWon: 12,
          streak: 16,
          country: 'Australia'
        },
        {
          rank: 8,
          username: 'LogicMaster',
          avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=40&h=40&fit=crop&crop=face',
          score: 2412,
          problemsSolved: 98,
          contestsWon: 11,
          streak: 14,
          country: 'France'
        },
        {
          rank: 9,
          username: 'CodingLegend',
          avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=40&h=40&fit=crop&crop=face',
          score: 2358,
          problemsSolved: 95,
          contestsWon: 10,
          streak: 12,
          country: 'Brazil'
        },
        {
          rank: 10,
          username: 'TechSavvy',
          avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=40&h=40&fit=crop&crop=face',
          score: 2304,
          problemsSolved: 92,
          contestsWon: 9,
          streak: 10,
          country: 'South Korea'
        }
      ];
      
      setLeaderboardData(mockData);
      setLoading(false);
    };

    fetchLeaderboard();
  }, [timeFilter]);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return rank;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'text-yellow-400';
      case 2:
        return 'text-gray-300';
      case 3:
        return 'text-amber-600';
      default:
        return 'text-gray-400';
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
              <span className="text-blue-400 font-semibold">Leaderboard</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">🏆 Global Leaderboard</h1>
          <p className="text-gray-400 text-lg">
            Compete with developers worldwide and climb to the top!
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-lg p-1 inline-flex">
            {[
              { value: 'all-time', label: 'All Time' },
              { value: 'monthly', label: 'This Month' },
              { value: 'weekly', label: 'This Week' },
              { value: 'daily', label: 'Today' }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setTimeFilter(filter.value)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  timeFilter === filter.value
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10,247</div>
              <div className="text-gray-400">Active Users</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1,824</div>
              <div className="text-gray-400">Problems Solved Today</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">47</div>
              <div className="text-gray-400">Active Contests</div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Score</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Problems</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Contests Won</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Streak</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Country</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {loading ? (
                  Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index} className="animate-pulse">
                      <td className="px-6 py-4">
                        <div className="w-8 h-4 bg-gray-700 rounded"></div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                          <div className="w-24 h-4 bg-gray-700 rounded"></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="w-16 h-4 bg-gray-700 rounded mx-auto"></div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="w-12 h-4 bg-gray-700 rounded mx-auto"></div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="w-8 h-4 bg-gray-700 rounded mx-auto"></div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="w-8 h-4 bg-gray-700 rounded mx-auto"></div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="w-16 h-4 bg-gray-700 rounded mx-auto"></div>
                      </td>
                    </tr>
                  ))
                ) : (
                  leaderboardData.map((user) => (
                    <tr
                      key={user.rank}
                      className="hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className={`text-lg font-bold ${getRankColor(user.rank)}`}>
                          {getRankIcon(user.rank)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user.avatar}
                            alt={user.username}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-white">{user.username}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="font-bold text-blue-400">{user.score.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="font-semibold">{user.problemsSolved}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="font-semibold text-yellow-400">{user.contestsWon}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <span className="text-orange-400 mr-1">🔥</span>
                          <span className="font-semibold">{user.streak}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-gray-300">{user.country}</div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold">
            Load More
          </button>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center mt-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
