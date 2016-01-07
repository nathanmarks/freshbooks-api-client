// import Promise from 'bluebird';
// import Rp from 'request-promise';
import { xml2js } from './xmlParser';
import _omit from 'lodash/object/omit';

export function parseResponse (response) {

  return xml2js(response).then(parsedResponse => {
    console.log(parsedResponse);

    return {
      status: parsedResponse.response['@'].status,
      data: _omit(parsedResponse.response, '@')
    };
  }).catch(() => {
    throw Error('Error parsing XML response into JS object');
  });
}
