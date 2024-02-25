import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { User, UserRole } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { CreateCollectionDto } from './dto/CreateCollection.dto'
import { UpdateCollectionDto } from './dto/UpdateCollection.dto'

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCollectionDto: CreateCollectionDto, user: User) {
    return this.prisma.collection.create({ data: { ...createCollectionDto, userId: user.id } })
  }
  findAll() {
    return this.prisma.collection.findMany()
  }
  async findOne(id: string) {
    const collection = await this.prisma.collection.findUnique({ where: { id } })
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
