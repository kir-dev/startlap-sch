import { Module } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { SubmissionsController } from './submissions.controller'
import { SubmissionsService } from './submissions.service'

@Module({
  controllers: [SubmissionsController],
  providers: [SubmissionsService, PrismaService],
})
export class SubmissionsModule {}
