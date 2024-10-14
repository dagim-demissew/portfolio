import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Socials from "./components/Socials/Socials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
