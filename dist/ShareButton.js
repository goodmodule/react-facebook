'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = ShareButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShareButton(props) {
  const {
    className,
    iconClassName,
    icon,
    children
  } = props,
        rest = (0, _objectWithoutProperties3.default)(props, ['className', 'iconClassName', 'icon', 'children']);

  return _react2.default.createElement(_Share2.default, (0, _extends3.default)({}, rest, {
    render: ({ isReady, onClick }) => _react2.default.createElement(
      'button',
      {
        type: 'button',
        disabled: !isReady,
        className: className,
        onClick: onClick
      },
      !!icon && _react2.default.createElement('i', { className: iconClassName }),
      children
    )
  }));
}

ShareButton.propTypes = (0, _extends3.default)({}, _Share2.default.propTypes, {
  className: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  icon: _propTypes2.default.bool
});

ShareButton.defaultProps = (0, _extends3.default)({}, _Share2.default.defaultProps, {
  className: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
});
//# sourceMappingURL=ShareButton.js.map