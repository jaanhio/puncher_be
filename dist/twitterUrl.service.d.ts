import { ConfigService } from './config.service';
export declare class TwitterUrlService {
    private consumerKey;
    private consumerSecret;
    private accessToken;
    private accessSecret;
    constructor(config: ConfigService);
    getTcoLink(url: string): Promise<{}>;
    getTwitClient(): any;
    getMessageEvent(url: string): {
        type: string;
        message_create: {
            target: {
                recipient_id: string;
            };
            message_data: {
                text: string;
            };
        };
    };
}
