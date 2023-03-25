import { User } from "./user.response";

export type LoginResponse = {
  user: User;
  accessToken: string;
};

export type RefreshTokenResponse = {
  accessToken: string;
};

export type MeResponse = User;
