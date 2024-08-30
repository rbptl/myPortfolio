import React from 'react';
import { Link } from "react-scroll";
import '../styles/Navbar.css'

function NavBar() {
    return (
        <nav className="navbar">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
            <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={-70} duration={500}>Timeline</Link>
            <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-70} duration={500}>Resume</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
        </nav>
    );
}

export default NavBar;
