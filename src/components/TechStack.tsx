import { FaAws } from "react-icons/fa";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    icon: null,
  },
];

const TechStack = () => {
  return (
    <div className="techstack" id="skill">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-circle">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                <FaAws aria-hidden="true" />
              )}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
