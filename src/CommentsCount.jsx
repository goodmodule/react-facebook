import React, { Component, PropTypes } from 'react';
import FacebookProvider from './FacebookProvider';

export default class Comments extends Component {
  static contextTypes = {
    ...FacebookProvider.childContextTypes,
  };

  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    href: 'http://www.facebook.com',
  };

  componentDidMount() {
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
    const { href, children } = this.props;

    return (
      <span
        ref="container"
      >
        <span
          className="fb-comments-count"
          data-href={href}
        >
          {children}
        </span>
      </span>
    );
  }
}
