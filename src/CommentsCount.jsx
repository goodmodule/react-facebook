// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = ParserProps & {
  href?: string,
  children?: Node,
};

export default function CommentsCount(props: Props) {
  const {
    href = getCurrentHref(),
    children,
    ...rest
  } = props;

  return (
    <Parser {...rest}>
      <span
        className="fb-comments-count"
        data-href={href}
      >
        {children}
      </span>
    </Parser>
  );
}

CommentsCount.defaultProps = {
  ...Parser.defaultProps,
  href: undefined,
  children: undefined,
};
