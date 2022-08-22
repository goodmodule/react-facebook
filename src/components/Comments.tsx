import { forwardRef, memo, type ReactNode } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type CommentsProps = {
  href?: string;
  numPosts?: number;
  orderBy?: string;
  width?: number | string;
  colorScheme?: string;
  children?: ReactNode;
  mobile?: boolean;
};

function Comments(props: CommentsProps, ref: any) {
  const {
    colorScheme,
    href = getCurrentHref(),
    numPosts,
    orderBy,
    width,
    children,
    mobile,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-comments"
        data-colorscheme={colorScheme}
        data-numposts={numPosts}
        data-href={href}
        data-order-by={orderBy}
        data-width={width}
        data-skin={colorScheme}
        data-mobile={mobile}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(Comments));
