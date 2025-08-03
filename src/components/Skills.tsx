import React from 'react';
import { Code, Server, Database, PenTool as Tool, GitBranch, Palette, Zap, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-sky-500" size={24} />,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 }
      ]
    },
    {
      title: 'Backend & Server',
      icon: <Server className="text-sky-500" size={24} />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'REST APIs', level: 70 },
        { name: 'MongoDB', level: 60 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Tool className="text-sky-500" size={24} />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Netlify', level: 80 },
        { name: 'Postman', level: 70 }
      ]
    },
    {
      title: 'Learning & Exploring',
      icon: <GitBranch className="text-sky-500" size={24} />,
      skills: [
        { name: 'Data Structures', level: 60 },
        { name: 'Algorithms', level: 55 },
        { name: 'AI/ML Basics', level: 30 },
        { name: 'Python', level: 45 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sky-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200/30 rounded-full animate-float animation-delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-600 px-4 py-2 rounded-full mb-4 animate-bounce-slow">
            <Zap size={20} />
            <span className="font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6 animate-fade-in-up">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animate-fade-in-up" style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-sky-400 to-sky-600 h-2 rounded-full transition-all duration-1000 ease-out animate-skill-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center relative z-10 animate-fade-in-up animation-delay-800">
          <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center justify-center">
            <Star className="text-sky-500 mr-2" size={24} />
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
              'MongoDB', 'Git', 'GitHub', 'VS Code', 'Netlify', 'Tailwind CSS',
              'RESTful APIs', 'JSON', 'npm', 'Responsive Design'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:scale-110 hover:bg-sky-50 hover:text-sky-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;