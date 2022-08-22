import { type ReactNode, memo, forwardRef } from 'react';
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
        enforce_login={enforceLogin}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(SendToMessenger));
