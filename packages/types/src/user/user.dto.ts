import type { Role } from '@repo/db';

export interface UserDto {
    id: string;
    email: string;
    name: string;
    role: Role;
}