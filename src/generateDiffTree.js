import _ from 'lodash';

const generateDiffTree = (data1, data2) => {
  const uniqueKeys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(uniqueKeys);

  return sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        key,
        value: data2[key],
        status: 'added',
      };
    }
    if (!_.has(data2, key)) {
      return {
        key,
        value: data1[key],
        status: 'deleted',
      };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return {
        key,
        value: data1[key],
        status: 'unchanged',
      };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        value: 'nested',
        children: generateDiffTree(data1[key], data2[key]),
        status: 'changed',
      };
    }
    return {
      key,
      value: data2[key],
      oldValue: data1[key],
      status: 'changed',
    };
  });
};

export default generateDiffTree;
