import React, { Component, PropTypes } from 'react';
import FacebookProvider from './FacebookProvider';

export default class Comments extends Component {
  static contextTypes = {
    ...FacebookProvider.childContextTypes,
  };

  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    numPosts: PropTypes.number.isRequired,
    orderBy: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    colorScheme: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    href: 'http://www.facebook.com',
    numPosts: 10,
    orderBy: 'social', // "social", "reverse_time", or "time"
    width: 550,
    colorScheme: 'light',
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
    const { className, colorScheme, href, numPosts, orderBy, width, children } = this.props;

    return (
      <div ref="container" className={className}>
        <div
          className="fb-comments"
          data-colorscheme={colorScheme}
          data-numposts={numPosts}
          data-href={href}
          data-order-by={orderBy}
          data-width={width}
        >
          {children}
        </div>
      </div>
    );
  }
}
