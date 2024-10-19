import React from "react";
import "./wheel.css";

const WheelComponent = () => {
  return (
    <div className="wheel-container">
      <div className="center">
        <span className="skill-title">Skills</span>
      </div>
      <div className="circle-container">
        <div class="circle">
          <box-icon type="logo" name="react" size="md" color="white"></box-icon>
        </div>
        <div class="circle">
          <box-icon
            name="tailwind-css"
            size="md"
            color="#61dafb"
            type="logo"></box-icon>
        </div>
        <div class="circle">
          <box-icon
            name="mongodb"
            size="md"
            color="white"
            type="logo"></box-icon>
        </div>
        <div class="circle">
          <box-icon name="javascript" size="md" type="logo"></box-icon>
        </div>
        <div class="circle">
          <box-icon name="redux" size="md" color="white" type="logo"></box-icon>
        </div>
        <div class="circle">
          <box-icon name="nodejs" size="md" type="logo"></box-icon>
        </div>
        <div class="circle">
          <box-icon name="html5" color="white" size="md" type="logo"></box-icon>
        </div>
        <div class="circle">
          <box-icon name="css3" color="white" size="md" type="logo"></box-icon>
        </div>
      </div>
    </div>
  );
};

export default WheelComponent;
