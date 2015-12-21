import { Endpoint, Methods } from './helpers';

const client = Endpoint({
  methods: ['get'],
  path: 'client'
});

// const ssclient = {
//   create () {},
//   update () {},
//   get () {},
//   delete () {},
//   list () {}
// };

export default client;
