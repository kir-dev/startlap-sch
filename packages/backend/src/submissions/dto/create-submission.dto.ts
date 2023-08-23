import { OmitType } from '@nestjs/swagger'
import { SubmissionEntitiy } from '../entities/submission.entity'

export class CreateSubmissionDto extends OmitType(SubmissionEntitiy, ['id', 'oldLinkId', 'adminComment', 'status']) {}
