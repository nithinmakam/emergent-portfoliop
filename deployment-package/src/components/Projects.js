import React, { useEffect, useRef } from 'react';
import { projects } from '../data/mock';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

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

    const elements = projectsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading-secondary text-center">Featured Projects</h2>
          <p className="section-subtitle text-center">
            A showcase of key projects that demonstrate my technical expertise and problem-solving abilities
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card card animate-on-scroll delay-${(index % 3) + 1}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="view-project">View Details</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-duration">{project.duration}</span>
                </div>
                
                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-achievements">
                  <h4 className="achievements-title">Key Achievements</h4>
                  <ul className="achievements-list">
                    {project.descriptions.slice(0, 2).map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                    {project.descriptions.length > 2 && (
                      <li className="more-achievements">
                        +{project.descriptions.length - 2} more achievements
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;