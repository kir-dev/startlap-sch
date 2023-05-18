import { Controller, Get } from '@nestjs/common';

@Controller('collection')
export class CollectionController {
  constructor() {}
  @Get()
  findAll() {
    return '';
  }

  @Get(':id')
  findOne() {
    return '';
  }

  @Patch(':id')
  update() {
    return '';
  }

  @Delete(':id')
  remove() {
    return '';
  }
}
