import PropTypes from 'prop-types';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

export default class Share extends Process {
  static propTypes = {
    ...Process.propTypes,
    href: PropTypes.string,
    hashtag: PropTypes.string,
    quote: PropTypes.string,
    mobileIframe: PropTypes.bool,
    display: PropTypes.string,
    appId: PropTypes.string,
    redirectURI: PropTypes.string,
  };

  static defaultProps = {
    ...Process.defaultProps,
    href: undefined,
    hashtag: undefined,
    quote: undefined,
    mobileIframe: undefined,
    display: undefined,
    appId: undefined,
    redirectURI: undefined,
  };

  async process(facebook) {
    const {
      href = getCurrentHref(),
      display,
      appId = facebook.getAppId(),
      hashtag,
      redirectURI,
      quote,
      mobileIframe,
    } = this.props;

    return facebook.ui(clearUndefinedProperties({
      method: 'share',
      href,
      display,
      app_id: appId,
      hashtag,
      redirect_uri: redirectURI,
      quote,
      mobile_iframe: mobileIframe,
    }));
  }
}
