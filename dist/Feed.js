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

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _clearUndefinedProperties = require('./utils/clearUndefinedProperties');

var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);

var _Process = require('./Process');

var _Process2 = _interopRequireDefault(_Process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Feed extends _Process2.default {

  process(facebook) {
    var _this = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const {
        link = (0, _getCurrentHref2.default)(),
        display,
        appId = facebook.getAppId(),
        redirectURI,
        from,
        to,
        picture,
        source,
        name,
        caption,
        description,
        ref
      } = _this.props;

      return facebook.ui((0, _clearUndefinedProperties2.default)({
        method: 'feed',
        link,
        display,
        app_id: appId,
        redirect_uri: redirectURI,
        from,
        to,
        picture,
        source,
        name,
        caption,
        description,
        ref
      }));
    })();
  }
}
exports.default = Feed;
Feed.propTypes = (0, _extends3.default)({}, _Process2.default.propTypes, {
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
});
Feed.defaultProps = (0, _extends3.default)({}, _Process2.default.defaultProps, {
  link: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});
//# sourceMappingURL=Feed.js.map