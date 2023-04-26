import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { TWEET_BASE_ROUTE } from '../tweet.constants';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { PostsService } from 'src/posts/posts.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Request } from 'express';
import { User } from '.prisma/client';
import { diskStorage } from 'multer';
import { MediaService } from '../services/medias.service';
import * as fs from 'fs';
import { TweetsService } from '../services/tweets.service';

@Controller(TWEET_BASE_ROUTE)
export class CreateTweetController {
  constructor(
    private readonly postService: PostsService,
    private readonly mediaService: MediaService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly tweetService: TweetsService,
  ) {}

  @UseGuards(AuthGuard)
  @UseInterceptors(
    FilesInterceptor('files', 4, {
      storage: diskStorage({
        destination: './files',
      }),
    }),
  )
  @Post()
  async create(
    @Req() req: Request,
    @Body() body: { description: string },
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    try {
      const user = req.user as User;
      const urls: Array<string> = [];

      const post = await this.postService.create({
        authorId: user.id,
        body: body.description,
      });

      for (let i = 0; i < files.length; i++) {
        const data = await this.cloudinaryService.upload(files[i]);
        urls.push(data.secure_url);
      }
      await this.mediaService.create(urls, post.id);

      const tweet = await this.tweetService.create({
        isRetweet: false,
        postId: post.id,
        userId: user.id,
      });

      files.forEach((file) => fs.unlinkSync(file.path));

      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}
