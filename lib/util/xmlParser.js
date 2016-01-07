import Sax from 'sax';
import Xml2jsBuilder from './xml2jsBuilder';

const parser = Sax.parser(true, {
  trim: true,
  normalize: true
});

export function xml2js (xml) {
  return new Promise(resolve => {

    const responseBuilder = Xml2jsBuilder();

    parser.ontext = t => {
      responseBuilder.addText(t);
    };

    parser.onopentag = ({ attributes, name }) => {
      responseBuilder.open(name);

      if (typeof attributes === 'object') {
        Object.keys(attributes).forEach(key => {
          responseBuilder.addAttr(key, attributes[key]);
        });
      }
    };

    parser.onclosetag = name => {
      responseBuilder.close(name);
    };

    parser.onend = () => {
      resolve(responseBuilder.data);
    };

    parser.write(xml).close();
  });
}
