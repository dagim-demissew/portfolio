import axios from "axios";
import { store } from "../redux/store.js";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user?.userData?.token;
    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle responses here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
