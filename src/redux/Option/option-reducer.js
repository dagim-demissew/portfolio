import { optionActionTypes } from "./option-action-type";

const INITIAL_STATE = {
  activeOption: "website",
  categories: {},
};

const optionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case optionActionTypes.CHOOSE_HEADER_OPTION:
      return {
        ...state,
        activeOption: action.payload,
      };
    case optionActionTypes.SET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default optionReducer;
