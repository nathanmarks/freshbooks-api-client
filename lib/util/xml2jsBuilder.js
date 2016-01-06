import Stampit from 'stampit';
import _set from 'lodash/object/set';

const Xml2jsBuilder = Stampit().refs({
  data: {}
}).init(function () {

  const stack = []; // Keeps track of the XML tree location (as parsed into object)

  this.open = tag => {
    stack.push(tag);
  };

  this.close = () => {
    stack.pop();
  };

  this.setData = (...args) => {

    // Handle a single arg object
    if (args.length === 1) {
      const argType = typeof args[0];

      if (argType === 'object') {
        return Object.keys(args[0]).forEach(key => {
          return this.setData(key, args.pop()[key]);
        });
      } else if (argType === 'string' || argType === 'number') {
        return _set(this.data, stack.slice(0, -1));
      }

    }

    // Value is the last arg passed in
    const value = args.pop();

    // Start with current stack
    const path = stack.slice(0).concat(args);

    _set(this.data, path.join('.'), value);
  };

  this.addAttr = (key, value) => {
    this.setData('@', key, value);
  };

  this.addText = (text) => {
    this.setData(text);
  };

});

export default Xml2jsBuilder;
