import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as fs from 'fs';
import { TokenService } from './token.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      privateKey: fs.readFileSync('./private.pem'),
      publicKey: fs.readFileSync('./public.pem'),
      signOptions: {
        algorithm: 'RS256',
        issuer: 'twitter-clone',
      },
    }),
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
