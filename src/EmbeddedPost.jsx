import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';

export default class EmbeddedPost extends Parser {
  static propTypes = {
    href: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
    showText: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    href: 'http://www.facebook.com',
    width: 500, // 350 - 750
    showText: false,
  };

  renderComponent() {
    const { href, width, showText, children } = this.props;

    return (
      <div
        className="fb-post"
        data-href={href}
        data-width={width}
        data-show-text={showText}
      >
        {children}
      </div>
    );
  }
}
