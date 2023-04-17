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

@Controller(TWEET_BASE_ROUTE)
export class CreateTweetController {
  constructor(
    private readonly postService: PostsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @UseGuards(AuthGuard)
  @UseInterceptors(
    FilesInterceptor('files', 4, {
      storage: diskStorage({
        destination: './files',
      }),
    }),
  )
  @Post('create')
  async create(
    @Req() req: Request,
    @Body() body: { description: string },
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);

    try {
      const user = req.user as User;
      await this.postService.create({
        authorId: user.id,
        body: body.description,
      });
      files.map(async (file) => {
        await this.cloudinaryService.upload(file);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
