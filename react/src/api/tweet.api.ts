import axiosInstance from "../utils/axiosInterceptor";

export const createTweetAPI = async (body: FormData) =>
  axiosInstance.post("/tweets/create", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
