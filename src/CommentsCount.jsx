// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = {
  className?: string,
  href?: string,
  children?: Node,
  onParse?: Function,
};

export default function CommentsCount(props: Props) {
  const {
    className,
    href = getCurrentHref(),
    children,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
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
  className: undefined,
  href: undefined,
  children: undefined,
  onParse: undefined,
};
