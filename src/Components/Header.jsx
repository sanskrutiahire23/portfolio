import React from "react";
import resume from './Resume.pdf'
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>Sanskruti</span>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="actions">
           
          <a href={resume} download={resume} className="btn-download-cv">Download Resume</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
