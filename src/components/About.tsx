import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Design Focus",
      description: "Creating intuitive user experiences with attention to visual design and usability."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-full flex items-center justify-center border border-blue-500/20">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    AR
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                I am a DevOps engineer with a strong foundation in modern infrastructure and automation tools. My expertise includes version control with Git, containerization using Docker, and managing Linux-based environments. I have experience deploying and managing web servers with Nginx, orchestrating containerized applications using Kubernetes, and implementing end-to-end CI/CD pipelines for faster and more reliable software delivery.

                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                Additionally, I work with AWS cloud services to build scalable, secure, and cost-effective infrastructure. I am passionate about automation, system reliability, and optimizing development workflows to bridge the gap between development and operations teams.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {['JavaScript',  'Node.js', 'CI/CD','Docker','AWS','Kubernetes', 'Python'].map((tech) => (
                    <span key={tech} className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center group border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;