import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { TweetsService } from './services/tweets.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateTweetController } from './controllers/create-tweet';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [PostsModule, PrismaModule, CloudinaryModule],
  providers: [TweetsService],
  controllers: [CreateTweetController],
})
export class TweetsModule {}
