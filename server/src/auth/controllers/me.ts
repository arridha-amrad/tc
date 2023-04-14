import {
  Controller,
  Get,
  NotFoundException,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AUTH_BASE_ROUTE } from '../constants';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '../guards/auth.guard';
import { Request } from 'express';

@Controller(AUTH_BASE_ROUTE)
export class MeController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@Req() req: Request) {
    try {
      const loginUserId = req.app.locals.userId;
      const storedUser = await this.userService.findById(loginUserId);
      if (!storedUser) throw new NotFoundException('User not found');
      const { password, ...rest } = storedUser;
      return rest;
    } catch (error) {
      throw error;
    }
  }
}
