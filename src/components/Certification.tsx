import { useState } from "react";
import "./styles/Certification.css";

const certifications = [
  {
    title: "React.js Developer",
    description:
      "Hands-on React.js training focused on building interactive, responsive interfaces with reusable components, managing UI state, and applying modern JavaScript practices.",
    provider: "Intern2Grow",
    date: "Nov 2025",
    image: "/images/certificate1.png",
    link: "https://drive.google.com/file/d/17ZFz7B0DxM2jMSCvND8Iu4zLtYIVBwcW/view?usp=drive_link",
  },
  {
    title: "Cloud Computing",
    description:
      "Comprehensive understanding of cloud computing concepts, services, and deployment models, with practical experience in cloud platforms and architectures.",
    provider: "NPTEL",
    date: "October 2025",
    image: "/images/certificate2.png",
    link: "https://drive.google.com/file/d/1_3Z0u4RbJ7xqJWuBxTVBkyIcbA76RVvT/view",
  },
  {
    title: "Internship in Data Structures and Algorithms",
    description:
      "Practical internship experience focused on implementing and optimizing data structures and algorithms, enhancing problem-solving skills, and applying theoretical knowledge to real-world coding challenges.",
    provider: "Techvanto Academy",
    date: "July 2025",
    image: "/images/certificate3.png",
    link: "https://drive.google.com/file/d/1ywkZ62msm4_4lam_APTQ3Khkp96fX2JD/view",
  },
];

const Certification = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="cert-section" id="certification">
      <div className="cert-container section-container">
        <h2>Certifications</h2>
        <p className="cert-subtitle">
          Professional credentials that validate my technical expertise and
          continuous learning journey.
        </p>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card ${hoveredIndex === index ? "cert-card-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} />
                <div className="cert-provider-badge">{cert.provider}</div>
                <div className="cert-date-badge">{cert.date}</div>
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-meta">
                  <span className="cert-provider-text">{cert.provider}</span>
                  <span className="cert-date-text">{cert.date}</span>
                </div>
              </div>
              <a
                className="cert-hover-hint"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
