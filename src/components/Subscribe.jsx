// @flow
import React, { Component, type Node } from 'react';
import Initialize from './Initialize';

type Props = {
  children: Node,
  onChange?: Function,
  event: string,
};

type State = {
  api?: Object,
};

export default class LoginStatus extends Component<Props, State> {
  static defaultProps = {
    onChange: undefined,
  };

  state: State = {};

  componentWillUnmount() {
    const { state: { api }, props: { event } } = this;
    if (api) {
      api.unsubscribe(event, this.handleChange);
    }
  }

  handleReady = async (api: Object): Promise<void> => {
    const { event } = this.props;

    this.setState({
      api,
    });

    await api.subscribe(event, this.handleChange);
  }

  handleChange = (...args): void => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(...args);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Initialize onReady={this.handleReady}>
        {children}
      </Initialize>
    );
  }
}
