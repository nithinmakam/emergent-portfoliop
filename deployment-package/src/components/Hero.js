import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/mock';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Immediately show content without waiting for intersection observer
    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate');
      }, index * 200);
    });

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

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Nithin_Makam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="tech-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="animate-on-scroll">
                <div className="hero-intro">
                  <span className="greeting">Hello, I'm</span>
                </div>
              </div>
              
              <div className="animate-on-scroll delay-1">
                <h1 className="hero-name">{personalInfo.name}</h1>
              </div>
              
              <div className="animate-on-scroll delay-2">
                <p className="hero-title">{personalInfo.title}</p>
              </div>
              
              <div className="animate-on-scroll delay-3">
                <p className="hero-summary">{personalInfo.summary}</p>
              </div>
              
              <div className="animate-on-scroll delay-4">
                <div className="hero-contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll delay-5">
                <div className="hero-actions">
                  <button className="btn btn-primary" onClick={handleDownloadResume}>
                    Download Resume
                  </button>
                  <button className="btn btn-secondary" onClick={scrollToContact}>
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="animate-on-scroll delay-2">
                <div className="image-container">
                  <img 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name}
                    className="profile-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;