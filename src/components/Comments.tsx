import React, { forwardRef, memo, ReactNode } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type CommentsProps = {
  href?: string;
  numPosts?: number;
  orderBy?: 'reverse_time' | 'time';
  width?: number | string;
  colorScheme?: 'light' | 'dark';
  children?: ReactNode;
  mobile?: boolean;
  lazy?: boolean;
};

function Comments(props: CommentsProps, ref: any) {
  const {
    colorScheme,
    href = getCurrentHref(),
    numPosts,
    orderBy,
    width,
    children,
    mobile,
    lazy,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-comments"
        data-colorscheme={colorScheme}
        data-numposts={numPosts}
        data-href={href}
        data-order-by={orderBy}
        data-width={width}
        data-skin={colorScheme}
        data-mobile={mobile}
        data-lazy={lazy}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(Comments));
