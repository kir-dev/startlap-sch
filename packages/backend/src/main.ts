import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { BACKEND_PORT } from './util/environment'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(BACKEND_PORT)
}
bootstrap()
