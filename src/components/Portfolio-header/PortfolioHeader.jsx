import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHeaderCatagory } from "../../redux/Option/option-action";
import "./portfolioHeader.css";

const PortfolioHeader = () => {
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
            activeCatagory === "Websites" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("Websites")}>
          Websites
        </div>
        <div
          className={`portfolio-header-option ${
            activeCatagory === "UIUX" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("UIUX")}>
          UI/UX
        </div>
        <div
          className={`portfolio-header-option ${
            activeCatagory === "Mobile" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("Mobile")}>
          Mobile
        </div>
        <div
          className={`portfolio-header-option ${
            activeCatagory === "Fullstack" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("Fullstack")}>
          Fullstack
        </div>
        <Link className="portfolio-link">
          <div className="portfolio-header-option">more?</div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioHeader;
