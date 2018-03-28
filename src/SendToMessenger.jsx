// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';
import MessengerSize from './constants/MessengerSize';
import MessengerColor from './constants/MessengerColor';

type Props = {
  className?: string,
  appId: string,
  pageId: string,
  color?: string,
  children?: Node,
  dataRef?: string,
  size?: string,
  onParse?: Function,
};

export default function SendToMessenger(props: Props) {
  const {
    className,
    color,
    messengerAppId,
    pageId,
    children,
    dataRef,
    size,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
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
  color: undefined,
  size: undefined,
  dataRef: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
};
