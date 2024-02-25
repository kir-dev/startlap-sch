import { Module } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { SubmissionsController } from './submissions.controller'
import { SubmissionsService } from './submissions.service'
import { LinksModule } from '../links/links.module'

@Module({
  controllers: [SubmissionsController],
  providers: [SubmissionsService, PrismaService],
  imports: [LinksModule],
})
export class SubmissionsModule {}
