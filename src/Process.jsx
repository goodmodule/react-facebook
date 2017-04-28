import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import InitFacebook from './InitFacebook';

export default class Process extends Component {
  static propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
    component: PropTypes.node,
    onReady: PropTypes.func,
    onError: PropTypes.func,
    onResponse: PropTypes.func,
  };

  static defaultProps = {
    children: undefined,
    render: undefined,
    component: undefined,
    onReady: undefined,
    onError: undefined,
    onResponse: undefined,
  };

  state = {
    isWorking: false,
  };

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

      const response = await this.process(facebook);

      const { onResponse } = this.props;
      if (onResponse) {
        await onResponse(response);
      }
    } catch (e) {
      const { onError } = this.props;
      if (onError) {
        await onError(e);
      }
    }

    this.setState({
      isWorking: false,
    });
  }

  handleFacebookReady = (facebook) => {
    this.setState({ facebook });

    const { onReady } = this.props;
    if (onReady) {
      onReady(facebook);
    }
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

  render() {
    return (
      <InitFacebook onReady={this.handleFacebookReady}>
        {this.getElement()}
      </InitFacebook>
    );
  }
}
