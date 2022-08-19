// @flow
import React, { Component } from 'react';
import Initialize from './Initialize';
import Subscribe from './Subscribe';
import Fields from './constants/Fields';
import LoginStatus from './constants/LoginStatus';

type Props = {
  children: Function,
  fields?: string[],
};

type State = {
  loading: Boolean,
  profile?: Object,
  error?: Error,
};

export default class Profile extends Component<Props, State> {
  static defaultProps = {
    fields: Fields,
  };

  state: State = {
    loading: true,
  };

  handleReady = async (api: Object): Promise<void> => {
    this.api = api;

    this.updateProfile();
  }

  handleStatusChange = (): void => {
    this.updateProfile();
  }

  async updateProfile() {
    const { api, props: { fields } } = this;
    if (!api) {
      return;
    }

    try {
      const response = await api.getLoginStatus();
      if (response.status !== LoginStatus.CONNECTED) {
        this.setState({
          profile: undefined,
          loading: false,
          error: undefined,
        });

        return;
      }

      const profile = await api.getProfile({
        fields,
      });

      this.setState({
        profile,
        loading: false,
        error: undefined,
      });
    } catch (error) {
      this.setState({
        profile: undefined,
        loading: false,
        error,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { profile, loading, error } = this.state;

    return (
      <Initialize onReady={this.handleReady}>
        <Subscribe event="auth.statusChange" onChange={this.handleStatusChange}>
          {children({
            profile,
            loading,
            error,
          })}
        </Subscribe>
      </Initialize>
    );
  }
}
