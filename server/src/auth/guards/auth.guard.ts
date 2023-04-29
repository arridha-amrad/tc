import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { COOKIE_ID } from '../constants';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
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
      const { user } = this.jwtService.verify<{ user: Omit<User, 'password'> }>(
        token,
        { maxAge: '1h' },
      );
      request.user = user;

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
