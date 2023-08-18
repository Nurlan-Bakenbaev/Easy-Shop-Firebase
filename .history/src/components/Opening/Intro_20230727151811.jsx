// src/Intro.js
import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro = () => {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    // After 3000 milliseconds (3 seconds), hide the intro
    const introTimer = setTimeout(() => {
      setIntroVisible(false);
    }, 5000);

    // Clear the timer when the component unmounts (optional)
    return () => clearTimeout(introTimer);
  }, []);

  if (!introVisible) {
    // Return null to render nothing if introVisible is false
    return null;
  }

  return (
    <div className="intro-container">
      <h1 className="fade-in-out">Welcome to My Website</h1>
    </div>
  );
};

export default Intro;
