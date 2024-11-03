import React from "react";
import "./projectCard.css";

const ProjectCard = (props) => {
  console.log(props.image)
  return (
    <div className="project-cards">
      <div className="project-card-image-container">
        <img
          className="project-card-image"
          src={props.image}
          alt="Project"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="project-card-detail">
        <span className="project-card-title">{props.detail}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
