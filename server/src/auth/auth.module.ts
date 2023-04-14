import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LogoutController } from './controllers/logout';
import { TokenModule } from 'src/token/token.module';
import { LoginController } from './controllers/login';
import { RefreshTokenService } from './services/refresh-token.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MeController } from './controllers/me';
import { RefreshTokenController } from './controllers/refreshToken';

@Module({
  imports: [UsersModule, TokenModule, PrismaModule],
  providers: [RefreshTokenService],
  controllers: [
    LogoutController,
    LoginController,
    MeController,
    RefreshTokenController,
  ],
})
export class AuthModule {}
