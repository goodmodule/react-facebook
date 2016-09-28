import React, { Component, PropTypes } from 'react';
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

  constructor(props, context) {
    super(props, context);

    this.state = {
      isWorking: true,
    };
  }

  onReady = () => {
    this.setState({ isWorking: false });
  }

  onWorking = (isWorking = false) => {
    this.setState({ isWorking });
  }

  renderLoading() {
    const { spinner, spinnerClassName } = this.props;

    if (!spinner || !this.state.isWorking) {
      return null;
    }

    return (
      <Spinner config={this.props.spinnerConfig} className={spinnerClassName} />
    );
  }

  render() {
    const { children, buttonClassName, iconClassName, icon } = this.props;

    return (
      <FacebookLogin
        onReady={this.onReady}
        onWorking={this.onWorking}
        {...this.props}
      >
        <button
          type="button"
          className={buttonClassName}
          disabled={this.state.isWorking}
        >
          {icon ? <i className={iconClassName} /> : null}
          {children}
          {this.renderLoading()}
        </button>
      </FacebookLogin>
    );
  }
}
