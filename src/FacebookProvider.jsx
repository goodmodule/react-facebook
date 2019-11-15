// @flow
import React, { Component, type Node } from 'react';
import canUseDOM from 'can-use-dom';
import FB from './Facebook';
import FacebookContext from './FacebookContext';

let api = null;

type Props = {
  appId: string,
  domain?: string,
  version?: string,
  cookie?: boolean,
  status?: boolean,
  xfbml?: boolean,
  language?: string,
  frictionlessRequests?: boolean,
  children?: Node,
  wait?: boolean,
  debug: boolean,
  chatSupport?: boolean,
};

type State = {
  isReady: boolean,
};

export default class Facebook extends Component<Props, State> {
  static defaultProps = {
    version: 'v3.1',
    cookie: false,
    status: false,
    xfbml: false,
    language: 'en_US',
    frictionlessRequests: false,
    domain: 'connect.facebook.net',
    children: undefined,
    wait: false,
    debug: false,
    chatSupport: false,
  };

  state: State = {
    isReady: false,
  };

  componentDidMount(): void {
    const { wait } = this.props;
    if (!wait) {
      this.handleInit();
    }
  }

  handleInit = async (): Promise<FB> => {
    // do not run if SSR
    if (!canUseDOM) {
      throw new Error('You can not use Facebook without DOM');
    }

    const { isReady } = this.state;
    if (isReady) {
      return api;
    }

    if (!api) {
      const {
        domain,
        version,
        appId,
        cookie,
        status,
        xfbml,
        language,
        frictionlessRequests,
        wait,
        debug,
        chatSupport,
      } = this.props;

      api = new FB({
        domain,
        appId,
        version,
        cookie,
        status,
        xfbml,
        language,
        frictionlessRequests,
        wait,
        debug,
        chatSupport,
      });
    }

    await api.init();

    if (!this.state.isReady) {
      this.setState({
        isReady: true,
      });
    }

    return api;
  }

  render() {
    const { children } = this.props;
    const { isReady, error } = this.state;
    const { handleInit } = this;

    const value = {
      isReady,
      error,
      handleInit,
      api,
    };

    return (
      <FacebookContext.Provider value={value}>
        {children}
      </FacebookContext.Provider>
    );
  }
}
