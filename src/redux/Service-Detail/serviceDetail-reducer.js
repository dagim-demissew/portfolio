import { serviceDetailActions } from "./serviceDetail-actionTypes";
const INITIAL_STATE = {
  displayDetails: "",
  serviceDetails: {},
};

const serviceDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case serviceDetailActions.SET_SERVICE_DATA:
      return {
        ...state,
        serviceDetails: action.payload,
      };
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
    case serviceDetailActions.REMOVE_SERVICE:
      return {
        ...state,
        serviceDetails: {
          ...state.serviceDetails,
          [action.payload.category]: state.serviceDetails[
            action.payload.category
          ].filter((item) => item.id !== action.payload.serviceId),
        },
      };
    default:
      return state;
  }
};

export default serviceDetailReducer;
