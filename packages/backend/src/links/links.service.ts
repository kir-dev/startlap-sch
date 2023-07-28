import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import axios from 'axios'
import { ClassConstructor, plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { Request } from 'express'
import { unlink } from 'fs'
import { PrismaService } from 'nestjs-prisma'
import { join } from 'path'
import { CreateLinkDto } from './dto/create-link.dto'
import { SearchLink } from './dto/search-link.dto'
import { slugAvailable } from './dto/slug-verification.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { Link } from './entities/link.entity'

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLinkDto: CreateLinkDto, fileName?: string) {
    try {
      if (await this.checkUrl(createLinkDto.url)) {
        return await this.prisma.link.create({ data: { ...createLinkDto, iconUrl: fileName } })
      } else {
        throw new BadRequestException('The url you entered is not found!')
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new BadRequestException('This slug violates the unique constraint!')
      }
      throw e
    }
  }

  async findAll(params: SearchLink): Promise<Link[]> {
    return this.prisma.link.findMany({
      where: {
        title: {
          contains: params.title,
          mode: 'insensitive',
        },
      },
    })
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

  async update(id: string, updateLinkDto: UpdateLinkDto, fileName?: string) {
    try {
      if (await this.checkUrl(updateLinkDto.url)) {
        const oldLink = await this.prisma.link.findUnique({ where: { id } })
        const newLink = await this.prisma.link.update({ where: { id }, data: { ...updateLinkDto, iconUrl: fileName } })
        if (oldLink.iconUrl) {
          unlink(join(process.cwd(), '/static', oldLink.iconUrl), () => {})
        }
        return newLink
      } else {
        throw new BadRequestException('The url you entered is not found!')
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new BadRequestException('This slug violates the unique constraint!')
      }
      throw e
    }
  }

  async remove(id: string) {
    return await this.prisma.link.delete({ where: { id } })
  }

  async checkSlug(slug: string): Promise<slugAvailable> {
    const link = await this.prisma.link.findUnique({
      where: { slug },
    })
    return {
      available: link === null,
    }
  }

  async checkUrl(url: string) {
    try {
      const response = await axios.head(url)
      return response.status === 200
    } catch (e) {
      throw new BadRequestException('Link validation failed!')
    }
  }

  async validateLink<T extends object>(dtoType: ClassConstructor<T>, req: Request) {
    const dto = plainToClass(dtoType, req.body)
    const errors = await validate(dto, { forbidNonWhitelisted: true, forbidUnknownValues: true })
    if (errors.length > 0) {
      throw new BadRequestException(errors.map(e => Object.values(e.constraints)).flat())
    }
    return dto
  }
}
