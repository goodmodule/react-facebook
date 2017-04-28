import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';

export default function EmbeddedPost(props) {
  const {
    className,
    href,
    width,
    showText,
    children,
  } = props;

  return (
    <Parser className={className}>
      <div
        className="fb-post"
        data-href={href}
        data-width={width}
        data-show-text={showText}
      >
        {children}
      </div>
    </Parser>
  );
}

EmbeddedPost.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  showText: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

EmbeddedPost.defaultProps = {
  href: 'http://www.facebook.com',
  width: 500, // 350 - 750
  showText: false,
  children: undefined,
  className: undefined,
};
