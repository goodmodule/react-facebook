// @flow
import React, { Component, forwardRef } from 'react';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

type Props = {
  children: Function,
  handleProcess: Function,
  loading: boolean,
  link: string,
  to?: string,
  display?: string,
  appId?: string,
  redirectURI?: string,
};

class Send extends Component<Props> {
  static defaultProps = {
    to: undefined,
    display: undefined,
    appId: undefined,
    redirectURI: undefined,
  };

  handleClick = async (evn) => {
    evn.preventDefault();

    const { handleProcess } = this.props;

    return handleProcess(async (api) => {
      const {
        link = getCurrentHref(),
        display,
        appId = api.getAppId(),
        to,
        redirectURI,
      } = this.props;

      return api.ui(clearUndefinedProperties({
        method: 'send',
        link,
        display,
        app_id: appId,
        to,
        redirect_uri: redirectURI,
      }));
    });
  }

  render() {
    const { children, loading } = this.props;

    return children({
      loading,
      handleClick: this.handleClick,
    });
  }
}

export default forwardRef((props, ref) => (
  <Process>
    {({ loading, handleProcess }) => (
      <Send
        {...props}
        loading={loading}
        handleProcess={handleProcess}
        ref={ref}
      />
    )}
  </Process>
));
