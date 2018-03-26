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

class Share extends _Process2.default {

  process(facebook) {
    var _this = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const {
        href = (0, _getCurrentHref2.default)(),
        display,
        appId = facebook.getAppId(),
        hashtag,
        redirectURI,
        quote,
        mobileIframe
      } = _this.props;

      return facebook.ui((0, _clearUndefinedProperties2.default)({
        method: 'share',
        href,
        display,
        app_id: appId,
        hashtag,
        redirect_uri: redirectURI,
        quote,
        mobile_iframe: mobileIframe
      }));
    })();
  }
}
exports.default = Share;
Share.propTypes = (0, _extends3.default)({}, _Process2.default.propTypes, {
  href: _propTypes2.default.string,
  hashtag: _propTypes2.default.string,
  quote: _propTypes2.default.string,
  mobileIframe: _propTypes2.default.bool,
  display: _propTypes2.default.string,
  appId: _propTypes2.default.string,
  redirectURI: _propTypes2.default.string
});
Share.defaultProps = (0, _extends3.default)({}, _Process2.default.defaultProps, {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});
//# sourceMappingURL=Share.js.map