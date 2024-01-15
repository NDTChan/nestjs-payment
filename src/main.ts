import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { LoggerFactory } from './LoggerFactory';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
    bufferLogs: true,
    logger: LoggerFactory(),
  });
  app.useBodyParser('json', { limit: '1mb' });
  console.log('Start with PORT 3000');
  await app.listen(3000);
}
bootstrap();
