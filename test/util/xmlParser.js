import Fs from 'fs';
import Test from 'tape';
import {
  xml2js
} from '../../lib/util/xmlParser';

Test('Parsing XML collections', t => {
  t.plan(1);

  Fs.readFile('test/data/responses/array.xml', 'utf8', (err, data) => {
    xml2js(data).then(object => {

      t.deepEqual(
        object.response.contacts,
        [
          {
            username: 'nathan',
            phone: '123-123-1234',
            emails: [
              'nathan@gmail.com',
              'nathan@yahoo.com'
            ]
          }, {
            username: 'woof',
            phone: '123-123-1234',
            emails: [
              'woof@gmail.com',
              'woof@yahoo.com'
            ]
          }
        ],
        'should create an array of 2 contacts, each with 2 emails'
      );
    });
  });
});
