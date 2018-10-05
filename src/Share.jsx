// @flow
import React, { Component, forwardRef } from 'react';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

type Props = {
  children: Function,
  handleProcess: Function,
  loading: boolean,
  data: any,
  error: Error,
  href?: string,
  hashtag?: string,
  quote?: string,
  mobileIframe?: boolean,
  display?: string,
  appId?: string,
  redirectURI?: string,
};

class Share extends Component<Props> {
  static defaultProps = {
    href: undefined,
    hashtag: undefined,
    quote: undefined,
    mobileIframe: undefined,
    display: undefined,
    appId: undefined,
    redirectURI: undefined,
  };

  handleClick = async (evn) => {
    evn.preventDefault();

    const { handleProcess } = this.props;

    return handleProcess(async (api) => {
      const {
        href = getCurrentHref(),
        display,
        appId = api.getAppId(),
        hashtag,
        redirectURI,
        quote,
        mobileIframe,
      } = this.props;

      return api.ui(clearUndefinedProperties({
        method: 'share',
        href,
        display,
        app_id: appId,
        hashtag,
        redirect_uri: redirectURI,
        quote,
        mobile_iframe: mobileIframe,
      }));
    });
  }

  render() {
    const {
      children, loading, error, data,
    } = this.props;

    return children({
      loading,
      handleClick: this.handleClick,
      error,
      data,
    });
  }
}

export default forwardRef((props, ref) => (
  <Process>
    {({
      loading, handleProcess, data, error,
    }) => (
      <Share
        {...props}
        loading={loading}
        handleProcess={handleProcess}
        data={data}
        error={error}
        ref={ref}
      />
    )}
  </Process>
));
