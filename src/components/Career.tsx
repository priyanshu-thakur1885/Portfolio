import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Ikshan</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Built 6+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div> */}
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led two development teams on Mpro, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Development Intern</h4>
                <h5>Sapphire IQ</h5>
              </div>
              <h3 className="career-date">Nov'26 - Present</h3>
            </div>
            <p>
              Currently working as a Backend Development Intern at Sapphire IQ, contributing to assigned projects and real-world development tasks. Collaborating with mentors and team members to develop backend solutions while gaining hands-on experience with backend technologies, API development, database management, and industry-standard software development workflows. Strengthening my problem-solving, coding, and collaborative development skills through practical project work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React.js Developer</h4>
                <h5>Intern2Grow</h5>
              </div>
              <h3 className="career-date">Oct'26 - Nov'26</h3>
            </div>
            <p>
              During my React.js Developer internship at Intern2Grow, I gained practical experience in frontend development by working with React.js to build interactive and responsive user interfaces. I strengthened my understanding of component-based architecture, reusable components, state management, and modern JavaScript practices. This experience helped me improve my problem-solving skills, write cleaner code, and develop a better understanding of building user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
