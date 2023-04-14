import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { REFRESH_TOKEN_PAYLOAD, COOKIE_ID } from '../constants';
import { TokenService } from 'src/token/token.service';
import { RefreshTokenService } from '../services/refresh-token.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RefreshTokenGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly refreshTokenService: RefreshTokenService,
    private readonly userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest<Request>();
      const [type, token] = request.cookies[COOKIE_ID].split(' ');
      if (type !== 'Bearer') {
        throw new UnauthorizedException();
      }

      const storedToken = await this.refreshTokenService.findOne(token);

      if (!storedToken) throw new NotFoundException('Token not found');

      const { userId } = await this.tokenService.verifyToken({
        token,
        type: 'RefreshToken',
      });

      const storedUser = await this.userService.findById(userId);
      if (!storedUser) throw new NotFoundException('User not found');

      request.app.locals[REFRESH_TOKEN_PAYLOAD] = {
        tokenId: storedToken.id,
        userId,
      };
      return true;
    } catch (error) {
      return false;
    }
  }
}
