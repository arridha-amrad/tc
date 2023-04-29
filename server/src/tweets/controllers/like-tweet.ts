import {
  Body,
  Controller,
  InternalServerErrorException,
  NotFoundException,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TWEET_BASE_ROUTE } from '../tweet.constants';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request } from 'express';
import { User } from '@prisma/client';
import { PostsService } from 'src/posts/posts.service';
import { LikeService } from '../services/like.services';

@Controller(TWEET_BASE_ROUTE)
export class LikeTweetController {
  constructor(
    private readonly postService: PostsService,
    private readonly likeService: LikeService,
  ) {}
  @UseGuards(AuthGuard)
  @Post('/like')
  async like(@Body() body: { postId: string }, @Req() req: Request) {
    const user = req.user as User;
    try {
      const post = await this.postService.findById(body.postId);
      if (!post) throw new NotFoundException('Post not found');
      const userId = user.id;
      const postId = post.id;
      const likePost = await this.likeService.find({
        postId,
        userId,
      });
      if (likePost) {
        await this.likeService.remove({ postId, userId });
        return 'dislike';
      } else {
        await this.likeService.create({ postId, userId });
        return 'like';
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
