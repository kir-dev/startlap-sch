import { SUBMISSION_STATUS } from '@prisma/client'
import { IsEnum, IsNotEmpty, IsString, IsUUID, IsUrl } from 'class-validator'

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

  @IsNotEmpty()
  @IsString()
  description: string

  @IsString()
  adminComment: string

  @IsEnum(SUBMISSION_STATUS)
  status: SUBMISSION_STATUS
}
