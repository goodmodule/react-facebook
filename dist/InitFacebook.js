'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InitFacebook extends _react.Component {

  componentDidMount() {
    if (_canUseDom2.default) {
      this.initFacebook();
    }
  }

  initFacebook() {
    var _this = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const { onReady } = _this.props;

      const facebook = yield _this.context.facebook.init();
      onReady(facebook);
    })();
  }

  render() {
    return this.props.children;
  }
}
exports.default = InitFacebook;
InitFacebook.propTypes = {
  children: _propTypes2.default.node,
  onReady: _propTypes2.default.func.isRequired
};
InitFacebook.defaultProps = {
  children: undefined
};
InitFacebook.contextTypes = {
  facebook: _propTypes2.default.object.isRequired
};
//# sourceMappingURL=InitFacebook.js.map