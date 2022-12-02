import React, { type ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type PageProps = {
  href?: string;
  tabs?: string;
  hideCover?: boolean;
  height?: number | string;
  width?: number | string;
  showFacepile?: boolean;
  hideCTA?: boolean;
  smallHeader?: boolean;
  adaptContainerWidth?: boolean;
  lazy?: boolean;
  children?: ReactNode;
  style?: Object;
};

function Page(props: PageProps, ref: any) {
  const {
    style,
    href = getCurrentHref(),
    tabs,
    hideCover,
    width,
    height,
    showFacepile,
    hideCTA,
    smallHeader,
    adaptContainerWidth,
    children,
    lazy,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-page"
        style={style}
        data-tabs={tabs}
        data-hide-cover={hideCover}
        data-show-facepile={showFacepile}
        data-hide-cta={hideCTA}
        data-href={href}
        data-small-header={smallHeader}
        data-adapt-container-width={adaptContainerWidth}
        data-height={height}
        data-width={width}
        data-lazy={lazy}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(Page));
