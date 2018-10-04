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
    <Share {...rest}>
      {({ loading, handleProcess }) => (
        <button
          type="button"
          disabled={loading}
          className={className}
          onClick={handleProcess}
        >
          {children}
        </button>
      )}
    </Share>
  );
}

ShareButton.defaultProps = {
  ...Share.defaultProps,
  className: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true,
};
