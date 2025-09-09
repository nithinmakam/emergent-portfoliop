import React from 'react';
import { personalInfo } from '../data/mock';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-name">{personalInfo.name}</h3>
              <p className="footer-tagline">Java Backend Developer</p>
              <p className="footer-description">
                Building robust and scalable backend solutions with 6+ years of experience 
                in Java, Spring Boot, and cloud technologies.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-section-title">Quick Links</h4>
                <div className="footer-nav">
                  <a href="#about" className="footer-link">About</a>
                  <a href="#experience" className="footer-link">Experience</a>
                  <a href="#projects" className="footer-link">Projects</a>
                  <a href="#skills" className="footer-link">Skills</a>
                </div>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-section-title">Connect</h4>
                <div className="footer-social">
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19S5.19 5.95 5.19 6.88A1.69 1.69 0 0 0 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="footer-social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </svg>
                    Email
                  </a>
                  <a 
                    href={personalInfo.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                    Portfolio
                  </a>
                </div>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-section-title">Contact</h4>
                <div className="footer-contact">
                  <div className="footer-contact-item">
                    <span className="contact-icon">📍</span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="footer-contact-item">
                    <span className="contact-icon">📱</span>
                    <a href={`tel:${personalInfo.phone}`} className="footer-link">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <div className="footer-tech">
                <span className="tech-text">Built with React & ❤️</span>
              </div>
            </div>
            
            <button 
              className="scroll-to-top" 
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;