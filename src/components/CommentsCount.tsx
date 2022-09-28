import React, { ReactNode, forwardRef, memo } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

type CommentsCountProps = {
  href?: string;
  children?: ReactNode;
};

function CommentsCount(props: CommentsCountProps, ref: any) {
  const {
    href = getCurrentHref(),
    children,
    ...rest
  } = props;

  return (
    <Parser inline>
      <span
        className="fb-comments-count"
        data-href={href}
        {...rest}
        ref={ref}
      >
        {children}
      </span>
    </Parser>
  );
}

export default memo(forwardRef(CommentsCount));
