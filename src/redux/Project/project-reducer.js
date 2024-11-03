import { projectActionType } from "./project-action-type";
  import { calculateTotalPages } from "../../util/calculatePagination";
import { changeCategory } from "../../util/changeProjectCatagory";
import { current } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  currentProjectCategory: "website",
  allProjects: [],
  itemsPerPage: 5,
  currentPage: 1,
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case projectActionType.SET_DATA:
      return {
        ...state,
        allProjects: action.payload,
      };
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
    case projectActionType.REMOVE_PROJECT_FROM_STATE:
      return {
        ...state,
        allProjects: {
          ...state.allProjects,
          [action.payload.category]: state.allProjects[action.payload.category].filter(
            (item) => item.id !== action.payload.projectId
          ),
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default projectReducer;
