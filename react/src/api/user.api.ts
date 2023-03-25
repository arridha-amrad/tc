import axiosInstance from "../utils/axiosInterceptor";
import { RegisterDTO } from "./dtos/user.dto";

export const registerAPI = async (body: RegisterDTO) => {
  try {
    const { data } = await axiosInstance.post<{ message: string }>(
      "/users/register",
      body
    );
    return data;
  } catch (err) {
    throw err;
  }
};
