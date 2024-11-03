import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  return (
    <div className="portfolio-card">
      <img className="portfolio-image" src={props.image} alt="" />
      <Link>
        <div className="portfolio-detail">
          <span className="portfolio-card-title ">{props.details}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
