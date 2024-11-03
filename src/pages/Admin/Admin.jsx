import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { resetUserData } from "../../redux/User/user-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setServiceData } from "../../redux/Service-Detail/serviceDetail-actions";
import { setProjectData } from "../../redux/Project/project-action";
import { setFetching } from "../../redux/Spinner/spinner-action";
import ServiceTable from "../../components/ServicesTable/ServiceTable";
import AdminForm from "../../components/Admin-form/AdminForm";
import Table from "../../components/Table/Table";
import AddServices from "../../components/Admin-service/AddServices";
import axiosInstance from "../../util/axiosInstance";
import "./admin.css";

const Admin = () => {
  const [activeItem, setActiveItem] = useState(0);
  const handleSelect = (option) => {
    setActiveItem(option);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(resetUserData());
    navigate("/");
  };
  useEffect(() => {
    let projectData;
    let serviceData;
    const fetchData = async () => {
      dispatch(setFetching(true));
      projectData = await axiosInstance.get("/projects");
      serviceData = await axiosInstance.get("/admin/servies");
      dispatch(setServiceData(serviceData.data));
      dispatch(setProjectData(projectData.data));
      dispatch(setFetching(false));
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [handleSelect]);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <ul className="admin-list">
          <Link to={"/admin/projects"} className="admin-link">
            <li
              className={`admin-list-items ${
                activeItem === 1 ? "admin-active-option" : ""
              }`}
              onClick={() => handleSelect(1)}>
              Projects
            </li>
          </Link>
          <Link to={"/admin/add"} className="admin-link">
            <li
              className={`admin-list-items ${
                activeItem === 2 ? "admin-active-option" : ""
              }`}
              onClick={() => handleSelect(2)}>
              Add
            </li>
          </Link>
          <Link to={"/admin/addService"} className="admin-link">
            <li
              className={`admin-list-items ${
                activeItem === 3 ? "admin-active-option" : ""
              }`}
              onClick={() => handleSelect(3)}>
              Add Service
            </li>
          </Link>
          <Link to={"/admin/AllServices"} className="admin-link">
            <li
              className={`admin-list-items ${
                activeItem === 4 ? "admin-active-option" : ""
              }`}
              onClick={() => handleSelect(4)}>
              Services
            </li>
          </Link>
          <Link className="admin-link">
            <li className="admin-list-items" onClick={handleLogout}>
              Logout
            </li>
          </Link>
        </ul>
      </div>
      <div className="admin-details">
        <Routes>
          <Route path="/projects" element={<Table />} />
          <Route path="/add" element={<AdminForm />} />
          <Route path="/edit/:pid" element={<AdminForm />} />
          <Route path="/addService" element={<AddServices />} />
          <Route path="/AllServices" element={<ServiceTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
