import { ApiProperty, PickType } from '@nestjs/swagger'
import { ArrayMinSize, IsArray } from 'class-validator'
import { CollectionEntity } from './CollectionEntity.dto'

export class CreateCollectionDto extends PickType(CollectionEntity, ['bannerUrl', 'slug', 'name']) {
  @IsArray()
  @ArrayMinSize(0)
  @ApiProperty({ isArray: true, type: String })
  linkIds: string[]
}
