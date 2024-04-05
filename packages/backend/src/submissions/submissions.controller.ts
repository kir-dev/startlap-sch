import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { User, UserRole } from '@prisma/client'
import { CurrentUser } from 'src/auth/decorators/CurrentUser.decorator'
import { JwtAuth } from 'src/auth/decorators/JwtAuth'
import { Roles } from 'src/auth/decorators/Roles.decorator'
import { Link } from 'src/links/entities/link.entity'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { UpdateSubmissionDto } from './dto/update-submission.dto'
import { SubmissionEntitiy } from './entities/submission.entity'
import { SubmissionsService } from './submissions.service'

@JwtAuth()
@Controller('submissions')
@ApiTags('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  create(@Body() data: CreateSubmissionDto, @CurrentUser() user: User) {
    return this.submissionsService.create(data, user)
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MODERATOR)
  findAll() {
    return this.submissionsService.findAll()
  }
  @Get('/me')
  getOwn(@CurrentUser() user: User) {
    return this.submissionsService.getOwn(user)
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: User) {
    return this.submissionsService.findOne(id, user)
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSubmissionDto: UpdateSubmissionDto, @CurrentUser() user: User) {
    return this.submissionsService.update(id, updateSubmissionDto, user)
  }

  @Patch('/:id/approve.ts')
  @Roles(UserRole.ADMIN, UserRole.MODERATOR)
  approve(@Param('id', ParseUUIDPipe) id: string): Promise<Link> {
    return this.submissionsService.approve(id)
  }

  @Patch('/:id/decline')
  @Roles(UserRole.ADMIN, UserRole.MODERATOR)
  decline(@Param('id', ParseUUIDPipe) id: string): Promise<SubmissionEntitiy> {
    return this.submissionsService.decline(id)
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: User) {
    return this.submissionsService.remove(id, user)
  }
}
