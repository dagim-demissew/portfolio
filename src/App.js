import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroDetail from "./components/Hero-Detail/HeroDetail";
import Socials from "./components/Socials/Socials";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact.jsx";
import Service from "./components/Service-Component/Service.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Socials />
      <div className="sections">
        <HeroDetail />
        <Portfolio />
        <Skills />
        <Service />
        <Contact />
      </div>
    </>
  );
}

export default App;
