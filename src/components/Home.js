import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; // Ensure the CSS file is correctly linked

function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const now = new Date();
    const hrs = now.getHours();
    let msg = "Hey there!";

    if (hrs >  0) msg = "Hello, Night Owl!"; // Really late
    if (hrs >  5) msg = "Hello, Early Riser!"; // Really early
    if (hrs >  7) msg = "Mornin' Sunshine!"; // Quite early
    if (hrs > 12) msg = "Lunchtime soon?";    // After 12pm
    if (hrs > 14) msg = "Good Afternoon.";    // After 12pm
    if (hrs > 16) msg = "Good Evening.";      // After 5pm
    if (hrs > 22) msg = "Bedtime soon?";      // After 10pm

    setGreeting(msg);
  }, []);

  return (
    <div className="home-container">
      <div className="text-content">
        <h1>{greeting}</h1>
        <h2>My name is <span>Rajas</span></h2>
        <p>And I'm a Software Engineer</p>
        <div className="social-icons">
          {/* Icons can be added here */}
        </div>
      </div>
    <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
              src = "" alt = "Rajas"/>
          <img
            class="img img3"
            src = "/assets/Website.png " alt = "Rajas"/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
