import React, { ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

export type MessengerCheckboxProps = {
  messengerAppId: string;
  pageId: string;
  userRef?: string;
  origin?: string;
  children?: ReactNode;
  size?: string;
  prechecked?: boolean;
  allowLogin?: boolean;
  centerAlign?: boolean;
  skin?: string;
};

function MessengerCheckbox(props: MessengerCheckboxProps, ref: any) {
  const {
    origin,
    prechecked,
    allowLogin,
    userRef,
    messengerAppId,
    pageId,
    children,
    size,
    centerAlign,
    skin,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-messenger-checkbox"
        // @ts-ignore
        messenger_app_id={messengerAppId}
        page_id={pageId}
        size={size}
        origin={origin}
        user_ref={userRef}
        prechecked={prechecked}
        allow_login={allowLogin}
        skin={skin}
        center_align={centerAlign}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(MessengerCheckbox));
