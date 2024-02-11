import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { LinksController } from './links.controller'
import { LinksService } from './links.service'
import { Link } from './entities/link.entity'

@Module({
  controllers: [LinksController],
  providers: [LinksService],
  imports: [PrismaModule],
  exports: [LinksService],
})
export class LinksModule {}
