// @flow
import React, { type Node, PureComponent, forwardRef } from 'react';
import Parser from './Parser';

type Props = {
  href: string,
  width?: number | string,
  showText?: boolean,
  allowFullScreen?: boolean,
  autoPlay?: boolean,
  showCaptions?: boolean,
  children?: Node,
  handleParse: Function,
};

class EmbeddedVideo extends PureComponent<Props> {
  static defaultProps = {
    width: undefined,
    showText: undefined,
    allowFullScreen: undefined,
    autoPlay: undefined,
    showCaptions: undefined,
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
      allowFullScreen,
      autoPlay,
      showCaptions,
      children,
    } = this.props;

    return (
      <div
        className="fb-video"
        data-href={href}
        data-width={width}
        data-show-text={showText}
        data-show-captions={showCaptions}
        data-autoplay={autoPlay}
        data-allowfullscreen={allowFullScreen}
      >
        {children}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Parser>
    {({ handleParse }) => (
      <EmbeddedVideo
        {...props}
        handleParse={handleParse}
        ref={ref}
      />
    )}
  </Parser>
));
