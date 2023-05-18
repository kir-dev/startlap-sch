import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { Submission_Status } from '@prisma/client';
import { SubmissionEntitiy } from './entities/submission.entity';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  create(@Body() data: SubmissionEntitiy) {
    return this.submissionsService.create(data);
  }

  @Get()
  findAll() {
    return this.submissionsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const submission =  await this.submissionsService.findOne(id)
    if (submission === null)
      throw new NotFoundException("Submission nem található")
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSubmissionDto: UpdateSubmissionDto) {
    return this.submissionsService.update(id, updateSubmissionDto)
  }

  @Patch(':id')
  async approve(@Param('id:', ParseUUIDPipe) id: string){
    const submission = await this.submissionsService.findOne(id)
    submission.status = Submission_Status.APPROVED
    return this.submissionsService.update(id,submission)
  }

  @Patch(':id')
  async decline(@Param('id:', ParseUUIDPipe) id: string){
    const submission = await this.submissionsService.findOne(id)
    submission.status = Submission_Status.DECLINED
    return this.submissionsService.update(id,submission)
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.submissionsService.remove(id)
  }
}