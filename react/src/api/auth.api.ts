import axiosInstance from "../utils/axiosInterceptor";
import { LoginDTO } from "./dtos/auth.dto";
import {
  LoginResponse,
  MeResponse,
  RefreshTokenResponse,
} from "./response/auth.response";

export const loginAPI = async (body: LoginDTO) =>
  axiosInstance.post<LoginResponse>("/auth/login", body);

export const logoutAPI = async () => axiosInstance.get("/auth/logout");

export const refreshTokenAPI = async () =>
  axiosInstance.get<RefreshTokenResponse>("/auth/refresh-token");

export const meAPI = async () => axiosInstance.get<MeResponse>("/auth/me");
