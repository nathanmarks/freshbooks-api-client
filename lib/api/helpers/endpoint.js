import Stampit from 'stampit';
import * as Methods from './methods';

const Endpoint = Stampit().refs({
  methods: [],
  path: null
}).init(function () {
  this.methods.forEach(n => {
    this[n] = Methods[n].bind(this);
  });
});

export default Endpoint;
