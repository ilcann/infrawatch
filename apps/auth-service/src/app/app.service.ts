import { Injectable } from '@nestjs/common';
import type { LoginDto } from '@repo/types';

@Injectable()
export class AppService {
  login(Credential: LoginDto): string {
    return `Hello ${Credential.email}!`;
  }
}
