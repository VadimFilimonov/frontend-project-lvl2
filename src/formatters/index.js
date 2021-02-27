import plain from './plain.js';
import stylish from './stylish.js';

export default (tree, formatName) => {
  if (formatName === 'stylish') {
    return stylish(tree);
  }
  if (formatName === 'plain') {
    return plain(tree);
  }
  if (formatName === 'json') {
    return JSON.stringify(tree);
  }
  return 'This format type is not supported';
};
