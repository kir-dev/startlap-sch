import { CollectionEntity } from 'src/collection/dto/CollectionEntity.dto'
import { SubmissionEntitiy } from 'src/submissions/entities/submission.entity'

export class UserProfile {
  collections: CollectionEntity[]
  submissions: SubmissionEntitiy[]
  firstName: string
  email: string
}
