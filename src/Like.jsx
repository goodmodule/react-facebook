// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = ParserProps & {
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
};

export default function Like(props: Props) {
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
    ...rest
  } = props;

  return (
    <Parser {...rest}>
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
    </Parser>
  );
}

Like.defaultProps = {
  ...Parser.defaultProps,
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
