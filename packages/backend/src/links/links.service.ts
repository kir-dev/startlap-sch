import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateLinkDto } from './dto/create-link.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { PrismaService } from 'nestjs-prisma'
import { Prisma } from '@prisma/client'

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createLinkDto: CreateLinkDto) {
    try {
      if (this.checkUrl(createLinkDto.url)) {
        return await this.prisma.link.create({ data: createLinkDto })
      } else {
        throw new HttpException('The url you entered is not found!', 404)
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException('This slug violates the unique constraint!')
        }
      }
    }
  }

  findAll() {
    return this.prisma.link.findMany()
  }

  async findOne(id: string) {
    const link = await this.prisma.link.findUnique({
      where: { id },
    })
    if (link === null) {
      throw new NotFoundException('The link you entered is not found!')
    }
    return link
  }

  async update(id: string, updateLinkDto: UpdateLinkDto) {
    return await this.prisma.link.update({ where: { id }, data: updateLinkDto })
  }

  async remove(id: string) {
    try {
      return await this.prisma.link.delete({ where: { id } })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException('This slug violates the unique constraint!')
        }
      }
    }
  }

  async checkUrl(url: string) {
    const response = await fetch(url)
    if (response.statusText === 'OK') {
      return true
    } else {
      return false
    }
  }
}
