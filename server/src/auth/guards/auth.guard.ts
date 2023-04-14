import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { TokenService } from 'src/token/token.service';
import { Request } from 'express';
import { COOKIE_ID } from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const bearerToken = request.headers.authorization;
    const refreshToken = request.cookies[COOKIE_ID];
    const token = bearerToken?.split(' ')[1];

    if (!token) {
      if (refreshToken) {
        throw new UnauthorizedException();
      }
      return false;
    }
    try {
      const payload = await this.tokenService.verifyToken({
        token,
        type: 'AccessToken',
      });
      request.app.locals.userId = payload.userId;
      return true;
    } catch (error) {
      console.error('access guard error', JSON.stringify(error));
      if (error && error.message === 'jwt expired') {
        throw new UnauthorizedException();
      }
      return false;
    }
  }
}
