 
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero /> 
      <div id= "about">
        <About />
     </div>
     <div id="projects">
     <Projects />
     </div  >
      
     <div id="experience">
     <Experience />
     </div>
     <div id="skills">
     < Skills />
     </div>
       <div id="contact">
       <Contact />
      </div>
      
       
      
      <Footer />
    </div>
  );
}

export default App;
