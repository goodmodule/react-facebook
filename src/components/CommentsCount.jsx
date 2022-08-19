// @flow
import React, { type Node, forwardRef, PureComponent } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = {
  href?: string,
  children?: Node,
  handleParse: Function,
};

class CommentsCount extends PureComponent<Props> {
  static defaultProps = {
    href: undefined,
    children: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      href = getCurrentHref(),
      children,
    } = this.props;

    return (
      <span
        className="fb-comments-count"
        data-href={href}
      >
        {children}
      </span>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <CommentsCount
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
