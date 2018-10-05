// @flow
import React, { Component, forwardRef } from 'react';
import Process from './Process';

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
};

class Login extends Component<Props> {
  static defaultProps = {
    scope: '',
    fields: ['id', 'first_name', 'last_name', 'middle_name',
      'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
    returnScopes: false,
    rerequest: false,
    reauthorize: false,
    onCompleted: undefined,
    onError: undefined,
  };

  handleClick = async (evn) => {
    evn.preventDefault();

    const { handleProcess, onCompleted, onError } = this.props;

    try {
      const data = handleProcess(async (api) => {
        const {
          scope, fields, returnScopes, rerequest, reauthorize,
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

        const response = await api.login(loginQpts);
        if (response.status !== 'connected') {
          throw new Error('Unauthorized user');
        }

        return api.getTokenDetailWithProfile({ fields });
      });

      if (onCompleted) {
        onCompleted(data);
      }
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
