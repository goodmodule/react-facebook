import React, { useState, memo, forwardRef, ReactNode, useEffect, useCallback } from 'react';
import useFacebook from '../hooks/useFacebook';

export type ParserProps = {
  children: ReactNode;
  inline?: boolean;
};

type ParserInternalProps = {
  children: ReactNode;
  inline?: boolean;
};

const ParserInternal = memo(forwardRef((props: ParserInternalProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { inline, children, ...rest } = props;
  const Tag = inline ? 'span' : 'div';

  return (
    // @ts-ignore
    <Tag {...rest} ref={ref}>
      {children}
    </Tag>
  );
}));

function Parser(props: ParserProps) {
  const { children, inline, ...rest } = props;
  const { parse } = useFacebook();
  const [element, setElement] = useState<HTMLDivElement | HTMLSpanElement | null>(null);

  const handleRef = useCallback((element: HTMLDivElement | HTMLSpanElement | null) => {
    setElement(element);
  }, []);

  useEffect(() => {
    if (element) {
      parse(element);
    }
  }, [element]);

  return (
    <ParserInternal inline={inline} {...rest} ref={handleRef}>
      {children}
    </ParserInternal>
  );
}

export default memo(Parser);