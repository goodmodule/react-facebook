// @flow
import React, { Component } from 'react';
import Initialize from './Initialize';
import Subscribe from './Subscribe';

async function getLoginStatus(api: Object): Promise<string> {
  const response = await api.getLoginStatus();

  return response.status;
}

type Props = {
  children: Function,
};

type State = {
  loading: Boolean,
  status?: undefined,
};

export default class Status extends Component<Props, State> {
  state: State = {
    loading: true,
  };

  handleReady = async (api: Object): Promise<void> => {
    this.setState({
      status: await getLoginStatus(api),
      loading: false,
    });
  }

  handleStatusChange = (response: Object): void => {
    this.setState({
      status: response.status,
      loading: false,
    });
  }

  render() {
    const { children } = this.props;
    const { status, loading } = this.state;

    return (
      <Initialize onReady={this.handleReady}>
        <Subscribe event="auth.statusChange" onChange={this.handleStatusChange}>
          {children({
            status,
            loading,
          })}
        </Subscribe>
      </Initialize>
    );
  }
}
