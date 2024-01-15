import { Controller, Get, Post, RawBodyRequest, Req } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  webhook(@Req() req: RawBodyRequest<Request>): string {
    const raw = req.rawBody;
    console.log("raw: " + raw);
    return raw.toString();
  }

  @Get()
  hello(): string {
    console.log("Seeing that")
    return "hello guys";
  }
}
