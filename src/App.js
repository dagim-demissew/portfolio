import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Socials from "./components/Socials/Socials";
import Admin from "./pages/Admin/Admin.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Projects from "./pages/ProjectsPage/Projects.jsx";
import Login from "./pages/Login/Login.jsx";
import "./App.css";
import { useSelector } from "react-redux";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  const admin = useSelector((state) => state.user.userData);
  let routes;
  if (admin) {
    routes = (
      <>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<ErrorPage />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
      </>
    );
  }
  return <Routes>{routes}</Routes>;
}

export default App;
