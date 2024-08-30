import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="home"><Home /></div>
      {/* <div id="timeline"><Timeline /></div>
      <div id="resume"><Resume /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div> */}
    </div>
  );
}

export default App;
