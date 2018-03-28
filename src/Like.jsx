// @flow
import type { Node } from 'react';
import React from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import LikeSize from './constants/LikeSize';
import LikeLayout from './constants/LikeLayout';
import ColorScheme from './constants/ColorScheme';
import LikeAction from './constants/LikeAction';

type Props = {
  className?: string,
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
  onParse?: Function,
};

export default function Like(props: Props) {
  const {
    className,
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
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
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
  layout: LikeLayout.STANDARD,
  showFaces: false,
  colorScheme: ColorScheme.LIGHT,
  action: LikeAction.LIKE,
  share: false,
  size: LikeSize.SMALL,
  kidDirectedSite: false,
  children: undefined,
  className: undefined,
  href: undefined,
  referral: undefined,
  width: undefined,
  onParse: undefined,
};
