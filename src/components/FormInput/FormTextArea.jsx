import React from "react";
import "./formInput.css";

const FormTextArea = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <textarea
        className="form-input textarea"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value && otherProps.value.length ? "shrink" : ""
          }`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormTextArea;
