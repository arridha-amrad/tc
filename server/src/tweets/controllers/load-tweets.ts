import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { TweetsService } from '../services/tweets.service';
import { TWEET_BASE_ROUTE } from '../tweet.constants';

@Controller(TWEET_BASE_ROUTE)
export class LoadTweetsController {
  constructor(private readonly tweetService: TweetsService) {}

  @Get()
  async loads() {
    try {
      const tweets = await this.tweetService.loads();
      return tweets;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
