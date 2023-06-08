import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator'

export class Link {
  @IsUUID()
  id: string

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  slug: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsOptional()
  iconUrl: string

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  keywords: string[]
}
