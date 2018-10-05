// @flow
import React from 'react';
import Share from './Share';

type Props = Share & {
  className?: string,
};

export default function ShareButton(props: Props) {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <Share {...rest}>
      {({ loading, handleClick }) => (
        <button
          type="button"
          disabled={loading}
          className={className}
          onClick={handleClick}
        >
          {children}
        </button>
      )}
    </Share>
  );
}

ShareButton.defaultProps = {
  ...Share.defaultProps,
  className: undefined,
};
