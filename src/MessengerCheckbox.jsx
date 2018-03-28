// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';
import MessengerSize from './constants/MessengerSize';
import MessengerColor from './constants/MessengerColor';

type Props = {
  className?: string,
  appId: string,
  pageId: string,
  color?: string,
  userRef?: string,
  origin?: string,
  children?: Node,
  size?: string,
  prechecked?: boolean,
  allowLogin?: boolean,
  onParse?: Function,
};

export default function MessengerCheckbox(props: Props) {
  const {
    className,
    origin,
    prechecked,
    allowLogin,
    userRef,
    color,
    appId,
    pageId,
    children,
    size,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-messenger-checkbox"
        messenger_app_id={appId}
        page_id={pageId}
        data-color={color}
        data-size={size}
        data-origin={origin}
        user_ref={userRef}
        prechecked={prechecked}
        allow_login={allowLogin}
      >
        {children}
      </div>
    </Parser>
  );
}

MessengerCheckbox.defaultProps = {
  color: MessengerColor.BLUE,
  size: MessengerSize.STANDARD,
  allowLogin: true,
  prechecked: false,
  userRef: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
  origin: undefined,
};
