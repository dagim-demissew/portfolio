import React from "react";
import Card from "../Card/Card";
import PortfolioHeader from "../Portfolio-header/PortfolioHeader";
import { CATAGORY } from "../../data";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio section">
      <div className="portfolio-container">
        <div className="portfolio-title-contaier">
          <h1 className="portfolio-title">Portfolio</h1>
          <span className="portfolio-subtitle">Top Rated</span>
        </div>
        <PortfolioHeader />
        <div className="portfolio-card-container">
          <Card title="Cat" />
          <Card title="Cat" />
          <Card title="Cat" />
          <Card title="Cat" />
          <Card title="Cat" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
