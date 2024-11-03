import axiosInstance from "./axiosInstance";
export const fetchProjects = async (path) => {
  try {
    const response = await axiosInstance.get(path);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects", error);
  }
};
