import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TRegisterDTO } from './dto/register.dto';

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
        fullname: `${firstName} ${lastName}`.trim(),
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    return this.prisma.user.findFirst({ where: { id } });
  }
}
