import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateCollectionDto } from './dto/CreateCollection.dto'
import { UpdateCollectionDto } from './dto/UpdateCollection.dto'
import { User, UserRole } from '@prisma/client'

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
}
