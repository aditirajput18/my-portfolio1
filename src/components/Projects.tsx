import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern web development techniques with smooth animations and optimized performance.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;