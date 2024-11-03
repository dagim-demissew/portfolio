import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../config/firebaseConfig.js";
import { setFetching } from "../../redux/Spinner/spinner-action.js";
import axiosInstance from "../../util/axiosInstance";
import "./adminForm.css";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    link: "",
    image: "",
    main: false,
  });
  const dispatch = useDispatch();
  const isSending = useSelector((state) => state.spinner.isFetching);
  const location = useLocation();
  const { item } = location.state || {};
  useEffect(() => {
    if (item) {
      setFormData({
        title: item.title || "",
        details: item.details || "",
        link: item.link || "",
        image: "",
        main: item.main || false,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleCheckbox = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      main: e.target.checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setFetching(true));
    const storageRef = ref(storage, `projects/${formData.image.name}`);
    try {
      await uploadBytes(storageRef, formData.image);
      const imageURL = await getDownloadURL(storageRef);
      const projectData = {
        ...formData,
        image: imageURL,
      };
      console.log(storageRef);
      if (item) {
        const response = await axiosInstance.put(
          `/admin/update/${item.id}`,
          projectData
        );
        console.log(response);
        return;
      }
      const response = await axiosInstance.post(
        "/admin/newProject",
        projectData
      );
      console.log("project successfully created", response.data);
      setFormData({
        title: "",
        details: "",
        link: "",
        image: null,
        main: false,
      });
      dispatch(setFetching(false));
    } catch (error) {
      console.log("could not create project.", error);
    }
  };

  return (
    <div className="admin-form-container">
      <form
        className="form-container"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Project Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input-admin"
            value={formData.title}
            placeholder="Enter title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details" className="form-label">
            Project Details:
          </label>
          <input
            type="text"
            id="details"
            name="details"
            className="form-input-admin"
            placeholder="Enter details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link" className="form-label">
            Project Link:
          </label>
          <input
            type="url"
            id="link"
            name="link"
            className="form-input-admin"
            placeholder="Enter URL"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Project Upload Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="form-input-file"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <div className="check-box">
          <label htmlFor="main-checkbox" className="form-label">
            Main
          </label>
          <input
            type="checkbox"
            id="main-checkbox"
            name="main"
            checked={formData.main}
            className="form-checkbox"
            onChange={handleCheckbox} // Use onChange for checkbox
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

export default AdminForm;
