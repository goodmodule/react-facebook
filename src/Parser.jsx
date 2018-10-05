// @flow
import React, { Component, type Node } from 'react';
import Initialize from './Initialize';

type Props = {
  className?: string,
  children: Function,
};

type State = {
  api?: Object,
  container?: Node,
};

export default class Parser extends Component<Props, State> {
  static defaultProps = {
    className: undefined,
  };

  state: State = {};

  handleReady = (api: Object): void => {
    this.setState({
      api,
    }, this.handleParse);
  }

  handleContainer = (container: Node): void => {
    this.setState({
      container,
    }, this.handleParse);
  }

  handleParse = (): void => {
    const { api, container } = this.state;
    if (!api || !container) {
      return;
    }

    api.parse(container);
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={className} ref={this.handleContainer}>
        <Initialize onReady={this.handleReady}>
          {children({
            handleParse: this.handleParse,
          })}
        </Initialize>
      </div>
    );
  }
}
