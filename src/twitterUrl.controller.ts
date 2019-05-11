import { Controller, Get, Query } from '@nestjs/common';
import { TwitterUrlService } from './twitterUrl.service';

@Controller('tco')
export class TwitterUrlController {
  constructor(private readonly twitterUrlService: TwitterUrlService) {}

  @Get()
  getTco(@Query() query) {
    const initialUrl = query.url;
    return this.twitterUrlService.getTcoLink(initialUrl);
  }
}
