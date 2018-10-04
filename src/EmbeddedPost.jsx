// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';

type Props = ParserProps & {
  href: string,
  width?: string | number,
  showText?: boolean,
  children?: Node,
};

export default function EmbeddedPost(props: Props) {
  const {
    href,
    width,
    showText,
    children,
    ...rest
  } = props;

  return (
    <Parser {...rest}>
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
  ...Parser.defaultProps,
  width: undefined,
  showText: undefined,
  children: undefined,
};
