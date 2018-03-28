// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import InitFacebook from './InitFacebook';

type Props = {
  className?: string,
  children?: Node,
  onParse?: Function,
};

export default class Parser extends Component<Props> {
  static defaultProps = {
    className: undefined,
    onParse: undefined,
  };

  componentWillReceiveProps(props) {
    const oldChildren = this.props.children;
    const { children } = props;

    if (!children || !oldChildren) {
      return;
    }

    const changed = Object.keys(oldChildren.props).find((propName) => {
      const oldValue = oldChildren.props[propName];
      const newValue = children.props[propName];

      return oldValue !== newValue;
    });

    if (changed) {
      this.rerender();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  rerender() {
    this.forceUpdate();

    this.parsed = false;
    this.parse();
  }

  handleFacebookReady = (facebook) => {
    this.facebook = facebook;
    this.parse();
  }

  handleContainer = (container) => {
    this.container = container;
    this.parse();
  }

  parse() {
    const { parsed, container, facebook } = this;
    if (parsed || !container || !facebook) {
      return false;
    }

    this.parsed = true;

    const parseResponse = facebook.parse(container);

    const { onParse } = this.props;
    if (onParse) {
      onParse(parseResponse);
    }

    return parseResponse;
  }

  render() {
    const { className, children } = this.props;

    return (
      <InitFacebook onReady={this.handleFacebookReady}>
        <div className={className} ref={this.handleContainer}>
          {children}
        </div>
      </InitFacebook>
    );
  }
}
