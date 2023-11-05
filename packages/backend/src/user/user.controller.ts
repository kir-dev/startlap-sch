import { Body, Controller, Param, Patch } from '@nestjs/common'
import { UserRole } from '@prisma/client'
import { JwtAuth } from 'src/auth/decorators/JwtAuth'
import { Roles } from 'src/auth/decorators/Roles.decorator'
import { UserService } from './user.service'

@JwtAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(UserRole.ADMIN)
  @Patch(':id/role')
  changeRole(@Param('id') id: string, @Body() role: UserRole) {
    return this.userService.updateRole(id, role)
  }
}
