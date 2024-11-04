import axios from "axios";
import { notifyError, notifySuccess } from "./toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api/v1",
  withCredentials: true,
});

// Generic error handler function
const handleError = (error) => {
  const message =
    error?.response?.data?.message || "An unexpected error occurred.";
  notifyError(message);
  console.log("API error :: ", error);
};

// GET request
export const get = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    notifySuccess(response.data.message);

    return response.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// POST request
export const post = async (endpoint, data = {}) => {
  try {
    const response = await api.post(endpoint, data);
    notifySuccess(response.data.message);

    return response.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// PATCH request
export const patch = async (endpoint, data = {}) => {
  try {
    const response = await api.patch(endpoint, data);
    notifySuccess(response.data.message);

    return response.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// DELETE request
export const del = async (endpoint, params = {}) => {
  try {
    const response = await api.delete(endpoint, { params });
    return response.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};
