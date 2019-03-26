// @flow
import React, { forwardRef, Component } from 'react';
import FacebookContext from './FacebookContext';

type Props = {
  children: Function,
  onReady?: Function,
  handleInit: Function,
  isReady: boolean,
  api?: Object,
};

class Initialize extends Component<Props> {
  static defaultProps = {
    onReady: undefined,
    api: undefined,
  };

  componentDidMount() {
    this.$isMounted = true;
    this.prepare();
  }

  componentWillUnmount() {
    this.$isMounted = false;
  }

  async prepare() {
    const { onReady, handleInit } = this.props;
    const api = await handleInit();
    if (onReady && this.$isMounted) {
      onReady(api);
    }
  }

  render() {
    const { children, isReady, api } = this.props;

    const childrenProps = {
      isReady,
      api,
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  }
}

export default forwardRef((props, ref) => (
  <FacebookContext.Consumer>
    {({ handleInit, isReady, api }) => (
      <Initialize
        {...props}
        handleInit={handleInit}
        isReady={isReady}
        api={api}
        ref={ref}
      />
    )}
  </FacebookContext.Consumer>
));
