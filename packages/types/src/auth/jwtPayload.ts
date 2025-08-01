import type { Role } from '@repo/db';

export interface JwtPayload {
  sub: string;
  name: string;
  email: string;
  role: Role;
  iat: number;
  exp: number;
}