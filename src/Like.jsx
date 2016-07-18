import React, { PropTypes } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default class Like extends Parser {
  static propTypes = {
    ...Parser.propTypes,
    href: PropTypes.string,
    layout: PropTypes.string.isRequired,
    showFaces: PropTypes.bool.isRequired,
    colorScheme: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    share: PropTypes.bool.isRequired,
    children: PropTypes.node,
    width: PropTypes.number,
    kidDirectedSite: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    ...Parser.contextTypes,
  };

  static defaultProps = {
    layout: 'standard', // standard, button_count, button or box_count
    showFaces: false,
    colorScheme: 'light', // dark
    action: 'like', // recommend
    share: false,
    kidDirectedSite: false,
  };

  renderComponent() {
    const {
      href = getCurrentHref(),
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
    );
  }
}
