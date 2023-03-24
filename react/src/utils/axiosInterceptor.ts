import axios from "axios";

let token = "";

export const setToken = (newToken: string) => (token = newToken);

export const getToken = () => token;

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = getToken();
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err?.response?.status === 401) {
      try {
        const prevRequest = err.config;
        const { data } = await axiosInstance.get("/auth/refresh-token");
        setToken(data.token);
        prevRequest.headers["Authorization"] = data.token;
        return axiosInstance(prevRequest);
      } catch (err) {
        window.location.replace("/login");
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
