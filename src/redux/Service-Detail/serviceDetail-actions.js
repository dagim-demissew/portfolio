import { serviceDetailActions } from "./serviceDetail-actionTypes";
export const setDisplayDetails = (displayDetails) => {
  return {
    type: serviceDetailActions.OPEN_SERVICE_DETAIL,
    payload: displayDetails,
  };
};

export const setServiceData = (data) => {
  return {
    type: serviceDetailActions.SET_SERVICE_DATA,
    payload: data,
  };
};

export const closeDetails = () => {
  return {
    type: serviceDetailActions.CLOSE_SERVICE_DETAIL,
    payload: "",
  };
};

export const removeService = (category, serviceId) => {
  return {
    type: serviceDetailActions.REMOVE_SERVICE,
    payload: { category, serviceId },
  };
};
