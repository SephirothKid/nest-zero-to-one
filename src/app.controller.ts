import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('lesson-1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello-world')
  getHello(): string {
    return this.appService.getHello();
  }
}
