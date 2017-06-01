import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InitFacebook from './InitFacebook';

export default class Parser extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onParse: PropTypes.func,
  };

  static defaultProps = {
    className: undefined,
    onParse: undefined,
  };

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(props) {
    const oldChildren = this.props.children;
    const { children } = props;

    if (!children || !oldChildren) {
      return;
    }

    const changed = Object.keys(oldChildren.props).find((propName) => {
      const oldValue = oldChildren.props[propName];
      const newValue = children.props[propName];

      return oldValue !== newValue;
    });

    if (changed) {
      this.rerender();
    }
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

    const parseResponse = facebook.parse(container);

    const { onParse } = this.props;
    if (onParse) {
      onParse(parseResponse);
    }

    return parseResponse;
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
