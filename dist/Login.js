'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Process = require('./Process');

var _Process2 = _interopRequireDefault(_Process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Login extends _Process2.default {

  process(facebook) {
    var _this = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const { scope, fields, returnScopes, rerequest, reauthorize } = _this.props;
      const loginQpts = { scope };
      const authType = [];

      if (returnScopes) {
        loginQpts.return_scopes = true;
      }

      if (rerequest) {
        authType.push('rerequest');
      }

      if (reauthorize) {
        authType.push('reauthenticate');
      }

      if (authType.length) {
        loginQpts.auth_type = authType.join(',');
      }

      const response = yield facebook.login(loginQpts);
      if (response.status !== 'connected') {
        throw new Error('Unauthorized user');
      }

      return facebook.getTokenDetailWithProfile({ fields });
    })();
  }
}
exports.default = Login;
Login.propTypes = (0, _extends3.default)({}, _Process2.default.propTypes, {
  scope: _propTypes2.default.string.isRequired,
  fields: _propTypes2.default.arrayOf(_propTypes2.default.string),
  returnScopes: _propTypes2.default.bool,
  rerequest: _propTypes2.default.bool,
  reauthorize: _propTypes2.default.bool
});
Login.defaultProps = (0, _extends3.default)({}, _Process2.default.defaultProps, {
  scope: '',
  fields: ['id', 'first_name', 'last_name', 'middle_name', 'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
  returnScopes: false,
  rerequest: false,
  reauthorize: false
});
//# sourceMappingURL=Login.js.map