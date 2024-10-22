import { serviceDetailActions } from "./serviceDetail-actionTypes";
export const setDisplayDetails = (displayDetails) => {
  return {
    type: serviceDetailActions.OPEN_SERVICE_DETAIL,
    payload: displayDetails,
  };
};
export const closeDetails = () => {
  return {
    type: serviceDetailActions.CLOSE_SERVICE_DETAIL,
    payload: "",
  };
};
