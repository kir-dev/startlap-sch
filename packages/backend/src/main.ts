import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { BACKEND_PORT } from './util/environment'

// import yaml from 'yaml'
// import fs from 'fs'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: [process.env['FRONTEND_URL'], 'http://localhost:3000/'],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    })
  )
  const config = new DocumentBuilder()
    .setTitle('Startlap SCH')
    .setDescription('The Startlap SCH API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  // fs.writeFileSync('./openapi.yaml', yaml.stringify(document, {}))
  SwaggerModule.setup('api', app, document)

  await app.listen(BACKEND_PORT)
}

bootstrap()
