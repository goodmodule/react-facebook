// @flow
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

type Props = Process & {
  appId?: string,
  redirectURI?: string,
  display?: string,
  from?: string,
  to?: string,
  link?: string,
  source?: string,
  picture?: string, // deprecated
  name?: string, // deprecated
  caption?: string, // deprecated
  description?: string, // deprecated
  ref?: string,
};

export default class Feed extends Process<Props> {
  static defaultProps = {
    ...Process.defaultProps,
    link: undefined,
    display: undefined,
    appId: undefined,
    redirectURI: undefined,
  };

  async process(facebook) {
    const {
      link = getCurrentHref(),
      display,
      appId = facebook.getAppId(),
      redirectURI,
      from,
      to,
      picture,
      source,
      name,
      caption,
      description,
      ref,
    } = this.props;

    return facebook.ui(clearUndefinedProperties({
      method: 'feed',
      link,
      display,
      app_id: appId,
      redirect_uri: redirectURI,
      from,
      to,
      picture,
      source,
      name,
      caption,
      description,
      ref,
    }));
  }
}
