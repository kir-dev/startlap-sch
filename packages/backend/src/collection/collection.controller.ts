import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { User } from '@prisma/client'
import { CurrentUser } from '../auth/decorators/CurrentUser.decorator'
import { JwtAuth } from '../auth/decorators/JwtAuth'
import { CollectionService } from './collection.service'
import { CreateCollectionDto } from './dto/CreateCollection.dto'
import { UpdateCollectionDto } from './dto/UpdateCollection.dto'

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}
  @Get()
  findAll() {
    return this.collectionService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(id)
  }
  @Post()
  @JwtAuth()
  create(@Body() createCollectionDto: CreateCollectionDto, @CurrentUser() user: User) {
    return this.collectionService.create(createCollectionDto, user)
  }
  @Patch(':id')
  @JwtAuth()
  update(@Param('id') id: string, @Body() updateCollectionDto: UpdateCollectionDto, @CurrentUser() user: User) {
    return this.collectionService.update(id, updateCollectionDto, user)
  }
  @Delete(':id')
  @JwtAuth()
  remove(@Param('id') id: string, @CurrentUser() user: User) {
    return this.collectionService.remove(id, user)
  }
  @Get('/slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.collectionService.findOneBySlug(slug)
  }
  @Post(':collectionid/links/:linkid')
  @JwtAuth()
  addLink(@Param('collectionid') collectionid: string, @Param('linkid') linkid: string, @CurrentUser() user: User) {
    return this.collectionService.addLink(collectionid, linkid, user)
  }
  @Delete(':collectionid/links/:linkid')
  @JwtAuth()
  removeLink(@Param('collectionid') collectionid: string, @Param('linkid') linkid: string, @CurrentUser() user: User) {
    return this.collectionService.removeLink(collectionid, linkid, user)
  }
}
