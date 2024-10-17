import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHeaderCatagory } from "../../redux/card/card-action";
import "./portfolioHeader.css";

const PortfolioHeader = () => {
  const dispatch = useDispatch();
  const activeCatagory = useSelector((state) => state.cards.activeCatagory);
  const handleOptionClick = (category) => {
    dispatch(setHeaderCatagory(category));
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
            activeCatagory === "UI/UX" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("UI/UX")}>
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
            activeCatagory === "Full stack" ? "option-active" : ""
          }`}
          onClick={() => handleOptionClick("Full stack")}>
          Full stack
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
