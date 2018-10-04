// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';

type Props = ParserProps & {
  className?: string,
  href: string,
  width?: number | string,
  showText?: boolean,
  allowFullScreen?: boolean,
  autoPlay?: boolean,
  showCaptions?: boolean,
  children?: Node,
  onParse?: Function,
};

export default function EmbeddedVideo(props: Props): Node {
  const {
    href,
    width,
    showText,
    allowFullScreen,
    autoPlay,
    showCaptions,
    children,
    ...rest
  } = props;

  return (
    <Parser {...rest}>
      <div
        className="fb-video"
        data-href={href}
        data-width={width}
        data-show-text={showText}
        data-show-captions={showCaptions}
        data-autoplay={autoPlay}
        data-allowfullscreen={allowFullScreen}
      >
        {children}
      </div>
    </Parser>
  );
}

EmbeddedVideo.defaultProps = {
  ...Parser.defaultProps,
  width: undefined,
  showText: undefined,
  allowFullScreen: undefined,
  autoPlay: undefined,
  showCaptions: undefined,
  children: undefined,
};
