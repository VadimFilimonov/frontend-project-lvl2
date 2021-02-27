import _ from 'lodash';

const diffTree = (object1, object2) => {
  const keys = _.union(_.keys(object1), _.keys(object2));
  const sortedKeys = _.orderBy(keys);

  const tree = sortedKeys.map((key) => {
    if (!_.has(object1, key)) {
      return {
        key,
        status: 'added',
        value: object2[key],
      };
    }
    if (!_.has(object2, key)) {
      return {
        key,
        status: 'deleted',
        value: object1[key],
      };
    }
    if (JSON.stringify(object1[key]) === JSON.stringify(object2[key])) {
      return {
        key,
        status: 'unchanged',
        value: object1[key],
      };
    }
    if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      return {
        key,
        status: 'changed',
        value: 'nested',
        children: diffTree(object1[key], object2[key]),
      };
    }
    return {
      key,
      status: 'changed',
      value: object2[key],
      oldValue: object1[key],
    };
  });

  return tree;
};

export default diffTree;
