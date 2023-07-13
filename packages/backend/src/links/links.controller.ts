import { Body, Controller, Delete, Get, Param, ParseFilePipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiTags } from '@nestjs/swagger'
import { unlink } from 'fs'
import { diskStorage } from 'multer'
import { extname, join } from 'path'
import { FileExtensionValidator } from 'src/util/FileExtensionValidator'
import { FileMaxSizeValidator } from 'src/util/FileMaxSizeValidator'
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
  @UseInterceptors(
    FileInterceptor('icon', {
      storage: diskStorage({
        destination: './static/',
        filename: (req, file, callback) => {
          callback(null, `${req.body.slug}${extname(file.originalname)}`)
        },
      }),
    })
  )
  async create(
    @Body() createLinkDto: CreateLinkDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileMaxSizeValidator({ maxSize: 1_000_000 }), new FileExtensionValidator({ fileType: 'image/*' })],
        fileIsRequired: false,
      })
    )
    file?: Express.Multer.File
  ): Promise<Link> {
    try {
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
  update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto): Promise<Link> {
    return this.linksService.update(id, updateLinkDto)
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
