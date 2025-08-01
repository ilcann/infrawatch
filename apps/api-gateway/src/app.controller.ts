import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import type { JwtPayload } from '@repo/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@CurrentUser() user: JwtPayload) {
    return {
      message: 'This is a protected route',
      user: {
        id: user.sub,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}
