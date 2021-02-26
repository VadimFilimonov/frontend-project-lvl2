import { stringify } from '../utilities.js';

const spaceCount = 4;

const findSymbol = (status) => {
  if (status === 'added') return '+';
  if (status === 'deleted') return '-';
  return ' ';
};

export default (tree) => {
  const iter = (node, depth) => {
    const indentSize = depth * spaceCount;
    const currentIndent = ' '.repeat(indentSize - 2);
    const bracketIndent = ' '.repeat(indentSize - spaceCount);

    const lines = node.map(({
      key, value, oldValue, status, children,
    }) => {
      if (status !== 'changed') {
        const symbol = findSymbol(status);
        return `${currentIndent}${symbol} ${key}: ${stringify(value, depth + 1)}`.trimEnd();
      }
      if (value === 'nested') {
        const symbol = ' ';
        return `${currentIndent}${symbol} ${key}: ${iter(children, depth + 1)}`.trimEnd();
      }
      const deletedRow = `${currentIndent}- ${key}: ${stringify(oldValue, depth + 1)}`.trimEnd();
      const addedRow = `${currentIndent}+ ${key}: ${stringify(value, depth + 1)}`.trimEnd();
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
