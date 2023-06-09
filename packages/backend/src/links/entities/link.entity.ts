import { ApiHideProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator'

export class Link {
  @ApiHideProperty()
  @IsUUID()
  id: string
  /**
   * The url to the link
   * @example 'https://example.com'
   */
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string
  /**
   * The title of the link
   * @example 'Example Link'
   */
  @IsString()
  @IsNotEmpty()
  title: string
  /**
   * The slug corresponding to the link
   * @example 'example-link'
   */
  @IsString()
  @IsNotEmpty()
  slug: string
  /**
   * The description corresponding to the link
   * @example 'This is an example link'
   */
  @IsString()
  @IsNotEmpty()
  description: string
  /**
   * The url to the icon corresponding to the link
   * @example 'https://example.com/icon.png'
   */
  @IsString()
  @IsOptional()
  iconUrl: string
  /**
   * The url to the icon corresponding to the link
   * @example ["example","link"]
   */
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  keywords: string[]
}
