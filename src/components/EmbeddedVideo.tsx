import React, { ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

export type EmbeddedVideoProps = {
  href: string;
  width?: number | string;
  showText?: boolean;
  allowFullScreen?: boolean;
  autoPlay?: boolean;
  showCaptions?: boolean;
  lazy?: boolean;
  children?: ReactNode;
};

function EmbeddedVideo(props: EmbeddedVideoProps, ref: any) {
  const {
    href,
    width,
    showText,
    allowFullScreen,
    autoPlay,
    lazy,
    showCaptions,
    children,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-video"
        data-href={href}
        data-width={width}
        data-show-text={showText}
        data-show-captions={showCaptions}
        data-autoplay={autoPlay}
        data-lazy={lazy}
        data-allowfullscreen={allowFullScreen}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(EmbeddedVideo));
