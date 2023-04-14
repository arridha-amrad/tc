import axios from "axios";
import { refreshTokenAPI } from "../api/auth.api";

let token = "";

export const setToken = (newToken: string) => (token = newToken);

export const getToken = () => token;

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${getToken()}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err?.response?.status === 401) {
      try {
        const prevRequest = err.config;
        const data = await refreshTokenAPI();
        setToken(data.token);
        prevRequest.headers["Authorization"] = `Bearer ${data.token}`;
        return axiosInstance(prevRequest);
      } catch (err) {
        window.location.replace("/login");
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
