import React from "react";
import "./VM.css";

const RotatingCircleBanner = () => {
  return (
    <div className="banner-container">
      {/* Rotating Circle */}
      <div className="rotating-circle"></div>
      
      {/* Banner Content */}
      <div className="banner-content">
        <h1>Welcome to Our Service</h1>
        <p>Your journey starts here. Get ready to explore!</p>
        <button className="banner-button">Get Started</button>
      </div>
    </div>
  );
};

export default RotatingCircleBanner;
