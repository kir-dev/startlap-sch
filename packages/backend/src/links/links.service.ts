import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import axios from 'axios'
import { PrismaService } from 'nestjs-prisma'
import { CreateLinkDto } from './dto/create-link.dto'
import { SearchLink } from './dto/search-link.dto'
import { slugAvailable } from './dto/slug-verification.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { Link } from './entities/link.entity'
import { link } from 'fs'

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLinkDto: CreateLinkDto) {
    try {
      if (await this.checkUrl(createLinkDto.url)) {
        return await this.prisma.link.create({ data: createLinkDto })
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
    if (typeof params.term === 'undefined') return this.prisma.link.findMany()
    return this.prisma.link.findMany({
      where: {
        OR: [
          {
            title: {
              contains: params.term,
              mode: 'insensitive',
            },
          },
          {
            slug: {
              contains: params.term,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: params.term,
              mode: 'insensitive',
            },
          },
          {
            keywords: {
              has: params.term.toLowerCase(),
            },
          },
        ],
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

  async visit(slug: string) {
    const link = await this.prisma.link.findUnique({
      where: { slug },
    })
    if (link !== null) {
      await this.prisma.visit.create({
        data: {
          linkId: link.id,
        },
      })
      return link
    } else {
      throw new NotFoundException('The slug you entered is not found!')
    }
  }

  async trending() {
    const numberOfTrendingLinks = 5
    const trendingLinksInThePastDay = 7
    const prevDate = new Date()
    prevDate.setDate(prevDate.getDate() - trendingLinksInThePastDay)

    const result = await this.prisma.visit.groupBy({
      by: ['linkId'],
      _count: {
        linkId: true,
      },
      where: {
        timeStamp: {
          lte: new Date(),
          gte: prevDate,
        },
      },
      orderBy: {
        _count: {
          linkId: 'desc',
        },
      },
      take: numberOfTrendingLinks,
    })

    const trendingLinks = result.map(({ _count, ...rest }) => ({
      ...rest,
      _count: { visits: _count.linkId, linkId: undefined },
    }))

    return trendingLinks
  }

  //! Testing purposes only
  async getVisitsAll() {
    return this.prisma.visit.findMany()
  }
}
