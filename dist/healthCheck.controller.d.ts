import { AppService } from './app.service';
export declare class HealthCheckController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
