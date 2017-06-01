import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import ColorScheme from './constants/ColorScheme';
import CommentsOrderBy from './constants/CommentsOrderBy';

export default function Comments(props) {
  const {
    className,
    colorScheme,
    href = getCurrentHref(),
    numPosts,
    orderBy,
    width,
    children,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-comments"
        data-colorscheme={colorScheme}
        data-numposts={numPosts}
        data-href={href}
        data-order-by={orderBy}
        data-width={width}
        data-skin={colorScheme}
      >
        {children}
      </div>
    </Parser>
  );
}

Comments.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  numPosts: PropTypes.number.isRequired,
  orderBy: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  colorScheme: PropTypes.string.isRequired,
  children: PropTypes.node,
  onParse: PropTypes.func,
};

Comments.defaultProps = {
  numPosts: 10,
  orderBy: CommentsOrderBy.SOCIAL,
  width: 550,
  colorScheme: ColorScheme.LIGHT,
  children: undefined,
  className: undefined,
  href: undefined,
  onParse: undefined,
};
