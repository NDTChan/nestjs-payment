import {
  Controller,
  Get,
  Post,
  RawBodyRequest,
  Req,
  Logger,
} from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Post()
  webhook(@Req() req: RawBodyRequest<Request>): string {
    const raw = req.rawBody;
    this.logger.log('raw: ' + raw);
    this.logger.log('raw[req_card_number]: ' + raw['req_card_number']);
    return raw.toString();
  }

  @Get()
  hello(): string {
    this.logger.log('Seeing that');
    return 'hello guys';
  }
}
