import React, { PropTypes } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default class Page extends Parser {
  static contextTypes = {
    ...Parser.contextTypes,
  };

  static propTypes = {
    ...Parser.propTypes,
    href: PropTypes.string.isRequired,
    tabs: PropTypes.string,
    hideCover: PropTypes.bool,
    height: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
    showFacepile: PropTypes.bool,
    hideCTA: PropTypes.bool,
    smallHeader: PropTypes.bool,
    adaptContainerWidth: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    width: 340,
    height: 500,
    tabs: 'timeline',
    hideCover: false,
    showFacepile: true,
    hideCTA: false,
    smallHeader: false,
    adaptContainerWidth: true,
  };

  renderComponent() {
    const {
      style,
      href = getCurrentHref(),
      tabs,
      hideCover,
      width,
      height,
      showFacepile,
      hideCTA,
      smallHeader,
      adaptContainerWidth,
      children,
    } = this.props;

    const appID = this.context.facebook && this.context.facebook.props.appID;

    return (
      <div
        className="fb-page"
        style={style}
        data-appID={appID}
        data-tabs={tabs}
        data-hide-cover={hideCover}
        data-show-facepile={showFacepile}
        data-hide-cta={hideCTA}
        data-href={href}
        data-small-header={smallHeader}
        data-adapt-container-width={adaptContainerWidth}
        data-height={height}
        data-width={width}
      >
        {children}
      </div>
    );
  }
}
