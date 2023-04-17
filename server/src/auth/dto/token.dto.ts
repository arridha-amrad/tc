export type TokenType = 'AccessToken' | 'RefreshToken';

export type CreateTokenDTO = {
  userId: string;
  type: TokenType;
};

export type VerifyTokenDTO = {
  type: TokenType;
  token: string;
};
