import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RefreshTokenService } from '../services/refresh-token.service';
import { Request } from 'express';
import { COOKIE_ID } from '../constants';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private refTokenService: RefreshTokenService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const bearerToken = request.cookies[COOKIE_ID];

    if (bearerToken) {
      const [type, token] = bearerToken.split(' ');
      if (type === 'Bearer') {
        const storedToken = await this.refTokenService.findOne(token);
        if (storedToken) {
          await this.refTokenService.remove(storedToken.id);
        }
      }
    }

    return true;
  }
}
