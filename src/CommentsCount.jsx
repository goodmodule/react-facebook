import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default class CommentsCount extends Parser {
  static propTypes = {
    ...Parser.propTypes,
    href: PropTypes.string,
    children: PropTypes.node,
  };

  renderComponent() {
    const { href = getCurrentHref(), children } = this.props;

    return (
      <span
        className="fb-comments-count"
        data-href={href}
      >
        {children}
      </span>
    );
  }
}
