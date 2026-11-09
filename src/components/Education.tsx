import "./styles/Education.css";

const educationDetails = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.9*",
    date: "Since August 2023",
  },
  {
    institution: "Aadharshila Senior Secondary School",
    location: "Palampur, Himachal Pradesh",
    degree: "Intermediate",
    score: "Percentage: 76.4%",
    date: "April 2020 - March 2022",
  },
  {
    institution: "Aadharshila Senior Secondary School",
    location: "Palampur, Himachal Pradesh",
    degree: "Matriculation",
    score: "Percentage: 88.2%",
    date: "April 2019 - March 2020",
  },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="education-container section-container">
        <h2>Education</h2>
        <div className="education-grid">
          {educationDetails.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-card-header">
                <h3>{item.institution}</h3>
                <span className="education-date">{item.date}</span>
              </div>
              <p className="education-location">{item.location}</p>
              <h4 className="education-degree">{item.degree}</h4>
              <p className="education-score">{item.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
