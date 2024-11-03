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
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dagim-demissew-787b4927b/"
            className="social-link linkedin">
            <box-icon name="linkedin" color="white" type="logo"></box-icon>
          </a>
          <a
            target="_blank"
            href="https://github.com/dagim-demissew"
            className="social-link git">
            <box-icon name="github" color="white" type="logo"></box-icon>
          </a>
          <a
            target="_blank"
            href="https://wa.me/965701286"
            className="social-link whatsup">
            <box-icon name="whatsapp" color="white" type="logo"></box-icon>
          </a>
          <a
            href="https://t.me/Adonai_27"
            target="_blank"
            className="social-link telegram">
            <box-icon type="logo" name="telegram" color="white"></box-icon>
          </a>
        </div>
        <span
          className={`socila-close ${toggle ? "rotate" : ""}`}
          onClick={handleToggle}>
          <box-icon name="shape-square" color="#333" />
        </span>
      </div>
    </>
  );
};

export default Socials;
