function isObject(val: any) {
  return typeof val === 'object' && val !== null && val.toString() === '[object Object]';
}

export default isObject;
