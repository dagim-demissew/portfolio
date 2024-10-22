import { serviceDetailActions } from "./serviceDetail-actionTypes";
import { SERVICES } from "../../data";
const INITIAL_STATE = {
  displayDetails: "",
  serviceDetails: SERVICES,
};

const serviceDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case serviceDetailActions.OPEN_SERVICE_DETAIL:
      return {
        ...state,
        displayDetails: action.payload,
      };
    case serviceDetailActions.CLOSE_SERVICE_DETAIL:
      return {
        ...state,
        displayDetails: "",
      };
    default:
      return state;
  }
};

export default serviceDetailReducer;
