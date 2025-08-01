import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Aditi Rajput
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay-1">
            Devops
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          DevOps practitioner with expertise in Git, Docker, Linux, Nginx, Kubernetes, CI/CD, and AWS. I focus on building scalable, automated, and reliable infrastructure to support efficient software delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View My Work
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-delay-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-500 hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;