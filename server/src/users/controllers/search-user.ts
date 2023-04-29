import {
  Controller,
  Get,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { USER_BASE_ROUTE } from '../users.constants';
import { UsersService } from '../users.service';

@Controller(USER_BASE_ROUTE)
export class SearchUserController {
  constructor(private readonly userService: UsersService) {}

  @Get('search')
  async search(@Query('name') name: string) {
    try {
      const users = await this.userService.search(name);
      return users;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
