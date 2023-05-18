import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { SubmissionEntitiy } from './entities/submission.entity';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';

@Injectable()
export class SubmissionsService {
  constructor(private prisma: PrismaService){}

  create(data: SubmissionEntitiy) : Promise<SubmissionEntitiy> {
      return this.prisma.submission.create({data})
  }

  findAll() {
    return this.prisma.submission.findMany()
  }

  async findOne(id: string) : Promise<SubmissionEntitiy> {
    return await this.prisma.submission.findUnique({
      where: {id}, 
    })
  }

  update(id: string, data: UpdateSubmissionDto) : Promise<SubmissionEntitiy> {
    return this.prisma.submission.update({ where: {id} , data })
  }

  remove(id: string) :Promise<SubmissionEntitiy> {
    return this.prisma.submission.delete({where: {id}})
  }
}
