import React, { ReactNode, forwardRef, memo } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type ShareProps = {
  href?: string;
  lazy?: boolean;
  size?: 'small' | 'large';
  layout?: 'box_count' | 'button_count' | 'button' | 'icon_link';
  children?: ReactNode;
  style?: Object;
};

function Share(props: ShareProps, ref: any) {
  const {
    style,
    href = getCurrentHref(),
    lazy,
    layout,
    size,
    children,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-share-button"
        style={style}
        data-href={href}
        data-lazy={lazy}
        data-size={size}
        data-layout={layout}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(Share));
