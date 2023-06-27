import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { PrismaService } from 'nestjs-prisma'
import { AppModule } from './app.module'
import { BACKEND_PORT } from './util/environment'

const yaml = require('yaml')
const fs = require('fs')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    })
  )
  const config = new DocumentBuilder().setTitle('Startlap SCH').setDescription('The Startlap SCH API description').setVersion('1.0').build()
  const document = SwaggerModule.createDocument(app, config)
  fs.writeFileSync('./openapi.yaml', yaml.stringify(document, {}))
  SwaggerModule.setup('api', app, document)

  const prismaService: PrismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)
  await app.listen(BACKEND_PORT)
}

bootstrap()
