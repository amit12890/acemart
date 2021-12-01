export const toCamelCase = string => {
  return string.replace(/([-_][a-z])/gi, (match, capture) =>
    capture
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
};

export const keysToCamel = obj =>
  Object.keys(obj).reduce((res, key) => {
    res[toCamelCase(key)] = obj[key];
    return res;
  }, {});
