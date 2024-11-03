import { createSelector } from "reselect";

const selectActiveService = (state) => state.serviceDetail.displayDetails;

const selectServices = (state) => state.serviceDetail.serviceDetails || [];

export const selectItemsByActiveService = createSelector(
  [selectActiveService, selectServices],
  (displayDetails, serviceDetails) =>
    displayDetails ? serviceDetails[displayDetails] : []
);
