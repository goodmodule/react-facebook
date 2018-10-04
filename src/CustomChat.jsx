// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';

type Props = ParserProps & {
  pageId: string,
  minimized?: boolean,
  children?: Node,
  themeColor?: string,
  loggedInGreeting?: string,
  loggedOutGreeting?: string,
  dataRef?: string,
};

export default function CustomChat(props: Props) {
  const {
    minimized,
    children,
    pageId,
    themeColor,
    loggedInGreeting,
    loggedOutGreeting,
    dataRef,
    ...rest
  } = props;

  return (
    <Parser {...rest}>
      <div
        className="fb-customerchat"
        page_id={pageId}
        minimized={minimized}
        theme_color={themeColor}
        logged_in_greeting={loggedInGreeting}
        logged_out_greeting={loggedOutGreeting}
        data-ref={dataRef}
      >
        {children}
      </div>
    </Parser>
  );
}

CustomChat.defaultProps = {
  ...Parser.defaultProps,
  minimized: undefined,
  children: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
};
