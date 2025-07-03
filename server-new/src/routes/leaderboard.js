import express from 'express';

const router = express.Router();

// Get leaderboard
router.get('/', async (req, res) => {
  try {
    const { timeframe = 'all-time', page = 1, limit = 50 } = req.query;
    
    // Mock leaderboard data
    const mockLeaderboard = [
      {
        rank: 1,
        userId: 'user_1',
        username: 'CodeMaster2024',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        score: 2847,
        problemsSolved: 127,
        contestsWon: 23,
        streak: 45,
        country: 'USA',
        lastActive: new Date().toISOString()
      },
      {
        rank: 2,
        userId: 'user_2',
        username: 'AlgoNinja',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        score: 2756,
        problemsSolved: 119,
        contestsWon: 19,
        streak: 32,
        country: 'India',
        lastActive: new Date().toISOString()
      },
      {
        rank: 3,
        userId: 'user_3',
        username: 'DevGuru',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        score: 2689,
        problemsSolved: 115,
        contestsWon: 18,
        streak: 28,
        country: 'Germany',
        lastActive: new Date().toISOString()
      }
    ];

    // Generate more mock data
    for (let i = 4; i <= 100; i++) {
      mockLeaderboard.push({
        rank: i,
        userId: `user_${i}`,
        username: `User${i}`,
        avatar: `https://images.unsplash.com/photo-150${Math.floor(Math.random() * 10)}?w=40&h=40&fit=crop&crop=face`,
        score: Math.floor(Math.random() * 2000) + 500,
        problemsSolved: Math.floor(Math.random() * 100) + 20,
        contestsWon: Math.floor(Math.random() * 15),
        streak: Math.floor(Math.random() * 30),
        country: ['USA', 'India', 'Germany', 'Japan', 'Canada', 'UK', 'Australia'][Math.floor(Math.random() * 7)],
        lastActive: new Date().toISOString()
      });
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedData = mockLeaderboard.slice(startIndex, endIndex);

    res.json({
      leaderboard: paginatedData,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(mockLeaderboard.length / limit),
        totalCount: mockLeaderboard.length,
        hasNext: endIndex < mockLeaderboard.length,
        hasPrev: startIndex > 0
      },
      stats: {
        totalUsers: 10247,
        activeUsers: 1824,
        problemsSolvedToday: 1824,
        activeContests: 47
      }
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// Get user rank
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Mock user rank data
    const mockUserRank = {
      userId,
      rank: Math.floor(Math.random() * 1000) + 1,
      score: Math.floor(Math.random() * 2000) + 500,
      problemsSolved: Math.floor(Math.random() * 100) + 20,
      contestsWon: Math.floor(Math.random() * 15),
      streak: Math.floor(Math.random() * 30),
      percentile: Math.floor(Math.random() * 100)
    };

    res.json(mockUserRank);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user rank' });
  }
});

export default router;
