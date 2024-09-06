import React from 'react';
import { ThemeProvider } from './ThemeContext';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Layout from './components/Layout';
// import Fab from '@mui/material/Fab';
// import Tooltip from '@mui/material/Tooltip';
// import ThemeIcon from '@mui/icons-material/Brightness4';
import './App.css';
import './styles/colors.css'; 
import ReactGA from 'react-ga';
import {useEffect} from 'react'

function App() {
  // const themeContext = useTheme(); // First, capture the entire context

  // const { toggleTheme } = themeContext; // Now we destructure safely
  useEffect(() => {
    ReactGA.initialize('G-SWYR3F81L8');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  return (
    <ThemeProvider>
      <Layout>
        <NavBar />
        <div id="home"><Home /></div>
        <div id="timeline"><Timeline /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="contact-form"><ContactForm /></div>
        {/* <Tooltip title="Toggle Theme" placement="left">
          <Fab color="primary" aria-label="toggle theme" onClick={toggleTheme} style={{ position: 'fixed', bottom: 20, right: 20 }}>
            <ThemeIcon />
          </Fab>
        </Tooltip> */}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
