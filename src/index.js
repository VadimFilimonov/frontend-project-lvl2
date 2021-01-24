const has = Object.prototype.hasOwnProperty;

const gendiff = (json1, json2) => {
  const diffs = [];

  const keys = [...Object.keys(json1), ...Object.keys(json2)];
  const sortedKeys = keys.sort();
  const uniqueKeys = [...new Set(sortedKeys)];

  uniqueKeys.forEach((key) => {
    if (!has.call(json1, key)) {
      diffs.push(`  + ${key}: ${json2[key]}`);
    } else if (!has.call(json2, key)) {
      diffs.push(`  - ${key}: ${json1[key]}`);
    } else if (json1[key] !== json2[key]) {
      diffs.push(`  - ${key}: ${json1[key]}`);
      diffs.push(`  + ${key}: ${json2[key]}`);
    } else {
      diffs.push(`    ${key}: ${json1[key]}`);
    }
  });

  return ['{', ...diffs, '}'].join('\n');
};

export default gendiff;
