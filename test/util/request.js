import Fs from 'fs';
import Test from 'tape';
import PrettyJSON from 'prettyjson';
import {
  parseResponse
} from '../../lib/util/request';

Test('Parsing Responses', t => {
  t.plan(1);

  Fs.readFile('test/data/responses/basic.xml', 'utf8', (err, data) => {
    parseResponse(data).then(response => {
      // console.log(PrettyJSON.render(response));

      t.equal(
        response.status,
        'ok',
        'should have a status of \'ok\''
      );
    });
  });

  // Fs.readFile('test/data/responses/array.xml', 'utf8', (err, data) => {
  //   parseResponse(data).then(response => {
  //     console.log(PrettyJSON.render(response));
  //     console.log(response);

  //     t.equal(
  //       true,
  //       true,
  //       'should handle a freshbooks XML array'
  //     );
  //   });
  // });
});
