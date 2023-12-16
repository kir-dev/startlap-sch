import { Body, Controller, Get, Param, Patch } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { User, UserRole } from '@prisma/client'
import { CurrentUser } from 'src/auth/decorators/CurrentUser.decorator'
import { JwtAuth } from 'src/auth/decorators/JwtAuth'
import { Roles } from 'src/auth/decorators/Roles.decorator'
import { ChangeUserRole } from './dto/changeUserRole.dto'
import { UserProfile } from './dto/userProfile.dto'
import { UserService } from './user.service'

@JwtAuth()
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  getProfile(@CurrentUser() currentUser: User): Promise<UserProfile> {
    return this.userService.getProfile(currentUser.id)
  }

  @Roles(UserRole.ADMIN)
  @Patch(':id/role')
  changeRole(@Param('id') id: string, @Body() role: ChangeUserRole): Promise<User> {
    return this.userService.updateRole(id, role)
  }
}
