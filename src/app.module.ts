import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './logical/user/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
