import plain from './plain.js';
import stylish from './stylish.js';

const formatFunction = {
  stylish,
  plain,
  json: JSON.stringify,
};

export default (tree, formatName) => {
  const formatDiffTree = formatFunction[formatName];
  if (!formatDiffTree) {
    throw new Error('This format type is not supported');
  }
  return formatDiffTree(tree);
};
