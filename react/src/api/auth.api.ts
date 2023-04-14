import axiosInstance from "../utils/axiosInterceptor";
import { LoginDTO } from "./dtos/auth.dto";
import {
  LoginResponse,
  MeResponse,
  RefreshTokenResponse,
} from "./response/auth.response";

export const loginAPI = async (body: LoginDTO) => {
  const { data } = await axiosInstance.post<LoginResponse>("/auth/login", body);
  return data;
};

export const logoutAPI = async () => axiosInstance.get("/auth/logout");

export const refreshTokenAPI = async () => {
  const { data } = await axiosInstance.get<RefreshTokenResponse>(
    "/auth/refresh-token"
  );
  return data;
};

export const meAPI = async () => {
  const { data } = await axiosInstance.get<MeResponse>("/auth/me");
  return data;
};
