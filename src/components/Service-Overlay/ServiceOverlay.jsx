import { React } from "react";
import { useSelector } from "react-redux";
import "./serviceOverlay.css";
import { useDispatch } from "react-redux";
import { closeDetails } from "../../redux/Service-Detail/serviceDetail-actions";
import { selectItemsByActiveService } from "../../redux/Service-Detail/serviceDetail-selector";
const ServiceOverlay = (props) => {
  const dispatch = useDispatch();
  const displayDetails = useSelector(
    (state) => state.serviceDetail.displayDetails
  );
  const serviceDetails = useSelector(selectItemsByActiveService);
  const handelClose = () => {
    dispatch(closeDetails());
  };
  return (
    <div
      className={`overlay-container ${
        displayDetails ? "display-service-detail" : "exit-service-detail"
      }`}>
      <div className="service-details">
        <span className="service-detail-close-icon" onClick={handelClose}>
          <box-icon color="#888" name="x-circle"></box-icon>
        </span>
        <div className="service-details-title">
          {displayDetails === "uiux" ? "UI/UX" : displayDetails}
        </div>
        <ul className="service-details-list">
          {serviceDetails &&
            serviceDetails.map((detail) => (
              <li key={detail.detail} className="service-detail-list-item">
                <span>{detail.service}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceOverlay;
