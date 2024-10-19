import { CATEGORIES } from "../../data";
import { optionActionTypes } from "./option-action-type";

const INITIAL_STATE = {
  activeOption: "Websites",
  categories: CATEGORIES,
};

const optionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case optionActionTypes.CHOOSE_HEADER_OPTION:
      return {
        ...state,
        activeOption: action.payload,
      };
    default:
      return state;
  }
};

export default optionReducer;
