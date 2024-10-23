import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { changeProjectCatagory } from "../../redux/Project/project-action";
import { useDispatch, useSelector } from "react-redux";
import { selectPaginatedProjectsByCategory } from "../../redux/Project/project-selector";
import { setNextPage } from "../../redux/Project/project-action";
import { setPreviousPage } from "../../redux/Project/project-action";
import "./projects.css";

const Projects = () => {
  const dispatch = useDispatch();
  const currentProject = useSelector(
    (state) => state.project.currentProjectCategory
  );
  const { projects, totalPages } = useSelector(
    selectPaginatedProjectsByCategory
  );
  const handleChange = (change) => {
    dispatch(changeProjectCatagory(change));
  };

  const handleNextPage = (totalPages) => {
    dispatch(setNextPage(totalPages));
  };
  const handlePreviousPage = () => {
    dispatch(setPreviousPage());
  };
  return (
    <div className="project-container">
      <div className="projects">
        <h1 className="project-title">
          <span
            className="project-title-arrow"
            onClick={() => handleChange(-1)}>
            <box-icon type="solid" color="#777" name="left-arrow"></box-icon>
          </span>
          <span className="current-project-name">{currentProject === "UIUX" ? "UI/UX" : currentProject}</span>
          <span className="project-title-arrow" onClick={() => handleChange(1)}>
            <box-icon type="solid" color="#777" name="right-arrow"></box-icon>
          </span>
        </h1>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} />
          ))}
        </div>
        <div className="pagination">
          <span
            className="pagination-number"
            onClick={() => handlePreviousPage()}>
            Prev
          </span>
          <span
            className="pagination-number selected-pagination"
            onClick={() => handleNextPage(totalPages)}>
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
