// @flow
import Process from './Process';

type Props = Process & {
  scope: string,
  fields?: string[],
  returnScopes?: boolean,
  rerequest?: boolean,
  reauthorize?: boolean,
};

export default class Login extends Process<Props> {
  static defaultProps = {
    ...Process.defaultProps,
    scope: '',
    fields: ['id', 'first_name', 'last_name', 'middle_name',
      'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
    returnScopes: false,
    rerequest: false,
    reauthorize: false,
  };

  async process(facebook) {
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

    const response = await facebook.login(loginQpts);
    if (response.status !== 'connected') {
      throw new Error('Unauthorized user');
    }

    return facebook.getTokenDetailWithProfile({ fields });
  }
}
