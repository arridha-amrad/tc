import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TSave, TUpdate } from '../types/TRefreshTokenService';

@Injectable()
export class RefreshTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async save(data: TSave) {
    return this.prisma.token.create({
      data: {
        value: data.token,
        userId: data.userId,
      },
    });
  }

  async findOne(token: string) {
    return this.prisma.token.findFirst({ where: { value: token } });
  }

  async remove(id: string) {
    return this.prisma.token.delete({
      where: {
        id,
      },
    });
  }

  async update(data: TUpdate) {
    return this.prisma.token.update({
      where: {
        id: data.id,
      },
      data: { value: data.newToken },
    });
  }
}
