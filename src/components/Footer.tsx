import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 flex items-center justify-center space-x-2">
              <span>© {currentYear} Alex Johnson. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of coffee.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;