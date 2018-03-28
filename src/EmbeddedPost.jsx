// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';

type Props = {
  className?: string,
  href: string,
  width?: string | number,
  showText?: boolean,
  children?: Node,
  onParse?: Function,
};

export default function EmbeddedPost(props: Props) {
  const {
    className,
    href,
    width,
    showText,
    children,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
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

EmbeddedPost.defaultProps = {
  width: undefined,
  showText: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
};
