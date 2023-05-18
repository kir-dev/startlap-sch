import { PartialType } from '@nestjs/mapped-types';
import { SubmissionEntitiy } from '../entities/submission.entity';

export class CreateSubmissionDto extends PartialType(SubmissionEntitiy) {}