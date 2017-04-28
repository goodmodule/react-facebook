import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import canUseDOM from 'can-use-dom';
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
    popup: PropTypes.bool,
    onResponse: PropTypes.func,
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
    popup: false,
    onResponse: undefined,
  };

  componentDidMount() {
    const { popup } = this.props;
    if (canUseDOM && !popup) {
      this.context.facebook.init();
    }
  }

  onClick = async (evn) => {
    evn.preventDefault();
    evn.stopPropagation();

    const { popup } = this.props;
    if (popup) {
      return this.openPopup(evn);
    }

    const { facebook } = this.context;
    const {
      href = getCurrentHref(),
      display,
      appId = facebook.props.appId,
      hashtag,
      redirectURI,
      quote,
      mobileIframe,
    } = this.props;

    const fb = await facebook.init();
    const response = await fb.ui({
      method: 'share',
      href,
      display,
      app_id: appId,
      hashtag,
      redirect_uri: redirectURI,
      quote,
      mobile_iframe: mobileIframe,
    });

    const { children, onResponse } = this.props;
    if (children && children.props && children.props.onClick) {
      children.props.onClick(evn);
    }

    if (onResponse) {
      onResponse(response);
    }

    return response;
  }

  openPopup(evn) {
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

  getSharerHref() {
    const { facebook } = this.context;
    const {
      href = getCurrentHref(),
      display,
      appId = facebook.props.appId,
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
