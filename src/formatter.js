const STATUS_SIGN = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
};

const stylish = (tree, parentKey = null) => {
  const diffs = tree.map(({
    key, value, oldValue, status, children, depth,
  }) => {
    const sign = STATUS_SIGN[status];
    const tabs = ' '.repeat(depth * 4 - 2);

    if (value === 'nested') {
      return stylish(children, key);
    }
    if (status === 'changed') {
      const deletedRow = `- ${key}: ${oldValue}`.trim();
      const addedRow = `+ ${key}: ${value}`.trim();
      return `${tabs}${deletedRow}\n${tabs}${addedRow}`;
    }

    return `${tabs}${sign} ${key}: ${value}`;
  });

  return [`${parentKey ? `${parentKey}:` : ''} {`, ...diffs, '}'].join('\n');
};

export default (tree) => stylish(tree);
