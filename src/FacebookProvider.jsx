// @flow
import React, { Component, createContext, type Node } from 'react';
import canUseDOM from 'can-use-dom';
import FB from './Facebook';

export const FacebookContext = createContext();
let fb = null;

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
  };

  state: State = {
    isReady: false,
  };

  componentDidMount(): void {
    const { wait } = this.props;
    if (!wait) {
      this.init();
    }
  }

  init = async (): Promise<FB> => {
    // do not run if SSR
    if (!canUseDOM) {
      throw new Error('You can not use Facebook without DOM');
    }

    const { isReady } = this.state;
    if (isReady) {
      return fb;
    }

    if (!fb) {
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
      } = this.props;

      fb = new FB({
        domain,
        appId,
        version,
        cookie,
        status,
        xfbml,
        language,
        frictionlessRequests,
        wait,
      });
    }

    await fb.init();

    if (!this.state.isReady) {
      this.setState({
        isReady: true,
      });
    }

    return fb;
  }

  render() {
    const { children } = this.props;
    const { isReady, error } = this.state;
    const { init } = this;

    const value = {
      isReady,
      error,
      init,
      fb: isReady ? fb : undefined,
    };

    return (
      <FacebookContext.Provider value={value}>
        {children}
      </FacebookContext.Provider>
    );
  }
}
