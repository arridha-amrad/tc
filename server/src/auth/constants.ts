import { CookieOptions } from 'express';

export const AUTH_BASE_ROUTE = 'api/auth';

export const COOKIE_ID = 'cid';

export const cookieOptions: CookieOptions = {
  sameSite: 'lax',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
};

export const REFRESH_TOKEN_PAYLOAD = 'refreshTokenPayload';
