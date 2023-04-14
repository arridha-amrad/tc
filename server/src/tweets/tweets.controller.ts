import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
// import { AccessGuard } from 'src/auth/access.guard';
import { PostsService } from 'src/posts/posts.service';
import { TweetsService } from './tweets.service';

@Controller('api/tweets')
export class TweetsController {
  constructor(
    private postService: PostsService,
    private tweetService: TweetsService,
  ) {}

  // @UseGuards(AccessGuard)
  @UseInterceptors(FilesInterceptor('files', 4))
  @Post('create')
  async create(@Body() data: { body: string }, @Req() req: Request) {
    console.log('body : ', data);
    console.log('body : ', data.body);
    // try {
    //   const me = req.user;
    //   console.log('me : ', me);

    //   const newPost = await this.postService.create({
    //     authorId: me.sub,
    //     body: data.body,
    //   });
    //   const newTweet = await this.tweetService.create({
    //     isRetweet: false,
    //     postId: newPost.id,
    //     userId: me.sub,
    //   });
    //   return { tweet: newTweet };
    // } catch (err) {
    //   throw err;
    // }
  }
}
