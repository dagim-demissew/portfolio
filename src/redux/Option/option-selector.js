import { createSelector } from "reselect";

const selectActiveOption = (state) => state.option.activeOption;

const selectCategories = (state) => state.option.categories;

export const selectItemsByActiveOption = createSelector(
  [selectActiveOption, selectCategories],
  (activeOption, catagories) => catagories[activeOption] || []
);
