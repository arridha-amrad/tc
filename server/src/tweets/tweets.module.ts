import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { TweetsService } from './services/tweets.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateTweetController } from './controllers/create-tweet';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { PostsService } from 'src/posts/posts.service';
import { MediaService } from './services/medias.service';
import { LoadTweetsController } from './controllers/load-tweets';

@Module({
  imports: [PostsModule, PrismaModule, CloudinaryModule],
  providers: [TweetsService, PostsService, MediaService],
  controllers: [CreateTweetController, LoadTweetsController],
})
export class TweetsModule {}
