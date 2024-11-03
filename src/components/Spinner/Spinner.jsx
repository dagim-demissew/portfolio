import React from "react";
import "./spinner.css";
const Spinner = () => {
  return (
    <div>
      <div class="pulse-spinner">
        <div class="inner-circle"></div>
        <div class="outer-circle"></div>
      </div>
    </div>
  );
};

export default Spinner;
