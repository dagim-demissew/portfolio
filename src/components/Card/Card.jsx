import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  return (
    <div className="portfolio-card">
      <img
        className="portfolio-image"
        src="https://loremflickr.com/320/240"
        alt=""
      />
      <Link>
        <div className="portfolio-detail">
          <span className="portfolio-card-title ">{props.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
