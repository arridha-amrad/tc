import { Injectable } from '@nestjs/common';
import { AUTHOR_DATA, MEDIA_DATA, POST_COUNT } from 'src/posts/post.constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { TweetDTO } from '../dto/tweet.dto';

@Injectable()
export class TweetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async fetchHomePosts({ userId }: { userId: string }) {
    return this.prismaService.tweet.findMany({
      orderBy: {
        createdAt: 'desc',
      },
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
              select: MEDIA_DATA,
            },
            Likes: {
              where: {
                userId,
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
              select: MEDIA_DATA,
            },
            Likes: {
              where: {
                userId: data.userId,
              },
            },
          },
        },
        parent: {
          select: {
            post: { include: { author: { select: AUTHOR_DATA } } },
          },
        },
        user: {
          select: AUTHOR_DATA,
        },
      },
    });
  }
}
