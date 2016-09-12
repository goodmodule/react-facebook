import React, { PropTypes } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default class Comments extends Parser {
  static contextTypes = {
    ...Parser.contextTypes,
  };

  static propTypes = {
    ...Parser.propTypes,
    href: PropTypes.string,
    numPosts: PropTypes.number.isRequired,
    orderBy: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    ]),
    colorScheme: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    numPosts: 10,
    orderBy: 'social', // "social", "reverse_time", or "time"
    width: 550,
    colorScheme: 'light',
  };

  renderComponent() {
    const {
      colorScheme,
      href = getCurrentHref(),
      numPosts,
      orderBy,
      width,
      children,
    } = this.props;

    return (
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
    );
  }
}
