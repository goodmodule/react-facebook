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
  children?: Node,
  size?: string,
  onParse?: Function,
};

export default function MessageUs(props: Props) {
  const {
    className,
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
        className="fb-messengermessageus"
        messenger_app_id={appId}
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
  color: MessengerColor.BLUE,
  size: MessengerSize.STANDARD,
  children: undefined,
  className: undefined,
  onParse: undefined,
};
