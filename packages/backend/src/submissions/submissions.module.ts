import { Module } from '@nestjs/common'
import { LinksService } from 'src/links/links.service'
import { SubmissionsController } from './submissions.controller'
import { SubmissionsService } from './submissions.service'

@Module({
  controllers: [SubmissionsController],
  providers: [SubmissionsService, LinksService],
})
export class SubmissionsModule {}
