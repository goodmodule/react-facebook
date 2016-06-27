import React, { Component, PropTypes } from 'react';

export default class Share extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    buttonClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    icon: PropTypes.bool,
  };

  static defaultProps = {
    href: 'http://www.facebook.com',
    target: '_blank',
    text: '',
    width: 626,
    height: 436,
    buttonClassName: 'btn btn-lg',
    iconClassName: 'fa fa-facebook pull-left',
    icon: true,
  };

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  getSharerHref() {
    const { href, text } = this.props;
    const url = `//www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}&display=popup&ref=plugin&src=share_button`;
    if (!text) {
      return url;
    }

    return `url&t=${encodeURIComponent(text)}`;
  }

  handleClick(evn) {
    evn.preventDefault();
    evn.stopPropagation();

    const href = this.getSharerHref();
    const { width, height } = this.props;

    const halfWidth = Math.floor(width / 2);
    const halfHeight = Math.floor(height / 2);

    const left = Math.floor(window.innerWidth / 2 - halfWidth);
    const top = Math.floor(window.innerHeight / 2 - halfHeight);

    const params = `status=0, width=${width}, height=${height}, top=${top}, left=${left}, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0`;

    window.open(href, 'sharer', params);
  }

  render() {
    const { className, buttonClassName, iconClassName, icon } = this.props;

    return (
      <div className={className}>
        <button
          type="button"
          className={buttonClassName}
          onClick={this.handleClick}
        >
          {icon ? <i className={iconClassName} /> : null}
          {this.props.children}
        </button>
      </div>
    );
  }
}
