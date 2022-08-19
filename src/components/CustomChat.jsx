// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';

type Props = {
  pageId: string,
  children?: Node,
  themeColor?: string,
  loggedInGreeting?: string,
  loggedOutGreeting?: string,
  dataRef?: string,
  handleParse: Function,
  greetingDialogDisplay?: string,
  greetingDialogDelay?: string,
};

class CustomChat extends PureComponent<Props> {
  static defaultProps = {
    children: undefined,
    themeColor: undefined,
    loggedInGreeting: undefined,
    loggedOutGreeting: undefined,
    dataRef: undefined,
    greetingDialogDisplay: undefined,
    greetingDialogDelay: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      children,
      pageId,
      themeColor,
      loggedInGreeting,
      loggedOutGreeting,
      dataRef,
      greetingDialogDisplay,
      greetingDialogDelay,
    } = this.props;

    return (
      <div
        className="fb-customerchat"
        page_id={pageId}
        theme_color={themeColor}
        logged_in_greeting={loggedInGreeting}
        logged_out_greeting={loggedOutGreeting}
        greeting_dialog_display={greetingDialogDisplay}
        greeting_dialog_delay={greetingDialogDelay}
        data-ref={dataRef}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <CustomChat
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
