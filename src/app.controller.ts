import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(data: any) {
    return this.appService.getUser(data.value);
  }

  @MessagePattern('login')
  async login(data: any) {
    return await this.appService.signin(data.value);
  }

  @MessagePattern('register')
  async register(data: any) {
    return await this.appService.register(data.value);
  }
}
