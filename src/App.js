import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="home"><Home /></div>
      <div id="timeline"><Timeline /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact-form"><ContactForm /></div>
    </div>
  );
}

export default App;
