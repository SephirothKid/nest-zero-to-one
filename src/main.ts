import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.setGlobalPrefix('nest-zero-to-one');
  await app.listen(3000);
}
bootstrap();
