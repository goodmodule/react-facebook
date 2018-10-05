// @flow
import type { Node } from 'react';
import React from 'react';
import Spinner from 'react-spinner-children';
import Login from './Login';

type Props = Login & {
  children?: Node,
  className?: string,
  spinnerConfig?: Object,
  spinner?: boolean,
};

export default function LoginButton(props: Props) {
  const {
    children,
    className,
    spinner,
    spinnerConfig,
    ...rest
  } = props;

  return (
    <Login {...rest}>
      {({ loading, handleClick }) => (
        <button
          type="button"
          className={className}
          onClick={handleClick}
          disabled={loading}
        >
          {children}
          {spinner && loading && (
            <Spinner
              config={spinnerConfig}
            />
          )}
        </button>
      )}
    </Login>
  );
}

LoginButton.defaultProps = {
  ...Login.defaultProps,
  className: undefined,
  spinnerConfig: {},
  spinner: true,
};
