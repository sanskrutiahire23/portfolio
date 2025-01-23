import React from "react";
import "./Skills.css";
import { FaPython, FaCuttlefish, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiFlask, SiFigma, SiAdobexd } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <FaCuttlefish /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React", icon: <FaReact /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
  ];

  return (
    <div className="skills-section">
      <h2 id="id2">Skills</h2>
      <p id="id1">The skills, tools, and technologies I am really good at:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p id="id1">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
