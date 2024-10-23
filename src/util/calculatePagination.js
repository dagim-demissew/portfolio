export const calculateTotalPages = (categoryData, pageSize = 5) => {
  return Math.ceil(categoryData.length / pageSize);
};
