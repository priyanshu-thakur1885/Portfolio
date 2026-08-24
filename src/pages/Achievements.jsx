const Achievements = () => {
  const certifications = [
    {
      title: "CLOUD COMPUTING",
      issuer: "NPTEL",
      issued: "APR 2025",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtVfByN7kOqYqP3Z6Lh6s5M7o4_8M9_O3-A&s",
      link: "https://drive.google.com/file/d/1_3Z0u4RbJ7xqJWuBxTVBkyIcbA76RVvT/view?usp=sharing"
    },
    {
      title: "LIVE INTERNSHIP WITH TECHVANTO ACADEMY ",
      issuer: "TECHVANTO ACADEMY",
      issued: "JULY 2025",
      logo: "https://images.squarespace-cdn.com/content/v1/60ec2772591a3c613cbf2c8f/c9fd7b28-1175-4927-b50a-bf41fe48aa33/Forage+Logo+-+White+on+black+%281%29.png",
      link: "https://drive.google.com/file/d/1ywkZ62msm4_4lam_APTQ3Khkp96fX2JD/view"
    },
    {
      title: "MASTER GENERATIVE AI AND GENERATIVE AI TOOLS",
      issuer: "INFOSYS",
      issued: "JUL 2025",
      logo: "https://images.credly.com/images/ae2fddb5-31ce-4d57-8ff7-6ba012a68875/credly_logo.png",
      link: "https://drive.google.com/file/d/1ZegRoDrIZKBrR8c4H7-FYgyWrsvsi6ze/view"
    },

  ];

  return (
    <div className="page-container-comic achievements-page">
      <h2 className="page-title-comic">ACHIEVEMENTS</h2>

      <div className="achievements-intro-comic">
        <div className="manga-panel hero-achievement-panel">
          <div className="sfx-text-comic">BAM!</div>
          <h3 className="section-title-comic">MILESTONES & RECOGNITION</h3>
          <p className="comic-text">A CHRONICLE OF MY TECHNICAL TRIUMPHS AND ACADEMIC CONQUESTS.</p>
        </div>
      </div>

      <div className="main-grid-comic">
        {/* Key Achievements */}
        <div className="manga-panel key-achievements-panel">
          <div className="panel-label-comic">TOP FEATS</div>
          <ul className="feat-list-comic">
            <li>
              <span className="feat-icon">🏆</span>
              <p>FINALIST - BUILD-A-THON HACKATHON. AMONG THE 5 FINALISTS OF BUILD-A-THON HACKATHON.</p>
            </li>
            <li>
              <span className="feat-icon">🏆</span>
              <p>SOLVED 250+ PROBLEMS ACROSS GFG, HACKERRANK, CODECHEF, AND LEETCODE.</p>
            </li>
          </ul>
        </div>

        {/* Certifications Grid */}
        <div className="cert-section-comic">
          <h3 className="sub-header-comic">CERTIFICATIONS</h3>
          <div className="cert-grid-comic">
            {certifications.map((cert, index) => (
              <div key={index} className="manga-panel cert-card-comic">
                <div className="cert-logo-comic">
                  <img src={cert.logo} alt={cert.issuer} />
                </div>
                <div className="cert-details-comic">
                  <h4 className="cert-name-comic">{cert.title}</h4>
                  <p className="cert-issuer-comic">{cert.issuer} | {cert.issued}</p>
                  <a href={cert.link} className="cert-link-comic">VIEW CREDENTIAL ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .achievements-page {
          padding: 60px 40px;
          min-height: 100vh;
        }

        .achievements-intro-comic {
          max-width: 1200px;
          margin: 0 auto 60px;
        }

        .hero-achievement-panel {
          text-align: center;
          padding: 60px;
          background-image: radial-gradient(circle, #eee 1.5px, transparent 1.5px);
          background-size: 20px 20px;
        }

        .section-title-comic {
          font-family: 'Bangers', cursive;
          font-size: 3.5rem;
          color: #000;
          margin-bottom: 20px;
        }

        .comic-text {
          font-family: 'Comic Neue', cursive;
          font-weight: 600;
          font-size: 1.3rem;
          color: #444;
        }

        .main-grid-comic {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          align-items: start;
        }

        .manga-panel {
          border: 4px solid #000;
          background: #fff;
          box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
          position: relative;
          padding: 40px;
        }

        .panel-label-comic {
          position: absolute;
          top: -15px;
          left: 20px;
          background: #000;
          color: #fff;
          padding: 2px 15px;
          font-family: 'Bangers', cursive;
          font-size: 1.2rem;
        }

        .feat-list-comic {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .feat-list-comic li {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 20px;
          border: 3px solid #000;
          box-shadow: 5px 5px 0 #000;
        }

        .feat-icon { font-size: 2.5rem; }

        .feat-list-comic p {
          font-family: 'Bangers', cursive;
          font-size: 1.1rem;
          color: #000;
          line-height: 1.3;
        }

        .sub-header-comic {
          font-family: 'Bangers', cursive;
          font-size: 2.5rem;
          color: #000;
          margin-bottom: 30px;
          border-bottom: 4px solid #000;
          width: fit-content;
        }

        .cert-grid-comic {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .cert-card-comic {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 25px;
          transition: 0.2s;
        }

        .cert-card-comic:hover {
          transform: translate(-5px, -5px);
          box-shadow: 15px 15px 0 var(--accent);
          border-color: var(--accent);
        }

        .cert-logo-comic {
          width: 70px;
          height: 70px;
          background: #fff;
          border: 3px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          box-shadow: 4px 4px 0 #000;
        }

        .cert-logo-comic img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .cert-name-comic {
          font-family: 'Bangers', cursive;
          font-size: 1.4rem;
          color: #000;
          line-height: 1.1;
        }

        .cert-issuer-comic {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 0.9rem;
          color: #666;
        }

        .cert-link-comic {
          font-family: 'Bangers', cursive;
          font-size: 1rem;
          color: var(--accent-secondary);
          text-decoration: underline;
          margin-top: auto;
        }

        .cert-link-comic:hover {
          color: var(--accent);
        }

        @media (max-width: 1000px) {
          .main-grid-comic { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .cert-grid-comic { grid-template-columns: 1fr; }
          .section-title-comic { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};
export default Achievements;
