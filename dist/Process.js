'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InitFacebook = require('./InitFacebook');

var _InitFacebook2 = _interopRequireDefault(_InitFacebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Process extends _react.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      isWorking: false
    }, this.handleClick = (() => {
      var _ref = (0, _asyncToGenerator3.default)(function* (evn) {
        evn.preventDefault();
        evn.stopPropagation();

        _this.setState({
          isWorking: true
        });

        try {
          const { facebook } = _this.state;
          if (!facebook) {
            throw new Error('Facebook is not initialized');
          }

          const { dontWait, onResponse, onError } = _this.props;
          if (dontWait) {
            _this.process(facebook).then(function (response) {
              if (onResponse) {
                onResponse(response);
              }
            }, function (error) {
              if (onError) {
                onError(error);
              }
            });
          } else {
            const response = yield _this.process(facebook);

            if (onResponse) {
              yield onResponse(response);
            }
          }
        } catch (e) {
          const { onError } = _this.props;
          if (onError) {
            yield onError(e);
          }
        }

        _this.setState({
          isWorking: false
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })(), this.handleFacebookReady = facebook => {
      this.setState({ facebook });

      const { onReady } = this.props;
      if (onReady) {
        onReady(facebook);
      }
    }, _temp;
  }

  getElement() {
    const {
      children,
      render,
      component: CustomComponent
    } = this.props;

    const { facebook, isWorking } = this.state;
    const isLoading = !facebook;
    const isReady = !isLoading && !isWorking;

    if (render) {
      return render({
        isWorking,
        isLoading,
        isReady,
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
  }

  render() {
    return _react2.default.createElement(
      _InitFacebook2.default,
      { onReady: this.handleFacebookReady },
      this.getElement()
    );
  }
}
exports.default = Process;
Process.propTypes = {
  children: _propTypes2.default.node,
  render: _propTypes2.default.func,
  component: _propTypes2.default.node,
  onReady: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onResponse: _propTypes2.default.func,
  dontWait: _propTypes2.default.bool
};
Process.defaultProps = {
  children: undefined,
  render: undefined,
  component: undefined,
  onReady: undefined,
  onError: undefined,
  onResponse: undefined,
  dontWait: undefined
};
//# sourceMappingURL=Process.js.map