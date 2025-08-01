import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'fallback-secret-for-development',
  accessTokenExpiresIn: process.env.JWT_EXPIRES_IN || '15m'
}));