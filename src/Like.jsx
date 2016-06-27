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
    children: PropTypes.node,
    width: PropTypes.number,
    kidDirectedSite: PropTypes.bool.isRequired,
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
    share: false,
    kidDirectedSite: false,
  };

  componentDidMount() {
    this.context.facebook.whenReady((err, facebook) => {
      if (err) {
        return;
      }

      facebook.parse(this.refs.container, () => {});
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      className,
      href,
      layout,
      colorScheme,
      action,
      showFaces,
      share,
      children,
      width,
      kidDirectedSite,
    } = this.props;

    return (
      <div className={className} ref="container">
        <div
          className="fb-like"
          data-href={href}
          data-layout={layout}
          data-colorscheme={colorScheme}
          data-action={action}
          data-show-faces={showFaces}
          data-share={share}
          data-width={width}
          data-kid-directed-site={kidDirectedSite}
        >
          {children}
        </div>
      </div>
    );
  }
}
