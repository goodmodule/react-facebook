// @flow
import clearUndefinedProperties from '../utils/clearUndefinedProperties';
import useApi from './useApi';

export default () => {
  const [, prepareApi] = useApi();

  async function handleShare(options: Object) {
    const {
      href,
      display,
      hashtag,
      redirectUri,
      quote,
      mobileIframe,
      ...rest
    } = options;

    const api = await prepareApi();

    return api.ui(clearUndefinedProperties({
      method: 'share',
      href,
      display,
      app_id: api.getAppId(),
      hashtag,
      redirect_uri: redirectUri,
      quote,
      mobile_iframe: mobileIframe,
      ...rest,
    }));
  }

  return handleShare;
};
