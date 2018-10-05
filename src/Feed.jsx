// @flow
import React, { Component, forwardRef } from 'react';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

type Props = {
  children: Function,
  loading: boolean,
  handleProcess: Function,
  data: any,
  error: Error,
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
  dataRef?: string,
};

class Feed extends Component<Props> {
  static defaultProps = {
    link: undefined,
    display: undefined,
    appId: undefined,
    redirectURI: undefined,
    from: undefined,
    to: undefined,
    source: undefined,
    picture: undefined,
    name: undefined,
    caption: undefined,
    description: undefined,
    dataRef: undefined,
  };

  handleClick = async (evn) => {
    evn.preventDefault();

    const { handleProcess } = this.props;

    return handleProcess(async (api) => {
      const {
        link = getCurrentHref(),
        display,
        appId = api.getAppId(),
        redirectURI,
        from,
        to,
        picture,
        source,
        name,
        caption,
        description,
        dataRef,
      } = this.props;

      return api.ui(clearUndefinedProperties({
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
        ref: dataRef,
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
      loading, handleProcess, error, data,
    }) => (
      <Feed
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
