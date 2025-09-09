import React, { useEffect, useRef } from 'react';
import { personalInfo, education, languages } from '../data/mock';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading-secondary text-center">About Me</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <div className="animate-on-scroll delay-1">
              <div className="about-text">
                <h3 className="heading-tertiary">Professional Journey</h3>
                <p className="text-large">
                  {personalInfo.summary}
                </p>
                <p className="about-description">
                  Throughout my career, I have consistently demonstrated my ability to deliver 
                  high-quality solutions in fast-paced environments. My experience spans across 
                  various domains including media, healthcare, and finance, giving me a broad 
                  perspective on software development challenges and best practices.
                </p>
                <p className="about-description">
                  I'm passionate about writing clean, maintainable code and staying up-to-date 
                  with the latest technology trends. My goal is to continue growing as a software 
                  engineer while contributing to innovative projects that make a real impact.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="animate-on-scroll delay-2">
              <div className="education-card card">
                <div className="card-header">
                  <h4 className="card-title">Education</h4>
                </div>
                <div className="education-content">
                  <div className="education-item">
                    <h5 className="institution">{education.institution}</h5>
                    <p className="degree">{education.degree}</p>
                    <div className="education-meta">
                      <span className="duration">{education.duration}</span>
                      <span className="type">{education.type}</span>
                    </div>
                    <div className="gpa">
                      <span className="gpa-label">GPA:</span>
                      <span className="gpa-value">{education.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll delay-3">
              <div className="languages-card card">
                <div className="card-header">
                  <h4 className="card-title">Languages</h4>
                </div>
                <div className="languages-content">
                  {languages.map((language, index) => (
                    <div key={index} className="language-item">
                      <span className="language-name">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;