'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCurrentHref;

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCurrentHref() {
  if (!_canUseDom2.default) {
    return 'http://www.facebook.com';
  }

  return location.href;
}
//# sourceMappingURL=getCurrentHref.js.map