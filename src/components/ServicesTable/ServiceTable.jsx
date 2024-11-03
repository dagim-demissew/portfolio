import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProjectData } from "../../redux/Project/project-action";
import { removeService } from "../../redux/Service-Detail/serviceDetail-actions";
import axiosInstance from "../../util/axiosInstance";
import "./serviceTable.css";

const ServiceTable = () => {
  const displayDetails = useSelector(
    (state) => state.serviceDetail.serviceDetails
  );
  const dispatch = useDispatch();
  const handleDelete = async (category, serviceId) => {
    dispatch(removeService(category, serviceId));
    try {
      const response = await axiosInstance.delete(
        `/admin/deleteService/${serviceId}`
      );
    } catch (error) {
      console.log("an error occured while deleting", error);
    }
  };

  return (
    <div className="Admin-service-display">
      {Object.keys(displayDetails).map((category) => (
        <div key={category} className="Admin-service-display_item">
          <div className="Admin-service-display_title">{category}</div>
          <ul className="Admin-service-display_list">
            {displayDetails[category].map((detail) => (
              <li key={detail.id} className="Admin-service-display_detail">
                <box-icon name="chevron-right"></box-icon>
                <span className="Admin-service-display-detail_main">
                  {detail.service}
                </span>
                <span className="Admin-service-display-detail_delete">
                  <button
                    className="link-delete"
                    onClick={() => handleDelete(category, detail.id)}>
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceTable;
