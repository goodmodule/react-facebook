import _extends from 'babel-runtime/helpers/extends';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import PropTypes from 'prop-types';
import Process from './Process';

export default class Login extends Process {

  process(facebook) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const { scope, fields, returnScopes, rerequest, reauthorize } = _this.props;
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

      const response = yield facebook.login(loginQpts);
      if (response.status !== 'connected') {
        throw new Error('Unauthorized user');
      }

      return facebook.getTokenDetailWithProfile({ fields });
    })();
  }
}
Login.propTypes = _extends({}, Process.propTypes, {
  scope: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string),
  returnScopes: PropTypes.bool,
  rerequest: PropTypes.bool,
  reauthorize: PropTypes.bool
});
Login.defaultProps = _extends({}, Process.defaultProps, {
  scope: '',
  fields: ['id', 'first_name', 'last_name', 'middle_name', 'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
  returnScopes: false,
  rerequest: false,
  reauthorize: false
});
//# sourceMappingURL=Login.js.map