import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import type { LoginDto, RegisterDto, ApiResponse } from '@repo/types';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'get_hello' })
  async login(@Payload() Credential: LoginDto){
    return this.authService.login(Credential);
  }
}
