import { ApiProperty, PickType } from '@nestjs/swagger'
import { CollectionEntity } from './CollectionEntity.dto'
import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from 'class-validator'
import { Link } from '../../links/entities/link.entity'
import { Type } from 'class-transformer'

export class CreateCollectionDto extends PickType(CollectionEntity, ['iconUrl', 'bannerUrl', 'slug', 'name']) {
  @IsArray()
  @ArrayMinSize(0)
  @ApiProperty({ isArray: true, type: String })
  linkIds: string[]
}
