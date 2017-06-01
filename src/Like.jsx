import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import LikeSize from './constants/LikeSize';
import LikeLayout from './constants/LikeLayout';
import ColorScheme from './constants/ColorScheme';
import LikeAction from './constants/LikeAction';

export default function Like(props) {
  const {
    className,
    href = getCurrentHref(),
    layout,
    colorScheme,
    action,
    showFaces,
    share,
    children,
    width,
    size,
    kidDirectedSite,
    referral,
    onParse,
  } = props;

  return (
    <Parser className={className} onParse={onParse}>
      <div
        className="fb-like"
        data-ref={referral}
        data-href={href}
        data-layout={layout}
        data-colorscheme={colorScheme}
        data-action={action}
        data-show-faces={showFaces}
        data-share={share}
        data-width={width}
        data-size={size}
        data-kid-directed-site={kidDirectedSite}
      >
        {children}
      </div>
    </Parser>
  );
}

Like.propTypes = {
  className: PropTypes.string,
  referral: PropTypes.string,
  href: PropTypes.string,
  layout: PropTypes.string.isRequired,
  showFaces: PropTypes.bool.isRequired,
  colorScheme: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  share: PropTypes.bool.isRequired,
  children: PropTypes.node,
  width: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  size: PropTypes.string,
  kidDirectedSite: PropTypes.bool.isRequired,
  onParse: PropTypes.func,
};

Like.defaultProps = {
  layout: LikeLayout.STANDARD,
  showFaces: false,
  colorScheme: ColorScheme.LIGHT,
  action: LikeAction.LIKE,
  share: false,
  size: LikeSize.SMALL,
  kidDirectedSite: false,
  children: undefined,
  className: undefined,
  href: undefined,
  referral: undefined,
  width: undefined,
  onParse: undefined,
};
