'use strict';

exports.__esModule = true;
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var Process = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Process, _Component);

  function Process() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Process);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isWorking: false
    }, _this.handleClick = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(evn) {
        var facebook, _this$props, dontWait, onResponse, onError, response, _onError;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                evn.preventDefault();
                evn.stopPropagation();

                _this.setState({
                  isWorking: true
                });

                _context.prev = 3;
                facebook = _this.state.facebook;

                if (facebook) {
                  _context.next = 7;
                  break;
                }

                throw new Error('Facebook is not initialized');

              case 7:
                _this$props = _this.props, dontWait = _this$props.dontWait, onResponse = _this$props.onResponse, onError = _this$props.onError;

                if (!dontWait) {
                  _context.next = 12;
                  break;
                }

                _this.process(facebook).then(function (response) {
                  if (onResponse) {
                    onResponse(response);
                  }
                }, function (error) {
                  if (onError) {
                    onError(error);
                  }
                });
                _context.next = 18;
                break;

              case 12:
                _context.next = 14;
                return _this.process(facebook);

              case 14:
                response = _context.sent;

                if (!onResponse) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return onResponse(response);

              case 18:
                _context.next = 26;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](3);
                _onError = _this.props.onError;

                if (!_onError) {
                  _context.next = 26;
                  break;
                }

                _context.next = 26;
                return _onError(_context.t0);

              case 26:

                _this.setState({
                  isWorking: false
                });

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 20]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), _this.handleFacebookReady = function (facebook) {
      _this.setState({ facebook: facebook });

      var onReady = _this.props.onReady;

      if (onReady) {
        onReady(facebook);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Process.prototype.getElement = function getElement() {
    var _props = this.props,
        children = _props.children,
        render = _props.render,
        CustomComponent = _props.component;
    var _state = this.state,
        facebook = _state.facebook,
        isWorking = _state.isWorking;

    var isLoading = !facebook;
    var isReady = !isLoading && !isWorking;

    if (render) {
      return render({
        isWorking: isWorking,
        isLoading: isLoading,
        isReady: isReady,
        onClick: this.handleClick
      });
    }

    if (CustomComponent) {
      return _react2.default.createElement(CustomComponent, {
        onClick: this.handleClick,
        isLoading: isLoading,
        isWorking: isWorking,
        isReady: isReady
      });
    }

    return (0, _react.cloneElement)(children, {
      onClick: this.handleClick
    });
  };

  Process.prototype.render = function render() {
    return _react2.default.createElement(
      _InitFacebook2.default,
      { onReady: this.handleFacebookReady },
      this.getElement()
    );
  };

  return Process;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  render: _propTypes2.default.func,
  component: _propTypes2.default.node,
  onReady: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onResponse: _propTypes2.default.func,
  dontWait: _propTypes2.default.bool
}, _class.defaultProps = {
  children: undefined,
  render: undefined,
  component: undefined,
  onReady: undefined,
  onError: undefined,
  onResponse: undefined,
  dontWait: undefined
}, _temp2);
exports.default = Process;
//# sourceMappingURL=Process.js.map