import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateTokenDTO, VerifyTokenDTO } from './token.dto';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(data: CreateTokenDTO) {
    return this.jwtService.signAsync(
      { userId: data.userId },
      {
        expiresIn: data.type === 'AccessToken' ? '60s' : '1y',
        subject: data.type,
        issuer: 'twitter-clone',
      },
    );
  }

  async verifyToken(data: VerifyTokenDTO) {
    return this.jwtService.verifyAsync<{ userId: string }>(data.token, {
      maxAge: data.type === 'AccessToken' ? '60s' : '1y',
      subject: data.type,
      issuer: 'twitter-clone',
    });
  }
}
