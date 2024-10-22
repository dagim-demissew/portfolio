import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";
import Home from "./pages/HomePage/Home.jsx";
import Projects from "./pages/ProjectsPage/Projects.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
