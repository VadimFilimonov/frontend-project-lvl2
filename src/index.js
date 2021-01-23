const genDiff = (json1, json2) => {
  const result = [];
  const keys = [...Object.keys(json1), ...Object.keys(json2)];
  const sortedKeys = keys.sort();
  const uniqueKeys = [...new Set(sortedKeys)];
  uniqueKeys.forEach((key) => {
    if (!json1.hasOwnProperty(key)) {
      result.push(`+ ${key}: ${json2[key]}`);
    } else if (!json2.hasOwnProperty(key)) {
      result.push(`- ${key}: ${json1[key]}`);
    } else if (json1[key] !== json2[key]) {
      result.push(`- ${key}: ${json1[key]}`);
      result.push(`+ ${key}: ${json2[key]}`);
    } else {
      result.push(`  ${key}: ${json1[key]}`);
    }
  });
  return `
  {
    ${result.join('\n    ')}
  }
  `;
};

export default genDiff;