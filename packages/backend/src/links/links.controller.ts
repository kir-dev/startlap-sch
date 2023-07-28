import { Controller, Delete, Get, Param, ParseFilePipe, Patch, Post, Query, Req, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { Request } from 'express'
import { unlink } from 'fs'
import { join } from 'path'
import { IconInterceptor, IconValidators } from 'src/util/iconHelpers'
import { CreateLinkDto } from './dto/create-link.dto'
import { SearchLink } from './dto/search-link.dto'
import { slugAvailable } from './dto/slug-verification.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { Link } from './entities/link.entity'
import { LinksService } from './links.service'

@Controller('links')
@ApiTags('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  @ApiBody({ type: CreateLinkDto })
  @UseInterceptors(IconInterceptor)
  async create(
    @Req() request: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: IconValidators,
        fileIsRequired: false,
      })
    )
    file?: Express.Multer.File
  ): Promise<Link> {
    try {
      const createLinkDto = await this.linksService.validateLink(CreateLinkDto, request)
      return await this.linksService.create(createLinkDto, file?.filename)
    } catch (e) {
      if (file) {
        unlink(join(process.cwd(), '/static', file.filename), () => {})
      }
      throw e
    }
  }

  @Get()
  findAll(@Query() params: SearchLink): Promise<Link[]> {
    return this.linksService.findAll(params)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Link> {
    return this.linksService.findOne(id)
  }

  @Patch(':id')
  @ApiBody({ type: UpdateLinkDto })
  @UseInterceptors(IconInterceptor)
  async update(
    @Param('id') id: string,
    @Req() request: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: IconValidators,
        fileIsRequired: false,
      })
    )
    file?: Express.Multer.File
  ): Promise<Link> {
    try {
      const updateLinkDto = await this.linksService.validateLink(UpdateLinkDto, request)
      return await this.linksService.update(id, updateLinkDto, file?.filename)
    } catch (e) {
      if (file) {
        unlink(join(process.cwd(), '/static', file.filename), () => {})
      }
      throw e
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Link> {
    return this.linksService.remove(id)
  }

  @Get('/slug/:slug')
  checkSlug(@Param('slug') slug: string): Promise<slugAvailable> {
    return this.linksService.checkSlug(slug)
  }
}
