/*eslint-disable no-param-reassign*/

import Inflect from 'i/lib/methods';
import Stampit from 'stampit';
import _set from 'lodash/object/set';
import _reduce from 'lodash/collection/reduce';

const Xml2jsBuilder = Stampit().props({
  data: {},
  camelize: true
}).init(function () {

  const nodePath = []; // Keeps track of the XML tree location (as parsed into object)
  const arrayStack = new Map();

  const buildPathStringWithArray = path => {
    return _reduce(path, (result, n, index) => {
      const tag = path[index];
      if (index !== 0) {
        const parentTag = path[index - 1];
        if (Inflect.singularize(parentTag) === tag) {
          const arrayIndex = arrayStack.has(result) ? arrayStack.get(result) : 0;
          result = result.concat(`[${arrayIndex}]`);
          return result;
        } else {
          result = result.concat('.');
        }
      }
      result = result.concat(tag);
      return result;
    }, '');
  };

  this.open = tag => {
    nodePath.push(tag);
  };

  this.close = () => {
    nodePath.pop();

    const pathString = buildPathStringWithArray(nodePath);

    if (arrayStack.has(pathString)) {
      arrayStack.set(pathString, arrayStack.get(pathString) + 1);
    }
  };

  this.setData = (...args) => {

    // Handle a single arg object
    if (args.length === 1) {
      const argType = typeof args[0];

      if (argType === 'object') {
        return Object.keys(args[0]).forEach(key => {
          return this.setData(key, args.pop()[key]);
        });
      }

    }

    // Value is the last arg passed in
    const value = args.pop();

    // Start with current nodePath
    const path = nodePath.slice(0).concat(args);
    const pathString = _reduce(path, (result, n, index) => {

      const tag = path[index];

      if (index !== 0) {

        const parentTag = path[index - 1];

        if (Inflect.singularize(parentTag) === tag) {
          let arrayIndex;

          if (arrayStack.has(result)) {
            arrayIndex = arrayStack.get(result);
          } else {
            arrayIndex = arrayStack.set(result, 0) && 0;
          }

          result = result.concat(`[${arrayIndex}]`);

          return result;

        } else {
          result = result.concat('.');
        }

      }

      result = result.concat(tag);

      return result;
    }, '');

    // if (debug) {
    //   console.log(pathString);
    // }

    _set(this.data, pathString, value);
  };

  this.addAttr = (key, value) => {
    this.setData('@', key, value);
  };

  this.addText = (text) => {
    this.setData(text);
  };

});

export default Xml2jsBuilder;
