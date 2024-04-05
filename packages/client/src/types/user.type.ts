import { Collection } from '@/types/collection.type'
import { Submission } from '@/types/submission.type'

export class UserProfile {
  collections: Collection[]
  submissions: Submission[]
  firstName: string
  email: string
}
