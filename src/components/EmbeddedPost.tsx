import { type ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

export type EmbeddedPostProps = {
  href: string;
  width?: string | number;
  showText?: boolean;
  children?: ReactNode;
};

function EmbeddedPost(props: EmbeddedPostProps, ref: any) {
  const {
    href,
    width,
    showText,
    children,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-post"
        data-href={href}
        data-width={width}
        data-show-text={showText}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(EmbeddedPost));
