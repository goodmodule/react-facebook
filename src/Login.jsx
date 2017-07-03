import PropTypes from 'prop-types';
import Process from './Process';

export default class Login extends Process {
  static propTypes = {
    ...Process.propTypes,
    scope: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    returnScopes: PropTypes.bool,
    rerequest: PropTypes.bool,
    reauthorize: PropTypes.bool,
  };

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
    const { scope, fields, returnScopes, rerequest, reauthorize } = this.props;
    const loginQpts = { scope };
    let auth_type = [];

    if (returnScopes) {
      loginQpts.return_scopes = true;
    }

    if (rerequest) {
      auth_type.append('rerequest');
    }

    if (reauthorize) {
      auth_type.append('reauthenticate');
    }

    loginQpts.auth_type = auth_type.join(',');

    const response = await facebook.login(loginQpts);
    if (response.status !== 'connected') {
      throw new Error('Unauthorized user');
    }

    return facebook.getTokenDetailWithProfile({ fields });
  }
}
