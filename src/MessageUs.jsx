// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';

type Props = ParserProps & {
  messengerAppId: string,
  pageId: string,
  color?: string,
  children?: Node,
  size?: string,
};

export default function MessageUs(props: Props) {
  const {
    color,
    messengerAppId,
    pageId,
    children,
    size,
    ...rest
  } = props;

  return (
    <Parser {...rest}>
      <div
        className="fb-messengermessageus"
        messenger_app_id={messengerAppId}
        page_id={pageId}
        color={color}
        size={size}
      >
        {children}
      </div>
    </Parser>
  );
}

MessageUs.defaultProps = {
  ...Parser.defaultProps,
  color: undefined,
  size: undefined,
  children: undefined,
};
