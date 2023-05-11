import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CollectionService } from './collection.service'
import { CreateCollectionDto } from './dto/CreateCollection.dto'
import { UpdateCollectionDto } from './dto/UpdateCollection.dto'

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.create(createCollectionDto)
  }

  @Get()
  findAll() {
    return this.collectionService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectionDto: UpdateCollectionDto) {
    return this.collectionService.update(+id, updateCollectionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionService.remove(+id)
  }
}
