import React, { useEffect, useRef } from 'react';
import { awards } from '../data/mock';
import './Awards.css';

const Awards = () => {
  const awardsRef = useRef(null);

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

    const elements = awardsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" className="awards section" ref={awardsRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading-secondary text-center">Awards & Recognition</h2>
          <p className="section-subtitle text-center">
            Recognition for outstanding contributions and dedication to excellence
          </p>
        </div>
        
        <div className="awards-container">
          {awards.map((award, index) => (
            <div key={award.id} className={`award-card card animate-on-scroll delay-${index + 1}`}>
              <div className="award-icon">
                <div className="trophy-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5,16L3,5H10.25L12,8L13.75,5H21L19,16H5M17.8,7H14.2L12,10.8L9.8,7H6.2L7.8,15H16.2L17.8,7M12,21L14,17H10L12,21Z"/>
                  </svg>
                </div>
              </div>
              
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <div className="award-year">{award.year}</div>
                <p className="award-description">{award.description}</p>
                
                <div className="award-highlight">
                  <div className="highlight-badge">
                    <span className="badge-text">Excellence Award</span>
                  </div>
                </div>
              </div>
              
              <div className="award-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="awards-footer animate-on-scroll delay-3">
          <div className="footer-card card">
            <div className="footer-content">
              <h4 className="footer-title">Commitment to Excellence</h4>
              <p className="footer-text">
                This recognition reflects my dedication to delivering high-quality solutions 
                and going above and beyond to meet project objectives. I consistently strive 
                to exceed expectations and contribute positively to team success.
              </p>
              <div className="achievement-stats">
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Award Received</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">On-Time Delivery</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;