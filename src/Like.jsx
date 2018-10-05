// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = {
  referral?: string,
  href?: string,
  layout?: string,
  showFaces?: boolean,
  colorScheme?: string,
  action?: string,
  share?: boolean,
  children?: Node,
  width?: number | string,
  size?: string,
  kidDirectedSite?: boolean,
  handleParse: Function,
};

class Like extends PureComponent<Props> {
  static defaultProps = {
    layout: undefined,
    showFaces: undefined,
    colorScheme: undefined,
    action: undefined,
    share: undefined,
    size: undefined,
    kidDirectedSite: undefined,
    children: undefined,
    href: undefined,
    referral: undefined,
    width: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      href = getCurrentHref(),
      layout,
      colorScheme,
      action,
      showFaces,
      share,
      children,
      width,
      size,
      kidDirectedSite,
      referral,
    } = this.props;

    return (
      <div
        className="fb-like"
        data-ref={referral}
        data-href={href}
        data-layout={layout}
        data-colorscheme={colorScheme}
        data-action={action}
        data-show-faces={showFaces}
        data-share={share}
        data-width={width}
        data-size={size}
        data-kid-directed-site={kidDirectedSite}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <Like
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
