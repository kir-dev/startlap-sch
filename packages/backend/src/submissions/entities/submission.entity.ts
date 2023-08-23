import { SUBMISSION_STATUS } from '@prisma/client'
import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator'

export class SubmissionEntitiy {
  @IsUUID()
  id: string

  @IsNotEmpty()
  @IsString()
  oldLinkId: string

  @IsString()
  @IsNotEmpty()
  linkName: string

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string

  @IsString()
  @IsNotEmpty()
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
