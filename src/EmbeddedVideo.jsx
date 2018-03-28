// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';

type Props = {
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
    className,
    href,
    width,
    showText,
    allowFullScreen,
    autoPlay,
    showCaptions,
    children,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
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
  width: undefined,
  showText: undefined,
  allowFullScreen: undefined,
  autoPlay: undefined,
  showCaptions: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
};
