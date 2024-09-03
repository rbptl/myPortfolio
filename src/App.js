import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <NavBar />
      <div id="home"><Home /></div>
      <div id="timeline"><Timeline /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact-form"><ContactForm /></div>
    </Layout>
  );
}

export default App;
