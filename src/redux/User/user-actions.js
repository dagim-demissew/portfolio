import { userActionTypes } from "./user-actionTypes";
export const setUserData = (data) => {
  return {
    type: userActionTypes.SAVE_USER,
    payload: data,
  };
};
export const resetUserData = () => {
  return {
    type: userActionTypes.REMOVE_USER,
  };
};
