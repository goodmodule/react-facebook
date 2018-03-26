'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSpinnerChildren = require('react-spinner-children');

var _reactSpinnerChildren2 = _interopRequireDefault(_reactSpinnerChildren);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginButton = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(LoginButton, _Component);

  function LoginButton() {
    (0, _classCallCheck3.default)(this, LoginButton);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  LoginButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        buttonClassName = _props.buttonClassName,
        iconClassName = _props.iconClassName,
        icon = _props.icon,
        spinner = _props.spinner,
        spinnerClassName = _props.spinnerClassName,
        rest = (0, _objectWithoutProperties3.default)(_props, ['children', 'buttonClassName', 'iconClassName', 'icon', 'spinner', 'spinnerClassName']);


    return _react2.default.createElement(_Login2.default, (0, _extends3.default)({}, rest, {
      render: function render(_ref) {
        var isWorking = _ref.isWorking,
            isLoading = _ref.isLoading,
            onClick = _ref.onClick;
        return _react2.default.createElement(
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
            config: _this2.props.spinnerConfig,
            className: spinnerClassName
          })
        );
      }
    }));
  };

  return LoginButton;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _Login2.default.propTypes, {
  spinnerConfig: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  buttonClassName: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  icon: _propTypes2.default.bool,
  spinnerClassName: _propTypes2.default.string,
  spinner: _propTypes2.default.bool
}), _class.defaultProps = (0, _extends3.default)({}, _Login2.default.defaultProps, {
  spinnerConfig: {},
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  spinner: true,
  icon: true
}), _temp);
exports.default = LoginButton;
//# sourceMappingURL=LoginButton.js.map