import Freshbooks from './freshbooks';

const defaults = {
  auth: {
    type: 'token',
    token: null,
    subdomain: null
  }
};

/**
 * Creates an API client object
 *
 * @param  {Object} config API client config object
 * @return {Object}        API client object
 */
const FreshbooksApiClient = config => {
  return Freshbooks({
    config: Object.assign(defaults, config)
  });
};

export default FreshbooksApiClient;
