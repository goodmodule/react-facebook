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

var Feed = (_temp = _class = function (_Process) {
  (0, _inherits3.default)(Feed, _Process);

  function Feed() {
    (0, _classCallCheck3.default)(this, Feed);
    return (0, _possibleConstructorReturn3.default)(this, _Process.apply(this, arguments));
  }

  Feed.prototype.process = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(facebook) {
      var _props, _props$link, link, display, _props$appId, appId, redirectURI, from, to, picture, source, name, caption, description, ref;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _props = this.props, _props$link = _props.link, link = _props$link === undefined ? (0, _getCurrentHref2.default)() : _props$link, display = _props.display, _props$appId = _props.appId, appId = _props$appId === undefined ? facebook.getAppId() : _props$appId, redirectURI = _props.redirectURI, from = _props.from, to = _props.to, picture = _props.picture, source = _props.source, name = _props.name, caption = _props.caption, description = _props.description, ref = _props.ref;
              return _context.abrupt('return', facebook.ui((0, _clearUndefinedProperties2.default)({
                method: 'feed',
                link: link,
                display: display,
                app_id: appId,
                redirect_uri: redirectURI,
                from: from,
                to: to,
                picture: picture,
                source: source,
                name: name,
                caption: caption,
                description: description,
                ref: ref
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

  return Feed;
}(_Process3.default), _class.propTypes = (0, _extends3.default)({}, _Process3.default.propTypes, {
  appId: _propTypes2.default.string,
  redirectURI: _propTypes2.default.string,
  display: _propTypes2.default.string,
  from: _propTypes2.default.string,
  to: _propTypes2.default.string,
  link: _propTypes2.default.string,
  source: _propTypes2.default.string,
  picture: _propTypes2.default.string, // deprecated
  name: _propTypes2.default.string, // deprecated
  caption: _propTypes2.default.string, // deprecated
  description: _propTypes2.default.string, // deprecated
  ref: _propTypes2.default.string
}), _class.defaultProps = (0, _extends3.default)({}, _Process3.default.defaultProps, {
  link: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
}), _temp);
exports.default = Feed;
//# sourceMappingURL=Feed.js.map