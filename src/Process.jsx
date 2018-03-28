// @flow
import type { Node } from 'react';
import React, { Component, cloneElement } from 'react';
import InitFacebook from './InitFacebook';

type Props = {
  children?: Node,
  render?: Function,
  component?: Node,
  onReady?: Function,
  onError?: Function,
  onResponse?: Function,
  dontWait?: boolean,
};

type State = {
  isMounted: boolean,
};

export default class Process extends Component<Props, State> {
  static defaultProps = {
    children: undefined,
    render: undefined,
    component: undefined,
    onReady: undefined,
    onError: undefined,
    onResponse: undefined,
    dontWait: undefined,
  };

  state: State = {
    isWorking: false,
    isMounted: true,
  };

  componentWillUnmount() {
    this.setState({
      isMounted: false,
    });
  }

  getElement() {
    const {
      children,
      render,
      component: CustomComponent,
    } = this.props;

    const { facebook, isWorking } = this.state;
    const isLoading = !facebook;
    const isReady = !isLoading && !isWorking;

    if (render) {
      return render({
        isWorking,
        isLoading,
        isReady,
        onClick: this.handleClick,
      });
    }

    if (CustomComponent) {
      return (
        <CustomComponent
          onClick={this.handleClick}
          isLoading={isLoading}
          isWorking={isWorking}
          isReady={isReady}
        />
      );
    }

    return cloneElement(children, {
      onClick: this.handleClick,
    });
  }

  handleClick = async (evn) => {
    evn.preventDefault();
    evn.stopPropagation();

    this.setState({
      isWorking: true,
    });

    try {
      const { facebook } = this.state;
      if (!facebook) {
        throw new Error('Facebook is not initialized');
      }

      const { dontWait, onResponse, onError } = this.props;
      if (dontWait) {
        this.process(facebook).then((response) => {
          if (onResponse) {
            onResponse(response);
          }
        }, (error) => {
          if (onError) {
            onError(error);
          }
        });
      } else {
        const response = await this.process(facebook);

        if (onResponse) {
          await onResponse(response);
        }
      }
    } catch (e) {
      const { onError } = this.props;
      if (onError) {
        await onError(e);
      }
    }

    const { isMounted } = this.state;
    if (isMounted) {
      this.setState({
        isWorking: false,
      });
    }
  }

  handleFacebookReady = (facebook) => {
    const { isMounted } = this.state;
    if (isMounted) {
      this.setState({ facebook });

      const { onReady } = this.props;
      if (onReady) {
        onReady(facebook);
      }
    }
  }

  render() {
    return (
      <InitFacebook onReady={this.handleFacebookReady}>
        {this.getElement()}
      </InitFacebook>
    );
  }
}
