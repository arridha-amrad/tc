import {
  Controller,
  Get,
  NotFoundException,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  AUTH_BASE_ROUTE,
  COOKIE_ID,
  REFRESH_TOKEN_PAYLOAD,
  cookieOptions,
} from '../constants';
import { RefreshTokenGuard } from '../guards/refresh-token.guard';
import { Request, Response } from 'express';
import { RefreshTokenService } from '../services/refresh-token.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Controller(AUTH_BASE_ROUTE)
export class RefreshTokenController {
  constructor(
    private refTokenService: RefreshTokenService,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(RefreshTokenGuard)
  @Get('refresh-token')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    try {
      const { email, tokenId } = req.app.locals[REFRESH_TOKEN_PAYLOAD];
      const user = await this.userService.findOneByEmail(email);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      // eslint-disable-next-line
      const { password, ...rest } = user;

      const newAccToken = this.jwtService.sign(
        { user: rest },
        { expiresIn: '1h' },
      );

      const newRefToken = this.jwtService.sign(
        {
          email: user.email,
        },
        { expiresIn: '1y' },
      );

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
