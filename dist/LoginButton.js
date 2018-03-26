'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSpinnerChildren = require('react-spinner-children');

var _reactSpinnerChildren2 = _interopRequireDefault(_reactSpinnerChildren);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoginButton extends _react.Component {

  render() {
    const _props = this.props,
          {
      children,
      buttonClassName,
      iconClassName,
      icon,
      spinner,
      spinnerClassName
    } = _props,
          rest = (0, _objectWithoutProperties3.default)(_props, ['children', 'buttonClassName', 'iconClassName', 'icon', 'spinner', 'spinnerClassName']);

    return _react2.default.createElement(_Login2.default, (0, _extends3.default)({}, rest, {
      render: ({ isWorking, isLoading, onClick }) => _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: buttonClassName,
          onClick: onClick,
          disabled: isWorking || isLoading
        },
        !!icon && _react2.default.createElement('i', { className: iconClassName }),
        children,
        !!spinner && (isWorking || isLoading) && _react2.default.createElement(_reactSpinnerChildren2.default, {
          config: this.props.spinnerConfig,
          className: spinnerClassName
        })
      )
    }));
  }
}
exports.default = LoginButton;
LoginButton.propTypes = (0, _extends3.default)({}, _Login2.default.propTypes, {
  spinnerConfig: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  buttonClassName: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  icon: _propTypes2.default.bool,
  spinnerClassName: _propTypes2.default.string,
  spinner: _propTypes2.default.bool
});
LoginButton.defaultProps = (0, _extends3.default)({}, _Login2.default.defaultProps, {
  spinnerConfig: {},
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  spinner: true,
  icon: true
});
//# sourceMappingURL=LoginButton.js.map