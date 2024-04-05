import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsObject, IsString, IsUUID, Matches, ValidateNested } from 'class-validator'
import { Link } from 'src/links/entities/link.entity'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'

export class CollectionEntity {
  @IsUUID('all')
  id: string

  @IsNotEmpty()
  @IsString()
  bannerUrl: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z-]+$/, {
    message: 'Slug should only contain lowercase letters and dashes',
  })
  slug: string

  @IsNotEmpty()
  @IsString()
  name: string
}
