import PropTypes from 'prop-types';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

export default class Send extends Process {
  static propTypes = {
    ...Process.propTypes,
    link: PropTypes.string.isRequired,
    to: PropTypes.string,
    display: PropTypes.string,
    appId: PropTypes.string,
    redirectURI: PropTypes.string,
  };

  static defaultProps = {
    ...Process.defaultProps,
    to: undefined,
    display: undefined,
    appId: undefined,
    redirectURI: undefined,
  };

  async process(facebook) {
    const {
      link = getCurrentHref(),
      display,
      appId = facebook.getAppId(),
      to,
      redirectURI,
    } = this.props;

    return facebook.ui(clearUndefinedProperties({
      method: 'send',
      link,
      display,
      app_id: appId,
      to,
      redirect_uri: redirectURI,
    }));
  }
}
