import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; // Ensure the CSS file is correctly linked
import { Link } from 'react-scroll';

function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hrs = now.getHours();
      let msg = "Hey there!";

      if (hrs < 5) msg = "Hello, Night Owl!";
      else if (hrs < 8) msg = "Hello, Early Riser!";
      else if (hrs < 12) msg = "Hey, Mornin' Sunshine!";
      else if (hrs < 14) msg = "Hey, Lunchtime soon?";
      else if (hrs < 18) msg = "Hey, Fine Afternoon, huh?";
      else if (hrs < 22) msg = "Hey, What's for Dinner?";
      else msg = "Hey, Bedtime soon?";

      setGreeting(msg);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 3600000); // Update every hour

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on initial load
  }, []);



  return (
    <div className="home-container">
      <div className="text-content slide-in-right">
        <h1>{greeting}</h1>
        <h2>I am <span>Rajas Patil</span></h2>
        <p>And I'm a curious Software Engineer who defies the stereotype by solving problems instead of creating them.</p>
        <p>And don't worry—my cat is perfectly safe!</p>

        <div className="button-container">
          <a href="assets/ResumeRajas.pdf" download="ResumeRajas.pdf" className="button">
            Resume
          </a>

          <Link to="contact-form" activeClass="active" spy={true} smooth={true} offset={-55} duration={500} className="button">
            Get In Touch!
          </Link>
        </div>
        <div className="social-icons">
          {/* Icons can be added here */}
        </div>
      </div>
      <div className="person slide-in-left">
        <div className="container">
          <div className="container-inner">
            <img className="circle" src="" alt="Rajas" />
            <img className="img img3" src="assets/Website.webp" alt="Rajas" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
