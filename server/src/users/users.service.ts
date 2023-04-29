import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TRegisterDTO } from './dto/user.dto';
import { AUTHOR_DATA } from 'src/posts/post.constants';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        username,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async create(data: TRegisterDTO): Promise<User> {
    const { firstName, lastName, ...rest } = data;
    return this.prisma.user.create({
      data: {
        ...rest,
        fullname: `${firstName.trim()} ${lastName.trim()}`.trim(),
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    return this.prisma.user.findFirst({ where: { id } });
  }

  async search(name: string) {
    return this.prisma.user.findMany({
      where: {
        OR: [
          {
            username: { contains: name, mode: 'insensitive' },
          },
          {
            fullname: { contains: name, mode: 'insensitive' },
          },
        ],
      },
      select: AUTHOR_DATA,
    });
  }
}
