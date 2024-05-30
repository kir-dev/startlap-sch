import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { User, UserRole } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { SearchLink } from 'src/links/dto/search-link.dto'
import { AddLinksDTO } from './dto/AddLinks.dto'
import { CollectionEntity } from './dto/CollectionEntity.dto'
import { CreateCollectionDto } from './dto/CreateCollection.dto'
import { UpdateCollectionDto } from './dto/UpdateCollection.dto'

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ linkIds, ...createCollectionDto }: CreateCollectionDto, user: User) {
    try {
      return await this.prisma.collection.create({
        data: {
          ...createCollectionDto,
          userId: user.id,
          links: {
            connect: linkIds.map(link => ({
              id: link,
            })),
          },
        },
      })
    } catch (e) {
      throw new NotFoundException('Link not found')
    }
  }
  async addLinks(id: string, { linkIds }: AddLinksDTO, user: User): Promise<CollectionEntity> {
    const collection = await this.prisma.collection.findUnique({ where: { id } })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    if (collection.userId !== user.id && user.role !== UserRole.ADMIN) {
      throw new ForbiddenException("You don't have permission to edit this resource")
    }
    return this.prisma.collection.update({
      where: { id },
      data: {
        links: {
          connect: linkIds.map(link => ({
            id: link,
          })),
        },
      },
    })
  }
  async findAll(params: SearchLink) {
    if (typeof params.term === 'undefined') {
      const result = await this.prisma.collection.findMany({ include: { _count: { select: { links: true } } } })
      return result.map(({ _count, ...collection }) => ({
        ...collection,
        links: _count.links,
      }))
    }
    const result = await this.prisma.collection.findMany({
      where: {
        OR: [
          {
            slug: {
              contains: params.term,
              mode: 'insensitive',
            },
          },
          {
            name: {
              contains: params.term,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: { _count: { select: { links: true } } },
    })
    return result.map(({ _count, ...collection }) => ({
      ...collection,
      links: _count.links,
    }))
  }
  async findOne(id: string) {
    const collection = await this.prisma.collection.findUnique({ where: { id }, include: { links: true } })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    return collection
  }
  async findOneBySlug(slug: string) {
    const collection = await this.prisma.collection.findUnique({ where: { slug }, include: { links: true } })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    return collection
  }
  async update(id: string, updateCollectionDto: UpdateCollectionDto, user: User) {
    const collection = await this.prisma.collection.findUnique({ where: { id } })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    if (collection.userId !== user.id && user.role !== UserRole.ADMIN) {
      throw new ForbiddenException("You don't have permission to edit this resource")
    }
    return this.prisma.collection.update({
      where: { id },
      data: updateCollectionDto,
    })
  }
  async remove(id: string, user: User) {
    const collection = await this.prisma.collection.findUnique({ where: { id } })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    if (collection.userId !== user.id && user.role !== UserRole.ADMIN) {
      throw new ForbiddenException("You don't have permission to delete this resource")
    }
    return this.prisma.collection.delete({ where: { id } })
  }

  async addLink(collectionid: string, linkid: string, user: User) {
    const collection = await this.prisma.collection.findUnique({ where: { id: collectionid }, include: { links: true } })
    const link = await this.prisma.link.findUnique({ where: { id: linkid } })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    if (!link) {
      throw new NotFoundException('Link not found')
    }
    if (collection.userId !== user.id && user.role !== UserRole.ADMIN) {
      throw new ForbiddenException("You don't have permission to add links to this collection")
    }
    if (collection.links.includes(link)) {
      throw new ConflictException('Link already part of collection')
    }
    return await this.prisma.collection.update({
      where: { id: collectionid },
      include: { links: true },
      data: {
        links: {
          connect: { id: linkid },
        },
      },
    })
  }
  async removeLink(collectionid: string, linkid: string, user: User) {
    const collection = await this.prisma.collection.findUnique({ where: { id: collectionid }, include: { links: true } })
    const link = await this.prisma.link.findUnique({ where: { id: linkid } })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    if (!link) {
      throw new NotFoundException('Link not found')
    }
    if (collection.userId !== user.id && user.role !== UserRole.ADMIN) {
      throw new ForbiddenException("You don't have permission to remove links from this collection")
    }
    if (!collection.links.includes(link)) {
      throw new ConflictException('Link not found within collection')
    }
    return await this.prisma.collection.update({
      where: { id: collectionid },
      include: { links: true },
      data: {
        links: {
          disconnect: { id: linkid },
        },
      },
    })
  }
}
