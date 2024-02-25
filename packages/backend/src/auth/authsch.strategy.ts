import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { User } from '@prisma/client'
import { Strategy } from 'passport-oauth2'
import { firstValueFrom } from 'rxjs'
import { AuthService } from './auth.service'
import { OAuthUser } from './oauthuser'

const AUTHSCH_HOST = 'https://auth.sch.bme.hu'

@Injectable()
export class AuthschStrategy extends PassportStrategy(Strategy, 'authsch') {
  private readonly logger = new Logger(AuthschStrategy.name)
  constructor(private httpService: HttpService, private authService: AuthService) {
    super({
      authorizationURL: `${AUTHSCH_HOST}/site/login`,
      tokenURL: `${AUTHSCH_HOST}/oauth2/token`,
      clientID: process.env.AUTHSCH_CLIENT_ID,
      clientSecret: process.env.AUTHSCH_CLIENT_SECRET,
      scope: ['basic', 'givenName', 'displayName', 'mail'],
    })
  }

  async validate(accessToken: string): Promise<User> {
    const { data: oAuthUser } = await firstValueFrom(this.httpService.get<OAuthUser>(`${AUTHSCH_HOST}/api/profile?access_token=${accessToken}`))
    const dbUser = await this.authService.findOrCreateUser(oAuthUser)
    this.logger.debug('DbUser in validate' + JSON.stringify(dbUser, null, 2))
    return dbUser
  }
}
