import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { PrismaModule } from 'nestjs-prisma'
import { UserModule } from 'src/user/user.module'
import { JWT_ACCESSTOKEN_EXPIRES_IN, JWT_ACCESSTOKEN_SECRET } from 'src/util/environment'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AuthschStrategy } from './authsch.strategy'
import { JwtStrategy } from './jwt.strategy'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthschStrategy, JwtStrategy],
  imports: [
    UserModule,
    PrismaModule,
    HttpModule,
    JwtModule.register({
      secret: JWT_ACCESSTOKEN_SECRET,
      signOptions: { expiresIn: JWT_ACCESSTOKEN_EXPIRES_IN },
    }),
    PassportModule.register({}),
  ],
})
export class AuthModule {}
