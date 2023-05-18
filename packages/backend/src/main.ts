import { NestFactory } from '@nestjs/core';
import { PrismaService } from 'nestjs-prisma';
import { AppModule } from './app.module';
import { BACKEND_PORT } from './util/environment';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    })
  );

  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(BACKEND_PORT);
}
bootstrap();
