import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediaService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(urls: string[], postId: string) {
    return this.prismaService.media.createMany({
      data: urls.map((url) => ({ postId, url })),
    });
  }
}
