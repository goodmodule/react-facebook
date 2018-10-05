// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';

type Props = {
  href: string,
  width?: string | number,
  showText?: boolean,
  children?: Node,
  handleParse: Function,
};

class EmbeddedPost extends PureComponent<Props> {
  static defaultProps = {
    width: undefined,
    showText: undefined,
    children: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      href,
      width,
      showText,
      children,
    } = this.props;

    return (
      <div
        className="fb-post"
        data-href={href}
        data-width={width}
        data-show-text={showText}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <EmbeddedPost
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
