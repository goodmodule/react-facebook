// @flow
import React, { Component, type Node } from 'react';
import Initialize from './Initialize';

export type ParserProps = {
  className?: string,
  children?: Node,
  onParse?: Function,
};

export default class Parser extends Component<ParserProps> {
  static defaultProps = {
    children: undefined,
    className: undefined,
    onParse: undefined,
  };

  componentWillReceiveProps(props: ParserProps): void {
    const { children: oldChildren } = this.props;
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

  shouldComponentUpdate(): boolean {
    return false;
  }

  handleFacebookReady = (facebook: Object): void => {
    this.facebook = facebook;
    this.parse();
  }

  handleContainer = (container): void => {
    this.container = container;
    this.parse();
  }

  rerender() {
    this.forceUpdate();

    this.parsed = false;
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
      <Initialize onReady={this.handleFacebookReady}>
        <div className={className} ref={this.handleContainer}>
          {children}
        </div>
      </Initialize>
    );
  }
}
