import React from "react";
import Socials from "../Socials/Socials";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero section">
      <div className="hero-container container grid">
        <div className="hero-content grid">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Hero;
