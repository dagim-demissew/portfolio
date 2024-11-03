import { spinnerActionType } from "./spinner-actiontype";

const INITIAL_STATE = {
  isFetching: null,
};

const spinnerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case spinnerActionType.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};

export default spinnerReducer;
