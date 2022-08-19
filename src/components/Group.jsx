// @flow
import React, { forwardRef, PureComponent, type Node } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

type Props = {
  href?: string,
  skin?: string,
  showSocialContext?: boolean,
  showMetaData?: boolean,
  width?: number | string,
  children?: Node,
  style?: Object,
  handleParse: Function,
};

class Group extends PureComponent<Props> {
  static defaultProps = {
    showSocialContext: undefined,
    showMetaData: undefined,
    width: undefined,
    children: undefined,
    style: undefined,
    href: undefined,
    skin: undefined,
  };

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      style,
      href = getCurrentHref(),
      width,
      showSocialContext,
      showMetaData,
      children,
      skin,
    } = this.props;

    return (
      <div
        className="fb-group"
        style={style}
        data-href={href}
        data-width={width}
        data-show-social-context={showSocialContext}
        data-show-metadata={showMetaData}
        data-skin={skin}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <Group
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
