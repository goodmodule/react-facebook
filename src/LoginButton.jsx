import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner-children';
import FacebookLogin from './Login';

export default class LoginButton extends Component {
  static propTypes = {
    ...FacebookLogin.propTypes,
    spinnerConfig: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    buttonClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    icon: PropTypes.bool,
    spinnerClassName: PropTypes.string,
    spinner: PropTypes.bool,
  };

  static defaultProps = {
    ...FacebookLogin.defaultProps,
    spinnerConfig: {},
    buttonClassName: 'btn btn-lg',
    iconClassName: 'fa fa-facebook pull-left',
    spinner: true,
    icon: true,
  };

  render() {
    const {
      children,
      buttonClassName,
      iconClassName,
      icon,
      spinner,
      spinnerClassName,
      ...rest
    } = this.props;

    return (
      <FacebookLogin
        {...rest}
        render={({ isWorking, isLoading, onClick }) => (
          <button
            type="button"
            className={buttonClassName}
            onClick={onClick}
            disabled={isWorking || isLoading}
          >
            {!!icon && <i className={iconClassName} />}
            {children}
            {!!spinner && (isWorking || isLoading) && (
              <Spinner
                config={this.props.spinnerConfig}
                className={spinnerClassName}
              />
            )}
          </button>
        )}
      />
    );
  }
}
