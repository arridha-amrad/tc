import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { hash } from 'argon2';
import { UsersService } from './users.service';
import { TRegisterDTO } from './dto/register.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async register(@Body() data: TRegisterDTO) {
    const { email, username, password } = data;
    try {
      const isUsernameRegistered = await this.userService.findOneByUsername(
        username,
      );

      if (isUsernameRegistered) {
        throw new BadRequestException('Username has been registered');
      }

      const isEmailRegistered = await this.userService.findOneByEmail(email);

      if (isEmailRegistered) {
        throw new BadRequestException('Email has been registered');
      }

      const hashedPassword = await hash(password);
      this.userService.create({ ...data, password: hashedPassword });
      return {
        message: 'Registration is successful',
      };
    } catch (error) {
      throw error;
    }
  }
}
