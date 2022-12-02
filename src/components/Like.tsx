import React, { memo, forwardRef } from 'react';
import type { ReactNode } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type LikeProps = {
  referral?: string;
  href?: string;
  layout?: 'standard' | 'button_count' | 'button' | 'box_count';
  showFaces?: boolean;
  colorScheme?: string;
  action?: string;
  share?: boolean;
  children?: ReactNode;
  width?: number | string;
  size?: string;
  kidDirectedSite?: boolean;
  lazy?: boolean;
};

function Like(props: LikeProps, ref: any) {
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
    lazy,
    ...rest
  } = props;

  return (
    <Parser>
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
        data-lazy={lazy}
        data-kid-directed-site={kidDirectedSite}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(Like));
