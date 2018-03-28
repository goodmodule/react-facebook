// @flow
import React from 'react';
import Share from './Share';

type Props = Share & {
  className?: string,
  iconClassName?: string,
  icon?: boolean,
};

export default function ShareButton(props: Props) {
  const {
    className,
    iconClassName,
    icon,
    children,
    ...rest
  } = props;

  return (
    <Share
      {...rest}
      render={({ isReady, onClick }) => (
        <button
          type="button"
          disabled={!isReady}
          className={className}
          onClick={onClick}
        >
          {!!icon && <i className={iconClassName} />}
          {children}
        </button>
      )}
    />
  );
}

ShareButton.defaultProps = {
  ...Share.defaultProps,
  className: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true,
};
