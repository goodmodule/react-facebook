"use strict";

exports.__esModule = true;
exports.default = clearUndefinedProperties;
function clearUndefinedProperties(obj) {
  if (!obj) {
    return obj;
  }

  var newObj = {};

  Object.keys(obj).forEach(function (propertyName) {
    var value = obj[propertyName];
    if (value !== undefined) {
      newObj[propertyName] = value;
    }
  });

  return newObj;
}
//# sourceMappingURL=clearUndefinedProperties.js.map