import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import type { LoginDto, RegisterDto, AuthResponse, JwtPayload } from '@repo/types';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private authClient: ClientProxy,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    return firstValueFrom(
      this.authClient.send({ cmd: 'auth_register' }, registerDto)
    );
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    return firstValueFrom(
      this.authClient.send({ cmd: 'auth_login' }, loginDto)
    );
  }

  async validateToken(token: string): Promise<JwtPayload> {
    return firstValueFrom(
      this.authClient.send({ cmd: 'auth_validate_token' }, { token })
    );
  }
}