import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const httpPort = parseInt(process.env.HTTP_PORT || '3001', 10);
  const tcpPort = parseInt(process.env.TCP_PORT || '3002', 10);

  // Create hybrid application (HTTP + Microservice)
  const app = await NestFactory.create(AppModule);
  
  // Add global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Enable CORS for HTTP endpoints
  app.enableCors();

  // Add microservice transport
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: tcpPort,
    },
  });

  // Start both HTTP and microservice
  await app.startAllMicroservices();
  await app.listen(httpPort);
  
  Logger.log(`Auth service HTTP server is running on port ${httpPort}`, 'Bootstrap');
  Logger.log(`Auth service TCP microservice is running on port ${tcpPort}`, 'Bootstrap');
}

bootstrap().catch((error) => {
  Logger.error('Error starting application:', error);
  process.exit(1);
});
