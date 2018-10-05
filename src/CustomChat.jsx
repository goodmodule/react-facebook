// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';

type Props = {
  pageId: string,
  minimized?: boolean,
  children?: Node,
  themeColor?: string,
  loggedInGreeting?: string,
  loggedOutGreeting?: string,
  dataRef?: string,
  handleParse: Function,
};

class CustomChat extends PureComponent<Props> {
  static defaultProps = {
    minimized: undefined,
    children: undefined,
    themeColor: undefined,
    loggedInGreeting: undefined,
    loggedOutGreeting: undefined,
    dataRef: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      minimized,
      children,
      pageId,
      themeColor,
      loggedInGreeting,
      loggedOutGreeting,
      dataRef,
    } = this.props;

    return (
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
