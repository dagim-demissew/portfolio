import React, { useState } from "react";
import WheelComponent from "../Rotating-Wheel/Wheel";
import "./skills.css";

const Skills = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="skill section">
      <div className="skills-container">
        <WheelComponent />
        <h1 className="skills-title">Skills</h1>
        <div className="skill-list-container">
          <div
            className={`skill-list ${show ? "display-skill" : "hide-skill"}`}>
            <div className="skill-list-title">Frontend</div>
            <div className="list-container">
              <ul className="list">
                <li className="list-item">
                  <box-icon
                    className="list-item-icon"
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    React <span className="skill-level">Advanced</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    HTML <span className="skill-level">Advanced</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    CSS <span className="skill-level">Advanced</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    TailWind <span className="skill-level">Intermidiate</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    Redux <span className="skill-level">Basics</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    Git <span className="skill-level">Basics</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    BootStrap <span className="skill-level">Intermidate</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`skill-list ${!show ? "display-skill" : "hide-skill"}`}>
            <div className="skill-list-title">Backend</div>
            <div className="list-container">
              <ul className="list">
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    Node <span className="skill-level">Advanced</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    Express <span className="skill-level">Advanced</span>
                  </span>
                </li>
                <li className="list-item">
                  <box-icon
                    type="solid"
                    color="#444"
                    name="check-circle"></box-icon>
                  <span className="list-item-text">
                    Mongo DB <span className="skill-level">Advanced</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="skill-button" onClick={handleShow}>
          {show ? <span>Backend</span> : <span>Frontend</span>}
        </button>
      </div>
    </div>
  );
};

export default Skills;
