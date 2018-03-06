'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InitFacebook = require('./InitFacebook');

var _InitFacebook2 = _interopRequireDefault(_InitFacebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Parser = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Parser, _Component);

  function Parser() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Parser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleFacebookReady = function (facebook) {
      _this.facebook = facebook;
      _this.parse();
    }, _this.handleContainer = function (container) {
      _this.container = container;
      _this.parse();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Parser.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  Parser.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    var oldChildren = this.props.children;
    var children = props.children;


    if (!children || !oldChildren) {
      return;
    }

    var changed = Object.keys(oldChildren.props).find(function (propName) {
      var oldValue = oldChildren.props[propName];
      var newValue = children.props[propName];

      return oldValue !== newValue;
    });

    if (changed) {
      this.rerender();
    }
  };

  Parser.prototype.rerender = function rerender() {
    this.forceUpdate();

    this.parsed = false;
    this.parse();
  };

  Parser.prototype.parse = function parse() {
    var parsed = this.parsed,
        container = this.container,
        facebook = this.facebook;

    if (parsed || !container || !facebook) {
      return false;
    }

    this.parsed = true;

    var parseResponse = facebook.parse(container);

    var onParse = this.props.onParse;

    if (onParse) {
      onParse(parseResponse);
    }

    return parseResponse;
  };

  Parser.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children;


    return _react2.default.createElement(
      _InitFacebook2.default,
      { onReady: this.handleFacebookReady },
      _react2.default.createElement(
        'div',
        { className: className, ref: this.handleContainer },
        children
      )
    );
  };

  return Parser;
}(_react.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  onParse: _propTypes2.default.func
}, _class.defaultProps = {
  className: undefined,
  onParse: undefined
}, _temp2);
exports.default = Parser;
//# sourceMappingURL=Parser.js.map