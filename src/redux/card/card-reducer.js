import { cardActionTypes } from "./card-action-type";

const INITIAL_STATE = {
  activeCatagory: "Websites",
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardActionTypes.CHOOSE_HEADER_OPTION:
      return {
        ...state,
        activeCatagory: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer
