import { SUBMISSION_STATUS } from '@prisma/client'
import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsUrl, Matches } from 'class-validator'

export class SubmissionEntitiy {
  @IsUUID()
  id: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  oldLinkId: string

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z-]+$/, {
    message: 'Slug should only contain lowecase letters and dashes',
  })
  slug: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsString()
  @IsOptional()
  iconUrl?: string

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  keywords: string[]

  @IsString()
  adminComment: string

  @IsEnum(SUBMISSION_STATUS)
  status: SUBMISSION_STATUS
}
