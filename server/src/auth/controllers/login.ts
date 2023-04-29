import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginRequestDTO } from '../dto/login.dto';

import { UsersService } from 'src/users/users.service';
import { RefreshTokenService } from '../services/refresh-token.service';
import { verify } from 'argon2';
import { AUTH_BASE_ROUTE, COOKIE_ID, cookieOptions } from '../constants';
import { JwtService } from '@nestjs/jwt';
import { LoginGuard } from '../guards/login.guard';

@Controller(AUTH_BASE_ROUTE)
export class LoginController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {}

  @UseGuards(LoginGuard)
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

      // eslint-disable-next-line
      const { password: pwd, ...rest } = user;

      const accessToken = this.jwtService.sign(
        { user: rest },
        { expiresIn: '1h' },
      );

      const refreshToken = this.jwtService.sign(
        { email: user.email },
        { expiresIn: '1y' },
      );

      await this.refreshTokenService.save({
        token: refreshToken,
        userId: user.id,
      });

      res.cookie(COOKIE_ID, `Bearer ${refreshToken}`, cookieOptions);

      return res.status(200).json({ user: rest, token: accessToken });
    } catch (error) {
      throw error;
    }
  }
}
