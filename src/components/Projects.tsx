import React from 'react';
import { ExternalLink, Github, Palette, ShoppingCart, Trophy } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Stellar Academy Website',
      description: 'A comprehensive coaching class website for JEE/MHT-CET/Boards preparation featuring a beautiful sky-blue themed UI, course information, and student resources.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      icon: <Palette className="text-sky-500" size={24} />,
      category: 'Web Development',
      status: 'Completed',
      highlights: [
        'Sky-blue themed responsive design',
        'Course catalog and information',
        'Student resource portal',
        'Mobile-optimized interface'
      ]
    },
    {
      title: 'Smart Product Recommendation',
      description: 'An AI-driven e-commerce platform that provides personalized product recommendations with affiliate marketing features and intelligent user behavior analysis.',
      technologies: ['React.js', 'Node.js', 'AI/ML', 'MongoDB'],
      icon: <ShoppingCart className="text-sky-500" size={24} />,
      category: 'AI & Web Development',
      status: 'In Development',
      highlights: [
        'AI-powered recommendation engine',
        'User behavior analytics',
        'Affiliate marketing integration',
        'Personalized shopping experience'
      ]
    },
    {
      title: 'codePICTure',
      description: 'A themed project specifically developed for PICT\'s Technova event, showcasing technical skills and creativity in web development.',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Git'],
      icon: <Trophy className="text-sky-500" size={24} />,
      category: 'Event Project',
      status: 'Completed',
      highlights: [
        'PICT Technova event project',
        'Creative web development',
        'Technical skill demonstration',
        'Event-specific theming'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and the projects I've built to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-sky-600 font-medium mb-3">{project.category}</p>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-xs font-medium border border-sky-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                  <button className="border border-sky-500 text-sky-500 py-2 px-4 rounded-lg hover:bg-sky-50 transition-colors duration-200 flex items-center justify-center">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Tools Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Development Workflow</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">VS Code</h4>
              <p className="text-sm text-gray-600">Primary IDE with Live Share</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Git & GitHub</h4>
              <p className="text-sm text-gray-600">Version control & collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V19H19V9Z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Netlify</h4>
              <p className="text-sm text-gray-600">Deployment & hosting</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Collaboration</h4>
              <p className="text-sm text-gray-600">Team development & sharing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;