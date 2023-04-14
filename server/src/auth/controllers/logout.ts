import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RefreshTokenService } from '../services/refresh-token.service';
import { AUTH_BASE_ROUTE, COOKIE_ID, cookieOptions } from '../constants';

@Controller(AUTH_BASE_ROUTE)
export class LogoutController {
  constructor(private refTokenService: RefreshTokenService) {}

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    const token = req.cookies[COOKIE_ID] as string | undefined;
    try {
      if (token) {
        const [type, value] = token.split(' ');
        if (type === 'Bearer') {
          const storedToken = await this.refTokenService.findOne(value);
          if (storedToken) {
            await this.refTokenService.remove(storedToken.id);
          }
        }
      }
      req.headers.authorization = '';
      res.clearCookie(COOKIE_ID, cookieOptions);
      return res.status(200).send('logout gracefully');
    } catch (error) {
      throw error;
    }
  }
}
