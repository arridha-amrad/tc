import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import jwtModuleOptions from 'src/auth/jwtModuleOptions';

@Module({
  imports: [PostsModule, AuthModule, JwtModule.register(jwtModuleOptions)],
  providers: [TweetsService, PrismaService],
  controllers: [TweetsController],
})
export class TweetsModule {}
