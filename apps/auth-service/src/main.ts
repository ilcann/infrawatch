import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const port = parseInt(process.env.PORT || '3001', 10);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: port
    }
  });

  await app.listen();
  Logger.log(`Auth service is running on port ${port}`, 'Bootstrap');
}
bootstrap().catch((error) => {
  Logger.error('Error starting application:', error);
  process.exit(1);
});
