import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthCheckController } from './healthCheck.controller';
import { TwitterUrlController } from './twitterUrl.controller';
import { AppService } from './app.service';
import { TwitterUrlService } from './twitterUrl.service';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule],
  controllers: [HealthCheckController, TwitterUrlController, AppController],
  providers: [AppService, TwitterUrlService],
})
export class AppModule {}
