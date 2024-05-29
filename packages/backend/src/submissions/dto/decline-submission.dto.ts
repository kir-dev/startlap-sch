import { IsNotEmpty, IsString } from 'class-validator'

export class DeclineSubmissionDto {
  @IsString()
  @IsNotEmpty()
  adminComment: string
}
