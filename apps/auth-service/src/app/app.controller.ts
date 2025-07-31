import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import type { LoginDto } from '@repo/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_hello' })
  async login(@Payload() Credential: LoginDto){
    return this.appService.login(Credential);
  }
}
