// @flow
import React, { Component, forwardRef } from 'react';
import Process from './Process';
import Fields from './constants/Fields';

type Props = {
  children: Function,
  handleProcess: Function,
  loading: boolean,
  data: any,
  error: Error,
  scope?: string,
  fields?: string[],
  returnScopes?: boolean,
  rerequest?: boolean,
  reauthorize?: boolean,
  onCompleted?: Function,
  onError?: Function,
  eventKey?: any,
};

class Login extends Component<Props> {
  static defaultProps = {
    scope: '',
    fields: Fields,
    returnScopes: false,
    rerequest: false,
    reauthorize: false,
    onCompleted: undefined,
    onError: undefined,
    eventKey: undefined,
  };

  handleClick = async (evn) => {
    evn.preventDefault();

    const {
      handleProcess, onCompleted, onError, onSuccess,
    } = this.props;

    try {
      await handleProcess(async (api) => {
        const {
          scope, fields, returnScopes, rerequest, reauthorize, eventKey,
        } = this.props;
        const loginQpts = { scope };
        const authType = [];

        if (returnScopes) {
          loginQpts.return_scopes = true;
        }

        if (rerequest) {
          authType.push('rerequest');
        }

        if (reauthorize) {
          authType.push('reauthenticate');
        }

        if (authType.length) {
          loginQpts.auth_type = authType.join(',');
        }

        const loginResponse = await api.login(loginQpts);
        if (loginResponse.status !== 'connected') {
          throw new Error('Unauthorized user');
        }

        const data = await api.getTokenDetailWithProfile({ fields }, loginResponse);

        if (onCompleted) {
          await onCompleted({
            ...data,
            eventKey,
          });
        }

        return data;
      }, onSuccess);
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  }

  render() {
    const {
      children, loading, error, data,
    } = this.props;

    return children({
      loading,
      handleClick: this.handleClick,
      error,
      data,
    });
  }
}

export default forwardRef((props, ref) => (
  <Process>
    {({
      loading, handleProcess, data, error,
    }) => (
      <Login
        {...props}
        loading={loading}
        handleProcess={handleProcess}
        data={data}
        error={error}
        ref={ref}
      />
    )}
  </Process>
));
