import React, { ReactNode, ComponentType } from 'react';
import type { ShareOptions } from '../hooks/useShare';
import useShare from '../hooks/useShare';

export type LoginButton = ShareOptions & {
  children?: ReactNode;
  asChild?: ComponentType | keyof JSX.IntrinsicElements;
  disabled?: boolean;
};

export default function ShareButton(props: LoginButton) {
  const {
    children,
    asChild: AsChild = 'button',
    disabled,
    href,
    display,
    hashtag,
    redirectUri,
    ...rest
  } = props;

  const { isLoading, share } = useShare();

  function handleShare() {
    if (isLoading) {
      return;
    }

    share({
      href,
      display,
      hashtag,
      redirectUri,
    });
  }

  return (
    <AsChild
      onClick={handleShare}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </AsChild>
  );
}
