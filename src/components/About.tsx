import React from 'react';
import { GraduationCap, MapPin, Calendar, Trophy, Sparkles, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-100 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-100 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-100 rounded-full animate-float animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-600 px-4 py-2 rounded-full mb-4 animate-bounce-slow">
            <Sparkles size={20} />
            <span className="font-medium">Get to know me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Passionate about technology and constantly learning new skills to build impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Image/Visual */}
          <div className="relative animate-slide-in-left">
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl shadow-lg animate-pulse"></div>
                  <div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Student studying" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-500/30 to-transparent"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center animate-bounce">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800 animate-fade-in-up">Computer Science</h3>
                  <p className="text-sky-600 font-medium animate-fade-in-up animation-delay-200">Engineering Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-fade-in-up">Education & Background</h3>
              <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
                I'm currently pursuing Computer Science Engineering in my 2nd year at the prestigious 
                Pune Institute of Computer Technology (PICT). With a strong academic record and a 
                passion for technology, I'm dedicated to mastering both theoretical concepts and 
                practical applications.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up animation-delay-400">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="text-sky-500" size={24} />
                  <h4 className="font-semibold text-gray-800">Education</h4>
                </div>
                <p className="text-gray-600 text-sm">PICT, Pune</p>
                <p className="text-gray-600 text-sm">CSE - 2nd Year</p>
                <p className="text-sky-600 font-semibold text-sm">GPA: 9.25/10</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="text-sky-500" size={24} />
                  <h4 className="font-semibold text-gray-800">Personal</h4>
                </div>
                <p className="text-gray-600 text-sm">Born: Jan 25, 2007</p>
                <p className="text-gray-600 text-sm">Age: 17 years</p>
                <p className="text-sky-600 font-semibold text-sm">Pune, Maharashtra</p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-600">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center animate-pulse">
                <Trophy className="text-sky-500 mr-2" size={20} />
                Current Focus
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Mastering Data Structures & Algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Building full-stack applications with MERN
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Exploring AI and Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Preparing for Smart India Hackathon
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden animate-fade-in-up animation-delay-800">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 animate-spin-slow"></div>
          <h3 className="text-2xl font-bold text-center mb-8 relative z-10">Personal Highlights</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="animate-bounce-slow">
              <div className="text-3xl font-bold mb-2 flex items-center justify-center">
                <TrendingUp className="mr-2" size={32} />
                9.25
              </div>
              <div className="text-sky-100">Current GPA</div>
            </div>
            <div className="animate-bounce-slow animation-delay-200">
              <div className="text-3xl font-bold mb-2">17</div>
              <div className="text-sky-100">Years Old</div>
            </div>
            <div className="animate-bounce-slow animation-delay-400">
              <div className="text-3xl font-bold mb-2">2nd</div>
              <div className="text-sky-100">Year Student</div>
            </div>
            <div className="animate-bounce-slow animation-delay-600">
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-sky-100">Active Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;