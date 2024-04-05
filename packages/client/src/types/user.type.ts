import { CollectionEntity } from "backend/dist/collection/dto/CollectionEntity.dto";
import { SubmissionEntitiy } from "backend/dist/submissions/entities/submission.entity";

export class UserProfile {
  collections: CollectionEntity[];
  submissions: SubmissionEntitiy[];
  firstName: string;
  email: string;
}
