import React from "react";
import './Projects.css';
import aiImage from "./SMS.png"; // Replace with your image path
import youtubeImage from "./paper.png"; // Replace with your image path
import goldImage from "./GoldGYM.png"; // Replace with your image path

const Projects = () => {
  const projects = [
    {
      title: "SMS Spam Classifier",
      description:
        "The system classifies SMS messages as Spam or Ham using NLP techniques. It is trained on labeled datasets with Naive Bayes and Logistic Regression for over 98% accuracy. The model analyzes incoming messages and provides real-time detection results.",
      image: aiImage,
    },
    {
      title: "Rock, Paper, Scissors game",
      description:
        "In this Rock, Paper, Scissors game, the user selects a card (Rock, Paper, or Scissors) by clicking on one of the cards. Once the card is selected, it appears in the box. After the user clicks the Play button, the computer randomly selects a card, and the result is displayed, showing whether the user wins or loses.",
      image: youtubeImage,
    },
    {
      title: " GOLD’S Gym Website Design",
      description:
        "Empowering fitness journey with expert trainers and tailored programs. Diverse workouts: beginner, advanced, weight loss, and strength training. Focus on Overall health: Use mind, body, and fitness balance. Diet plans, fitness gear, and inspiring gallery included.",
      image: goldImage,
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
