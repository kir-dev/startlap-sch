import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateCollectionDto } from './dto/CreateCollection.dto'
import { UpdateCollectionDto } from './dto/UpdateCollection.dto'

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCollectionDto: CreateCollectionDto) {
    return this.prisma.collection.create({ data: createCollectionDto })
  }
  findAll() {
    return this.prisma.collection.findMany()
  }
  async findOne(id: string) {
    const collection = await this.prisma.collection.findUnique({
      where: { id },
    })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    return collection
  }
  async update(id: string, updateCollectionDto: UpdateCollectionDto) {
    const collection = await this.prisma.collection.update({
      where: { id },
      data: updateCollectionDto,
    })
    if (!collection) {
      throw new NotFoundException('Collection not found')
    }
    return collection
  }
  remove(id: string) {
    try {
      this.prisma.collection.delete({ where: { id } })
    } catch (e) {
      Logger.warn('Collection could not be deleted with id: ' + id)
    }
  }
}
