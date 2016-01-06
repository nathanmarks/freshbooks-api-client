// import Promise from 'bluebird';
// import Rp from 'request-promise';
import { xml2js } from './xmlParser';

export function parseResponse (response) {
  // console.log(response);

  return xml2js(response);
}
