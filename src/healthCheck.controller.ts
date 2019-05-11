import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('health')
export class HealthCheckController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'ok';
  }
}
