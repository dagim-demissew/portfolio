import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaginatedProjectsByCategory } from "../../redux/Project/project-selector";
import { changeProjectCatagory } from "../../redux/Project/project-action";
import { setNextPage } from "../../redux/Project/project-action";
import { setPreviousPage } from "../../redux/Project/project-action";
import { setFetching } from "../../redux/Spinner/spinner-action";
import { setProjectData } from "../../redux/Project/project-action";
import axiosInstance from "../../util/axiosInstance";
import "./projects.css";

const Projects = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.spinner.isFetching);

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

  useEffect(() => {
    let projectData;
    let serviceData;
    let categoryData;
    const fetchData = async () => {
      dispatch(setFetching(true));
      projectData = await axiosInstance.get("/projects");
      serviceData = await axiosInstance.get("/servies");
      categoryData = await axiosInstance.get("/projectsMain");
      dispatch(setProjectData(projectData.data));
      dispatch(setFetching(false));
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="project-container">
      <div className="projects">
        <h1 className="project-title">
          <span
            className="project-title-arrow"
            onClick={() => handleChange(-1)}>
            <box-icon type="solid" color="#777" name="left-arrow"></box-icon>
          </span>
          <span className="current-project-name">
            {currentProject === "UIUX" ? "UI/UX" : currentProject}
          </span>
          <span className="project-title-arrow" onClick={() => handleChange(1)}>
            <box-icon type="solid" color="#777" name="right-arrow"></box-icon>
          </span>
        </h1>

        <div className="project-list">
          {isFetching ? (
            <Spinner />
          ) : (
            <>
              {projects.map((project) => (
                <ProjectCard
                  key={project.detail}
                  link={project.link}
                  image={project.image}
                  detail={project.details}
                />
              ))}
            </>
          )}
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
        <Link className="resume-link" to={"/"}>
          Back to Resume?
        </Link>
      </div>
    </div>
  );
};

export default Projects;
