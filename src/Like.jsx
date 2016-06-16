import React, { Component, PropTypes } from 'react';
import FacebookProvider from './FacebookProvider';

export default class Like extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
    showFaces: PropTypes.bool.isRequired,
    colorScheme: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    share: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  static contextTypes = {
    ...FacebookProvider.childContextTypes,
  };

  static defaultProps = {
    href: 'http://www.facebook.com',
    layout: 'standard', // standard, button_count, button or box_count
    showFaces: false,
    colorScheme: 'light', // dark
    action: 'like', // recommend
    share: true,
  };

  componentDidMount() {
    this.context.facebook.whenReady((err, facebook) => {
      if (err) {
        return;
      }

      facebook.parse(this.refs.like, () => {});
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const content = `
      <fb:like
        href=${this.props.href}
        layout=${this.props.layout}
        color-scheme=${this.props.colorScheme}
        action=${this.props.action}
        show-faces=${this.props.showFaces}
        share=${this.props.share}></fb:like>
    `;

    return (
      <div className={this.props.className} ref="like" dangerouslySetInnerHTML={{__html: content}} />
    );
  }
}
