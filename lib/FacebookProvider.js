'use strict';

exports.__esModule = true;
exports.default = undefined;

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

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Facebook = require('./Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var facebookInstance = null;

var Facebook = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Facebook, _Component);

  function Facebook() {
    (0, _classCallCheck3.default)(this, Facebook);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Facebook.prototype.getChildContext = function getChildContext() {
    return {
      facebook: this
    };
  };

  Facebook.prototype.init = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _props, domain, version, appId, cookie, status, xfbml, language, frictionlessRequests, wait;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.facebook) {
                _props = this.props, domain = _props.domain, version = _props.version, appId = _props.appId, cookie = _props.cookie, status = _props.status, xfbml = _props.xfbml, language = _props.language, frictionlessRequests = _props.frictionlessRequests, wait = _props.wait;


                this.facebook = facebookInstance || new _Facebook2.default({
                  domain: domain,
                  appId: appId,
                  version: version,
                  cookie: cookie,
                  status: status,
                  xfbml: xfbml,
                  language: language,
                  frictionlessRequests: frictionlessRequests,
                  wait: wait
                });

                facebookInstance = this.facebook;
              }

              _context.next = 3;
              return this.facebook.init();

            case 3:
              return _context.abrupt('return', this.facebook);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _ref.apply(this, arguments);
    }

    return init;
  }();

  Facebook.prototype.render = function render() {
    return this.props.children;
  };

  return Facebook;
}(_react.Component), _class.propTypes = {
  appId: _propTypes2.default.string.isRequired,
  domain: _propTypes2.default.string,
  version: _propTypes2.default.string,
  cookie: _propTypes2.default.bool,
  status: _propTypes2.default.bool,
  xfbml: _propTypes2.default.bool,
  language: _propTypes2.default.string,
  frictionlessRequests: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  wait: _propTypes2.default.bool
}, _class.childContextTypes = {
  facebook: _propTypes2.default.object.isRequired
}, _class.defaultProps = {
  version: 'v2.9',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false
}, _temp);
exports.default = Facebook;
//# sourceMappingURL=FacebookProvider.js.map