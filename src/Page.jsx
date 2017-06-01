import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default function Page(props, context) {
  const {
    className,
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
    onParse,
  } = props;

  const appId = context.facebook && context.facebook.props.appId;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-page"
        style={style}
        data-appID={appId}
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
    </Parser>
  );
}

Page.propTypes = {
  className: PropTypes.string,
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
  onParse: PropTypes.func,
};

Page.defaultProps = {
  width: 340,
  height: 500,
  tabs: 'timeline',
  hideCover: false,
  showFacepile: true,
  hideCTA: false,
  smallHeader: false,
  adaptContainerWidth: true,
  children: undefined,
  className: undefined,
  onParse: undefined,
};

Page.contextTypes = {
  facebook: PropTypes.object.isRequired,
};
