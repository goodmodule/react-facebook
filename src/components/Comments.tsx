import React, { forwardRef, memo, ReactNode } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type CommentsProps = {
  href?: string;
  numPosts?: number;
  orderBy?: 'reverse_time' | 'time';
  width?: number | string;
  colorScheme?: 'light' | 'dark';
  children?: ReactNode;
  mobile?: boolean;
  lazy?: boolean;
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
    lazy,
    ...rest
  } = props;

  const data = []
    return (
      <Parser>
       <h1>THis is a test component</h1>
       {data.map((d) => {
        return (
          <h1>
            <span>
              {d.someId}
            </span>
          </h1>
        )
       })}
    </Parser>
  );
}

export default memo(forwardRef(Comments));
