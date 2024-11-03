import { spinnerActionType } from "./spinner-actiontype";

export const setFetching = (fetching) => {
  return {
    type: spinnerActionType.SET_IS_FETCHING,
    payload: fetching,
  };
};
