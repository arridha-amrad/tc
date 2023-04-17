import { Injectable } from '@nestjs/common';
import { AUTHOR_DATA, POST_COUNT } from 'src/posts/post.constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { TweetDTO } from '../dto/tweet.dto';

@Injectable()
export class TweetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async loads() {
    return this.prismaService.tweet.findMany({
      include: {
        post: {
          include: {
            _count: {
              select: POST_COUNT,
            },
            author: {
              select: AUTHOR_DATA,
            },
            Medias: {
              select: {
                url: true,
              },
            },
          },
        },
        user: {
          select: AUTHOR_DATA,
        },
      },
    });
  }

  async create(data: TweetDTO) {
    return this.prismaService.tweet.create({
      data,
      include: {
        post: {
          include: {
            _count: {
              select: POST_COUNT,
            },
            author: {
              select: AUTHOR_DATA,
            },
            Medias: {
              select: {
                url: true,
              },
            },
          },
        },
        user: {
          select: AUTHOR_DATA,
        },
      },
    });
  }
}
