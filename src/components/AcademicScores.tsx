import React from 'react';
import { Trophy, Award, Target, BookOpen, TrendingUp, Star } from 'lucide-react';

const AcademicScores = () => {
  const academicData = [
    {
      exam: 'HSC (12th)',
      year: '2024',
      percentage: '92.5%',
      board: 'Maharashtra State Board',
      icon: <BookOpen className="text-sky-500" size={24} />,
      color: 'from-sky-400 to-sky-600',
      subjects: ['Physics: 95%', 'Chemistry: 90%', 'Mathematics: 94%']
    },
    {
      exam: 'SSC (10th)',
      year: '2022',
      percentage: '95.2%',
      board: 'Maharashtra State Board',
      icon: <Award className="text-green-500" size={24} />,
      color: 'from-green-400 to-green-600',
      subjects: ['Mathematics: 98%', 'Science: 96%', 'English: 92%']
    },
    {
      exam: 'MHT-CET',
      year: '2024',
      percentage: '98.5 Percentile',
      board: 'Maharashtra Common Entrance Test',
      icon: <Target className="text-purple-500" size={24} />,
      color: 'from-purple-400 to-purple-600',
      subjects: ['Physics: 99%ile', 'Chemistry: 97%ile', 'Mathematics: 99%ile']
    },
    {
      exam: 'JEE Mains',
      year: '2024',
      percentage: '92.3 Percentile',
      board: 'National Testing Agency',
      icon: <Trophy className="text-orange-500" size={24} />,
      color: 'from-orange-400 to-orange-600',
      subjects: ['Physics: 90%ile', 'Chemistry: 88%ile', 'Mathematics: 95%ile']
    }
  ];

  return (
    <section id="academic-scores" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-600 px-4 py-2 rounded-full mb-4 animate-bounce-slow">
            <Star size={20} />
            <span className="font-medium">Academic Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Academic Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Consistent academic performance across various competitive examinations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {academicData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group animate-slide-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.exam}</h3>
                        <p className="text-white/80 text-sm">{item.year}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold mb-1">{item.percentage}</div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp size={16} />
                        <span className="text-sm">Excellent</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm">{item.board}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Subject-wise Performance
                </h4>
                <div className="space-y-3">
                  {item.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <span className="text-gray-700">{subject.split(':')[0]}</span>
                      <span className="font-semibold text-sky-600">{subject.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-fade-in-up animation-delay-800">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Academic Summary</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <BookOpen className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-sky-600 mb-2">95.2%</div>
              <div className="text-gray-600 text-sm">SSC Score</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-200">
                <Award className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">92.5%</div>
              <div className="text-gray-600 text-sm">HSC Score</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-400">
                <Target className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">98.5%ile</div>
              <div className="text-gray-600 text-sm">MHT-CET</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-600">
                <Trophy className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-2">92.3%ile</div>
              <div className="text-gray-600 text-sm">JEE Mains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicScores;