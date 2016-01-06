import Test from 'tape';
import Xml2jsBuilder from '../../lib/util/xml2jsBuilder';

Test('Creating builder objects', t => {

  t.plan(1);
  t.equal(
    typeof Xml2jsBuilder === 'function',
    true,
    'should be a factory function'
  );
  t.end();

});
