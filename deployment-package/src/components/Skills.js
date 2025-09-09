import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/mock';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate skill bars
            if (entry.target.classList.contains('skills-container')) {
              setTimeout(() => {
                setAnimatedSkills(new Set(skills.map((_, index) => index)));
              }, 500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading-secondary text-center">Technical Skills</h2>
          <p className="section-subtitle text-center">
            Technologies and frameworks I work with to build robust backend solutions
          </p>
        </div>
        
        <div className="skills-container animate-on-scroll delay-1">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level">{skill.level}</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className={`skill-progress ${animatedSkills.has(index) ? 'animate' : ''}`}
                    style={{ 
                      '--target-width': `${skill.percentage}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-summary animate-on-scroll delay-2">
            <div className="summary-card card">
              <h3 className="summary-title">Technical Expertise</h3>
              <p className="summary-text">
                With over 6 years of experience in Java backend development, I have developed 
                proficiency across the full technology stack. My expertise spans from core Java 
                programming to modern frameworks like Spring Boot, database management with 
                both SQL and NoSQL systems, and cloud platforms including AWS and Azure.
              </p>
              <div className="expertise-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">6+</span>
                  <span className="highlight-label">Years Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">15+</span>
                  <span className="highlight-label">Technologies</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">3</span>
                  <span className="highlight-label">Cloud Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;