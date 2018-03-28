// @flow
import React from 'react';
import type { Node } from 'react';
import Parser from './Parser';

type Props = {
  className?: string,
  messengerAppId: string,
  pageId: string,
  color?: string,
  children?: Node,
  size?: string,
  onParse?: Function,
};

export default function MessageUs(props: Props) {
  const {
    className,
    color,
    messengerAppId,
    pageId,
    children,
    size,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-messengermessageus"
        messenger_app_id={messengerAppId}
        page_id={pageId}
        color={color}
        size={size}
      >
        {children}
      </div>
    </Parser>
  );
}

MessageUs.defaultProps = {
  color: undefined,
  size: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined,
};
