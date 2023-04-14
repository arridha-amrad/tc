import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RegisterUserController } from './controllers/register-user.controller';

@Module({
  exports: [UsersService],
  controllers: [RegisterUserController],
  providers: [UsersService],
  imports: [PrismaModule],
})
export class UsersModule {}
