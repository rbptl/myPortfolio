import React from 'react';
import { Link } from "react-scroll";
import '../styles/Navbar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-55} duration={500} className="home-link">Rajas Patil</Link>
            <div className="nav-links">
                <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={-55} duration={500}>Timeline</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-55} duration={500}>Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-55} duration={500}>Projects</Link>
                <Link activeClass="active" to="contact-form" spy={true} smooth={true} offset={-55} duration={500}>Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar;
