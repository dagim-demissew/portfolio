import React from "react";
import "./projectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-cards">
      <div className="project-card-image-container">
        <img
          className="project-card-image"
          src="https://loremflickr.com/320/240"
          alt="Project"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="project-card-detail">
        <span className="project-card-title">{props.title}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
