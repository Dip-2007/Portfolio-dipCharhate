import React from 'react';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <span className="ml-3 text-xl font-bold">Dip Charhate</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Computer Science Engineering student passionate about web development, 
              DSA, and AI. Building the future one project at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:dipcharhate94@gmail.com"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/Dip-2007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/dipcharhate2007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Education & Status */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Current Status</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sky-400 font-medium">🎓 Student at PICT Pune</p>
                <p className="text-gray-400 text-sm">Computer Science Engineering - 2nd Year</p>
              </div>
              <div>
                <p className="text-sky-400 font-medium">📊 Academic Performance</p>
                <p className="text-gray-400 text-sm">GPA: 9.25/10</p>
              </div>
              <div>
                <p className="text-sky-400 font-medium">🚀 Currently Preparing</p>
                <p className="text-gray-400 text-sm">Smart India Hackathon 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-sky-400" />
              <span>by Dip Charhate</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Dip Charhate. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;