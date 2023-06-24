import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { UpdateSubmissionDto } from './dto/update-submission.dto'
import { SubmissionsService } from './submissions.service'

@Controller('submissions')
@ApiTags('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return this.submissionsService.create(createSubmissionDto)
  }

  @Get()
  findAll() {
    return this.submissionsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubmissionDto: UpdateSubmissionDto) {
    return this.submissionsService.update(+id, updateSubmissionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.submissionsService.remove(+id)
  }
}
