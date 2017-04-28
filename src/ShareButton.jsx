import React from 'react';
import PropTypes from 'prop-types';
import Share from './Share';

export default function ShareButton(props) {
  const {
    className,
    iconClassName,
    icon,
    children,
    ...rest
  } = props;

  return (
    <Share {...rest}>
      <button
        type="button"
        className={className}
      >
        {!!icon && <i className={iconClassName} />}
        {children}
      </button>
    </Share>
  );
}

ShareButton.propTypes = {
  ...Share.propTypes,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  icon: PropTypes.bool,
};

ShareButton.defaultProps = {
  ...Share.defaultProps,
  className: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true,
};
