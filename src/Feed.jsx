import React, { Component, PropTypes } from 'react';
import { autobind } from 'core-decorators';
import qs from 'qs';

import Provider from './FacebookProvider';
import getCurrentHref from './utils/getCurrentHref';

export default class Feed extends Component {
  static contextTypes = {
    ...Provider.childContextTypes,
  };

  static propTypes = {
    children: PropTypes.node,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    appId: PropTypes.string,
    redirectURI: PropTypes.string,
    display: PropTypes.string.isRequired,
    from: PropTypes.string,
    to: PropTypes.string,
    link: PropTypes.string,
    picture: PropTypes.string,
    source: PropTypes.string,
    name: PropTypes.string,
    caption: PropTypes.string,
    description: PropTypes.string,
    ref: PropTypes.string,
  };

  static defaultProps = {
    display: 'popup',
    width: 626,
    height: 436,
    buttonClassName: 'btn btn-lg',
    iconClassName: 'fa fa-facebook pull-left',
    icon: true,
  };

  @autobind
  onClick(evn) {
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

  getSharerHref() {
    const { facebook } = this.context;
    const {
      appId = facebook.props.appID,
      redirectURI,
      display,
      from,
      to,
      link = getCurrentHref(),
      picture,
      source,
      name,
      caption,
      description,
      ref,
    } = this.props;

    const query = qs.stringify({
      app_id: appId,
      redirect_uri: redirectURI,
      display,
      from,
      to,
      link,
      picture,
      source,
      name,
      caption,
      description,
      ref,
    });

    return `//www.facebook.com/dialog/feed?${query}`;
  }

  render() {
    const { children } = this.props;

    return (
      React.cloneElement(children, { onClick: this.onClick })
    );
  }
}
