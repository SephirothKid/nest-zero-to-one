import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserService } from './logical/user/user.service';
import { UserController } from './logical/user/user.controller';
import { UserModule } from './logical/user/user.module';
// import { AuthService } from './logical/auth/auth.service';
import { AuthModule } from './logical/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
