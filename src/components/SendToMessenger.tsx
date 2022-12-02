import React, { type ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

// https://developers.facebook.com/docs/messenger-platform/reference/web-plugins#send_to_messenger
export type SendToMessengerProps = {
  messengerAppId: string;
  pageId: string;
  color?: 'blue' | 'white';
  children?: ReactNode;
  dataRef?: string;
  size?: 'standard' | 'large' | 'xlarge';
  enforceLogin?: boolean;
  ctaText?: 
    | 'GET_THIS_IN_MESSENGER'
    | 'RECEIVE_THIS_IN_MESSENGER'
    | 'SEND_THIS_TO_ME'
    | 'GET_CUSTOMER_ASSISTANCE'
    | 'GET_CUSTOMER_SERVICE'
    | 'GET_SUPPORT'
    | 'LET_US_CHAT'
    | 'SEND_ME_MESSAGES'
    | 'ALERT_ME_IN_MESSENGER'
    | 'SEND_ME_UPDATES'
    | 'MESSAGE_ME'
    | 'LET_ME_KNOW'
    | 'KEEP_ME_UPDATED'
    | 'TELL_ME_MORE'
    | 'SUBSCRIBE_IN_MESSENGER'
    | 'SUBSCRIBE_TO_UPDATES'
    | 'GET_MESSAGES'
    | 'SUBSCRIBE'
    | 'GET_STARTED_IN_MESSENGER'
    | 'LEARN_MORE_IN_MESSENGER'
    | 'GET_STARTED';
};

function SendToMessenger(props: SendToMessengerProps, ref: any) {
  const {
    color,
    messengerAppId,
    pageId,
    children,
    dataRef,
    size,
    enforceLogin,
    ctaText,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-send-to-messenger"
        // @ts-ignore
        messenger_app_id={messengerAppId}
        page_id={pageId}
        data-color={color}
        data-size={size}
        data-ref={dataRef}
        enforce_login={enforceLogin}
        cta_text={ctaText}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(SendToMessenger));
