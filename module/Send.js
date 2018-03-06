import _extends from 'babel-runtime/helpers/extends';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import PropTypes from 'prop-types';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

export default class Send extends Process {

  process(facebook) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const {
        link = getCurrentHref(),
        display,
        appId = facebook.getAppId(),
        to,
        redirectURI
      } = _this.props;

      return facebook.ui(clearUndefinedProperties({
        method: 'send',
        link,
        display,
        app_id: appId,
        to,
        redirect_uri: redirectURI
      }));
    })();
  }
}
Send.propTypes = _extends({}, Process.propTypes, {
  link: PropTypes.string.isRequired,
  to: PropTypes.string,
  display: PropTypes.string,
  appId: PropTypes.string,
  redirectURI: PropTypes.string
});
Send.defaultProps = _extends({}, Process.defaultProps, {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});
//# sourceMappingURL=Send.js.map