import React, { type ReactNode } from 'react';
import useFacebook from '../hooks/useFacebook';

export type ParserProps = {
  children: ReactNode;
};

export default function Parser(props: ParserProps) {
  const { children, ...rest } = props;
  const { parse } = useFacebook();

  function handleRef(element: HTMLDivElement) {
    if (element) {
      parse(element);
    }
  }

  return (
    <div {...rest} ref={handleRef}>
      {children}
    </div>
  );
}
