import React from "react";
import "./Hero.css";
import profilePic from "./mypic.jpeg"; // Replace this with your image path
import { FaLinkedin, FaInstagram,FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text">
        <h1>
  Hi, I’m <span className="highlight">
    {["S", "a", "n", "s", "k", "r", "u", "t", "i"].map((letter, index) => (
      <span key={index} style={{ "--i": index }}>
        {letter}
      </span>
    ))}
  </span> 👋
</h1>


          <p>
            I’m a 
            Web developer and UI/UX designer skilled in creating responsive, user-friendly websites. Focused on blending functionality with intuitive, engaging designs.
          </p>
          <p>
            Based in Pune, India <br />
            <span className="status">
              <span className="status-indicator"></span> Available for Intership
            </span>
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sanskruti-ahire-311a45274/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/_sanskrutiahire_/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://github.com/sanskrutiahire23" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
