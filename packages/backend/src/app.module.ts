import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
  imports: [CollectionModule, PrismaModule.forRoot({ isGlobal: true }), SubmissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
