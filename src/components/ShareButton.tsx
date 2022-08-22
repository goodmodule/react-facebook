import { type ReactNode, type ComponentType } from 'react';
import useShare, { ShareOptions } from '../hooks/useShare';

export type LoginButton = {
  children?: ReactNode;
  options: ShareOptions;
  asChild?: ComponentType | keyof JSX.IntrinsicElements;
  disabled?: boolean;
};

export default function ShareButton(props: LoginButton) {
  const {
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
      onClick={handleShare}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </AsChild>
  );
}
