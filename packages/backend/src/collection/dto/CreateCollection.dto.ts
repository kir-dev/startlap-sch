import { PickType } from '@nestjs/mapped-types'
import { CollectionEntity } from './CollectionEntity.dto'

export class CreateCollectionDto extends PickType(CollectionEntity, ['iconUrl', 'bannerUrl', 'slug']) {}
