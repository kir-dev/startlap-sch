import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Link } from 'src/links/entities/link.entity'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { UpdateSubmissionDto } from './dto/update-submission.dto'
import { SubmissionEntitiy } from './entities/submission.entity'
import { SubmissionsService } from './submissions.service'

@Controller('submissions')
@ApiTags('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  create(@Body() data: CreateSubmissionDto) {
    return this.submissionsService.create(data)
  }

  @Get()
  findAll() {
    return this.submissionsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.submissionsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSubmissionDto: UpdateSubmissionDto) {
    return this.submissionsService.update(id, updateSubmissionDto)
  }

  @Patch('/:id/approve')
  approve(@Param('id', ParseUUIDPipe) id: string): Promise<Link> {
    return this.submissionsService.approve(id)
  }

  @Patch('/:id/decline')
  decline(@Param('id', ParseUUIDPipe) id: string): Promise<SubmissionEntitiy> {
    return this.submissionsService.decline(id)
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.submissionsService.remove(id)
  }
}
