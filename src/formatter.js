const spaceCount = 4;

const findSymbol = (status) => {
  if (status === 'added') return '+';
  if (status === 'deleted') return '-';
  return ' ';
};

const stringify = (value, startDepth = 1) => {
  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object') {
      return currentValue.toString();
    }
    if (currentValue === undefined) {
      return 'undefined';
    }
    if (currentValue === null) {
      return null;
    }
    const indentSize = depth * spaceCount;
    const currentIndent = ' '.repeat(indentSize);
    const bracketIndent = ' '.repeat(indentSize - spaceCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, startDepth);
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const indentSize = depth * spaceCount;
    const currentIndent = ' '.repeat(indentSize - 2);
    const bracketIndent = ' '.repeat(indentSize - spaceCount);

    const lines = node.map(({
      key, value, oldValue, status, children,
    }) => {
      const symbol = findSymbol(status);
      if (status === 'changed') {
        if (value === 'nested') {
          return `${currentIndent}  ${key}: ${iter(children, depth + 1)}`.trimEnd();
        }
        const deletedRow = `${currentIndent}- ${key}: ${stringify(oldValue, depth + 1)}`.trimEnd();
        const addedRow = `${currentIndent}+ ${key}: ${stringify(value, depth + 1)}`.trimEnd();
        return [deletedRow, addedRow].join('\n');
      }
      return `${currentIndent}${symbol} ${key}: ${stringify(value, depth + 1)}`.trimEnd();
    });
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };
  return iter(tree, 1);
};

export default (tree) => stylish(tree);
