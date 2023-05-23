import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCollectionDto } from './dto/CreateCollection.dto';
import { UpdateCollectionDto } from './dto/UpdateCollection.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCollectionDto: CreateCollectionDto) {
    return this.prisma.collection.create({ data: createCollectionDto });
  }
  findAll() {
    return this.prisma.collection.findMany();
  }
  async findOne(id: string) {
    const collection = await this.prisma.collection.findUnique({
      where: { id },
    });
    if (collection === null) {
      throw new NotFoundException('Collection not found');
    }
    return collection;
  }
  update(id: string, updateCollectionDto: UpdateCollectionDto) {
    return this.prisma.collection.update({ where: { id }, data: updateCollectionDto });
  }
  remove(id: string) {
    return this.prisma.collection.delete({ where: { id } });
  }
}
