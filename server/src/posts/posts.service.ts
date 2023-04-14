import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDTO } from './post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: PostDTO) {
    const { authorId, body } = data;
    return this.prisma.post.create({
      data: {
        body,
        authorId,
      },
    });
  }
}
