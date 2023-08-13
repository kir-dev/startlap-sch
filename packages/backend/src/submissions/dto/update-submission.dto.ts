import { PartialType } from '@nestjs/mapped-types'
import { SubmissionEntitiy } from '../entities/submission.entity'

export class UpdateSubmissionDto extends PartialType(SubmissionEntitiy) {}
