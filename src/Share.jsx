// @flow
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

type Props = Process & {
  href?: string,
  hashtag?: string,
  quote?: string,
  mobileIframe?: boolean,
  display?: string,
  appId?: string,
  redirectURI?: string,
};

export default class Share extends Process<Props> {
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
