// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';

type Props = {
  messengerAppId: string,
  pageId: string,
  color?: string,
  children?: Node,
  size?: string,
  handleParse: Function,
};

class MessageUs extends PureComponent<Props> {
  static defaultProps = {
    color: undefined,
    size: undefined,
    children: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      color,
      messengerAppId,
      pageId,
      children,
      size,
    } = this.props;

    return (
      <div
        className="fb-messengermessageus"
        messenger_app_id={messengerAppId}
        page_id={pageId}
        data-color={color}
        data-size={size}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <MessageUs
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
