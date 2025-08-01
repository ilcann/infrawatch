import { UserDto } from "../user";

export interface AuthResponse {
    accessToken: string;
    user: UserDto;
}