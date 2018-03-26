'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Comments;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _ColorScheme = require('./constants/ColorScheme');

var _ColorScheme2 = _interopRequireDefault(_ColorScheme);

var _CommentsOrderBy = require('./constants/CommentsOrderBy');

var _CommentsOrderBy2 = _interopRequireDefault(_CommentsOrderBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Comments(props) {
  const {
    className,
    colorScheme,
    href = (0, _getCurrentHref2.default)(),
    numPosts,
    orderBy,
    width,
    children,
    onParse
  } = props;

  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'div',
      {
        className: 'fb-comments',
        'data-colorscheme': colorScheme,
        'data-numposts': numPosts,
        'data-href': href,
        'data-order-by': orderBy,
        'data-width': width,
        'data-skin': colorScheme
      },
      children
    )
  );
}

Comments.propTypes = {
  className: _propTypes2.default.string,
  href: _propTypes2.default.string,
  numPosts: _propTypes2.default.number.isRequired,
  orderBy: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number.isRequired, _propTypes2.default.string.isRequired]),
  colorScheme: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  onParse: _propTypes2.default.func
};

Comments.defaultProps = {
  numPosts: 10,
  orderBy: _CommentsOrderBy2.default.SOCIAL,
  width: 550,
  colorScheme: _ColorScheme2.default.LIGHT,
  children: undefined,
  className: undefined,
  href: undefined,
  onParse: undefined
};
//# sourceMappingURL=Comments.js.map