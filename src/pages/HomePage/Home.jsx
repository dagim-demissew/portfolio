import React from "react";
import Portfolio from "./../../components/Portfolio/Portfolio.jsx";
import Skills from "./../../components/Skills/Skills.jsx";
import Contact from "./../../components/Contact/Contact.jsx";
import Service from "./../../components/Service-Component/Service.jsx";
import HeroDetail from "./../../components/Hero-Detail/HeroDetail.jsx";
import "./home.css";

const Home = () => {
  return (
    <div className="sections">
      <HeroDetail />
      <Portfolio />
      <Skills />
      <Service />
      <Contact />
      <div className="footer">
        <p>&copy; 2024 Dagim Demissew. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
