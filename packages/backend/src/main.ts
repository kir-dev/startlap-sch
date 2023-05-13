import { NestFactory } from '@nestjs/core'
import { PrismaService } from 'nestjs-prisma'
import { AppModule } from './app.module'
import { BACKEND_PORT } from './util/environment'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const prismaService: PrismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  await app.listen(BACKEND_PORT)
}
bootstrap()
