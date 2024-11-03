import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFetching } from "../../redux/Spinner/spinner-action";
import axiosInstance from "../../util/axiosInstance";

import "./addService.css";

const AddServices = () => {
  const [serviceData, setServiceData] = useState({
    title: "",
    service: "",
  });
  const dispatch = useDispatch();
  const isSending = useSelector((state) => state.spinner.isFetching);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setFetching(true));
      const response = await axiosInstance.post(
        "/admin/newService",
        serviceData
      );
      console.log("Service successfully registered", response.data);
      setServiceData({ title: "", service: "" });
      dispatch(setFetching(false));
    } catch (error) {
      console.log("error while creating a service", error);
    }
  };
  return (
    <div>
      <form
        className="form-container"
        onSubmit={handleSubmit}
        method="POST"
        enctype="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Service Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input-admin"
            onChange={handleChange}
            value={serviceData.title}
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Service Details:
          </label>
          <input
            type="text"
            id="service"
            name="service"
            onChange={handleChange}
            value={serviceData.service}
            className="form-input-admin"
            placeholder="Enter service"
            required
          />
        </div>

        <button
          disabled={isSending}
          type="submit"
          className={isSending ? "button-disabled" : "form-button"}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddServices;
