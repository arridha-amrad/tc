import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginRequestDTO } from '../dto/login.dto';
import { TokenService } from 'src/token/token.service';
import { UsersService } from 'src/users/users.service';
import { RefreshTokenService } from '../services/refresh-token.service';
import { verify } from 'argon2';
import { AUTH_BASE_ROUTE, COOKIE_ID, cookieOptions } from '../constants';

@Controller(AUTH_BASE_ROUTE)
export class LoginController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UsersService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {}

  @Post('login')
  async login(@Body() data: LoginRequestDTO, @Res() res: Response) {
    const { identity, password } = data;

    try {
      const user = identity.includes('@')
        ? await this.userService.findOneByEmail(identity)
        : await this.userService.findOneByUsername(identity);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const isPasswordMatch = await verify(user.password, password);

      if (!isPasswordMatch) {
        throw new BadRequestException('Invalid email and password');
      }

      const accessToken = await this.tokenService.createToken({
        type: 'AccessToken',
        userId: user.id,
      });

      const refreshToken = await this.tokenService.createToken({
        type: 'RefreshToken',
        userId: user.id,
      });

      await this.refreshTokenService.save({
        token: refreshToken,
        userId: user.id,
      });

      res.cookie(COOKIE_ID, `Bearer ${refreshToken}`, cookieOptions);

      const { password: pwd, ...rest } = user;

      return res.status(200).json({ user: rest, token: accessToken });
    } catch (error) {
      throw error;
    }
  }
}
