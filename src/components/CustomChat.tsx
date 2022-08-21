import React, { type ReactNode, memo, forwardRef } from 'react';
import Parser from './Parser';

export type CustomChatProps = {
  pageId: string;
  children?: ReactNode;
  themeColor?: string;
  loggedInGreeting?: string;
  loggedOutGreeting?: string;
  dataRef?: string;
  greetingDialogDisplay?: string,
  greetingDialogDelay?: string,
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
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-customerchat"
        page_id={pageId}
        theme_color={themeColor}
        logged_in_greeting={loggedInGreeting}
        logged_out_greeting={loggedOutGreeting}
        greeting_dialog_display={greetingDialogDisplay}
        greeting_dialog_delay={greetingDialogDelay}
        data-ref={dataRef}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(CustomChat));
