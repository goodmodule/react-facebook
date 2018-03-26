import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner-children';
import Login from './Login';

export default class LoginButton extends Component {

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
          rest = _objectWithoutProperties(_props, ['children', 'buttonClassName', 'iconClassName', 'icon', 'spinner', 'spinnerClassName']);

    return React.createElement(Login, _extends({}, rest, {
      render: ({ isWorking, isLoading, onClick }) => React.createElement(
        'button',
        {
          type: 'button',
          className: buttonClassName,
          onClick: onClick,
          disabled: isWorking || isLoading
        },
        !!icon && React.createElement('i', { className: iconClassName }),
        children,
        !!spinner && (isWorking || isLoading) && React.createElement(Spinner, {
          config: this.props.spinnerConfig,
          className: spinnerClassName
        })
      )
    }));
  }
}
LoginButton.propTypes = _extends({}, Login.propTypes, {
  spinnerConfig: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  icon: PropTypes.bool,
  spinnerClassName: PropTypes.string,
  spinner: PropTypes.bool
});
LoginButton.defaultProps = _extends({}, Login.defaultProps, {
  spinnerConfig: {},
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  spinner: true,
  icon: true
});
//# sourceMappingURL=LoginButton.js.map