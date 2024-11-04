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
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.js";
import { setProjectData } from "../../redux/Project/project-action";
import "./projects.css";

const Projects = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.spinner.isFetching);

  const currentProject = useSelector(
    (state) => state.project.currentProjectCategory
  );
  const { projects, totalPages, currentPage } = useSelector(
    selectPaginatedProjectsByCategory
  );
  console.log("total pages", totalPages);
  console.log("current pages", currentPage);
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
    const fetchData = async () => {
      dispatch(setFetching(true));
      const websiteSnapshot = await getDocs(collection(db, "website"));
      const uiuxSnapshot = await getDocs(collection(db, "uiux"));
      const mobileSnapshot = await getDocs(collection(db, "mobile"));
      const fullstackSnapshot = await getDocs(collection(db, "fullstack"));

      const websiteData = websiteSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const uiuxData = uiuxSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const mobileData = mobileSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const fullstackData = fullstackSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const allProjects = {
        website: [...websiteData],
        uiux: [...uiuxData],
        mobile: [...mobileData],
        fullstack: [...fullstackData],
      };
      dispatch(setProjectData(allProjects));
      dispatch(setFetching(false));
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <div className="project-container">
      <div className="projects">
        <div className="project-nav">
          <div className="project-title">
            <span
              className="project-title-arrow"
              onClick={() => handleChange(-1)}>
              <box-icon type="solid" color="#777" name="left-arrow"></box-icon>
            </span>
            <span className="current-project-name">
              {currentProject === "UIUX" ? "UI/UX" : currentProject}
            </span>
            <span
              className="project-title-arrow"
              onClick={() => handleChange(1)}>
              <box-icon type="solid" color="#777" name="right-arrow"></box-icon>
            </span>
          </div>
          <div className="pageCounter">
            {[...Array(totalPages)].map((_, i) => (
              <div
                key={i}
                className={`counter ${
                  currentPage === i + 1 ? "active" : ""
                }`}></div>
            ))}
          </div>
        </div>

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
        <div className="paginationLink">
          <div className="pagination">
            <span
              className={`pagination-number ${
                currentPage !== 1 && currentPage === totalPages
                  ? "selected-pagination"
                  : ""
              }`}
              onClick={() => handlePreviousPage()}>
              Prev
            </span>
            <span
              className={`pagination-number ${
                currentPage === totalPages ? "" : "selected-pagination"
              }`}
              onClick={() => handleNextPage(totalPages)}>
              Next
            </span>
          </div>
          <Link className="resume-link" to={"/"}>
            Back to Resume?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
