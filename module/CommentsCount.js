import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default function CommentsCount(props) {
  const {
    className,
    href = getCurrentHref(),
    children,
    onParse
  } = props;

  return React.createElement(
    Parser,
    { className: className, onParse: onParse },
    React.createElement(
      'span',
      {
        className: 'fb-comments-count',
        'data-href': href
      },
      children
    )
  );
}

CommentsCount.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  onParse: PropTypes.func
};

CommentsCount.defaultProps = {
  className: undefined,
  href: undefined,
  children: undefined,
  onParse: undefined
};
//# sourceMappingURL=CommentsCount.js.map