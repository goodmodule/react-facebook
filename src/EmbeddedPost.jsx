import React, { Component, PropTypes } from 'react';
import Facebook from './FacebookProvider';

export default class EmbeddedPost extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    showText: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static contextTypes = Facebook.childContextTypes;

  static defaultProps = {
    href: 'http://www.facebook.com',
    width: 500, // 350 - 750
    showText: false,
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
    const { href, width, showText, className, children } = this.props;

    return (
      <div className={className} ref="container">
        <div
          className="fb-post"
          data-href={href}
          data-width={width}
          data-show-text={showText}
        >
          {children}
        </div>
      </div>
    );
  }
}
