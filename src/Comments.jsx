// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = ParserProps & {
  href?: string,
  numPosts?: number,
  orderBy?: string,
  width?: number | string,
  colorScheme?: string,
  children?: Node,
  mobile?: boolean,
};

export default function Comments(props: Props) {
  const {
    colorScheme,
    href = getCurrentHref(),
    numPosts,
    orderBy,
    width,
    children,
    mobile,
    ...rest
  } = props;

  return (
    <Parser {...rest}>
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
  ...Parser.defaultProps,
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  mobile: undefined,
};
