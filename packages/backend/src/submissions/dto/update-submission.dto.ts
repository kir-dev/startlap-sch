import { PartialType } from '@nestjs/swagger'
import { SubmissionEntitiy } from '../entities/submission.entity'

export class UpdateSubmissionDto extends PartialType(SubmissionEntitiy) {}
