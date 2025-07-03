import express from 'express';

const router = express.Router();

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    const userId = req.auth.userId;
    
    // Mock user profile data
    const mockProfile = {
      id: userId,
      username: 'CodeMaster2024',
      email: 'user@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      fullName: 'John Doe',
      bio: 'Passionate full-stack developer and competitive programmer',
      location: 'San Francisco, CA',
      website: 'https://johndoe.dev',
      github: 'johndoe',
      linkedin: 'johndoe',
      joinedAt: '2024-01-15T10:30:00.000Z',
      stats: {
        problemsSolved: 127,
        easyProblems: 45,
        mediumProblems: 62,
        hardProblems: 20,
        contestsParticipated: 35,
        contestsWon: 23,
        currentStreak: 45,
        maxStreak: 87,
        totalScore: 2847,
        rank: 1,
        percentile: 98.5
      },
      preferences: {
        preferredLanguage: 'javascript',
        theme: 'dark',
        emailNotifications: true,
        publicProfile: true
      },
      achievements: [
        {
          id: 1,
          title: 'First Solution',
          description: 'Solved your first problem',
          icon: '🎯',
          unlockedAt: '2024-01-16T10:30:00.000Z'
        },
        {
          id: 2,
          title: 'Speed Demon',
          description: 'Solved 10 problems in one day',
          icon: '⚡',
          unlockedAt: '2024-02-01T10:30:00.000Z'
        },
        {
          id: 3,
          title: 'Contest Winner',
          description: 'Won your first contest',
          icon: '🏆',
          unlockedAt: '2024-02-15T10:30:00.000Z'
        }
      ]
    };

    res.json(mockProfile);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

// Update user profile
router.put('/profile', async (req, res) => {
  try {
    const userId = req.auth.userId;
    const updates = req.body;
    
    // In a real app, you would update the database here
    console.log('Updating profile for user:', userId, updates);
    
    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: updates
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Get user statistics
router.get('/stats', async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { timeframe = 'all-time' } = req.query;
    
    // Mock statistics data
    const mockStats = {
      overview: {
        totalProblems: 127,
        easyProblems: 45,
        mediumProblems: 62,
        hardProblems: 20,
        acceptanceRate: 78.5,
        totalSubmissions: 162
      },
      languages: [
        { language: 'JavaScript', count: 45, percentage: 35.4 },
        { language: 'Python', count: 38, percentage: 29.9 },
        { language: 'Java', count: 25, percentage: 19.7 },
        { language: 'C++', count: 19, percentage: 15.0 }
      ],
      categories: [
        { category: 'Array', count: 28, percentage: 22.0 },
        { category: 'String', count: 22, percentage: 17.3 },
        { category: 'Dynamic Programming', count: 18, percentage: 14.2 },
        { category: 'Tree', count: 15, percentage: 11.8 },
        { category: 'Graph', count: 12, percentage: 9.4 }
      ],
      activity: [
        { date: '2024-01-01', problemsSolved: 3 },
        { date: '2024-01-02', problemsSolved: 5 },
        { date: '2024-01-03', problemsSolved: 2 },
        { date: '2024-01-04', problemsSolved: 4 },
        { date: '2024-01-05', problemsSolved: 6 },
        { date: '2024-01-06', problemsSolved: 1 },
        { date: '2024-01-07', problemsSolved: 3 }
      ],
      streaks: {
        current: 45,
        max: 87,
        total: 156
      }
    };

    res.json(mockStats);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user statistics' });
  }
});

// Get user achievements
router.get('/achievements', async (req, res) => {
  try {
    const userId = req.auth.userId;
    
    // Mock achievements data
    const mockAchievements = [
      {
        id: 1,
        title: 'First Solution',
        description: 'Solved your first problem',
        icon: '🎯',
        category: 'Milestone',
        rarity: 'Common',
        points: 10,
        unlockedAt: '2024-01-16T10:30:00.000Z',
        unlocked: true
      },
      {
        id: 2,
        title: 'Speed Demon',
        description: 'Solved 10 problems in one day',
        icon: '⚡',
        category: 'Performance',
        rarity: 'Rare',
        points: 50,
        unlockedAt: '2024-02-01T10:30:00.000Z',
        unlocked: true
      },
      {
        id: 3,
        title: 'Contest Winner',
        description: 'Won your first contest',
        icon: '🏆',
        category: 'Contest',
        rarity: 'Epic',
        points: 100,
        unlockedAt: '2024-02-15T10:30:00.000Z',
        unlocked: true
      },
      {
        id: 4,
        title: 'Century Club',
        description: 'Solve 100 problems',
        icon: '💯',
        category: 'Milestone',
        rarity: 'Rare',
        points: 75,
        unlockedAt: null,
        unlocked: false,
        progress: 127,
        target: 100
      }
    ];

    res.json({
      achievements: mockAchievements,
      totalPoints: mockAchievements
        .filter(a => a.unlocked)
        .reduce((sum, a) => sum + a.points, 0),
      unlockedCount: mockAchievements.filter(a => a.unlocked).length,
      totalCount: mockAchievements.length
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch achievements' });
  }
});

export default router;
