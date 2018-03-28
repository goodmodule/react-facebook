// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';

type Props = {
  className?: string,
  pageId: string,
  minimized?: boolean,
  onParse?: Function,
  children?: Node,
  themeColor?: string,
  loggedInGreeting?: string,
  loggedOutGreeting?: string,
};

export default function CustomChat(props: Props) {
  const {
    className,
    minimized,
    children,
    pageId,
    onParse,
    themeColor,
    loggedInGreeting,
    loggedOutGreeting,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-customerchat"
        page_id={pageId}
        minimized={minimized}
        theme_color={themeColor}
        logged_in_greeting={loggedInGreeting}
        logged_out_greeting={loggedOutGreeting}
      >
        {children}
      </div>
    </Parser>
  );
}

CustomChat.defaultProps = {
  minimized: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
};
