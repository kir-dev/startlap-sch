import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { SubmissionEntitiy } from './entities/submission.entity';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class SubmissionsService {
  constructor(private prisma: PrismaService){}

  async create(data: CreateSubmissionDto) : Promise<SubmissionEntitiy> {
    try{
      return await this.prisma.submission.create({data})
    }
    catch(e){
      if(e instanceof Prisma.PrismaClientKnownRequestError) {
        if(e.code === 'P2002'){
            throw new BadRequestException("Unique constraint violation")
        }
        throw e
      }
    }   
  }

  async findAll() {
    return await this.prisma.submission.findMany()
  }

  async findOne(id: string) : Promise<SubmissionEntitiy> {
    const submission = await this.prisma.submission.findUnique({
      where: {id},
    })
    if(submission === null){
      throw new NotFoundException("Submission not found")
    }
      return submission
  }

  async update(id: string, data: UpdateSubmissionDto) : Promise<SubmissionEntitiy> {
    try{
      const submission = await this.prisma.submission.update({ where: {id} , data })
      if(submission === null){
        throw new BadRequestException("Record to update not found")
      }
      else {
        return submission
      }
    }
    catch(e){
      if(e instanceof Prisma.PrismaClientKnownRequestError){
        if(e.code==='P2002'){
          throw new BadRequestException("Unique constraint violation")
        }
        throw e
      }
    }
  }

  remove(id: string) :Promise<SubmissionEntitiy> {
      return this.prisma.submission.delete({where: {id}})
  }
}