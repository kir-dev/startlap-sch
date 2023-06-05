import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CreateLinkDto } from './dto/create-link.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { LinksService } from './links.service'

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto)
  }

  @Get()
  findAll() {
    return this.linksService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linksService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return this.linksService.update(id, updateLinkDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linksService.remove(id)
  }
  @Get(':slug')
  chechSlug(@Param('slug') slug: string) {
    return this.linksService.checkSlug(slug)
  }
}
