const has = Object.prototype.hasOwnProperty;

const gentree = (json1, json2) => {
  const keys = [...Object.keys(json1), ...Object.keys(json2)];
  const sortedKeys = keys.sort();
  const uniqueKeys = [...new Set(sortedKeys)];

  const tree = [];

  uniqueKeys.forEach((key) => {
    if (!has.call(json1, key)) {
      tree.push({
        name: key,
        value: json2[key],
        status: 'added',
      });
    } else if (!has.call(json2, key)) {
      tree.push({
        name: key,
        value: json1[key],
        status: 'deleted',
      });
    } else if (json1[key] !== json2[key]) {
      tree.push({
        name: key,
        value: json2[key],
        oldValue: json1[key],
        status: 'changed',
      });
    } else {
      tree.push({
        name: key,
        value: json1[key],
        status: 'unchanged',
      });
    }
  });

  return tree;
};

const gendiff = (json1, json2) => {
  const tree = gentree(json1, json2);
  const diffs = tree.map((node) => {
    const {
      name, value, oldValue, status,
    } = node;

    if (status === 'changed') {
      const deletedRow = `  - ${name}: ${oldValue}`;
      const addedRow = `  + ${name}: ${value}`;
      return `${deletedRow}\n${addedRow}`;
    }
    if (status === 'added') {
      return `  + ${name}: ${value}`;
    }
    if (status === 'deleted') {
      return `  - ${name}: ${value}`;
    }

    return `    ${name}: ${value}`;
  });

  return ['{', ...diffs, '}'].join('\n');
};

export default gendiff;
