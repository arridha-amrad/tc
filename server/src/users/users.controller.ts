import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { hash } from 'argon2';
import { UsersService } from './users.service';
import { TRegisterDTO } from './dto/register.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
}
