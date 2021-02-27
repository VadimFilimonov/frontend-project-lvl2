import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

export default (tree, formatName = 'stylish') => {
  if (formatName === 'stylish') {
    return stylish(tree);
  }
  if (formatName === 'plain') {
    return plain(tree);
  }
  if (formatName === 'json') {
    return json(tree);
  }
  return 'Unknown format';
};
