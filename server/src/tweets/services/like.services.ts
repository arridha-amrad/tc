import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LikeDTO } from '../dto/like.dto';

@Injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) {}

  async find(data: LikeDTO) {
    const { postId, userId } = data;
    return this.prisma.like.findFirst({ where: { postId, userId } });
  }

  async remove(data: LikeDTO) {
    const { postId, userId } = data;
    return this.prisma.like.delete({
      where: { postId_userId: { postId, userId } },
    });
  }

  async create(data: LikeDTO) {
    const { postId, userId } = data;
    return this.prisma.like.create({ data: { postId, userId } });
  }
}
