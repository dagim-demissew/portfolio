import { userActionTypes } from "./user-actionTypes";

const INITIAL_STATE = {
  userData: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SAVE_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case userActionTypes.REMOVE_USER:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default userReducer;
