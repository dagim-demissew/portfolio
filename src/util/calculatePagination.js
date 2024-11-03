export const calculateTotalPages = (categoryData, pageSize = 4) => {
  return Math.ceil(categoryData.length / pageSize);
};
