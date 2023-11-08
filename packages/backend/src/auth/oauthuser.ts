import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator'

export class OAuthUser {
  @IsNotEmpty()
  displayName: string

  @IsNotEmpty()
  givenName: string

  @IsUUID('all')
  internal_id: string

  @IsEmail()
  mail: string

  constructor(partial: Partial<OAuthUser>) {
    Object.assign(this, partial)
  }
}
