import { createSelector } from "reselect";
import { ALL_CATEGORIES } from "../../data";

const selectCurrentCategory = (state) => state.project.currentProjectCategory;
const selectCurrentPage = (state) => state.project.currentPage;
const selectItemsPerPage = (state) => state.project.itemsPerPage;

export const selectPaginatedProjectsByCategory = createSelector(
  [selectCurrentCategory, selectCurrentPage, selectItemsPerPage],
  (currentCategory, currentPage, itemsPerPage) => {
    const allProjectsInCategory = ALL_CATEGORIES[currentCategory] || [];
    const totalPages = Math.ceil(allProjectsInCategory.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      projects: allProjectsInCategory.slice(start, end),
      totalPages,
    };
  }
);
