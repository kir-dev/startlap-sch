import { Injectable, Logger } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { UserService } from 'src/user/user.service'
import { JWT_ACCESSTOKEN_EXPIRES_IN, JWT_ACCESSTOKEN_SECRET } from 'src/util/environment'
import { OAuthUser } from './oauthuser'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async findOrCreateUser(oAuthUser: OAuthUser): Promise<User> {
    const user = await this.userService.findOne(oAuthUser.internal_id)
    if (user) {
      return user
    }

    const newUser = await this.userService.create({
      id: oAuthUser.internal_id,
      firstName: oAuthUser.givenName,
      fullName: oAuthUser.displayName,
      email: oAuthUser.mail,
    })

    this.logger.log(`User #${newUser.id} created`)

    return newUser
  }

  login(user: User): { jwt: string } {
    return {
      jwt: this.jwtService.sign(user, {
        secret: JWT_ACCESSTOKEN_SECRET,
        expiresIn: JWT_ACCESSTOKEN_EXPIRES_IN,
      }),
    }
  }
}
