import { Body, Controller, Param, Patch } from '@nestjs/common'
import { User, UserRole } from '@prisma/client'
import { JwtAuth } from 'src/auth/decorators/JwtAuth'
import { Roles } from 'src/auth/decorators/Roles.decorator'
import { UserService } from './user.service'
import { ChangeUserRole } from './changeUserRole.dto'
import { ApiProperty, ApiTags } from '@nestjs/swagger'

@JwtAuth()
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(UserRole.ADMIN)
  @Patch(':id/role')
  changeRole(@Param('id') id: string, @Body() role: ChangeUserRole): Promise<User> {
    return this.userService.updateRole(id, role)
  }
}
