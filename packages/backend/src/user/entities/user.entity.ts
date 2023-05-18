import { Submission } from '../../submissions/entities/submission.entity';

export class User {
  public id: String;
  public internalId: String;
  public username: String;
  public email: String;
  public submissions: Submission[];
  public role: 'USER' | 'EDITOR' | 'ADMIN';
}
