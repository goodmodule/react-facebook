'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(props) {
  const {
    className,
    style,
    href = (0, _getCurrentHref2.default)(),
    tabs,
    hideCover,
    width,
    height,
    showFacepile,
    hideCTA,
    smallHeader,
    adaptContainerWidth,
    children,
    onParse
  } = props;

  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'div',
      {
        className: 'fb-page',
        style: style,
        'data-tabs': tabs,
        'data-hide-cover': hideCover,
        'data-show-facepile': showFacepile,
        'data-hide-cta': hideCTA,
        'data-href': href,
        'data-small-header': smallHeader,
        'data-adapt-container-width': adaptContainerWidth,
        'data-height': height,
        'data-width': width
      },
      children
    )
  );
}

Page.propTypes = {
  className: _propTypes2.default.string,
  href: _propTypes2.default.string.isRequired,
  tabs: _propTypes2.default.string,
  hideCover: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number.isRequired, _propTypes2.default.string.isRequired]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.number.isRequired, _propTypes2.default.string.isRequired]),
  showFacepile: _propTypes2.default.bool,
  hideCTA: _propTypes2.default.bool,
  smallHeader: _propTypes2.default.bool,
  adaptContainerWidth: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onParse: _propTypes2.default.func
};

Page.defaultProps = {
  width: 340,
  height: 500,
  tabs: 'timeline',
  hideCover: false,
  showFacepile: true,
  hideCTA: false,
  smallHeader: false,
  adaptContainerWidth: true,
  children: undefined,
  className: undefined,
  onParse: undefined
};
//# sourceMappingURL=Page.js.map