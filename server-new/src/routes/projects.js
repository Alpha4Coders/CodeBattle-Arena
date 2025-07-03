import express from 'express';
const router = express.Router();

// Sample project data
const sampleProjects = [
  {
    id: 'proj_1',
    title: 'E-commerce Platform',
    description: 'Build a full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    difficulty: 'intermediate',
    type: 'fullstack',
    category: 'web',
    duration: '4-6 weeks',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    status: 'not started',
    participants: 145,
    image: null,
    prerequisites: ['JavaScript', 'React Basics', 'Node.js Fundamentals'],
    companies: ['Amazon', 'Shopify', 'eBay'],
    hasEditorial: true,
    hasDiscussion: true
  },
  {
    id: 'proj_2',
    title: 'Social Media Dashboard',
    description: 'Create a social media analytics dashboard with real-time data visualization and user management.',
    difficulty: 'advanced',
    type: 'fullstack',
    category: 'web',
    duration: '6-8 weeks',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL', 'D3.js'],
    status: 'not started',
    participants: 89,
    image: null,
    prerequisites: ['Advanced JavaScript', 'Database Design', 'API Development'],
    companies: ['Facebook', 'Twitter', 'LinkedIn'],
    hasEditorial: true,
    hasDiscussion: true
  },
  {
    id: 'proj_3',
    title: 'Game: Snake Clone',
    description: 'Develop a modern version of the classic Snake game with multiplayer support and leaderboards.',
    difficulty: 'beginner',
    type: 'frontend',
    category: 'games',
    duration: '2-3 weeks',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'WebSocket'],
    status: 'not started',
    participants: 234,
    image: null,
    prerequisites: ['Basic JavaScript', 'HTML/CSS'],
    companies: ['Game Studios', 'Mobile Game Companies'],
    hasEditorial: false,
    hasDiscussion: true
  },
  {
    id: 'proj_4',
    title: 'AI Chatbot',
    description: 'Build an intelligent chatbot using natural language processing and machine learning.',
    difficulty: 'advanced',
    type: 'ai',
    category: 'ai',
    duration: '5-7 weeks',
    technologies: ['Python', 'TensorFlow', 'Flask', 'NLTK', 'React'],
    status: 'not started',
    participants: 67,
    image: null,
    prerequisites: ['Python', 'Machine Learning Basics', 'NLP Fundamentals'],
    companies: ['OpenAI', 'Google', 'Microsoft'],
    hasEditorial: true,
    hasDiscussion: true
  },
  {
    id: 'proj_5',
    title: 'Task Management App',
    description: 'Create a productivity app with task tracking, team collaboration, and project management features.',
    difficulty: 'intermediate',
    type: 'fullstack',
    category: 'web',
    duration: '3-5 weeks',
    technologies: ['Vue.js', 'Express.js', 'MySQL', 'Socket.io'],
    status: 'not started',
    participants: 156,
    image: null,
    prerequisites: ['JavaScript', 'Vue.js Basics', 'Database Knowledge'],
    companies: ['Asana', 'Trello', 'Monday.com'],
    hasEditorial: false,
    hasDiscussion: true
  },
  {
    id: 'proj_6',
    title: 'IoT Weather Station',
    description: 'Build a complete IoT solution with sensors, data collection, and web dashboard.',
    difficulty: 'advanced',
    type: 'iot',
    category: 'iot',
    duration: '6-10 weeks',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
    status: 'not started',
    participants: 43,
    image: null,
    prerequisites: ['Electronics Basics', 'Python', 'Networking'],
    companies: ['IoT Companies', 'Smart Home Startups'],
    hasEditorial: true,
    hasDiscussion: false
  },
  {
    id: 'proj_7',
    title: 'Blockchain Voting System',
    description: 'Develop a secure voting system using blockchain technology with smart contracts.',
    difficulty: 'advanced',
    type: 'blockchain',
    category: 'algo',
    duration: '8-12 weeks',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
    status: 'not started',
    participants: 78,
    image: null,
    prerequisites: ['Blockchain Basics', 'Solidity', 'Cryptography'],
    companies: ['Blockchain Startups', 'Fintech Companies'],
    hasEditorial: true,
    hasDiscussion: true
  },
  {
    id: 'proj_8',
    title: 'Mobile Fitness Tracker',
    description: 'Create a cross-platform mobile app for fitness tracking with health analytics.',
    difficulty: 'intermediate',
    type: 'mobile',
    category: 'web',
    duration: '4-6 weeks',
    technologies: ['React Native', 'Redux', 'Firebase', 'Health APIs'],
    status: 'not started',
    participants: 198,
    image: null,
    prerequisites: ['React', 'Mobile Development Basics'],
    companies: ['Fitness Apps', 'Health Tech Companies'],
    hasEditorial: false,
    hasDiscussion: true
  }
];

