import { Parser } from '@json2csv/plainjs';
import { flatten, unwind } from '@json2csv/transforms';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  jsonToCsv(json: object): string {
    const opts = {
      transforms: [
        flatten({ objects: true, arrays: true, separator: '_' }),
        unwind({ blankOut: true }),
      ],
    };
    const parser = new Parser(opts as any);
    const csv = parser.parse(json);
    return csv;
  }

  lolMatchDataJsonToCsv(participants: object): string {
    return this.jsonToCsv(participants);
  }
}
