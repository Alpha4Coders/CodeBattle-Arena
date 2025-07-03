import express from 'express';

const router = express.Router();

// Get all problems
router.get('/', async (req, res) => {
  try {
    const { difficulty, category, page = 1, limit = 20 } = req.query;
    
    // Mock problems data
    const mockProblems = [
      {
        id: 1,
        title: 'Two Sum',
        difficulty: 'Easy',
        category: 'Array',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        acceptanceRate: 49.8,
        totalSubmissions: 1234567,
        totalAccepted: 615432
      },
      {
        id: 2,
        title: 'Add Two Numbers',
        difficulty: 'Medium',
        category: 'Linked List',
        description: 'You are given two non-empty linked lists representing two non-negative integers.',
        acceptanceRate: 38.2,
        totalSubmissions: 987654,
        totalAccepted: 377327
      },
      {
        id: 3,
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Medium',
        category: 'String',
        description: 'Given a string s, find the length of the longest substring without repeating characters.',
        acceptanceRate: 33.8,
        totalSubmissions: 876543,
        totalAccepted: 296271
      },
      {
        id: 4,
        title: 'Median of Two Sorted Arrays',
        difficulty: 'Hard',
        category: 'Array',
        description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
        acceptanceRate: 35.7,
        totalSubmissions: 654321,
        totalAccepted: 233493
      },
      {
        id: 5,
        title: 'Longest Palindromic Substring',
        difficulty: 'Medium',
        category: 'String',
        description: 'Given a string s, return the longest palindromic substring in s.',
        acceptanceRate: 32.1,
        totalSubmissions: 543210,
        totalAccepted: 174450
      }
    ];

    // Filter by difficulty if provided
    let filteredProblems = mockProblems;
    if (difficulty) {
      filteredProblems = filteredProblems.filter(p => 
        p.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }

    // Filter by category if provided
    if (category) {
      filteredProblems = filteredProblems.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedProblems = filteredProblems.slice(startIndex, endIndex);

    res.json({
      problems: paginatedProblems,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredProblems.length / limit),
        totalCount: filteredProblems.length,
        hasNext: endIndex < filteredProblems.length,
        hasPrev: startIndex > 0
      }
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
});

// Get specific problem by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock problem data
    const mockProblem = {
      id: parseInt(id),
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Array',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
        },
        {
          input: 'nums = [3,2,4], target = 6',
          output: '[1,2]',
          explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
        }
      ],
      constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
        'Only one valid answer exists.'
      ],
      hints: [
        'A really brute force way would be to search for all possible pairs of numbers but that would be too slow.',
        'Again, the best way to approach this problem is to use a HashMap.'
      ],
      acceptanceRate: 49.8,
      totalSubmissions: 1234567,
      totalAccepted: 615432,
      starterCode: {
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
        cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your code here
        
    }
};`
      }
    };

    res.json(mockProblem);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch problem' });
  }
});

// Submit solution (protected route)
router.post('/:id/submit', async (req, res) => {
  try {
    const { id } = req.params;
    const { code, language } = req.body;
    const userId = req.auth.userId;

    // Mock submission processing
    const mockResult = {
      submissionId: Date.now(),
      status: 'Accepted',
      runtime: '64ms',
      memory: '42.1MB',
      testCasesPassed: 57,
      totalTestCases: 57,
      score: 100,
      percentile: 85.23
    };

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));

    res.json({
      success: true,
      result: mockResult,
      message: 'Solution submitted successfully!'
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to submit solution' });
  }
});

export default router;
