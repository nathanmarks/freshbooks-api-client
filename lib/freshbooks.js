import Stampit from 'stampit';
import { Endpoints } from './api';

const Freshbooks = Stampit().refs({
  config: {
    auth: null
  }
});

export default Stampit().compose(Endpoints, Freshbooks);
