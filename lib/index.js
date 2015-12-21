import _ from 'lodash';
import client from './client';

const defaults = {
  auth: {
    type: 'token',
    token: null,
    subdomain: null
  }
};

const freshbooks = {

  /**
   * Creates an API client object
   *
   * @param  {Object} config API client config object
   * @return {Object}        API client object
   */
  create (config) {
    return _.assign(Object.create(client), defaults, config);
  }

};

export default freshbooks;
