'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Process2 = require('./Process');

var _Process3 = _interopRequireDefault(_Process2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = (_temp = _class = function (_Process) {
  (0, _inherits3.default)(Login, _Process);

  function Login() {
    (0, _classCallCheck3.default)(this, Login);
    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
  }

  Login.prototype.process = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
      var _props, scope, fields, returnScopes, rerequest, reauthorize, loginQpts, authType, response;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _props = this.props, scope = _props.scope, fields = _props.fields, returnScopes = _props.returnScopes, rerequest = _props.rerequest, reauthorize = _props.reauthorize;
              loginQpts = { scope: scope };
              authType = [];


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

              _context.next = 9;
              return facebook.login(loginQpts);

            case 9:
              response = _context.sent;

              if (!(response.status !== 'connected')) {
                _context.next = 12;
                break;
              }

              throw new Error('Unauthorized user');

            case 12:
              return _context.abrupt('return', facebook.getTokenDetailWithProfile({ fields: fields }));

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function process(_x) {
      return _ref.apply(this, arguments);
    }

    return process;
  }();

  return Login;
}(_Process3.default), _class.propTypes = (0, _extends3.default)({}, _Process3.default.propTypes, {
  scope: _propTypes2.default.string.isRequired,
  fields: _propTypes2.default.arrayOf(_propTypes2.default.string),
  returnScopes: _propTypes2.default.bool,
  rerequest: _propTypes2.default.bool,
  reauthorize: _propTypes2.default.bool
}), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
  scope: '',
  fields: ['id', 'first_name', 'last_name', 'middle_name', 'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
  returnScopes: false,
  rerequest: false,
  reauthorize: false
}), _temp);
exports.default = Login;
//# sourceMappingURL=Login.js.map