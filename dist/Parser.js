'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InitFacebook = require('./InitFacebook');

var _InitFacebook2 = _interopRequireDefault(_InitFacebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Parser extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleFacebookReady = facebook => {
      this.facebook = facebook;
      this.parse();
    }, this.handleContainer = container => {
      this.container = container;
      this.parse();
    }, _temp;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(props) {
    const oldChildren = this.props.children;
    const { children } = props;

    if (!children || !oldChildren) {
      return;
    }

    const changed = Object.keys(oldChildren.props).find(propName => {
      const oldValue = oldChildren.props[propName];
      const newValue = children.props[propName];

      return oldValue !== newValue;
    });

    if (changed) {
      this.rerender();
    }
  }

  rerender() {
    this.forceUpdate();

    this.parsed = false;
    this.parse();
  }

  parse() {
    const { parsed, container, facebook } = this;
    if (parsed || !container || !facebook) {
      return false;
    }

    this.parsed = true;

    const parseResponse = facebook.parse(container);

    const { onParse } = this.props;
    if (onParse) {
      onParse(parseResponse);
    }

    return parseResponse;
  }

  render() {
    const { className, children } = this.props;

    return _react2.default.createElement(
      _InitFacebook2.default,
      { onReady: this.handleFacebookReady },
      _react2.default.createElement(
        'div',
        { className: className, ref: this.handleContainer },
        children
      )
    );
  }
}
exports.default = Parser;
Parser.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  onParse: _propTypes2.default.func
};
Parser.defaultProps = {
  className: undefined,
  onParse: undefined
};
//# sourceMappingURL=Parser.js.map