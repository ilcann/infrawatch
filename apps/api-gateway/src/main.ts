import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Add global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Enable CORS
  app.enableCors();

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  Logger.log(
    `API Gateway is running on: http://localhost:${port}`,
    'Bootstrap',
  );
}
bootstrap().catch((error) => {
  Logger.error('Error starting application:', error);
  process.exit(1);
});
