import React from 'react';
import './Navbar.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">PIXEL VAULT</div>
        <nav className="nav">
          <a href="#link1">Link1</a>
          <a href="#link2">Link2</a>
          <a href="#link3">Link3</a>
          <a href="#link4">Link4</a>
        </nav>
        <button className="get-started">GET STARTED</button>
      </header>

      <main className="main">
        <div className="overlay">
          <h1>Your Life, Secured and Accessible Anywhere</h1>
           
          <button className="cta-button">GET STARTED</button>
        </div>
      </main>
    </div>
  );
};

export default App;