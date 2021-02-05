import formatter from './formatter';

const isObject = (arg) => arg && typeof arg === 'object';

const has = Object.prototype.hasOwnProperty;

const gendiff = (object1, object2, depth = 1) => {
  const keys = [...Object.keys(object1), ...Object.keys(object2)];
  const sortedKeys = keys.sort();
  const uniqueKeys = [...new Set(sortedKeys)];

  const tree = uniqueKeys.map((key) => {
    let status;
    let value;
    let oldValue;
    let children;

    if (!has.call(object1, key)) {
      status = 'added';
    } else if (!has.call(object2, key)) {
      status = 'deleted';
    } else if (object1[key] !== object2[key]) {
      status = 'changed';
    } else {
      status = 'unchanged';
    }

    switch (status) {
      case 'added':
        if (isObject(object2[key])) {
          value = 'nested';
          children = [object2[key]];
        } else {
          value = object2[key];
        }
        break;
      case 'deleted':
        value = object1[key];
        if (isObject(object1[key])) {
          value = 'nested';
          children = [object1[key]];
        } else {
          value = object1[key];
        }
        break;
      case 'changed':
        if (isObject(object2[key])) {
          value = 'nested';
          children = gendiff(object1[key], object2[key], depth + 1);
        } else {
          value = object2[key];
          oldValue = object1[key];
        }
        break;
      case 'unchanged':
        value = object1[key];
        break;
      default:
        break;
    }

    return {
      key,
      depth,
      value,
      oldValue,
      status,
      children,
    };
  });

  return tree;
};

const format = (json1, json2) => {
  const tree = gendiff(json1, json2);
  return formatter(tree);
};

export default format;
