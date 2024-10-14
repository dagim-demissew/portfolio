import React from "react";
import Socials from "../Socials/Socials";
import HeroDetail from "../Hero-Detail/HeroDetail";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero section">
      <div className="hero-container container">
        <div className="hero-content">
          <HeroDetail />
        </div>
      </div>
    </div>
  );
};

export default Hero;
