import { optionActionTypes } from "./option-action-type";
export const setHeaderCatagory = (catagory) => {
  return {
    type: optionActionTypes.CHOOSE_HEADER_OPTION,
    payload: catagory,
  };
};
