import { UserRole } from '@prisma/client'
import { IsArray, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class User {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  fullName: string

  @IsString()
  @IsNotEmpty()
  email: string

  @IsEnum(UserRole)
  role: UserRole

  @IsArray()
  submissions: string[]
}
