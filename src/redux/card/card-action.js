import { cardActionTypes } from "./card-action-type";
export const setHeaderCatagory = (catagory) => {
  return {
    type: cardActionTypes.CHOOSE_HEADER_OPTION,
    payload: catagory,
  };
};
