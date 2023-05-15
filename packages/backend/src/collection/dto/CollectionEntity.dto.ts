import { IsNotEmpty, IsString, IsUUID, ArrayMinSize } from 'class-validator'

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
  slug: string

  //TODO replace string array with links array
  @ArrayMinSize(0)
  links: string[]
}
