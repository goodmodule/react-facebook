import React, { Component, PropTypes } from 'react';
import FacebookProvider from './FacebookProvider';
import canUseDOM from 'can-use-dom';

export default class Parser extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static contextTypes = {
    ...FacebookProvider.childContextTypes,
  };

  componentDidMount() {
    if (!canUseDOM) {
      return;
    }

    this.context.facebook.whenReady((err, facebook) => {
      if (err) {
        return;
      }

      facebook.parse(this.refs.container, () => {});
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className} ref="container">
        {this.renderComponent()}
      </div>
    );
  }
}
