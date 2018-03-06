'use strict';

exports.__esModule = true;
exports.default = EmbeddedPost;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmbeddedPost(props) {
  var className = props.className,
      href = props.href,
      width = props.width,
      showText = props.showText,
      children = props.children,
      onParse = props.onParse;


  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'div',
      {
        className: 'fb-post',
        'data-href': href,
        'data-width': width,
        'data-show-text': showText
      },
      children
    )
  );
}

EmbeddedPost.propTypes = {
  className: _propTypes2.default.string,
  href: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number.isRequired, _propTypes2.default.string.isRequired]),
  showText: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node,
  onParse: _propTypes2.default.func
};

EmbeddedPost.defaultProps = {
  href: 'http://www.facebook.com',
  width: 500, // 350 - 750
  showText: false,
  children: undefined,
  className: undefined,
  onParse: undefined
};
//# sourceMappingURL=EmbeddedPost.js.map