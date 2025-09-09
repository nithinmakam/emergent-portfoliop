import React, { useEffect, useRef } from 'react';
import { certifications } from '../data/mock';
import './Certifications.css';

const Certifications = () => {
  const certificationsRef = useRef(null);

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

    const elements = certificationsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCertificationClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="certifications" className="certifications section" ref={certificationsRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading-secondary text-center">Certifications</h2>
          <p className="section-subtitle text-center">
            Professional certifications that validate my expertise in cloud technologies
          </p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`certification-card card animate-on-scroll delay-${index + 1}`}
              onClick={() => handleCertificationClick(cert.url)}
              style={{ cursor: cert.url !== '#' ? 'pointer' : 'default' }}
            >
              <div className="cert-badge">
                <img 
                  src={cert.badge} 
                  alt={`${cert.title} Badge`}
                  className="badge-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="badge-placeholder" style={{ display: 'none' }}>
                  <div className="badge-icon">🏆</div>
                </div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-provider">
                  {cert.title.includes('AWS') && 'Amazon Web Services'}
                  {cert.title.includes('Azure') && 'Microsoft'}
                  {cert.title.includes('GCP') && 'Google Cloud Platform'}
                </div>
                {cert.url !== '#' && (
                  <div className="cert-verify">
                    <span className="verify-text">Click to verify</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="cert-overlay">
                <div className="overlay-content">
                  <span>View Certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications-note animate-on-scroll delay-4">
          <div className="note-card card">
            <div className="note-icon">📋</div>
            <div className="note-content">
              <h4 className="note-title">Continuous Learning</h4>
              <p className="note-text">
                I believe in staying current with the latest technologies and best practices. 
                These certifications represent my commitment to continuous learning and 
                professional development in cloud technologies and software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;