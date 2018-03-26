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

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InitFacebook = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InitFacebook, _Component);

  function InitFacebook() {
    (0, _classCallCheck3.default)(this, InitFacebook);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  InitFacebook.prototype.componentDidMount = function componentDidMount() {
    if (_canUseDom2.default) {
      this.initFacebook();
    }
  };

  InitFacebook.prototype.initFacebook = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var onReady, facebook;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onReady = this.props.onReady;
              _context.next = 3;
              return this.context.facebook.init();

            case 3:
              facebook = _context.sent;

              onReady(facebook);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function initFacebook() {
      return _ref.apply(this, arguments);
    }

    return initFacebook;
  }();

  InitFacebook.prototype.render = function render() {
    return this.props.children;
  };

  return InitFacebook;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  onReady: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  children: undefined
}, _class.contextTypes = {
  facebook: _propTypes2.default.object.isRequired
}, _temp);
exports.default = InitFacebook;
//# sourceMappingURL=InitFacebook.js.map