import { ArrayMinSize, IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator'
import { Link } from 'src/links/entities/link.entity'

export class CollectionEntity {
  @IsUUID('all')
  id: string

  @IsNotEmpty()
  @IsString()
  iconUrl: string

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

  @ArrayMinSize(0)
  links: Link[]
}
