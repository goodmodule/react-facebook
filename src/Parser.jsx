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

  rerender() {
    this.forceUpdate();

    this.parsed = false;
    this.parse();
  }

  handleFacebookReady = (facebook) => {
    this.facebook = facebook;
    this.parse();
  }

  handleContainer = (container) => {
    this.container = container;
    this.parse();
  }

  parse() {
    const { parsed, container, facebook } = this;
    if (parsed || !container || !facebook) {
      return false;
    }

    this.parsed = true;

    return facebook.parse(container);
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
