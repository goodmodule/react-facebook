import React, { type ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

export type MessageUsProps = {
  messengerAppId: string;
  pageId: string;
  color?: string;
  children?: ReactNode;
  size?: string;
};

function MessageUs(props: MessageUsProps, ref: any) {
  const {
    color,
    messengerAppId,
    pageId,
    children,
    size,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-messengermessageus"
        messenger_app_id={messengerAppId}
        page_id={pageId}
        data-color={color}
        data-size={size}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(MessageUs));
