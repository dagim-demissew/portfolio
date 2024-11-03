import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemsByActiveOption } from "../../redux/Option/option-selector";
import Card from "../Card/Card";
import PortfolioHeader from "../Portfolio-header/PortfolioHeader";
import "./portfolio.css";
import Spinner from "../Spinner/Spinner";

const Portfolio = ({ isLoading }) => {
  const items = useSelector(selectItemsByActiveOption);
  const isFetching = useSelector((state) => state.spinner.isFetching);
  return (
    <div className="portfolio section">
      <div className="portfolio-container">
        <div className="portfolio-title-contaier">
          <h1 className="portfolio-title">Portfolio</h1>
          <span className="portfolio-subtitle">Top Rated</span>
        </div>
        <PortfolioHeader />
        <div className="portfolio-card-container">
          {isFetching ? (
            <Spinner />
          ) : (
            <>
              {items.map((item) => (
                <Card
                  key={item.detail}
                  title={item.detail}
                  image={item.image}
                  link={item.link}
                  details={item.details}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
