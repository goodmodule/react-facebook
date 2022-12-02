import React, { ReactNode, forwardRef, memo } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type SaveProps = {
  uri?: string;
  lazy?: boolean;
  children?: ReactNode;
  style?: Object;
};

function Save(props: SaveProps, ref: any) {
  const {
    style,
    uri = getCurrentHref(),
    lazy,
    children,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-save"
        style={style}
        data-uri={uri}
        data-lazy={lazy}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(Save));
