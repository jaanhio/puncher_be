"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config.service");
const Twit = require("twit");
let TwitterUrlService = class TwitterUrlService {
    constructor(config) {
        this.consumerKey = config.get('CONSUMER_KEY');
        this.consumerSecret = config.get('CONSUMER_SECRET');
        this.accessToken = config.get('ACCESS_TOKEN');
        this.accessSecret = config.get('ACCESS_SECRET');
    }
    getTcoLink(url) {
        return __awaiter(this, void 0, void 0, function* () {
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
    getMessageEvent(url) {
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
};
TwitterUrlService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], TwitterUrlService);
exports.TwitterUrlService = TwitterUrlService;
//# sourceMappingURL=twitterUrl.service.js.map