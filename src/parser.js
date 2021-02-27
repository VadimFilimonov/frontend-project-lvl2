import _ from 'lodash';
import yaml from 'js-yaml';
import path from 'path';
import readFile from './readFile.js';

const types = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default (filepath) => {
  const extname = path.extname(filepath).slice(1);
  const parse = types[extname];
  const file = readFile(filepath);
  if (!parse) {
    const supportedTypes = _.keys(types).join(', ');
    throw new Error(`Supported file types are: ${supportedTypes}`);
  }
  return parse(file);
};
