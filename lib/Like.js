'use strict';

exports.__esModule = true;
exports.default = Like;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _LikeSize = require('./constants/LikeSize');

var _LikeSize2 = _interopRequireDefault(_LikeSize);

var _LikeLayout = require('./constants/LikeLayout');

var _LikeLayout2 = _interopRequireDefault(_LikeLayout);

var _ColorScheme = require('./constants/ColorScheme');

var _ColorScheme2 = _interopRequireDefault(_ColorScheme);

var _LikeAction = require('./constants/LikeAction');

var _LikeAction2 = _interopRequireDefault(_LikeAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Like(props) {
  var className = props.className,
      _props$href = props.href,
      href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
      layout = props.layout,
      colorScheme = props.colorScheme,
      action = props.action,
      showFaces = props.showFaces,
      share = props.share,
      children = props.children,
      width = props.width,
      size = props.size,
      kidDirectedSite = props.kidDirectedSite,
      referral = props.referral,
      onParse = props.onParse;


  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'div',
      {
        className: 'fb-like',
        'data-ref': referral,
        'data-href': href,
        'data-layout': layout,
        'data-colorscheme': colorScheme,
        'data-action': action,
        'data-show-faces': showFaces,
        'data-share': share,
        'data-width': width,
        'data-size': size,
        'data-kid-directed-site': kidDirectedSite
      },
      children
    )
  );
}

Like.propTypes = {
  className: _propTypes2.default.string,
  referral: _propTypes2.default.string,
  href: _propTypes2.default.string,
  layout: _propTypes2.default.string.isRequired,
  showFaces: _propTypes2.default.bool.isRequired,
  colorScheme: _propTypes2.default.string.isRequired,
  action: _propTypes2.default.string.isRequired,
  share: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number.isRequired, _propTypes2.default.string.isRequired]),
  size: _propTypes2.default.string,
  kidDirectedSite: _propTypes2.default.bool.isRequired,
  onParse: _propTypes2.default.func
};

Like.defaultProps = {
  layout: _LikeLayout2.default.STANDARD,
  showFaces: false,
  colorScheme: _ColorScheme2.default.LIGHT,
  action: _LikeAction2.default.LIKE,
  share: false,
  size: _LikeSize2.default.SMALL,
  kidDirectedSite: false,
  children: undefined,
  className: undefined,
  href: undefined,
  referral: undefined,
  width: undefined,
  onParse: undefined
};
//# sourceMappingURL=Like.js.map