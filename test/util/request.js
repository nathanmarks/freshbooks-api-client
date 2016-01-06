import Fs from 'fs';
import Test from 'tape';
import {
  parseResponse
} from '../../lib/util/request';

Test('Parsing Responses', t => {
  t.plan(1);

  Fs.readFile('test/data/responses/basic.xml', 'utf8', (err, data) => {

    parseResponse(data).then(object => {
      console.log(object);

      t.equal(
        true,
        true,
        'should parse a basic freshbooks XML response'
      );
      t.end();
    });

  });
});
