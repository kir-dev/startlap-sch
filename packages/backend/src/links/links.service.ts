import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import axios from 'axios'
import { PrismaService } from 'nestjs-prisma'
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

  async update(id: string, updateLinkDto: UpdateLinkDto) {
    try {
      if (await this.checkUrl(updateLinkDto.url)) {
        return await this.prisma.link.update({ where: { id }, data: updateLinkDto })
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
}
