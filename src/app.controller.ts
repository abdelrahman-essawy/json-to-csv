import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Parser } from '@json2csv/plainjs';
import { flatten, unwind } from '@json2csv/transforms';
import { ApiTags, ApiOperation, ApiBody, ApiHideProperty } from '@nestjs/swagger';

@Controller()
@ApiTags('CSV Converter')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('json-to-csv')
  @ApiOperation({ summary: 'Convert JSON to CSV' })
  @ApiBody({ type: Object, description: 'JSON data to convert' })
  convertJsonToCsv(@Body() body) {
    return this.appService.jsonToCsv(body);
  }

  @Post('lol-match-data')
  @ApiOperation({ summary: 'Convert LoL Match Data JSON to CSV' })
  @ApiBody({ type: Object, description: 'LoL Match Data JSON to convert' })
  @ApiHideProperty()
  convertLoLMatchDataJsonToCsv(@Body() body) {
    return this.appService.lolMatchDataJsonToCsv(body.info.participants);
  }
}
