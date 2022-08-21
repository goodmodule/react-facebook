import React, { type ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

export type SendToMessengerProps = {
  messengerAppId: string;
  pageId: string;
  color?: string;
  children?: ReactNode;
  dataRef?: string;
  size?: string;
};

function SendToMessenger(props: SendToMessengerProps, ref: any) {
  const {
    color,
    messengerAppId,
    pageId,
    children,
    dataRef,
    size,
    ...rest
  } = this.props;

  return (
    <Parser>
      <div
        className="fb-send-to-messenger"
        messenger_app_id={messengerAppId}
        page_id={pageId}
        data-color={color}
        data-size={size}
        data-ref={dataRef}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(SendToMessenger));
