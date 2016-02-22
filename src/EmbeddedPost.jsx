import React, { Component, PropTypes } from 'react';
import Facebook from './FacebookProvider';

export default class EmbeddedPost extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    className: PropTypes.string,
  };

  static contextTypes = Facebook.childContextTypes;

  static defaultProps = {
    href: 'http://www.facebook.com',
    width: 500, // 350 - 750
  };

  componentDidMount() {
    this.context.facebook.whenReady((err, facebook) => {
      if (err) {
        return;
      }

      facebook.parse(this.refs.fbContent, () => {});
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { href, width, className } = this.props;

    const content = `
      <fb:post
        href=${href}
        width=${width}>
      </fb:post>
    `;

    return (
      <div className={className} ref="fbContent" dangerouslySetInnerHTML={{__html: content}} />
    );
  }
}
