import React, { Component, PropTypes } from 'react';
import Share from './Share';

export default class ShareButton extends Component {
  static propTypes = {
    ...Share.propTypes,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    icon: PropTypes.bool,

  };

  static defaultProps = {
    ...Share.defaultProps,
    className: 'btn btn-lg',
    iconClassName: 'fa fa-facebook pull-left',
    icon: true,
  };

  render() {
    const { className, iconClassName, icon, children } = this.props;
    const {
      width,
      href,
      height,
      hashtag,
      quote,
      mobileIframe,
      display,
      appId,
      redirectURI,
    } = this.props;

    return (
      <Share
        href={href}
        width={width}
        height={height}
        hashtag={hashtag}
        quote={quote}
        mobileIframe={mobileIframe}
        display={display}
        appId={appId}
        redirectURI={redirectURI}
      >
        <button
          type="button"
          className={className}
        >
          {icon ? <i className={iconClassName} /> : null}
          {children}
        </button>
      </Share>
    );
  }
}