// GET /api/projects - Get all projects with optional filtering
router.get('/', async (req, res) => {
  try {
    const { category, difficulty, type, sort } = req.query;
    
    let filteredProjects = [...sampleProjects];
    
    // Apply filters
    if (category && category !== 'all') {
      filteredProjects = filteredProjects.filter(project => project.category === category);
    }
    
    if (difficulty) {
      filteredProjects = filteredProjects.filter(project => project.difficulty === difficulty);
    }
    
    if (type) {
      filteredProjects = filteredProjects.filter(project => project.type === type);
    }
    
    // Apply sorting
    if (sort) {
      switch (sort) {
        case 'difficulty':
          const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
          filteredProjects.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
          break;
        case 'participants':
          filteredProjects.sort((a, b) => b.participants - a.participants);
          break;
        case 'duration':
          filteredProjects.sort((a, b) => a.duration.localeCompare(b.duration));
          break;
        case 'recent':
          // For demo purposes, reverse order to simulate recent additions
          filteredProjects.reverse();
          break;
        default:
          break;
      }
    }
    
    res.json({
      success: true,
      projects: filteredProjects,
      total: filteredProjects.length
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch projects'
    });
  }
});

// GET /api/projects/:id - Get specific project
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = sampleProjects.find(p => p.id === id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    // Add additional details for individual project view
    const detailedProject = {
      ...project,
      phases: [
        {
          id: 1,
          title: 'Planning & Setup',
          description: 'Set up development environment and plan the architecture',
          duration: '3-5 days',
          completed: false
        },
        {
          id: 2,
          title: 'Core Development',
          description: 'Implement main features and functionality',
          duration: '2-3 weeks',
          completed: false
        },
        {
          id: 3,
          title: 'Testing & Deployment',
          description: 'Test thoroughly and deploy to production',
          duration: '1 week',
          completed: false
        }
      ],
      learningObjectives: [
        'Understand full-stack development principles',
        'Learn modern web technologies',
        'Practice software architecture design',
        'Gain experience with deployment processes'
      ],
      resources: [
        {
          type: 'documentation',
          title: 'Project Requirements Document',
          url: '#'
        },
        {
          type: 'tutorial',
          title: 'Getting Started Video',
          url: '#'
        },
        {
          type: 'template',
          title: 'Starter Code Repository',
          url: '#'
        }
      ]
    };
    
    res.json({
      success: true,
      project: detailedProject
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project'
    });
  }
});

// POST /api/projects/:id/start - Start working on a project
router.post('/:id/start', async (req, res) => {
  try {
    const { id } = req.params;
    // const userId = req.user?.id; // Would come from auth middleware
    
    // In a real app, you'd update the user's project status in the database
    // For now, just return success
    
    res.json({
      success: true,
      message: 'Project started successfully',
      projectId: id
    });
  } catch (error) {
    console.error('Error starting project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to start project'
    });
  }
});

// POST /api/projects/:id/submit - Submit project progress
router.post('/:id/submit', async (req, res) => {
  try {
    const { id } = req.params;
    const { phase, files, description } = req.body;
    
    // In a real app, you'd save the submission to the database
    // For now, just return success
    
    res.json({
      success: true,
      message: 'Project submission recorded successfully',
      submissionId: `sub_${Date.now()}`
    });
  } catch (error) {
    console.error('Error submitting project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit project'
    });
  }
});

// GET /api/projects/categories - Get all project categories
router.get('/categories', async (req, res) => {
  try {
    const categories = [
      { id: 'all', name: 'All Projects', count: sampleProjects.length },
      { id: 'web', name: 'Web Apps', count: sampleProjects.filter(p => p.category === 'web').length },
      { id: 'games', name: 'Games', count: sampleProjects.filter(p => p.category === 'games').length },
      { id: 'ai', name: 'AI/ML', count: sampleProjects.filter(p => p.category === 'ai').length },
      { id: 'algo', name: 'Algorithms', count: sampleProjects.filter(p => p.category === 'algo').length },
      { id: 'iot', name: 'IoT/Hardware', count: sampleProjects.filter(p => p.category === 'iot').length }
    ];
    
    res.json({
      success: true,
      categories: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
});

export default router;
