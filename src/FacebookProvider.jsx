// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { Node } from 'react';
import FB from './Facebook';

let facebookInstance = null;

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

export default class Facebook extends Component<Props> {
  static childContextTypes = {
    facebook: PropTypes.object.isRequired,
  };

  static defaultProps = {
    version: 'v2.9',
    cookie: false,
    status: false,
    xfbml: false,
    language: 'en_US',
    frictionlessRequests: false,
    domain: 'connect.facebook.net',
    children: undefined,
    wait: false,
  };

  getChildContext() {
    return {
      facebook: this,
    };
  }

  async init() {
    if (!this.facebook) {
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

      this.facebook = facebookInstance || new FB({
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

      facebookInstance = this.facebook;
    }

    await this.facebook.init();

    return this.facebook;
  }

  render() {
    return this.props.children;
  }
}
