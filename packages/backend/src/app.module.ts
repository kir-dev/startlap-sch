import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CollectionModule } from './collection/collection.module'

@Module({
  imports: [CollectionModule, PrismaModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
