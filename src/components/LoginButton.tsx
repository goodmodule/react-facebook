import React, { type ReactNode, type ReactElement } from 'react';
import useLogin, { LoginOptions } from '../hooks/useLogin';

export type LoginButton = HTMLButtonElement & {
  children?: ReactNode;
  options: LoginOptions;
  asChild?: ReactElement;
};

export default function LoginButton(props: LoginButton) {
  const {
    type = 'button',
    children,
    options,
    asChild: AsChild = 'button',
    disabled,
    ...rest
  } = props;

  const { isLoading, login } = useLogin();

  function handleLogin() {
    if (isLoading) {
      return;
    }

    login(options);
  }

  return (
    <AsChild
      type={type}
      onClick={handleLogin}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </AsChild>
  );
}
