import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { CollectionModule } from './collection/collection.module'

@Module({
  imports: [CollectionModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
