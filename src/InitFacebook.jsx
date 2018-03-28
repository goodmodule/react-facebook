// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import PropTypes from 'prop-types';
import canUseDOM from 'can-use-dom';

type Props = {
  children?: Node,
  onReady: Function
};

export default class InitFacebook extends Component<Props> {
  static defaultProps = {
    children: undefined,
  };

  static contextTypes = {
    facebook: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (canUseDOM) {
      this.initFacebook();
    }
  }

  async initFacebook() {
    const { onReady } = this.props;

    const facebook = await this.context.facebook.init();
    onReady(facebook);
  }

  render() {
    return this.props.children;
  }
}
