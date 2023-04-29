import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { UsersService } from '../users.service';
import { hash } from 'argon2';
import { TRegisterDTO } from '../dto/user.dto';
import { USER_BASE_ROUTE } from '../users.constants';

@Controller(USER_BASE_ROUTE)
export class RegisterUserController {
  constructor(private readonly userService: UsersService) {}

  @HttpCode(201)
  @Post('register')
  async register(@Body() data: TRegisterDTO) {
    const { email, username, password, lastName, firstName } = data;
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

      await this.userService.create({
        email,
        firstName,
        lastName,
        username,
        password: hashedPassword,
      });

      return {
        message: 'Registration is successful',
      };
    } catch (error) {
      throw error;
    }
  }
}
