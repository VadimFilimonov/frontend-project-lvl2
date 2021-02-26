import formatter from './formatter.js';
import { has, isObject } from './utilities.js';

const gendiff = (object1, object2) => {
  const keys = [...Object.keys(object1), ...Object.keys(object2)];
  const sortedKeys = keys.sort();
  const uniqueKeys = [...new Set(sortedKeys)];

  const tree = uniqueKeys.map((key) => {
    let status;

    if (!has.call(object1, key)) {
      status = 'added';
    } else if (!has.call(object2, key)) {
      status = 'deleted';
    } else if (JSON.stringify(object1[key]) === JSON.stringify(object2[key])) {
      status = 'unchanged';
    } else {
      status = 'changed';
    }

    switch (status) {
      case 'added':
        return {
          key,
          status,
          value: object2[key],
        };
      case 'deleted':
        return {
          key,
          status,
          value: object1[key],
        };
      case 'unchanged':
        return {
          key,
          status,
          value: object1[key],
        };
      case 'changed':
        if (isObject(object1[key]) && isObject(object2[key])) {
          return {
            key,
            status,
            value: 'nested',
            children: gendiff(object1[key], object2[key]),
          };
        }
        return {
          key,
          status,
          value: object2[key],
          oldValue: object1[key],
        };
      default:
        throw new Error('Unknown status');
    }
  });

  return tree;
};

const format = (json1, json2, formatType) => {
  const tree = gendiff(json1, json2);
  return formatter(tree, formatType);
};

export default format;
