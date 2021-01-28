import yaml from 'js-yaml';
import path from 'path';
import readFile from './readFile';

const parseJSON = (file) => JSON.parse(file);

const parseYAML = (file) => yaml.load(file);

const parser = (filepath) => {
  const extname = path.extname(filepath);
  const file = readFile(filepath);
  if (extname === '.json') {
    return parseJSON(file);
  }
  return parseYAML(file);
};

export default parser;
