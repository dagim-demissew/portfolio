import React from "react";
import { useEffect } from "react";
import axiosInstance from "../../util/axiosInstance.js";
import { useDispatch } from "react-redux";
import { setServiceData } from "../../redux/Service-Detail/serviceDetail-actions";
import { setProjectData } from "../../redux/Project/project-action";
import { setCategories } from "../../redux/Option/option-action.js";
import Portfolio from "./../../components/Portfolio/Portfolio.jsx";
import Skills from "./../../components/Skills/Skills.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Contact from "./../../components/Contact/Contact.jsx";
import Service from "./../../components/Service-Component/Service.jsx";
import Socials from "../../components/Socials/Socials.jsx";
import HeroDetail from "./../../components/Hero-Detail/HeroDetail.jsx";
import "./home.css";
import { setFetching } from "../../redux/Spinner/spinner-action.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let projectData;
    let serviceData;
    let categoryData;
    const fetchData = async () => {
      dispatch(setFetching(true));
      projectData = await axiosInstance.get("/projects");
      serviceData = await axiosInstance.get("/servies");
      categoryData = await axiosInstance.get("/projectsMain");
      dispatch(setServiceData(serviceData.data));
      dispatch(setCategories(categoryData.data));
      dispatch(setProjectData(projectData.data));
      console.log(projectData.data);
      dispatch(setFetching(false));
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Socials />

      <div className="sections">
        <section id="hero">
          <HeroDetail />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <div className="footer">
          <p>&copy; 2024 Dagim Demissew. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
