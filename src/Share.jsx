import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import Provider from './FacebookProvider';
import getCurrentHref from './utils/getCurrentHref';

export default class Share extends Component {
  static contextTypes = {
    ...Provider.childContextTypes,
  };

  static propTypes = {
    href: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node,
    hashtag: PropTypes.string,
    quote: PropTypes.string,
    mobileIframe: PropTypes.bool,
    display: PropTypes.string.isRequired,
    appId: PropTypes.string,
    redirectURI: PropTypes.string,
    render: PropTypes.func,
    component: PropTypes.node,
  };

  static defaultProps = {
    href: undefined,
    children: undefined,
    hashtag: undefined,
    quote: undefined,
    mobileIframe: undefined,
    display: 'popup',
    width: 626,
    height: 436,
    buttonClassName: 'btn btn-lg',
    iconClassName: 'fa fa-facebook pull-left',
    icon: true,
    appId: undefined,
    redirectURI: undefined,
    render: undefined,
    component: undefined,
  };

  getSharerHref() {
    const { facebook } = this.context;
    const {
      href = getCurrentHref(),
      display,
      appId = facebook.props.appID,
      hashtag,
      redirectURI,
      quote,
      mobileIframe,
    } = this.props;

    return '//www.facebook.com/dialog/share?' + qs.stringify({
      href,
      display,
      app_id: appId,
      hashtag,
      redirect_uri: redirectURI,
      quote,
      mobile_iframe: mobileIframe,
    });
  }

  onClick = (evn) => {
    evn.preventDefault();
    evn.stopPropagation();

    const href = this.getSharerHref();
    const { width, height } = this.props;

    const halfWidth = Math.floor(width / 2);
    const halfHeight = Math.floor(height / 2);

    const left = Math.floor((window.innerWidth / 2) - halfWidth);
    const top = Math.floor((window.innerHeight / 2) - halfHeight);

    const params = `status=0, width=${width}, height=${height}, top=${top}, left=${left}, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0`;

    window.open(href, 'sharer', params);

    const { children } = this.props;
    if (children && children.props && children.props.onClick) {
      children.props.onClick(evn);
    }
  }

  render() {
    const { children, render, component: Component } = this.props;

    if (render) {
      return render({
        onClick: this.onClick,
      });
    }

    if (Component) {
      return (
        <Component onClick={this.onClick} />
      );
    }

    return cloneElement(children, {
      onClick: this.onClick,
    });
  }
}
