// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';

type Props = {
  className?: string,
  messengerAppId: string,
  pageId: string,
  userRef?: string,
  origin?: string,
  children?: Node,
  size?: string,
  prechecked?: boolean,
  allowLogin?: boolean,
  onParse?: Function,
  centerAlign?: boolean,
  skin?: string,
};

export default function MessengerCheckbox(props: Props) {
  const {
    className,
    origin,
    prechecked,
    allowLogin,
    userRef,
    messengerAppId,
    pageId,
    children,
    size,
    onParse,
    centerAlign,
    skin,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-messenger-checkbox"
        messenger_app_id={messengerAppId}
        page_id={pageId}
        size={size}
        origin={origin}
        user_ref={userRef}
        prechecked={prechecked}
        allow_login={allowLogin}
        skin={skin}
        center_align={centerAlign}
      >
        {children}
      </div>
    </Parser>
  );
}

MessengerCheckbox.defaultProps = {
  size: undefined,
  allowLogin: undefined,
  prechecked: undefined,
  userRef: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
  origin: undefined,
  skin: undefined,
  centerAlign: undefined,
};
