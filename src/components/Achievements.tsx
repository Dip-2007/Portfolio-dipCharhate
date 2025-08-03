import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Users className="text-sky-500" size={32} />,
      title: 'Competition Judge Assistant',
      description: 'Served as a judging assistant for an app development competition, evaluating projects and providing feedback to participants.',
      category: 'Leadership',
      date: '2024',
      highlights: ['Evaluated multiple app projects', 'Provided constructive feedback', 'Gained experience in technical assessment']
    },
    {
      icon: <Target className="text-sky-500" size={32} />,
      title: 'Smart India Hackathon Preparation',
      description: 'Actively preparing and building skills for the Smart India Hackathon, focusing on problem-solving and innovative solutions.',
      category: 'Competition',
      date: '2024-25',
      highlights: ['Technical skill development', 'Problem-solving focus', 'Team collaboration preparation']
    },
    {
      icon: <Award className="text-sky-500" size={32} />,
      title: 'Academic Excellence',
      description: 'Maintaining a strong academic record with a 9.25 GPA while balancing practical learning and project development.',
      category: 'Academic',
      date: 'Ongoing',
      highlights: ['9.25/10 GPA', 'Consistent performance', 'Theory-practice balance']
    },
    {
      icon: <Zap className="text-sky-500" size={32} />,
      title: 'Active Project Development',
      description: 'Continuously building and deploying projects to enhance skills in web development, AI, and problem-solving.',
      category: 'Technical',
      date: '2023-Present',
      highlights: ['Multiple project completions', 'Skill diversification', 'Continuous learning mindset']
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milestones and accomplishments that reflect my dedication to learning and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500">{achievement.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{achievement.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {achievement.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Stats</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">9.25</div>
              <div className="text-sky-100">Current GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-sky-100">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2nd</div>
              <div className="text-sky-100">Year Student</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">17</div>
              <div className="text-sky-100">Years Old</div>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Future Goals</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-sky-500" size={32} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">SIH Success</h4>
              <p className="text-gray-600 text-sm">Win or place well in Smart India Hackathon with innovative solutions</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-sky-500" size={32} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Full-Stack Mastery</h4>
              <p className="text-gray-600 text-sm">Become proficient in MERN stack and modern development practices</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-sky-500" size={32} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Industry Impact</h4>
              <p className="text-gray-600 text-sm">Build projects that solve real-world problems and make a difference</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;