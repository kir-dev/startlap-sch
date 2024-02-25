import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { PrismaModule } from 'nestjs-prisma'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CollectionModule } from './collection/collection.module'
import { LinksModule } from './links/links.module'
import { SubmissionsModule } from './submissions/submissions.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    CollectionModule,
    PrismaModule.forRoot({ isGlobal: true }),
    SubmissionsModule,
    LinksModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
