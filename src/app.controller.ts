import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Parser } from '@json2csv/plainjs';
import { flatten, unwind } from '@json2csv/transforms';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  convertJsonToCsv(@Body() body) {
    return this.appService.jsonToCsv(body);
  }

  @Get('lol-match-data')
  convertLoLMatchDataJsonToCsv(@Body() body) {
    return this.appService.lolMatchDataJsonToCsv(body.info.participants);
  }
}
