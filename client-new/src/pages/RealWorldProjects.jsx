import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Card from '../components/Card';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const RealWorldProjects = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '✨', color: 'text-purple-400' },
    { id: 'games', name: 'Games', icon: '🎮', color: 'text-green-400' },
    { id: 'web', name: 'Web Apps', icon: '🌐', color: 'text-blue-400' },
    { id: 'ai', name: 'AI/ML', icon: '🤖', color: 'text-orange-400' },
    { id: 'algo', name: 'Algorithms', icon: '🧠', color: 'text-red-400' },
    { id: 'iot', name: 'IoT/Hardware', icon: '🔌', color: 'text-yellow-400' }
  ];

  useEffect(() => {
    fetchProjects();
  }, [selectedCategory]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      let url = `${process.env.REACT_APP_API_URL}/api/projects`;
      if (selectedCategory !== 'all') {
        url += `?category=${selectedCategory}`;
      }
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${await user?.getToken()}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setProjects(data.projects);
      } else {
        setError(data.error || 'Failed to fetch projects');
      }
    } catch (err) {
      setError('Failed to fetch projects');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'text-green-500 bg-green-100 border-green-200';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'advanced': return 'text-red-500 bg-red-100 border-red-200';
      default: return 'text-gray-500 bg-gray-100 border-gray-200';
    }
  };

  const getProjectTypeIcon = (type) => {
    const icons = {
      'frontend': '🎨',
      'backend': '⚙️',
      'fullstack': '🔄',
      'mobile': '📱',
      'desktop': '🖥️',
      'game': '🎮',
      'ai': '🤖',
      'blockchain': '⛓️'
    };
    return icons[type] || '💻';
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

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
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-purple-600 text-white md:hidden"
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
            <h1 className="text-xl font-bold text-purple-500">🚀 Real-World Projects</h1>
            <span className="px-2 py-1 bg-purple-900 text-purple-200 rounded text-xs font-medium">
              Build Portfolio
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button className="text-purple-400 font-medium">Projects</button>
            <button 
              onClick={() => navigate('/leaderboard')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Leaderboard
            </button>
          </div>
          
          {/* View Mode Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600' : 'bg-gray-700'}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600' : 'bg-gray-700'}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 h-full w-64 bg-gray-800 z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:h-auto overflow-y-auto`}>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Filter Projects</h3>
            
            {/* Category Tabs */}
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Project Stats */}
            <div className="mt-8 p-4 bg-purple-900 bg-opacity-30 border border-purple-700 rounded">
              <h4 className="font-semibold text-purple-300 mb-3">📊 Your Progress</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Completed:</span>
                  <span className="text-green-400 font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">In Progress:</span>
                  <span className="text-yellow-400 font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Not Started:</span>
                  <span className="text-gray-400 font-medium">12</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 border border-blue-700 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">💡 Pro Tips</h4>
              <ul className="text-xs text-blue-200 space-y-1">
                <li>• Start with beginner projects</li>
                <li>• Build a diverse portfolio</li>
                <li>• Focus on code quality</li>
                <li>• Document your process</li>
              </ul>
            </div>
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
            <div className="flex items-center space-x-3 mb-4">
              <span className={`text-3xl ${currentCategory?.color}`}>{currentCategory?.icon}</span>
              <h2 className="text-3xl font-bold">{currentCategory?.name}</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Build real-world applications that showcase your skills. These projects simulate actual industry scenarios 
              and help you develop a portfolio that stands out to employers.
            </p>

            {/* Featured Project Banner */}
            {selectedCategory === 'all' && (
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6 mb-8 border border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">🌟 Featured Project</h3>
                    <p className="text-purple-200 mb-3">Build a full-stack e-commerce platform with React, Node.js, and MongoDB</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-purple-300">⏱️ 4-6 weeks</span>
                      <span className="text-purple-300">🎯 Intermediate</span>
                      <span className="text-purple-300">🔄 Full-stack</span>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Start Building
                  </Button>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg text-red-200">
              {error}
            </div>
          )}

          {/* Projects Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {projects.length === 0 && !loading ? (
              <Card className="col-span-full p-8 text-center bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">No Projects Available</h3>
                <p className="text-gray-400">
                  {selectedCategory !== 'all' 
                    ? `No projects found in the ${currentCategory?.name} category. Try another category.` 
                    : 'Check back later for new projects!'
                  }
                </p>
              </Card>
            ) : (
              projects.map((project, index) => (
                <Card 
                  key={project.id || index} 
                  className={`bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer ${
                    viewMode === 'list' ? 'flex items-center p-4' : 'p-6'
                  }`}
                  onClick={() => handleProjectClick(project.id)}
                >
                  {viewMode === 'grid' ? (
                    <>
                      {/* Project Image/Icon */}
                      <div className="mb-4">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-lg bg-gray-700"
                          />
                        ) : (
                          <div className="w-full h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-4xl">{getProjectTypeIcon(project.type)}</span>
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
                            {project.difficulty}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
                        
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>⏱️ {project.duration || '2-4 weeks'}</span>
                          <span>👥 {project.participants || 0} building</span>
                          <span>{getProjectTypeIcon(project.type)} {project.type}</span>
                        </div>
                        
                        {project.technologies && (
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-gray-600 text-gray-400 rounded text-xs">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-2">
                            <span className={`w-3 h-3 rounded-full ${
                              project.status === 'completed' ? 'bg-green-500' : 
                              project.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
                            }`} />
                            <span className="text-xs text-gray-400 capitalize">{project.status || 'not started'}</span>
                          </div>
                          
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectClick(project.id);
                            }}
                            className="bg-purple-600 hover:bg-purple-700 text-xs px-3 py-1"
                          >
                            {project.status === 'completed' ? 'View' : 'Start'}
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* List View */
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{getProjectTypeIcon(project.type)}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-lg font-semibold text-white truncate">{project.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
                            {project.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm line-clamp-1 mb-2">{project.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>⏱️ {project.duration || '2-4 weeks'}</span>
                          <span>{getProjectTypeIcon(project.type)} {project.type}</span>
                          <span>👥 {project.participants || 0} building</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <span className={`w-3 h-3 rounded-full ${
                            project.status === 'completed' ? 'bg-green-500' : 
                            project.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`} />
                          <span className="text-xs text-gray-400 capitalize">{project.status || 'not started'}</span>
                        </div>
                        
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(project.id);
                          }}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          {project.status === 'completed' ? 'View' : 'Start'}
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>

          {/* Load More Button */}
          {projects.length > 0 && (
            <div className="text-center mt-8">
              <Button
                onClick={fetchProjects}
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Load More Projects
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

export default RealWorldProjects;
