import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setServiceData } from "../../redux/Service-Detail/serviceDetail-actions";
import { setProjectData } from "../../redux/Project/project-action";
import { setCategories } from "../../redux/Option/option-action.js";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.js";
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

      const allCategory = {
        website: [...websiteData.filter((item) => item.main === true)],
        uiux: [...uiuxData.filter((item) => item.main === true)],
        mobile: [...mobileData.filter((item) => item.main === true)],
        fullstack: [...fullstackData.filter((item) => item.main === true)],
      };

      const allProjects = {
        website: [...websiteData],
        uiux: [...uiuxData],
        mobile: [...mobileData],
        fullstack: [...fullstackData],
      };

      const serviceSnapshot = await getDocs(collection(db, "services"));
      const serviceData = serviceSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredService = {
        frontend: [...serviceData.filter((item) => item.title === "frontend")],
        backend: [...serviceData.filter((item) => item.title === "backend")],
        uiux: [...serviceData.filter((item) => item.title === "uiux")],
      };

      dispatch(setServiceData(filteredService));
      dispatch(setCategories(allCategory));
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
