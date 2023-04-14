import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AUTH_BASE_ROUTE, COOKIE_ID, cookieOptions } from '../constants';
import { RefreshTokenGuard } from '../guards/refresh-token.guard';
import { Request, Response } from 'express';
import { RefreshTokenService } from '../services/refresh-token.service';
import { TokenService } from 'src/token/token.service';

@Controller(AUTH_BASE_ROUTE)
export class RefreshTokenController {
  constructor(
    private readonly refTokenService: RefreshTokenService,
    private readonly tokenService: TokenService,
  ) {}

  @UseGuards(RefreshTokenGuard)
  @Get('refresh-token')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    try {
      const { userId, tokenId } = req.app.locals.refreshTokenPayload;

      const newAccToken = await this.tokenService.createToken({
        type: 'AccessToken',
        userId,
      });

      const newRefToken = await this.tokenService.createToken({
        type: 'RefreshToken',
        userId,
      });

      await this.refTokenService.update({
        id: tokenId,
        newToken: newRefToken,
      });

      res.cookie(COOKIE_ID, `Bearer ${newRefToken}`, cookieOptions);

      return res.status(200).json({ token: newAccToken });
    } catch (error) {
      throw error;
    }
  }
}
