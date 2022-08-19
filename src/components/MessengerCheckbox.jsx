// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';

type Props = {
  messengerAppId: string,
  pageId: string,
  userRef?: string,
  origin?: string,
  children?: Node,
  size?: string,
  prechecked?: boolean,
  allowLogin?: boolean,
  centerAlign?: boolean,
  skin?: string,
  handleParse: Function,
};

class MessengerCheckbox extends PureComponent<Props> {
  static defaultProps = {
    size: undefined,
    allowLogin: undefined,
    prechecked: undefined,
    userRef: undefined,
    children: undefined,
    origin: undefined,
    skin: undefined,
    centerAlign: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
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
    } = this.props;

    return (
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
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <MessengerCheckbox
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
