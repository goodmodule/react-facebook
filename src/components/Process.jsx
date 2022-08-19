// @flow
import React, { Component } from 'react';
import Initialize from './Initialize';

export type Props = {
  children: Function,
};

type State = {
  api?: Object,
  isProcessing?: boolean,
  error?: Error,
  data?: any,
};

export default class Process extends Component<Props, State> {
  state: State = {
    api: undefined,
  };

  handleProcess = async (fn: Function, handleSuccess: Function = () => {}): Promise<any> => {
    this.setState({
      data: undefined,
      error: undefined,
      loading: true,
    });

    try {
      const { api } = this.state;
      if (!api) {
        throw new Error('Facebook is not initialized. Wait for isReady');
      }

      const data = await fn(api);

      this.setState(
        {
          data,
          loading: false,
        },
        handleSuccess,
      );

      return data;
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });

      throw error;
    }
  }

  handleReady = (api: Object): void => {
    this.setState({
      api,
    });
  }

  render() {
    const { children } = this.props;
    const {
      api, loading, data, error,
    } = this.state;

    return (
      <Initialize onReady={this.handleReady}>
        {children({
          loading: !api || loading,
          handleProcess: this.handleProcess,
          data,
          error,
        })}
      </Initialize>
    );
  }
}
