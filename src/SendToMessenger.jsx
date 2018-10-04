// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';
import MessengerSize from './constants/MessengerSize';
import MessengerColor from './constants/MessengerColor';

type Props = ParserProps & {
  appId: string,
  pageId: string,
  color?: string,
  children?: Node,
  dataRef?: string,
  size?: string,
};

export default function SendToMessenger(props: Props) {
  const {
    color,
    messengerAppId,
    pageId,
    children,
    dataRef,
    size,
    ...rest
  } = props;

  return (
    <Parser {...rest}>
      <div
        className="fb-send-to-messenger"
        messenger_app_id={messengerAppId}
        page_id={pageId}
        data-color={color}
        data-size={size}
        data-ref={dataRef}
      >
        {children}
      </div>
    </Parser>
  );
}

SendToMessenger.defaultProps = {
  ...Parser.defaultProps,
  color: undefined,
  size: undefined,
  dataRef: undefined,
  children: undefined,
};
