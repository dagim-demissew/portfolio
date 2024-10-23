import { projectActionType } from "./project-action-type";
import { ALL_CATEGORIES } from "../../data";
import { calculateTotalPages } from "../../util/calculatePagination";
import { changeCategory } from "../../util/changeProjectCatagory";
import { current } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  currentProjectCategory: "Websites",
  allProjects: ALL_CATEGORIES,
  itemsPerPage: 5,
  currentPage: 1,
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case projectActionType.CHANGE_CATAGORY:
      return {
        ...state,
        currentPage: 1,
        currentProjectCategory: changeCategory(
          state.currentProjectCategory,
          action.payload
        ),
      };
    case projectActionType.LOAD_NEXT_DATASET:
      if (state.currentPage === action.payload) {
        return { ...state };
      } else {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
    case projectActionType.LOAD_PREVIOUS_DATASET:
      if (state.currentPage === 1) {
        return { ...state };
      } else {
        return {
          ...state,
          currentPage: state.currentPage - 1,
        };
      }
    default:
      return {
        ...state,
      };
  }
};

export default projectReducer;
