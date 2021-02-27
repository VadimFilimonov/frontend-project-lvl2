export const stringify = (value, startDepth = 1, spaceCount = 4) => {
  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object') {
      return currentValue.toString();
    }
    if (currentValue === undefined) {
      return 'undefined';
    }
    if (currentValue === null) {
      return 'null';
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

export default stringify;
