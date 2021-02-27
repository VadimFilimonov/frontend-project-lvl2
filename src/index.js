import formatDiffTree from './formatters/index.js';
import generateDiffTree from './generateDiffTree.js';
import parse from './parser.js';

export default (filepath1, filepath2, formatName = 'stylish') => {
  const parsedData1 = parse(filepath1);
  const parsedData2 = parse(filepath2);
  const diffTree = generateDiffTree(parsedData1, parsedData2);
  return formatDiffTree(diffTree, formatName);
};
