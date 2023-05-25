import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createLinkDto: CreateLinkDto) {
    try {
      return await this.prisma.link.create({ data: createLinkDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException('This slug violates the unique constraint!');
        }
      }
    }
  }

  findAll() {
    return this.prisma.link.findMany();
  }

  async findOne(id: string) {
    const link = await this.prisma.link.findUnique({
      where: { id },
    });

    if (link === null) {
      throw new NotFoundException('The link you entered is not found!');
    }

    return link;
  }

  async update(id: string, updateLinkDto: UpdateLinkDto) {
    return await this.prisma.link.update({ where: { id }, data: updateLinkDto });
  }

  async remove(id: string) {
    return await this.prisma.link.delete({ where: { id } });
  }
}
