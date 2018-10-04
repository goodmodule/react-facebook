// @flow
import React, { type Node } from 'react';
import Parser, { type ParserProps } from './Parser';

type Props = ParserProps & {
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
    <Parser {...rest}>
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
  ...Parser.defaultProps,
  size: undefined,
  allowLogin: undefined,
  prechecked: undefined,
  userRef: undefined,
  children: undefined,
  origin: undefined,
  skin: undefined,
  centerAlign: undefined,
};
