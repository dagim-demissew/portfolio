import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemsByActiveOption } from "../../redux/Option/option-selector";
import Card from "../Card/Card";
import PortfolioHeader from "../Portfolio-header/PortfolioHeader";
import "./portfolio.css";

const Portfolio = () => {
  const items = useSelector(selectItemsByActiveOption);
  console.log(items);
  return (
    <div className="portfolio section">
      <div className="portfolio-container">
        <div className="portfolio-title-contaier">
          <h1 className="portfolio-title">Portfolio</h1>
          <span className="portfolio-subtitle">Top Rated</span>
        </div>
        <PortfolioHeader />
        <div className="portfolio-card-container">
          {items.map((item) => (
            <Card key={item.title} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
