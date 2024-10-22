import React, { useState } from "react";
import ServiceOverlay from "../Service-Overlay/ServiceOverlay";
import "./service.css";
import { useDispatch } from "react-redux";
import { setDisplayDetails } from "../../redux/Service-Detail/serviceDetail-actions";

const Service = () => {
  const dispatch = useDispatch();

  const [currentService, setCurrentService] = useState(1);

  const handelView = (displayDetails) => {
    dispatch(setDisplayDetails(displayDetails));
  };

  const handelRightClick = () => {
    if (currentService === 1) {
      setCurrentService(2);
    }
    if (currentService === 2) {
      setCurrentService(0);
    }
    if (currentService === 0) {
      setCurrentService(1);
    }
  };

  const handelLeftClick = () => {
    if (currentService === 1) {
      setCurrentService(0);
    }
    if (currentService === 2) {
      setCurrentService(1);
    }
    if (currentService === 0) {
      setCurrentService(2);
    }
  };

  return (
    <div className="service section">
      <ServiceOverlay />
      <div className="service-container">
        <div className="service-title">
          <h1>Services</h1>
        </div>
        <div className="service-cards">
          <span className="arrow left" onClick={handelLeftClick}>
            <box-icon
              size="40px"
              color="#555"
              name="left-arrow-circle"></box-icon>
          </span>
          <span className="arrow right" onClick={handelRightClick}>
            <box-icon
              size="40px"
              color="#555"
              name="right-arrow-circle"></box-icon>
          </span>
          <div
            className={`service-card ${
              currentService === 0 ? "display-service" : "remove-service"
            }`}>
            <span className="service-card-icon">
              <box-icon
                name="layout"
                size="80px"
                color="#555"
                className="service-icon"></box-icon>
            </span>
            <h3 className="service-card-title">UI/UX Development</h3>
            <span
              className="service-card-subtitle"
              onClick={() => handelView("uiux")}>
              View more
              <div className="icon">
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </span>
          </div>
          <div
            className={`service-card ${
              currentService === 1 ? "display-service" : "remove-service"
            }`}>
            <span className="service-card-icon">
              <box-icon size="80px" color="#555" name="code-alt"></box-icon>
            </span>
            <h3 className="service-card-title">Frontend Development</h3>
            <span
              className="service-card-subtitle"
              onClick={() => handelView("Frontend")}>
              View more
              <div className="icon">
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </span>
          </div>
          <div
            className={`service-card ${
              currentService === 2 ? "display-service" : "remove-service"
            }`}>
            <span className="service-card-icon">
              <box-icon size="80px" color="#555" name="code-curly"></box-icon>
            </span>
            <h3 className="service-card-title">Backend Development</h3>
            <span
              className="service-card-subtitle"
              onClick={() => handelView("Backend")}>
              View more
              <div className="icon">
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </span>
          </div>
          <div className="service-dots">
            <span
              className={`card-dot ${
                currentService === 0 ? "current-dot" : ""
              }`}></span>
            <span
              className={`card-dot ${
                currentService === 1 ? "current-dot" : ""
              }`}></span>
            <span
              className={`card-dot ${
                currentService === 2 ? "current-dot" : ""
              }`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
