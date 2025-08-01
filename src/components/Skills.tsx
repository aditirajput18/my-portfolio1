import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ targetValue, duration = 2000 }: { targetValue: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetValue);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, targetValue, duration]);

  return <span ref={counterRef}>{count}%</span>;
};

const AnimatedProgressBar = ({ targetValue, duration = 2000 }: { targetValue: number; duration?: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentWidth = easeOutQuart * targetValue;
      
      setWidth(currentWidth);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, targetValue, duration]);

  return (
    <div ref={barRef} className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-100 ease-out shadow-lg shadow-blue-500/30"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Vue.js", proficiency: 85 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "Tailwind CSS", proficiency: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 90 },
        { name: "Python", proficiency: 85 },
        { name: "Express.js", proficiency: 88 },
        { name: "PostgreSQL", proficiency: 82 },
        { name: "MongoDB", proficiency: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", proficiency: 95 },
        { name: "Docker", proficiency: 78 },
        { name: "AWS", proficiency: 75 },
        { name: "Jest", proficiency: 85 },
        { name: "Figma", proficiency: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 group">
                <h3 className="text-xl font-semibold text-white mb-6 text-center group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">
                          <AnimatedCounter targetValue={skill.proficiency} />
                        </span>
                      </div>
                      <AnimatedProgressBar targetValue={skill.proficiency} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;