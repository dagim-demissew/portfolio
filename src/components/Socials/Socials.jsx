import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./socials.css";

const Socials = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="socials">
        <div className={`social-links ${toggle ? "roll" : ""}`}>
          <Link className="social-link linkedin">
            <box-icon name="linkedin" color="white" type="logo"></box-icon>
          </Link>
          <Link className="social-link git">
            <box-icon name="github" color="white" type="logo"></box-icon>
          </Link>
          <Link className="social-link whatsup">
            <box-icon name="whatsapp" color="white" type="logo"></box-icon>
          </Link>
          <Link className="social-link upwork">
            <box-icon name="upwork" color="white" type="logo"></box-icon>
          </Link>
        </div>
        <Link
          className={`socila-close ${toggle ? "rotate" : ""}`}
          onClick={handleToggle}>
          <box-icon name="shape-square" color="white" />
        </Link>
      </div>
    </>
  );
};

export default Socials;
