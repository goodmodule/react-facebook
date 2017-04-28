import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import InitFacebook from './InitFacebook';

export default class Process extends Component {
  static propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
    component: PropTypes.node,
    onResponse: PropTypes.func,
  };

  static defaultProps = {
    children: undefined,
    render: undefined,
    component: undefined,
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

      this.setState({
        isWorking: false,
      });

      return response;
    } catch (e) {
      this.setState({
        isWorking: false,
      });

      throw e;
    }
  }

  handleFacebookReady = (facebook) => {
    this.setState({ facebook });
  }

  getElement() {
    const {
      children,
      render,
      component: CustomComponent,
    } = this.props;

    const { facebook, isWorking } = this.state;
    const isLoading = !facebook;

    if (render) {
      return render({
        isWorking,
        isLoading,
        onClick: this.handleClick,
      });
    }

    if (CustomComponent) {
      return (
        <CustomComponent
          onClick={this.handleClick}
          isLoading={isLoading}
          isWorking={isWorking}
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
