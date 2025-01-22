import React from "react";
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "FactultyPaths",
      role: "Sr. UI/UX Designer",
      date: "Nov 2024 - Present",
      details: [
        " UI/UX Design intern at FacultyPaths, focused on user-friendly interfaces",
        " Created wireframes, prototypes, and conducted user testing.",
        " Focused on creating engaging, user-centered designs.",
        "Improved visual design and usability of web applications.",
      ],
    },
    
  ];

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <p className="company-name">{`/${exp.company} `}</p>
              <h3>{exp.role}</h3>
              <span>{exp.date}</span>
            </div>
            <ul>
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
