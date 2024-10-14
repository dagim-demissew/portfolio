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
        <Link className="nav-link">
          <box-icon color="#111" className="nav-link-icon" name="user" />
          Dagim
        </Link>
        <div className="nav-links">
          <Link className="nav-link">
            <box-icon color="#111" name="briefcase-alt-2" />
            services
          </Link>
          <Link className="nav-link">
            <box-icon color="#111" className="nav-link-icon" name="layer" />
            skills
          </Link>
          <Link className="nav-link">
            <box-icon color="#111" className="nav-link-icon" name="layout" />
            portifolio
          </Link>
          <Link className="nav-link">
            <box-icon
              color="#111"
              className="nav-link-icon"
              name="paper-plane"
            />
            contact
          </Link>
        </div>
        <Link className="nav-menu-link" onClick={handleToggle}>
          <box-icon color="#111" name="menu-alt-right" />
          menu
        </Link>
        <div className={`nav-menu ${toggle ? "display" : ""}`}>
          <Link className="nav-link small-screen" onClick={handleToggle}>
            <box-icon name="x"></box-icon>
          </Link>
          <Link className="nav-link">
            <box-icon color="#111" name="briefcase-alt-2" />
            services
          </Link>
          <Link className="nav-link">
            <box-icon color="#111" className="nav-link-icon" name="layer" />
            skills
          </Link>
          <Link className="nav-link">
            <box-icon color="#111" className="nav-link-icon" name="layout" />
            portifolio
          </Link>
          <Link className="nav-link">
            <box-icon
              color="#111"
              className="nav-link-icon"
              name="paper-plane"
            />
            contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
