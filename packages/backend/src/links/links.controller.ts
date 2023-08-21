import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Res,
  Query,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { DeleteFileExceptionFilter } from 'src/util/DeleteFileExceptionFilter'
import { IconInterceptor, IconValidators } from 'src/util/iconHelpers'
import { CreateLinkDto } from './dto/create-link.dto'
import { SearchLink } from './dto/search-link.dto'
import { slugAvailable } from './dto/slug-verification.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { Trending } from './dto/trending.dto'
import { Link } from './entities/link.entity'
import { LinksService } from './links.service'

@Controller('links')
@ApiTags('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  @UseInterceptors(IconInterceptor)
  @UseFilters(DeleteFileExceptionFilter)
  async create(
    @Body() createLinkDto: CreateLinkDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: IconValidators,
        fileIsRequired: false,
      })
    )
    file?: Express.Multer.File
  ): Promise<Link> {
    return await this.linksService.create(createLinkDto, file?.filename)
  }

  @Get()
  findAll(@Query() params: SearchLink): Promise<Link[]> {
    return this.linksService.findAll(params)
  }

  @Get('/trending')
  trending(): Promise<Trending[]> {
    return this.linksService.trending()
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Link> {
    return this.linksService.findOne(id)
  }

  @Patch(':id')
  @UseInterceptors(IconInterceptor)
  @UseFilters(DeleteFileExceptionFilter)
  async update(
    @Param('id') id: string,
    @Body() updateLinkDto: UpdateLinkDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: IconValidators,
        fileIsRequired: false,
      })
    )
    file?: Express.Multer.File
  ): Promise<Link> {
    return await this.linksService.update(id, updateLinkDto, file?.filename)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Link> {
    return this.linksService.remove(id)
  }

  @Get('/slug/:slug')
  checkSlug(@Param('slug') slug: string): Promise<slugAvailable> {
    return this.linksService.checkSlug(slug)
  }

  @Get('/visit/:slug')
  async visit(@Param('slug') slug: string, @Res() res) {
    const link = await this.linksService.visit(slug)
    res.redirect(link.url)
  }
}
