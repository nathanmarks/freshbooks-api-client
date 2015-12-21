import Client from './client';

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
const Freshbooks = config => {
  return Client(Object.assign(defaults, config));
};

export default Freshbooks;
