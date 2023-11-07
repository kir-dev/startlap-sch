import { UserRole } from '@prisma/client'
import { IsEnum, IsNotEmpty } from 'class-validator'

export class ChangeUserRole {
  @IsEnum(UserRole)
  @IsNotEmpty()
  role: UserRole
}
