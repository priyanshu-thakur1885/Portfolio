const Experience = () => {
  return (
    <div className="page-container-comic experience-page">
      <h2 className="page-title-comic">EXPERIENCE</h2>

      <div className="experience-main-comic">
        {/* CSE Pathshala */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">FOUNDATION_ARC</div>
          <div className="training-header-comic">
            <h3 className="comic-company">CSE PATHSHALA</h3>
            <span className="comic-date">FOUNDATION</span>
          </div>
          <p className="comic-role">COMPUTER SCIENCE TRAINING</p>
          <ul className="comic-feat-list">
            <li>Explored core concepts such as data structures, problem-solving techniques, and logical thinking.</li>
            <li>Developed a habit of tackling challenges methodically through structured learning and consistent practice.</li>
            <li>Improved technical skills and boosted confidence in approaching real-world problems.</li>
            <li>Cultivated a developer mindset focused on consistency and continuous learning.</li>
          </ul>
        </div>

        {/* NGO Experience */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">SOCIAL_IMPACT</div>
          <div className="training-header-comic">
            <h3 className="comic-company">NGO EXPERIENCE</h3>
            <span className="comic-date">VOLUNTEER</span>
          </div>
          <p className="comic-role">COMMUNITY ENGAGEMENT & SUPPORT</p>
          <ul className="comic-feat-list">
            <li>Contributed to initiatives aimed at supporting and uplifting others, fostering personal and social growth.</li>
            <li>Engaged actively in community activities involving coordination and real-life problem-solving.</li>
            <li>Strengthened communication skills and developed a deeper understanding of responsibility, teamwork, and empathy.</li>
            <li>Balanced technical goals with an understanding of the importance of giving back to society.</li>
          </ul>
        </div>

        {/* MERN Developer */}
        <div className="manga-panel training-panel-comic">
          <div className="panel-label-comic">PROJECT_INTELLIGENCE</div>
          <div className="training-header-comic">
            <h3 className="comic-company">MERN STACK DEVELOPER</h3>
            <span className="comic-date">2024 - PRESENT</span>
          </div>
          <p className="comic-role">FULL-STACK WEB DEVELOPMENT</p>
          <ul className="comic-feat-list">
            <li>Built scalable RESTful APIs with Node.js & Express for real-world NGO platforms.</li>
            <li>Implemented secure JWT-based authentication and role-based access control.</li>
            <li>Architected complex state management using Redux & React Hooks for high performance.</li>
            <li>Integrated Cloudinary for media management and optimized asset delivery at scale.</li>
          </ul>
        </div>


      </div>

      <style>{`
        .experience-page {
          padding: 60px;
          background: #fff;
          border: 4px solid #000;
          box-shadow: 15px 15px 0 rgba(0,0,0,0.1);
        }

        .page-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 5rem;
          color: #000;
          text-align: center;
          margin-bottom: 50px;
          -webkit-text-stroke: 2.5px #000;
          text-shadow: 6px 6px 0 var(--accent);
        }

        .experience-main-comic {
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 #000;
          position: relative;
          padding: 40px;
          transition: transform 0.2s;
        }

        .manga-panel:hover {
          transform: translate(-4px, -4px);
          box-shadow: 14px 14px 0 var(--accent);
        }

        .panel-label-comic {
          position: absolute;
          top: -15px;
          left: 20px;
          background: #000;
          color: #fff;
          padding: 4px 20px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          border: 2px solid #000;
        }

        .training-header-comic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 4px solid #000;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }

        .comic-company {
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: #000;
          line-height: 1;
        }

        .comic-date {
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
          color: #fff;
          background: #000;
          padding: 5px 20px;
          white-space: nowrap;
        }

        .comic-role {
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--accent);
          margin-bottom: 25px;
          text-transform: uppercase;
        }

        .comic-feat-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .comic-feat-list li {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 1.2rem;
          color: #333;
          padding-left: 35px;
          position: relative;
          line-height: 1.4;
        }

        .comic-feat-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 1.5rem;
          font-weight: 900;
        }

        @media (max-width: 768px) {
          .page-title-comic { font-size: 3rem; }
          .training-header-comic { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
