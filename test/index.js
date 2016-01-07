import Test from 'tape';
import FreshbooksApi from '../lib';

import './util/xml2jsBuilder';
import './util/xmlParser';
import './util/request';


Test('Library initialization', t => {
  t.plan(1);

  const config = {
    auth: {
      type: 'token',
      token: 'abcdefg123456',
      subdomain: 'my-subdomain'
    }
  };

  const api = FreshbooksApi(config);

  t.deepEqual(api.config, config, 'should create an API client with the specified configuration');
});

// Test('Client Endpoint', t => {
//   t.plan(1);

//   const config = {
//     auth: {
//       type: 'token',
//       token: 'abcdefg123456',
//       subdomain: 'my-subdomain'
//     }
//   };

//   const api = FreshbooksApi(config);

//   api.client.get();

//   t.equal(1, 1);
// });
