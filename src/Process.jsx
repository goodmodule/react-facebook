// @flow
import React, { Component, type Node } from 'react';
import Initialize from './Initialize';

export type Props = {
  children: Function,
  onReady?: Function,
};

type State = {
  fb?: Object,
  loading: boolean,
  data?: any,
  error?: Error,
};

export default class Process extends Component<Props, State> {
  state: State = {
    loading: false,
  };

  async process() {
    throw new Error('Override process function');
  }

  handleProcess = async () => {
    this.setState({
      error: undefined,
      data: undefined,
      processing: true,
    });

    try {
      const { fb } = this.state;
      if (!fb) {
        throw new Error('Facebook is not initialized. Wait for initialization');
      }

      const data = await this.process(fb);

      this.setState({
        data,
        processing: false,
      });
    } catch (error) {
      this.setState({
        error,
        processing: false,
      });
    }
  }

  handleFacebookReady = (fb) => {
    const { onReady } = this.props;

    this.setState({
      fb,
    });

    if (onReady) {
      onReady(fb);
    }
  }

  render() {
    const { children } = this.props;
    const { data, error, processing } = this.state;

    return (
      <Initialize onReady={this.handleFacebookReady}>
        {(facebookProps) => children({
          ...facebookProps,
          data,
          error,
          processing,
          loading: processing || !facebookProps.isReady,
          handleProcess: this.handleProcess,
        })}
      </Initialize>
    );
  }
}
