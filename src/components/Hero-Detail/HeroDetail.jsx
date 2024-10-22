import React from "react";
import { useEffect, useRef } from "react";
import portfolioImage from "../../assets/dagimPortfolio.jpg";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./heroDetail.css";

const HeroDetail = () => {
  const textRef = useRef();
  useEffect(() => {
    const options = {
      strings: ["Developer", "Designer", "Content Creator"],
      typeSpeed: 70,
      backSpeed: 60,
      backDelay: 1500,
      showCursor: true,
      loop: true,
    };
    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="hero section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-detail-container">
            <div className="hero-image-container">
              <img className="hero-image" src={portfolioImage} />
            </div>
            <div className="hero-detail">
              <h1 className="home-title">
                Dagim <br className="line-space" /> Demissew
              </h1>
              <h2 className="home-subtitle">
                <span className="gradient-text" ref={textRef}></span>
              </h2>
              <p className="home-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                autem accusamus adipisci itaque fugiat maiores quam aliquid
                earum dolor maxime nostrum delectus pariatur eum ratione,
                quisquam quasi illum, ipsam amet.
              </p>
              <Link className="home-link">
                Resume <box-icon name="download" color="white"></box-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
