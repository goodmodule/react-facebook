import React, { ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

// https://developers.facebook.com/docs/messenger-platform/reference/web-plugins#customer_chat
export type CustomChatProps = {
  pageId: string;
  children?: ReactNode;
  themeColor?: string;
  loggedInGreeting?: string;
  loggedOutGreeting?: string;
  dataRef?: string;
  greetingDialogDisplay?: 'show' | 'fade' | 'hide',
  greetingDialogDelay?: string,
  minimized?: boolean,
};

function CustomChat(props: CustomChatProps, ref: any) {
  const {
    children,
    pageId,
    themeColor,
    loggedInGreeting,
    loggedOutGreeting,
    dataRef,
    greetingDialogDisplay,
    greetingDialogDelay,
    minimized,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-customerchat"
        // @ts-ignore
        page_id={pageId}
        theme_color={themeColor}
        logged_in_greeting={loggedInGreeting}
        logged_out_greeting={loggedOutGreeting}
        greeting_dialog_display={greetingDialogDisplay}
        greeting_dialog_delay={greetingDialogDelay}
        data-ref={dataRef}
        minimized={minimized}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(CustomChat));
