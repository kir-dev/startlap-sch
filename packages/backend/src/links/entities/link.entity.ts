import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, Matches } from 'class-validator'

export class Link {
  /**
   * The unique identifier of the link
   * @example 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab'
   */
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
  @Matches(/^[a-z-]+$/, {
    message: 'Slug should only contain lowercase letters and dashes',
  })
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
   * Some keywords that describe the website
   * @example ["example","link"]
   */
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  keywords: string[]
}
