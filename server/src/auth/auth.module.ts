import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RefTokenModule } from 'src/ref-token/ref-token.module';
import jwtModuleOptions from './jwtModuleOptions';

@Module({
  imports: [
    RefTokenModule,
    UsersModule,
    PassportModule,
    JwtModule.register(jwtModuleOptions),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
