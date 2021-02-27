import stringify from '../stringify.js';

const SPACE_COUNT = 4;

const repeatSpaces = (depth, sliceNum = 0) => ' '.repeat(depth * SPACE_COUNT).slice(sliceNum);

const findSymbol = (status) => {
  if (status === 'added') return '+';
  if (status === 'deleted') return '-';
  return ' ';
};

export default (tree) => {
  const iter = (node, depth) => {
    const indent = repeatSpaces(depth, 2);
    const bracketIndent = repeatSpaces(depth, SPACE_COUNT);

    const lines = node.map(({
      key, value, oldValue, status, children,
    }) => {
      if (status !== 'changed') {
        const symbol = findSymbol(status);
        return `${indent}${symbol} ${key}: ${stringify(value, depth + 1)}`;
      }
      if (value === 'nested') {
        const symbol = ' ';
        return `${indent}${symbol} ${key}: ${iter(children, depth + 1)}`;
      }
      const deletedRow = `${indent}- ${key}: ${stringify(oldValue, depth + 1)}`;
      const addedRow = `${indent}+ ${key}: ${stringify(value, depth + 1)}`;
      return [deletedRow, addedRow].join('\n');
    });

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(tree, 1);
};
