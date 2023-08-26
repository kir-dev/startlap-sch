import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Prisma, SUBMISSION_STATUS } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { Link } from 'src/links/entities/link.entity'
import { LinksService } from 'src/links/links.service'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { UpdateSubmissionDto } from './dto/update-submission.dto'
import { SubmissionEntitiy } from './entities/submission.entity'

@Injectable()
export class SubmissionsService {
  constructor(private prisma: PrismaService, private linksService: LinksService) {}

  async create(data: CreateSubmissionDto): Promise<SubmissionEntitiy> {
    try {
      return await this.prisma.submission.create({ data: { ...data, status: SUBMISSION_STATUS.IN_REVIEW } })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException('Unique constraint violation')
        }
        throw e
      }
    }
  }

  async findAll() {
    return await this.prisma.submission.findMany()
  }

  async findOne(id: string): Promise<SubmissionEntitiy> {
    const submission = await this.prisma.submission.findUnique({
      where: { id },
    })
    if (submission === null) {
      throw new NotFoundException('Submission not found')
    }
    return submission
  }

  async update(id: string, data: UpdateSubmissionDto): Promise<SubmissionEntitiy | Link> {
    try {
      const submission = await this.prisma.submission.update({ where: { id }, data })
      if (submission === null) {
        throw new BadRequestException('Record to update not found')
      } else {
        if (data.status === SUBMISSION_STATUS.APPROVED) {
          const { adminComment, status, oldLinkId, id, ...linkData } = submission
          if (submission.oldLinkId) {
            return this.prisma.link.update({ where: { id: oldLinkId }, data: linkData })
          }
          const link = await this.prisma.link.create({ data: linkData })
          this.prisma.submission.update({ where: { id }, data: { oldLinkId: link.id } })
          return link
        }
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException('Unique constraint violation')
        }
        throw e
      }
    }
  }

  remove(id: string): Promise<SubmissionEntitiy> {
    return this.prisma.submission.delete({ where: { id } })
  }
}
