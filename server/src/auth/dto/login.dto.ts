import { User } from '@prisma/client';

export type LoginRequestDTO = {
  identity: string;
  password: string;
};

export type LoginResponseDTO = {
  user: User;
  token: string;
};
