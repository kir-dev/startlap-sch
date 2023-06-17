import { Controller, Delete, Get, Patch, Param, Body, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/CreateCollection.dto';
import { UpdateCollectionDto } from './dto/UpdateCollection.dto';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}
  @Get()
  findAll() {
    return this.collectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(id);
  }

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.create(createCollectionDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectionDto: UpdateCollectionDto) {
    return this.collectionService.update(id, updateCollectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.collectionService.remove(id);
  }
}
