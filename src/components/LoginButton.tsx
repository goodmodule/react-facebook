import React, { ReactNode, ComponentType } from 'react';
import useLogin from '../hooks/useLogin';
import type { LoginOptions } from '../hooks/useLogin';
import type { LoginResponse } from '../utils/Facebook';

export type LoginButton = LoginOptions & {
  children?: ReactNode;
  asChild?: ComponentType | keyof JSX.IntrinsicElements;
  disabled?: boolean;
  onError?: (error: Error) => void;
  onSuccess?: (response: LoginResponse) => void;
};

export default function LoginButton(props: LoginButton) {
  const {
    children,
    asChild: AsChild = 'button',
    disabled,
    scope,
    returnScopes,
    authType,
    rerequest,
    reauthorize,
    onError,
    onSuccess,
    ...rest
  } = props;

  const { isLoading, login } = useLogin();

  async function handleLogin() {
    try {
      if (isLoading) {
        return;
      }
  
      const response = await login({
        scope,
        returnScopes,
        authType,
        rerequest,
        reauthorize,
      });

      onSuccess?.(response);
    } catch (error) {
      onError?.(error as Error);
    }
  }

  return (
    <AsChild
      onClick={handleLogin}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </AsChild>
  );
}
