// @flow
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

type Props = Process & {
  link: string,
  to?: string,
  display?: string,
  appId?: string,
  redirectURI?: string,
};

export default class Send extends Process<Props> {
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
