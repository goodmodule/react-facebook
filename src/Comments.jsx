// @flow
import React, { forwardRef, PureComponent, type Node } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = {
  href?: string,
  numPosts?: number,
  orderBy?: string,
  width?: number | string,
  colorScheme?: string,
  children?: Node,
  mobile?: boolean,
  handleParse: Function,
};

class Comments extends PureComponent<Props> {
  static defaultProps = {
    href: undefined,
    numPosts: undefined,
    orderBy: undefined,
    width: undefined,
    colorScheme: undefined,
    children: undefined,
    mobile: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      colorScheme,
      href = getCurrentHref(),
      numPosts,
      orderBy,
      width,
      children,
      mobile,
    } = this.props;

    return (
      <div
        className="fb-comments"
        data-colorscheme={colorScheme}
        data-numposts={numPosts}
        data-href={href}
        data-order-by={orderBy}
        data-width={width}
        data-skin={colorScheme}
        data-mobile={mobile}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <Comments
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
