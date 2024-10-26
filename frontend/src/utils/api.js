import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api/v1",
  withCredentials: true,
});

export const get = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const post = async (endpoint, data = {}) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const patch = async (endpoint, data = {}) => {
  try {
    const response = await api.patch(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const del = async (endpoint, params = {}) => {
  try {
    const response = await api.delete(endpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const handleError = async (error) => {
  console.log("API error :: ", error);
};
