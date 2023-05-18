import { Module } from '@nestjs/common'

import { CollectionService } from './collection.service';

@Module({
  controllers: [],
  providers: [CollectionService],
})
export class CollectionModule {}
