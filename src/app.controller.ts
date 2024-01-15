import { Controller, Post, RawBodyRequest, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("webhook")
export class AppController {
  @Post()
  webhook(@Req() req: RawBodyRequest<Request>) {
    const raw = req.rawBody;
    console.log("raw: " + raw);
  }
}
