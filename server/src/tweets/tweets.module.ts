import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PostsModule, AuthModule],
  providers: [TweetsService, PrismaService],
  controllers: [TweetsController],
})
export class TweetsModule {}
