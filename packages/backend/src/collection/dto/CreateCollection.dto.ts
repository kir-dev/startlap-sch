import { PickType } from '@nestjs/swagger'
import { CollectionEntity } from './CollectionEntity.dto'

export class CreateCollectionDto extends PickType(CollectionEntity, ['iconUrl', 'bannerUrl', 'slug', 'name']) {}
