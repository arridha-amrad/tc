import {
  Controller,
  Get,
  InternalServerErrorException,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TweetsService } from '../services/tweets.service';
import { TWEET_BASE_ROUTE } from '../tweet.constants';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from '@prisma/client';
import { Request } from 'express';

@Controller(TWEET_BASE_ROUTE)
export class LoadTweetsController {
  constructor(private readonly tweetService: TweetsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async loads(@Req() req: Request) {
    const user = req.user as User;
    try {
      const tweets = await this.tweetService.fetchHomePosts({
        userId: user.id,
      });
      return tweets;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
