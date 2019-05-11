import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';
import * as Twit from 'twit';

@Injectable()
export class TwitterUrlService {

  private consumerKey: string;
  private consumerSecret: string;
  private accessToken: string;
  private accessSecret: string;

  constructor(config: ConfigService) {
    this.consumerKey = config.get('CONSUMER_KEY');
    this.consumerSecret = config.get('CONSUMER_SECRET');
    this.accessToken = config.get('ACCESS_TOKEN');
    this.accessSecret = config.get('ACCESS_SECRET');
  }

  async getTcoLink(url: string) {
    const client = this.getTwitClient();
    const event = this.getMessageEvent(url);
    return new Promise((resolve, reject) => {
      client.post('direct_messages/events/new', { event }, (err, data, response) => {
        const msgId = data.event.id;
        const tcoUrl = data.event.message_create.message_data.text;
        resolve({
          msgId,
          tcoUrl,
        });
      });
    });
  }

  getTwitClient() {
    return new Twit({
      consumer_key: this.consumerKey,
      consumer_secret: this.consumerSecret,
      access_token: this.accessToken,
      access_token_secret: this.accessSecret,
    });
  }

  getMessageEvent(url: string) {
    return {
      type: 'message_create',
      message_create: {
        target: {
          recipient_id: '184717284',
        },
        message_data: {
          text: url,
        },
      },
    };
  }
}
