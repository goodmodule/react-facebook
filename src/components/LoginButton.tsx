import { type ReactNode, type ComponentType } from 'react';
import useLogin, { LoginOptions } from '../hooks/useLogin';

export type LoginButton = {
  children?: ReactNode;
  options: LoginOptions;
  asChild?: ComponentType | keyof JSX.IntrinsicElements;
  disabled?: boolean;
};

export default function LoginButton(props: LoginButton) {
  const {
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
      onClick={handleLogin}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </AsChild>
  );
}
