"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearUndefinedProperties;
function clearUndefinedProperties(obj) {
  if (!obj) {
    return obj;
  }

  const newObj = {};

  Object.keys(obj).forEach(propertyName => {
    const value = obj[propertyName];
    if (value !== undefined) {
      newObj[propertyName] = value;
    }
  });

  return newObj;
}
//# sourceMappingURL=clearUndefinedProperties.js.map