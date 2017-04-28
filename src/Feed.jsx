import PropTypes from 'prop-types';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

export default class Feed extends Process {
  static propTypes = {
    ...Process.propTypes,
    appId: PropTypes.string,
    redirectURI: PropTypes.string,
    display: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    link: PropTypes.string,
    source: PropTypes.string,
    picture: PropTypes.string, // deprecated
    name: PropTypes.string, // deprecated
    caption: PropTypes.string, // deprecated
    description: PropTypes.string, // deprecated
    ref: PropTypes.string,
  };

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
