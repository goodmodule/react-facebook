'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Facebook = require('./Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let facebookInstance = null;

class Facebook extends _react.Component {

  getChildContext() {
    return {
      facebook: this
    };
  }

  init() {
    var _this = this;

    return (0, _asyncToGenerator3.default)(function* () {
      if (!_this.facebook) {
        const {
          domain,
          version,
          appId,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait
        } = _this.props;

        _this.facebook = facebookInstance || new _Facebook2.default({
          domain,
          appId,
          version,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait
        });

        facebookInstance = _this.facebook;
      }

      yield _this.facebook.init();

      return _this.facebook;
    })();
  }

  render() {
    return this.props.children;
  }
}
exports.default = Facebook;
Facebook.propTypes = {
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
};
Facebook.childContextTypes = {
  facebook: _propTypes2.default.object.isRequired
};
Facebook.defaultProps = {
  version: 'v2.9',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false
};
//# sourceMappingURL=FacebookProvider.js.map