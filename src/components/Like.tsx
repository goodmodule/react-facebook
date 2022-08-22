import { type ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type LikeProps = {
  referral?: string;
  href?: string;
  layout?: string;
  showFaces?: boolean;
  colorScheme?: string;
  action?: string;
  share?: boolean;
  children?: ReactNode;
  width?: number | string;
  size?: string;
  kidDirectedSite?: boolean;
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
    ...rest
  } = props;

  console.log('RENDERING like');

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
