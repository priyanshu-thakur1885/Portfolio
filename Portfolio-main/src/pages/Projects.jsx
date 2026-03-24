import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Code Grimoire",
      date: "Jul 25 - Aug 25",
      tech: "HTML, CSS, JavaScript, React.js, Node.js, Tailwind",
      description: "Themed Code Snippet Manager.",
      details: [
        "Implemented tag-based search functionality within the code snippet web application: decreased code search time by 60% and increased developer satisfaction scores by 25%.",
        "Pioneered JWT-based authentication protocols, fortified application security, and minimized potential brute-force login attempts by 40%, safeguarding user code snippets and data integrity.",
        "Prototype tested with 20+ users, improved snippet discovery speed during tests."
      ],
      github: "https://github.com/AkshatRana09",
      demo: "#"
    },
    {
      title: "CookieRookie",
      date: "Jul 25 - Aug 25",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      description: "Interactive Recipe Sharing Website.",
      details: [
        "Designed intuitive user interfaces for recipe browsing, uploading, and rating, using Figma and incorporating user feedback from 50+ beta testers to improve user satisfaction scores.",
        "Engineered a robust JWT authentication system integrated with a MongoDB backend, enabling secure user management for 5,000+ active users, while streamlining access to recipes, favorites, and user comments.",
        "Revolutionized recipe discovery through ingredient and cuisine filters; enhanced search functionality by 70%, becoming the platform's second most used feature, according to user feedback and engagement metrics."
      ],
      github: "https://github.com/AkshatRana09",
      demo: "#"
    },
    {
      title: "Expensse",
      date: "Jul 25 - Aug 25",
      tech: "React Native (Expo), Node.js, Express.js, MongoDB, Clerk Authentication",
      description: "Personal Finance Management App.",
      details: [
        "Created a cross-platform wallet app for tracking daily expenses, income, and spending trends.",
        "Architected secure user authentication flow using Clerk, enabling seamless integration with existing Node.js and Express.js backend systems; system now supports 50+ daily active users.",
        "Pioneered a React Native (Expo) mobile interface providing real-time, category-based spending summaries; interface is now utilized by over 30 daily active users."
      ],
      github: "https://github.com/AkshatRana09",
      demo: "#"
    }
  ];

  return (
    <div className="page-container-comic projects-page">
      <h2 className="page-title">PROJECTS</h2>
      
      <div className="projects-grid-comic">
        {projects.map((project, index) => (
          <div 
            className="project-panel-comic" 
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <div className="sfx-text" style={{ top: '-10px', right: '10px' }}>NEW!</div>
            <div className="panel-header">
              <h3 className="panel-title">{project.title}</h3>
              <span className="panel-date">{project.date}</span>
            </div>
            
            <div className="panel-tech">
              {project.tech.split(', ').map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <p className="panel-desc">{project.description}</p>
            
            <div className="panel-actions">
              <button className="panel-btn primary">DETAILS</button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay-comic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-panel-comic"
              initial={{ scale: 0.8, rotate: 5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: -5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-panel-btn" onClick={() => setSelectedProject(null)}>×</button>

              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-date">{selectedProject.date}</p>
              
              <div className="modal-tech">
                {selectedProject.tech.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="modal-body">
                {Array.isArray(selectedProject.details) ? (
                  <ul className="modal-list">
                    {selectedProject.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{selectedProject.details || selectedProject.description}</p>
                )}
              </div>

              <div className="modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-link-btn">GITHUB</a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="modal-link-btn highlight">DEMO</a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .page-container-comic {
          padding: 40px;
          background: #fff;
          border: 4px solid #000;
          box-shadow: 15px 15px 0 #000;
          max-width: 1200px;
          width: 95%;
          margin: 0 auto;
        }

        .projects-grid-comic {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .project-panel-comic {
          border: 4px solid #000;
          padding: 30px;
          background: #fff;
          box-shadow: 8px 8px 0 #000;
          cursor: pointer;
          transition: transform 0.2s;
          position: relative;
        }

        .project-panel-comic:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0 var(--accent);
        }

        .panel-title {
          font-family: 'Bangers', cursive;
          font-size: 1.8rem;
          color: #000;
          margin-bottom: 10px;
        }

        .panel-date {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 2px 10px;
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.8rem;
        }

        .panel-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 15px 0;
        }

        .tech-badge {
          border: 1.5px solid #000;
          padding: 2px 10px;
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.8rem;
          background: #f0f0f0;
        }

        .panel-desc {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          color: #444;
          line-height: 1.4;
          margin-bottom: 20px;
        }

        .panel-btn {
          width: 100%;
          border: 3px solid #000;
          padding: 10px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          cursor: pointer;
          background: #fff;
          transition: all 0.2s;
        }

        .panel-btn:hover {
          background: var(--accent);
          color: #fff;
        }

        .modal-overlay-comic {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-panel-comic {
          background: #fff;
          border: 6px solid #000;
          padding: 50px;
          max-width: 800px;
          width: 100%;
          box-shadow: 20px 20px 0 #000;
          position: relative;
        }

        .modal-title {
          font-family: 'Bangers', cursive;
          font-size: 3rem;
          -webkit-text-stroke: 1.5px #000;
        }

        .modal-link-btn {
          display: inline-block;
          border: 4px solid #000;
          padding: 10px 30px;
          font-family: 'Bangers', cursive;
          font-size: 1.5rem;
          text-decoration: none;
          color: #000;
          margin-right: 20px;
        }

        .modal-link-btn.highlight {
          background: var(--accent);
          color: #fff;
        }

        .close-panel-btn {
          position: absolute;
          top: 20px; right: 20px;
          background: #000;
          color: #fff;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .modal-body {
          margin: 30px 0;
          max-height: 50vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #000 #fff;
        }

        .modal-list {
          list-style: none;
          padding: 0;
        }

        .modal-list li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.4;
          text-align: left;
        }

        .modal-list li::before {
          content: '✔';
          color: var(--accent);
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
};
export default Projects;
