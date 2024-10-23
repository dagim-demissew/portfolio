const projectCategories = ["Websites", "UIUX", "Mobile", "Fullstack"];

export const changeCategory = (currentCategory, change) => {
  console.log(currentCategory);
  const currentIndex = projectCategories.indexOf(currentCategory);
  console.log(currentIndex, "here");

  const newIndex =
    (currentIndex + change + projectCategories.length) %
    projectCategories.length;

  console.log(newIndex);

  return projectCategories[newIndex];
};
