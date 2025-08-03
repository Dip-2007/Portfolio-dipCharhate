import React from 'react';
import { ArrowDown, Code, Brain, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Animated Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Dip Charhate" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 animate-gradient-x">Dip - Charhate</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Computer Science Engineering Student at PICT Pune
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A passionate 17-year-old developer specializing in <span className="font-semibold text-sky-600">Web Development</span>, 
              <span className="font-semibold text-sky-600"> Data Structures & Algorithms</span>, and 
              <span className="font-semibold text-sky-600"> AI</span>. Currently in my 2nd year at PICT with a 
              <span className="font-semibold text-sky-600"> 9.25 GPA</span>.
            </p>
          </div>

          {/* Interest Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Code size={20} className="text-sky-500" />
              <span className="text-gray-700 font-medium">MERN Stack</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Brain size={20} className="text-sky-500" />
              <span className="text-gray-700 font-medium">DSA</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Rocket size={20} className="text-sky-500" />
              <span className="text-gray-700 font-medium">AI & ML</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-800">
            <a
              href="#projects"
              className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-sky-500 text-sky-500 px-8 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-200 font-medium"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-fade-in-up animation-delay-1000">
            <a
              href="#about"
              className="text-gray-400 hover:text-sky-500 transition-colors duration-200 animate-bounce"
            >
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;