import { IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator'

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
