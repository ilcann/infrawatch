import { Injectable } from '@nestjs/common';
import type { LoginDto } from '@repo/types';

@Injectable()
export class AuthService {
  login(Credential: LoginDto): string {
    return `Hello ${Credential.email}!`;
  }
}
