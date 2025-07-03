import express from 'express';

const router = express.Router();

// Get user submissions
router.get('/', async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { page = 1, limit = 20, status, language } = req.query;
    
    // Mock submissions data
    const mockSubmissions = [
      {
        id: 1,
        problemId: 1,
        problemTitle: 'Two Sum',
        language: 'javascript',
        status: 'Accepted',
        runtime: '64ms',
        memory: '42.1MB',
        submittedAt: new Date(Date.now() - 3600000).toISOString(),
        code: 'function twoSum(nums, target) {\n    // Solution code\n}',
        testCasesPassed: 57,
        totalTestCases: 57
      },
      {
        id: 2,
        problemId: 2,
        problemTitle: 'Add Two Numbers',
        language: 'python',
        status: 'Wrong Answer',
        runtime: '72ms',
        memory: '14.8MB',
        submittedAt: new Date(Date.now() - 7200000).toISOString(),
        code: 'def addTwoNumbers(l1, l2):\n    # Solution code\n    pass',
        testCasesPassed: 45,
        totalTestCases: 57
      },
      {
        id: 3,
        problemId: 3,
        problemTitle: 'Longest Substring',
        language: 'java',
        status: 'Time Limit Exceeded',
        runtime: 'TLE',
        memory: '44.3MB',
        submittedAt: new Date(Date.now() - 10800000).toISOString(),
        code: 'public class Solution {\n    // Solution code\n}',
        testCasesPassed: 12,
        totalTestCases: 57
      }
    ];

    // Filter by status if provided
    let filteredSubmissions = mockSubmissions;
    if (status) {
      filteredSubmissions = filteredSubmissions.filter(s => 
        s.status.toLowerCase().includes(status.toLowerCase())
      );
    }

    // Filter by language if provided
    if (language) {
      filteredSubmissions = filteredSubmissions.filter(s => 
        s.language.toLowerCase() === language.toLowerCase()
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedSubmissions = filteredSubmissions.slice(startIndex, endIndex);

    res.json({
      submissions: paginatedSubmissions,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredSubmissions.length / limit),
        totalCount: filteredSubmissions.length,
        hasNext: endIndex < filteredSubmissions.length,
        hasPrev: startIndex > 0
      }
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Get specific submission
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.auth.userId;
    
    // Mock submission detail
    const mockSubmission = {
      id: parseInt(id),
      problemId: 1,
      problemTitle: 'Two Sum',
      language: 'javascript',
      status: 'Accepted',
      runtime: '64ms',
      memory: '42.1MB',
      submittedAt: new Date().toISOString(),
      code: `function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`,
      testCases: [
        {
          input: '[2,7,11,15]\n9',
          expectedOutput: '[0,1]',
          actualOutput: '[0,1]',
          status: 'Passed',
          runtime: '2ms'
        },
        {
          input: '[3,2,4]\n6',
          expectedOutput: '[1,2]',
          actualOutput: '[1,2]',
          status: 'Passed',
          runtime: '1ms'
        }
      ],
      testCasesPassed: 57,
      totalTestCases: 57,
      score: 100,
      percentile: 85.23
    };

    res.json(mockSubmission);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submission' });
  }
});

export default router;
