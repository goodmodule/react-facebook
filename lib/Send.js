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

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _clearUndefinedProperties = require('./utils/clearUndefinedProperties');

var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);

var _Process2 = require('./Process');

var _Process3 = _interopRequireDefault(_Process2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Send = (_temp = _class = function (_Process) {
  (0, _inherits3.default)(Send, _Process);

  function Send() {
    (0, _classCallCheck3.default)(this, Send);
    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
  }

  Send.prototype.process = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
      var _props, _props$link, link, display, _props$appId, appId, to, redirectURI;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _props = this.props, _props$link = _props.link, link = _props$link === undefined ? (0, _getCurrentHref2.default)() : _props$link, display = _props.display, _props$appId = _props.appId, appId = _props$appId === undefined ? facebook.getAppId() : _props$appId, to = _props.to, redirectURI = _props.redirectURI;
              return _context.abrupt('return', facebook.ui((0, _clearUndefinedProperties2.default)({
                method: 'send',
                link: link,
                display: display,
                app_id: appId,
                to: to,
                redirect_uri: redirectURI
              })));

            case 2:
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

  return Send;
}(_Process3.default), _class.propTypes = (0, _extends3.default)({}, _Process3.default.propTypes, {
  link: _propTypes2.default.string.isRequired,
  to: _propTypes2.default.string,
  display: _propTypes2.default.string,
  appId: _propTypes2.default.string,
  redirectURI: _propTypes2.default.string
}), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
}), _temp);
exports.default = Send;
//# sourceMappingURL=Send.js.map