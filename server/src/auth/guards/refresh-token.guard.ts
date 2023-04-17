import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { REFRESH_TOKEN_PAYLOAD, COOKIE_ID } from '../constants';
import { RefreshTokenService } from '../services/refresh-token.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RefreshTokenGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly refreshTokenService: RefreshTokenService,
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

      const { email } = this.jwtService.verify<{ email: string }>(token, {
        maxAge: '1y',
      });

      request.app.locals[REFRESH_TOKEN_PAYLOAD] = {
        tokenId: storedToken.id,
        email,
      };
      return true;
    } catch (error) {
      return false;
    }
  }
}
