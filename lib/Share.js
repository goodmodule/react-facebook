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

var Share = (_temp = _class = function (_Process) {
  (0, _inherits3.default)(Share, _Process);

  function Share() {
    (0, _classCallCheck3.default)(this, Share);
    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
  }

  Share.prototype.process = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
      var _props, _props$href, href, display, _props$appId, appId, hashtag, redirectURI, quote, mobileIframe;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _props = this.props, _props$href = _props.href, href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href, display = _props.display, _props$appId = _props.appId, appId = _props$appId === undefined ? facebook.getAppId() : _props$appId, hashtag = _props.hashtag, redirectURI = _props.redirectURI, quote = _props.quote, mobileIframe = _props.mobileIframe;
              return _context.abrupt('return', facebook.ui((0, _clearUndefinedProperties2.default)({
                method: 'share',
                href: href,
                display: display,
                app_id: appId,
                hashtag: hashtag,
                redirect_uri: redirectURI,
                quote: quote,
                mobile_iframe: mobileIframe
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

  return Share;
}(_Process3.default), _class.propTypes = (0, _extends3.default)({}, _Process3.default.propTypes, {
  href: _propTypes2.default.string,
  hashtag: _propTypes2.default.string,
  quote: _propTypes2.default.string,
  mobileIframe: _propTypes2.default.bool,
  display: _propTypes2.default.string,
  appId: _propTypes2.default.string,
  redirectURI: _propTypes2.default.string
}), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
}), _temp);
exports.default = Share;
//# sourceMappingURL=Share.js.map