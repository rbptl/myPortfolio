import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; // Ensure the CSS file is correctly linked

function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const now = new Date();
    const hrs = now.getHours();
    let msg = "Hey there.";

    if (hrs >  0) msg = "Hello, Night Owl."; // Really late
    if (hrs >  5) msg = "Hello, Early Riser."; // Really early
    if (hrs >  7) msg = "Mornin' Sunshine!"; // Quite early
    if (hrs >  8) msg = "Good Morning.";      // After 6am
    if (hrs > 12) msg = "Lunchtime soon?";    // After 12pm
    if (hrs > 13) msg = "Good Afternoon.";    // After 12pm
    if (hrs > 17) msg = "Good Evening.";      // After 5pm
    if (hrs > 22) msg = "Bedtime soon?";      // After 10pm

    setGreeting(msg);
  }, []);

  return (
    <div className="home-section">
      <h1>Hi, {greeting}</h1>
      <p>My name is Rajas. I'm a Software Engineer.</p>
    </div>
  );
}

export default Home;
