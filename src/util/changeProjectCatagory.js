const projectCategories = ["website", "uiux", "mobile", "fullstack"];

export const changeCategory = (currentCategory, change) => {
  console.log(currentCategory);
  const currentIndex = projectCategories.indexOf(currentCategory);

  const newIndex =
    (currentIndex + change + projectCategories.length) %
    projectCategories.length;

  console.log(newIndex);

  return projectCategories[newIndex];
};
