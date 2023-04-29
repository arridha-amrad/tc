import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { TweetsService } from './services/tweets.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateTweetController } from './controllers/create-tweet';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { PostsService } from 'src/posts/posts.service';
import { MediaService } from './services/medias.service';
import { LoadTweetsController } from './controllers/load-tweets';
import { LikeTweetController } from './controllers/like-tweet';
import { LikeService } from './services/like.services';

@Module({
  imports: [PostsModule, PrismaModule, CloudinaryModule],
  providers: [TweetsService, PostsService, MediaService, LikeService],
  controllers: [
    CreateTweetController,
    LoadTweetsController,
    LikeTweetController,
  ],
})
export class TweetsModule {}
