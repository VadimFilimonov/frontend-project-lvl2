import orderBy from 'lodash.orderby';
import formatter from './formatters/index.js';
import parser from './parser.js';
import { has, isObject } from './utilities.js';

const gendiff = (object1, object2) => {
  const keys = [...Object.keys(object1), ...Object.keys(object2)];
  const sortedKeys = orderBy(keys);
  const uniqueKeys = [...new Set(sortedKeys)];

  const tree = uniqueKeys.map((key) => {
    if (!has.call(object1, key)) {
      return {
        key,
        status: 'added',
        value: object2[key],
      };
    }
    if (!has.call(object2, key)) {
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
    if (isObject(object1[key]) && isObject(object2[key])) {
      return {
        key,
        status: 'changed',
        value: 'nested',
        children: gendiff(object1[key], object2[key]),
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

export default (filepath1, filepath2, formatName) => {
  const json1 = parser(filepath1);
  const json2 = parser(filepath2);
  const tree = gendiff(json1, json2);
  return formatter(tree, formatName);
};
