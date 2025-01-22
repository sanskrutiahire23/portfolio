import React from 'react';
import ReactDOM from 'react-dom';
import './Herosection.css';

// App Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer with expertise in React, Python (Flask), and UI/UX design. I specialize in creating user-friendly, visually appealing, and effective web applications.</p>
    </section>
  );
};

// Skills Section
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Python (Flask)</li>
        <li>UI/UX Design</li>
        <li>Figma</li>
      </ul>
    </section>
  );
};

// Projects Section
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Project 1: Portfolio Website</h3>
        <p>A responsive and visually appealing portfolio website built with React and styled-components.</p>
      </div>
      <div className="project-card">
        <h3>Project 2: E-commerce App</h3>
        <p>A full-stack e-commerce application using React, Flask, and PostgreSQL with a focus on user experience.</p>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Email: myemail@example.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/myprofile">linkedin.com/in/myprofile</a></p>
      <p>GitHub: <a href="https://github.com/mygithub">github.com/mygithub</a></p>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 MyPortfolio. All rights reserved.</p>
    </footer>
  );
};