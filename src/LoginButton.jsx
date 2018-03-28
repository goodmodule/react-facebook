// @flow
import type { Node } from 'react';
import React from 'react';
import Spinner from 'react-spinner-children';
import Login from './Login';

type Props = Login & {
  spinnerConfig: Object,
  children?: Node,
  className?: string,
  buttonClassName?: string,
  iconClassName?: string,
  icon?: boolean,
  spinnerClassName?: string,
  spinner?: bool,
};

export default function LoginButton(props: Props) {
  const {
    children,
    buttonClassName,
    iconClassName,
    icon,
    spinner,
    spinnerClassName,
    ...rest
  } = props;

  return (
    <Login
      {...rest}
      render={({ isWorking, isLoading, onClick }) => (
        <button
          type="button"
          className={buttonClassName}
          onClick={onClick}
          disabled={isWorking || isLoading}
        >
          {!!icon && <i className={iconClassName} />}
          {children}
          {!!spinner && (isWorking || isLoading) && (
            <Spinner
              config={this.props.spinnerConfig}
              className={spinnerClassName}
            />
          )}
        </button>
      )}
    />
  );
}

LoginButton.defaultProps = {
  ...Login.defaultProps,
  spinnerConfig: {},
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  spinner: true,
  icon: true,
};
