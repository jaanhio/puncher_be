import { TwitterUrlService } from './twitterUrl.service';
export declare class TwitterUrlController {
    private readonly twitterUrlService;
    constructor(twitterUrlService: TwitterUrlService);
    getTco(query: any): Promise<{}>;
}
