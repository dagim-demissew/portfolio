import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHeaderCatagory } from "../../redux/Option/option-action";
import "./portfolioHeader.css";

const PortfolioHeader = (props) => {
  const dispatch = useDispatch();
  const activeCatagory = useSelector((state) => state.option.activeOption);
  const handleOptionClick = (option) => {
    dispatch(setHeaderCatagory(option));
  };
  return (
    <div className="portfolio-header">
      <div className="portfolio-header-options">
        <div
          className={`portfolio-header-option ${
            activeCatagory === "website" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("website")}>
          Websites
        </div>
        <div
          className={`portfolio-header-option ${
            activeCatagory === "uiux" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("uiux")}>
          UI/UX
        </div>
        <div
          className={`portfolio-header-option ${
            activeCatagory === "mobile" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("mobile")}>
          Mobile
        </div>
        <div
          className={`portfolio-header-option ${
            activeCatagory === "fullstack" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("fullstack")}>
          Fullstack
        </div>
        {props.admin ? (
          <></>
        ) : (
          <Link className="portfolio-link" to="/projects">
            <div className="portfolio-header-option">more?</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioHeader;
