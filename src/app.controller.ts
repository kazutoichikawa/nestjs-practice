import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('base')
export class AppController {
  // @Get('hello')
  // getHello() {
  //   return 'hello'
  // }
  constructor(private readonly appService: AppService) {}
  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }
}
