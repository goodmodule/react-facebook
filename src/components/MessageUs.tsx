import React, { ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

// https://developers.facebook.com/docs/messenger-platform/reference/web-plugins#message_us
export type MessageUsProps = {
  messengerAppId: string;
  pageId: string;
  color?: 'blue' | 'white';
  children?: ReactNode;
  size?: 'standard' | 'large' | 'xlarge';
  dataRef?: string;
};

function MessageUs(props: MessageUsProps, ref: any) {
  const {
    color,
    messengerAppId,
    pageId,
    children,
    size,
    dataRef,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-messengermessageus"
        // @ts-ignore
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

export default memo(forwardRef(MessageUs));
