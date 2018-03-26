import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import InitFacebook from './InitFacebook';

export default class Process extends Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      isWorking: false
    }, this.handleClick = (() => {
      var _ref = _asyncToGenerator(function* (evn) {
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
      return React.createElement(CustomComponent, {
        onClick: this.handleClick,
        isLoading: isLoading,
        isWorking: isWorking,
        isReady: isReady
      });
    }

    return cloneElement(children, {
      onClick: this.handleClick
    });
  }

  render() {
    return React.createElement(
      InitFacebook,
      { onReady: this.handleFacebookReady },
      this.getElement()
    );
  }
}
Process.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  component: PropTypes.node,
  onReady: PropTypes.func,
  onError: PropTypes.func,
  onResponse: PropTypes.func,
  dontWait: PropTypes.bool
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