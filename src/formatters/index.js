import stylish from './stylish.js';

export default (tree, format = 'stylish') => {
  if (format === 'stylish') {
    return stylish(tree);
  }
  return 'Unknown format';
};
