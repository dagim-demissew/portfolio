import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="portfolio-card">
      <img className="portfolio-image" src={props.image} alt="" />
      <a target="blank" href={props.link}>
        <div className="portfolio-detail">
          <span className="portfolio-card-title ">{props.details}</span>
        </div>
      </a>
    </div>
  );
};

export default Card;
