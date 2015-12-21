import Stampit from 'stampit';

const Client = Stampit().refs({
  auth: null
}).methods({

  /**
   * Make an API Request
   *
   * @param  {String}  method API Method
   * @param  {Object}  params Object of key:value params
   * @return {Promise}
   */
  request (method, params) {
    console.log('woof');
    // return apiRequest.request(method, params, this.auth);
  }

});

export default Client;
