import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InitFacebook from './InitFacebook';

export default class Parser extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    className: undefined,
    children: undefined,
  };

  shouldComponentUpdate() {
    return false;
  }

  handleFacebookReady = (facebook) => {
    facebook.parse(this.container);
  }

  handleContainer = (container) => {
    this.container = container;
  }

  render() {
    const { className, children } = this.props;

    return (
      <InitFacebook onReady={this.handleFacebookReady}>
        <div className={className} ref={this.handleContainer}>
          {children}
        </div>
      </InitFacebook>
    );
  }
}
