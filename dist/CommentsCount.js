'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommentsCount;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CommentsCount(props) {
  const {
    className,
    href = (0, _getCurrentHref2.default)(),
    children,
    onParse
  } = props;

  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'span',
      {
        className: 'fb-comments-count',
        'data-href': href
      },
      children
    )
  );
}

CommentsCount.propTypes = {
  className: _propTypes2.default.string,
  href: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onParse: _propTypes2.default.func
};

CommentsCount.defaultProps = {
  className: undefined,
  href: undefined,
  children: undefined,
  onParse: undefined
};
//# sourceMappingURL=CommentsCount.js.map