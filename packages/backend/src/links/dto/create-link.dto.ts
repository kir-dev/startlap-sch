import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUUID, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  slug: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  iconUrl: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  keywords: string;
}
