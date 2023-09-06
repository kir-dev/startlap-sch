import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { UpdateSubmissionDto } from './dto/update-submission.dto'
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
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.submissionsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSubmissionDto: UpdateSubmissionDto) {
    return this.submissionsService.update(id, updateSubmissionDto)
  }

  @Patch(':id')
  async approve(@Param('id:', ParseUUIDPipe) id: string) {
    return this.submissionsService.approve(id)
  }

  @Patch(':id')
  async decline(@Param('id:', ParseUUIDPipe) id: string) {
    return this.submissionsService.decline(id)
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.submissionsService.remove(id)
  }
}
