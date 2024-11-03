import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Socials from "./components/Socials/Socials";
import Admin from "./pages/Admin/Admin.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Projects from "./pages/ProjectsPage/Projects.jsx";
import Login from "./pages/Login/Login.jsx";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.userData);
  let routes;
  if (admin) {
    routes = (
      <>
        <Route path="/admin/*" element={<Admin />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
      </>
    );
  }
  return <Routes>{routes}</Routes>;
}

export default App;
