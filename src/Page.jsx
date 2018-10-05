// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = {
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
  style?: Object,
  handleParse: Function,
};

class Page extends PureComponent<Props> {
  static defaultProps = {
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

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
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
    } = this.props;

    return (
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
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <Page
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
