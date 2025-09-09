import React, { useEffect, useRef, useState } from 'react';
import { experience } from '../data/mock';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);
  const [expandedProject, setExpandedProject] = useState(null);

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

    const elements = experienceRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleProject = (companyId, projectIndex) => {
    const projectKey = `${companyId}-${projectIndex}`;
    setExpandedProject(expandedProject === projectKey ? null : projectKey);
  };

  return (
    <section id="experience" className="experience section" ref={experienceRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading-secondary text-center">Professional Experience</h2>
        </div>
        
        <div className="experience-timeline">
          {experience.map((job, jobIndex) => (
            <div key={job.id} className={`timeline-item animate-on-scroll delay-${jobIndex + 1}`}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="timeline-content">
                <div className="job-header card">
                  <div className="job-meta">
                    <span className="duration-badge">{job.duration}</span>
                    <span className="domain-badge">{job.domain}</span>
                  </div>
                  
                  <h3 className="company-name">{job.company}</h3>
                  <h4 className="position-title">{job.position}</h4>
                  
                  {job.client && (
                    <div className="client-info">
                      <span className="client-label">Client:</span>
                      <span className="client-name">{job.client}</span>
                    </div>
                  )}
                  
                  {job.clients && (
                    <div className="client-info">
                      <span className="client-label">Clients:</span>
                      <span className="client-name">{job.clients}</span>
                    </div>
                  )}
                </div>
                
                <div className="projects-section">
                  <h5 className="projects-title">Key Projects</h5>
                  <div className="projects-grid">
                    {job.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="project-card card">
                        <div className="project-header" onClick={() => toggleProject(job.id, projectIndex)}>
                          <div className="project-info">
                            <h6 className="project-name">{project.name}</h6>
                            <span className="project-duration">{project.duration}</span>
                          </div>
                          <div className={`expand-icon ${expandedProject === `${job.id}-${projectIndex}` ? 'expanded' : ''}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M7 10l5 5 5-5z"/>
                            </svg>
                          </div>
                        </div>
                        
                        <div className="tech-stack">
                          {project.techStack.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-badge">{tech}</span>
                          ))}
                        </div>
                        
                        <div className={`project-details ${expandedProject === `${job.id}-${projectIndex}` ? 'expanded' : ''}`}>
                          <div className="project-descriptions">
                            <h6 className="descriptions-title">Key Achievements:</h6>
                            <ul className="descriptions-list">
                              {project.descriptions.map((desc, descIndex) => (
                                <li key={descIndex}>{desc}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;