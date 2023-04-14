import { User } from "./user.response";

export type LoginResponse = {
  user: User;
  token: string;
};

export type RefreshTokenResponse = {
  token: string;
};

export type MeResponse = User;
