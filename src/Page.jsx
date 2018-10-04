// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = ParserProps & {
  className?: string,
  href?: string,
  tabs?: string,
  hideCover?: boolean,
  height?: number | string,
  width?: number | string,
  showFacepile?: boolean,
  hideCTA?: boolean,
  smallHeader?: boolean,
  adaptContainerWidth?: boolean,
  children?: Node,
  onParse?: Function,
  style?: Object,
};

export default function Page(props: Props) {
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
    ...rest
  } = props;

  return (
    <Parser {...rest}>
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
      >
        {children}
      </div>
    </Parser>
  );
}

Page.defaultProps = {
  ...Parser.defaultProps,
  width: undefined,
  height: undefined,
  tabs: undefined,
  hideCover: undefined,
  showFacepile: undefined,
  hideCTA: undefined,
  smallHeader: undefined,
  adaptContainerWidth: undefined,
  children: undefined,
  style: undefined,
  href: undefined,
};
