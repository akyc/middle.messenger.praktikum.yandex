import isObject from './isObject';

type StringIndexed = Record<string, any>;

function queryStringify(data: StringIndexed): string {
  if (!isObject(data)) {
    throw new Error('Data must be object');
  }
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    const value = data[key];
    const endLine = index < keys.length - 1 ? '&' : '';

    if (Array.isArray(value)) {
      const arrayValue = value.reduce<StringIndexed>(
        (arrResult, arrData, arrIndex) => ({
          ...arrResult,
          [`${key}[${arrIndex}]`]: arrData,
        }),
        {},
      );

      return `${result}${queryStringify(arrayValue)}${endLine}`;
    }

    if (isObject(value)) {
      const objValue = Object.keys(value || {}).reduce<StringIndexed>(
        (objResult, objKey) => ({
          ...objResult,
          [`${key}[${objKey}]`]: value[objKey],
        }),
        {},
      );

      return `${result}${queryStringify(objValue)}${endLine}`;
    }

    return `${result}${key}=${value}${endLine}`;
  }, '');
}

export default queryStringify;
