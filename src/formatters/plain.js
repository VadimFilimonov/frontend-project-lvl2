import _ from 'lodash';

const processValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

export default (tree) => {
  const iter = (node, keys) => node.map(({
    key, value, oldValue, status, children,
  }) => {
    const newKeys = [...keys, key];
    const keyPath = newKeys.join('.');
    if (value === 'nested') {
      return iter(children, newKeys);
    }
    const addedValue = _.isObject(value) ? '[complex value]' : processValue(value);
    if (status === 'added') {
      return `Property '${keyPath}' was added with value: ${addedValue}`;
    }
    if (status === 'changed') {
      const removedValue = _.isObject(oldValue) ? '[complex value]' : processValue(oldValue);
      return `Property '${keyPath}' was updated. From ${removedValue} to ${addedValue}`;
    }
    if (status === 'deleted') {
      return `Property '${keyPath}' was removed`;
    }
    return null;
  }).filter((line) => line).join('\n');

  return iter(tree, []);
};
