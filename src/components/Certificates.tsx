import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Medal } from 'lucide-react';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certificates = [
    {
      title: 'Web Development Fundamentals',
      issuer: 'FreeCodeCamp',
      date: '2024',
      category: 'web-dev',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive course covering HTML, CSS, JavaScript fundamentals',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      verified: true
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2024',
      category: 'programming',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced JavaScript concepts and algorithmic thinking',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      verified: true
    },
    {
      title: 'React.js Development',
      issuer: 'Coursera',
      date: '2024',
      category: 'web-dev',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Building modern web applications with React.js',
      skills: ['React.js', 'JSX', 'Component Architecture'],
      verified: true
    },
    {
      title: 'Git and GitHub Mastery',
      issuer: 'GitHub',
      date: '2023',
      category: 'tools',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Version control and collaborative development',
      skills: ['Git', 'GitHub', 'Version Control'],
      verified: true
    },
    {
      title: 'Introduction to AI and Machine Learning',
      issuer: 'edX',
      date: '2024',
      category: 'ai-ml',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fundamentals of artificial intelligence and machine learning',
      skills: ['Python', 'Machine Learning', 'AI Concepts'],
      verified: false
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2023',
      category: 'web-dev',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Creating mobile-first, responsive web designs',
      skills: ['CSS Grid', 'Flexbox', 'Media Queries'],
      verified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Certificates', icon: <Award size={16} /> },
    { id: 'web-dev', label: 'Web Development', icon: <Star size={16} /> },
    { id: 'programming', label: 'Programming', icon: <Medal size={16} /> },
    { id: 'tools', label: 'Tools & Technologies', icon: <CheckCircle size={16} /> },
    { id: 'ai-ml', label: 'AI & ML', icon: <Award size={16} /> }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-600 px-4 py-2 rounded-full mb-4 animate-bounce-slow">
            <Award size={20} />
            <span className="font-medium">Certified Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Professional certifications and courses completed to enhance my technical expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-sky-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredCertificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Verified Badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 animate-pulse">
                    <CheckCircle size={12} />
                    <span>Verified</span>
                  </div>
                )}

                {/* View Certificate Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white/90 backdrop-blur-sm text-gray-800 py-2 px-4 rounded-lg hover:bg-white transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-xs font-medium">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-200">
                  {cert.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-sky-100 hover:text-sky-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Award size={16} />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100 animate-fade-in-up animation-delay-800">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certification Stats</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Award className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-sky-600 mb-2">{certificates.length}</div>
              <div className="text-gray-600">Total Certificates</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-200">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{certificates.filter(c => c.verified).length}</div>
              <div className="text-gray-600">Verified</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-400">
                <Star className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-600">
                <Medal className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
              <div className="text-gray-600">Latest Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;