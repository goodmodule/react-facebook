import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import canUseDOM from 'can-use-dom';
import { LoginStatus } from './Facebook';
import FacebookProvider from './FacebookProvider';

export default class Login extends Component {
  static propTypes = {
    scope: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    onError: PropTypes.func.isRequired,
    onResponse: PropTypes.func.isRequired,
    onReady: PropTypes.func,
    children: PropTypes.node,
    render: PropTypes.func,
    returnScopes: PropTypes.bool,
    rerequest: PropTypes.bool,
    component: PropTypes.node,
  };

  static contextTypes = {
    ...FacebookProvider.childContextTypes,
  };

  static defaultProps = {
    scope: '',
    fields: ['id', 'first_name', 'last_name', 'middle_name',
      'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
    returnScopes: false,
    rerequest: false,
    onReady: undefined,
    children: undefined,
    render: undefined,
    component: undefined,
  };

  state = {};

  componentDidMount() {
    if (canUseDOM) {
      this.initFacebook();
    }
  }

  async initFacebook() {
    const facebook = await this.context.facebook.init();

    this.setState({
      facebook,
    });

    const { onReady } = this.props;
    if (onReady) {
      onReady();
    }
  }

  onClick = async (evn) => {
    evn.stopPropagation();
    evn.preventDefault();

    const { facebook, isWorking } = this.state;
    if (!facebook || isWorking) {
      return;
    }

    this.setState({
      isWorking: true,
    });


    const { scope, fields, onError, onResponse, returnScopes, rerequest } = this.props;
    const loginQpts = { scope };

    if (returnScopes) {
      loginQpts.return_scopes = true;
    }

    if (rerequest) {
      loginQpts.auth_type = 'rerequest';
    }

    try {
      const response = await facebook.login(loginQpts);
      if (response.status !== 'connected') {
        throw new Error('Unauthorized user');
      }

      const data = await facebook.getTokenDetailWithProfile({ fields });

      this.setState({
        isWorking: false,
        data,
        error: null,
      });

      if (onResponse) {
        onResponse(data);
      }
    } catch (error) {
      this.setState({
        isWorking: false,
        data: null,
        error,
      });

      if (onError) {
        onError(error);
      }
    }
  };

  render() {
    const { children, render, component: Component } = this.props;
    const { error, data, facebook, isWorking = false } = this.state;
    const isLoading = !facebook;

    if (render) {
      return render({
        isLoading,
        isWorking,
        data,
        error,
        onClick: this.onClick,
      });
    }

    if (Component) {
      return (
        <Component
          isLoading={isLoading}
          isWorking={isWorking}
          data={data}
          error={error}
          onClick={this.onClick}
        />
      );
    }

    return cloneElement(children, {
      isLoading,
      isWorking,
      data,
      error,
      onClick: this.onClick,
    });
  }
}
