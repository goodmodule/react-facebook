import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default function CommentsCount(props) {
  const {
    className,
    href = getCurrentHref(),
    children,
  } = props;

  return (
    <Parser className={className}>
      <span
        className="fb-comments-count"
        data-href={href}
      >
        {children}
      </span>
    </Parser>
  );
}

CommentsCount.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

CommentsCount.defaultProps = {
  className: undefined,
  href: undefined,
  children: undefined,
};
