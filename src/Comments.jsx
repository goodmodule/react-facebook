// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import ColorScheme from './constants/ColorScheme';
import CommentsOrderBy from './constants/CommentsOrderBy';

type Props = {
  className?: string,
  href?: string,
  numPosts?: number,
  orderBy?: string,
  width?: number | string,
  colorScheme?: string,
  children?: Node,
  onParse?: Function,
  mobile?: boolean,
};

export default function Comments(props: Props) {
  const {
    className,
    colorScheme,
    href = getCurrentHref(),
    numPosts,
    orderBy,
    width,
    children,
    onParse,
    mobile,
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
        data-mobile={mobile}
      >
        {children}
      </div>
    </Parser>
  );
}

Comments.defaultProps = {
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
  mobile: undefined,
};
