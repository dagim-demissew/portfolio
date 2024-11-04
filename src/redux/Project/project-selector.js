import { createSelector } from "reselect";

const selectCurrentCategory = (state) => state.project.currentProjectCategory;
const selectCurrentPage = (state) => state.project.currentPage;
const selectItemsPerPage = (state) => state.project.itemsPerPage;
const selectAllProjects = (state) => state.project.allProjects;


export const selectPaginatedProjectsByCategory = createSelector(
  [
    selectCurrentCategory,
    selectCurrentPage,
    selectItemsPerPage,
    selectAllProjects,
  ],
  (currentCategory, currentPage, itemsPerPage, allProjects) => {
    const allProjectsInCategory = allProjects[currentCategory] || [];
    const totalPages = Math.ceil(allProjectsInCategory.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      projects: allProjectsInCategory.slice(start, end),
      totalPages,
      currentPage,
    };
  }
);
