import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LogoutController } from './controllers/logout';
import { LoginController } from './controllers/login';
import { RefreshTokenService } from './services/refresh-token.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MeController } from './controllers/me';
import { RefreshTokenController } from './controllers/refresh-token';
import { JwtModule } from '@nestjs/jwt';
import * as fs from 'fs';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
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
  providers: [RefreshTokenService],
  controllers: [
    LogoutController,
    LoginController,
    MeController,
    RefreshTokenController,
  ],
})
export class AuthModule {}
