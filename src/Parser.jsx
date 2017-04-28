import React, { Component } from 'react';
import PropTypes from 'prop-types';
import canUseDOM from 'can-use-dom';
import FacebookProvider from './FacebookProvider';

export default class Parser extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  static contextTypes = {
    ...FacebookProvider.childContextTypes,
  };

  componentDidMount() {
    if (canUseDOM) {
      this.initFacebook();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  async initFacebook() {
    const facebook = await this.context.facebook.init();
    facebook.parse(this.container);
  }

  handleContainer = (container) => {
    this.container = container;
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className} ref={this.handleContainer}>
        {this.renderComponent()}
      </div>
    );
  }
}
