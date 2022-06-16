import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// service에서 실행한 결과값만 받아서 실행 ,,,, controller는 req, res 앎
@Controller('api')  // /api
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')  // GET /api/user
  getHello(): string {
    return this.appService.getUser();
  }

  @Post('user')  // POST /api/user
  postHello(): string {
    return this.appService.postUser();
  }
}
