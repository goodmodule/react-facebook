export default function clearUndefinedProperties(obj: Record<string, any>): Record<string, any> {
  if (!obj) {
    return obj;
  }

  const newObj = {};

  Object.keys(obj).forEach((propertyName) => {
    const value = obj[propertyName];
    if (value !== undefined) {
      newObj[propertyName] = value;
    }
  });

  return newObj;
}
