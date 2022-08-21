import React, { type ReactNode, type ReactElement } from 'react';
import useShare, { ShareOptions } from '../hooks/useShare';

export type LoginButton = HTMLButtonElement & {
  children?: ReactNode;
  options: ShareOptions;
  asChild?: ReactElement;
};

export default function ShareButton(props: LoginButton) {
  const {
    type = 'button',
    children,
    options,
    asChild: AsChild = 'button',
    disabled,
    ...rest
  } = props;

  const { isLoading, share } = useShare();

  function handleShare() {
    if (isLoading) {
      return;
    }

    share(options);
  }

  return (
    <AsChild
      type={type}
      onClick={handleShare}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </AsChild>
  );
}
