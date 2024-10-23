import { projectActionType } from "./project-action-type";
export const changeProjectCatagory = (change) => {
  return {
    type: projectActionType.CHANGE_CATAGORY,
    payload: change,
  };
};

export const setNextPage = (totalPages) => {
  return {
    type: projectActionType.LOAD_NEXT_DATASET,
    payload: totalPages,
  };
};
export const setPreviousPage = () => {
  return {
    type: projectActionType.LOAD_PREVIOUS_DATASET,
  };
};
