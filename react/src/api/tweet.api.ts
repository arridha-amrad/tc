import axiosInstance from "../utils/axiosInterceptor";

export const createTweetAPI = async (body: FormData) => {
  const { data } = await axiosInstance.post("/tweets", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const fetchTweetsAPI = async () => {
  const { data } = await axiosInstance.get("/tweets");
  return data;
};
