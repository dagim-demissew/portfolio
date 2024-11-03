import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a href="#hero" className="nav-link">
          <box-icon color="#111" className="nav-link-icon" name="user" />
          Dagim
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#portfolio">
            <box-icon color="#111" className="nav-link-icon" name="layout" />
            portifolio
          </a>
          <a href="#skills" className="nav-link">
            <box-icon color="#111" className="nav-link-icon" name="layer" />
            skills
          </a>
          <a href="#services" className="nav-link">
            <box-icon color="#111" name="briefcase-alt-2" />
            services
          </a>
          <a href="#contact" className="nav-link">
            <box-icon
              color="#111"
              className="nav-link-icon"
              name="paper-plane"
            />
            contact
          </a>
        </div>
        <Link className="nav-menu-link" onClick={handleToggle}>
          <box-icon color="#111" name="menu" />
        </Link>
        <div className={`nav-menu ${toggle ? "display" : ""}`}>
          <Link className="nav-link small-screen" onClick={handleToggle}>
            <box-icon name="x"></box-icon>
          </Link>
          <a className="nav-link" href="#portfolio">
            <box-icon color="#111" className="nav-link-icon" name="layout" />
            portifolio
          </a>
          <a href="#skills" className="nav-link">
            <box-icon color="#111" className="nav-link-icon" name="layer" />
            skills
          </a>
          <a href="#services" className="nav-link">
            <box-icon color="#111" name="briefcase-alt-2" />
            services
          </a>
          <a href="#contact" className="nav-link">
            <box-icon
              color="#111"
              className="nav-link-icon"
              name="paper-plane"
            />
            contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
