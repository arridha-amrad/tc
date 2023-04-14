import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostsService } from './posts.service';

@Module({
  exports: [PostsService],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}
