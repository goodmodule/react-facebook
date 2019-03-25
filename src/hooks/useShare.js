// @flow
import { useContext } from 'react';
import clearUndefinedProperties from '../utils/clearUndefinedProperties';
import FacebookContext from '../FacebookContext';

export default () => {
  const { api } = useContext(FacebookContext);

  function handleShare(options: Object) {
    const {
      href,
      display,
      hashtag,
      redirectUri,
      quote,
      mobileIframe,
      ...rest
    } = options;

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
