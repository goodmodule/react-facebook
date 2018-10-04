// @flow
import React, { Component } from 'react';
import { FacebookContext } from './FacebookProvider';

type Props = {
  children: Function,
  onReady?: Function,
};

export default class Initialize extends Component<Props> {
  static defaultProps = {
    onReady: undefined,
  };

  componentDidMount() {
    this.prepare();
  }

  init: ?Function;

  async prepare() {
    const { init, props: { onReady } } = this;
    if (init) {
      const fb = await init();
      if (onReady) {
        onReady(fb);
      }
    }
  }

  renderChildren = (facebookProps: Object) => {
    const { children } = this.props;

    if (!this.init) {
      this.init = facebookProps.init;
    }

    if (typeof children === 'function') {
      return children(facebookProps);
    }

    return children;
  }

  render() {
    return (
      <FacebookContext.Consumer>
        {this.renderChildren}
      </FacebookContext.Consumer>
    );
  }
}
