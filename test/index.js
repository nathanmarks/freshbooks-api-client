import Test from 'tape';
import FreshbooksApi from '../lib';

Test('Client initialization', t => {
  t.plan(1);

  const config = {
    auth: {
      type: 'token',
      token: 'abcdefg123456',
      subdomain: 'my-subdomain'
    }
  };

  const api = FreshbooksApi(config);

  t.deepEqual(api.auth, config.auth, 'should create an API client with the specified configuration');
});
