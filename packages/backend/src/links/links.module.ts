import { Module } from '@nestjs/common'
import { LinksService } from './links.service'
import { LinksController } from './links.controller'
import { PrismaModule } from 'nestjs-prisma'

@Module({
  controllers: [LinksController],
  providers: [LinksService],
  imports: [PrismaModule],
})
export class LinksModule {}
