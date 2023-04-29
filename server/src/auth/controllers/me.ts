import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AUTH_BASE_ROUTE } from '../constants';
import { AuthGuard } from '../guards/auth.guard';
import { Request } from 'express';

@Controller(AUTH_BASE_ROUTE)
export class MeController {
  @UseGuards(AuthGuard)
  @Get()
  async me(@Req() req: Request) {
    try {
      return req.user;
    } catch (error) {
      throw error;
    }
  }
}
